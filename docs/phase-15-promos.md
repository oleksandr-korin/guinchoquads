# Phase 15 — Promo calendar (time-limited content)

Arlindo asked for a way to put vouchers / seasonal offers on the site. The mailto-only architecture already handles redemption trivially — every enquiry email can carry a voucher marker for him to honor on reply. What we're building here is the **presentation** layer: a full-year promo calendar that auto-activates and auto-expires without anyone touching the site.

## Files

- `data/promos.ts` — the source of truth. Typed calendar of every promo for the year.
- `app/lib/promos.ts` — `getActivePromos(now)` helper + Europe/Lisbon date math.
- `app/components/promo-ribbon.tsx` — client component, thin lime strip under the header.
- `app/components/promo-callout.tsx` — larger card, sits above the pricing grid or in the signature-tour section.
- `app/components/promo-badge.tsx` — small chip, drops into the groups / sightseeing / signature sections.
- `app/page.tsx` — mount the ribbon, wire the callouts/badges into their placements.
- `docs/phase-14-seo.md` — see the promo-aware structured-data section (already added).

Nothing new outside `data/promos.ts` needs editing on a per-promo basis.

## Data model

```ts
export type Placement =
  | "hero-ribbon"        // full-width lime strip under the header
  | "prices-callout"     // card above the pricing grid
  | "groups-badge"       // chip on the Groups CTA card
  | "signature-callout"  // block near the 3-hour tour
  | "sightseeing-badge"; // chip on the Jeep tour section

export type Promo = {
  id: string;                 // "winter-2026", "groups-5plus"
  headline: string;           // "WINTER SPECIAL"
  offer: string;              // "10 % OFF ALL 1 H TOURS"
  detail?: string;            // optional longer body
  discountLabel: string;      // "10 % OFF" — used in badges
  starts: string;             // ISO in Europe/Lisbon, e.g. "2026-01-01T00:00:00+00:00"
  ends: string;               // ISO in Europe/Lisbon
  placements: Placement[];
  affectsTiers?: string[];    // pricing slugs — for schema regeneration
  voucherCode?: string;       // "WINTER15" — Arlindo's internal marker
  mailtoLine?: string;        // "Voucher: WINTER15 — please apply the 10% discount."
  priority?: number;          // higher wins if placements overlap
};
```

`data/promos.ts` exports one array. Nothing else in the codebase decides what a promo does — the array's `placements`, `affectsTiers`, and `mailtoLine` drive everything.

## Full-year strawman for Arlindo to redline

| Window | Promo id | Placements | Rule |
|---|---|---|---|
| Year-round | `groups-5plus` | `groups-badge` | 10 % off for groups of 5+ riders |
| Jan–Feb | `winter-special` | `hero-ribbon`, `prices-callout` | 15 % off all tours — off-peak fill |
| Easter week | `easter-2h3h` | `signature-callout`, `prices-callout` | 10 % off 2 h & 3 h tours |
| Sep–Oct | `locals-discount` | `sightseeing-badge` | 10 % off Cascais residents (Jeep tour) |
| Nov–Dec | `winter-deep` | `hero-ribbon`, `sightseeing-badge` | 15 % off + Jeep bundle |
| Dec 15 – Jan 6 | `gift-a-tour` | `hero-ribbon` | Christmas gift-a-tour angle |
| Ad hoc | `insta-firsttimer` | `hero-ribbon` (on demand) | 10 % off for Instagram code holders |

Arlindo redlines that table. Alex commits, Vercel auto-deploys. Zero admin panel.

## Auto activate / deactivate — chosen approach

**Client-clock activation.** The full promo array ships in the HTML. A tiny client component reads `Date.now()` in `Europe/Lisbon`, filters the array, renders the active promos into their placements. No cron, no ISR, no rebuild-per-day. Works with full edge cache indefinitely.

Trade-offs and mitigations:

- **First-paint flash**: hide the promo containers with `visibility: hidden` until hydrated. Prevents a stale ribbon flash.
- **Future promos visible in HTML source**: acceptable for marketing content. If a specific promo needs to be hidden until launch (e.g. price-sensitive), move it to Phase-15-B (ISR) — see below.
- **Timezone consistency**: everything anchors on `Europe/Lisbon` via `Intl.DateTimeFormat` — no `new Date()` UTC bugs.

If we ever need genuinely-hidden future promos, the alternative is **ISR hourly** (`export const revalidate = 3600`). Whole page becomes ISR — small cost, and only the currently-active promos land in HTML. Keep this as an easy switch, not the default.

## Rendering — where each placement lives

- `hero-ribbon` — new `<PromoRibbon />` mounted immediately under the fixed header. Full-width lime strip. Copy + CTA button. Dismissible with a small `×` stored in localStorage — reappears when a new promo starts.
- `prices-callout` — card above the pricing grid, same rounded style as the tier cards. Explains the discount rule and links to `#contact`.
- `signature-callout` — block sitting inside the signature-tour section, above the "Also available" bridge.
- `groups-badge` / `sightseeing-badge` — small chips reusing the `PerkBadge` visual pattern (`+ Praia do Abano` style). Contextual to the section they attach to.

Precedence when two promos target the same placement:

1. Higher `priority` first.
2. Otherwise: more-specific placement wins over `hero-ribbon`.
3. Otherwise: newest `starts` date wins.

## Mailto auto-attach

Every CTA in the site funnels through `mailtoBooking(topic)` today. Extend it:

```ts
mailtoBooking(topic, { promo?: Promo })
```

When a promo is active, the caller passes it in. The mailto body then prepends:

```
Voucher: WINTER15 — please apply the 10% discount.
```

Arlindo sees the marker in every email that came in during the window. He can eyeball it and honor it. No customer types anything.

Cases where the promo is passed:
- CTA rendered inside a promo callout / badge → that promo.
- Global CTAs (header, hero) → the highest-priority hero-ribbon promo if one is active, else no promo line.

## Analytics hooks (reuse the Phase 13 bridge)

New events, same `data-track` mechanism:

- `promo_view` — fires when a promo becomes visible on scroll into viewport (IntersectionObserver in the promo component). Params: `{ id }`.
- `promo_click` — fires when the promo's CTA is tapped. Params: `{ id, placement }`.
- Existing `book_click` gains an optional `promo_id` param when the source CTA was inside a promo container.

That closes the loop for Arlindo: "the Winter Special drove 8 enquiries in Feb" is a single GA4 report on `book_click` grouped by `promo_id`.

## SEO / structured data

Handled in the Phase 14 SEO doc — see the "Promo-aware structured data" section. Summary:

- Each active promo mutates the matching `Offer` nodes in the existing `OfferCatalog` (adds `price`, `priceValidUntil`, optional `eligibleQuantity`).
- Each hero-ribbon promo adds a `SpecialAnnouncement` node with `category: Promotion`.
- Regeneration is automatic — same source of truth as the UI.

## Editorial workflow

- Arlindo sends a WhatsApp: *"start the 10 % groups thing for Feb, call it Winter Special"*.
- Alex edits one entry in `data/promos.ts`, commits, pushes.
- Vercel auto-deploys within ~30 s.
- Promo goes live on its `starts` date and disappears on its `ends` date automatically.
- If Arlindo forgets to end a promo, the `ends` date does it. That's the point.
- To extend, Alex bumps the `ends` date and redeploys. To pull early, set `ends` to yesterday.

## Distribution (worth reminding Arlindo)

Time-limited promos don't get organic-search traffic on their own — the crawl cycle is too slow for short windows. Real promo distribution:

1. **Google Business Profile** — add an Offer post per promo. Free, fast, indexed. High leverage.
2. **Instagram / WhatsApp Status** — where Arlindo already reaches past customers.
3. **GetYourGuide / TripAdvisor listings** — orders of magnitude more traffic than his own homepage. Update pricing there when a promo runs.
4. **Email list** of past bookers — highest conversion channel bar none.
5. **The landing page** — closes conversions from all channels above.

The site's promo section is the **conversion surface**, not the acquisition surface.

## Acceptance

- One promo calendar file drives ribbon, callouts, badges, mailto pre-fill, and JSON-LD.
- Toggling a promo on/off = editing `data/promos.ts` and pushing.
- Promos activate and expire at midnight `Europe/Lisbon` without any manual step.
- Analytics attributes bookings back to the promo that drove them.
- No admin panel, no CMS, no external service.

## Open decisions for Arlindo

1. **Which promos to run this year** — redline the strawman table above.
2. **Ribbon vs no ribbon** — is he OK with a full-width strip for the biggest campaigns, or does he prefer everything stay contextual (badges + callouts only)?
3. **Group discount rule** — his WhatsApp mentioned "X % off groups of 5+". Confirm: `5+`, `10 %`, applies to which durations?

## Blockers

- Answers to the three questions above.
- No technical blockers — the promo system is self-contained inside the existing static Next.js codebase.
