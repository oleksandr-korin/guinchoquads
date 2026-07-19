// English strings — source of truth for structure.

import type { LocaleStrings } from "./index";

export const en: LocaleStrings = {
  reviewed: true,
  ogLocale: "en_GB",
  nav: {
    tours: "Tours",
    prices: "Prices",
    groups: "Groups",
    gift: "Gift a tour",
    fieldNotes: "Field Notes",
    reviews: "Reviews",
    faq: "FAQ",
    contact: "Contact",
    book: "BOOK A TOUR",
    languageLabel: "Language",
  },
  hint: {
    promptToThis: "See this page in English?",
    yes: "Yes",
    no: "No thanks",
  },
  meta: {
    homeTitle: "Guincho Adventours — Ride the wild Atlantic coast",
    homeDescription:
      "Quad bikes, buggies, sea kayak, mountain bike, hiking and Jeep sightseeing along the wild Atlantic coast of Guincho, Cascais. 18 years, ~30,000 happy adventurers.",
  },
  hero: {
    location: "AREIA · GUINCHO · CASCAIS",
    headlineLine1: "RIDE THE WILD",
    headlineLine2: "ATLANTIC COAST",
    subheadline:
      "Quad bikes, buggies and guided trails along the cliffs of Guincho, Cascais — minutes from Sintra and Lisbon. Real off-road adventure, run by locals who know every dune.",
    primaryCta: "BOOK A TOUR",
    secondaryCta: "Explore experiences",
    starsCaption: "Loved by ~30,000 adventurers over 18 years",
  },
  stats: [
    { value: "18", label: "Years on the trails" },
    { value: "50,000+", label: "Kilometres ridden" },
    { value: "~30,000", label: "Happy adventurers" },
    { value: "6", label: "Ways to explore" },
  ],
  experiencesSection: {
    eyebrow: "EXPERIENCES",
    titleLine1: "SIX WAYS TO",
    titleLine2: "EXPLORE",
    intro:
      "From adrenaline on the dunes to a calm paddle along the coast — pick your adventure and we'll handle the rest.",
  },
  experiences: [
    {
      slug: "quad-bike-tours",
      title: "Quad Bike Tours",
      desc: "Twin-track coastal and mountain trails. First-timers and thrill-seekers welcome — the workhorse of every ride we run.",
    },
    {
      slug: "sea-kayak",
      title: "Sea Kayak",
      desc: "Paddle the turquoise coves and caves of the Atlantic shore, guided by locals who know the tides.",
    },
    {
      slug: "jeep-sintra-tour",
      title: "Jeep Sintra Tour",
      desc: "Sintra UNESCO town, Cabo da Roca and a wine cellar — you get driven in a Land Rover. Ideal for larger groups and non-active guests.",
    },
    {
      slug: "mountain-bike",
      title: "Mountain Bike",
      desc: "Forest and dune singletrack with ocean views. Guided rides for confident riders.",
    },
    {
      slug: "hiking",
      title: "Hiking",
      desc: "The calm alternative. Coastal cliffs and Sintra hills on foot, at your own pace with a local guide.",
    },
    {
      slug: "buggies",
      title: "Buggies",
      desc: "Side-by-side power for small groups. Limited availability — get in touch to check dates.",
    },
  ],
  signature: {
    eyebrow: "OUR SIGNATURE TOUR",
    titleLine1: "THE 3-HOUR",
    titleLine2: "GUIDED RIDE",
    body:
      "The full Guincho Adventours experience: a guided expedition across coastal trails, dunes and viewpoints, finishing back at our office in Areia. Just show up — we bring the machines, the gear and the route.",
    primaryCta: "BOOK THE 3-HOUR TOUR",
    secondaryCta: "See all durations",
    hoursLabel: "Hours",
    highlights: [
      {
        title: "Half-day of trails",
        desc: "Three full hours of trails, stops and scenery — never rushed.",
      },
      {
        title: "Local expert guides",
        desc: "We've ridden these trails for 18 years and know every turn.",
      },
      {
        title: "All levels welcome",
        desc: "Full briefing and gear so beginners ride with confidence.",
      },
      {
        title: "Ends at our Guincho office",
        desc: "The route finishes back at base in Areia, Cascais.",
      },
    ],
    alsoAvailableEyebrow: "Also available",
    alsoAvailableBody:
      "Prefer something shorter? We also run 1 h, 1 h 30 and 2 h quad tours — with the 1 h 30 adding a Praia do Abano photo stop.",
    seePricesCta: "See prices",
  },
  prices: {
    eyebrow: "PRICES",
    titleLine1: "QUAD TOURS",
    titleLine2: "FROM €60",
    body:
      "Four durations, one Atlantic coast. Prices are per participant and include all gear and the pre-ride briefing. Prices do not include VAT.",
    signatureBadge: "Signature",
    perParticipant: "per participant",
    bookCta: "BOOK THIS TOUR",
    passengerNote:
      "Prefer to ride as a passenger? Passenger mode is available on request for the longer tours — just mention it when you enquire.",
    tiers: [
      {
        slug: "1h",
        duration: "1 hour",
        priceLabel: "€60",
        groupRule: "Groups up to 8 people",
        scenery:
          "The workhorse tour — coastal trail warm-up. Most-booked option.",
      },
      {
        slug: "1h30",
        duration: "1 h 30 min",
        priceLabel: "€75",
        groupRule: "Great for photo hunters and medium groups",
        scenery:
          "The 1-hour coastal loop plus a detour to Praia do Abano — our hidden-cove photo stop, off the usual tourist trail.",
        perkBadge: "+ Praia do Abano",
      },
      {
        slug: "2h",
        duration: "2 hours",
        priceLabel: "€110",
        groupRule: "Small groups",
        scenery:
          "Up to Peninha (top of the mountain) and back to the coast — first tier with premium scenery.",
        weightRule: "Passenger mode available on request.",
      },
      {
        slug: "3h",
        duration: "3 hours",
        priceLabel: "On request",
        groupRule: "Small groups",
        scenery:
          "The signature ride: full coast, dunes, viewpoints and mountain. Never rushed.",
        weightRule: "Passenger mode available on request.",
        highlight: true,
      },
    ],
  },
  sightseeing: {
    eyebrow: "SIGHTSEEING TOUR",
    titleLine1: "SINTRA, CABO DA ROCA",
    titleLine2: "& WINE CELLARS",
    body:
      "A calmer, cultural day out. Land Rovers, expert local drivers, UNESCO sites and an optional wine tasting at a working cellar. Ideal for groups of 20 to 50 people — corporate days, family visits, less-active guests.",
    cta: "ENQUIRE ABOUT THE JEEP TOUR",
    highlights: [
      {
        title: "Hotel pick-up",
        desc:
          "We collect you at your hotel or a meeting point that works for the group.",
      },
      {
        title: "Sintra town",
        desc:
          "The UNESCO heritage centre — palaces, misty hills, the whole postcard.",
      },
      {
        title: "Cabo da Roca",
        desc:
          "Mainland Europe's westernmost cliffs. Photo stops and short walks.",
      },
      {
        title: "Wine cellar",
        desc:
          "A working cellar visit. Add a full tasting with cheese and bread if you'd like.",
      },
      {
        title: "No driving",
        desc:
          "You get driven the whole way — alcohol welcome, unlike the quads.",
      },
      {
        title: "Big groups",
        desc:
          "Comfortably from 20 to 50 people. Perfect for corporate off-sites.",
      },
    ],
  },
  groups: {
    eyebrow: "GROUPS",
    titleLine1: "STAG PARTIES",
    titleLine2: "& CORPORATE DAYS",
    body:
      "Two of our biggest audiences. We run the whole day — briefing, gear, guides, logistics — so the group can just show up and ride.",
    stag: {
      eyebrow: "Stag & bachelor parties",
      title: "Big group. Big adventure.",
      body:
        "Weekends, birthdays, groups of mates from 20 to a few dozen. Quads or buggies on the coastal trails — tell us the date and the size, we'll plan the day around it.",
      points: [
        "Fast, adrenaline-heavy quad tours (1 h or 1 h 30 for bigger groups).",
        "Full gear, briefing and guides included.",
        "We'll help slot in food or drinks stops if you want.",
      ],
      cta: "PLAN YOUR PARTY",
    },
    corporate: {
      eyebrow: "Corporate events",
      title: "Off-sites, team days, incentive trips.",
      body:
        "From 10 to 50+ people. Everyone on quads, everyone on the Jeep sightseeing tour, or a mix — half the group on the coast, half in Sintra with wine cellars.",
      points: [
        "Groups from 10 to 50+ — quads and Land Rovers combined.",
        "Add a wine tasting stop for the sightseeing group.",
        "One invoice, one point of contact, 18 years of doing this.",
      ],
      cta: "REQUEST A CORPORATE PROPOSAL",
    },
  },
  reviewsSection: {
    eyebrow: "REVIEWS",
    titleLine1: "RIDERS",
    titleLine2: "LOVE IT",
    body:
      "Eighteen years, tens of thousands of riders, and a trail of five-star memories along the Atlantic coast.",
  },
  owner: {
    eyebrow: "MEET THE OWNER",
    name: "ARLINDO",
    role: "Owner & lead guide",
    quote:
      "Eighteen years on these trails. If you email us, I'm the one who writes back — no call centre, no chatbot.",
    stats: [
      { value: "18", label: "Years guiding" },
      { value: "~30k", label: "Riders looked after" },
      { value: "365", label: "Days a year, open" },
    ],
    cta: "Email Arlindo",
  },
  faqSection: {
    eyebrow: "FAQ",
    titleLine1: "THE QUESTIONS",
    titleLine2: "WE HEAR MOST",
    body:
      "Answered directly by Arlindo. If it's not here, email us and he'll write back.",
    footnote: "Something we didn't answer? Email us — we reply the same day.",
    items: [
      {
        q: "How long are your tours?",
        a: "1 h, 1 h 30, 2 h and 3 h. Most guests pick the 1 h. The 1 h 30 adds a detour to Praia do Abano — our hidden-cove photo stop that most tourists never see. The 2 h and 3 h go further, up to Peninha and along the coast.",
      },
      {
        q: "How much do the quad tours cost?",
        a: "From €60 per person for a 1-hour ride, up to the 3-hour signature tour. See the Prices section on this page for the full list.",
      },
      {
        q: "Can two people share one quad?",
        a: "Yes on the 1 h and 1 h 30 tours. Passenger mode is also available on the longer 2 h and 3 h tours on request — just mention it when you enquire.",
      },
      {
        q: "Do I need experience to drive a quad?",
        a: "No. All levels welcome. Every tour starts with a full briefing and a gear check, and the guides ride with you the whole way.",
      },
      {
        q: "Do you organise stag parties and bachelor weekends?",
        a: "Yes — big-group adventures are a big part of what we do. Tell us the size and date on your enquiry and we'll plan the day.",
      },
      {
        q: "Do you handle corporate events?",
        a: "Yes. From 10 to 50+ people. We can run the whole group on quads, or split — some on quads with us, others on the Jeep sightseeing tour to Sintra and a wine cellar.",
      },
      {
        q: "Do you offer non-driving tours?",
        a: "Yes — the Jeep Sintra tour to Sintra town, Cabo da Roca and a working wine cellar. You get driven the whole way, so alcohol is welcome, unlike the quad tours.",
      },
      {
        q: "What about safety and insurance?",
        a: "Every tour is covered by our insurance and our official RNAAT registration. Full details are on the booking terms — ask if you'd like to see them before you book.",
      },
      {
        q: "How do I book?",
        a: "Send us your dates and group size through any of the Book / Enquire buttons on this page — they open a pre-filled email. Email is the fastest way to reach us and keeps a clear record.",
      },
      {
        q: "Where do we meet?",
        a: "Rua da Areia n.º 1306, Areia, 2750-095 Cascais. All tours start and end at our Guincho office.",
      },
    ],
  },
  contact: {
    eyebrow: "CONTACT",
    titleLine1: "BOOK YOUR",
    titleLine2: "RIDE",
    body:
      "Tell us what you'd like to ride and when. We'll confirm availability and get you out on the trails.",
    callLabel: "Call us",
    visitLabel: "Visit",
    hoursLabel: "Hours",
    hoursValue: "Mon–Sun · 09:00–18:30",
    formPrompt:
      "Tap the button and your email app opens with a ready-to-fill booking template — date, group size, questions. Arlindo replies the same day.",
    formCta: "REQUEST BOOKING",
  },
  footer: {
    tagline:
      "Adventure tours along the wild Atlantic coast of Areia, Guincho — Cascais, Portugal. Minutes from Sintra and Lisbon.",
    exploreEyebrow: "Explore",
    contactEyebrow: "Contact",
    exploreLinks: {
      tours: "Tours",
      stag: "Stag parties",
      corporate: "Corporate events",
      gift: "Gift a tour",
      faq: "FAQ",
      book: "Book a tour",
    },
    copyright: "© 2026 Guincho Adventours. All rights reserved.",
  },
  home: {
    eyebrow: "18 YEARS · GUINCHO, CASCAIS",
    headlineLine1: "GUINCHO",
    headlineLine2: "ADVENTOURS",
    tagline: "Ride the wild Atlantic coast",
    subheadline:
      "Quad bikes, buggies, sea kayak, mountain bike, hiking and Sintra Jeep tours — guided from Areia, Cascais since 2008. Small groups, real trails, one email to book.",
    primaryCta: "BOOK A TOUR",
    secondaryCta: "See every tour",
    toursTitle: "SIX WAYS TO EXPLORE",
    toursSubtitle:
      "Coastal quads, buggies, sea kayaks, mountain bikes, guided hiking, and the Sintra Jeep tour. All from the same office in Areia.",
    ctaTitle: "READY TO RIDE?",
    ctaSubtitle: "One email, we handle the rest.",
    footer: {
      home: "Home",
      tours: "Tours",
      terms: "Terms",
      privacy: "Privacy",
    },
  },
  tours: {
    "quad-bike-tours": {
      title: "Quad bike tours",
      short: "Guided ATV rides along the Guincho coast — automatic, all levels.",
    },
    buggies: {
      title: "Buggy tours",
      short: "Two-seat buggies on the same coastal trails as the quads.",
    },
    "sea-kayak": {
      title: "Sea kayak tours",
      short: "Half-day Cascais coast, full-day Sesimbra & Arrábida.",
    },
    "jeep-sintra-tour": {
      title: "Sintra Jeep tour",
      short: "Sintra hills, Cabo da Roca, wine cellars — half day from Guincho.",
    },
    "mountain-bike": {
      title: "Mountain bike tours",
      short: "Sintra-Cascais forest, coastal trails, Peninha viewpoint.",
    },
    hiking: {
      title: "Guided hiking",
      short: "Coastal, Sintra Mountain or Cabo da Roca → Cascais.",
    },
  },
};
