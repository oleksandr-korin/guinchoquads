// Testimonials source of truth. Used by the homepage reviews section
// and the /reviews trust-anchor page.
//
// PHASE-12: Arlindo to confirm the aggregate rating values below (currently
// [DRAFT] placeholders). Once real numbers arrive we can add AggregateRating
// JSON-LD and enable star snippets in SERPs.

export type Review = {
  body: string;
  name: string;
  location?: string;
  source?: "TripAdvisor" | "Google" | "GetYourGuide" | "Email";
  activity?: string; // maps loosely to a tour slug
  date?: string; // ISO if known
  rating?: number; // 1-5
};

export const reviews: Review[] = [
  {
    body:
      "Genuinely one of the highlights of our trip to Portugal. The owner met us in Areia and off we went through the puddles and coastal forest. Unforgettable.",
    name: "cbroo",
    source: "TripAdvisor",
    activity: "quad-bike-tours",
    date: "2023-01",
    rating: 5,
  },
  {
    body:
      "What can I say — there wasn't anything we didn't love here. I booked for me and my boyfriend expecting a bigger group; it ended up just being us. Perfect that way — our own private tour and guide.",
    name: "Lolie C",
    source: "TripAdvisor",
    activity: "quad-bike-tours",
    date: "2025-06",
    rating: 5,
  },
  {
    body:
      "An incredible experience with incredible guides. The viewpoints and scenery were excellent. Easily the best thing to do in Cascais / Lisbon.",
    name: "Bruno C",
    source: "TripAdvisor",
    activity: "quad-bike-tours",
    date: "2025-07",
    rating: 5,
  },
  {
    body:
      "A really fun quad experience — time flew by. We covered different terrain and got to see stunning views. Our instructor was friendly and full of info.",
    name: "adeola_02",
    location: "London, United Kingdom",
    source: "TripAdvisor",
    activity: "quad-bike-tours",
    date: "2021-09",
    rating: 5,
  },
  {
    body:
      "First time on a quad and it went brilliantly. We had a great time, the team is fantastic, and we'll definitely be back for the 3-hour ride.",
    name: "Vacation721760",
    location: "Bernsdorf, Germany",
    source: "TripAdvisor",
    activity: "quad-bike-tours",
    date: "2020-12",
    rating: 5,
  },
  {
    body:
      "I chose the 2-hour option and got to see so many different terrains and landscapes — mountains, forest and the coast.",
    name: "Shahnas",
    source: "TripAdvisor",
    activity: "quad-bike-tours",
    date: "2023-06",
    rating: 5,
  },
  {
    body:
      "Incredible afternoon, booked at very short notice after seeing how much fun people had the day before. The host was charming — couldn't have been friendlier or more helpful.",
    name: "paulhaslamhampton",
    location: "Hampton, United Kingdom",
    source: "TripAdvisor",
    activity: "mountain-bike",
    date: "2022-10",
    rating: 5,
  },
  {
    body:
      "An unforgettable adventure! The guides were friendly and professional, and the coastal trails were stunning. Highly recommend.",
    name: "hplopes",
    location: "Odivelas, Portugal",
    source: "TripAdvisor",
    activity: "quad-bike-tours",
    rating: 5,
  },
  {
    body:
      "Absolutely brilliant day out. Well organised from start to finish and the scenery near Sintra is breathtaking. A must-do if you're staying near Cascais.",
    name: "sharon_taps",
    location: "Lancaster, United Kingdom",
    source: "TripAdvisor",
    activity: "quad-bike-tours",
    rating: 5,
  },
];

// Real numbers from TripAdvisor / Google / GetYourGuide — Arlindo confirms.
// Set `enabled: true` and fill the count/value fields once verified so
// AggregateRating JSON-LD gets emitted.
export const aggregateRatings = [
  {
    id: "tripadvisor",
    label: "TripAdvisor",
    enabled: true,
    value: 5.0 as number | null,
    count: 74 as number | null,
    url: "https://www.tripadvisor.pt/Attraction_Review-g189154-d1985823-Reviews-Guincho_Adventours-Cascais_Lisbon_District_Central_Portugal.html" as string | null,
  },
  {
    id: "google",
    label: "Google",
    enabled: false,
    value: null as number | null,
    count: null as number | null,
    url: null as string | null, // PHASE-12: paste real GBP URL
  },
  {
    id: "getyourguide",
    label: "GetYourGuide",
    enabled: false,
    value: null as number | null,
    count: null as number | null,
    url: null as string | null,
  },
];
