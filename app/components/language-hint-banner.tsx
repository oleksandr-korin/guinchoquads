"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { locales } from "@/data/i18n";
import { defaultLocale, isLocale, localePath, type Locale } from "@/app/lib/i18n";

const STORAGE_KEY = "lang_hint_dismissed";

// Detect the current locale from the pathname. A path prefix like /pt/... or
// /fr/... maps to that locale; anything else is the default (en).
function currentLocaleFromPath(pathname: string | null): Locale {
  if (!pathname) return defaultLocale;
  const first = pathname.split("/").filter(Boolean)[0];
  return first && isLocale(first) ? (first as Locale) : defaultLocale;
}

// Translate the browser locale (e.g. "fr-FR", "pt-BR") to one of our
// supported codes, or return null if none apply.
function detectBrowserLocale(): Locale | null {
  if (typeof navigator === "undefined") return null;
  const candidates = navigator.languages ?? [navigator.language];
  for (const raw of candidates) {
    const short = raw.toLowerCase().split("-")[0];
    if (isLocale(short)) return short as Locale;
  }
  return null;
}

// Swap the locale prefix in the current path. Preserves the trailing path
// so somebody landing on /tours who accepts the hint moves to /fr/tours.
function pathForLocale(pathname: string, targetLocale: Locale): string {
  const clean = pathname === "" ? "/" : pathname;
  const parts = clean.split("/").filter(Boolean);
  const first = parts[0];
  const rest = first && isLocale(first) ? parts.slice(1) : parts;
  return localePath(targetLocale, `/${rest.join("/")}`.replace(/\/$/, "") || "/");
}

export function LanguageHintBanner({ afterConsent = false }: { afterConsent?: boolean }) {
  const pathname = usePathname();
  const router = useRouter();
  const [target, setTarget] = useState<Locale | null>(null);
  const [consentDone, setConsentDone] = useState(!afterConsent);

  // Both banners render as a fixed bottom sheet in the same spot — wait for
  // the consent choice so a first-time visitor never sees them stacked.
  useEffect(() => {
    if (!afterConsent) return;
    try {
      if (window.localStorage.getItem("consent-v1")) {
        setConsentDone(true);
        return;
      }
    } catch {
      setConsentDone(true);
      return;
    }
    const onChosen = () => setConsentDone(true);
    window.addEventListener("consent-chosen", onChosen);
    return () => window.removeEventListener("consent-chosen", onChosen);
  }, [afterConsent]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      if (window.localStorage.getItem(STORAGE_KEY) === "1") return;
    } catch {
      // localStorage may be unavailable (private mode, quota exceeded).
      // Failing open just means we show the banner; acceptable.
    }
    const browser = detectBrowserLocale();
    const current = currentLocaleFromPath(pathname);
    if (!browser || browser === current) return;
    setTarget(browser);
  }, [pathname]);

  if (!target || !consentDone) return null;

  const dismiss = () => {
    try {
      window.localStorage.setItem(STORAGE_KEY, "1");
    } catch {
      // Ignore quota / disabled storage — dismissal for this session only.
    }
    setTarget(null);
  };

  const accept = () => {
    dismiss();
    router.push(pathForLocale(pathname ?? "/", target));
  };

  const s = locales[target].hint;

  return (
    <div
      role="dialog"
      aria-live="polite"
      className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:bottom-6 md:max-w-sm z-[60] rounded-2xl border border-border bg-background/95 backdrop-blur-md shadow-2xl p-4"
    >
      <p className="text-sm text-foreground/90 leading-snug">{s.promptToThis}</p>
      <div className="mt-3 flex items-center gap-2">
        <button
          type="button"
          onClick={accept}
          className="btn btn-primary flex-1 py-2 text-xs"
        >
          {s.yes}
        </button>
        <button
          type="button"
          onClick={dismiss}
          className="btn btn-secondary flex-1 py-2 text-xs"
        >
          {s.no}
        </button>
      </div>
    </div>
  );
}
