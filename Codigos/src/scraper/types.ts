export type Lead = {
  id: string;
  name: string;
  category: string;
  region: string;
  mapsUrl: string;
};

export type ScraperStatus =
  | "idle"
  | "running"
  | "stopping"
  | "completed"
  | "stopped"
  | "captcha_detected"
  | "timeout"
  | "no_results"
  | "selector_changed"
  | "error";

export type ScraperInput = {
  businessType: string;
  region: string;
  quantity: number;
};

export type ScraperProgress = {
  status: ScraperStatus;
  message: string;
  results: Lead[];
  requestedQuantity: number;
  startedAt?: string;
  finishedAt?: string;
  jsonPath?: string;
  csvPath?: string;
  error?: string;
};

export type ScraperCallbacks = {
  shouldStop: () => boolean;
  onLead: (lead: Lead) => Promise<void> | void;
  onStatus: (status: ScraperStatus, message: string) => Promise<void> | void;
};
