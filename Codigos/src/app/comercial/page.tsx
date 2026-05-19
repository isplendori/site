import type { Metadata } from "next";

import ComercialPageClient from "./ComercialPageClient";

export const metadata: Metadata = {
  title: "Comercial | Splendori",
  description:
    "Playbook comercial para SDR e Closer: prospecção, qualificação, serviços, canais e condução de vendas.",
};

export default function ComercialPage() {
  return <ComercialPageClient />;
}
