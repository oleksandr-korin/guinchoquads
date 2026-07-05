# Phase 14 — SEO best practices

The rebuild is a single-page site with plenty of organic-search intent behind it ("quad tours Cascais", "Sintra Jeep tour", "buggies Guincho", "kayak Guincho"). Ship the SEO fundamentals up-front so future content phases (FAQ, prices, Jeep tour) inherit them.

## Files

- `app/layout.tsx` — root metadata (title, description, OpenGraph, Twitter, canonical, `metadataBase`).
- `app/page.tsx` — page-level metadata + JSON-LD `<script>` blocks (LocalBusiness, Offer list, Review, FAQPage, WebSite).
- `app/terms/page.tsx` (Phase 9) — per-page metadata.
- `app/sitemap.ts` — new, App Router sitemap file.
- `app/robots.ts` — new, App Router robots file.
- `public/opengraph-image.png` and `public/twitter-image.png` — new social preview assets (1200×630).
- `next.config.ts` — enforce canonical host + HTTPS redirects if configured at the domain layer.

## Metadata (all pages)

- `title` template: `"%s — Guincho Adventours"` with per-page title.
- `description`: business-relevant, keyword-natural, ≤ 155 chars.
- `alternates.canonical`: absolute URL, keeps staging/production from splitting link equity.
- `openGraph`: `type: "website"`, `locale: "en_GB"`, `siteName`, `url`, `images: [{ url: "/opengraph-image.png", width: 1200, height: 630 }]`.
- `twitter`: `card: "summary_large_image"`.
- `robots`: `{ index: true, follow: true }` on production; `noindex` on staging (env-driven).
- `metadataBase`: `new URL("https://guinchoadventours.pt")` — replace with real domain when confirmed (Phase 12).

## Semantic HTML

- Exactly **one `<h1>`** per page (the hero heading).
- Section headings step down: `<h1>` → `<h2>` → `<h3>` — no skipping.
- Wrap the main content in `<main>` (currently done), keep `<header>` / `<footer>` / `<nav>`.
- Cards become `<article>` where they represent a standalone unit (experience card, review card, price tier).
- Reviews use `<blockquote>` with a nested `<cite>`.
- FAQ (Phase 7) uses `<details>`/`<summary>` — good for SEO because the answer text stays in the DOM.

## Structured data (JSON-LD)

Inject as `<script type="application/ld+json">` blocks in `app/page.tsx`. Keep them typed via a `Thing` helper.

1. **LocalBusiness / TouristAttraction** (root):
   - `name`, `image`, `@id` (canonical URL + `#business`), `url`, `telephone`, `email`, `address` (PostalAddress with Rua da Areia 1306, Areia, 2750-095 Cascais, PT), `geo` (lat/lng), `openingHoursSpecification` (Mon–Sun 09:00–18:30), `priceRange`, `sameAs` (Instagram, Facebook, TripAdvisor, GetYourGuide).

2. **Offer / OfferCatalog** (Prices section):
   - One `Offer` per tier (`1h`, `1h30`, `2h`, `3h`).
   - `priceCurrency: "EUR"`, `price`, `availability`.

3. **AggregateRating + Review** (Reviews section):
   - Use the two testimonials as `Review` items. Add `AggregateRating` once real numbers are available (see Phase 12).

4. **FAQPage** (Phase 7 section):
   - One `Question` per FAQ, with `acceptedAnswer` populated from `data/faq.ts`.

5. **WebSite + SearchAction**:
   - Enables Google's sitelinks search box even without a search — cheap to include.

## Sitemap + robots

App Router native:

```ts
// app/sitemap.ts
export default function sitemap() {
  const base = "https://guinchoadventours.pt";
  return [
    { url: `${base}/`, lastModified: new Date(), priority: 1 },
    { url: `${base}/terms`, lastModified: new Date(), priority: 0.3 },
  ];
}

// app/robots.ts
export default function robots() {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://guinchoadventours.pt/sitemap.xml",
  };
}
```

Preview + staging environments must return `noindex` (Vercel sets `X-Robots-Tag` automatically for preview URLs — verify).

## Images

- Migrate to `next/image` once real photos are in `public/photos/` (Phase 11).
- Every `<img>` / `<Image>` needs a descriptive `alt` — no `alt="image"` fluff.
- Hero image marked `priority` and `fetchPriority="high"` for LCP.
- All other images use lazy loading (default with `next/image`).
- Serve WebP + AVIF via `next/image` — automatic once configured.

## Core Web Vitals

- **LCP**: hero image is the LCP element. Serve it as a locally hosted WebP once available; preload it in `<head>` via `<link rel="preload" as="image">`. Target < 2.5 s.
- **CLS**: fonts already use `display: swap` — check for layout shift on the hero when Anton loads. Consider `size-adjust` if visible shift remains.
- **INP**: mobile menu is the only interactive component so far — measure after adding the FAQ accordion (Phase 7).
- Run **Lighthouse** and **PageSpeed Insights** on preview + production. Target 90+ across the board.

## Local SEO alignment

- **NAP consistency** — Name/Address/Phone identical on website, Google Business Profile, GetYourGuide, TripAdvisor, Instagram bio.
- Structured data address must match Google Business Profile character-for-character.
- Link to the Google Business Profile from the LocalBusiness JSON-LD `sameAs`.

## Copy / on-page keywords

Weave the following into H1/H2/body without keyword stuffing:

- "Quad bike tours in Guincho, Cascais"
- "Buggies", "sea kayak", "mountain bike", "hiking" — the six-way grid already does this.
- "Sintra Jeep tour with wine cellar" — Phase 5 headline.
- "Bachelor party / stag party quad tour Cascais" — Phase 6.
- "Corporate off-site Cascais" — Phase 6.

## Internationalisation (deferred)

- Most current traffic is English. Portuguese secondary.
- Plan for `/pt` locale later as a separate route group (`app/[locale]/…`) with `hreflang` alternate metadata.
- Not blocking the launch — flag as a follow-up.

## Analytics feedback loop

- Use GA4 (Phase 13) + Google Search Console to close the loop:
  - Verify the domain in Search Console at launch.
  - Submit `sitemap.xml`.
  - Monitor Core Web Vitals report and Coverage.
  - Compare Search Console queries to what we wrote in copy — adjust if we're indexing on the wrong terms.

## Acceptance

- Every page has a unique `<title>` and `description`.
- One `<h1>` per page, correct heading hierarchy.
- JSON-LD blocks for LocalBusiness, Offer, Review, FAQPage validate in Google's Rich Results Test.
- `sitemap.xml` returns 200 with correct URLs.
- `robots.txt` allows crawl on production and blocks on preview.
- Lighthouse SEO score = 100 on preview + production.
- All images have meaningful `alt` text.

## Blockers

- **Production domain** — currently unknown. Placeholder used: `guinchoadventours.pt`. Confirm with Arlindo (Phase 12).
- **Latitude/longitude** for the Areia office (LocalBusiness `geo`).
- **Google Business Profile URL** — needed for `sameAs` link.
- **Social profile URLs** — Instagram, Facebook, GetYourGuide, TripAdvisor (Phase 12).
- **Real reviews** with count + average rating — to power `AggregateRating`.
