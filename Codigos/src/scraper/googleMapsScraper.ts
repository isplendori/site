import { chromium, type Browser, type BrowserContext, type Locator, type Page } from "playwright";

import type { Lead, ScraperCallbacks, ScraperInput, ScraperStatus } from "./types";

const MAX_RESULTS_PER_SESSION = 120;
const MAX_SCROLL_ATTEMPTS = 90;
const MAPS_URL = "https://www.google.com/maps";

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
const randomDelay = (min = 650, max = 1850) => delay(Math.floor(min + Math.random() * (max - min)));

function normalizeText(value: string) {
  return value.replace(/\s+/g, " ").trim();
}

function buildLeadId(name: string, mapsUrl: string) {
  return Buffer.from(`${name}|${mapsUrl}`).toString("base64url");
}

async function detectCaptcha(page: Page) {
  const bodyText = normalizeText((await page.locator("body").textContent().catch(() => "")) || "").toLowerCase();
  const currentUrl = page.url().toLowerCase();

  return (
    currentUrl.includes("/sorry/") ||
    bodyText.includes("unusual traffic") ||
    bodyText.includes("tráfego incomum") ||
    bodyText.includes("não sou um robô") ||
    bodyText.includes("not a robot") ||
    (await page.locator('iframe[src*="recaptcha"], iframe[title*="reCAPTCHA"]').count().catch(() => 0)) > 0
  );
}

async function findResultsFeed(page: Page) {
  const candidates = [
    page.locator('[role="feed"]').first(),
    page.locator('div[aria-label*="Results for"]').first(),
    page.locator('div[aria-label*="Resultados para"]').first(),
    page.locator('div[aria-label*="resultado"]').first(),
  ];

  for (const candidate of candidates) {
    if ((await candidate.count()) > 0) {
      return candidate;
    }
  }

  return null;
}

async function getResultCards(page: Page) {
  const selectors = [
    'div[role="article"]',
    'a[href*="/maps/place/"]',
    'div[aria-label][jsaction*="mouseover"]',
  ];

  for (const selector of selectors) {
    const locator = page.locator(selector);
    const count = await locator.count().catch(() => 0);
    if (count > 0) {
      return locator;
    }
  }

  return page.locator("div[role='article']");
}

async function extractFromCard(card: Locator): Promise<Lead | null> {
  const selfHref = await card.getAttribute("href").catch(() => null);
  const placeLink = card.locator('a[href*="/maps/place/"]').first();
  const rawHref = selfHref?.includes("/maps/place/") ? selfHref : await placeLink.getAttribute("href").catch(() => null);
  const mapsUrl = rawHref?.startsWith("http") ? rawHref : rawHref ? `https://www.google.com${rawHref}` : "";
  const selfAria = await card.getAttribute("aria-label").catch(() => "");
  const linkAria = await placeLink.getAttribute("aria-label").catch(() => "");
  const ariaName = normalizeText(selfAria || linkAria || "");
  const lines = normalizeText((await card.innerText({ timeout: 1500 }).catch(() => "")) || "")
    .split(/\s{2,}|\n/)
    .map(normalizeText)
    .filter(Boolean);

  const name = ariaName || lines[0] || "";
  if (!name || !mapsUrl || mapsUrl.includes("/maps/search/")) {
    return null;
  }

  const detailLines = lines.filter((line) => line !== name && !/^\d[.,]?\d?$/.test(line));
  const category = detailLines.find((line) => !line.match(/\b(aberto|fechado|open|closed|horario|horário)\b/i)) || "";
  const region =
    detailLines.find((line) => /\d|rua|avenida|av\.|r\.|bairro|street|road|avenue/i.test(line)) ||
    detailLines.find((line) => line !== category) ||
    "";

  return {
    id: buildLeadId(name, mapsUrl),
    name,
    category,
    region,
    mapsUrl,
  };
}

async function extractVisibleLeads(page: Page, knownIds: Set<string>) {
  const cards = await getResultCards(page);
  const totalCards = Math.min(await cards.count(), 60);
  const leads: Lead[] = [];

  for (let index = 0; index < totalCards; index += 1) {
    const lead = await extractFromCard(cards.nth(index));
    if (lead && !knownIds.has(lead.id)) {
      knownIds.add(lead.id);
      leads.push(lead);
    }
  }

  return leads;
}

async function gradualScroll(page: Page, feed: Locator | null) {
  const scrollTarget = feed ?? page.locator("body");
  const steps = 4 + Math.floor(Math.random() * 4);

  for (let step = 0; step < steps; step += 1) {
    await scrollTarget.evaluate((element) => {
      element.scrollBy({
        top: 260 + Math.floor(Math.random() * 280),
        behavior: "smooth",
      });
    });
    await randomDelay(280, 760);
  }
}

async function acceptConsentIfPresent(page: Page) {
  const buttons = [
    page.getByRole("button", { name: /accept all|aceitar tudo|concordo|i agree/i }).first(),
    page.locator('button:has-text("Aceitar tudo")').first(),
    page.locator('button:has-text("Accept all")').first(),
  ];

  for (const button of buttons) {
    if ((await button.count().catch(() => 0)) > 0) {
      await button.click({ timeout: 2500 }).catch(() => undefined);
      await randomDelay();
      return;
    }
  }
}

async function searchMaps(page: Page, input: ScraperInput) {
  const query = `${input.businessType} em ${input.region}`;
  await page.goto(MAPS_URL, { waitUntil: "domcontentloaded", timeout: 45_000 });
  await acceptConsentIfPresent(page);

  const searchBox = page.locator("#searchboxinput").first();
  await searchBox.waitFor({ state: "visible", timeout: 25_000 });
  await searchBox.fill("");
  await randomDelay(300, 900);
  await searchBox.pressSequentially(query, { delay: 35 + Math.floor(Math.random() * 80) });
  await randomDelay(400, 1100);
  await page.keyboard.press("Enter");
  await page.waitForLoadState("domcontentloaded", { timeout: 30_000 }).catch(() => undefined);
  await randomDelay(1800, 3200);
}

export async function scrapeGoogleMaps(input: ScraperInput, callbacks: ScraperCallbacks) {
  const requestedQuantity = Math.min(Math.max(input.quantity, 1), MAX_RESULTS_PER_SESSION);
  let browser: Browser | null = null;
  let context: BrowserContext | null = null;
  let page: Page | null = null;
  const knownIds = new Set<string>();

  const setStatus = async (status: ScraperStatus, message: string) => callbacks.onStatus(status, message);

  try {
    await setStatus("running", "Abrindo Google Maps em navegador visivel.");
    browser = await chromium.launch({
      headless: false,
      args: ["--disable-blink-features=AutomationControlled"],
    });
    context = await browser.newContext({
      viewport: { width: 1366, height: 820 },
      locale: "pt-BR",
      timezoneId: "America/Sao_Paulo",
    });
    page = await context.newPage();
    page.setDefaultTimeout(18_000);

    await searchMaps(page, { ...input, quantity: requestedQuantity });

    if (await detectCaptcha(page)) {
      await setStatus("captcha_detected", "Captcha detectado. Resolva manualmente ou encerre a sessao.");
      return;
    }

    const feed = await findResultsFeed(page);
    if (!feed) {
      const hasNoResults = /sem resultados|no results|não encontramos/i.test(await page.locator("body").innerText().catch(() => ""));
      await setStatus(hasNoResults ? "no_results" : "selector_changed", hasNoResults ? "Nenhum resultado encontrado." : "A lista de resultados nao foi localizada.");
      return;
    }

    let stagnantScrolls = 0;

    for (let attempt = 0; attempt < MAX_SCROLL_ATTEMPTS && knownIds.size < requestedQuantity; attempt += 1) {
      if (callbacks.shouldStop()) {
        await setStatus("stopped", "Coleta interrompida pelo usuario.");
        return;
      }

      if (await detectCaptcha(page)) {
        await setStatus("captcha_detected", "Captcha detectado durante a coleta.");
        return;
      }

      const beforeCount = knownIds.size;
      const leads = await extractVisibleLeads(page, knownIds);
      for (const lead of leads.slice(0, requestedQuantity - beforeCount)) {
        await callbacks.onLead(lead);
      }

      if (knownIds.size >= requestedQuantity) {
        break;
      }

      stagnantScrolls = knownIds.size === beforeCount ? stagnantScrolls + 1 : 0;
      if (stagnantScrolls >= 10) {
        await setStatus(knownIds.size > 0 ? "completed" : "no_results", knownIds.size > 0 ? "Fim aparente da lista de resultados." : "Nenhum resultado foi capturado.");
        return;
      }

      await setStatus("running", `Coletando resultados: ${knownIds.size}/${requestedQuantity}.`);
      await gradualScroll(page, feed);
      await randomDelay(700, 1800);
    }

    await setStatus("completed", `Coleta concluida com ${knownIds.size} resultado(s).`);
  } catch (error) {
    const message = error instanceof Error ? error.message : "Erro desconhecido.";
    const status: ScraperStatus = /timeout/i.test(message) ? "timeout" : "error";
    await setStatus(status, status === "timeout" ? "Tempo limite atingido durante a coleta." : message);
  } finally {
    await page?.close().catch(() => undefined);
    await context?.close().catch(() => undefined);
    await browser?.close().catch(() => undefined);
  }
}
