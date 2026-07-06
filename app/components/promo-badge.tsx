"use client";

import { useEffect, useState } from "react";
import { activePromoForPlacement } from "@/app/lib/promos";
import type { Placement, Promo } from "@/data/promos";

type Props = {
  placement: Extract<Placement, "groups-badge" | "sightseeing-badge">;
  className?: string;
};

export function PromoBadge({ placement, className = "" }: Props) {
  const [promo, setPromo] = useState<Promo | null>(null);

  useEffect(() => {
    setPromo(activePromoForPlacement(placement, new Date()));
  }, [placement]);

  if (!promo) return null;

  return (
    <span
      data-track="promo_view"
      data-track-params={`{"id":"${promo.id}","placement":"${placement}"}`}
      title={promo.offer}
      className={
        "inline-flex items-center gap-2 rounded-full bg-accent text-accent-foreground px-3 py-1 text-[11px] font-bold tracking-widest uppercase " +
        className
      }
    >
      {promo.discountLabel}
    </span>
  );
}
