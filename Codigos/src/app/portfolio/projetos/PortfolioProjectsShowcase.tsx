"use client";

import Link from "next/link";
import { useState } from "react";

const portfolioAreas = [
  {
    label: "Identidade Visual",
    projects: [
      { title: "Sistema de Marca Orbis", href: "/portfolio/projetos/projeto-1" },
      { title: "Identidade Natura Forma", href: "/portfolio/projetos/projeto-2" },
      { title: "Marca Canto Norte", href: "/portfolio/projetos/projeto-3" },
      { title: "Rebrand Astra", href: "/portfolio/projetos/projeto-4" },
    ],
  },
  {
    label: "Social Media",
    projects: [
      { title: "Soma Social", href: "/portfolio/projetos/projeto-2" },
      { title: "Lume CafÃ© ConteÃºdo", href: "/portfolio/projetos/projeto-3" },
      { title: "Trama Editorial", href: "/portfolio/projetos/projeto-4" },
      { title: "Viva Norte Social", href: "/portfolio/projetos/projeto-5" },
    ],
  },
  {
    label: "UI/UX Design",
    projects: [
      { title: "Plataforma Neon", href: "/portfolio/projetos/projeto-3" },
      { title: "Corebase Dashboard", href: "/portfolio/projetos/projeto-5" },
      { title: "UX Flow Prisma", href: "/portfolio/projetos/projeto-6" },
      { title: "Interface Lumina", href: "/portfolio/projetos/projeto-7" },
    ],
  },
  {
    label: "Web Design",
    projects: [
      { title: "Vento Labs", href: "/portfolio/projetos/projeto-2" },
      { title: "Linha Real", href: "/portfolio/projetos/projeto-6" },
      { title: "Mirante Studio", href: "/portfolio/projetos/projeto-7" },
      { title: "Atlas Website", href: "/portfolio/projetos/projeto-8" },
    ],
  },
  {
    label: "Desenvolvimento",
    projects: [
      { title: "Corebase Build", href: "/portfolio/projetos/projeto-3" },
      { title: "Nexo App Build", href: "/portfolio/projetos/projeto-5" },
      { title: "Atlas Platform", href: "/portfolio/projetos/projeto-7" },
      { title: "Boreal System", href: "/portfolio/projetos/projeto-8" },
    ],
  },
  {
    label: "+ Mais",
    projects: [
      { title: "Aurora Studio", href: "/portfolio/projetos/projeto-8" },
      { title: "Mesa Onze", href: "/portfolio/projetos/projeto-1" },
      { title: "Forma Livre", href: "/portfolio/projetos/projeto-4" },
      { title: "Axis Campaign", href: "/portfolio/projetos/projeto-7" },
    ],
  },
];

const projectCardStyles = [
  "bg-[radial-gradient(circle_at_14%_18%,rgba(67,74,87,0.18),transparent_15%),linear-gradient(135deg,#F8FAFC,#DDE4EA_42%,#FFFFFF)]",
  "bg-[radial-gradient(circle_at_50%_46%,rgba(18,20,27,0.15),transparent_17%),linear-gradient(135deg,#EEF8F7,#FFFFFF_48%,#DAE6E8)]",
  "bg-[radial-gradient(circle_at_78%_18%,rgba(255,255,255,0.42),transparent_18%),linear-gradient(135deg,#6C8FD7,#BFD1FA_50%,#EEF4FF)]",
  "bg-[radial-gradient(circle_at_72%_24%,rgba(201,218,255,0.72),transparent_18%),linear-gradient(135deg,#C9D0DB,#F3F5F8_45%,#DCE6F8)]",
];

const projectCardAccents = [
  "left-5 top-5 h-20 w-28",
  "left-[72px] top-5 h-20 w-28",
  "left-5 top-5 h-20 w-28",
  "left-1/2 top-5 h-20 w-28 -translate-x-1/2",
];

const projectYears = ["2024", "2024", "2023", "2024"];

const FolderIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="121"
    height="94"
    viewBox="0 0 121 94"
    fill="none"
    aria-hidden="true"
    className="h-[94px] w-[121px]"
  >
    <g clipPath="url(#folder_clip)">
      <mask
        id="folder_mask"
        style={{ maskType: "luminance" }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="-5"
        width="121"
        height="99"
      >
        <path d="M121 -5H0V94H121V-5Z" fill="white" />
      </mask>
      <g mask="url(#folder_mask)">
        <path
          d="M0 6.28377V87.4819C0 90.9522 2.83632 93.7656 6.33508 93.7656H114.665C118.164 93.7656 121 90.9522 121 87.4819V19.0984C121 15.628 118.164 12.8146 114.665 12.8146H57.8066C55.3438 12.8146 53.1131 11.3888 51.8246 9.30677C49.4769 5.51278 45.2436 0 40.4653 0H6.32518C2.82641 0 0 2.81334 0 6.28377Z"
          fill="#8F949F"
        />
        <path
          d="M121 22.414V87.5864C121 91.1284 118.164 94 114.665 94H6.33508C2.83632 94 0 91.1284 0 87.5864V28.9071C0 25.3651 2.82696 22.4934 6.32572 22.4934H38.3272C49.0969 22.4934 47.5922 15.9997 54.9567 16C75.05 16.0009 102.459 16.0005 114.676 16.0002C118.174 16.0001 121 18.8717 121 22.414Z"
          fill="url(#folder_gradient)"
        />
      </g>
    </g>
    <defs>
      <linearGradient
        id="folder_gradient"
        x1="175.828"
        y1="-17.8929"
        x2="1.30277"
        y2="95.8592"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0.234375" stopColor="#CCD0D8" />
        <stop offset="1" stopColor="#ADB4C2" />
      </linearGradient>
      <clipPath id="folder_clip">
        <rect width="121" height="94" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

const PortfolioProjectsShowcase = () => {
  const [activeAreaIndex, setActiveAreaIndex] = useState(0);
  const activeArea = portfolioAreas[activeAreaIndex];

  return (
    <section className="w-full border-x border-b border-[rgba(114,123,142,0.1)] bg-white text-[#434A57] dark:border-[rgba(255,255,255,0.1)] dark:bg-[#0A0A0A]">
      <div className="flex min-h-[314px] w-full flex-col items-center justify-center bg-white">
        <p className="reveal-element h-[29px] w-full max-w-[966px] font-mono text-[12px] font-semibold uppercase leading-[21px] tracking-[1.08px] text-[#8E90A1]">
          ÁREAS DE ATUAÇÃO
        </p>

        <div className="flex h-[152px] w-full items-center justify-center bg-white">
          <div className="flex h-[151px] w-full max-w-[994px] items-center justify-start gap-5 overflow-visible">
          {portfolioAreas.map((area, index) => {
            const isActive = index === activeAreaIndex;

            return (
              <button
                key={area.label}
                type="button"
                aria-pressed={isActive}
                onClick={() => setActiveAreaIndex(index)}
                className="reveal-element group flex w-[149px] shrink-0 flex-col items-center justify-center gap-4 text-center focus:outline-none"
                style={{ transitionDelay: `${index * 70}ms` }}
              >
                <FolderIcon />
                <span
                  className={[
                    "inline-flex h-9 max-w-full items-center justify-center rounded-[200px] border border-dashed px-4 py-2 font-sans text-[14px] leading-5 transition-colors duration-300",
                    isActive
                      ? "border-[#D6DAE2] bg-[#F1F2F4] text-[#8E90A1]"
                      : "border-[#D6DAE2] bg-white text-[#8E90A1] group-hover:border-[#C7CCD6] group-hover:text-[#434A57]",
                  ].join(" ")}
                >
                  {area.label}
                </span>
              </button>
            );
          })}
          </div>
        </div>
      </div>

      <div className="border-t border-[rgba(114,123,142,0.1)] px-6 pb-16 pt-[68px] md:pb-20">
        <div className="reveal-element mx-auto mb-[42px] w-full max-w-[986px]">
          <h2 className="font-instrument-serif text-[36px] font-light leading-[40px] text-[#434A57] dark:text-[#F1F2F4]">
            {activeArea.label}
          </h2>
        </div>

        <div className="mx-auto grid w-full max-w-[986px] overflow-hidden rounded-[10px] border border-[rgba(114,123,142,0.1)] md:grid-cols-4">
          {activeArea.projects.slice(0, 4).map((project, index) => (
            <Link
              key={`${activeArea.label}-${project.title}`}
              href={project.href}
              aria-label={`Abrir ${project.title}`}
              className="reveal-element group relative flex min-h-[360px] overflow-hidden border-b border-[rgba(114,123,142,0.1)] md:min-h-[414px] md:border-b-0 md:border-r md:last:border-r-0"
              style={{ transitionDelay: `${index * 90}ms` }}
            >
              <div
                className={[
                  "absolute inset-0 transition-[filter,transform] duration-300 group-hover:scale-[1.015] group-hover:blur-[8px]",
                  projectCardStyles[index],
                ].join(" ")}
              >
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0)_45%,rgba(255,255,255,0.88)_100%)]" />
                <div
                  className={[
                    "absolute rounded-[8px] border border-white/55 bg-white/36 backdrop-blur-[2px]",
                    projectCardAccents[index],
                  ].join(" ")}
                />
                {index === 0 ? (
                  <div className="absolute bottom-28 left-5 h-20 w-36 rotate-[-8deg] rounded-[10px] border border-white/45 bg-white/28" />
                ) : null}
                {index === 1 ? (
                  <div className="absolute left-1/2 top-1/2 size-20 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#8E90A1]/16 blur-xl" />
                ) : null}
                {index === 2 ? (
                  <div className="absolute bottom-24 left-10 h-24 w-28 rounded-[4px] bg-white/24" />
                ) : null}
                {index === 3 ? (
                  <div className="absolute bottom-24 right-6 grid h-36 w-32 grid-cols-2 gap-2 opacity-70">
                    <span className="rounded-[6px] bg-white/34" />
                    <span className="rounded-[6px] bg-white/26" />
                    <span className="rounded-[6px] bg-white/22" />
                    <span className="rounded-[6px] bg-white/30" />
                  </div>
                ) : null}
              </div>
              <div className="absolute bottom-6 left-5 right-5 z-10">
                <p className="font-mono text-[11px] font-semibold uppercase leading-4 tracking-[0.12em] text-[#8E90A1]">
                  {projectYears[index]}
                </p>
                <h3 className="mt-2 font-sans text-[18px] leading-6 text-[#434A57]">
                  {project.title}
                </h3>
              </div>
              <span
                aria-hidden="true"
                className="absolute left-1/2 top-1/2 z-10 flex size-[58px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-[32px] leading-none text-[#434A57] opacity-0 shadow-[0_18px_50px_rgba(18,20,27,0.12)] transition-opacity duration-300 group-hover:opacity-100"
              >
                ↗
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioProjectsShowcase;
