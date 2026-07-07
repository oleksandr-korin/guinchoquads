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
      "An unforgettable adventure! The guides were friendly and professional, and the coastal trails were stunning. Highly recommend the quad tour to anyone visiting the area.",
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
    enabled: false,
    value: null as number | null,
    count: null as number | null,
    url: null as string | null, // PHASE-12: paste real URL
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
