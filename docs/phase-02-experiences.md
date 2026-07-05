# Phase 2 — Experiences rewrite

The current six-card grid was drafted from AI-generated copy and includes products Guincho Adventours does not actually sell. Rewrite the catalog to match Arlindo's real offering.

## Files

- `app/page.tsx` — `experiences` array + section heading count.
- (Optional) `data/experiences.ts` — extract the array now that it has real business logic behind it.

## Decisions from the call

Current cards → Action:

| Current | Action | Note |
|---|---|---|
| Quad Bikes | **Keep** — hero product. | Push hardest. |
| Buggies | **Keep but de-emphasize** | Only two vehicles, "most of the time they are broken". Do not headline. |
| Moto-4 | **Remove** | "We still don't have that." |
| Sea Kayak | **Keep** | |
| Biking | **Keep** (rename to "Mountain Bike") | "Not so much" — leave in but lower priority. |
| Guided Sintra | **Rewrite as "Jeep Sintra Tour"** | Not on quads. Delivered by partner company in Land Rovers. Feeds Phase 5. |
| — | **Add "Hiking"** | New alternative. |

Final list, in recommended visual priority order:

1. **Quad Bike Tours** — twin-track coastal + mountain trails.
2. **Sea Kayak** — turquoise coves and Atlantic caves.
3. **Jeep Sintra Tour** — Sintra UNESCO, Cabo da Roca, wine cellar. (See Phase 5 for the standalone section.)
4. **Mountain Bike** — forest and dune singletrack.
5. **Hiking** — coastal + Sintra hills, guided.
6. **Buggies** — side-by-side for small groups. (Keep last, tone down the copy.)

## Copy notes

- Do not mention "Cintra or Cabo da Roca" as a quad experience — only as a Jeep/culture experience. Arlindo: "We are not doing Sintra or Cabo da Roca [by quad] anymore."
- Hiking description should mention it as the calm alternative for less active groups.

## Acceptance

- Six cards render with the new list and copy.
- Section heading updates: `SIX WAYS TO EXPLORE` still works because it's still six, but recheck if hiking gets dropped later.
- Image assignments swap for the removed/added cards — see Phase 11 for real photos; use best-guess AI placeholders in the meantime.

## Blockers

- None to ship the copy. Photos are Phase 11.
