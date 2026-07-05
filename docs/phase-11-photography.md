# Phase 11 — Photography plan

Arlindo's direct feedback: the current AI-generated images "look really fake". Real photos are the single biggest visual credibility upgrade this site can get.

> "Every customer would be looking for this type of work."

## Files

- `public/photos/` — new directory for real photography assets.
- `app/page.tsx` — swap `IMG_BASE` URLs for local paths as photos land.
- `data/experiences.ts` — update once photos exist per product.

## What we need, by section

| Section | Photo brief |
|---|---|
| Hero | Riders on quads on the coastal trail, ideally at golden hour. Wide horizontal crop. |
| Stats block | (Green block, no photo needed.) |
| Experiences: Quad | Real group ride shot. |
| Experiences: Buggy | One clean buggy shot — de-emphasized. |
| Experiences: Sea Kayak | Ocean-cove kayaking. |
| Experiences: Mountain Bike | Trail + ocean view. |
| Experiences: Hiking | Group hiking the Sintra hills / coast. |
| Experiences: Jeep Sintra | Land Rover on the road / Sintra town / wine cellar. |
| Signature 3-h tour | Wide landscape scenery shot (coast + trail). |
| Stag parties (Phase 6) | Group having fun — Arlindo said the gallery already has good candidates. |
| Corporate events (Phase 6) | Larger group posed with vehicles. |
| Jeep cultural (Phase 5) | Wine cellar / cheese-and-bread tasting. |
| Owner trust (Phase 8) | Portrait of Arlindo, ideally with a quad or on the trail. |

## Sourcing plan (from the call)

- Existing Wix gallery has candidates — pull these first.
- Arlindo's son has "a good camera / video camera" and will be asked to shoot new material.
- Some existing photos are "really terrible" — Alex to curate, not use as-is.

## Format guidelines

- Deliver JPEG or WebP, sRGB.
- Target long-edge 2400 px for hero, 1600 px for cards.
- Compress to ~300 KB / card image, ~600 KB / hero.
- Serve via `next/image` for automatic responsive variants once local files land.

## Acceptance

- All AI placeholders replaced with real photos.
- Hero + Owner portrait + at least one stag-party group shot are in place before ship.

## Blockers

- Wix login (to pull the gallery) — see Phase 12.
- New photos from Arlindo / his son.
