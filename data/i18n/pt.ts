// Portuguese (pt-PT) dictionary. First-pass translation — review live.

import type { LocaleStrings } from "./index";

export const pt: LocaleStrings = {
  reviewed: true,
  ogLocale: "pt_PT",
  nav: {
    tours: "Passeios",
    prices: "Preços",
    groups: "Grupos",
    gift: "Voucher de oferta",
    fieldNotes: "Diário",
    reviews: "Avaliações",
    faq: "Perguntas frequentes",
    contact: "Contacto",
    book: "RESERVAR",
    languageLabel: "Idioma",
  },
  hint: {
    promptToThis: "Ver esta página em Português?",
    yes: "Sim",
    no: "Não, obrigado",
  },
  meta: {
    homeTitle: "Guincho Adventours — Explore a costa Atlântica selvagem",
    homeDescription:
      "Moto-4, buggies, caiaque de mar, BTT, caminhadas e Jeep de Sintra na costa selvagem do Guincho, Cascais. 18 anos, ~30 000 aventureiros felizes.",
  },
  hero: {
    location: "AREIA · GUINCHO · CASCAIS",
    headlineLine1: "EXPLORE A COSTA",
    headlineLine2: "ATLÂNTICA SELVAGEM",
    subheadline:
      "Moto-4, buggies e trilhos guiados nas falésias do Guincho, Cascais — a minutos de Sintra e Lisboa. Aventura off-road a sério, com guias locais que conhecem cada duna.",
    primaryCta: "RESERVAR PASSEIO",
    secondaryCta: "Explorar experiências",
    starsCaption: "Escolhido por ~30 000 aventureiros ao longo de 18 anos",
  },
  stats: [
    { value: "18", label: "Anos nos trilhos" },
    { value: "50 000+", label: "Quilómetros percorridos" },
    { value: "~30 000", label: "Aventureiros felizes" },
    { value: "6", label: "Formas de explorar" },
  ],
  experiencesSection: {
    eyebrow: "EXPERIÊNCIAS",
    titleLine1: "SEIS FORMAS DE",
    titleLine2: "EXPLORAR",
    intro:
      "Da adrenalina nas dunas ao remar tranquilo ao longo da costa — escolha a sua aventura, nós tratamos do resto.",
  },
  experiences: [
    {
      slug: "quad-bike-tours",
      title: "Passeios de Moto-4",
      desc:
        "Trilhos costeiros e de montanha em twin-track. Iniciantes ou adrenalina-adictos, todos bem-vindos — o clássico de todos os nossos passeios.",
    },
    {
      slug: "sea-kayak",
      title: "Caiaque de mar",
      desc:
        "Reme entre as enseadas turquesa e as grutas da costa Atlântica, com guias locais que conhecem as marés.",
    },
    {
      slug: "jeep-sintra-tour",
      title: "Tour de Jeep em Sintra",
      desc:
        "Sintra Património UNESCO, Cabo da Roca e uma adega de vinhos — vai a bordo de um Land Rover. Ideal para grupos maiores e convidados menos activos.",
    },
    {
      slug: "mountain-bike",
      title: "BTT",
      desc:
        "Singletrack por floresta e dunas com vista para o oceano. Passeios guiados para ciclistas com alguma experiência.",
    },
    {
      slug: "hiking",
      title: "Caminhadas",
      desc:
        "A alternativa tranquila. Falésias e Serra de Sintra a pé, ao seu ritmo, com um guia local.",
    },
    {
      slug: "buggies",
      title: "Buggies",
      desc:
        "Buggies lado a lado para pequenos grupos. Disponibilidade limitada — contacte-nos para confirmar datas.",
    },
  ],
  signature: {
    eyebrow: "O NOSSO PASSEIO DE ELEIÇÃO",
    titleLine1: "O PASSEIO DE 3 HORAS",
    titleLine2: "COM GUIA",
    body:
      "A experiência Guincho Adventours completa: uma expedição guiada por trilhos costeiros, dunas e miradouros, terminando novamente no nosso escritório em Areia. Basta aparecer — as máquinas, o equipamento e o percurso são connosco.",
    primaryCta: "RESERVAR O PASSEIO DE 3 HORAS",
    secondaryCta: "Ver todas as durações",
    hoursLabel: "Horas",
    highlights: [
      {
        title: "Meio dia de trilhos",
        desc: "Três horas inteiras de trilhos, paragens e paisagem — sem pressa.",
      },
      {
        title: "Guias locais",
        desc:
          "Andamos nestes trilhos há 18 anos — conhecemos cada curva.",
      },
      {
        title: "Todos os níveis",
        desc:
          "Briefing completo e equipamento para os iniciantes andarem em confiança.",
      },
      {
        title: "Termina no escritório do Guincho",
        desc: "O percurso acaba onde começa: na base, em Areia, Cascais.",
      },
    ],
    alsoAvailableEyebrow: "Também disponível",
    alsoAvailableBody:
      "Prefere algo mais curto? Também temos passeios de moto-4 de 1 h, 1 h 30 e 2 h — o de 1 h 30 inclui uma paragem fotográfica na Praia do Abano.",
    seePricesCta: "Ver preços",
  },
  prices: {
    eyebrow: "PREÇOS",
    titleLine1: "PASSEIOS DE MOTO-4",
    titleLine2: "A PARTIR DE 60 €",
    body:
      "Quatro durações, uma costa atlântica. Os preços são por participante e incluem todo o equipamento e o briefing pré-passeio. Preços não incluem IVA.",
    signatureBadge: "Eleição",
    perParticipant: "por participante",
    bookCta: "RESERVAR ESTE PASSEIO",
    passengerNote:
      "Prefere ir como passageiro? O modo passageiro está disponível a pedido nos passeios mais longos — basta indicar-nos quando contactar.",
    tiers: [
      {
        slug: "1h",
        duration: "1 hora",
        priceLabel: "60 €",
        groupRule: "Grupos até 8 pessoas",
        scenery:
          "O clássico da casa — aquecimento no trilho costeiro. É o mais reservado.",
      },
      {
        slug: "1h30",
        duration: "1 h 30 min",
        priceLabel: "75 €",
        groupRule: "Óptimo para fotógrafos e grupos médios",
        scenery:
          "O circuito costeiro de 1 hora com um desvio à Praia do Abano — a nossa paragem fotográfica secreta, fora do circuito turístico.",
        perkBadge: "+ Praia do Abano",
      },
      {
        slug: "2h",
        duration: "2 horas",
        priceLabel: "110 €",
        groupRule: "Pequenos grupos",
        scenery:
          "Até à Peninha (topo da serra) e regresso à costa — o primeiro nível com paisagem premium.",
        weightRule: "Modo passageiro disponível a pedido.",
      },
      {
        slug: "3h",
        duration: "3 horas",
        priceLabel: "Sob consulta",
        groupRule: "Pequenos grupos",
        scenery:
          "O passeio de eleição: costa completa, dunas, miradouros e serra. Nunca com pressa.",
        weightRule: "Modo passageiro disponível a pedido.",
        highlight: true,
      },
    ],
  },
  sightseeing: {
    eyebrow: "TOUR DE PAISAGEM",
    titleLine1: "SINTRA, CABO DA ROCA",
    titleLine2: "E ADEGAS",
    body:
      "Um dia mais calmo e cultural. Land Rovers, motoristas locais experientes, locais Património UNESCO e uma prova de vinhos opcional numa adega em actividade. Ideal para grupos de 20 a 50 pessoas — dias corporativos, visitas de família, convidados menos activos.",
    cta: "PEDIR INFO SOBRE O JEEP",
    highlights: [
      {
        title: "Recolha no hotel",
        desc:
          "Vamos buscá-lo ao hotel ou a um ponto de encontro combinado com o grupo.",
      },
      {
        title: "Vila de Sintra",
        desc:
          "O centro histórico Património UNESCO — palácios, serras enevoadas, o cartão-postal completo.",
      },
      {
        title: "Cabo da Roca",
        desc:
          "As falésias mais ocidentais da Europa continental. Paragens fotográficas e pequenas caminhadas.",
      },
      {
        title: "Adega",
        desc:
          "Visita a uma adega em laboração. Adicione uma prova completa com queijo e pão, se preferir.",
      },
      {
        title: "Sem conduzir",
        desc:
          "É levado o tempo todo — pode beber álcool, ao contrário do que acontece nas moto-4.",
      },
      {
        title: "Grupos grandes",
        desc:
          "De 20 a 50 pessoas com facilidade. Ideal para dias corporativos.",
      },
    ],
  },
  groups: {
    eyebrow: "GRUPOS",
    titleLine1: "DESPEDIDAS DE SOLTEIRO",
    titleLine2: "E DIAS CORPORATIVOS",
    body:
      "Duas das nossas maiores audiências. Organizamos o dia inteiro — briefing, equipamento, guias, logística — para o grupo apenas aparecer e andar.",
    stag: {
      eyebrow: "Despedidas de solteiro",
      title: "Grupo grande. Aventura grande.",
      body:
        "Fins-de-semana, aniversários, grupos de amigos de 20 a algumas dezenas. Moto-4 ou buggies nos trilhos costeiros — diga-nos a data e o tamanho, planeamos o dia à volta disso.",
      points: [
        "Passeios de moto-4 rápidos e com adrenalina (1 h ou 1 h 30 para grupos maiores).",
        "Equipamento, briefing e guias incluídos.",
        "Ajudamos a encaixar paragens para comer ou beber se quiser.",
      ],
      cta: "PLANEAR O EVENTO",
    },
    corporate: {
      eyebrow: "Eventos corporativos",
      title: "Off-sites, team building, viagens de incentivo.",
      body:
        "De 10 a mais de 50 pessoas. Todos em moto-4, todos no Jeep de paisagem, ou uma combinação — metade do grupo na costa, a outra metade em Sintra com adegas.",
      points: [
        "Grupos de 10 a 50+ — moto-4 e Land Rovers combinados.",
        "Adicione uma prova de vinhos ao grupo do Jeep.",
        "Uma factura, um ponto de contacto, 18 anos a fazer isto.",
      ],
      cta: "PEDIR PROPOSTA CORPORATIVA",
    },
  },
  reviewsSection: {
    eyebrow: "AVALIAÇÕES",
    titleLine1: "OS AVENTUREIROS",
    titleLine2: "ADORAM",
    body:
      "Dezoito anos, dezenas de milhares de aventureiros, e um rasto de memórias de cinco estrelas ao longo da costa atlântica.",
  },
  owner: {
    eyebrow: "CONHEÇA O DONO",
    name: "ARLINDO",
    role: "Dono e guia principal",
    quote:
      "Dezoito anos nestes trilhos. Se nos enviar um email, sou eu que respondo — sem call center, sem chatbot.",
    stats: [
      { value: "18", label: "Anos como guia" },
      { value: "~30k", label: "Aventureiros levados" },
      { value: "365", label: "Dias por ano abertos" },
    ],
    cta: "Enviar email ao Arlindo",
  },
  faqSection: {
    eyebrow: "PERGUNTAS FREQUENTES",
    titleLine1: "AS PERGUNTAS",
    titleLine2: "QUE MAIS OUVIMOS",
    body:
      "Respondidas directamente pelo Arlindo. Se não estiver aqui, envie um email — ele responde.",
    footnote: "Ficou por responder? Envie-nos um email — respondemos no próprio dia.",
    items: [
      {
        q: "Qual é a duração dos vossos passeios?",
        a: "1 h, 1 h 30, 2 h e 3 h. A maioria escolhe o de 1 h. O de 1 h 30 acrescenta um desvio à Praia do Abano — a nossa paragem fotográfica escondida, que a maior parte dos turistas nunca vê. Os de 2 h e 3 h vão mais longe, até à Peninha e ao longo da costa.",
      },
      {
        q: "Quanto custam os passeios de moto-4?",
        a: "A partir de 60 € por pessoa para o passeio de 1 hora, até ao passeio de eleição de 3 horas. Consulte a secção de Preços nesta página para a lista completa.",
      },
      {
        q: "Podem duas pessoas partilhar a mesma moto-4?",
        a: "Sim, nos passeios de 1 h e 1 h 30. O modo passageiro também está disponível a pedido nos passeios mais longos de 2 h e 3 h — basta indicar quando contactar.",
      },
      {
        q: "É preciso experiência para conduzir uma moto-4?",
        a: "Não. Todos os níveis são bem-vindos. Cada passeio começa com um briefing completo e uma verificação de equipamento, e os guias andam consigo todo o percurso.",
      },
      {
        q: "Organizam despedidas de solteiro?",
        a: "Sim — aventuras de grupo grande são uma grande parte do que fazemos. Diga-nos o tamanho e a data no contacto e planeamos o dia.",
      },
      {
        q: "Fazem eventos corporativos?",
        a: "Sim. De 10 a mais de 50 pessoas. Podemos pôr o grupo todo em moto-4, ou dividir — uns em moto-4 connosco, outros no Jeep de paisagem para Sintra e a uma adega.",
      },
      {
        q: "Existem passeios sem conduzir?",
        a: "Sim — o Jeep de Sintra passa pela vila, Cabo da Roca e uma adega em actividade. É levado o tempo todo, portanto pode beber álcool, ao contrário do que acontece nas moto-4.",
      },
      {
        q: "E a segurança e o seguro?",
        a: "Todos os passeios estão cobertos pelo nosso seguro e pelo nosso registo RNAAT oficial. Detalhes nos termos de reserva — peça para consultar antes de reservar, se quiser.",
      },
      {
        q: "Como reservo?",
        a: "Envie-nos as suas datas e o tamanho do grupo por qualquer botão Reservar / Pedir Info desta página — abrem um email pré-preenchido. O email é a forma mais rápida de nos contactar e fica registo claro.",
      },
      {
        q: "Onde é o ponto de encontro?",
        a: "Rua da Areia n.º 1306, Areia, 2750-095 Cascais. Todos os passeios começam e acabam no nosso escritório do Guincho.",
      },
    ],
  },
  contact: {
    eyebrow: "CONTACTO",
    titleLine1: "RESERVE O SEU",
    titleLine2: "PASSEIO",
    body:
      "Diga-nos o que quer andar e quando. Confirmamos disponibilidade e pomo-lo nos trilhos.",
    callLabel: "Ligue-nos",
    visitLabel: "Visite-nos",
    hoursLabel: "Horário",
    hoursValue: "Seg–Dom · 09:00–18:30",
    formPrompt:
      "Toque no botão e a sua aplicação de email abre com um modelo de reserva pronto a preencher — data, tamanho do grupo, perguntas. O Arlindo responde no próprio dia.",
    formCta: "PEDIR RESERVA",
  },
  footer: {
    tagline:
      "Passeios de aventura na costa Atlântica selvagem de Areia, Guincho — Cascais, Portugal. A minutos de Sintra e Lisboa.",
    exploreEyebrow: "Explorar",
    contactEyebrow: "Contacto",
    exploreLinks: {
      tours: "Passeios",
      stag: "Despedidas de solteiro",
      corporate: "Eventos corporativos",
      gift: "Voucher de oferta",
      faq: "Perguntas frequentes",
      book: "Reservar",
    },
    copyright: "© 2026 Guincho Adventours. Todos os direitos reservados.",
  },
  home: {
    eyebrow: "18 ANOS · GUINCHO, CASCAIS",
    headlineLine1: "GUINCHO",
    headlineLine2: "ADVENTOURS",
    tagline: "Explore a costa Atlântica selvagem",
    subheadline:
      "Moto-4, buggies, caiaque de mar, BTT, caminhadas e o Jeep de Sintra — passeios guiados a partir da Areia, Cascais, desde 2008. Grupos pequenos, trilhos reais, um único email para reservar.",
    primaryCta: "RESERVAR PASSEIO",
    secondaryCta: "Ver todos os passeios",
    toursTitle: "SEIS FORMAS DE EXPLORAR",
    toursSubtitle:
      "Moto-4 na costa, buggies, caiaques de mar, BTT, caminhadas guiadas e o Jeep de Sintra. Tudo do mesmo escritório na Areia.",
    ctaTitle: "PRONTO PARA COMEÇAR?",
    ctaSubtitle: "Um email, nós tratamos do resto.",
    footer: {
      home: "Início",
      tours: "Passeios",
      terms: "Termos e condições",
      privacy: "Privacidade",
    },
  },
  tours: {
    "quad-bike-tours": {
      title: "Passeios de Moto-4",
      short:
        "Passeios guiados de moto-4 ao longo da costa do Guincho — automáticas, para todos os níveis.",
    },
    buggies: {
      title: "Passeios de buggy",
      short: "Buggies de dois lugares nos mesmos trilhos costeiros das moto-4.",
    },
    "sea-kayak": {
      title: "Caiaque de mar",
      short:
        "Meio-dia na costa de Cascais, dia inteiro em Sesimbra e Arrábida.",
    },
    "jeep-sintra-tour": {
      title: "Tour de Jeep em Sintra",
      short:
        "Serra de Sintra, Cabo da Roca, adegas de vinho — meio-dia a partir do Guincho.",
    },
    "mountain-bike": {
      title: "Passeios de BTT",
      short:
        "Floresta de Sintra-Cascais, trilhos costeiros, miradouro da Peninha.",
    },
    hiking: {
      title: "Caminhadas guiadas",
      short: "Costa, Serra de Sintra ou Cabo da Roca → Cascais.",
    },
  },
};
