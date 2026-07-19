import type { Metadata } from "next";
import { locales } from "@/data/i18n";
import { LocalizedHome } from "@/app/components/localized-home";
import { hreflangAlternates, localeUrl, ogLocales } from "@/app/lib/i18n";

const LOCALE = "fr" as const;
const strings = locales[LOCALE];
const url = localeUrl(LOCALE, "/");

const isProd = process.env.VERCEL_ENV === "production";
const noindex = isProd && !strings.reviewed;

export const metadata: Metadata = {
  title: strings.meta.homeTitle,
  description: strings.meta.homeDescription,
  alternates: {
    canonical: url,
    languages: hreflangAlternates("/"),
  },
  robots: noindex
    ? { index: false, follow: false, nocache: true }
    : { index: true, follow: true },
  openGraph: {
    type: "website",
    url,
    siteName: "Guincho Adventours",
    locale: ogLocales[LOCALE],
    title: strings.meta.homeTitle,
    description: strings.meta.homeDescription,
  },
};

export default function FrenchHome() {
  return <LocalizedHome locale={LOCALE} strings={strings} />;
}
