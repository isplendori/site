import type { Metadata } from "next";

import LoginPageClient from "./LoginPageClient";

export const metadata: Metadata = {
  title: "Login — Splendori",
  description: "Acesso privado para clientes Splendori.",
};

export default function LoginPage() {
  return <LoginPageClient />;
}
