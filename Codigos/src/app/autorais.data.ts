import type { ProjectDetails } from "@/app/projetos.data";

export const autoraisData: ProjectDetails[] = [
  {
    id: "autoral-1",
    slug: "estudo-visual-1",
    title: "Estudo Visual Solaris",
    category: "AUTORAL",
    description:
      "Um estudo de direção visual para explorar luz, composição editorial e sistemas gráficos em uma linguagem mais livre.",
    coverImage: "",
    coverImageAlt: "Capa do estudo Solaris",
    content: {
      sections: [
        {
          type: "text",
          title: "Exploração",
          text: "A proposta nasceu como investigação estética: reduzir ruído, testar ritmo visual e transformar composição em presença.",
        },
        {
          type: "text",
          title: "Linguagem",
          text: "O resultado combina tipografia, contraste e respiro para criar um estudo que funciona como referência de direção criativa.",
        },
      ],
    },
    technologies: ["Direção visual", "Editorial", "Pesquisa estética"],
    year: 2024,
    client: "Splendori Lab",
  },
  {
    id: "autoral-2",
    slug: "estudo-visual-2",
    title: "Arquivo de Formas Nadir",
    category: "AUTORAL",
    description:
      "Uma investigação sobre símbolos, grids e fragmentos gráficos para construir uma narrativa visual precisa e silenciosa.",
    coverImage: "",
    coverImageAlt: "Capa do estudo Nadir",
    content: {
      sections: [
        {
          type: "text",
          title: "Sistema",
          text: "A série trabalha com regras simples de escala, alinhamento e repetição para encontrar tensão sem excesso de decoração.",
        },
        {
          type: "text",
          title: "Resultado",
          text: "O estudo gerou um vocabulário visual aplicável a campanhas, capas, apresentações e identidades mais experimentais.",
        },
      ],
    },
    technologies: ["Sistema gráfico", "Grid", "Composição"],
    year: 2024,
    client: "Splendori Lab",
  },
  {
    id: "autoral-3",
    slug: "estudo-visual-3",
    title: "Caderno Editorial Vero",
    category: "AUTORAL",
    description:
      "Um protótipo editorial para testar ritmo de leitura, legendas, margens e imagem como elemento de autoridade visual.",
    coverImage: "",
    coverImageAlt: "Capa do estudo Vero",
    content: {
      sections: [
        {
          type: "text",
          title: "Ritmo",
          text: "A peça organiza blocos longos e curtos para testar como a hierarquia tipográfica conduz atenção sem precisar de ornamento.",
        },
      ],
    },
    technologies: ["Editorial", "Tipografia", "Art direction"],
    year: 2024,
    client: "Splendori Lab",
  },
  {
    id: "autoral-4",
    slug: "estudo-visual-4",
    title: "Interface Conceito Lume",
    category: "AUTORAL",
    description:
      "Uma interface conceitual para estudar produto digital com mais calma, precisão e qualidade visual de apresentação.",
    coverImage: "",
    coverImageAlt: "Capa do estudo Lume",
    content: {
      sections: [
        {
          type: "text",
          title: "Interface",
          text: "O estudo explora navegação, estados e hierarquia para imaginar uma experiência digital que parece produto e publicação ao mesmo tempo.",
        },
      ],
    },
    technologies: ["UI", "Produto", "Conceito"],
    year: 2024,
    client: "Splendori Lab",
  },
  {
    id: "autoral-5",
    slug: "estudo-visual-5",
    title: "Série Material Alba",
    category: "AUTORAL",
    description:
      "Uma série visual focada em materialidade, luz e contenção para estudar luxo discreto sem clichês visuais.",
    coverImage: "",
    coverImageAlt: "Capa do estudo Alba",
    content: {
      sections: [
        {
          type: "text",
          title: "Materialidade",
          text: "A direção trabalha com superfícies discretas, contraste suave e composição precisa para criar valor por controle, não por excesso.",
        },
      ],
    },
    technologies: ["Quiet luxury", "Imagem", "Direção"],
    year: 2024,
    client: "Splendori Lab",
  },
  {
    id: "autoral-6",
    slug: "estudo-visual-6",
    title: "Mapa Tipográfico Axis",
    category: "AUTORAL",
    description:
      "Um experimento de tipografia e informação para transformar dados, legendas e marcações em uma composição editorial.",
    coverImage: "",
    coverImageAlt: "Capa do estudo Axis",
    content: {
      sections: [
        {
          type: "text",
          title: "Estrutura",
          text: "O projeto investiga como grids e pequenas marcações podem criar navegação visual e sensação de sistema em uma peça autoral.",
        },
      ],
    },
    technologies: ["Swiss system", "Tipografia", "Informação"],
    year: 2024,
    client: "Splendori Lab",
  },
];

export function getAutoralBySlug(
  slug: string | string[] | undefined,
): ProjectDetails | undefined {
  if (!slug) return undefined;
  const normalizedSlug = Array.isArray(slug) ? slug.join("/") : slug;
  return autoraisData.find((project) => project.slug === normalizedSlug);
}

export function getAllAutoralSlugs(): string[] {
  return autoraisData.map((project) => project.slug);
}
