// Single place to change anything that references the public site URL,
// business name, phone, or address. Everything from metadata to JSON-LD
// to the sitemap reads from here.

export const site = {
  name: "Guincho Adventours",
  legalName: "Guincho Adventours",
  tagline: "Ride the wild Atlantic coast",
  description:
    "Quad bikes, buggies, sea kayak, mountain bike, hiking and Jeep sightseeing along the wild Atlantic coast of Guincho, Cascais — minutes from Sintra and Lisbon. 18 years, ~50,000 happy adventurers.",
  url:
    process.env.NEXT_PUBLIC_SITE_URL || "https://www.guinchotours.org",
  phones: {
    mobile: "+351 934 479 075",
    landline: "+351 214 869 700",
  },
  emails: {
    // Arlindo's real inbox. guinchotours.org has no MX records so the
    // old info@guinchotours.org address bounced silently — do NOT switch
    // back until MX + a real mailbox are provisioned on the domain.
    booking: "guinchoadventours@gmail.com",
  },
  address: {
    street: "Rua da Areia n.º 1306",
    locality: "Areia",
    postalCode: "2750-095",
    region: "Cascais",
    country: "PT",
  },
  hours: "Mon–Sun · 09:00–18:30",
  // PHASE-12: fill from Google Maps once confirmed.
  geo: {
    lat: 38.7267,
    lng: -9.4739,
  },
  // PHASE-12: paste real profile URLs when we have them.
  socials: {
    instagram: "",
    facebook: "",
    tripadvisor: "",
    getYourGuide: "",
    googleBusinessProfile: "",
  },
} as const;

export function siteUrl(path = "/"): string {
  return new URL(path, site.url).toString();
}
