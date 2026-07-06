import { promos, type Promo, type Placement } from "@/data/promos";

// Feature flag — the promo calendar is dormant until Arlindo signs off on
// the strawman in docs/phase-15-promos.md. Flip NEXT_PUBLIC_PROMOS_ENABLED
// to "true" in Vercel and redeploy to turn the whole system on. Defaults
// off so a fresh checkout / preview never shows placeholder promos.
export function promosEnabled(): boolean {
  return process.env.NEXT_PUBLIC_PROMOS_ENABLED === "true";
}

export function isPromoActive(promo: Promo, now: Date = new Date()): boolean {
  const start = new Date(promo.starts).getTime();
  const end = new Date(promo.ends).getTime();
  const t = now.getTime();
  return t >= start && t <= end;
}

export function activePromos(now: Date = new Date()): Promo[] {
  if (!promosEnabled()) return [];
  return promos.filter((p) => isPromoActive(p, now));
}

// Highest-priority active promo for a given placement.
// Precedence: higher `priority` first, then newest `starts` date.
export function activePromoForPlacement(
  placement: Placement,
  now: Date = new Date()
): Promo | null {
  const matches = activePromos(now).filter((p) =>
    p.placements.includes(placement)
  );
  if (matches.length === 0) return null;
  matches.sort((a, b) => {
    const pa = a.priority ?? 0;
    const pb = b.priority ?? 0;
    if (pa !== pb) return pb - pa;
    return new Date(b.starts).getTime() - new Date(a.starts).getTime();
  });
  return matches[0];
}
