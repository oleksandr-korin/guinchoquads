# Phase 12 — Open questions & access

Things that block phases above. Collect answers from Arlindo in one pass instead of pinging him piecemeal.

## Needs from Arlindo

### Access

- **Wix login and password** — Alex explicitly asked at the end of the call. Needed to:
  - Pull the existing gallery photos (Phase 11).
  - Extract the current Terms & Conditions text (Phase 9).
  - Reference how the current form emails him (Phase 10).

### Business facts

- **Both booking email addresses.** (Phase 10.)
- **RNAAT registration number** and **insurance underwriter** — for footer + terms. (Phase 9.)
- **3-hour tour price** — the transcript covers 1 h / 1 h 30 / 2 h but not the 3 h number. (Phase 3.)
- **Confirm "~50,000 adventurers"** — Arlindo said "we also change" this figure. What's the real number? (Phase 1.)
- **Partner company name** for the Jeep tours — credit them or not? (Phase 5.)
- **Preferred surname / display name** for the owner trust module. (Phase 8.)
- **GA4 Measurement ID** — reuse existing Wix property or spin up a fresh GA4 property? (Phase 13.)
- **Production domain** — `guinchoadventours.pt` used as placeholder. Confirm. (Phase 14.)
- **Office coordinates** — lat/lng for the Areia office, needed for LocalBusiness `geo`. (Phase 14.)
- **Google Business Profile URL** and social profile links (Instagram, Facebook, GetYourGuide, TripAdvisor) — needed for `sameAs`. (Phase 14.)
- **Real review count + average rating** — powers `AggregateRating` structured data. (Phase 14.)
- **Promo calendar sign-off** — which promos to run this year, group discount rule, ribbon-vs-badges preference. See `phase-15-promos.md` for the strawman table Arlindo needs to redline.
- **Google Business Profile access** — per promo, we should post a matching Offer to GBP. It's the fastest promo SEO surface. Confirm Arlindo owns the GBP and can add posts / share access. (Phase 14 + Phase 15.)

### Content review

- **FAQ draft** (Phase 7) — Arlindo redlines before ship.
- **Experiences copy** (Phase 2) — sanity check that the six-tile list matches how he pitches the business today.
- **Terms & Conditions** (Phase 9) — send Alex the current text so we don't draft from scratch.

### Photography

- **Photo gallery pull** — either give Alex Wix access or send a Drive / WeTransfer bundle. (Phase 11.)
- **Owner portrait.** (Phase 8.)
- **New shoot** — when will Arlindo's son shoot new material? (Phase 11.)

## Alex side

- Set up **`/terms` route** once we have the text (Phase 9).
- **Cookie / privacy notice** referenced from the consent banner — piggy-back on `/terms` or add `/privacy`. (Phase 13.)

## Decision log

Any answer that comes back should update the matching phase file, not sit only in this list.
