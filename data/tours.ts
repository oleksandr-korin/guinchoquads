// Full detail for every activity — powers the /tours/[slug] sub-pages.
//
// Content sourced from guinchotours.org (current live site) where available,
// plus reasonable defaults where the current site is thin. Any [DRAFT] marker
// is an assumption Arlindo should confirm before final launch.

export type TourVariant = {
  id: string;
  name: string;
  duration: string;
  price: string;
  description?: string;
  minGroup?: number;
};

export type Tour = {
  slug: string;
  photoKey: string;
  eyebrow: string;
  title: string;
  headline: React.ReactNode | string;
  intro: string;
  description: string[]; // paragraphs
  variants: TourVariant[];
  included: string[];
  bring: string[];
  requirements: string[];
  route?: string;
  faqIds?: string[];
  related: string[]; // slugs
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
};

const MEETING =
  "Rua da Areia n.º 1306, Areia, 2750-095 Cascais — 20 min from Sintra, 30 min from Lisbon.";

export const tours: Record<string, Tour> = {
  "quad-bike-tours": {
    slug: "quad-bike-tours",
    photoKey: "quad-bike-tours",
    eyebrow: "QUAD BIKE TOURS",
    title: "Quad Bike Tours",
    headline: "RIDE THE COAST ON A QUAD",
    intro:
      "The workhorse Guincho experience — automatic quads, guided coastal trails, first-timers welcome.",
    description: [
      "Our quad tours run the coastal trails between Areia and the Sintra hills. All bikes are automatic transmission — so if you can ride a bicycle, you can ride one of these — and every ride is guided by a local who's been on these trails for eighteen years.",
      "You start with a briefing and gear check at our office in Areia. From there we pick up the trail towards the Guincho cliffs, taking in the coast, small obstacles, dust and dune. Longer tours climb further inland towards Peninha, drop by Praia do Abano for a hidden-cove photo stop on the 1 h 30, and reach the Sintra viewpoints on the 3-hour signature ride.",
      "Cheapest and most-booked is the 1 hour — a fast, adrenaline-forward loop close to the office. The 2 and 3-hour tiers show off the best scenery and are the ones we recommend if you've got the time.",
    ],
    variants: [
      {
        id: "1h",
        name: "1 hour",
        duration: "1 hour",
        price: "€60",
        description: "The workhorse tour — coastal loop close to the office.",
      },
      {
        id: "1h30",
        name: "1 h 30 (with Praia do Abano)",
        duration: "1 h 30",
        price: "€75",
        description:
          "The 1-hour loop plus a detour to Praia do Abano — our hidden-cove photo stop.",
      },
      {
        id: "2h",
        name: "2 hours",
        duration: "2 hours",
        price: "€110",
        description:
          "Up to Peninha (top of the mountain) and back to the coast — first tier with premium scenery.",
      },
      {
        id: "3h",
        name: "3 hours (signature)",
        duration: "3 hours",
        price: "€140",
        description:
          "The signature ride: full coast, dunes, viewpoints and mountain. Never rushed.",
      },
    ],
    included: [
      "Automatic-transmission ATV — no experience needed.",
      "Helmet and safety gear.",
      "Local guide.",
      "Full liability + accident insurance.",
      "Free transfer from Cascais train station if you're coming from Lisbon.",
    ],
    bring: [
      "Trainers or closed-toe shoes.",
      "Sunglasses and sunscreen — the coast is exposed.",
      "A light jacket if you're riding early or late.",
      "A phone or camera you can safely stow.",
    ],
    requirements: [
      "Riders must hold a valid driving licence (car licence is fine).",
      "Passengers welcome from age 12 upwards.",
      "Passenger mode available on request for the 2 h and 3 h tours — mention it when you enquire.",
    ],
    route:
      "Coastal trail Areia → Guincho cliffs → dunes → (1 h 30) Praia do Abano photo stop → (2 h) Peninha viewpoint → (3 h) full Sintra ridgeline loop back to office.",
    related: ["buggies", "jeep-sintra-tour", "mountain-bike"],
    metaTitle: "Quad Bike Tours in Guincho, Cascais",
    metaDescription:
      "Guided quad bike tours along the Guincho coast — 1 h, 1 h 30, 2 h and 3 h. Automatic ATVs, all levels welcome, from €60. 18 years, ~50,000 riders.",
    keywords: [
      "quad bike Cascais",
      "quad tour Guincho",
      "quad rental Sintra",
      "atv tour Portugal",
    ],
  },

  buggies: {
    slug: "buggies",
    photoKey: "buggies",
    eyebrow: "BUGGY TOURS",
    title: "Buggies",
    headline: "TWO-SEATER BUGGY ON THE DUNES",
    intro:
      "Side-by-side power for two. Ride together, share the wheel, hit the same trails as our quad tours.",
    description: [
      "The buggies are our small fleet of two-seaters — same coastal trails as the quads, but you share the ride. Popular for couples, teenagers who don't want to split up, and anyone who prefers a passenger seat with a proper cage around it.",
      "Availability is limited — we only run two buggies, so busy weekends can book out. Get in touch to check dates before you plan around them.",
      "Same durations and prices as the quad tours below (per vehicle, driver + one passenger). The 1 h 30 tier adds the Praia do Abano photo stop, the 3 h takes in the full Sintra ridgeline.",
    ],
    variants: [
      { id: "1h", name: "1 hour", duration: "1 hour", price: "€60" },
      {
        id: "1h30",
        name: "1 h 30 (with Praia do Abano)",
        duration: "1 h 30",
        price: "€75",
      },
      { id: "2h", name: "2 hours", duration: "2 hours", price: "€110" },
      { id: "3h", name: "3 hours (signature)", duration: "3 hours", price: "€140" },
    ],
    included: [
      "Side-by-side buggy with driver + passenger seats.",
      "Helmet and safety gear for both riders.",
      "Local guide.",
      "Insurance and transfer from Cascais train station.",
    ],
    bring: [
      "Trainers or closed-toe shoes.",
      "Sunglasses — buggies kick up dust on the dune sections.",
      "A phone or camera you can strap to yourself.",
    ],
    requirements: [
      "Driver must hold a valid driving licence.",
      "Passenger welcome from age 12 upwards.",
      "[DRAFT] Combined-weight and terrain rules apply on the 2 h and 3 h tiers — we'll confirm on booking.",
    ],
    related: ["quad-bike-tours", "jeep-sintra-tour"],
    metaTitle: "Buggy Tours in Guincho, Cascais",
    metaDescription:
      "Two-seat buggy tours along the Guincho coast. Same trails as our quads, ride together with a driver + passenger. From €60. Limited availability.",
    keywords: [
      "buggy Cascais",
      "buggy tour Guincho",
      "dune buggy Portugal",
      "side by side atv",
    ],
  },

  "sea-kayak": {
    slug: "sea-kayak",
    photoKey: "sea-kayak",
    eyebrow: "SEA KAYAK",
    title: "Sea Kayak",
    headline: "PADDLE THE ATLANTIC COVES",
    intro:
      "Guided sea kayak tours along the Cascais coast, Sesimbra caves and the Arrábida cliffs.",
    description: [
      "Three destinations, three moods. The Cascais half-day is the closest — turquoise coves and small caves inside a marine reserve, ideal if you're staying near Guincho. Sesimbra is a bigger day-out south of Lisbon with limestone sea caves. Arrábida is the postcard trip: white-sand beaches, cliffs, dolphins if you're lucky.",
      "All kayaks are stable sit-on-tops. Guides are qualified, briefings are thorough, and every trip is scaled to the group's level.",
      "Longer trips include lunch stops on hidden beaches you can only reach by water. Bring a swimsuit — you'll want to jump in.",
    ],
    variants: [
      {
        id: "cascais",
        name: "Cascais coast",
        duration: "2 h 30",
        price: "€50",
        description:
          "Turquoise coves inside the marine reserve — closest to Guincho, ideal for a half-day.",
      },
      {
        id: "sesimbra",
        name: "Sesimbra caves",
        duration: "7 hours",
        price: "€75",
        description:
          "Full-day trip south of Lisbon — limestone sea caves and hidden beach lunch.",
      },
      {
        id: "arrabida",
        name: "Arrábida Natural Park",
        duration: "8 hours",
        price: "€75",
        description:
          "White cliffs, clear water, wild beaches — the biggest full-day option.",
      },
    ],
    included: [
      "Kayak, paddle, life jacket, dry bag.",
      "Qualified guide + safety briefing.",
      "Transfer from Cascais to Sesimbra / Arrábida on the full-day trips.",
      "Water; lunch included on Sesimbra and Arrábida.",
    ],
    bring: [
      "Swimsuit worn under clothing.",
      "Sun hat, sunscreen, sunglasses with a strap.",
      "Change of clothes for after the paddle.",
      "A phone in a waterproof case, if you must — otherwise leave it in the car.",
    ],
    requirements: [
      "Basic swimming ability required.",
      "Kids age 12+ welcome with an adult.",
      "[DRAFT] Full-day trips have a small minimum-group threshold — get in touch to confirm.",
    ],
    related: ["hiking", "quad-bike-tours"],
    metaTitle: "Sea Kayak Tours — Cascais, Sesimbra, Arrábida",
    metaDescription:
      "Guided sea kayak tours from Guincho: half-day Cascais coast (€50) or full-day Sesimbra / Arrábida trips (€75). Kayak, safety gear and guide included.",
    keywords: [
      "sea kayak Cascais",
      "kayak Sesimbra",
      "Arrábida kayak tour",
      "guided kayak Portugal",
    ],
  },

  "jeep-sintra-tour": {
    slug: "jeep-sintra-tour",
    photoKey: "jeep-sintra-tour",
    eyebrow: "SINTRA JEEP TOUR",
    title: "Jeep Sintra Tour",
    headline: "SINTRA HILLS BY 4×4",
    intro:
      "A calmer, cultural day — get driven through the Sintra hills, stop where you want, add on the palaces or a wine tasting.",
    description: [
      "This one's for guests who don't want to drive themselves. Land Rover pickup at your hotel or a meeting point that suits, then up into the Sintra hills. You get free time in Sintra village, binoculars for the views, and a guide who knows the shortcuts.",
      "Half-day covers Sintra Hills and free time in the village. Full-day extends the route towards the coast — Cabo da Roca, hidden viewpoints, and optionally a stop at Pena Palace or Quinta da Regaleira (extra entry ticket).",
      "Groups from 4 people. Ideal for corporate off-sites, family visits, and anyone who wants to see Sintra without walking the whole thing. Alcohol is welcome on this tour — you're not driving.",
    ],
    variants: [
      {
        id: "half-day",
        name: "Half day",
        duration: "≈ 2 h 30",
        price: "€60",
        description: "Sintra Hills + free time in the village. Minimum 4 people.",
        minGroup: 4,
      },
      {
        id: "full-day",
        name: "Full day",
        duration: "≈ 5 hours",
        price: "€80",
        description:
          "Sintra Hills + coast + Cabo da Roca. Lunch, Pena Palace or Quinta da Regaleira add-on optional.",
        minGroup: 4,
      },
    ],
    included: [
      "Land Rover with driver-guide.",
      "Hotel pickup and drop-off (Lisbon / Cascais / Sintra area).",
      "Binoculars.",
      "Free time in Sintra village.",
      "Bottled water in the Jeep.",
      "Insurance.",
    ],
    bring: [
      "Comfortable walking shoes for the village stop.",
      "Layers — the Sintra hills can be cool even in summer.",
      "Camera.",
    ],
    requirements: [
      "Minimum group of 4 to run the tour.",
      "[DRAFT] Wine tasting add-on available on request — mention it when you enquire.",
    ],
    related: ["quad-bike-tours", "hiking"],
    metaTitle: "Sintra Jeep Tour with Wine Cellar & Cabo da Roca",
    metaDescription:
      "Guided Jeep tour through Sintra Hills, Cabo da Roca and (optionally) Pena Palace, Quinta da Regaleira or a wine tasting. Half-day from €60. Groups from 4.",
    keywords: [
      "Sintra Jeep tour",
      "Sintra 4x4 tour",
      "Cabo da Roca tour",
      "Sintra wine tasting",
      "Sintra day trip from Cascais",
    ],
  },

  "mountain-bike": {
    slug: "mountain-bike",
    photoKey: "mountain-bike",
    eyebrow: "MOUNTAIN BIKE",
    title: "Mountain Bike",
    headline: "FOREST, DUNES, PEAK VIEWS",
    intro:
      "Three guided mountain-bike routes through the Sintra-Cascais forest, the Guincho dunes, and up to the 477 m Peninha viewpoint.",
    description: [
      "Route matters more than gear on this one. We pick the route that fits your fitness and your group's ride level.",
      "Forest to Guincho Beach is the fastest, mostly downhill towards the coast on shaded trails. The Coastline route stays close to the ocean with viewpoints along the way. The Mountain Top route climbs to Peninha (477 m) — the biggest effort and biggest view.",
      "Bikes, helmets and pack are included. Guide sets the pace and knows the technical shortcuts if the group wants them.",
    ],
    variants: [
      {
        id: "forest",
        name: "Forest → Guincho Beach",
        duration: "3 hours",
        price: "€35",
        description: "Fast, mostly downhill through the forest to the coast.",
      },
      {
        id: "coast",
        name: "Coastline",
        duration: "3 hours",
        price: "€40",
        description: "Trails hugging the ocean with viewpoint stops.",
      },
      {
        id: "peninha",
        name: "Mountain Top (Peninha 477 m)",
        duration: "5 hours",
        price: "€65",
        description: "The climb up to Peninha — biggest effort, biggest view.",
      },
    ],
    included: [
      "Mountain bike sized for the rider.",
      "Helmet.",
      "Guide.",
      "Water for the route.",
      "Insurance.",
    ],
    bring: [
      "Padded shorts if you have them.",
      "Trainers or riding shoes.",
      "Sunglasses, sunscreen.",
      "Snack or trail food for the longer route.",
    ],
    requirements: [
      "Confident cyclist — this is a mountain-bike tour, not a beach cruise.",
      "Kids age 12+ welcome if experienced.",
      "[DRAFT] Rider height / inseam range confirmed on booking.",
    ],
    related: ["hiking", "quad-bike-tours"],
    metaTitle: "Mountain Bike Tours — Sintra-Cascais Forest",
    metaDescription:
      "Guided mountain-bike tours through the Sintra-Cascais forest, Guincho coast, and up to Peninha (477 m). From €35 for 3 hours. Bike + guide included.",
    keywords: [
      "mountain bike Sintra",
      "MTB Cascais",
      "Peninha ride",
      "mountain bike Guincho",
    ],
  },

  hiking: {
    slug: "hiking",
    photoKey: "hiking",
    eyebrow: "HIKING",
    title: "Hiking",
    headline: "COASTAL PATHS & SINTRA HILLS",
    intro:
      "The calm alternative. Three guided walks along the coast and up into the Sintra ridge, at your pace.",
    description: [
      "Not everyone wants the engine. Hiking gives you the same coast and hills that our motor tours cover, on foot, at whatever pace feels right for your group.",
      "The Coastline walk is the shortest — flat, easy, ocean the whole time. Sintra Mountain climbs into the hills with old forest trails and viewpoints. Cabo da Roca to Cascais is the longest and most scenic: mainland Europe's westernmost point, wild cliffs, ending in the town.",
      "Guides are locals who know the routes, the wildlife, and the shortcut cafés at the end.",
    ],
    variants: [
      {
        id: "coast",
        name: "Coastline Guincho",
        duration: "2 hours",
        price: "€25",
        description: "Flat coastal walk with ocean the whole way.",
      },
      {
        id: "sintra",
        name: "Sintra Mountain",
        duration: "2 hours",
        price: "€35",
        description: "Old forest trails and Sintra ridge viewpoints.",
      },
      {
        id: "cabo",
        name: "Cabo da Roca → Cascais",
        duration: "3 hours",
        price: "€45",
        description:
          "Mainland Europe's westernmost cliffs down to Cascais — the biggest walk.",
      },
    ],
    included: [
      "Local guide.",
      "Route planning + trail brief.",
      "Water on the route.",
      "Insurance.",
    ],
    bring: [
      "Trainers or light hiking shoes.",
      "Sun hat, sunscreen, sunglasses.",
      "A small day-pack.",
      "Layers — the coast wind is real, even in summer.",
    ],
    requirements: [
      "Kids age 12+ welcome; walking pace scales to the group.",
      "[DRAFT] Cabo da Roca route requires a moderate fitness level — ~10 km with some climbs.",
    ],
    related: ["mountain-bike", "jeep-sintra-tour"],
    metaTitle: "Guided Hiking — Cabo da Roca, Sintra, Guincho",
    metaDescription:
      "Guided walks around Guincho: coastal, Sintra Mountain, or Cabo da Roca → Cascais. Small groups, local guide. From €25 for 2 hours.",
    keywords: [
      "hiking Sintra",
      "walking tour Cascais",
      "Cabo da Roca walk",
      "Guincho hike",
    ],
  },
};

export const tourSlugs = Object.keys(tours);
export { MEETING };
