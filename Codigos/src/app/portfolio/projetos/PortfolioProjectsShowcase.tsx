"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

import Star from "@/components/atoms/Icon/Star";

const portfolioGroups = [
  {
    filter: "Identidade Visual",
    projects: [
      {
        title: "Projeto 1",
        description:
          "Sistema de identidade para uma marca premium, com foco em presença, consistência visual e direção criativa para pontos de contato digitais e impressos.",
      },
      {
        title: "Projeto 2",
        description:
          "Refinamento de marca com novo território visual, paleta, tipografia e aplicações para tornar a comunicação mais clara, autoral e reconhecível.",
      },
      {
        title: "Projeto 3",
        description:
          "Construção de linguagem visual para campanha institucional, conectando símbolo, narrativa e materiais de apresentação em um sistema único.",
      },
      {
        title: "Projeto 4",
        description:
          "Revisão completa de marca para reposicionamento, com diretrizes de uso, assets sociais e uma base visual preparada para expansão.",
      },
      {
        title: "Projeto 5",
        description:
          "Identidade visual para serviço especializado, equilibrando sofisticação, clareza comercial e personalidade em uma presença mais memorável.",
      },
      {
        title: "Projeto 6",
        description:
          "Sistema gráfico modular com variações de composição, assinatura visual e peças de apoio para manter consistência sem perder movimento.",
      },
      {
        title: "Projeto 7",
        description:
          "Atualização de marca com foco em maturidade visual, removendo ruído e reforçando os códigos que sustentam valor percebido.",
      },
      {
        title: "Projeto 8",
        description:
          "Direção de identidade para lançamento, com elementos visuais, hierarquia editorial e aplicações pensadas para conversão e lembrança.",
      },
    ],
  },
  {
    filter: "Web Design",
    projects: [
      {
        title: "Projeto 1",
        description:
          "Website institucional com narrativa clara, ritmo editorial e estrutura de conversão para apresentar serviços sem cair em fórmula genérica.",
      },
      {
        title: "Projeto 2",
        description:
          "Landing page de campanha com seções enxutas, prova visual e chamadas diretas para transformar interesse em conversa qualificada.",
      },
      {
        title: "Projeto 3",
        description:
          "Página de apresentação para produto digital, organizada por benefício, demonstração e decisão, com foco em leitura rápida.",
      },
      {
        title: "Projeto 4",
        description:
          "Redesign web para marca em crescimento, com nova arquitetura de conteúdo, sistema visual e experiência responsiva.",
      },
      {
        title: "Projeto 5",
        description:
          "Site editorial para portfólio, usando imagens, grids e respiro para valorizar trabalhos sem excesso de interface.",
      },
      {
        title: "Projeto 6",
        description:
          "Experiência web para serviço premium, com navegação discreta, páginas objetivas e CTAs posicionados no momento certo.",
      },
    ],
  },
  {
    filter: "UI/UX Design",
    projects: [
      {
        title: "Projeto 1",
        description:
          "Fluxo de produto redesenhado para reduzir atrito, organizar decisões e dar mais confiança ao usuário em cada etapa.",
      },
      {
        title: "Projeto 2",
        description:
          "Interface de dashboard com hierarquia mais clara, agrupamento de dados e componentes preparados para uso recorrente.",
      },
      {
        title: "Projeto 3",
        description:
          "Protótipo navegável para validação de jornada, reunindo arquitetura de informação, estados e interações essenciais.",
      },
      {
        title: "Projeto 4",
        description:
          "Sistema de componentes para produto digital, com padrões de formulário, navegação, feedback e estados responsivos.",
      },
      {
        title: "Projeto 5",
        description:
          "Arquitetura de informacao para aplicativo, com fluxos mais curtos, hierarquia clara e estados pensados para decisao rapida.",
      },
      {
        title: "Projeto 6",
        description:
          "Redesenho de interface mobile para melhorar leitura, reduzir ruido e deixar a experiencia mais consistente entre jornadas.",
      },
      {
        title: "Projeto 7",
        description:
          "Biblioteca de componentes para operacao digital, reunindo padroes de navegacao, cards, filtros e confirmacoes.",
      },
      {
        title: "Projeto 8",
        description:
          "Experiencia de onboarding orientada por clareza, ritmo e microinteracoes sutis para aumentar confianca do usuario.",
      },
    ],
  },
  {
    filter: "Social Media",
    projects: [
      {
        title: "Projeto 1",
        description:
          "Direção visual para conteúdo recorrente, criando consistência entre posts, campanhas, chamadas comerciais e peças institucionais.",
      },
      {
        title: "Projeto 2",
        description:
          "Campanha social para lançamento, com linha editorial, templates, variações de formato e narrativa visual de apoio.",
      },
      {
        title: "Projeto 3",
        description:
          "Sistema de posts para marca de serviço, mantendo ritmo, clareza e reconhecimento sem depender de layouts repetidos.",
      },
      {
        title: "Projeto 4",
        description:
          "Peças estratégicas para awareness e conversão, conectando design, copy e direção de conteúdo em um calendário visual.",
      },
      {
        title: "Projeto 5",
        description:
          "Pacote visual para redes com capas, carrosséis e templates editáveis alinhados à identidade principal da marca.",
      },
      {
        title: "Projeto 6",
        description:
          "Linha visual para campanha de awareness, com pecas estaticas, carrosseis e variacoes de chamada por etapa do funil.",
      },
      {
        title: "Projeto 7",
        description:
          "Calendario visual para marca especialista, equilibrando conteudo educativo, prova social e ofertas sem perder unidade.",
      },
      {
        title: "Projeto 8",
        description:
          "Sistema de templates para conteudo recorrente, com direcao de arte, hierarquia editorial e adaptacao por formato.",
      },
    ],
  },
  {
    filter: "Edição de vídeo",
    projects: [
      {
        title: "Projeto 1",
        description:
          "Edição de vídeo para campanha digital, com ritmo, cortes, lettering e acabamento visual alinhados à identidade da marca.",
      },
      {
        title: "Projeto 2",
        description:
          "Sequência curta para lançamento, construída para prender atenção nos primeiros segundos e sustentar a mensagem principal.",
      },
      {
        title: "Projeto 3",
        description:
          "Peças em motion para redes sociais, combinando tipografia, transições discretas e direção visual consistente.",
      },
    ],
  },
  {
    filter: "+ Mais",
    projects: [
      {
        title: "Projeto 1",
        description:
          "Projeto especial combinando estratégia, design e produção para resolver uma necessidade específica de comunicação da marca.",
      },
      {
        title: "Projeto 2",
        description:
          "Material de apresentação comercial com narrativa, design editorial e organização visual para apoiar decisões importantes.",
      },
      {
        title: "Projeto 3",
        description:
          "Direção criativa para campanha híbrida, reunindo conceito, linguagem visual, peças digitais e recomendações de uso.",
      },
      {
        title: "Projeto 4",
        description:
          "Kit visual para operação interna, com documentos, templates e recursos que ajudam a marca a manter consistência no dia a dia.",
      },
      {
        title: "Projeto 5",
        description:
          "Experimento visual para ativação de marca, explorando composição, mensagem e formatos de entrega com mais liberdade criativa.",
      },
      {
        title: "Projeto 6",
        description:
          "Peças de apoio para evento, incluindo identidade de comunicação, materiais digitais e diretrizes rápidas de aplicação.",
      },
      {
        title: "Projeto 7",
        description:
          "Consultoria visual para organizar prioridades, corrigir ruídos de marca e orientar próximos passos com clareza.",
      },
      {
        title: "Projeto 8",
        description:
          "Sistema de assets para campanha pontual, preparado para adaptação em diferentes canais sem perder unidade visual.",
      },
    ],
  },
];

const projectMarkerColors = [
  "#B13A30",
  "#6E35B8",
  "#D132C5",
  "#1F77A8",
  "#2B7AA8",
  "#2B7AA8",
  "#2B7AA8",
  "#2B7AA8",
];

const projectClientsByFilter = [
  [
    "Mariana Costa",
    "Helena Duarte",
    "Rafael Nunes",
    "Clara Monteiro",
    "Bianca Torres",
    "Lucas Ferreira",
    "Nina Prado",
    "Sofia Almeida",
  ],
  [
    "Vitor Azevedo",
    "Camila Rocha",
    "André Moraes",
    "Laura Sanches",
    "Renato Vidal",
    "Paula Martins",
  ],
  [
    "Isabela Lima",
    "Daniel Pires",
    "Bruna Teixeira",
    "Felipe Cardoso",
    "Marina Lopes",
    "Theo Andrade",
    "Julia Campos",
    "Caio Moreira",
  ],
  ["Tatiana Reis", "Gustavo Leal", "Lívia Ramos", "Mateus Barros", "Joana Castro"],
  ["Caio Mendes", "Eva Martins", "Otávio Freire"],
  [
    "Manuela Vieira",
    "Rafaela Gomes",
    "Thomas Lima",
    "Eduarda Lopes",
    "Cecília Fontes",
    "Henrique Maia",
    "Lara Campos",
    "Miguel Silveira",
  ],
];

const projectCompaniesByFilter = [
  [
    "Orbis Studio",
    "Natura Forma",
    "Canto Norte",
    "Astra Consultoria",
    "Casa Vértice",
    "Vila Rara",
    "Matriz Clara",
    "Ponto Lume",
  ],
  [
    "Vento Labs",
    "Linha Real",
    "Prisma Tech",
    "Boreal Group",
    "Mirante Studio",
    "Atlas Digital",
  ],
  [
    "Neon Finance",
    "Corebase",
    "Fluxo Alto",
    "Nexo App",
    "Prisma Tech",
    "Lumina Collective",
    "Boreal Produto",
    "Atlas Digital",
  ],
  ["Soma Social", "Lume Café", "Trama Conteúdo", "Viva Norte", "Alba Skin"],
  ["Corte Lume", "Vento Motion", "Eixo Films"],
  [
    "Aurora Studio",
    "Mesa Onze",
    "Forma Livre",
    "Arquivo 22",
    "Solaris Lab",
    "Nadir Eventos",
    "Clara Strategy",
    "Axis Campaign",
  ],
];

const getProjectHref = (index: number) => `/portfolio/projetos/projeto-${index + 1}`;

const PortfolioProjectsShowcase = () => {
  const [activeFilterIndex, setActiveFilterIndex] = useState(0);
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);
  const activeGroup = portfolioGroups[activeFilterIndex];
  const activeProject = activeGroup.projects[activeProjectIndex];
  const activeClient =
    projectClientsByFilter[activeFilterIndex]?.[activeProjectIndex] ??
    "Cliente Splendori";
  const activeCompany =
    projectCompaniesByFilter[activeFilterIndex]?.[activeProjectIndex] ??
    activeProject.title;

  const imageTone = useMemo(
    () =>
      `linear-gradient(135deg, rgba(158,55,42,${0.04 + activeFilterIndex * 0.01}), rgba(142,144,161,${0.04 + activeProjectIndex * 0.006}))`,
    [activeFilterIndex, activeProjectIndex],
  );

  const handleFilterClick = (index: number) => {
    setActiveFilterIndex(index);
    setActiveProjectIndex(0);
  };

  return (
    <section className="w-full border-b border-[rgba(114,123,142,0.1)] bg-white text-[#434A57] dark:border-[rgba(255,255,255,0.1)] dark:bg-[#0A0A0A] dark:text-[#F7F7F8]">
      <div className="flex min-h-[236px] flex-col items-center justify-center border-b border-[rgba(114,123,142,0.1)] px-6 py-12 text-center dark:border-[rgba(255,255,255,0.1)] md:min-h-[236px] md:py-12">
        <p className="font-mono text-[12px] font-semibold uppercase leading-5.25 tracking-[0.09em] text-[#8E90A1]">
          PORTFÓLIO
        </p>
        <h2 className="mt-2 max-w-[760px] font-instrument-serif text-[36px] font-light leading-[38px] tracking-normal text-[#434A57] dark:text-[#F2F2F4]">
          Imagens{" "}
          <span className="italic text-[#9E372A]">valem mais</span> que mil
          propostas.
        </h2>

        <div className="mt-5.25 flex max-w-[610px] flex-wrap items-center justify-center gap-2.25">
          {portfolioGroups.map((group, index) => {
            const isActive = index === activeFilterIndex;

            return (
              <button
                key={group.filter}
                type="button"
                aria-pressed={isActive}
                onClick={() => handleFilterClick(index)}
                className={[
                  "h-9 rounded-[200px] border px-4 font-sans text-[14px] leading-5 transition-colors duration-300",
                  "focus:outline-none focus-visible:ring-2 focus-visible:ring-[#9E372A]/25",
                  isActive
                    ? "border-[#E7B4AD] bg-[#EADCDB] text-[#9E372A]"
                    : "border-dashed border-[#D6DAE2] bg-white text-[#8E90A1] hover:border-[#C4CAD5] hover:text-[#434A57] dark:bg-[#101116] dark:hover:text-[#F7F7F8]",
                ].join(" ")}
              >
                {group.filter}
              </button>
            );
          })}
        </div>
      </div>

      <div className="grid min-h-[520px] border-b border-[rgba(114,123,142,0.1)] dark:border-[rgba(255,255,255,0.1)] lg:grid-cols-[48%_52%]">
        <article className="flex min-h-[360px] items-center border-b border-[rgba(114,123,142,0.1)] px-6 py-16 dark:border-[rgba(255,255,255,0.1)] md:px-13.5 lg:min-h-[520px] lg:border-b-0 lg:border-r">
          <div className="max-w-108.75">
            <p className="mb-3 font-mono text-[12px] font-semibold uppercase leading-5.25 tracking-[0.09em] text-[#9E372A]">
              {activeClient}
            </p>
            <h3 className="font-instrument-serif text-[30px] font-light leading-[34px] text-[#434A57] dark:text-[#F4F4F5]">
              {activeCompany}
            </h3>
            <p className="mt-3.5 font-sans text-[14px] font-normal leading-4.75 text-[#8E90A1]">
              {activeProject.description}
            </p>
            <Link
              href={getProjectHref(activeProjectIndex)}
              className="mt-5.25 inline-flex h-9 flex-row items-center justify-center gap-2.5 rounded-[200px] border border-[rgba(114,123,142,0.1)] bg-[#12141B] px-4 py-2 transition-colors hover:bg-[#9E372A] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#9E372A]/25 dark:border-[rgba(255,255,255,0.1)] dark:bg-[#F1F2F4] group"
            >
              <Star
                color="#FFFFFF"
                className="transition-colors group-hover:fill-[#FFFFFF] dark:fill-[#12141B] dark:group-hover:fill-[#FFFFFF]"
              />
              <span className="font-sans text-[14px] leading-5 text-center text-white dark:text-[#12141B] dark:group-hover:text-white">
                Veja mais sobre
              </span>
            </Link>
          </div>
        </article>

        <div
          aria-label={`Imagem do ${activeProject.title} em ${activeGroup.filter}`}
          className="min-h-[360px] bg-[#FAFAFA] transition-colors duration-500 dark:bg-[#101116] lg:min-h-[520px]"
          style={{ background: imageTone }}
        />
      </div>

      <nav
        aria-label={`Projetos de ${activeGroup.filter}`}
        className="flex min-h-[100px] items-center overflow-x-auto px-6 py-6 sm:justify-center md:px-13.5"
      >
        <div className="flex min-w-max items-center gap-2.25">
          {activeGroup.projects.map((project, index) => {
            const isActive = index === activeProjectIndex;

            return (
              <button
                key={`${activeGroup.filter}-${project.title}-${index}`}
                type="button"
                aria-pressed={isActive}
                onClick={() => setActiveProjectIndex(index)}
                className={[
                  "group inline-flex h-9 items-center gap-2.5 rounded-[200px] border px-4 font-sans text-[14px] leading-5 transition-colors duration-300",
                  "focus:outline-none focus-visible:ring-2 focus-visible:ring-[#9E372A]/25",
                  isActive
                    ? "border-[#D4D9E2] bg-[#FAFAFA] text-[#434A57] dark:bg-[#101116] dark:text-[#F7F7F8]"
                    : "border-[#E6E9EF] bg-white text-[#8E90A1] hover:border-[#D4D9E2] hover:text-[#434A57] dark:border-[rgba(255,255,255,0.1)] dark:bg-[#0D0E13] dark:hover:text-[#F7F7F8]",
                ].join(" ")}
              >
                <span
                  aria-hidden="true"
                  className="relative size-3.5 shrink-0 before:absolute before:left-1/2 before:top-0 before:h-full before:w-1.5 before:-translate-x-1/2 before:rounded-[2px] before:bg-[var(--project-marker)] after:absolute after:left-0 after:top-1/2 after:h-1.5 after:w-full after:-translate-y-1/2 after:rounded-[2px] after:bg-[var(--project-marker)]"
                  style={
                    {
                      "--project-marker": projectMarkerColors[index],
                    } as React.CSSProperties
                  }
                />
                <span>{project.title.replace("Projeto ", "Projeto 0")}</span>
              </button>
            );
          })}
        </div>
      </nav>
    </section>
  );
};

export default PortfolioProjectsShowcase;
