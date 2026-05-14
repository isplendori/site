"use client";

import { FormEvent, useEffect, useMemo, useState } from "react";

import type { ScraperProgress } from "@/scraper/types";

const idleProgress: ScraperProgress = {
  status: "idle",
  message: "Aguardando nova coleta.",
  results: [],
  requestedQuantity: 0,
};

const runningStatuses = new Set(["running", "stopping"]);

async function fetchStatus() {
  const response = await fetch("/api/leads/status", { cache: "no-store" });
  return (await response.json()) as ScraperProgress;
}

export function LeadDashboard() {
  const [businessType, setBusinessType] = useState("");
  const [region, setRegion] = useState("");
  const [quantity, setQuantity] = useState(30);
  const [progress, setProgress] = useState<ScraperProgress>(idleProgress);
  const [error, setError] = useState("");

  const isRunning = runningStatuses.has(progress.status);
  const completion = useMemo(() => {
    if (!progress.requestedQuantity) return 0;
    return Math.min(100, Math.round((progress.results.length / progress.requestedQuantity) * 100));
  }, [progress.requestedQuantity, progress.results.length]);

  useEffect(() => {
    let active = true;
    const load = async () => {
      try {
        const status = await fetchStatus();
        if (active) setProgress(status);
      } catch {
        if (active) setError("Nao foi possivel consultar o status.");
      }
    };

    void load();
    const timer = window.setInterval(load, isRunning ? 1200 : 2500);

    return () => {
      active = false;
      window.clearInterval(timer);
    };
  }, [isRunning]);

  async function startScraper(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");

    const response = await fetch("/api/leads/start", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ businessType, region, quantity }),
    });
    const payload = await response.json();

    if (!response.ok) {
      setError(payload.error || "Nao foi possivel iniciar.");
      return;
    }

    setProgress(payload);
  }

  async function stopScraper() {
    setError("");
    const response = await fetch("/api/leads/stop", { method: "POST" });
    setProgress(await response.json());
  }

  return (
    <main className="min-h-screen bg-[#f8fafc] text-[#111827]">
      <section className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 py-6 sm:px-6 lg:px-8">
        <header className="flex flex-col justify-between gap-4 border-b border-[#d9e1ec] pb-5 md:flex-row md:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#0f766e]">Google Maps</p>
            <h1 className="mt-2 text-3xl font-semibold text-[#0f172a] sm:text-4xl">Extrator local de leads</h1>
          </div>
          <div className="flex flex-wrap gap-2">
            <a
              className="inline-flex h-10 items-center justify-center rounded-md border border-[#cbd5e1] bg-white px-4 text-sm font-semibold text-[#0f172a] transition hover:bg-[#edf2f7]"
              href="/api/leads/export?format=csv"
            >
              Exportar CSV
            </a>
            <a
              className="inline-flex h-10 items-center justify-center rounded-md border border-[#cbd5e1] bg-white px-4 text-sm font-semibold text-[#0f172a] transition hover:bg-[#edf2f7]"
              href="/api/leads/export?format=json"
            >
              Exportar JSON
            </a>
          </div>
        </header>

        <div className="grid gap-5 lg:grid-cols-[360px_1fr]">
          <form onSubmit={startScraper} className="flex flex-col gap-4 rounded-lg border border-[#d9e1ec] bg-white p-5 shadow-sm">
            <label className="grid gap-2 text-sm font-semibold text-[#334155]">
              Ramo
              <input
                className="h-11 rounded-md border border-[#cbd5e1] px-3 text-base font-medium outline-none transition focus:border-[#0f766e] focus:ring-2 focus:ring-[#99f6e4]"
                disabled={isRunning}
                onChange={(event) => setBusinessType(event.target.value)}
                placeholder="clinica odontologica"
                required
                value={businessType}
              />
            </label>

            <label className="grid gap-2 text-sm font-semibold text-[#334155]">
              Cidade ou regiao
              <input
                className="h-11 rounded-md border border-[#cbd5e1] px-3 text-base font-medium outline-none transition focus:border-[#0f766e] focus:ring-2 focus:ring-[#99f6e4]"
                disabled={isRunning}
                onChange={(event) => setRegion(event.target.value)}
                placeholder="Sao Paulo SP"
                required
                value={region}
              />
            </label>

            <label className="grid gap-2 text-sm font-semibold text-[#334155]">
              Quantidade
              <input
                className="h-11 rounded-md border border-[#cbd5e1] px-3 text-base font-medium outline-none transition focus:border-[#0f766e] focus:ring-2 focus:ring-[#99f6e4]"
                disabled={isRunning}
                max={120}
                min={1}
                onChange={(event) => setQuantity(Number(event.target.value))}
                type="number"
                value={quantity}
              />
            </label>

            <div className="grid grid-cols-2 gap-3 pt-2">
              <button
                className="h-11 rounded-md bg-[#0f766e] px-4 text-sm font-bold text-white transition hover:bg-[#115e59] disabled:cursor-not-allowed disabled:bg-[#94a3b8]"
                disabled={isRunning}
                type="submit"
              >
                Iniciar
              </button>
              <button
                className="h-11 rounded-md border border-[#cbd5e1] bg-white px-4 text-sm font-bold text-[#0f172a] transition hover:bg-[#edf2f7] disabled:cursor-not-allowed disabled:text-[#94a3b8]"
                disabled={!isRunning}
                onClick={stopScraper}
                type="button"
              >
                Parar
              </button>
            </div>

            <div className="rounded-md bg-[#ecfeff] p-4">
              <div className="flex items-center justify-between text-sm font-semibold text-[#0f172a]">
                <span>{progress.status}</span>
                <span>{progress.results.length}/{progress.requestedQuantity || quantity}</span>
              </div>
              <div className="mt-3 h-2 overflow-hidden rounded-full bg-[#cffafe]">
                <div className="h-full rounded-full bg-[#0f766e] transition-all" style={{ width: `${completion}%` }} />
              </div>
              <p className="mt-3 text-sm leading-6 text-[#475569]">{progress.message}</p>
            </div>

            {(progress.jsonPath || progress.csvPath) && (
              <div className="rounded-md border border-[#d9e1ec] p-3 text-xs leading-5 text-[#475569]">
                {progress.jsonPath && <p>JSON: {progress.jsonPath}</p>}
                {progress.csvPath && <p>CSV: {progress.csvPath}</p>}
              </div>
            )}

            {error && <p className="rounded-md bg-[#fee2e2] p-3 text-sm font-semibold text-[#991b1b]">{error}</p>}
          </form>

          <div className="overflow-hidden rounded-lg border border-[#d9e1ec] bg-white shadow-sm">
            <div className="flex items-center justify-between border-b border-[#d9e1ec] px-5 py-4">
              <h2 className="text-lg font-semibold text-[#0f172a]">Resultados</h2>
              <span className="text-sm font-semibold text-[#64748b]">{progress.results.length} leads</span>
            </div>
            <div className="max-h-[70vh] overflow-auto">
              <table className="w-full min-w-[820px] border-collapse text-left text-sm">
                <thead className="sticky top-0 bg-[#f8fafc] text-xs uppercase tracking-[0.12em] text-[#64748b]">
                  <tr>
                    <th className="border-b border-[#d9e1ec] px-4 py-3">Nome</th>
                    <th className="border-b border-[#d9e1ec] px-4 py-3">Categoria</th>
                    <th className="border-b border-[#d9e1ec] px-4 py-3">Regiao/endereco</th>
                    <th className="border-b border-[#d9e1ec] px-4 py-3">Google Maps</th>
                  </tr>
                </thead>
                <tbody>
                  {progress.results.map((lead) => (
                    <tr className="border-b border-[#edf2f7] align-top last:border-0" key={lead.id}>
                      <td className="px-4 py-3 font-semibold text-[#0f172a]">{lead.name}</td>
                      <td className="px-4 py-3 text-[#475569]">{lead.category || "-"}</td>
                      <td className="px-4 py-3 text-[#475569]">{lead.region || "-"}</td>
                      <td className="px-4 py-3">
                        <a className="font-semibold text-[#0f766e] underline-offset-4 hover:underline" href={lead.mapsUrl} rel="noreferrer" target="_blank">
                          Abrir
                        </a>
                      </td>
                    </tr>
                  ))}
                  {progress.results.length === 0 && (
                    <tr>
                      <td className="px-4 py-12 text-center text-[#64748b]" colSpan={4}>
                        Nenhum lead capturado.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
