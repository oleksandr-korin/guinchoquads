"use client";

import { useEffect, useState } from "react";
import { activePromoForPlacement } from "@/app/lib/promos";
import { mailtoBooking } from "@/app/lib/mailto";
import type { Placement, Promo } from "@/data/promos";

type Props = {
  placement: Extract<Placement, "prices-callout" | "signature-callout">;
  className?: string;
};

export function PromoCallout({ placement, className = "" }: Props) {
  const [promo, setPromo] = useState<Promo | null>(null);

  useEffect(() => {
    setPromo(activePromoForPlacement(placement, new Date()));
  }, [placement]);

  if (!promo) return null;

  const href = mailtoBooking(promo.cta?.topic ?? promo.headline, promo);
  const label = promo.cta?.label ?? "Book now";

  return (
    <div
      data-track="promo_view"
      data-track-params={`{"id":"${promo.id}","placement":"${placement}"}`}
      className={
        "rounded-2xl border border-accent/50 bg-accent/5 p-6 md:p-7 " +
        "flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 " +
        className
      }
    >
      <div className="shrink-0">
        <div className="inline-flex items-center rounded-full bg-accent text-accent-foreground px-3 py-1 text-[10px] font-bold uppercase tracking-widest">
          {promo.discountLabel}
        </div>
      </div>
      <div className="flex-1 min-w-0">
        <div className="font-heading uppercase text-2xl leading-tight">
          {promo.headline}
        </div>
        <p className="mt-1 text-sm text-foreground/80 leading-relaxed">
          {promo.detail ?? promo.offer}
        </p>
      </div>
      <a
        href={href}
        data-track="promo_click"
        data-track-params={`{"id":"${promo.id}","placement":"${placement}"}`}
        className="btn btn-primary shrink-0"
      >
        {label}
      </a>
    </div>
  );
}
