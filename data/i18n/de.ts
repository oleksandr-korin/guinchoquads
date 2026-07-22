// German strings. Informal "du" — the norm for German adventure-tourism
// brands (GetYourGuide, Jochen Schweizer) and our stag/adventure audience.

import type { LocaleStrings } from "./index";

export const de: LocaleStrings = {
  reviewed: true,
  ogLocale: "de_DE",
  nav: {
    tours: "Touren",
    prices: "Preise",
    groups: "Gruppen",
    gift: "Tour verschenken",
    fieldNotes: "Trail-Notizen",
    reviews: "Bewertungen",
    faq: "FAQ",
    contact: "Kontakt",
    book: "TOUR BUCHEN",
    languageLabel: "Sprache",
  },
  hint: {
    promptToThis: "Diese Seite auf Deutsch ansehen?",
    yes: "Ja",
    no: "Nein, danke",
  },
  meta: {
    homeTitle: "Guincho Adventours — Abenteuer an der wilden Atlantikküste",
    homeDescription:
      "Quad-Touren, Buggys, Seekajak, Mountainbike, Wanderungen und Jeep-Sightseeing an der wilden Atlantikküste von Guincho, Cascais. 18 Jahre, ~30.000 begeisterte Abenteurer.",
  },
  hero: {
    location: "AREIA · GUINCHO · CASCAIS",
    headlineLine1: "ERLEBE DIE WILDE",
    headlineLine2: "ATLANTIKKÜSTE",
    subheadline:
      "Quads, Buggys und geführte Trails entlang der Klippen von Guincho, Cascais — nur Minuten von Sintra und Lissabon. Echtes Offroad-Abenteuer mit Locals, die jede Düne kennen.",
    primaryCta: "TOUR BUCHEN",
    secondaryCta: "Erlebnisse entdecken",
    starsCaption: "Geliebt von ~30.000 Abenteurern in 18 Jahren",
  },
  stats: [
    { value: "18", label: "Jahre auf den Trails" },
    { value: "50.000+", label: "Gefahrene Kilometer" },
    { value: "~30.000", label: "Begeisterte Abenteurer" },
    { value: "6", label: "Arten zu entdecken" },
  ],
  experiencesSection: {
    eyebrow: "ERLEBNISSE",
    titleLine1: "SECHS WEGE ZU",
    titleLine2: "ENTDECKEN",
    intro:
      "Von Adrenalin auf den Dünen bis zur ruhigen Paddeltour entlang der Küste — such dir dein Abenteuer aus, wir kümmern uns um den Rest.",
  },
  experiences: [
    {
      slug: "quad-bike-tours",
      title: "Quad-Touren",
      desc: "Küsten- und Bergtrails auf zwei Spuren. Anfänger und Adrenalinfans willkommen — das Herzstück jeder Tour bei uns.",
    },
    {
      slug: "sea-kayak",
      title: "Seekajak",
      desc: "Paddle durch türkisfarbene Buchten und Höhlen der Atlantikküste, geführt von Locals, die die Gezeiten kennen.",
    },
    {
      slug: "jeep-sintra-tour",
      title: "Jeep-Tour Sintra",
      desc: "UNESCO-Städtchen Sintra, Cabo da Roca und ein Weinkeller — du wirst im Land Rover gefahren. Ideal für größere Gruppen und weniger aktive Gäste.",
    },
    {
      slug: "mountain-bike",
      title: "Mountainbike",
      desc: "Singletrails durch Wald und Dünen mit Meerblick. Geführte Touren für sichere Fahrer.",
    },
    {
      slug: "hiking",
      title: "Wandern",
      desc: "Die ruhige Alternative. Küstenklippen und die Hügel von Sintra zu Fuß, in deinem Tempo mit lokalem Guide.",
    },
    {
      slug: "buggies",
      title: "Buggys",
      desc: "Side-by-Side-Power für kleine Gruppen. Begrenzt verfügbar — frag uns nach Terminen.",
    },
  ],
  signature: {
    eyebrow: "UNSERE SIGNATURE-TOUR",
    titleLine1: "DIE 3-STUNDEN-",
    titleLine2: "TOUR MIT GUIDE",
    body:
      "Das volle Guincho-Adventours-Erlebnis: eine geführte Expedition über Küstentrails, Dünen und Aussichtspunkte, mit Ziel zurück an unserem Büro in Areia. Einfach vorbeikommen — Maschinen, Ausrüstung und Route stellen wir.",
    primaryCta: "3-STUNDEN-TOUR BUCHEN",
    secondaryCta: "Alle Tourlängen ansehen",
    hoursLabel: "Stunden",
    highlights: [
      {
        title: "Ein halber Tag auf den Trails",
        desc: "Drei volle Stunden Trails, Stopps und Ausblicke — ohne Hektik.",
      },
      {
        title: "Lokale Experten-Guides",
        desc: "Wir fahren diese Trails seit 18 Jahren und kennen jede Kurve.",
      },
      {
        title: "Alle Level willkommen",
        desc: "Ausführliches Briefing und komplette Ausrüstung — auch Anfänger fahren mit Vertrauen.",
      },
      {
        title: "Ende an unserem Guincho-Büro",
        desc: "Die Route endet wieder an der Basis in Areia, Cascais.",
      },
    ],
    alsoAvailableEyebrow: "Auch verfügbar",
    alsoAvailableBody:
      "Lieber etwas kürzer? Wir fahren auch 1-, 1,5- und 2-Stunden-Quadtouren — bei der 1,5-Stunden-Tour ist ein Fotostopp an der Praia do Abano dabei.",
    seePricesCta: "Preise ansehen",
  },
  prices: {
    eyebrow: "PREISE",
    titleLine1: "QUAD-TOUREN",
    titleLine2: "AB 60 €",
    body:
      "Vier Tourlängen, eine Atlantikküste. Preise pro Person, inklusive kompletter Ausrüstung und Briefing vor der Fahrt. Preise zzgl. MwSt.",
    signatureBadge: "Signature",
    perParticipant: "pro Person",
    bookCta: "DIESE TOUR BUCHEN",
    passengerNote:
      "Lieber als Beifahrer mitfahren? Auf den längeren Touren ist das auf Anfrage möglich — erwähn es einfach bei deiner Anfrage.",
    tiers: [
      {
        slug: "1h",
        duration: "1 Stunde",
        priceLabel: "60 €",
        groupRule: "Gruppen bis 8 Personen",
        scenery:
          "Der Klassiker — Warm-up auf dem Küstentrail. Unsere meistgebuchte Tour.",
      },
      {
        slug: "1h30",
        duration: "1,5 Stunden",
        priceLabel: "75 €",
        groupRule: "Perfekt für Fotojäger und mittlere Gruppen",
        scenery:
          "Die 1-Stunden-Küstenrunde plus Abstecher zur Praia do Abano — unser versteckter Foto-Spot abseits der Touristenpfade.",
        perkBadge: "+ Praia do Abano",
      },
      {
        slug: "2h",
        duration: "2 Stunden",
        priceLabel: "110 €",
        groupRule: "Kleine Gruppen",
        scenery:
          "Hinauf zur Peninha (Berggipfel) und zurück zur Küste — die erste Stufe mit Premium-Panorama.",
        weightRule: "Beifahrer-Option auf Anfrage.",
      },
      {
        slug: "3h",
        duration: "3 Stunden",
        priceLabel: "Auf Anfrage",
        groupRule: "Kleine Gruppen",
        scenery:
          "Die Signature-Tour: ganze Küste, Dünen, Aussichtspunkte und Berge. Ohne Zeitdruck.",
        weightRule: "Beifahrer-Option auf Anfrage.",
        highlight: true,
      },
    ],
  },
  sightseeing: {
    eyebrow: "SIGHTSEEING-TOUR",
    titleLine1: "SINTRA, CABO DA ROCA",
    titleLine2: "& WEINKELLER",
    body:
      "Ein entspannter Kulturtag. Land Rover, erfahrene lokale Fahrer, UNESCO-Stätten und optional eine Weinprobe in einem aktiven Weinkeller. Ideal für Gruppen von 20 bis 50 Personen — Firmenevents, Familienbesuche, weniger aktive Gäste.",
    cta: "JEEP-TOUR ANFRAGEN",
    highlights: [
      {
        title: "Hotelabholung",
        desc:
          "Wir holen euch am Hotel ab oder an einem Treffpunkt, der für die Gruppe passt.",
      },
      {
        title: "Sintra",
        desc:
          "Das UNESCO-Welterbe-Zentrum — Paläste, neblige Hügel, das komplette Postkartenmotiv.",
      },
      {
        title: "Cabo da Roca",
        desc:
          "Die westlichsten Klippen des europäischen Festlands. Fotostopps und kurze Spaziergänge.",
      },
      {
        title: "Weinkeller",
        desc:
          "Besuch eines aktiven Weinkellers. Auf Wunsch mit Verkostung, Käse und Brot.",
      },
      {
        title: "Kein Selbstfahren",
        desc:
          "Ihr werdet die ganze Strecke gefahren — Alkohol erlaubt, anders als auf den Quads.",
      },
      {
        title: "Große Gruppen",
        desc:
          "Bequem von 20 bis 50 Personen. Perfekt für Firmen-Offsites.",
      },
    ],
  },
  groups: {
    eyebrow: "GRUPPEN",
    titleLine1: "JUNGGESELLENABSCHIEDE",
    titleLine2: "& FIRMENEVENTS",
    body:
      "Zwei unserer größten Zielgruppen. Wir organisieren den ganzen Tag — Briefing, Ausrüstung, Guides, Logistik — die Gruppe muss nur auftauchen und fahren.",
    stag: {
      eyebrow: "Junggesellenabschiede",
      title: "Große Gruppe. Großes Abenteuer.",
      body:
        "Wochenenden, Geburtstage, Freundesgruppen von 20 bis einigen Dutzend. Quads oder Buggys auf den Küstentrails — nenn uns Datum und Gruppengröße, wir planen den Tag drumherum.",
      points: [
        "Schnelle, adrenalingeladene Quad-Touren (1 h oder 1,5 h für größere Gruppen).",
        "Komplette Ausrüstung, Briefing und Guides inklusive.",
        "Auf Wunsch planen wir Essens- oder Getränkestopps mit ein.",
      ],
      cta: "PLANT EURE PARTY",
    },
    corporate: {
      eyebrow: "Firmenevents",
      title: "Offsites, Teamtage, Incentive-Reisen.",
      body:
        "Von 10 bis 50+ Personen. Alle auf Quads, alle auf der Jeep-Sightseeing-Tour, oder gemischt — die Hälfte an der Küste, die Hälfte in Sintra mit Weinkeller.",
      points: [
        "Gruppen von 10 bis 50+ — Quads und Land Rover kombiniert.",
        "Weinprobe als Stopp für die Sightseeing-Gruppe möglich.",
        "Eine Rechnung, ein Ansprechpartner, 18 Jahre Erfahrung.",
      ],
      cta: "FIRMENANGEBOT ANFRAGEN",
    },
  },
  reviewsSection: {
    eyebrow: "BEWERTUNGEN",
    titleLine1: "FAHRER",
    titleLine2: "LIEBEN ES",
    body:
      "Achtzehn Jahre, Zehntausende Fahrer und eine Spur von Fünf-Sterne-Erinnerungen entlang der Atlantikküste.",
  },
  owner: {
    eyebrow: "DER INHABER",
    name: "ARLINDO",
    role: "Inhaber & Chef-Guide",
    quote:
      "Achtzehn Jahre auf diesen Trails. Wenn du uns schreibst, antworte ich persönlich — kein Callcenter, kein Chatbot.",
    stats: [
      { value: "18", label: "Jahre als Guide" },
      { value: "~30k", label: "Betreute Fahrer" },
      { value: "365", label: "Tage im Jahr geöffnet" },
    ],
    cta: "Arlindo schreiben",
  },
  faqSection: {
    eyebrow: "FAQ",
    titleLine1: "DIE HÄUFIGSTEN",
    titleLine2: "FRAGEN",
    body:
      "Direkt von Arlindo beantwortet. Wenn deine Frage fehlt, schreib uns — er antwortet persönlich.",
    footnote: "Etwas nicht beantwortet? Schreib uns — wir antworten am selben Tag.",
    items: [
      {
        q: "Wie lange dauern eure Touren?",
        a: "1 h, 1,5 h, 2 h und 3 h. Die meisten Gäste wählen die 1-Stunden-Tour. Die 1,5-Stunden-Tour macht einen Abstecher zur Praia do Abano — unserem versteckten Foto-Spot, den die meisten Touristen nie sehen. Die 2- und 3-Stunden-Touren gehen weiter, bis zur Peninha und entlang der Küste.",
      },
      {
        q: "Was kosten die Quad-Touren?",
        a: "Ab 60 € pro Person für die 1-Stunden-Tour, bis zur 3-Stunden-Signature-Tour. Die komplette Liste findest du im Preise-Abschnitt auf dieser Seite.",
      },
      {
        q: "Können sich zwei Personen ein Quad teilen?",
        a: "Ja, auf den 1- und 1,5-Stunden-Touren. Auf den längeren 2- und 3-Stunden-Touren ist die Beifahrer-Option auf Anfrage möglich — erwähn es einfach bei deiner Anfrage.",
      },
      {
        q: "Brauche ich Erfahrung, um ein Quad zu fahren?",
        a: "Nein. Alle Level willkommen. Jede Tour beginnt mit einem ausführlichen Briefing und Ausrüstungscheck, und die Guides fahren die ganze Strecke mit.",
      },
      {
        q: "Organisiert ihr Junggesellenabschiede?",
        a: "Ja — Abenteuer für große Gruppen sind ein großer Teil unserer Arbeit. Nenn uns Gruppengröße und Datum in deiner Anfrage und wir planen den Tag.",
      },
      {
        q: "Macht ihr auch Firmenevents?",
        a: "Ja. Von 10 bis 50+ Personen. Die ganze Gruppe auf Quads, oder aufgeteilt — ein Teil auf Quads mit uns, der andere auf der Jeep-Sightseeing-Tour nach Sintra mit Weinkeller.",
      },
      {
        q: "Gibt es Touren ohne Selbstfahren?",
        a: "Ja — die Jeep-Tour nach Sintra, zum Cabo da Roca und in einen aktiven Weinkeller. Ihr werdet die ganze Strecke gefahren, Alkohol ist also erlaubt — anders als auf den Quad-Touren.",
      },
      {
        q: "Wie sieht es mit Sicherheit und Versicherung aus?",
        a: "Jede Tour ist durch unsere Versicherung und unsere offizielle RNAAT-Registrierung abgedeckt. Alle Details stehen in den Buchungsbedingungen — frag gern danach, bevor du buchst.",
      },
      {
        q: "Wie buche ich?",
        a: "Schick uns deine Termine und Gruppengröße über einen der Buchen-/Anfragen-Buttons auf dieser Seite — sie öffnen eine vorausgefüllte E-Mail. E-Mail ist der schnellste Weg zu uns und hält alles sauber fest.",
      },
      {
        q: "Wo treffen wir uns?",
        a: "Rua da Areia n.º 1306, Areia, 2750-095 Cascais. Alle Touren starten und enden an unserem Guincho-Büro.",
      },
    ],
  },
  contact: {
    eyebrow: "KONTAKT",
    titleLine1: "BUCH DEINE",
    titleLine2: "TOUR",
    body:
      "Sag uns, was du fahren möchtest und wann. Wir bestätigen die Verfügbarkeit und bringen dich auf die Trails.",
    callLabel: "Anrufen",
    emailLabel: "E-Mail",
    visitLabel: "Adresse",
    hoursLabel: "Öffnungszeiten",
    hoursValue: "Mo–So · 09:00–18:30",
    formPrompt:
      "Tipp auf den Button und deine E-Mail-App öffnet sich mit einer fertigen Buchungsvorlage — Datum, Gruppengröße, Fragen. Arlindo antwortet am selben Tag.",
    formCta: "BUCHUNG ANFRAGEN",
  },
  footer: {
    tagline:
      "Abenteuertouren an der wilden Atlantikküste von Areia, Guincho — Cascais, Portugal. Nur Minuten von Sintra und Lissabon.",
    exploreEyebrow: "Entdecken",
    contactEyebrow: "Kontakt",
    exploreLinks: {
      tours: "Touren",
      stag: "Junggesellenabschiede",
      corporate: "Firmenevents",
      gift: "Tour verschenken",
      faq: "FAQ",
      book: "Tour buchen",
    },
    copyright: "© 2026 Guincho Adventours. Alle Rechte vorbehalten.",
  },
  home: {
    eyebrow: "18 JAHRE · GUINCHO, CASCAIS",
    headlineLine1: "GUINCHO",
    headlineLine2: "ADVENTOURS",
    tagline: "Erlebe die wilde Atlantikküste",
    subheadline:
      "Quads, Buggys, Seekajak, Mountainbike, Wanderungen und Jeep-Touren nach Sintra — geführt von Areia, Cascais, seit 2008. Kleine Gruppen, echte Trails, eine E-Mail zum Buchen.",
    primaryCta: "TOUR BUCHEN",
    secondaryCta: "Alle Touren ansehen",
    toursTitle: "SECHS WEGE ZU ENTDECKEN",
    toursSubtitle:
      "Küsten-Quads, Buggys, Seekajaks, Mountainbikes, geführte Wanderungen und die Jeep-Tour nach Sintra. Alles vom selben Büro in Areia.",
    ctaTitle: "BEREIT ZU FAHREN?",
    ctaSubtitle: "Eine E-Mail, wir kümmern uns um den Rest.",
    footer: {
      home: "Startseite",
      tours: "Touren",
      terms: "AGB",
      privacy: "Datenschutz",
    },
  },
  tours: {
    "quad-bike-tours": {
      title: "Quad-Touren",
      short: "Geführte Quad-Touren an der Guincho-Küste — Automatik, alle Level.",
    },
    buggies: {
      title: "Buggy-Touren",
      short: "Zweisitzer-Buggys auf denselben Küstentrails wie die Quads.",
    },
    "sea-kayak": {
      title: "Seekajak-Touren",
      short: "Halbtags an der Küste von Cascais, ganztags Sesimbra & Arrábida.",
    },
    "jeep-sintra-tour": {
      title: "Jeep-Tour Sintra",
      short: "Sintra, Cabo da Roca, Weinkeller — halber Tag ab Guincho.",
    },
    "mountain-bike": {
      title: "Mountainbike-Touren",
      short: "Wald von Sintra-Cascais, Küstentrails, Aussichtspunkt Peninha.",
    },
    hiking: {
      title: "Geführte Wanderungen",
      short: "Küste, Sintra-Gebirge oder Cabo da Roca → Cascais.",
    },
  },
};
