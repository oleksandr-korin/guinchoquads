# Phase 3 — Pricing section (new)

Arlindo asked for prices directly on the site. Today the only tour price displayed is implied. Add a dedicated Prices section.

## Files

- `app/page.tsx` — insert new `<section id="prices">` between Signature Tour and Reviews.
- `data/pricing.ts` — new file, exports the tour tiers.

## Data (from the transcript)

Quad tour tiers, per participant:

| Duration | Price | Group rules | Notes |
|---|---|---|---|
| 1 hour | **€60** | Groups up to 8. | The cheapest / most sold tier, especially for teenagers and younger travellers. |
| 1 h 30 min | **€75** | Medium group (>8). Requires more guides & longer briefing. | Scenery ≈ same as 1 h. |
| 2 hours | **€110** | Goes up to Peninha (top of the mountain) and back to the coast. | "Gorgeous" — first tier with premium scenery. |
| 3 hours | (feature price) | Signature experience, already headlined on the site. | Full coast + mountain + viewpoints. |

Passenger option (2 h and 3 h tiers):

> **Passenger mode available on request.** (Do not mention the internal 130 kg combined-weight rule on the public site — handled during booking correspondence.)

## UI notes

- Card-per-tier layout, price large, duration small above.
- Highlight the 3-hour card as "signature".
- Add a footnote under the grid noting that passenger mode is available on request for the longer tours.
- Include a "BOOK THIS TOUR" pill button on each card → scrolls to `#contact`.

## Acceptance

- New section renders four price cards.
- The safety note is visible on the 2 h / 3 h cards.
- Booking CTA on each card scrolls to the booking form.

## Blockers

- Confirm current price for the 3-hour tour before ship (transcript doesn't state a number for it). See Phase 12.
