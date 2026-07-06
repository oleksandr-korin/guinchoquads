// Promo calendar — single source of truth.
//
// AWAITING ARLINDO REDLINE — the entries below are the strawman from
// docs/phase-15-promos.md, running against real 2026-27 dates so the
// mechanism is demonstrable on the live site. When Arlindo answers the
// three questions in phase-15-promos.md, we edit this file and push.
//
// Activation is client-clock (see app/lib/promos.ts). A promo becomes
// visible on its `starts` timestamp and disappears on its `ends`
// timestamp, no rebuild needed.

export type Placement =
  | "hero-ribbon"        // full-width lime strip under the header
  | "prices-callout"     // card above the pricing grid
  | "groups-badge"       // chip on the Groups CTA card
  | "signature-callout"  // block near the 3-hour tour
  | "sightseeing-badge"; // chip on the Jeep tour section

export type Promo = {
  id: string;
  headline: string;
  offer: string;
  detail?: string;
  discountLabel: string;
  starts: string;      // ISO Europe/Lisbon
  ends: string;        // ISO Europe/Lisbon (inclusive)
  placements: Placement[];
  affectsTiers?: string[];
  voucherCode?: string;
  mailtoLine?: string;
  priority?: number;
  cta?: { label: string; topic: string };
};

export const promos: Promo[] = [
  {
    id: "groups-5plus",
    headline: "Group of 5+? Ride for less.",
    offer: "10% off for groups of five or more riders.",
    discountLabel: "10% OFF",
    starts: "2026-01-01T00:00:00+00:00",
    ends: "2028-12-31T23:59:59+00:00",
    placements: ["groups-badge"],
    voucherCode: "GRUPO5",
    mailtoLine:
      "Voucher: GRUPO5 — group of 5+ riders, please apply the 10% discount.",
    priority: 10,
    cta: { label: "Plan the group ride", topic: "Group of 5+ riders" },
  },
  {
    id: "summer-firsttimer-2026",
    headline: "Summer flash — first-time riders",
    offer: "10% off your first tour this summer.",
    detail:
      "First time on a quad? Mention this ribbon when you enquire and get 10% off any tour before the end of August.",
    discountLabel: "10% OFF",
    starts: "2026-07-01T00:00:00+01:00",
    ends: "2026-08-31T23:59:59+01:00",
    placements: ["hero-ribbon"],
    voucherCode: "SUMMER10",
    mailtoLine:
      "Voucher: SUMMER10 — first-time rider, please apply the 10% discount.",
    priority: 30,
    cta: { label: "Book with SUMMER10", topic: "SUMMER10 first-timer" },
  },
  {
    id: "autumn-locals-2026",
    headline: "Locals ride for less",
    offer: "Cascais residents get 10% off the Jeep sightseeing tour.",
    discountLabel: "10% LOCALS",
    starts: "2026-09-01T00:00:00+01:00",
    ends: "2026-10-31T23:59:59+00:00",
    placements: ["sightseeing-badge"],
    voucherCode: "CASCAIS10",
    mailtoLine:
      "Voucher: CASCAIS10 — Cascais resident, please apply the 10% Jeep tour discount.",
    priority: 20,
    cta: { label: "Book the Jeep tour", topic: "Jeep Sintra tour" },
  },
  {
    id: "winter-deep-2026",
    headline: "Winter Deep",
    offer: "15% off everything + Jeep bundle add-on.",
    detail:
      "Off-peak season — smallest groups, best light on the coast, biggest discount of the year.",
    discountLabel: "15% OFF",
    starts: "2026-11-01T00:00:00+00:00",
    ends: "2026-12-14T23:59:59+00:00",
    placements: ["hero-ribbon"],
    affectsTiers: ["1h", "1h30", "2h", "3h"],
    voucherCode: "WINTER15",
    mailtoLine:
      "Voucher: WINTER15 — please apply the 15% winter discount.",
    priority: 40,
    cta: { label: "Claim 15% off", topic: "Winter Deep 15% off" },
  },
  {
    id: "gift-a-tour-2026",
    headline: "Gift a tour",
    offer: "Buy a tour as a gift — we'll send a voucher for the recipient.",
    detail:
      "Perfect stocking filler: pick any tour, we email you a voucher to print or forward.",
    discountLabel: "GIFT VOUCHER",
    starts: "2026-12-15T00:00:00+00:00",
    ends: "2027-01-06T23:59:59+00:00",
    placements: ["hero-ribbon"],
    voucherCode: "GIFT",
    mailtoLine:
      "Voucher: GIFT — I'd like to buy a tour as a gift. Please send voucher details.",
    priority: 50,
    cta: { label: "Send a gift voucher", topic: "Gift-a-tour voucher" },
  },
  {
    id: "winter-special-2027",
    headline: "Winter Special",
    offer: "15% off all tours in January and February.",
    discountLabel: "15% OFF",
    starts: "2027-01-07T00:00:00+00:00",
    ends: "2027-02-28T23:59:59+00:00",
    placements: ["hero-ribbon", "prices-callout"],
    affectsTiers: ["1h", "1h30", "2h", "3h"],
    voucherCode: "WINTER15",
    mailtoLine:
      "Voucher: WINTER15 — please apply the 15% winter discount.",
    priority: 40,
    cta: { label: "Claim 15% off", topic: "Winter Special 15% off" },
  },
  {
    id: "easter-2h3h-2027",
    headline: "Easter week — go longer",
    offer: "10% off the 2 h and 3 h tours during Easter week.",
    discountLabel: "10% OFF 2H & 3H",
    starts: "2027-03-29T00:00:00+00:00",
    ends: "2027-04-05T23:59:59+00:00",
    placements: ["signature-callout", "prices-callout"],
    affectsTiers: ["2h", "3h"],
    voucherCode: "EASTER10",
    mailtoLine:
      "Voucher: EASTER10 — please apply the 10% Easter discount on the 2 h or 3 h tour.",
    priority: 25,
    cta: { label: "Book the 3-hour ride", topic: "Easter — 3-hour guided ride" },
  },
];
