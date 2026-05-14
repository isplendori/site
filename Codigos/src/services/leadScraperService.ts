import { saveLeadFiles } from "@/export/leadExport";
import { scrapeGoogleMaps } from "@/scraper/googleMapsScraper";
import type { Lead, ScraperInput, ScraperProgress, ScraperStatus } from "@/scraper/types";

const MAX_RESULTS_PER_SESSION = 120;

type LeadScraperStore = {
  progress: ScraperProgress;
  stopRequested: boolean;
  runningPromise: Promise<void> | null;
};

const defaultProgress: ScraperProgress = {
  status: "idle",
  message: "Aguardando nova coleta.",
  results: [],
  requestedQuantity: 0,
};

const globalForScraper = globalThis as typeof globalThis & {
  leadScraperStore?: LeadScraperStore;
};

const store =
  globalForScraper.leadScraperStore ??
  (globalForScraper.leadScraperStore = {
    progress: defaultProgress,
    stopRequested: false,
    runningPromise: null,
  });

function sanitizeInput(input: ScraperInput): ScraperInput {
  const businessType = input.businessType.trim();
  const region = input.region.trim();
  const quantity = Math.min(Math.max(Number(input.quantity) || 1, 1), MAX_RESULTS_PER_SESSION);

  if (!businessType || !region) {
    throw new Error("Informe ramo e cidade/regiao.");
  }

  return { businessType, region, quantity };
}

async function persistCurrentResults(input: ScraperInput) {
  const paths = await saveLeadFiles(input, store.progress.results);
  store.progress = {
    ...store.progress,
    ...paths,
  };
}

function setProgress(status: ScraperStatus, message: string, extra?: Partial<ScraperProgress>) {
  store.progress = {
    ...store.progress,
    status,
    message,
    ...extra,
  };
}

export const leadScraperService = {
  getStatus() {
    return store.progress;
  },

  async start(rawInput: ScraperInput) {
    if (store.runningPromise) {
      throw new Error("Ja existe uma coleta em andamento.");
    }

    const input = sanitizeInput(rawInput);
    store.stopRequested = false;
    store.progress = {
      status: "running",
      message: "Preparando navegador.",
      results: [],
      requestedQuantity: input.quantity,
      startedAt: new Date().toISOString(),
    };

    store.runningPromise = scrapeGoogleMaps(input, {
      shouldStop: () => store.stopRequested,
      onLead: async (lead: Lead) => {
        if (!store.progress.results.some((item) => item.id === lead.id)) {
          store.progress = {
            ...store.progress,
            results: [...store.progress.results, lead],
            message: `Resultado capturado: ${store.progress.results.length + 1}/${input.quantity}.`,
          };
          await persistCurrentResults(input);
        }
      },
      onStatus: async (status, message) => {
        setProgress(status, message);
        if (status !== "running" && status !== "stopping") {
          await persistCurrentResults(input);
        }
      },
    }).finally(() => {
      store.runningPromise = null;
      store.progress = {
        ...store.progress,
        finishedAt: new Date().toISOString(),
      };
      store.stopRequested = false;
    });

    return store.progress;
  },

  async stop() {
    if (!store.runningPromise) {
      return store.progress;
    }

    store.stopRequested = true;
    setProgress("stopping", "Encerrando coleta apos a acao atual.");
    return store.progress;
  },
};
