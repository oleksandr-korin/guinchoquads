"use client";

import { useState, useRef, useEffect } from "react";
import { locales, localeLabels, localeFlags, defaultLocale, type Locale } from "@/app/lib/i18n";

type Props = {
  current: Locale;
};

// Static locale switcher. Portugese/French pages are noindex until their
// dictionaries flip reviewed=true, but the user-facing switcher shows every
// available locale so a browser can still navigate to a machine-translated
// preview.
export function LanguageSwitcher({ current }: Props) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, [open]);

  const hrefFor = (l: Locale) => (l === defaultLocale ? "/" : `/${l}`);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-foreground/70 hover:text-foreground transition px-2 py-1 rounded"
      >
        {localeFlags[current]}
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-3 h-3">
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>
      {open && (
        <ul
          role="listbox"
          className="absolute right-0 mt-2 min-w-[9rem] rounded-lg border border-border bg-background shadow-2xl overflow-hidden z-50"
        >
          {locales.map((l) => (
            <li key={l}>
              <a
                href={hrefFor(l)}
                onClick={() => setOpen(false)}
                aria-current={l === current ? "true" : undefined}
                className={`block px-3 py-2 text-sm hover:bg-white/5 transition ${
                  l === current ? "text-accent font-semibold" : "text-foreground/85"
                }`}
              >
                <span className="inline-block w-8 text-xs font-mono">{localeFlags[l]}</span>
                {localeLabels[l]}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
