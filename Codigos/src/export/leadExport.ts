import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

import type { Lead, ScraperInput } from "@/scraper/types";

const outputDir = path.join(process.cwd(), "data", "leads");

function csvValue(value: string) {
  return `"${value.replaceAll('"', '""')}"`;
}

export function leadsToCsv(leads: Lead[]) {
  const headers = ["nome", "categoria", "regiao_endereco", "link_google_maps"];
  const rows = leads.map((lead) =>
    [lead.name, lead.category, lead.region, lead.mapsUrl].map(csvValue).join(","),
  );

  return [headers.join(","), ...rows].join("\n");
}

export async function saveLeadFiles(input: ScraperInput, leads: Lead[]) {
  await mkdir(outputDir, { recursive: true });

  const safeTerm = `${input.businessType}-${input.region}`
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-zA-Z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .toLowerCase()
    .slice(0, 80);
  const stamp = new Date().toISOString().replace(/[:.]/g, "-");
  const baseName = `${stamp}-${safeTerm || "leads"}`;
  const jsonPath = path.join(outputDir, `${baseName}.json`);
  const csvPath = path.join(outputDir, `${baseName}.csv`);

  const payload = {
    input,
    total: leads.length,
    exportedAt: new Date().toISOString(),
    leads,
  };

  await Promise.all([
    writeFile(jsonPath, JSON.stringify(payload, null, 2), "utf8"),
    writeFile(csvPath, leadsToCsv(leads), "utf8"),
  ]);

  return { jsonPath, csvPath };
}
