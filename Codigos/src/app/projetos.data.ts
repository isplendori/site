export interface ProjectDetails {
  id: string;
  slug: string;
  title: string;
  category: string;
  description: string;
  coverImage: string;
  coverImageAlt: string;
  content: {
    sections: Array<{
      type: "text" | "image" | "gallery";
      title?: string;
      text?: string;
      image?: string;
      imageAlt?: string;
      images?: Array<{ src: string; alt: string }>;
    }>;
  };
  technologies?: string[];
  year?: number;
  client?: string;
}

export const projectsData: ProjectDetails[] = [
  {
    id: "1",
    slug: "projeto-1",
    title: "Sistema de Marca Orbis",
    category: "IDENTIDADE",
    description: "Desenvolvemos uma marca premium para um estúdio criativo focado em inovação e humanização.",
    coverImage: "/projects/cover-1.svg",
    coverImageAlt: "Capa do Projeto Orbis",
    content: {
      sections: [
        {
          type: "text",
          title: "Visão do projeto",
          text: "O desafio era traduzir um posicionamento sofisticado em um sistema visual leve, funcional e memorável. Construímos uma identidade que equilibra elegância, contraste e personalidade.",
        },
        {
          type: "image",
          image: "/projects/detail-1.svg",
          imageAlt: "Detalhe da identidade visual Orbis",
        },
        {
          type: "text",
          title: "Resultado",
          text: "A nova marca é usada em apresentações, website e peças digitais, ajudando o cliente a comunicar credibilidade e distinção em um mercado competitivo.",
        },
      ],
    },
    technologies: ["Branding", "Identidade", "Design estratégico"],
    year: 2024,
    client: "Orbis Studio",
  },
  {
    id: "2",
    slug: "projeto-2",
    title: "Campanha Lançamento Vento",
    category: "ESTRATÉGIA",
    description: "Estruturamos a narrativa digital de um lançamento de produto com foco em experiência, conversão e clareza criativa.",
    coverImage: "/projects/cover-2.svg",
    coverImageAlt: "Capa do Projeto Vento",
    content: {
      sections: [
        {
          type: "text",
          title: "Estratégia criativa",
          text: "Criamos jornadas de conteúdo que posicionaram o produto como solução desejável e moderna. A entrega incluiu conceito, peças de campanha e blueprint de comunicação.",
        },
        {
          type: "image",
          image: "/projects/detail-2.svg",
          imageAlt: "Roadmap digital do Projeto Vento",
        },
        {
          type: "text",
          title: "Impacto",
          text: "O lançamento apresentou aumento de interesse imediato e abriu espaço para conversões com discurso direto e visual autoral.",
        },
      ],
    },
    technologies: ["Marketing", "Campanha", "Performance"],
    year: 2024,
    client: "Vento Labs",
  },
  {
    id: "3",
    slug: "projeto-3",
    title: "Plataforma Neon",
    category: "DIGITAL",
    description: "Redesenhamos a experiência de plataforma para uma fintech que precisava de mais clareza e engajamento em telas digitais.",
    coverImage: "/projects/cover-3.svg",
    coverImageAlt: "Capa do Projeto Neon",
    content: {
      sections: [
        {
          type: "text",
          title: "Design de produto",
          text: "O trabalho focou em simplificar fluxos complexos mantendo uma interface elegante e acessível, com sistemas de feedback visuais e microinterações discretas.",
        },
        {
          type: "image",
          image: "/projects/detail-3.svg",
          imageAlt: "Detalhe da experiência Neon",
        },
        {
          type: "text",
          title: "Resultado",
          text: "A nova interface melhorou a percepção de valor e facilitou a jornada do usuário, especialmente em telas de onboarding e saída de conversão.",
        },
      ],
    },
    technologies: ["UX/UI", "Produto", "Design digital"],
    year: 2024,
    client: "Neon Finance",
  },
  {
    id: "4",
    slug: "projeto-4",
    title: "Rebrand Astra",
    category: "MARCA",
    description: "A transformação da identidade visual na Astra foi feita para posicionar o cliente como referência em soluções premium.",
    coverImage: "/projects/cover-4.svg",
    coverImageAlt: "Capa do Projeto Astra",
    content: {
      sections: [
        {
          type: "text",
          title: "Novo posicionamento",
          text: "Refinamos o sistema de marca, paleta e tipografia para criar uma presença mais exclusiva, alinhada ao novo posicionamento de mercado.",
        },
        {
          type: "image",
          image: "/projects/detail-4.svg",
          imageAlt: "Detalhe do rebrand Astra",
        },
        {
          type: "text",
          title: "Aplicações",
          text: "A marca passou a ser aplicada em materiais impressos, digital e ambientes, garantindo consistência e impacto em todos os pontos de contato.",
        },
      ],
    },
    technologies: ["Marca", "Rebrand", "Design de sistema"],
    year: 2024,
    client: "Astra Consultoria",
  },
  {
    id: "5",
    slug: "projeto-5",
    title: "UX Flow Prisma",
    category: "PRODUTO",
    description: "Desenvolvemos um fluxo de produto com prototipagem rápida, focado em captura de leads e melhor experiência mobile.",
    coverImage: "/projects/cover-5.svg",
    coverImageAlt: "Capa do Projeto Prisma",
    content: {
      sections: [
        {
          type: "text",
          title: "Prototipagem e testes",
          text: "Criamos protótipos interativos e testamos hipóteses de navegação para reduzir atrito e acelerar decisões de design.",
        },
        {
          type: "image",
          image: "/projects/detail-5.svg",
          imageAlt: "Detalhe do fluxo Prisma",
        },
        {
          type: "text",
          title: "Benefícios",
          text: "O novo fluxo ajudou o cliente a qualificar leads com mais rapidez e melhorar a taxa de conversão do seu produto digital.",
        },
      ],
    },
    technologies: ["UX", "Prototipagem", "Mobile"],
    year: 2024,
    client: "Prisma Tech",
  },
  {
    id: "6",
    slug: "projeto-6",
    title: "Interface Lumina",
    category: "DIGITAL",
    description: "Criamos uma interface visual impactante para uma marca de lifestyle com foco em elegância e conteúdo.",
    coverImage: "/projects/cover-6.svg",
    coverImageAlt: "Capa do Projeto Lumina",
    content: {
      sections: [
        {
          type: "text",
          title: "Layout premium",
          text: "O projeto valorizou imagens e conteúdo com uma composição limpa, tipografia de alto contraste e navegação intuitiva.",
        },
        {
          type: "image",
          image: "/projects/detail-6.svg",
          imageAlt: "Detalhe da interface Lumina",
        },
        {
          type: "text",
          title: "Resultado",
          text: "A interface fortaleceu a identidade digital da marca e trouxe maior envolvimento dos visitantes, especialmente em dispositivos grandes.",
        },
      ],
    },
    technologies: ["UI", "Conteúdo", "Design editorial"],
    year: 2024,
    client: "Lumina Collective",
  },
  {
    id: "7",
    slug: "projeto-7",
    title: "Ativação Atlas",
    category: "CAMPANHA",
    description: "Criamos uma ativação visual para campanha pontual, com narrativa, peças digitais e sistema de assets para diferentes canais.",
    coverImage: "/projects/cover-1.svg",
    coverImageAlt: "Capa do Projeto Atlas",
    content: {
      sections: [
        {
          type: "text",
          title: "Direção criativa",
          text: "A entrega conectou conceito, ritmo visual e aplicações práticas para dar unidade à campanha sem perder flexibilidade entre formatos.",
        },
        {
          type: "image",
          image: "/projects/detail-1.svg",
          imageAlt: "Detalhe da ativação Atlas",
        },
        {
          type: "text",
          title: "Resultado",
          text: "O projeto ajudou a marca a lançar uma comunicação mais consistente, com materiais prontos para redes, apresentação e tráfego.",
        },
      ],
    },
    technologies: ["Campanha", "Direção criativa", "Assets digitais"],
    year: 2024,
    client: "Atlas Group",
  },
  {
    id: "8",
    slug: "projeto-8",
    title: "Sistema Aurora",
    category: "ESTRATÉGIA",
    description: "Desenvolvemos um sistema visual e estratégico para organizar materiais comerciais, conteúdo e apresentações de marca.",
    coverImage: "/projects/cover-2.svg",
    coverImageAlt: "Capa do Projeto Aurora",
    content: {
      sections: [
        {
          type: "text",
          title: "Sistema de comunicação",
          text: "O trabalho estruturou mensagens, hierarquias e componentes visuais para tornar a comunicação da marca mais precisa e reutilizável.",
        },
        {
          type: "image",
          image: "/projects/detail-2.svg",
          imageAlt: "Detalhe do sistema Aurora",
        },
        {
          type: "text",
          title: "Resultado",
          text: "A marca passou a ter materiais mais consistentes, com melhor leitura comercial e uma base preparada para novas campanhas.",
        },
      ],
    },
    technologies: ["Estratégia", "Design editorial", "Sistema visual"],
    year: 2024,
    client: "Aurora Studio",
  },
];

export function getProjectBySlug(slug: string | string[] | undefined): ProjectDetails | undefined {
  if (!slug) return undefined;
  const normalizedSlug = Array.isArray(slug) ? slug.join("/") : slug;
  return projectsData.find((project) => project.slug === normalizedSlug);
}

export function getAllProjectSlugs(): string[] {
  return projectsData.map((project) => project.slug);
}
