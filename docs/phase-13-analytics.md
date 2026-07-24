# Phase 13 — Analytics & event tracking (GA4)

We're using mailto CTAs (Phase 10) instead of a form, which means we don't get a submission event server-side. The only way to know what actually converts is to fire client-side analytics before the mail app opens. Add GA4 + a small event vocabulary tuned to the CTAs that matter to the business.

## Files

- `app/layout.tsx` — mount GA4 tag.
- `app/lib/analytics.ts` — typed `track()` wrapper around `gtag('event', …)`.
- `app/components/consent-banner.tsx` — small cookie / consent banner (GDPR — Portugal/EU).
- `app/components/mobile-menu.tsx` — fire `menu_open` on open.
- `app/page.tsx` — wire `track()` into every CTA (`onClick`).
- `.env.example` — `NEXT_PUBLIC_GA_ID`.

## Setup

Use the official Next.js integration:

```bash
npm i @next/third-parties
```

In `app/layout.tsx`:

```tsx
import { GoogleAnalytics } from "@next/third-parties/google";
// ...
{process.env.NEXT_PUBLIC_GA_ID && (
  <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
)}
```

- Load only when the env var is set — dev + preview stay clean by default.
- Set GA4 **Consent Mode v2** default state to `denied` until the banner is accepted.

## The `track()` helper

```ts
// app/lib/analytics.ts
type EventName =
  | "book_click"
  | "pricing_tier_click"
  | "experience_click"
  | "phone_click"
  | "menu_open"
  | "explore_click";

export function track(event: EventName, params: Record<string, string | number> = {}) {
  if (typeof window === "undefined") return;
  const gtag = (window as unknown as { gtag?: (...a: unknown[]) => void }).gtag;
  gtag?.("event", event, params);
}
```

Keep the event vocabulary small and stable so GA4 dashboards don't fragment.

## Event vocabulary

All events carry a `cta_source` param so the same event can be attributed to its origin. (The param was originally named `source`, but GA4 treats an event param literally named `source` as a manual traffic-source override, corrupting acquisition attribution — hence the rename.)

| Event | When | Params |
|---|---|---|
| `book_click` | Any "Book" CTA (header, hero, signature, prices, jeep, stag, corporate) | `cta_source: "header" \| "hero" \| "signature" \| "prices_{tier}" \| "jeep" \| "stag" \| "corporate" \| "mobile_menu"` |
| `pricing_tier_click` | Card CTA in Prices section | `tier: "1h" \| "1h30" \| "2h" \| "3h"` |
| `experience_click` | Any experience-card tap | `slug: "quad-bike-tours" \| ...` |
| `phone_click` | `tel:` link in header, mobile menu, or contact panel | `cta_source: "header" \| "mobile_menu" \| "contact"` |
| `menu_open` | Mobile hamburger opened | — |
| `explore_click` | Hero "Explore experiences" secondary CTA | — |

Every mailto click fires **before** the browser hands off to the mail app — use `onClick` (not `onMouseDown`) and don't `preventDefault`. The GA beacon is `sendBeacon`-based in GA4, so it survives the navigation.

## Consent

Portugal is EU — assume GDPR + ePrivacy apply.

- Default consent state: `analytics_storage: denied`, `ad_storage: denied`.
- Banner options: **Accept** / **Reject** / **Manage**.
- Store the choice in `localStorage` (`consent-v1: "accepted" | "rejected"`).
- On Accept: call `gtag('consent', 'update', { analytics_storage: 'granted' })` and reload the queued hits.
- No pre-consent tracking. Ever.

Alternative: use Vercel Marketplace consent integration (Cookiebot, Iubenda) — cheaper cognitive load, but adds a paid dep. Start with a self-rolled banner.

## What the dashboards should tell Arlindo

Set up GA4 exploration reports for:

1. **Booking funnel** — number of `book_click` events by `cta_source`. Which section drives the most enquiries?
2. **Price sensitivity** — `pricing_tier_click` breakdown. Confirms Arlindo's hypothesis that 1 h dominates.
3. **Traffic vs enquiries** — session count vs total `book_click`. Rough conversion signal.
4. **Device split** — mobile vs desktop `book_click` rate. Informs whether the mobile menu is worth further polish.
5. **Referral / campaign** — GA4's built-in acquisition report; useful once Arlindo starts running ads or GetYourGuide referrals.

## Acceptance

- GA4 tag loads only when `NEXT_PUBLIC_GA_ID` is set.
- Consent banner blocks all analytics until the visitor accepts.
- Every CTA on the page fires exactly one event with a stable `cta_source` label.
- Dev environment (localhost) does not send events unless a test GA property ID is set locally.
- No PII in event params — never send the mailto address, name, or phone as an event parameter.

## Blockers

- ~~**GA4 Measurement ID**~~ — resolved: `G-321BYFNLLJ` wired via `NEXT_PUBLIC_GA_ID` in Vercel prod env.
- **Cookie / privacy policy page** referenced from the banner — piggy-back on the Terms & Conditions page (Phase 9) as a "Privacy" subsection, or add a separate `/privacy` route.

## TODO — register custom event parameters as GA4 dimensions

Every `book_click`, `pricing_tier_click`, `whatsapp_click`, `experience_click` etc. fires with a `cta_source` param (`hero`, `signature`, `contact_section`, `contact_email`, `footer_email`, `jeep`, `stag`, `corporate`, `owner`, `header`, `fab`, `tour_<slug>` …) and `pricing_tier_click` additionally carries `tier` (`1h` / `1h30` / `2h` / `3h`). These are captured by GA4 but **not queryable via the Data API** until they are registered as **custom dimensions** in GA4 Admin.

Setup, 2 minutes when Arlindo/Alex want the finer detail:

1. GA4 → Admin → Custom Definitions → Custom Dimensions → **Create custom dimension**.
2. Scope: **Event**. Dimension name: `cta_source`. Event parameter: `cta_source`. Description: "Which page section fired the CTA click." Save.
3. Repeat for `tier`.
4. Wait 24–48 h for data to backfill in reports.
5. Then `scripts/seo-agent/reports/tours-clicked.ts` returns real `byTier` and `bySource` breakdowns (currently they error with `INVALID_ARGUMENT` because the dimensions don't exist). No script change needed.

Unlocks: "which homepage section drives clicks", "which price tier is most enquired about", "hero vs contact_email vs footer_email conversion split", "WhatsApp FAB vs inline link performance".

Until then, `pagePath` breakdown in the same report is the coarse proxy — good enough to see which subpages convert, not fine-grained enough to see which section on the homepage does the work.
