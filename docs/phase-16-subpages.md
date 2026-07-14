# Phase 16 — Sub-pages architecture (SEO deep-dive)

The single-page site ranks for one blended intent — quad tours in Cascais. Google can't send a "sea kayak Cascais" or "Sintra Jeep tour wine tasting" query to a specific page because there isn't one. Splitting into a hub-and-spoke structure lets each activity earn its own ranking, with the homepage as the hub that funnels visitors down and internal links flow authority around.

Only worth doing if every new page has real, unique content depth. Thin duplicate pages hurt more than they help post-2024 Google.

## What to build

### Experience pages (six)

- `/tours/quad-bike-tours`
- `/tours/sea-kayak`
- `/tours/jeep-sintra`
- `/tours/mountain-bike`
- `/tours/hiking`
- `/tours/buggies`

Each page needs, at minimum:

- 400–800 words of unique copy — not a rehash of the homepage card.
- Photo grid specific to that activity (3–6 shots).
- What's included, what to bring, meeting point + map.
- Duration options, group sizes, price rules for that activity.
- Related FAQ questions (subset of `data/faq.ts` filtered by tag).
- Internal links: back to hub, forward to related tour, sideways to `/tours/prices` and `/contact`.
- `TouristTrip` (preferred) or `Product`/`Service` schema per page with local `Offer` nodes.
- `BreadcrumbList` schema.

### Audience-segment pages (two)

- `/groups/stag-parties`
- `/groups/corporate`

Each has stronger conversion intent than an experience page — the visitor already knows what they want. Content angle: logistics, pricing framing, past group photos, single case study each.

### Evergreen supporting pages

- `/gift-a-tour` — permanent version of the December promo. Ranks on "quad tour gift voucher Portugal" year-round.
- `/prices` — pull the pricing section out of the homepage as its own page. Ranks on price queries.
- `/reviews` — aggregate testimonials from TripAdvisor + GetYourGuide + Google (manual initially, later API-scraped). Reviews content ranks well.

### Later, if traffic justifies

- `/lisbon-to-guincho`, `/lisbon-day-trip`, `/from-cascais-to-sintra` — location-intent landing pages.
- `/pt/…` — full Portuguese locale with `hreflang` alternates. Doubles addressable market.
- `/journal/` — long-form blog for long-tail. One post per season, e.g. "Best time of year to ride quads in Cascais". High effort, medium yield for this scale of business.

## URL structure decision

Flat vs nested — going nested:

```
/tours/quad-bike-tours
/tours/sea-kayak
/tours/jeep-sintra
...
/groups/stag-parties
/groups/corporate
/gift-a-tour
/prices
/reviews
```

Nested (`/tours/quad-bike-tours` over `/quad-bike-tours`) trades three characters for clear grouping and a natural `/tours` hub page. Also lets us later add `/tours/` as a landing page listing all activities.

## Homepage becomes the hub

Once sub-pages exist:

- Every experience card on the homepage becomes a link to its detail page instead of a mailto.
- Each sub-page has one "Book" CTA (mailto) and one "See all tours" link back to homepage.
- Signature Tour section stays on homepage but links to `/tours/quad-bike-tours#3-hour` for deeper content.
- Prices callout on homepage becomes a link to `/prices`.
- Sightseeing section links to `/tours/jeep-sintra`.
- Groups section links to `/groups/stag-parties` and `/groups/corporate`.

Homepage loses no content — it just gains navigation depth.

## Content sourcing plan

We can't write 8+ new pages without Arlindo's input. The information we need for each experience page:

- Duration options + prices (partially covered by `data/pricing.ts`)
- What's included (gear, guide, water, transport)
- Meeting point (address, parking info, arrival time)
- Route highlights specific to that activity
- Age minimums, licence requirements, weight limits
- What to bring / wear
- Cancellation window (covered in `/terms`)
- 3–6 photos per activity

Draft each page from the existing card copy + FAQ answers + one paragraph per bullet above. Send Arlindo the draft, he redlines, we ship.

## Schema per sub-page

Every experience page carries its own graph node in addition to the site-wide LocalBusiness:

```jsonc
{
  "@context": "https://schema.org",
  "@type": "TouristTrip",
  "@id": "https://www.guinchotours.org/tours/quad-bike-tours#trip",
  "name": "Quad Bike Tours — Guincho, Cascais",
  "description": "…unique copy from the page…",
  "provider": { "@id": "https://www.guinchotours.org/#business" },
  "touristType": ["First-time riders", "Adventure seekers"],
  "offers": [ /* pull the matching tiers from data/pricing.ts */ ],
  "image": ["…3 photos…"],
  "review": [ /* activity-specific reviews when we have them */ ]
}
```

Plus `BreadcrumbList` for the visited path.

## Internal linking rules

- **Every sub-page links up** to homepage and `/prices`.
- **Every sub-page links sideways** to one contextually related tour (quad → buggies, kayak → hiking, jeep → hiking, etc.).
- **Homepage cards** become links (currently mailto — swap to sub-page href).
- **FAQ answers** cross-link when they reference a specific tour.
- **Groups pages** link to any experience their target audience typically books (stag → quads + buggies, corporate → jeep + quads).

Rule of thumb: minimum three internal links out of every content page.

## Sitemap updates

Once sub-pages exist:

- Home stays priority 1.0.
- Experience pages: priority 0.8, changefreq monthly.
- Groups pages: priority 0.8, changefreq monthly.
- `/gift-a-tour`, `/prices`, `/reviews`: priority 0.7, changefreq monthly.
- `/terms`, `/privacy`: stay at 0.3.

## Additional SEO best practices to bundle in

- **Custom 404 page** — currently the default. Make it lead visitors to `/tours/` and `/contact`.
- **`app/opengraph-image.tsx`** — dynamic OG image generator (see this session's separate OG image work).
- **Favicon set** — 16, 32, 180, 512 sizes from the logo. Cheap credibility.
- **`next/image`** for all real photos — hero LCP + card lazy-load. Bundled with the sub-page migration since we'll touch every photo reference.
- **Speed Insights** — enable Vercel Speed Insights so we track Core Web Vitals over time.
- **Google Search Console** — verify domain, submit sitemap. Blocked on real domain migration.
- **`AggregateRating`** — needs real review count from TripAdvisor / GetYourGuide.
- **Location page for Sintra + Cabo da Roca** — one page targeting "Sintra day trip from Cascais" that funnels to `/tours/jeep-sintra`.

## What NOT to do

- Copy homepage card content into a page and call it done — that's thin content, Google now penalises this.
- Create pages before we have unique content for each.
- Migrate to sub-pages without also swapping the homepage cards to link to them (creates orphan pages).
- Ship a Portuguese version by machine-translating the English content — worse than not having one.

## Suggested rollout

Wave A (once domain and content are ready):

1. `/tours/quad-bike-tours` — highest search volume, easiest content (already the most-detailed section).
2. `/tours/jeep-sintra` — highest-margin product per the transcript, worth targeting specifically.
3. Update homepage cards to link to (1) and (2).

Wave B:

4. Remaining four experience pages.
5. `/groups/stag-parties`, `/groups/corporate`.
6. `/gift-a-tour`, `/prices`.

Wave C:

7. `/reviews` (needs data pipeline decision).
8. Location pages.
9. Portuguese locale.

## Blockers

- **Content per experience** — Arlindo needs to answer the "what's included / meeting point / route highlights / age minimum" questions for each activity. Bundle into the same conversation as terms + RNAAT + insurer facts.
- **More photos per activity** — one photo per card is OK for a small site, but sub-pages need 3–6 photos each. Arlindo's next photo batch should be organised by activity.
- **Domain migration** — target domain is `www.guinchotours.org` (currently on Wix). Sub-pages built before the DNS flip will re-canonicalise cleanly once `NEXT_PUBLIC_SITE_URL` is set in Vercel prod.
