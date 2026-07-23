# Phase 18 — Google Business Profile (GBP)

The biggest untapped local-SEO lever. "buggy tours near me" and every map-pack
result is won by the Business Profile, not the website. The legacy Wix data
shows Google Maps sent **zero** sessions in the last 365 days — the business
is invisible where tourists actually look.

Almost everything here is Arlindo-side (needs the business owner's Google
account). Our side is small: UTM-tag the link, wire the profile URL into
JSON-LD `sameAs`, and watch attribution in GA.

## Step 0 — check for an existing listing first

Search Google Maps for "Guincho Adventours" and for the address
(Rua da Areia 1306, Cascais). Businesses often have an auto-generated,
unclaimed listing already.

- If a listing exists → **Claim this business** on the listing.
- If not → create at https://business.google.com.

Never create a duplicate — Google punishes duplicate listings.

## Step 1 — claim & verify (Arlindo, ~15 min + wait)

1. Sign in with **guinchoadventours@gmail.com** (same account that receives
   bookings — keeps everything in one place).
2. Business name: **Guincho Adventours** — exactly this, no keyword stuffing
   ("Guincho Adventours Quad Tours Cascais" risks suspension).
3. Verification: Google will ask for a **video verification** (walk-through
   showing the office sign, the quads, street context) or a postcard to
   Rua da Areia n.º 1306. Video is faster (days, not weeks).

## Step 2 — core data (must match the website exactly)

| Field | Value |
|---|---|
| Address | Rua da Areia n.º 1306, Areia, 2750-095 Cascais |
| Phone | +351 934 479 075 |
| Website | `https://www.guinchotours.org/?utm_source=google&utm_medium=organic&utm_campaign=gbp` |
| Hours | Mon–Sun 09:00–18:30 |
| Primary category | **Tour operator** |
| Secondary categories | Tourist attraction · Adventure sports · Sightseeing tour agency |

The UTM parameters make GBP traffic visible in GA4 (otherwise it hides
inside generic "google / organic").

## Step 3 — description (750 chars max, keywords early)

Suggested text:

> Guided quad bike and buggy tours along the wild Atlantic coast of Guincho,
> Cascais — minutes from Sintra and Lisbon. Family-run for 18 years with
> ~30,000 happy adventurers. Also sea kayaking, mountain biking, guided
> hiking and Land Rover sightseeing tours to Sintra and Cabo da Roca with
> wine-cellar visits. Tours from €60 per person, all gear and briefing
> included, beginners welcome. Stag parties and corporate groups up to 50.
> Open every day 09:00–18:30. Book by email or WhatsApp.

## Step 4 — services with prices

Add under Services (mirrors /tours):

- Quad tour 1 h — €60
- Quad tour 1 h 30 (Praia do Abano photo stop) — €75
- Quad tour 2 h (Peninha) — €110
- Quad tour 3 h signature — price on request
- Buggy tours · Sea kayak · Mountain bike · Guided hiking · Sintra Jeep tour

## Step 5 — photos (biggest ranking + conversion factor after reviews)

- Minimum 10 real photos at launch: quads on the trail, the coast, the
  office/sign, Arlindo, happy groups (with permission).
- Logo + cover photo.
- **Add 1–2 new photos every week** — recency is a ranking signal. Arlindo
  takes photos on tours anyway; this is a 2-minute habit.
- No stock photos. Google detects and demotes them.

## Step 6 — reviews (the compounding engine)

1. In the GBP dashboard, get the **review short-link**
   (Share profile → Ask for reviews, a `g.page/r/...` URL).
2. Ask **every happy rider at the end of the tour** — verbally + send the
   link on WhatsApp while they're still in the parking lot. Conversion is
   10× higher in the first hour after the tour.
3. **Reply to every review** within a few days, in the review's language.
   Owner replies are a ranking signal and show in the listing.
4. Never incentivise reviews (against ToS); just ask.

Once the short-link exists, we add it to the site footer and the planned
post-tour follow-up / postcard flow.

## Step 7 — weekly posts (optional but cheap)

One GBP post a week: a tour photo + one sentence + "Book" button linking to
the site. Recycles the same photos from Step 5. Keeps the profile "active"
in Google's eyes.

## Step 8 — Q&A seeding

The Q&A section is public and anyone can answer — seed it before strangers
do. Post (from any account) and answer (from the business account) the top
FAQ items: Do I need experience? · How much? · Can two share a quad? ·
Do you do stag parties? — copy the answers from the site FAQ.

## Our side (code / analytics) once the profile is live

- [ ] Get the **Maps/profile URL** from Arlindo → add to
      `site.socials.googleBusinessProfile` in `app/lib/site.ts` → it flows
      into JSON-LD `sameAs` (same as Instagram/TripAdvisor).
- [ ] Confirm the UTM-tagged website link is set (Step 2).
- [ ] Add `utm_campaign=gbp` to the acquisition checks in the seo-agent
      reports so GBP sessions are visible.
- [ ] Add the `g.page` review link to the footer / follow-up materials.

## What success looks like

- Weeks 1–4: listing appears for "Guincho Adventours" brand searches with
  photos, hours, reviews.
- Months 2–3: map-pack appearances for "quad tours cascais", "buggy tour
  guincho" — this is where "near me" traffic lives.
- GA4 shows `utm_campaign=gbp` sessions — a channel that today sends zero.
