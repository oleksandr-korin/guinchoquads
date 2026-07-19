// French (fr-FR) dictionary. First-pass translation — review live.

import type { LocaleStrings } from "./index";

export const fr: LocaleStrings = {
  reviewed: true,
  ogLocale: "fr_FR",
  nav: {
    tours: "Excursions",
    prices: "Tarifs",
    groups: "Groupes",
    gift: "Offrir une excursion",
    fieldNotes: "Carnet de terrain",
    reviews: "Avis",
    faq: "FAQ",
    contact: "Contact",
    book: "RÉSERVER",
    languageLabel: "Langue",
  },
  hint: {
    promptToThis: "Voir cette page en Français ?",
    yes: "Oui",
    no: "Non, merci",
  },
  meta: {
    homeTitle: "Guincho Adventours — Roulez sur la côte atlantique sauvage",
    homeDescription:
      "Quads, buggies, kayak de mer, VTT, randonnée et Jeep à Sintra sur la côte sauvage de Guincho, Cascais. 18 ans, ~30 000 aventuriers heureux.",
  },
  hero: {
    location: "AREIA · GUINCHO · CASCAIS",
    headlineLine1: "ROULEZ SUR LA CÔTE",
    headlineLine2: "ATLANTIQUE SAUVAGE",
    subheadline:
      "Quads, buggies et sentiers guidés le long des falaises de Guincho, Cascais — à quelques minutes de Sintra et Lisbonne. Vraie aventure tout-terrain, menée par des locaux qui connaissent chaque dune.",
    primaryCta: "RÉSERVER",
    secondaryCta: "Explorer les expériences",
    starsCaption: "Adopté par ~30 000 aventuriers en 18 ans",
  },
  stats: [
    { value: "18", label: "Ans sur les sentiers" },
    { value: "50 000+", label: "Kilomètres parcourus" },
    { value: "~30 000", label: "Aventuriers heureux" },
    { value: "6", label: "Façons d'explorer" },
  ],
  experiencesSection: {
    eyebrow: "EXPÉRIENCES",
    titleLine1: "SIX FAÇONS",
    titleLine2: "D'EXPLORER",
    intro:
      "De l'adrénaline sur les dunes à une balade calme le long de la côte — choisissez votre aventure, on s'occupe du reste.",
  },
  experiences: [
    {
      slug: "quad-bike-tours",
      title: "Excursions en quad",
      desc:
        "Sentiers côtiers et de montagne en twin-track. Débutants et amateurs de sensations, tous bienvenus — le classique de nos excursions.",
    },
    {
      slug: "sea-kayak",
      title: "Kayak de mer",
      desc:
        "Pagayez entre les criques turquoise et les grottes de la côte atlantique, guidés par des locaux qui connaissent les marées.",
    },
    {
      slug: "jeep-sintra-tour",
      title: "Jeep — Sintra",
      desc:
        "Ville UNESCO de Sintra, Cabo da Roca et une cave à vin — on vous conduit en Land Rover. Idéal pour les grands groupes et les invités moins actifs.",
    },
    {
      slug: "mountain-bike",
      title: "VTT",
      desc:
        "Singletrack en forêt et dunes avec vue sur l'océan. Sorties guidées pour cyclistes à l'aise.",
    },
    {
      slug: "hiking",
      title: "Randonnée",
      desc:
        "L'alternative calme. Falaises côtières et collines de Sintra à pied, à votre rythme, avec un guide local.",
    },
    {
      slug: "buggies",
      title: "Buggies",
      desc:
        "Buggies côte à côte pour petits groupes. Disponibilité limitée — contactez-nous pour vérifier les dates.",
    },
  ],
  signature: {
    eyebrow: "NOTRE EXCURSION PHARE",
    titleLine1: "L'EXCURSION",
    titleLine2: "GUIDÉE DE 3 HEURES",
    body:
      "L'expérience complète Guincho Adventours : une expédition guidée à travers sentiers côtiers, dunes et points de vue, avec retour à notre bureau à Areia. Vous n'avez qu'à venir — machines, équipement et itinéraire, c'est nous.",
    primaryCta: "RÉSERVER L'EXCURSION DE 3 H",
    secondaryCta: "Voir toutes les durées",
    hoursLabel: "Heures",
    highlights: [
      {
        title: "Une demi-journée de sentiers",
        desc:
          "Trois heures pleines de sentiers, d'arrêts et de paysages — jamais pressés.",
      },
      {
        title: "Guides locaux experts",
        desc:
          "Nous roulons sur ces sentiers depuis 18 ans — chaque virage n'a plus de secret.",
      },
      {
        title: "Tous niveaux bienvenus",
        desc:
          "Briefing complet et équipement pour que les débutants roulent en confiance.",
      },
      {
        title: "Retour au bureau du Guincho",
        desc: "L'itinéraire se termine où il commence : à la base, à Areia, Cascais.",
      },
    ],
    alsoAvailableEyebrow: "Également disponible",
    alsoAvailableBody:
      "Vous préférez plus court ? Nous proposons aussi des excursions en quad de 1 h, 1 h 30 et 2 h — celle de 1 h 30 inclut un arrêt photo à Praia do Abano.",
    seePricesCta: "Voir les tarifs",
  },
  prices: {
    eyebrow: "TARIFS",
    titleLine1: "QUADS",
    titleLine2: "À PARTIR DE 60 €",
    body:
      "Quatre durées, une seule côte atlantique. Tarifs par participant, équipement et briefing pré-sortie inclus. TVA non incluse.",
    signatureBadge: "Phare",
    perParticipant: "par participant",
    bookCta: "RÉSERVER CETTE EXCURSION",
    passengerNote:
      "Vous préférez rouler comme passager ? Le mode passager est disponible sur demande pour les excursions plus longues — mentionnez-le lors de la demande.",
    tiers: [
      {
        slug: "1h",
        duration: "1 heure",
        priceLabel: "60 €",
        groupRule: "Groupes jusqu'à 8 personnes",
        scenery:
          "Le classique de la maison — mise en jambes sur le sentier côtier. C'est le plus réservé.",
      },
      {
        slug: "1h30",
        duration: "1 h 30 min",
        priceLabel: "75 €",
        groupRule: "Parfait pour les photographes et groupes moyens",
        scenery:
          "La boucle côtière de 1 heure avec un détour par Praia do Abano — notre arrêt photo secret, hors des sentiers touristiques.",
        perkBadge: "+ Praia do Abano",
      },
      {
        slug: "2h",
        duration: "2 heures",
        priceLabel: "110 €",
        groupRule: "Petits groupes",
        scenery:
          "Jusqu'à la Peninha (sommet de la montagne) puis retour à la côte — premier palier avec paysage premium.",
        weightRule: "Mode passager disponible sur demande.",
      },
      {
        slug: "3h",
        duration: "3 heures",
        priceLabel: "Sur demande",
        groupRule: "Petits groupes",
        scenery:
          "L'excursion phare : côte entière, dunes, points de vue et montagne. Jamais pressés.",
        weightRule: "Mode passager disponible sur demande.",
        highlight: true,
      },
    ],
  },
  sightseeing: {
    eyebrow: "EXCURSION PAYSAGE",
    titleLine1: "SINTRA, CABO DA ROCA",
    titleLine2: "ET CAVES À VIN",
    body:
      "Une journée plus calme et culturelle. Land Rovers, chauffeurs locaux expérimentés, sites UNESCO et dégustation de vin optionnelle dans une cave en activité. Idéal pour groupes de 20 à 50 personnes — journées d'entreprise, visites en famille, invités moins actifs.",
    cta: "DEMANDER L'EXCURSION EN JEEP",
    highlights: [
      {
        title: "Prise en charge à l'hôtel",
        desc:
          "Nous vous récupérons à votre hôtel ou à un point de rendez-vous qui convient au groupe.",
      },
      {
        title: "Ville de Sintra",
        desc:
          "Le centre historique UNESCO — palais, collines brumeuses, la carte postale complète.",
      },
      {
        title: "Cabo da Roca",
        desc:
          "Les falaises les plus occidentales d'Europe continentale. Arrêts photo et courtes marches.",
      },
      {
        title: "Cave à vin",
        desc:
          "Visite d'une cave en activité. Ajoutez une dégustation complète avec fromage et pain si vous le souhaitez.",
      },
      {
        title: "Aucune conduite",
        desc:
          "On vous conduit tout au long — alcool bienvenu, contrairement aux quads.",
      },
      {
        title: "Grands groupes",
        desc:
          "Confortablement de 20 à 50 personnes. Parfait pour les journées d'entreprise.",
      },
    ],
  },
  groups: {
    eyebrow: "GROUPES",
    titleLine1: "ENTERREMENTS DE VIE",
    titleLine2: "ET JOURNÉES D'ENTREPRISE",
    body:
      "Deux de nos plus gros publics. On gère la journée entière — briefing, équipement, guides, logistique — pour que le groupe n'ait qu'à venir et rouler.",
    stag: {
      eyebrow: "Enterrements de vie",
      title: "Grand groupe. Grande aventure.",
      body:
        "Week-ends, anniversaires, bandes de potes de 20 à quelques dizaines. Quads ou buggies sur les sentiers côtiers — dites-nous la date et la taille, on planifie la journée autour.",
      points: [
        "Excursions en quad rapides et pleines d'adrénaline (1 h ou 1 h 30 pour les groupes plus grands).",
        "Équipement, briefing et guides inclus.",
        "On aide à caler des arrêts nourriture ou boissons si vous voulez.",
      ],
      cta: "PLANIFIER VOTRE FÊTE",
    },
    corporate: {
      eyebrow: "Événements d'entreprise",
      title: "Off-sites, journées d'équipe, voyages incentive.",
      body:
        "De 10 à 50+ personnes. Tout le groupe en quads, tout le groupe sur l'excursion Jeep, ou un mix — la moitié sur la côte, l'autre à Sintra avec les caves à vin.",
      points: [
        "Groupes de 10 à 50+ — quads et Land Rovers combinés.",
        "Ajoutez une dégustation de vin pour le groupe Jeep.",
        "Une facture, un interlocuteur, 18 ans à faire ça.",
      ],
      cta: "DEMANDER UNE PROPOSITION D'ENTREPRISE",
    },
  },
  reviewsSection: {
    eyebrow: "AVIS",
    titleLine1: "LES AVENTURIERS",
    titleLine2: "ADORENT",
    body:
      "Dix-huit ans, des dizaines de milliers d'aventuriers, et un chapelet de souvenirs cinq étoiles le long de la côte atlantique.",
  },
  owner: {
    eyebrow: "RENCONTREZ LE PROPRIÉTAIRE",
    name: "ARLINDO",
    role: "Propriétaire et guide principal",
    quote:
      "Dix-huit ans sur ces sentiers. Si vous nous écrivez, c'est moi qui réponds — pas de call center, pas de chatbot.",
    stats: [
      { value: "18", label: "Ans comme guide" },
      { value: "~30k", label: "Aventuriers accompagnés" },
      { value: "365", label: "Jours par an ouverts" },
    ],
    cta: "Écrire à Arlindo",
  },
  faqSection: {
    eyebrow: "FAQ",
    titleLine1: "LES QUESTIONS",
    titleLine2: "QU'ON ENTEND LE PLUS",
    body:
      "Réponses directes d'Arlindo. Si ce n'est pas ici, écrivez-nous et il vous répondra.",
    footnote:
      "Quelque chose qu'on n'a pas couvert ? Écrivez-nous — on répond le jour même.",
    items: [
      {
        q: "Quelle est la durée de vos excursions ?",
        a: "1 h, 1 h 30, 2 h et 3 h. La plupart choisissent le 1 h. Le 1 h 30 ajoute un détour par Praia do Abano — notre arrêt photo caché que la plupart des touristes ne voient jamais. Les 2 h et 3 h vont plus loin, jusqu'à la Peninha et le long de la côte.",
      },
      {
        q: "Combien coûtent les excursions en quad ?",
        a: "À partir de 60 € par personne pour l'excursion de 1 heure, jusqu'à l'excursion phare de 3 heures. Voir la section Tarifs sur cette page pour la liste complète.",
      },
      {
        q: "Peut-on partager un quad à deux ?",
        a: "Oui pour les excursions 1 h et 1 h 30. Le mode passager est aussi disponible sur les excursions plus longues (2 h et 3 h) sur demande — mentionnez-le lors de la demande.",
      },
      {
        q: "Faut-il de l'expérience pour conduire un quad ?",
        a: "Non. Tous niveaux bienvenus. Chaque excursion commence par un briefing complet et un contrôle du matériel, et les guides roulent avec vous tout le long.",
      },
      {
        q: "Organisez-vous des enterrements de vie de garçon ?",
        a: "Oui — les aventures en grand groupe sont une grande partie de ce qu'on fait. Dites-nous la taille et la date lors de la demande et on planifie la journée.",
      },
      {
        q: "Gérez-vous les événements d'entreprise ?",
        a: "Oui. De 10 à 50+ personnes. On peut mettre tout le groupe en quads, ou diviser — certains en quads avec nous, d'autres sur l'excursion Jeep à Sintra et une cave à vin.",
      },
      {
        q: "Proposez-vous des excursions sans conduire ?",
        a: "Oui — l'excursion Jeep vers Sintra, Cabo da Roca et une cave à vin en activité. Vous êtes conduit tout le long, donc l'alcool est bienvenu, contrairement aux quads.",
      },
      {
        q: "Qu'en est-il de la sécurité et de l'assurance ?",
        a: "Chaque excursion est couverte par notre assurance et notre enregistrement officiel RNAAT. Détails complets sur les conditions de réservation — demandez si vous voulez les voir avant de réserver.",
      },
      {
        q: "Comment je réserve ?",
        a: "Envoyez-nous vos dates et la taille du groupe via l'un des boutons Réserver / Demander sur cette page — ils ouvrent un e-mail pré-rempli. L'e-mail est le moyen le plus rapide de nous joindre et garde une trace claire.",
      },
      {
        q: "Où est le point de rendez-vous ?",
        a: "Rua da Areia n.º 1306, Areia, 2750-095 Cascais. Toutes les excursions commencent et finissent à notre bureau du Guincho.",
      },
    ],
  },
  contact: {
    eyebrow: "CONTACT",
    titleLine1: "RÉSERVEZ VOTRE",
    titleLine2: "SORTIE",
    body:
      "Dites-nous ce que vous voulez faire et quand. On confirme la disponibilité et on vous met sur les sentiers.",
    callLabel: "Appelez-nous",
    visitLabel: "Venez",
    hoursLabel: "Horaires",
    hoursValue: "Lun–Dim · 09:00–18:30",
    formPrompt:
      "Cliquez sur le bouton et votre appli mail s'ouvre avec un modèle de réservation prêt à remplir — date, taille du groupe, questions. Arlindo répond le jour même.",
    formCta: "DEMANDER UNE RÉSERVATION",
  },
  footer: {
    tagline:
      "Excursions d'aventure le long de la côte atlantique sauvage d'Areia, Guincho — Cascais, Portugal. À quelques minutes de Sintra et Lisbonne.",
    exploreEyebrow: "Explorer",
    contactEyebrow: "Contact",
    exploreLinks: {
      tours: "Excursions",
      stag: "Enterrements de vie",
      corporate: "Événements d'entreprise",
      gift: "Offrir une excursion",
      faq: "FAQ",
      book: "Réserver",
    },
    copyright: "© 2026 Guincho Adventours. Tous droits réservés.",
  },
  home: {
    eyebrow: "18 ANS · GUINCHO, CASCAIS",
    headlineLine1: "GUINCHO",
    headlineLine2: "ADVENTOURS",
    tagline: "Roulez sur la côte atlantique sauvage",
    subheadline:
      "Quads, buggies, kayak de mer, VTT, randonnée et Jeep à Sintra — excursions guidées depuis Areia, Cascais, depuis 2008. Petits groupes, vrais sentiers, un seul e-mail pour réserver.",
    primaryCta: "RÉSERVER UNE EXCURSION",
    secondaryCta: "Voir toutes les excursions",
    toursTitle: "SIX FAÇONS D'EXPLORER",
    toursSubtitle:
      "Quads sur la côte, buggies, kayaks de mer, VTT, randonnées guidées et la Jeep de Sintra. Tout part du même bureau à Areia.",
    ctaTitle: "PRÊT À PARTIR ?",
    ctaSubtitle: "Un e-mail, on s'occupe du reste.",
    footer: {
      home: "Accueil",
      tours: "Excursions",
      terms: "Conditions",
      privacy: "Confidentialité",
    },
  },
  tours: {
    "quad-bike-tours": {
      title: "Excursions en quad",
      short:
        "Balades en quad guidées le long de la côte de Guincho — automatiques, tous niveaux.",
    },
    buggies: {
      title: "Excursions en buggy",
      short:
        "Buggies deux places sur les mêmes sentiers côtiers que les quads.",
    },
    "sea-kayak": {
      title: "Kayak de mer",
      short:
        "Demi-journée côte de Cascais, journée entière Sesimbra et Arrábida.",
    },
    "jeep-sintra-tour": {
      title: "Jeep — Sintra",
      short:
        "Serra de Sintra, Cabo da Roca, caves à vin — demi-journée depuis Guincho.",
    },
    "mountain-bike": {
      title: "VTT",
      short:
        "Forêt Sintra-Cascais, sentiers côtiers, point de vue de la Peninha.",
    },
    hiking: {
      title: "Randonnées guidées",
      short: "Côte, Serra de Sintra ou Cabo da Roca → Cascais.",
    },
  },
};
