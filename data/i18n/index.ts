// Central registry for locale dictionaries.
//
// `reviewed: false` means the copy is a machine-quality first pass. Pages
// rendered against an unreviewed dictionary set noindex/nofollow and stay
// out of the sitemap so we never publish bad-quality translations to
// Google. Flip to `reviewed: true` after a native speaker signs off.

import { tourSlugs } from "@/data/tours";
import { en } from "./en";
import { pt } from "./pt";
import { fr } from "./fr";

export type TourSlug = (typeof tourSlugs)[number];

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
  meta: {
    homeTitle: string;
    homeDescription: string;
  };
};

export const locales = { en, pt, fr } as const satisfies Record<string, LocaleStrings>;
