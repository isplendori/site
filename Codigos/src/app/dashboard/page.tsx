import type { Metadata } from "next";

import DashboardPageClient from "./DashboardPageClient";

export const metadata: Metadata = {
  title: "Dashboard — Splendori",
  description: "Dashboard de gerenciamento dos projetos atribuídos.",
};

export default function DashboardPage() {
  return <DashboardPageClient />;
}
