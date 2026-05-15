"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";

import { BolinhasPattern } from "@/components";

interface PortfolioProjectHeroProps {
  currentTitle: string;
  currentClient?: string;
  category: string;
}

// TODO: remove after confirming no legacy references remain in nearby edits.
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const projectAreas = [
  {
    label: "Identidade visual",
    matchers: ["identidade", "marca"],
    projects: [
      "Sistema de Marca Orbis",
      "Identidade Natura Forma",
      "Marca Canto Norte",
      "Rebrand Astra",
      "Casa Vértice Visual",
      "Vila Rara Branding",
      "Matriz Clara",
      "Ponto Lume",
    ],
  },
  {
    label: "Social media",
    matchers: ["social", "campanha", "estrategia"],
    projects: [
      "Soma Social",
      "Lume Café Conteúdo",
      "Trama Editorial",
      "Viva Norte Social",
      "Alba Skin",
      "Atlas Campanha",
      "Solaris Conteúdo",
      "Axis Campaign",
    ],
  },
  {
    label: "UI/UX Design",
    matchers: ["ui", "ux", "produto", "digital"],
    projects: [
      "Plataforma Neon",
      "Corebase Dashboard",
      "Fluxo Alto",
      "Nexo App",
      "UX Flow Prisma",
      "Interface Lumina",
      "Boreal Produto",
      "Atlas Digital",
    ],
  },
  {
    label: "Web design",
    matchers: ["web", "site", "landing"],
    projects: [
      "Vento Labs",
      "Linha Real",
      "Prisma Web",
      "Boreal Group",
      "Mirante Studio",
      "Atlas Website",
      "Orbis Digital",
      "Natura Forma Web",
    ],
  },
  {
    label: "Desenvolvimento",
    matchers: ["desenvolvimento", "dev", "frontend", "backend"],
    projects: [
      "Corebase Build",
      "Fluxo Alto Dev",
      "Nexo App Build",
      "Prisma Tech",
      "Atlas Platform",
      "Boreal System",
      "Lumina Frontend",
      "Vértice Backend",
    ],
  },
  {
    label: "+Mais",
    matchers: ["mais", "especial"],
    projects: [
      "Aurora Studio",
      "Mesa Onze",
      "Forma Livre",
      "Arquivo 22",
      "Solaris Lab",
      "Nadir Eventos",
      "Clara Strategy",
      "Axis Campaign",
    ],
  },
];

const portfolioSearchAreas = [
  {
    label: "Identidade visual",
    matchers: ["identidade", "marca"],
    projects: [
      { title: "Sistema de Marca Orbis", href: "/portfolio/projetos/projeto-1" },
      { title: "Rebrand Astra", href: "/portfolio/projetos/projeto-4" },
      { title: "Sistema Aurora", href: "/portfolio/projetos/projeto-8" },
      { title: "Ativação Atlas", href: "/portfolio/projetos/projeto-7" },
    ],
  },
  {
    label: "Social media",
    matchers: ["social", "campanha", "estrategia"],
    projects: [
      { title: "Campanha Lançamento Vento", href: "/portfolio/projetos/projeto-2" },
      { title: "Ativação Atlas", href: "/portfolio/projetos/projeto-7" },
      { title: "Sistema Aurora", href: "/portfolio/projetos/projeto-8" },
      { title: "Rebrand Astra", href: "/portfolio/projetos/projeto-4" },
    ],
  },
  {
    label: "UI/UX Design",
    matchers: ["ui", "ux", "produto", "digital"],
    projects: [
      { title: "Plataforma Neon", href: "/portfolio/projetos/projeto-3" },
      { title: "UX Flow Prisma", href: "/portfolio/projetos/projeto-5" },
      { title: "Interface Lumina", href: "/portfolio/projetos/projeto-6" },
      { title: "Sistema Aurora", href: "/portfolio/projetos/projeto-8" },
    ],
  },
  {
    label: "Web design",
    matchers: ["web", "site", "landing"],
    projects: [
      { title: "Interface Lumina", href: "/portfolio/projetos/projeto-6" },
      { title: "Campanha Lançamento Vento", href: "/portfolio/projetos/projeto-2" },
      { title: "Plataforma Neon", href: "/portfolio/projetos/projeto-3" },
      { title: "Sistema Aurora", href: "/portfolio/projetos/projeto-8" },
    ],
  },
  {
    label: "Desenvolvimento",
    matchers: ["desenvolvimento", "dev", "frontend", "backend"],
    projects: [
      { title: "Plataforma Neon", href: "/portfolio/projetos/projeto-3" },
      { title: "UX Flow Prisma", href: "/portfolio/projetos/projeto-5" },
      { title: "Interface Lumina", href: "/portfolio/projetos/projeto-6" },
      { title: "Sistema Aurora", href: "/portfolio/projetos/projeto-8" },
    ],
  },
  {
    label: "+Mais",
    matchers: ["mais", "especial"],
    projects: [
      { title: "Sistema de Marca Orbis", href: "/portfolio/projetos/projeto-1" },
      { title: "Campanha Lançamento Vento", href: "/portfolio/projetos/projeto-2" },
      { title: "Ativação Atlas", href: "/portfolio/projetos/projeto-7" },
      { title: "Sistema Aurora", href: "/portfolio/projetos/projeto-8" },
    ],
  },
];

const heroFrames = [
  {
    gradient:
      "bg-[radial-gradient(circle_at_24%_18%,rgba(158,55,42,0.24),transparent_24%),linear-gradient(135deg,rgba(67,74,87,0.14),transparent_42%),linear-gradient(90deg,#FAFAFA,#F4F4F5)]",
  },
  {
    gradient:
      "bg-[radial-gradient(circle_at_70%_32%,rgba(158,55,42,0.26),transparent_22%),linear-gradient(135deg,rgba(142,144,161,0.16),transparent_36%),linear-gradient(90deg,#F7F7F8,#FFFFFF_48%,#F3F4F5)]",
  },
  {
    gradient:
      "bg-[radial-gradient(circle_at_52%_72%,rgba(67,74,87,0.18),transparent_24%),linear-gradient(135deg,#FFFFFF,#F2F3F4)]",
  },
  {
    gradient:
      "bg-[radial-gradient(circle_at_30%_62%,rgba(158,55,42,0.2),transparent_21%),linear-gradient(120deg,#F5F5F6,#FFFFFF_44%,#F0F1F2)]",
  },
];

const normalizeText = (value: string) =>
  value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();

const getInitialAreaIndex = (category: string) => {
  const normalizedCategory = normalizeText(category);

  return Math.max(
    portfolioSearchAreas.findIndex((area) =>
      area.matchers.some((matcher) => normalizedCategory.includes(matcher)),
    ),
    0,
  );
};

const PortfolioProjectHero = ({
  currentTitle,
  currentClient,
  category,
}: PortfolioProjectHeroProps) => {
  const router = useRouter();
  const [activeAreaIndex, setActiveAreaIndex] = useState(() =>
    getInitialAreaIndex(category),
  );
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [expandedFrameIndex, setExpandedFrameIndex] = useState<number | null>(
    null,
  );
  const activeArea = portfolioSearchAreas[activeAreaIndex];
  const activeProject =
    activeArea.projects[activeProjectIndex]?.title ?? currentTitle;
  const expandedFrame =
    expandedFrameIndex === null
      ? null
      : heroFrames[expandedFrameIndex % heroFrames.length];
  const filteredProjects = useMemo(() => {
    const normalizedSearch = normalizeText(searchTerm);

    return activeArea.projects.filter((project) =>
      normalizeText(project.title).includes(normalizedSearch),
    );
  }, [activeArea.projects, searchTerm]);

  const goToProject = (direction: -1 | 1) => {
    setActiveProjectIndex((currentIndex) => {
      const nextIndex =
        (currentIndex + direction + activeArea.projects.length) %
        activeArea.projects.length;

      return nextIndex;
    });
    setSearchOpen(false);
  };

  const handleAreaClick = (index: number) => {
    setActiveAreaIndex(index);
    setActiveProjectIndex(0);
    setSearchTerm("");
    setSearchOpen(false);
  };

  return (
    <section className="relative overflow-visible bg-white dark:bg-[#0A0A0A]">
      <div className="relative h-[148px] overflow-visible rounded-b-[18px]">
        <BolinhasPattern
          className="absolute top-[-29px] left-0 h-full w-full"
          fillOpacity={0.35}
        />

        <div className="absolute left-6 right-6 top-7 z-30 md:left-[70px] md:right-[70px]">
          <div className="flex items-end overflow-x-auto">
            {portfolioSearchAreas.map((area, index) => (
              <button
                key={area.label}
                type="button"
                aria-pressed={index === activeAreaIndex}
                onClick={() => handleAreaClick(index)}
                className={[
                  "portfolio-hero-tab flex h-[38px] shrink-0 items-center justify-center border border-b-0 border-[rgba(114,123,142,0.16)] px-4 font-mono text-[12px] font-semibold uppercase leading-5.25 tracking-[0.14em] transition-colors duration-300",
                  index === activeAreaIndex
                    ? "bg-white text-[#434A57] shadow-[0_-6px_18px_rgba(18,20,27,0.025)] dark:bg-[#0D0E13] dark:text-[#F1F2F4]"
                    : "bg-[#F0F1F3]/92 text-[#8E90A1] hover:text-[#434A57] dark:bg-[#111217] dark:hover:text-[#F1F2F4]",
                  index === 0 ? "rounded-tl-[12px]" : "-ml-px",
                  index === portfolioSearchAreas.length - 1 ? "rounded-tr-[12px]" : "",
                ].join(" ")}
              >
                {area.label}
              </button>
            ))}
          </div>

          <div className="relative flex h-9 items-center justify-between rounded-r-[7px] rounded-bl-[7px] border border-[rgba(114,123,142,0.14)] bg-white px-4 shadow-[0_8px_30px_rgba(18,20,27,0.02)] dark:bg-[#0D0E13]">
            <div className="flex min-w-0 items-center gap-3">
              <button
                type="button"
                onClick={() => goToProject(-1)}
                aria-label="Projeto anterior"
                className="flex size-3.5 shrink-0 items-center justify-center text-[#8E90A1] transition-colors duration-300 hover:text-[#9E372A]"
              >
                <span
                  aria-hidden="true"
                  className="size-2 rotate-45 border-b border-l border-current"
                />
              </button>
              <button
                type="button"
                onClick={() => setSearchOpen((isOpen) => !isOpen)}
                aria-expanded={searchOpen}
                className="min-w-0 truncate text-left font-mono text-[12px] font-semibold uppercase leading-5.25 tracking-[0.14em] text-[#8E90A1] transition-colors duration-300 hover:text-[#434A57] dark:hover:text-[#F1F2F4]"
              >
                {activeProject}/{currentClient ?? "Cliente"}
              </button>
            </div>
            <button
              type="button"
              onClick={() => goToProject(1)}
              aria-label="Próximo projeto"
              className="flex size-3.5 shrink-0 items-center justify-center text-[#8E90A1] transition-colors duration-300 hover:text-[#9E372A]"
            >
              <span
                aria-hidden="true"
                className="size-2 rotate-45 border-r border-t border-current"
              />
            </button>

            {searchOpen ? (
              <div className="absolute left-0 right-0 top-[calc(100%+8px)] z-40 rounded-[8px] border border-[rgba(114,123,142,0.14)] bg-white p-2 shadow-[0_18px_55px_rgba(18,20,27,0.08)] dark:bg-[#0D0E13]">
                <input
                  value={searchTerm}
                  onChange={(event) => setSearchTerm(event.target.value)}
                  autoFocus
                  placeholder={`Buscar em ${activeArea.label}`}
                  className="h-9 w-full rounded-[6px] border border-[rgba(114,123,142,0.14)] bg-[#FAFAFA] px-3 font-sans text-[13px] text-[#434A57] outline-none transition-colors placeholder:text-[#A2A6B3] focus:border-[#9E372A]/40 dark:bg-[#101116] dark:text-[#F1F2F4]"
                />
                <div className="mt-2 max-h-56 overflow-y-auto">
                  {filteredProjects.map((project) => {
                    const projectIndex = activeArea.projects.indexOf(project);

                    return (
                      <button
                        key={project.href}
                        type="button"
                        onClick={() => {
                          setActiveProjectIndex(projectIndex);
                          setSearchOpen(false);
                          router.push(project.href);
                        }}
                        className={[
                          "block w-full rounded-[6px] px-3 py-2 text-left font-sans text-[13px] leading-5 transition-colors",
                          projectIndex === activeProjectIndex
                            ? "bg-[#F4ECEB] text-[#9E372A]"
                            : "text-[#8E90A1] hover:bg-[#F7F7F8] hover:text-[#434A57] dark:hover:bg-[#15161C] dark:hover:text-[#F1F2F4]",
                        ].join(" ")}
                      >
                        {project.title}
                      </button>
                    );
                  })}
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>

      <div className="portfolio-hero-carousel relative overflow-hidden pb-6 pt-0">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-18 bg-gradient-to-r from-white via-white/90 to-transparent dark:from-[#0A0A0A] dark:via-[#0A0A0A]/90 md:w-28" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-18 bg-gradient-to-l from-white via-white/90 to-transparent dark:from-[#0A0A0A] dark:via-[#0A0A0A]/90 md:w-28" />
        <div className="portfolio-hero-carousel-track flex w-max gap-2.5">
          {[...heroFrames, ...heroFrames].map((frame, index) => (
            <button
              key={`${frame.gradient}-${index}`}
              type="button"
              aria-label={`Expandir imagem ${index + 1} do projeto`}
              onClick={() => setExpandedFrameIndex(index)}
              className="portfolio-hero-checker relative h-[420px] w-[520px] shrink-0 overflow-hidden rounded-[12px] border border-[rgba(114,123,142,0.1)] md:h-[614px] md:w-[720px] dark:border-[rgba(255,255,255,0.1)]"
            >
              <div className={`absolute inset-0 ${frame.gradient}`} />
              <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.76),rgba(255,255,255,0.1)_14%,rgba(255,255,255,0)_50%,rgba(255,255,255,0.12)_86%,rgba(255,255,255,0.78))] dark:bg-[linear-gradient(90deg,rgba(10,10,10,0.72),rgba(10,10,10,0.08)_14%,rgba(10,10,10,0)_50%,rgba(10,10,10,0.1)_86%,rgba(10,10,10,0.72))]" />
              <div className="absolute inset-x-8 top-8 h-px bg-white/70" />
              <div className="absolute bottom-8 left-8 h-24 w-38 rounded-[10px] border border-white/55 bg-white/28 backdrop-blur-[2px]" />
              <div className="absolute right-8 top-10 h-38 w-18 rounded-full bg-white/22 blur-xl" />
            </button>
          ))}
        </div>
      </div>

      {expandedFrame ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Imagem expandida do projeto"
          className="fixed inset-0 z-50 flex items-center justify-center bg-white/18 px-4 py-6 backdrop-blur-[18px] dark:bg-[#0A0A0A]/42"
          onClick={() => setExpandedFrameIndex(null)}
        >
          <div
            className="relative w-full max-w-[1040px]"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              aria-label="Fechar imagem expandida"
              onClick={() => setExpandedFrameIndex(null)}
              className="absolute -right-2 -top-12 flex size-9 items-center justify-center rounded-full border border-[rgba(114,123,142,0.18)] bg-white font-sans text-[18px] leading-none text-[#8E90A1] shadow-[0_14px_35px_rgba(18,20,27,0.08)] transition-colors duration-300 hover:text-[#9E372A] dark:bg-[#0D0E13] sm:-right-10 sm:-top-10"
            >
              ×
            </button>
            <div className="portfolio-hero-checker relative h-[62vh] min-h-[360px] overflow-hidden rounded-[12px] border border-[rgba(114,123,142,0.1)] shadow-[0_28px_90px_rgba(18,20,27,0.16)] dark:border-[rgba(255,255,255,0.1)]">
              <div className={`absolute inset-0 ${expandedFrame.gradient}`} />
              <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.58),rgba(255,255,255,0.08)_14%,rgba(255,255,255,0)_50%,rgba(255,255,255,0.1)_86%,rgba(255,255,255,0.62))] dark:bg-[linear-gradient(90deg,rgba(10,10,10,0.56),rgba(10,10,10,0.08)_14%,rgba(10,10,10,0)_50%,rgba(10,10,10,0.1)_86%,rgba(10,10,10,0.58))]" />
              <div className="absolute inset-x-10 top-10 h-px bg-white/70" />
              <div className="absolute bottom-10 left-10 h-28 w-44 rounded-[10px] border border-white/55 bg-white/28 backdrop-blur-[2px]" />
              <div className="absolute right-10 top-12 h-44 w-24 rounded-full bg-white/22 blur-xl" />
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
};

export default PortfolioProjectHero;
