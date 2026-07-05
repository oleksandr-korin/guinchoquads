# public/photos/

Drop real photos here to replace the AI-generated placeholders.

## Wiring

Every photo slot is declared in `data/photos.ts`. When a real file arrives:

1. Save it in this folder using one of the filenames below.
2. Open `data/photos.ts` and change the `src` of the matching slot to
   `"/photos/<filename>"`.
3. Delete the `placeholder: true` line from that slot.
4. Update the `alt` text if the picture is meaningfully different.

That's it — no other file needs to change.

## Filenames the site expects

| Slot | Filename | Where it appears | Priority |
|---|---|---|---|
| `hero` | `hero.jpg` | Full-bleed hero image behind the headline | Highest — LCP |
| `signature` | `signature.jpg` | Background of the 3-hour signature tour section (opacity 40) | Medium |
| `sightseeing` | `sightseeing.jpg` | Background of the Sintra / Jeep sightseeing section (opacity 30) | Medium |
| `reviews` | `reviews.jpg` | Background of the reviews section (opacity 25) | Low |
| `experience/quad-bike-tours` | `quad-bike-tours.jpg` | Quad Bike Tours card | High |
| `experience/sea-kayak` | `sea-kayak.jpg` | Sea Kayak card | High |
| `experience/jeep-sintra-tour` | `jeep-sintra-tour.jpg` | Jeep Sintra Tour card | High |
| `experience/mountain-bike` | `mountain-bike.jpg` | Mountain Bike card | High |
| `experience/hiking` | `hiking.jpg` | Hiking card (currently placeholder — no matching AI shot) | High |
| `experience/buggies` | `buggies.jpg` | Buggies card | Medium |
| `arlindo` | `arlindo.jpg` | Meet the Owner portrait (currently a designed placeholder with a giant "A") | High |

## Delivery specs

- Format: **JPEG** (or WebP if you can). Anything from Arlindo's phone / DSLR / drone works — we'll convert as needed.
- Colour space: **sRGB**.
- Aspect / crop guidance:
  - **Hero** — wide landscape, min 2400 px on the long edge. Rider-in-scene works best. Golden hour preferred.
  - **Signature / Sightseeing / Reviews backgrounds** — landscape, wide (16:9 or wider), min 1920 px long edge. These sit under text at 25–40 % opacity, so mood matters more than composition detail.
  - **Experience cards** — portrait or square, min 1600 px on the long edge. Each card renders at ~500 × 625 px on desktop.
  - **Arlindo portrait** — portrait (4:5), min 1200 px on the long edge. Working portrait — with a quad, at the office, on the trail — beats a studio shot.
- Weight: aim ~600 KB for the hero, ~300 KB per card. Next.js will further optimize on the fly once we migrate this folder to `next/image`.

## What we still need most

1. **Hiking** — the AI set has no hiking shot at all; the current card uses a rider photo as a placeholder.
2. **Arlindo's portrait** — the "Meet the Owner" section renders a designed placeholder until a real portrait arrives.
3. **Wine cellar / Land Rover** — the Sintra / Sightseeing section works with a generic Sintra scene but a real cellar tasting or Jeep-on-Sintra-road shot would sell the section much harder.
4. **Group / stag / corporate** — no dedicated photo for the Groups section; a group-having-fun shot from the existing Wix gallery would drop straight in.

## Attribution

If any photo has a required credit, add a `credit: "Photographer Name"` field
to the slot in `data/photos.ts` — the site will surface it in the footer /
image alt as appropriate (not yet wired — flag when the first credited photo
arrives).
