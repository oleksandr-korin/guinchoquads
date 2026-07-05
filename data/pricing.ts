export type PricingTier = {
  slug: string;
  duration: string;
  priceLabel: string;
  groupRule: string;
  scenery: string;
  weightRule?: string;
  highlight?: boolean;
};

// PHASE-12: confirm 3-hour price with Arlindo.
export const pricingTiers: PricingTier[] = [
  {
    slug: "1h",
    duration: "1 hour",
    priceLabel: "€60",
    groupRule: "Groups up to 8 people",
    scenery: "The workhorse tour — coastal trail warm-up. Most-booked option.",
  },
  {
    slug: "1h30",
    duration: "1 h 30 min",
    priceLabel: "€75",
    groupRule: "Medium group (over 8 people)",
    scenery: "Same trails as the 1 h, extra time for briefing and more guides.",
  },
  {
    slug: "2h",
    duration: "2 hours",
    priceLabel: "€110",
    groupRule: "Small groups",
    scenery: "Up to Peninha (top of the mountain) and back to the coast — first tier with premium scenery.",
    weightRule: "Passenger mode available on request.",
  },
  {
    slug: "3h",
    duration: "3 hours",
    priceLabel: "On request",
    groupRule: "Small groups",
    scenery: "The signature ride: full coast, dunes, viewpoints and mountain. Never rushed.",
    weightRule: "Passenger mode available on request.",
    highlight: true,
  },
];
