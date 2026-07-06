"use client";

import { useEffect, useState } from "react";
import { activePromoForPlacement } from "@/app/lib/promos";
import { mailtoBooking } from "@/app/lib/mailto";
import type { Promo } from "@/data/promos";

function dismissKey(id: string) {
  return `promo-dismissed-${id}`;
}

export function PromoRibbon() {
  const [promo, setPromo] = useState<Promo | null>(null);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const active = activePromoForPlacement("hero-ribbon", new Date());
    if (!active) return;
    if (localStorage.getItem(dismissKey(active.id)) === "1") {
      setDismissed(true);
      return;
    }
    setPromo(active);
  }, []);

  if (!promo || dismissed) return null;

  const href = mailtoBooking(promo.cta?.topic ?? promo.headline, promo);
  const label = promo.cta?.label ?? "Book now";

  return (
    <div
      role="region"
      aria-label="Current promotion"
      className="fixed top-16 left-0 right-0 z-30 bg-accent text-accent-foreground shadow-lg"
    >
      <div className="container-wrap flex items-center gap-3 py-2.5 text-sm">
        <span
          aria-hidden="true"
          className="inline-flex items-center justify-center rounded-full bg-accent-foreground text-accent px-2 py-0.5 text-[10px] font-bold tracking-widest uppercase shrink-0"
        >
          {promo.discountLabel}
        </span>
        <span className="flex-1 truncate">
          <span className="font-semibold">{promo.headline}</span>
          <span className="hidden sm:inline"> — {promo.offer}</span>
        </span>
        <a
          href={href}
          data-track="promo_click"
          data-track-params={`{"id":"${promo.id}","placement":"hero-ribbon"}`}
          className="hidden sm:inline-flex items-center rounded-full border border-accent-foreground/70 bg-accent-foreground text-accent px-3 py-1 text-xs font-bold uppercase tracking-widest hover:bg-accent-foreground/90 whitespace-nowrap"
        >
          {label}
        </a>
        <button
          type="button"
          aria-label="Dismiss promotion"
          onClick={() => {
            localStorage.setItem(dismissKey(promo.id), "1");
            setDismissed(true);
          }}
          className="inline-flex items-center justify-center w-7 h-7 rounded-full hover:bg-accent-foreground/10 shrink-0"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            className="w-4 h-4"
            aria-hidden="true"
          >
            <path d="M6 6l12 12" />
            <path d="M18 6L6 18" />
          </svg>
        </button>
      </div>
    </div>
  );
}
