"use client";

import type { ReactNode } from "react";
import { useMemo, useState } from "react";

import { defaultBrands } from "@/app/page.data";
import BrandDivider from "@/components/molecules/BrandDivider";
import { HeroSection } from "@/components/organisms";
import MainLayout from "@/components/templates/MainLayout";

type AreaTab = "training" | "scripts";
type TrainingTab =
  | "overview"
  | "services"
  | "flow"
  | "channels"
  | "objections"
  | "kpis";
type ScriptTab = "instagram" | "whatsapp" | "linkedin" | "coldcalls";
type ServiceFilter =
  | "Todos"
  | "Marca"
  | "Aquisição"
  | "Conteúdo"
  | "Produto digital"
  | "Vídeo";
type Channel = "WhatsApp" | "LinkedIn" | "Instagram";
type SalesScript = {
  title: string;
  tip: string;
  parts: Array<{
    label: string;
    text: string;
  }>;
  nextSteps: string[];
};

const trainingTabs: Array<{
  id: TrainingTab;
  label: string;
  number: string;
}> = [
  { id: "overview", label: "Visão", number: "01" },
  { id: "services", label: "Serviços", number: "02" },
  { id: "flow", label: "Fluxo", number: "03" },
  { id: "channels", label: "Canais", number: "04" },
  { id: "objections", label: "Objeções", number: "05" },
  { id: "kpis", label: "KPIs", number: "06" },
];

const scriptTabs: Array<{
  id: ScriptTab;
  label: string;
  number: string;
}> = [
  { id: "instagram", label: "Instagram", number: "01" },
  { id: "whatsapp", label: "WhatsApp", number: "02" },
  { id: "linkedin", label: "LinkedIn", number: "03" },
  { id: "coldcalls", label: "Coldcalls", number: "05" },
];

const channelTabs: Array<{
  id: Channel;
  label: string;
  number: string;
}> = [
  { id: "Instagram", label: "Instagram", number: "01" },
  { id: "WhatsApp", label: "WhatsApp", number: "02" },
  { id: "LinkedIn", label: "Linkedin", number: "03" },
];

const overviewBlocks = [
  {
    title: "O que é um SDR aqui",
    body: "Sales Development Representative: responsável por prospecção e qualificação, não por fechamento. Sua missão: encontrar empresas com perfil ideal, despertar interesse real e agendar a conversa com o comercial. Você é a primeira impressão da Outframe.",
  },
  {
    title: "Nosso posicionamento",
    body: "Não somos agência genérica. Entregamos resultado mensurável com estratégia real, design diferenciado e execução técnica de alto nível. Isso precisa aparecer em cada mensagem sua: na escolha das palavras, no tom, no que você escolhe destacar.",
  },
  {
    title: "Perfil de cliente ideal: ICP",
    body: "Empresas que já faturam e querem crescer online. Não startups sem caixa. Negócios com produto ou serviço validado que precisam de presença digital forte ou querem escalar o que já funciona.",
    chips: [
      "PMEs em crescimento",
      "E-commerces",
      "Profissionais liberais",
      "Serviços B2B",
      "Clínicas & consultórios",
      "Escritórios",
    ],
  },
];

const notSdrRole = [
  "Fechar contratos ou discutir preços em detalhe",
  "Prometer prazos ou escopo sem validação do time",
  "Enviar proposta sem passar pelo comercial",
  "Discutir desconto, crédito ou condições financeiras",
];

const services: Array<{
  name: string;
  label: string;
  filter: Exclude<ServiceFilter, "Todos">;
  fit: string;
  tags: string[];
  pitch: string;
}> = [
  {
    name: "Branding",
    label: "Identidade",
    filter: "Marca",
    fit: "Empresas sem identidade visual consistente, novos negócios ou reposicionamentos.",
    tags: ["Identidade visual", "Tom de voz", "Posicionamento"],
    pitch:
      "Branding é a razão pela qual o cliente escolhe você e não o concorrente com preço igual. A gente cria a identidade visual, o tom de voz e o posicionamento que fazem a marca ser reconhecida e cobrar mais por isso.",
  },
  {
    name: "Estratégia",
    label: "Marketing",
    filter: "Aquisição",
    fit: "Negócios que fazem ações soltas e não sabem qual canal realmente puxa crescimento.",
    tags: ["Diagnóstico", "Plano de ação", "Prioridades"],
    pitch:
      "Estratégia coloca ordem no crescimento. A gente entende o mercado, define prioridades e transforma marketing em direção clara, com menos achismo e mais decisão.",
  },
  {
    name: "Social media",
    label: "Conteúdo",
    filter: "Conteúdo",
    fit: "Marcas com redes ativas, mas sem consistência, narrativa ou percepção de valor.",
    tags: ["Calendário", "Narrativa", "Criativos"],
    pitch:
      "Social media não é postar por postar. A gente organiza presença, cria conteúdo com intenção e faz a marca parecer tão boa no digital quanto ela é na entrega.",
  },
  {
    name: "Gestão de redes",
    label: "Conteúdo",
    filter: "Conteúdo",
    fit: "Empresas que precisam manter canais vivos sem perder padrão, frequência ou resposta.",
    tags: ["Rotina", "Publicação", "Acompanhamento"],
    pitch:
      "Gestão de redes sustenta a presença da marca. A gente cuida da consistência, da publicação e da leitura do que funciona para o perfil evoluir com método.",
  },
  {
    name: "Tráfego pago",
    label: "Performance",
    filter: "Aquisição",
    fit: "Negócios que já validaram oferta e precisam gerar demanda com previsibilidade.",
    tags: ["Mídia", "Campanhas", "Otimização"],
    pitch:
      "Tráfego pago compra atenção, mas só funciona quando existe estratégia. A gente estrutura campanhas para atrair leads melhores e medir o que de fato vira oportunidade.",
  },
  {
    name: "Copy",
    label: "Texto",
    filter: "Aquisição",
    fit: "Empresas que têm boa entrega, mas comunicam pouco valor ou explicam mal a oferta.",
    tags: ["Mensagem", "Argumento", "Conversão"],
    pitch:
      "Copy transforma valor em palavras que geram ação. A gente ajusta promessa, clareza e argumento para o cliente entender rápido por que deve continuar a conversa.",
  },
  {
    name: "Landing page",
    label: "Conversão",
    filter: "Produto digital",
    fit: "Campanhas, lançamentos ou ofertas que precisam converter tráfego em lead ou venda.",
    tags: ["Oferta", "Página", "CTA"],
    pitch:
      "Landing page é onde o interesse vira contato. A gente constrói páginas focadas em clareza, prova e conversão, sem distração e sem discurso genérico.",
  },
  {
    name: "Sites",
    label: "Presença",
    filter: "Produto digital",
    fit: "Empresas com site antigo, fraco, lento ou desalinhado com o nível real do negócio.",
    tags: ["Institucional", "UX", "Credibilidade"],
    pitch:
      "Site é vitrine, filtro e vendedor silencioso. A gente cria presença digital com estética, performance e informação organizada para aumentar confiança desde o primeiro clique.",
  },
  {
    name: "Sistemas",
    label: "Automação",
    filter: "Produto digital",
    fit: "Operações que perdem tempo em processos manuais, planilhas ou atendimento repetitivo.",
    tags: ["Fluxos", "Painéis", "Automação"],
    pitch:
      "Sistemas reduzem ruído operacional. A gente desenvolve soluções sob medida para automatizar etapas, organizar dados e dar mais controle para o negócio escalar.",
  },
  {
    name: "Edição de vídeo",
    label: "Vídeo",
    filter: "Vídeo",
    fit: "Marcas que gravam conteúdo, mas precisam transformar material bruto em peças fortes.",
    tags: ["Cortes", "Ritmo", "Retenção"],
    pitch:
      "Edição de vídeo melhora retenção e percepção. A gente transforma gravações em conteúdos mais claros, dinâmicos e alinhados com a identidade da marca.",
  },
  {
    name: "Motions",
    label: "Vídeo",
    filter: "Vídeo",
    fit: "Marcas que precisam explicar, destacar ou sofisticar conteúdos com movimento.",
    tags: ["Animação", "Destaque", "Explicação"],
    pitch:
      "Motion dá vida à mensagem. A gente usa movimento para destacar informação, reforçar identidade e tornar conteúdos mais memoráveis sem perder clareza.",
  },
];

const prospectingFlow = [
  {
    step: "01",
    title: "Pesquisa & lista",
    body: "Antes de qualquer mensagem, pesquise o lead: site, redes sociais, Google Meu Negócio e reviews. Entenda o nicho, dores aparentes e presença digital atual.",
    tip: "DICA: Abra o Instagram deles. Bio mal escrita, feed sem padrão ou link que não funciona já te dá munição para a abordagem.",
  },
  {
    step: "02",
    title: "Primeiro contato",
    body: "Personalize sempre. Nunca mande mensagem genérica. Mencione algo específico do negócio deles. O objetivo aqui é apenas gerar resposta, não vender.",
    tip: 'EX WhatsApp: "Oi, [Nome]! Vi que a [Empresa] tem um produto incrível, mas o site não está acompanhando. Vocês têm pensado em melhorar a presença digital?"',
  },
  {
    step: "03",
    title: "Qualificação",
    body: "Faça perguntas abertas. Ouça mais do que fala. Valide se o lead tem orçamento, decisão e urgência. Framework BANT: Budget, Authority, Need, Timeline.",
    tip: '"Qual o maior desafio para atrair clientes hoje?" / "Já trabalharam com agência antes? Como foi?" / "Têm previsão de quando querem resolver isso?"',
  },
  {
    step: "04",
    title: "Conexão com solução",
    body: "Com base no que você ouviu, conecte a dor deles a um ou dois serviços específicos. Não despeje o catálogo completo: seja cirúrgico.",
    tip: '"O problema maior é atrair cliente novo. A gente trabalha com tráfego pago + landing page para negócios assim. Consigo te mostrar um case parecido?"',
  },
  {
    step: "05",
    title: "Agendamento",
    body: 'Ofereça sempre duas opções de horário, nunca "quando você puder". Confirme o nome de quem vai participar do lado deles.',
    tip: '"Consigo agendar uma conversa de 20 min com nosso estrategista. Funciona terça às 10h ou quarta às 14h?"',
  },
  {
    step: "06",
    title: "Follow-up",
    body: 'A maioria dos fechamentos acontece no 5º ou 6º contato. Siga a cadência: D+1, D+3, D+7, D+14. Cada follow-up precisa trazer valor, não apenas "oi, viu minha mensagem?".',
    tip: '"Lembrei de você porque publicamos um resultado novo no seu segmento essa semana. Faz sentido eu te mandar?"',
  },
];

const scriptLibrary: Record<ScriptTab, SalesScript[]> = {
  instagram: [
    {
      title: "Primeiro Contato — Instagram DM",
      tip: "Uma frase de observação + uma pergunta só. Sem pitch, sem apresentação. Objetivo: resposta.",
      parts: [
        {
          label: "Mensagem",
          text: "Oi [Nome]! Vi o perfil de vocês — tem potencial claro, mas o alcance não tá fazendo jus ao que vocês oferecem.\n\nVocês já têm alguém cuidando disso ou ainda não é prioridade?",
        },
      ],
      nextSteps: ["Follow-up", "Qualificação", "Reativação"],
    },
    {
      title: "Follow-up — Instagram DM",
      tip: "Break-up message. Dê uma saída — isso aumenta a taxa de resposta.",
      parts: [
        {
          label: "Mensagem",
          text: "Oi [Nome]! Mandei uma mensagem semana passada mas sei como a DM some por aqui.\n\nÚltima tentativa: faz sentido eu continuar tentando ou o momento não é esse? Pode ser direto(a), não tem problema 😊",
        },
      ],
      nextSteps: ["Primeiro Contato", "Qualificação", "Reativação"],
    },
    {
      title: "Qualificação — Instagram DM",
      tip: "Frame como 'preciso entender antes de recomendar'. 3 perguntas. Nem mais.",
      parts: [
        {
          label: "Mensagem",
          text: "Legal! Antes de qualquer coisa, preciso entender o contexto de vocês — senão fico só chutando.\n\n3 perguntas rápidas:\n1. Vocês já investem em anúncios ou é só orgânico?\n2. O maior problema hoje é aparecer pra mais gente ou converter quem já chega?\n3. Tem orçamento definido ou ainda está em aberto?\n\nCom isso sei exatamente o que faz sentido recomendar.",
        },
      ],
      nextSteps: ["Primeiro Contato", "Follow-up", "Reativação"],
    },
    {
      title: "Reativação — Instagram DM",
      tip: "Resultado concreto de cliente similar + pergunta direta. Sem rodeio.",
      parts: [
        {
          label: "Mensagem",
          text: "Oi [Nome]! Faz uns [X meses] desde a nossa última conversa.\n\nDesde então ajudamos um negócio parecido com o de vocês a [ex: dobrar o alcance orgânico e gerar 3x mais contatos em 45 dias].\n\nSeria diferente conversar agora?",
        },
      ],
      nextSteps: ["Primeiro Contato", "Follow-up", "Qualificação"],
    },
  ],
  whatsapp: [
    {
      title: "Primeiro Contato — WhatsApp",
      tip: "Abordagem em 2 etapas: peça permissão primeiro, depois apresente. Converte melhor que dump de texto.",
      parts: [
        {
          label: "Msg 1 — Abrir conversa",
          text: "Oi [Nome], tudo bem? 👋\n\nMe chamo [Seu Nome], da outframe. Vi o negócio de vocês e fiz uma observação rápida sobre o digital de vocês — posso te mandar?",
        },
        {
          label: "Msg 2 — Após resposta positiva",
          text: "Obrigado(a)! Então: [observação específica sobre o negócio deles — ex: o perfil tem boa frequência mas sem direcionamento de compra / o site não aparece no Google quando busco pelo segmento].\n\nA gente na outframe resolve exatamente isso — de forma integrada, sem você precisar gerenciar várias frentes.\n\nVale 15 minutos essa semana pra eu te mostrar o que dá pra fazer?",
        },
      ],
      nextSteps: ["Follow-up", "Qualificação", "Reativação"],
    },
    {
      title: "Follow-up — WhatsApp",
      tip: "Break-up message. Curto. Dê permissão pra dizer não — isso gera resposta.",
      parts: [
        {
          label: "Mensagem",
          text: "Oi [Nome]! Tentei contato há alguns dias.\n\nSei que a agenda aperta — só preciso saber: vale a pena eu continuar tentando ou o momento não é esse?\n\nPode ser direto(a), não tem problema 😊",
        },
      ],
      nextSteps: ["Primeiro Contato", "Qualificação", "Reativação"],
    },
    {
      title: "Qualificação — WhatsApp",
      tip: "Numeração facilita leitura no mobile. Feche com 'sem enrolação' — sinaliza respeito pelo tempo deles.",
      parts: [
        {
          label: "Mensagem",
          text: "Perfeito! 3 perguntas rápidas antes de qualquer proposta:\n\n1️⃣ Vocês já têm presença no digital hoje — redes, site, anúncios?\n2️⃣ O maior gap agora é aparecer pra mais gente, gerar leads ou converter melhor?\n3️⃣ Tem verba definida pra marketing ou ainda está avaliando?\n\nCom isso já sei exatamente o que faz sentido pra vocês — sem enrolação.",
        },
      ],
      nextSteps: ["Primeiro Contato", "Follow-up", "Reativação"],
    },
    {
      title: "Reativação — WhatsApp",
      tip: "Resultado novo + pergunta direta. Não peça desculpa pelo tempo — só retome com algo de valor.",
      parts: [
        {
          label: "Mensagem",
          text: "Oi [Nome]! [Seu Nome] aqui, da outframe. A gente tinha batido um papo [mês passado / há X semanas].\n\nTrouxe um caso novo: ajudamos um cliente do segmento de vocês a [resultado concreto — ex: sair do zero e fechar 40 leads em 30 dias com tráfego pago].\n\nAinda faz sentido retomar?",
        },
      ],
      nextSteps: ["Primeiro Contato", "Follow-up", "Qualificação"],
    },
  ],
  linkedin: [
    {
      title: "Primeiro Contato — LinkedIn",
      tip: "Insight-led: comece pelo problema deles, não pela sua empresa. 'Vi seu perfil' é genérico — seja específico.",
      parts: [
        {
          label: "Mensagem",
          text: "Olá, [Nome]. Vi que a [Empresa] está [crescendo / expandindo / lançando X] — momento interessante.\n\nNa outframe trabalhamos com empresas nesse estágio e vejo o mesmo padrão com frequência: o produto é sólido, mas a presença digital não acompanha o crescimento.\n\nVale 20 minutos essa semana pra ver se isso se aplica ao contexto de vocês?",
        },
      ],
      nextSteps: ["Follow-up", "Qualificação", "Reativação"],
    },
    {
      title: "Follow-up — LinkedIn",
      tip: "Não reenvie a mesma mensagem. Traga algo concreto: um diagnóstico rápido, um dado, uma observação nova.",
      parts: [
        {
          label: "Mensagem",
          text: "[Nome], reenvio minha mensagem anterior — mas com algo concreto dessa vez.\n\nDei uma olhada rápida no digital da [Empresa] e identifiquei [1 ponto específico — ex: o perfil tem boa frequência de posts mas nenhum CTA claro / o site não está indexado para os termos principais do segmento].\n\nPosso apresentar isso em 15 minutos. Quando seria bom pra você?",
        },
      ],
      nextSteps: ["Primeiro Contato", "Qualificação", "Reativação"],
    },
    {
      title: "Qualificação — LinkedIn",
      tip: "Tom consultivo. Perguntas abertas. Escute mais do que fala — e sinalize que vai chegar com proposta personalizada, não genérica.",
      parts: [
        {
          label: "Mensagem",
          text: "Ótimo, [Nome]. Antes de apresentar qualquer coisa, preciso entender o contexto:\n\n→ Hoje existe uma estratégia digital estruturada ou está mais reativo?\n→ Prioridade atual: aquisição de novos clientes, retenção ou posicionamento de marca?\n→ O marketing é gerenciado internamente, por agência ou ainda sem estrutura?\n\nAssim chego com algo que realmente faz sentido — sem proposta genérica.",
        },
      ],
      nextSteps: ["Primeiro Contato", "Follow-up", "Reativação"],
    },
    {
      title: "Reativação — LinkedIn",
      tip: "Use um gatilho externo real: post recente, expansão, novo produto, mudança de cargo. Mostra que você acompanhou.",
      parts: [
        {
          label: "Mensagem",
          text: "Olá, [Nome]. Vi que a [Empresa] [gatilho: publicou sobre expansão / lançou novo produto / você assumiu novo cargo] — parabéns.\n\nTiming costuma ser tudo nesse tipo de decisão, e isso me fez lembrar da nossa conversa anterior.\n\nAinda faz sentido conversar sobre a estratégia digital de vocês?",
        },
      ],
      nextSteps: ["Primeiro Contato", "Follow-up", "Qualificação"],
    },
  ],
  coldcalls: [
    {
      title: "Primeiro Contato — Cold Call",
      tip: "Meta: agendar reunião, nunca fechar na ligação. Fale menos de 60% do tempo. Se não tem alguém de marketing, é o lead mais quente.",
      parts: [
        {
          label: "Abertura",
          text: '"[Nome]? Oi, aqui é [Seu Nome], da outframe. Você tem 2 minutos?"',
        },
        {
          label: "Se SIM — pitch direto",
          text: '"Ótimo. Trabalho com marketing digital e vi o negócio de vocês — acredito que tem espaço pra crescer bastante no digital. Mas não vou entrar em detalhe sem entender o contexto de vocês primeiro.\n\nUma pergunta só: vocês já têm alguém cuidando do marketing hoje?"',
        },
        {
          label: "Se NÃO tem ninguém",
          text: '"Então vale muito a pena a gente bater um papo rápido. Tenho 15 minutos disponíveis [hoje às X ou amanhã de manhã] — qual funciona melhor pra você?"',
        },
        {
          label: "Se JÁ tem alguém",
          text: '"Que bom! Está funcionando bem ou tem alguma coisa que você ainda não está satisfeito(a)?"\n\n→ [Use a resposta pra qualificar ou agendar]',
        },
      ],
      nextSteps: ["Follow-up", "Qualificação", "Reativação"],
    },
    {
      title: "Follow-up — Cold Call",
      tip: "Mencione a tentativa anterior sem se desculpar. Seja direto sobre o objetivo — não é venda, é uma conversa de 5 minutos.",
      parts: [
        {
          label: "Script",
          text: '"[Nome]? Oi, [Seu Nome] aqui, da outframe. Tentei contato [X dias atrás] — não sei se chegou.\n\nVou ser direto(a): ligo pra entender se faz sentido a gente conversar sobre o marketing de vocês. Não é venda — é 5 minutos pra ver se há fit.\n\nVocê tem um tempinho agora?"',
        },
      ],
      nextSteps: ["Primeiro Contato", "Qualificação", "Reativação"],
    },
    {
      title: "Qualificação — Cold Call",
      tip: "Tom consultivo, não interrogatório. Finalize sempre com próximo passo concreto: proposta hoje + call agendada.",
      parts: [
        {
          label: "Abertura da qualificação",
          text: '"Ótimo que você topou conversar. Deixa eu fazer algumas perguntas rápidas — quanto mais eu entender sobre vocês, mais útil eu consigo ser:"',
        },
        {
          label: "Perguntas BANT",
          text: '"• Hoje vocês já investem em marketing digital de alguma forma?\n• Qual canal está trazendo mais cliente pra vocês agora?\n• O maior desafio é atrair novos clientes ou converter os que já chegam?\n• Quem mais está envolvido nessa decisão lá na empresa?"',
        },
        {
          label: "Encerramento",
          text: '"Com base no que você me contou, acredito que faz muito sentido montar uma proposta personalizada pra vocês. Posso te enviar ainda hoje — e a gente agenda 30 minutos pra passar juntos. Quando seria melhor: [opção A] ou [opção B]?"',
        },
      ],
      nextSteps: ["Primeiro Contato", "Follow-up", "Reativação"],
    },
    {
      title: "Reativação — Cold Call",
      tip: "Seja transparente sobre o histórico. Use resultado novo como gancho. Termine com pergunta aberta sobre timing.",
      parts: [
        {
          label: "Script",
          text: '"Oi [Nome], aqui é [Seu Nome], da outframe. A gente tinha conversado em [mês/período].\n\nLigo porque desde então ajudamos um cliente parecido com vocês a [resultado concreto — ex: estruturar o digital do zero e dobrar o faturamento online em 3 meses]. Achei que valia retomar.\n\nO momento mudou ou ainda não é prioridade?"',
        },
      ],
      nextSteps: ["Primeiro Contato", "Follow-up", "Qualificação"],
    },
  ],
};

const objections = [
  {
    title: "Sem prioridade agora",
    category: "Planejamento",
    role: "SDR",
    body: "Faz sentido, nem tudo entra como prioridade de imediato. Mas me diz com sinceridade... isso não é prioridade porque já está resolvido ou porque ainda não está impactando diretamente seus resultados? Te pergunto porque, na prática, quando isso não entra como prioridade, a empresa continua exatamente no mesmo ponto, sem previsibilidade de crescimento. Se existisse uma forma de estruturar isso pra começar a gerar resultado já nos próximos meses, não faria sentido pelo menos entender antes de deixar pra depois? Vamos fazer o seguinte: te mostro isso aplicado no seu cenário em uma conversa rápida e você decide com mais clareza depois. Pode ser? Pra você é melhor de manhã ou à tarde?",
  },
  {
    title: "Preciso pensar",
    category: "Insegurança",
    role: "SDR/Closer",
    body: "Perfeito, é importante pensar mesmo. Mas me fala com sinceridade, é uma dúvida específica que você quer analisar ou você ainda não viu valor suficiente pra tomar uma decisão agora? Porque se for dúvida, o melhor caminho não é pensar sozinho — é esclarecer. Se você precisa pensar é porque eu não consegui te mostrar tudo ainda, não ficou bem claro. Vamos fazer assim: me dá 20 minutinhos que eu te explico de forma direta como isso funcionaria no seu caso e você analisa com muito mais segurança e clareza depois. Faz sentido? Você prefere na sexta ou quinta?",
  },
  {
    title: "Preciso falar com sócio/time",
    category: "Planejamento",
    role: "SDR/Closer",
    body: "Perfeito, faz total sentido envolver eles. Mas normalmente quando você leva algo ainda em dúvida, a tendência é travar a decisão, concorda? O ideal é você já levar isso com clareza e segurança. Vamos fazer assim: eu te mostro exatamente como funcionaria no seu cenário, com números e estrutura, e você leva isso muito mais redondo pra eles. Inclusive, se fizer sentido, eles podem entrar na conversa também. Que tal alinharmos juntos? Você tem mais disponibilidade no começo ou final da semana?",
  },
  {
    title: "Não tenho tempo",
    category: "Tempo",
    role: "SDR",
    body: "Justo, a rotina é corrida mesmo. Mas deixa eu te perguntar: quanto tempo você perde hoje com falta de previsibilidade, processos manuais ou clientes que não chegam como deveriam? Porque o que a gente faz aqui é justamente organizar isso pra te devolver tempo e gerar resultado com mais consistência. Não é sobre te tomar tempo, é sobre otimizar. Se eu te mostrar isso de forma objetiva em 25 minutos, faz sentido encaixar na sua rotina? Você acha mais tranquilo terça às 15h ou às 17h?",
  },
  {
    title: "Estou sem orçamento",
    category: "Financeira",
    role: "SDR/Closer",
    body: "Total compreensível dependendo do momento. Mas deixa eu te trazer um ponto importante: normalmente isso não é sobre ter ou não orçamento, é sobre enxergar retorno. Porque quando algo fica claro que se paga e ainda gera lucro, ele deixa de ser custo e vira investimento. Talvez hoje você esteja sem orçamento justamente porque ainda não existe uma estrutura previsível de entrada de clientes. Se eu te mostrar um cenário onde isso pode se pagar com condições super facilitadas, faz sentido você ver antes de descartar? O que fica melhor, sexta ou segunda?",
  },
  {
    title: "Está caro",
    category: "Financeira",
    role: "SDR/Closer",
    body: "Total justo você olhar preço, todo mundo olha. Mas deixa eu te trazer um ponto: normalmente quando alguém sente que está caro, é porque ainda não ficou claro o quanto isso pode gerar de retorno. Hoje, com o que você tem, você consegue prever quantos clientes entram por mês? Ou ainda depende muito de indicação e esforço manual? Porque o que a gente constrói aqui não é só um site ou sistema, é uma estrutura pensada pra atrair, converter e escalar. Se eu te mostrar em uma reunião rápida como isso se pagaria sozinho no seu caso, faz sentido você ver antes de decidir?",
  },
  {
    title: "Não vejo ROI claro",
    category: "Resultados",
    role: "SDR/Closer",
    body: "Perfeito, e você está certo em pensar assim. Se não tem clareza de retorno, não faz sentido avançar mesmo. O ponto é que talvez você ainda não tenha visto como isso se conecta com geração de receita no seu caso. Porque quando bem estruturado, isso impacta direto na entrada de clientes e no posicionamento da sua marca. Se eu te mostrar um cenário mais concreto de retorno aplicado à sua realidade, você avaliaria diferente? Posso te mostrar na prática — segunda de manhã ou quarta à tarde?",
  },
  {
    title: "Já tentamos e não funcionou",
    category: "Resultados",
    role: "SDR/Closer",
    body: "Entendo e isso é mais comum do que parece. Mas me diz: o que vocês fizeram antes era realmente estruturado pra gerar resultado ou foi mais execução sem estratégia clara? Porque a maioria das tentativas falha não pelo canal, mas pela forma como foi construída. Aqui a gente entra justamente corrigindo essa base: posicionamento, estrutura e conversão. Se você puder ver o que foi diferente do que você já fez, faria sentido analisar antes de descartar? Posso te ajudar a ver onde estava o erro antes numa conversa breve de 30 minutinhos — para você é melhor na quinta ou sexta?",
  },
  {
    title: "Já temos alguém que faça",
    category: "Planejamento",
    role: "SDR",
    body: "Perfeito, isso é ótimo — mostra que você já valoriza isso. Mas hoje essa pessoa ou equipe está focada só em executar ou também está trazendo estratégia de crescimento previsível? Porque muitas empresas têm execução, mas não têm estrutura de conversão e posicionamento. A gente não substitui o que vocês já têm, nós ajudamos a potencializar. Se existir uma forma de extrair mais resultado do que você já tem hoje, faria sentido você ver? Fica melhor de manhã ou de tarde?",
  },
  {
    title: "Não confio ainda",
    category: "Insegurança",
    role: "SDR",
    body: "Super justo, ainda mais com tanta promessa no mercado. Mas confiança não vem de promessa, vem de clareza. Talvez o que esteja faltando aqui não seja confiar agora, mas entender melhor como isso funcionaria no seu caso. Se eu te mostrar de forma transparente — processo, estratégia e exemplos — você conseguiria avaliar com mais segurança? Vamos ter uma conversa rápida pra tirar isso da dúvida: você pode na quinta ou é melhor na terça?",
  },
  {
    title: "Não é algo que funciona para nós",
    category: "Resultados",
    role: "SDR",
    body: "Entendi. Mas me ajuda a entender melhor — você sente isso baseado em alguma experiência anterior ou é uma percepção geral? Porque, na prática, o que a gente constrói é adaptado à realidade de cada negócio, não é algo genérico. Muitas empresas achavam que não funcionaria… até ver aplicado no próprio cenário. Se eu te mostrar como isso se encaixaria exatamente no seu modelo, faz sentido você ver antes de descartar? Vamos conversar hoje à tarde ou você prefere amanhã de manhã?",
  },
  {
    title: "Momento errado",
    category: "Planejamento",
    role: "SDR/Closer",
    body: "Entendi. Mas me ajuda a entender melhor — você sente isso baseado em alguma experiência anterior ou é uma percepção geral? Porque, na prática, o que a gente constrói é adaptado à realidade de cada negócio, não é algo genérico. Muitas empresas achavam que não funcionaria… até ver aplicado no próprio cenário. Se eu te mostrar como isso se encaixaria exatamente no seu modelo, faz sentido você ver antes de descartar?",
  },
  {
    title: "Medo de risco",
    category: "Insegurança",
    role: "SDR/Closer",
    body: "Super válido — ninguém quer investir sem segurança. Mas deixa eu te perguntar: hoje, continuar como está também não é um risco? Porque ficar sem previsibilidade de crescimento ou sem estrutura também impacta diretamente no resultado. O que a gente faz aqui é reduzir esse risco com estratégia e estrutura bem definida. Se eu te mostrar isso com mais clareza, você se sentiria mais seguro pra avaliar?",
  },
  {
    title: "Já temos muitos projetos",
    category: "Planejamento",
    role: "SDR",
    body: "Perfeito, isso mostra que a empresa está em movimento. Mas me diz: esses projetos estão trazendo crescimento previsível ou ainda está tudo muito descentralizado? Porque às vezes não é sobre ter mais projetos, e sim ter os projetos certos. O que a gente faz aqui é organizar e potencializar o que realmente gera resultado. Se fizer sentido, posso te mostrar onde isso se encaixaria sem sobrecarregar o que vocês já têm. Podemos conversar na segunda ou terça?",
  },
  {
    title: "Preciso de mais detalhes do escopo",
    category: "Briefing",
    role: "SDR/Closer",
    body: "Perfeito, isso é importante mesmo. Mas te passar tudo agora por aqui pode até mais confundir do que ajudar, porque cada projeto é muito específico. O ideal é eu entender melhor o seu cenário e te mostrar exatamente como ficaria aplicado ao seu caso. Assim você não recebe algo genérico, mas sim algo direto ao ponto. Faz sentido a gente alinhar isso em uma conversa de 30 minutos — amanhã às 15h ou fica melhor às 17h?",
  },
  {
    title: "Não tenho certeza se preciso disso",
    category: "Planejamento",
    role: "SDR",
    body: "Perfeito — é exatamente isso que a gente precisa esclarecer então. Me diz: hoje você sente que sua empresa tem previsibilidade de crescimento ou ainda depende de esforço constante pra gerar resultado? Porque normalmente quando não existe essa estrutura, existe uma oportunidade grande de melhoria. Não é sobre você já saber se precisa, é sobre entender se existe uma oportunidade que você ainda não está enxergando. Se eu te mostrar isso no seu cenário, faz sentido a gente conversar na segunda às 14h ou é melhor terça às 10h?",
  },
  {
    title: "Vamos comparar fornecedores",
    category: "Planejamento",
    role: "SDR/Closer",
    body: "Perfeito, é o caminho certo mesmo. Mas deixa eu te trazer um ponto: comparar sem ter clareza do que realmente você precisa pode acabar te levando a escolher só pelo preço. O ideal é você primeiro entender qual é a melhor estratégia pro seu cenário, e depois comparar quem executa melhor isso. Se eu te mostrar esse direcionamento de forma clara, você consegue comparar com muito mais critério depois. Faz sentido ver antes? Posso te ajudar com isso hoje à tarde ou melhor seria amanhã de manhã?",
  },
  {
    title: "Parece complexo de implementar",
    category: "Planejamento",
    role: "SDR/Closer",
    body: "Entendo, pode parecer mesmo. Mas a complexidade normalmente está mais na percepção do que na execução em si. A ideia aqui é justamente simplificar e estruturar isso pra você, sem travar sua operação. A gente cuida da parte técnica enquanto você foca no seu negócio. Se eu te mostrar como isso funciona de forma simples na prática, faz sentido você ver?",
  },
  {
    title: "Não sou a pessoa certa",
    category: "Outros",
    role: "SDR",
    body: "Perfeito, obrigado por ser direto. Você consegue me direcionar quem normalmente cuida dessa parte aí dentro? Porque pelo que eu vi, isso pode impactar diretamente na aquisição de clientes e posicionamento da empresa. Se fizer sentido, posso falar com a pessoa certa já com um contexto mais claro. Quem seria o melhor contato?",
  },
  {
    title: "Sempre fizemos do jeito atual",
    category: "Insegurança",
    role: "SDR/Closer",
    body: "Perfeito — e provavelmente foi isso que trouxe vocês até aqui. Mas me diz: esse modelo ainda sustenta o crescimento que vocês querem ou já começou a limitar de alguma forma? Porque o mercado muda, e o que funcionava antes nem sempre sustenta o próximo nível. Não é sobre abandonar o que funciona, e sim evoluir. Se eu te mostrar oportunidades de melhoria sem quebrar o que vocês já fazem, faz sentido você ver?",
  },
];

const kpiGoals = [
  { value: "40–60", label: "Contatos/dia" },
  { value: "20%", label: "Taxa de resposta" },
  { value: "3–5", label: "Reuniões/semana" },
  { value: "25%", label: "Qualificação" },
];

const conversionFunnel = [
  { label: "Contatos abordados", value: "100%" },
  { label: "Respostas recebidas", value: "~20%" },
  { label: "Leads qualificados", value: "~8%" },
  { label: "Reuniões agendadas", value: "~4%" },
  { label: "Reuniões realizadas", value: "~2%" },
];

const leadCadence = [
  {
    day: "D+1",
    description: "Primeiro contato personalizado com gancho específico",
  },
  {
    day: "D+2",
    description: "Seguimento com conteúdo de valor — case ou insight",
  },
  {
    day: "D+5",
    description: "Canal diferente do inicial + novo ângulo de abordagem",
  },
  {
    day: "D+10",
    description: "Urgência leve — resultado novo, vaga, oportunidade",
  },
  {
    day: "D+14",
    description: "Breakup — última mensagem, deixa porta aberta",
  },
];

const channels: Record<
  Channel,
  {
    rules: string[];
    templates: Array<{ title: string; body: string }>;
  }
> = {
  WhatsApp: {
    rules: [
      "Horário ideal: seg-sex, 8h-11h30 e 14h-17h",
      "Primeira mensagem: máximo 3 linhas. Se precisar de mais, está errado",
      "Nunca mande áudio sem permissão no primeiro contato",
      "Evite emojis em excesso. Transmite pouco profissionalismo",
      "Use o nome da pessoa sempre no início",
      "Não mande link antes de gerar interesse. Parece spam",
    ],
    templates: [
      {
        title: "Abertura",
        body: "Oi, [Nome]! Tudo bem?\n\nVi o trabalho da [Empresa] e achei muito interessante. Percebi uma oportunidade de vocês captarem mais clientes pelo digital. Posso te contar em 2 minutos como?",
      },
      {
        title: "Follow-up com valor",
        body: "Ei, [Nome]! Sei que você deve estar atarefado.\n\nNão quero atrapalhar, mas lançamos um resultado novo essa semana no seu segmento e lembrei de você. Vale uma conversa de 15 min?",
      },
    ],
  },
  LinkedIn: {
    rules: [
      "Conecte sempre com mensagem personalizada e mencione algo do perfil deles",
      "Não venda na mensagem de conexão. Só gere curiosidade",
      "Aguarde a conexão ser aceita antes de ir para o pitch",
      "Interaja com posts deles antes de abordar: curta e comente com algo genuíno",
      "Foco em decisores: CEO, sócio e gerente de marketing",
    ],
    templates: [
      {
        title: "Mensagem de conexão",
        body: "Olá, [Nome]! Vi seu trabalho na [Empresa] e como vocês estão posicionados em [segmento]. Conectar com pessoas que constroem negócios sólidos é sempre enriquecedor. Podemos trocar experiências?",
      },
      {
        title: "Após conexão aceita",
        body: "Obrigado pela conexão, [Nome]!\n\nTrabalho com agência especializada em [branding / tráfego / sites] para empresas como a [Empresa]. Tenho visto desafios parecidos ao que você provavelmente enfrenta. Faria sentido batermos um papo de 15 min?",
      },
    ],
  },
  Instagram: {
    rules: [
      "Foco em perfis com 1k-50k seguidores: pequenos e médios negócios",
      "Antes de abordar: curta os últimos 3 posts e deixe 1 comentário genuíno",
      "Nunca use mensagem automática. É facilmente percebida",
      "Aborde a partir da bio, do produto ou de uma publicação específica",
      "Horário ideal: tarde e noite, quando gestores de perfil tendem a estar mais ativos",
    ],
    templates: [
      {
        title: "DM de abertura",
        body: "Oi, [Nome]! Seu produto de [produto] é incrível, vi aqui pelo feed.\n\nPercebo que vocês têm algo muito bom, mas o alcance poderia ser muito maior. A gente ajuda marcas assim a crescerem sem depender só de indicação. Posso te mostrar como?",
      },
    ],
  },
};

const filterOptions: ServiceFilter[] = [
  "Todos",
  "Marca",
  "Aquisição",
  "Conteúdo",
  "Produto digital",
  "Vídeo",
];

function classNames(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

function SectionHeader({
  number,
  title,
  eyebrow,
}: {
  number: string;
  title: string;
  eyebrow: string;
}) {
  return (
    <div className="flex w-full flex-col gap-3">
      <div className="flex flex-wrap items-center gap-3">
        <span className="tagline-text text-[#8E90A1]">
          {number}
        </span>
        <p className="tagline-text text-[#9E372A]">
          {eyebrow}
        </p>
      </div>
      <h2 className="font-instrument-serif text-4xl leading-[0.95] text-[#434A57] sm:text-5xl">
        {title}
      </h2>
    </div>
  );
}

function ShellSection({
  id,
  children,
}: {
  id?: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      className="flex w-full flex-col gap-8 border-t border-[rgba(114,123,142,0.1)] px-4 py-14 sm:px-8 md:py-18 lg:px-12"
    >
      {children}
    </section>
  );
}

function PillButton({
  active,
  children,
  onClick,
}: {
  active: boolean;
  children: ReactNode;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={classNames(
        "rounded-full border px-4 py-2 text-left font-mono text-xs uppercase tracking-[0.14em] transition-colors",
        active
          ? "border-[#9E372A] bg-[#9E372A] text-white"
          : "border-[rgba(114,123,142,0.18)] text-[#8E90A1] hover:border-[#9E372A] hover:text-[#9E372A]"
      )}
    >
      {children}
    </button>
  );
}

function CopyButton({
  copied,
  label = "Copiar texto",
  onClick,
}: {
  copied: boolean;
  label?: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="rounded-full border border-[rgba(114,123,142,0.18)] px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.14em] text-[#8E90A1] transition-colors hover:border-[#9E372A] hover:text-[#9E372A]"
    >
      {copied ? "copiado" : label}
    </button>
  );
}

function formatScriptForCopy(script: SalesScript) {
  return [
    script.title,
    "",
    "Dica",
    script.tip,
    "",
    ...script.parts.flatMap((part) => [part.label, part.text, ""]),
    ...script.nextSteps.map((step) => `→ ${step}`),
  ].join("\n");
}

export default function ComercialPageClient() {
  const [activeArea, setActiveArea] = useState<AreaTab>("training");
  const [activeTrainingTab, setActiveTrainingTab] =
    useState<TrainingTab>("overview");
  const [activeScriptTab, setActiveScriptTab] =
    useState<ScriptTab>("instagram");
  const [activeFilter, setActiveFilter] = useState<ServiceFilter>("Todos");
  const [activeServiceName, setActiveServiceName] = useState("Branding");
  const [activeChannel, setActiveChannel] = useState<Channel>("WhatsApp");
  const [openObjection, setOpenObjection] = useState<string | null>(null);
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const filteredServices = useMemo(
    () =>
      activeFilter === "Todos"
        ? services
        : services.filter((service) => service.filter === activeFilter),
    [activeFilter]
  );

  const activeService =
    services.find((service) => service.name === activeServiceName) ??
    services[0];

  const activeChannelData = channels[activeChannel];
  const handleServiceFilterChange = (filter: ServiceFilter) => {
    setActiveFilter(filter);

    const nextService =
      filter === "Todos"
        ? services[0]
        : services.find((service) => service.filter === filter);

    if (nextService) {
      setActiveServiceName(nextService.name);
    }
  };

  const handleCopy = async (key: string, text: string) => {
    await navigator.clipboard.writeText(text);
    setCopiedKey(key);
    window.setTimeout(() => setCopiedKey(null), 1800);
  };

  return (
    <MainLayout>
      <HeroSection
        eyebrow="COMERCIAL. SDR. CLOSER."
        titleLineOneWords={["Venda", "com", "critério"]}
        titleLineTwoWords={["antes", "do", "pitch."]}
        titleLineTwoAccentWord="pitch."
        titleLineOneAriaLabel="Venda com critério"
        titleLineTwoAriaLabel="antes do pitch."
        description="Playbook para prospecção, qualificação e condução comercial da Outframe. O objetivo é gerar conversas certas, não volume vazio."
        portfolioButtonText="Ver portfolio"
        diagnosticButtonText="Diagnóstico"
      />

      <BrandDivider brands={defaultBrands} />

      <div className="mx-auto flex w-full max-w-304 flex-col border-x border-[rgba(114,123,142,0.1)] bg-white dark:bg-[#0A0A0A]">
        <section className="flex flex-col gap-6 px-4 py-8 sm:px-8 lg:px-12">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="tagline-text text-[#8E90A1]">
                Manual de Prospecção
              </p>
              <h1 className="mt-3 font-sans text-[22px] font-medium leading-7 text-[#434A57]">
                SDR & Closers
              </h1>
            </div>
            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => setActiveArea("training")}
                className={classNames(
                  "h-9 rounded-[200px] border px-4 font-sans text-[14px] leading-5 transition-colors",
                  activeArea === "training"
                    ? "border-[#12141B] bg-white text-[#12141B]"
                    : "border-[rgba(114,123,142,0.1)] bg-white text-[#8E90A1] hover:border-[#9E372A] hover:text-[#9E372A]"
                )}
              >
                Treinamento
              </button>
              <button
                type="button"
                onClick={() => setActiveArea("scripts")}
                className={classNames(
                  "h-9 rounded-[200px] border px-4 font-sans text-[14px] leading-5 transition-colors",
                  activeArea === "scripts"
                    ? "border-[#12141B] bg-[#12141B] text-white"
                    : "border-[#12141B] bg-[#12141B] text-white hover:border-[#9E372A] hover:bg-[#9E372A]"
                )}
              >
                Scripts
              </button>
            </div>
          </div>

          <div className="flex w-full overflow-x-auto border-b border-[rgba(114,123,142,0.12)]">
            {(activeArea === "training" ? trainingTabs : scriptTabs).map((tab) => {
              const isActive =
                activeArea === "training"
                  ? activeTrainingTab === tab.id
                  : activeScriptTab === tab.id;

              return (
              <button
                key={tab.id}
                type="button"
                onClick={() => {
                  if (activeArea === "training") {
                    setActiveTrainingTab(tab.id as TrainingTab);
                    return;
                  }

                  setActiveScriptTab(tab.id as ScriptTab);
                }}
                className={classNames(
                  "relative flex min-w-34 items-center gap-3 px-5 py-4 font-mono text-[11px] font-semibold uppercase tracking-[0.22em] transition-colors",
                  isActive
                    ? "text-[#9E372A]"
                    : "text-[#8E90A1] hover:text-[#9E372A]"
                )}
              >
                <span>{tab.number}</span>
                <span aria-hidden="true">·</span>
                <span>{tab.label}</span>
                <span
                  className={classNames(
                    "absolute inset-x-0 bottom-0 h-px transition-colors",
                    isActive ? "bg-[#9E372A]" : "bg-transparent"
                  )}
                />
              </button>
              );
            })}
          </div>
        </section>

        {activeArea === "training" && (
          <>
            {activeTrainingTab === "overview" && (
            <ShellSection id="visao-geral">
              <SectionHeader
                number="01"
                eyebrow="Visão geral"
                title="Antes da primeira mensagem"
              />
              <div className="grid gap-4">
                <div className="grid gap-4 lg:grid-cols-2">
                {overviewBlocks.slice(0, 2).map((block) => (
                  <article
                    key={block.title}
                    className="border border-[#E4E7EC] bg-[rgba(114,123,142,0.03)] p-6"
                  >
                    <h3 className="font-sans text-[16px] font-medium leading-5 text-[#434A57]">
                      {block.title}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-[#8E90A1]">
                      {block.body}
                    </p>
                    {block.chips && (
                      <div className="mt-5 flex flex-wrap gap-2">
                        {block.chips.map((chip) => (
                          <span
                            key={chip}
                            className="rounded-full border border-[rgba(114,123,142,0.14)] px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.14em] text-[#9E372A]"
                          >
                            {chip}
                          </span>
                        ))}
                      </div>
                    )}
                  </article>
                ))}
                </div>

                {overviewBlocks.slice(2).map((block) => (
                  <article
                    key={block.title}
                    className="border border-[#E4E7EC] bg-[rgba(114,123,142,0.03)] p-6"
                  >
                    <h3 className="font-sans text-[16px] font-medium leading-5 text-[#434A57]">
                      {block.title}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-[#8E90A1]">
                      {block.body}
                    </p>
                    {block.chips && (
                      <div className="mt-5 flex flex-wrap gap-2">
                        {block.chips.map((chip) => (
                          <span
                            key={chip}
                            className="rounded-full border border-[rgba(114,123,142,0.14)] px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.14em] text-[#9E372A]"
                          >
                            {chip}
                          </span>
                        ))}
                      </div>
                    )}
                  </article>
                ))}

                <article className="border border-dashed border-[rgba(158,55,42,0.35)] p-6">
                  <h3 className="font-sans text-[16px] font-medium leading-5 text-[#434A57]">
                    O que não é papel do SDR
                  </h3>
                  <ul className="mt-5 grid gap-3">
                    {notSdrRole.map((item) => (
                      <li
                        key={item}
                        className="flex gap-3 text-sm leading-6 text-[#8E90A1]"
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#9E372A]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              </div>
            </ShellSection>
            )}

            {activeTrainingTab === "services" && (
            <ShellSection id="servicos">
              <SectionHeader
                number="02"
                eyebrow="Serviços"
                title="Escolha o tema certo para cada dor"
              />
              <div className="grid gap-6">
                <div className="flex flex-wrap gap-2">
                  {filterOptions.map((filter) => (
                    <PillButton
                      key={filter}
                      active={activeFilter === filter}
                      onClick={() => handleServiceFilterChange(filter)}
                    >
                      {filter}
                    </PillButton>
                  ))}
                </div>

                <div className="grid gap-6">
                  <div className="grid gap-2 md:grid-cols-2 lg:grid-cols-3">
                    {filteredServices.map((service) => (
                      <button
                        key={service.name}
                        type="button"
                        onClick={() => setActiveServiceName(service.name)}
                        className={classNames(
                          "flex items-center justify-between gap-4 border p-4 text-left transition-colors",
                          activeService.name === service.name
                            ? "border-[#9E372A] bg-[rgba(158,55,42,0.06)]"
                            : "border-[#E4E7EC] bg-[rgba(114,123,142,0.03)] hover:border-[rgba(158,55,42,0.55)]"
                        )}
                      >
                        <span>
                          <span className="block text-[16px] font-medium leading-5 text-[#434A57]">
                            {service.name}
                          </span>
                          <span className="mt-1 block font-mono text-[10px] uppercase tracking-[0.16em] text-[#8E90A1]">
                            {service.label}
                          </span>
                        </span>
                        <span className="font-mono text-xs text-[#9E372A]">
                          {service.filter}
                        </span>
                      </button>
                    ))}
                  </div>

                  <article className="border border-[#E4E7EC] bg-white p-6 text-[#0F1117]">
                    <p className="tagline-text text-[#6A7080]">
                      {activeService.name}
                    </p>
                    <h3 className="mt-4 font-instrument-serif text-4xl leading-none text-[#0F1117]">
                      {activeService.fit}
                    </h3>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {activeService.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-[#D9DDE7] px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.14em] text-[#434A57]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <p className="mt-6 text-sm leading-7 text-[#434A57]">
                      {activeService.pitch}
                    </p>
                  </article>
                </div>
              </div>
            </ShellSection>
            )}

            {activeTrainingTab === "flow" && (
            <ShellSection id="fluxo">
              <SectionHeader
                number="03"
                eyebrow="Fluxo de prospecção"
                title="Da pesquisa ao follow-up"
              />
              <div className="grid gap-6">
                {prospectingFlow.map((item) => (
                  <article
                    key={item.step}
                    className="grid gap-5 border border-[#E4E7EC] bg-[rgba(114,123,142,0.03)] p-5 sm:grid-cols-[4.5rem_1fr]"
                  >
                    <span className="font-instrument-serif text-5xl leading-none text-[#9E372A]">
                      {item.step}
                    </span>
                    <div>
                      <h3 className="font-sans text-[16px] font-medium leading-5 text-[#434A57]">
                        {item.title}
                      </h3>
                      <p className="mt-3 text-sm leading-6 text-[#8E90A1]">
                        {item.body}
                      </p>
                      <div className="mt-5 border-l border-[#9E372A] pl-4">
                        <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#9E372A]">
                          Exemplo / Dica
                        </p>
                        <p className="mt-2 text-sm leading-6 text-[#434A57]">
                          {item.tip}
                        </p>
                      </div>
                    </div>
                  </article>
                ))}

              </div>
            </ShellSection>
            )}

            {activeTrainingTab === "channels" && (
            <ShellSection id="canais">
              <SectionHeader
                number="04"
                eyebrow="Canais"
                title="A abordagem muda com o contexto"
              />
              <div className="grid gap-6">
                <p className="max-w-160 text-sm leading-6 text-[#8E90A1]">
                  Canais são os pontos de contato usados para iniciar conversa,
                  gerar interesse e conduzir o lead para o próximo passo sem
                  parecer spam.
                </p>
                <div className="flex flex-wrap gap-2">
                  {channelTabs.map((channel) => (
                    <PillButton
                      key={channel.id}
                      active={activeChannel === channel.id}
                      onClick={() => setActiveChannel(channel.id)}
                    >
                      {channel.number} · {channel.label}
                    </PillButton>
                  ))}
                </div>

                <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
                  <article className="border border-[#E4E7EC] bg-[rgba(114,123,142,0.03)] p-6">
                    <h3 className="font-sans text-[16px] font-medium leading-5 text-[#434A57]">
                      {activeChannel}
                    </h3>
                    <ul className="mt-6 grid gap-3">
                      {activeChannelData.rules.map((rule) => (
                        <li
                          key={rule}
                          className="flex gap-3 text-sm leading-6 text-[#8E90A1]"
                        >
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#9E372A]" />
                          <span>{rule}</span>
                        </li>
                      ))}
                    </ul>
                  </article>

                  <div className="grid gap-4">
                    {activeChannelData.templates.map((template) => (
                      <article
                        key={template.title}
                        className="border border-[#E4E7EC] bg-white p-6"
                      >
                        <p className="tagline-text text-[#6A7080]">
                          {template.title}
                        </p>
                        <p className="mt-4 whitespace-pre-line text-sm leading-7 text-[#434A57]">
                          {template.body}
                        </p>
                      </article>
                    ))}
                  </div>
                </div>
              </div>
            </ShellSection>
            )}
          </>
        )}

        {activeArea === "training" &&
          (activeTrainingTab === "objections" ||
            activeTrainingTab === "kpis") && (
          <ShellSection>
            <SectionHeader
              number={activeTrainingTab === "objections" ? "05" : "06"}
              eyebrow={activeTrainingTab === "objections" ? "Objeções" : "KPIs"}
              title={
                activeTrainingTab === "objections"
                  ? "Objeções comerciais"
                  : "Metas & KPIs"
              }
            />
            {activeTrainingTab === "objections" ? (
              <div className="grid gap-3">
                {objections.map((objection) => {
                  const isOpen = openObjection === objection.title;

                  return (
                    <article
                      key={objection.title}
                      className="border border-[#E4E7EC] bg-white"
                    >
                      <button
                        type="button"
                        onClick={() =>
                          setOpenObjection(isOpen ? null : objection.title)
                        }
                        className="flex w-full items-center justify-between gap-4 p-5 text-left"
                      >
                        <span>
                          <span className="block font-sans text-[16px] font-medium leading-5 text-[#434A57]">
                            {objection.title}
                          </span>
                          <span className="mt-2 block font-mono text-[10px] uppercase tracking-[0.16em] text-[#8E90A1]">
                            {objection.category} · {objection.role}
                          </span>
                        </span>
                        <span className="text-2xl leading-none text-[#9E372A]">
                          {isOpen ? "−" : "+"}
                        </span>
                      </button>
                      {isOpen && (
                        <div className="border-t border-[#E4E7EC] p-5">
                          <p className="text-sm leading-7 text-[#434A57]">
                            {objection.body}
                          </p>
                        </div>
                      )}
                    </article>
                  );
                })}
              </div>
            ) : (
              <div className="grid gap-6">
                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                  {kpiGoals.map((goal) => (
                    <article
                      key={goal.label}
                      className="border border-[#E4E7EC] bg-[rgba(114,123,142,0.03)] p-5"
                    >
                      <p className="font-instrument-serif text-5xl leading-none text-[#9E372A]">
                        {goal.value}
                      </p>
                      <p className="mt-3 font-sans text-[16px] font-medium leading-5 text-[#434A57]">
                        {goal.label}
                      </p>
                    </article>
                  ))}
                </div>

                <div className="grid gap-6 lg:grid-cols-2">
                  <article className="border border-[#E4E7EC] bg-white p-6">
                    <h3 className="font-sans text-[16px] font-medium leading-5 text-[#434A57]">
                      Funil de conversão — referência
                    </h3>
                    <div className="mt-6 grid gap-3">
                      {conversionFunnel.map((item) => (
                        <div
                          key={item.label}
                          className="flex items-center justify-between gap-4 border-b border-[#E4E7EC] pb-3 last:border-b-0 last:pb-0"
                        >
                          <span className="text-sm leading-6 text-[#8E90A1]">
                            {item.label}
                          </span>
                          <span className="font-mono text-xs uppercase tracking-[0.16em] text-[#9E372A]">
                            {item.value}
                          </span>
                        </div>
                      ))}
                    </div>
                  </article>

                  <article className="border border-[#E4E7EC] bg-white p-6">
                    <h3 className="font-sans text-[16px] font-medium leading-5 text-[#434A57]">
                      Cadência por lead
                    </h3>
                    <div className="mt-6 grid gap-4">
                      {leadCadence.map((item) => (
                        <div key={item.day} className="flex gap-4">
                          <span className="shrink-0 font-mono text-xs uppercase tracking-[0.16em] text-[#9E372A]">
                            {item.day}
                          </span>
                          <p className="text-sm leading-6 text-[#8E90A1]">
                            {item.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </article>
                </div>
              </div>
            )}
          </ShellSection>
        )}

        {activeArea === "scripts" && (
          <ShellSection id="scripts">
            <SectionHeader
              number={
                scriptTabs.find((tab) => tab.id === activeScriptTab)?.number ??
                "01"
              }
              eyebrow="Scripts"
              title={
                scriptTabs.find((tab) => tab.id === activeScriptTab)?.label ??
                "Scripts"
              }
            />

            <div className="grid gap-4">
              {scriptLibrary[activeScriptTab].map((script) => (
                <article
                  key={script.title}
                  className="border border-[#E4E7EC] bg-white p-6"
                >
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <p className="tagline-text text-[#6A7080]">
                        {script.title}
                      </p>
                      <div className="mt-5 border-l border-[#9E372A] pl-4">
                        <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#9E372A]">
                          Dica
                        </p>
                        <p className="mt-2 text-sm leading-6 text-[#8E90A1]">
                          {script.tip}
                        </p>
                      </div>
                    </div>
                    <CopyButton
                      copied={copiedKey === `script-${script.title}`}
                      label="Copiar texto"
                      onClick={() =>
                        handleCopy(
                          `script-${script.title}`,
                          formatScriptForCopy(script)
                        )
                      }
                    />
                  </div>

                  <div className="mt-6 grid gap-4">
                    {script.parts.map((part) => (
                      <div
                        key={part.label}
                        className="border border-[#D9DDE7] p-4"
                      >
                        <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#6A7080]">
                          {part.label}
                        </p>
                        <p className="mt-3 whitespace-pre-line text-sm leading-7 text-[#434A57]">
                          {part.text}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {script.nextSteps.map((step) => (
                      <span
                        key={step}
                        className="rounded-full border border-[#D9DDE7] px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.14em] text-[#434A57]"
                      >
                        → {step}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </ShellSection>
        )}
      </div>

    </MainLayout>
  );
}
