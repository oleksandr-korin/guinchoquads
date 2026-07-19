// Locale registry. English is the default and lives at the site root.
// Portuguese and French are prefixed (/pt, /fr). Every locale is either
// "reviewed" (native speaker signed off, safe to index) or not (rendered
// with noindex so machine-quality copy never hurts search authority).

import { site, siteUrl } from "@/app/lib/site";
import { locales as localeStrings } from "@/data/i18n";

export const locales = ["en", "pt", "fr"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export const localeLabels: Record<Locale, string> = {
  en: "English",
  pt: "Português",
  fr: "Français",
};

export const localeFlags: Record<Locale, string> = {
  en: "EN",
  pt: "PT",
  fr: "FR",
};

// og:locale for social/OG metadata.
export const ogLocales: Record<Locale, string> = {
  en: "en_GB",
  pt: "pt_PT",
  fr: "fr_FR",
};

export function isLocale(x: string): x is Locale {
  return (locales as readonly string[]).includes(x);
}

// Build the absolute URL for a given locale + path.
// Root path stays "/" for default locale; other locales get "/{locale}{path}".
export function localePath(locale: Locale, path = "/"): string {
  const trimmed = path.startsWith("/") ? path : `/${path}`;
  if (locale === defaultLocale) return trimmed;
  return `/${locale}${trimmed === "/" ? "" : trimmed}`;
}

export function localeUrl(locale: Locale, path = "/"): string {
  return siteUrl(localePath(locale, path));
}

// hreflang alternates block for use in metadata.alternates.languages.
// Google prefers a full set of language codes plus x-default.
export function hreflangAlternates(path = "/"): Record<string, string> {
  const map: Record<string, string> = {};
  for (const l of locales) {
    if (!localeStrings[l].reviewed && l !== defaultLocale) continue;
    map[l] = localeUrl(l, path);
  }
  map["x-default"] = localeUrl(defaultLocale, path);
  return map;
}

export { site };
