# Guincho Adventours — Implementation Roadmap

Source: `docs/1.md` (transcribed conversation between Alex and Arlindo, owner of Guincho Adventours).

The current landing page (rebuild of `staging-crossfit-black-edition-c-5b85e612.ploy.build`) has generic AI copy and a placeholder product catalog. Arlindo walked through what to change to make the site match the real business.

## Core decisions from the call

1. Years in business: **18**, not 10+.
2. Product line-up needs a rewrite — Moto-4 is out, hiking is in, "Guided Sintra" is a Jeep tour (partner company), buggies are de-emphasised because there are only two and they break.
3. Add a real **prices** section (one-hour is the workhorse product, three-hour is the aspirational headline).
4. Add a **Jeep sightseeing** section for the culture/wine-tasting crowd — corporate + non-active audience.
5. Add promo for **stag parties** and **corporate events** — both are meaningful segments Arlindo wants to grow.
6. Owner presence: put **Arlindo's name** on the site; reviews mention him personally. Trust signal.
7. Add **FAQ** section, drafted from the recording, then reviewed by Arlindo.
8. Legal: display **insurance / RNAAT registration**, add a **Terms & Conditions** page.
9. Bookings continue to route to Arlindo's **email** (both addresses). No phone-first flow.
10. Real **photos** need to replace the AI-generated placeholders.

## Phase order

| # | File | Scope |
|---|------|-------|
| 1 | `phase-01-copy-tweaks.md` | Fast copy edits (years, stat labels). |
| 2 | `phase-02-experiences.md` | Rewrite the six-experience grid. |
| 3 | `phase-03-pricing.md` | New Prices section with 1h / 1h30 / 2h / 3h tiers. |
| 4 | `phase-04-tour-durations.md` | Rework the signature-tour section to surface all four durations. |
| 5 | `phase-05-jeep-cultural.md` | New Jeep / wine-cellar / cultural-tour section. |
| 6 | `phase-06-audience-segments.md` | Stag parties + corporate events sections. |
| 7 | `phase-07-faq.md` | FAQ section drafted from the transcript. |
| 8 | `phase-08-owner-trust.md` | "Meet Arlindo" trust module. |
| 9 | `phase-09-legal-insurance.md` | Insurance/RNAAT block + `/terms` page. |
| 10 | `phase-10-booking-email.md` | Wire the booking form to Arlindo's emails. |
| 11 | `phase-11-photography.md` | Photo asset plan (replace AI images). |
| 12 | `phase-12-open-questions.md` | Blockers waiting on Arlindo / Alex. |
| 13 | `phase-13-analytics.md` | GA4 tag + custom event tracking (mailto CTAs, pricing tiers, phone, menu). |
| 14 | `phase-14-seo.md` | SEO fundamentals — metadata, JSON-LD, sitemap/robots, Core Web Vitals, semantic HTML. Includes promo-aware structured data section. |
| 15 | `phase-15-promos.md` | Time-limited promo calendar — full-year `data/promos.ts` with client-clock auto-activation, ribbon/callout/badge placements, mailto pre-fill. |
| 16 | `phase-16-subpages.md` | Sub-page architecture — per-experience + per-audience pages, `TouristTrip` schema, breadcrumbs, internal linking. |

## Files this project will touch

- `app/page.tsx` — main landing page (most changes land here).
- `app/terms/page.tsx` — new legal page (Phase 9).
- `app/api/booking/route.ts` — form submission handler (Phase 10).
- `data/experiences.ts`, `data/pricing.ts`, `data/faq.ts` — extract page data as it grows (Phases 2/3/7).
- `public/photos/` — real photography once Arlindo delivers them (Phase 11).
- `app/lib/analytics.ts`, `app/components/consent-banner.tsx` — GA4 wrapper + consent banner (Phase 13).
- `app/sitemap.ts`, `app/robots.ts`, `public/opengraph-image.png` — SEO surface files (Phase 14).
- `data/promos.ts`, `app/lib/promos.ts`, `app/components/promo-*.tsx` — promo calendar + placements (Phase 15).

Each phase file below lists the exact files it touches, the acceptance criteria, and any blockers.
