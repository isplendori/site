"use client";

import Link from "next/link";
import { useMemo } from "react";

import { Logo } from "@/components";
import { cn } from "@/lib/utils";

type UserTrail = "admin" | "employee" | "client";

type Session = {
  email: string;
  role: UserTrail;
  roleLabel: string;
  scope: string;
};

const fallbackSession: Session = {
  email: "cliente@splendori.com.br",
  role: "client",
  roleLabel: "Cliente",
  scope: "Somente projetos autorizados e atribuídos",
};

const isUserTrail = (role: unknown): role is UserTrail =>
  role === "admin" || role === "employee" || role === "client";

const getInitialSession = (): Session => {
  if (typeof window === "undefined") {
    return fallbackSession;
  }

  const rawSession = window.localStorage.getItem("splendori:user-session");

  if (!rawSession) {
    return fallbackSession;
  }

  try {
    const parsed = JSON.parse(rawSession) as Partial<Session>;

    if (parsed.email && isUserTrail(parsed.role) && parsed.roleLabel && parsed.scope) {
      return {
        email: parsed.email,
        role: parsed.role,
        roleLabel: parsed.roleLabel,
        scope: parsed.scope,
      };
    }
  } catch {
    window.localStorage.removeItem("splendori:user-session");
  }

  return fallbackSession;
};

const roleDetails: Record<UserTrail, { title: string; subtitle: string }> = {
  admin: {
    title: "Controle geral",
    subtitle: "Todos os projetos, pessoas, indicadores e aprovações.",
  },
  employee: {
    title: "Projetos atribuídos",
    subtitle: "Equipe e vendas visualizam apenas o que foi liberado.",
  },
  client: {
    title: "Área do cliente",
    subtitle: "Entregas, aprovações e materiais autorizados para este usuário.",
  },
};

const allProjects = [
  {
    name: "Arquitetura de marca",
    client: "Splendori Studio",
    owner: "Anna",
    status: "Em estratégia",
    progress: 78,
    roles: ["admin", "employee"],
  },
  {
    name: "Reposicionamento digital",
    client: "Cliente autorizado",
    owner: "Edson",
    status: "Em criação",
    progress: 54,
    roles: ["admin", "employee", "client"],
  },
  {
    name: "Social e campanhas",
    client: "Operação comercial",
    owner: "Vendas",
    status: "Em revisão",
    progress: 36,
    roles: ["admin", "employee"],
  },
  {
    name: "Materiais finais",
    client: "Cliente autorizado",
    owner: "Equipe",
    status: "Aguardando aprovação",
    progress: 88,
    roles: ["admin", "client"],
  },
];

const roleMetrics: Record<UserTrail, Array<{ label: string; value: string; detail: string }>> = {
  admin: [
    { label: "Projetos ativos", value: "24", detail: "+6 este mês" },
    { label: "Aprovações", value: "11", detail: "5 críticas" },
    { label: "Receita prevista", value: "R$ 86k", detail: "pipeline geral" },
    { label: "Captchas", value: "99.2%", detail: "acessos validados" },
  ],
  employee: [
    { label: "Atribuídos", value: "7", detail: "3 para hoje" },
    { label: "Pendências", value: "4", detail: "2 com cliente" },
    { label: "Conversões", value: "18", detail: "vendas e follow-up" },
    { label: "Captchas", value: "98.7%", detail: "sem anomalias" },
  ],
  client: [
    { label: "Projetos", value: "2", detail: "autorizados" },
    { label: "Entregas", value: "5", detail: "para revisar" },
    { label: "Aprovações", value: "3", detail: "aguardando você" },
    { label: "Captchas", value: "100%", detail: "sessão validada" },
  ],
};

const chartRows = [
  { label: "Estratégia", value: 78 },
  { label: "Design", value: 62 },
  { label: "Conteúdo", value: 46 },
  { label: "Aprovação", value: 84 },
];

const DashboardPageClient = () => {
  const session = getInitialSession();

  const projects = useMemo(
    () => allProjects.filter((project) => project.roles.includes(session.role)),
    [session.role]
  );

  const metrics = roleMetrics[session.role];
  const details = roleDetails[session.role];

  const handleLogout = () => {
    window.localStorage.removeItem("splendori:user-session");
  };

  return (
    <div className="min-h-screen bg-white text-[#434A57] dark:bg-[#0A0A0A]">
      <header className="sticky top-0 z-40 flex h-20 w-full items-center justify-center border-b border-[rgba(114,123,142,0.1)] bg-white/92 px-4 backdrop-blur-md dark:border-[rgba(255,255,255,0.1)] dark:bg-[#0A0A0A]/92 md:px-6.25">
        <div className="flex w-full max-w-304 items-center justify-between gap-6">
          <div className="flex items-center gap-6">
            <Logo />
            <div className="hidden h-5.25 w-px bg-[rgba(114,123,142,0.1)] lg:block" />
            <nav className="hidden items-center gap-5.25 lg:flex">
              {["Projetos", "Captchas", "Gráficos", "Números", "Sitemap"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="font-sans text-[14px] leading-5 text-[#8E90A1] transition-colors hover:text-[#9E372A]"
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>

          <div className="flex items-center gap-2">
            <Link
              href="#perfil"
              className="hidden h-9 items-center rounded-md border border-[rgba(114,123,142,0.1)] px-3 font-sans text-[13px] leading-5 text-[#8E90A1] transition-colors hover:border-[#9E372A] hover:text-[#9E372A] sm:flex"
            >
              Perfil
            </Link>
            <Link
              href="#configuracoes"
              className="hidden h-9 items-center rounded-md border border-[rgba(114,123,142,0.1)] px-3 font-sans text-[13px] leading-5 text-[#8E90A1] transition-colors hover:border-[#9E372A] hover:text-[#9E372A] sm:flex"
            >
              Configurações
            </Link>
            <Link
              href="/login"
              onClick={handleLogout}
              className="flex h-9 items-center rounded-md border border-[#12141B] bg-[#12141B] px-3 font-sans text-[13px] leading-5 text-white transition-colors hover:border-[#9E372A] hover:bg-[#9E372A]"
            >
              Sair
            </Link>
          </div>
        </div>
      </header>

      <main className="mx-auto flex w-full max-w-304 flex-col border-[rgba(114,123,142,0.1)] dark:border-[rgba(255,255,255,0.1)] sm:border-x">
        <section className="grid min-h-100 grid-cols-1 border-b border-[rgba(114,123,142,0.1)] dark:border-[rgba(255,255,255,0.1)] lg:grid-cols-[1fr_360px]">
          <div className="flex flex-col justify-end gap-5 px-6 py-12 md:px-13.5">
            <span className="reveal-element font-mono text-[12px] font-semibold uppercase leading-5.25 tracking-[0.09em] text-[#8E90A1]">
              {session.roleLabel}
            </span>
            <div className="flex max-w-155 flex-col gap-3">
              <h1 className="reveal-element delay-[160ms] font-instrument-serif text-[42px] font-light leading-[44px] text-[#434A57] md:text-[56px] md:leading-[58px]">
                {details.title}
              </h1>
              <p className="reveal-element delay-[320ms] max-w-120 font-sans text-[14px] leading-4.75 text-[#8E90A1]">
                {details.subtitle}
              </p>
            </div>
          </div>

          <aside id="perfil" className="flex flex-col justify-end gap-4 border-t border-[rgba(114,123,142,0.1)] px-6 py-8 dark:border-[rgba(255,255,255,0.1)] lg:border-l lg:border-t-0">
            <div className="rounded-md border border-[rgba(114,123,142,0.1)] p-4 dark:border-[rgba(255,255,255,0.1)]">
              <span className="font-mono text-[11px] font-semibold uppercase leading-5 tracking-[0.09em] text-[#8E90A1]">
                Usuário
              </span>
              <p className="mt-2 font-sans text-[14px] leading-5 text-[#434A57]">
                {session.email}
              </p>
              <p className="mt-1 font-sans text-[13px] leading-5 text-[#8E90A1]">
                {session.scope}
              </p>
            </div>
          </aside>
        </section>

        <section id="números" className="grid grid-cols-1 border-b border-[rgba(114,123,142,0.1)] dark:border-[rgba(255,255,255,0.1)] md:grid-cols-4">
          {metrics.map((metric) => (
            <div
              key={metric.label}
              className="reveal-element flex min-h-36 flex-col justify-end gap-2 border-b border-[rgba(114,123,142,0.1)] p-6 last:border-b-0 dark:border-[rgba(255,255,255,0.1)] md:border-b-0 md:border-r md:last:border-r-0"
            >
              <span className="font-mono text-[12px] font-semibold uppercase leading-5.25 tracking-[0.09em] text-[#8E90A1]">
                {metric.label}
              </span>
              <strong className="font-instrument-serif text-[34px] font-light leading-9 text-[#434A57]">
                {metric.value}
              </strong>
              <span className="font-sans text-[13px] leading-5 text-[#8E90A1]">
                {metric.detail}
              </span>
            </div>
          ))}
        </section>

        <section className="grid grid-cols-1 border-b border-[rgba(114,123,142,0.1)] dark:border-[rgba(255,255,255,0.1)] lg:grid-cols-[1fr_360px]">
          <div id="projetos" className="flex flex-col">
            <div className="flex min-h-22 items-center justify-between border-b border-[rgba(114,123,142,0.1)] px-6 dark:border-[rgba(255,255,255,0.1)] md:px-13.5">
              <h2 className="font-instrument-serif text-[32px] font-light leading-9 text-[#434A57]">
                Projetos atribuídos
              </h2>
            </div>
            {projects.map((project) => (
              <article
                key={project.name}
                className="grid grid-cols-1 gap-4 border-b border-[rgba(114,123,142,0.1)] px-6 py-5 last:border-b-0 dark:border-[rgba(255,255,255,0.1)] md:grid-cols-[1fr_160px] md:px-13.5"
              >
                <div>
                  <h3 className="font-figtree text-[16px] font-medium leading-5 text-[#434A57]">
                    {project.name}
                  </h3>
                  <p className="mt-1 font-sans text-[13px] leading-5 text-[#8E90A1]">
                    {project.client} · responsável: {project.owner}
                  </p>
                </div>
                <div>
                  <div className="flex items-center justify-between font-sans text-[12px] leading-5 text-[#8E90A1]">
                    <span>{project.status}</span>
                    <span>{project.progress}%</span>
                  </div>
                  <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-[#F1F2F4]">
                    <div className="h-full rounded-full bg-[#9E372A]" style={{ width: `${project.progress}%` }} />
                  </div>
                </div>
              </article>
            ))}
          </div>

          <aside id="captchas" className="border-t border-[rgba(114,123,142,0.1)] p-6 dark:border-[rgba(255,255,255,0.1)] lg:border-l lg:border-t-0">
            <span className="font-mono text-[12px] font-semibold uppercase leading-5.25 tracking-[0.09em] text-[#8E90A1]">
              Captchas
            </span>
            <div className="mt-5 grid gap-3">
              {["Sessão validada", "Tentativas suspeitas: 0", "Token front-end ativo"].map((item, index) => (
                <div
                  key={item}
                  className={cn(
                    "flex min-h-12 items-center justify-between rounded-md border border-[rgba(114,123,142,0.1)] px-3 font-sans text-[13px] leading-5 dark:border-[rgba(255,255,255,0.1)]",
                    index === 0 ? "text-[#9E372A]" : "text-[#8E90A1]"
                  )}
                >
                  <span>{item}</span>
                  <span className="h-2 w-2 rounded-full bg-[#9E372A]" />
                </div>
              ))}
            </div>
          </aside>
        </section>

        <section id="gráficos" className="grid grid-cols-1 gap-0 border-b border-[rgba(114,123,142,0.1)] dark:border-[rgba(255,255,255,0.1)] lg:grid-cols-[1fr_360px]">
          <div className="p-6 md:p-13.5">
            <h2 className="font-instrument-serif text-[32px] font-light leading-9 text-[#434A57]">
              Gráficos de andamento
            </h2>
            <div className="mt-8 grid gap-5">
              {chartRows.map((row) => (
                <div key={row.label}>
                  <div className="mb-2 flex items-center justify-between font-sans text-[13px] leading-5 text-[#8E90A1]">
                    <span>{row.label}</span>
                    <span>{row.value}%</span>
                  </div>
                  <div className="h-9 overflow-hidden rounded-md border border-[rgba(114,123,142,0.1)] bg-white dark:border-[rgba(255,255,255,0.1)] dark:bg-[#0A0A0A]">
                    <div className="h-full bg-[linear-gradient(90deg,#9E372A,rgba(158,55,42,0.48))]" style={{ width: `${row.value}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <aside id="configuracoes" className="border-t border-[rgba(114,123,142,0.1)] p-6 dark:border-[rgba(255,255,255,0.1)] lg:border-l lg:border-t-0">
            <span className="font-mono text-[12px] font-semibold uppercase leading-5.25 tracking-[0.09em] text-[#8E90A1]">
              Configurações
            </span>
            <div className="mt-5 grid gap-3 font-sans text-[13px] leading-5 text-[#8E90A1]">
              <p>Permissões por pessoa e projeto.</p>
              <p>Visibilidade controlada por atribuição.</p>
              <p>Sem menu lateral; navegação superior fixa.</p>
            </div>
          </aside>
        </section>
      </main>
    </div>
  );
};

export default DashboardPageClient;
