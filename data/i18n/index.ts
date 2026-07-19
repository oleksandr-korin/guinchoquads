// Central registry for locale dictionaries.
//
// The English dictionary is the source of truth for structure; every field
// here must be present in en/pt/fr with a real string. Missing fields are
// caught at typecheck time.
//
// `reviewed: false` disables prod indexing for a locale and keeps it out
// of the sitemap. Flip to `reviewed: true` after a native speaker signs
// off.

import { tourSlugs } from "@/data/tours";
import { en } from "./en";
import { pt } from "./pt";
import { fr } from "./fr";

export type TourSlug = (typeof tourSlugs)[number];

export type Highlight = { title: string; desc: string };
export type QA = { q: string; a: string };
export type StatItem = { value: string; label: string };

export type PricingTierStrings = {
  slug: string;
  duration: string;
  priceLabel: string;
  groupRule: string;
  scenery: string;
  weightRule?: string;
  highlight?: boolean;
  perkBadge?: string;
};

export type ExperienceStrings = {
  slug: string;
  title: string;
  desc: string;
};

export type LocaleStrings = {
  reviewed: boolean;
  ogLocale: string;
  nav: {
    tours: string;
    prices: string;
    groups: string;
    gift: string;
    fieldNotes: string;
    reviews: string;
    faq: string;
    contact: string;
    book: string;
    languageLabel: string;
  };
  hint: {
    promptToThis: string;
    yes: string;
    no: string;
  };
  meta: {
    homeTitle: string;
    homeDescription: string;
  };
  hero: {
    location: string;
    headlineLine1: string;
    headlineLine2: string;
    subheadline: string;
    primaryCta: string;
    secondaryCta: string;
    starsCaption: string;
  };
  stats: StatItem[];
  experiencesSection: {
    eyebrow: string;
    titleLine1: string;
    titleLine2: string;
    intro: string;
  };
  experiences: ExperienceStrings[];
  signature: {
    eyebrow: string;
    titleLine1: string;
    titleLine2: string;
    body: string;
    primaryCta: string;
    secondaryCta: string;
    hoursLabel: string;
    highlights: Highlight[];
    alsoAvailableEyebrow: string;
    alsoAvailableBody: string;
    seePricesCta: string;
  };
  prices: {
    eyebrow: string;
    titleLine1: string;
    titleLine2: string;
    body: string;
    signatureBadge: string;
    perParticipant: string;
    bookCta: string;
    passengerNote: string;
    tiers: PricingTierStrings[];
  };
  sightseeing: {
    eyebrow: string;
    titleLine1: string;
    titleLine2: string;
    body: string;
    cta: string;
    highlights: Highlight[];
  };
  groups: {
    eyebrow: string;
    titleLine1: string;
    titleLine2: string;
    body: string;
    stag: {
      eyebrow: string;
      title: string;
      body: string;
      points: string[];
      cta: string;
    };
    corporate: {
      eyebrow: string;
      title: string;
      body: string;
      points: string[];
      cta: string;
    };
  };
  reviewsSection: {
    eyebrow: string;
    titleLine1: string;
    titleLine2: string;
    body: string;
    // Customer testimonials stay in the language they were written in.
    // We keep them under the reviews section but do NOT translate them.
  };
  owner: {
    eyebrow: string;
    name: string;
    role: string;
    quote: string;
    stats: StatItem[];
    cta: string;
  };
  faqSection: {
    eyebrow: string;
    titleLine1: string;
    titleLine2: string;
    body: string;
    footnote: string;
    items: QA[];
  };
  contact: {
    eyebrow: string;
    titleLine1: string;
    titleLine2: string;
    body: string;
    callLabel: string;
    visitLabel: string;
    hoursLabel: string;
    hoursValue: string;
    formPrompt: string;
    formCta: string;
  };
  footer: {
    tagline: string;
    exploreEyebrow: string;
    contactEyebrow: string;
    exploreLinks: {
      tours: string;
      stag: string;
      corporate: string;
      gift: string;
      faq: string;
      book: string;
    };
    copyright: string;
  };
  home: {
    eyebrow: string;
    headlineLine1: string;
    headlineLine2: string;
    tagline: string;
    subheadline: string;
    primaryCta: string;
    secondaryCta: string;
    toursTitle: string;
    toursSubtitle: string;
    ctaTitle: string;
    ctaSubtitle: string;
    footer: {
      home: string;
      tours: string;
      terms: string;
      privacy: string;
    };
  };
  tours: Partial<Record<TourSlug, { title: string; short: string }>>;
};

export const locales = { en, pt, fr } as const satisfies Record<string, LocaleStrings>;
