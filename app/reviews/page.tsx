import type { Metadata } from "next";
import Link from "next/link";
import { reviews, aggregateRatings } from "@/data/reviews";
import { site, siteUrl } from "@/app/lib/site";
import { SiteHeader } from "@/app/components/site-header";

const url = siteUrl("/reviews");

export const metadata: Metadata = {
  title: "Reviews & Testimonials",
  description:
    "What real guests say about their tours with Guincho Adventours. Direct links to our TripAdvisor and Google Business Profile for verified reviews.",
  alternates: { canonical: url },
  keywords: [
    "guincho adventours reviews",
    "guincho tours tripadvisor",
    "quad tour Cascais review",
    "sintra jeep tour review",
  ],
  openGraph: {
    title: "Reviews — Guincho Adventours",
    description:
      "Real guest reviews for our quad, buggy, kayak, Sintra Jeep, mountain-bike and hiking tours in Cascais.",
    url,
  },
};

function reviewsJsonLd() {
  const enabledAgg = aggregateRatings.filter(
    (a) => a.enabled && a.value && a.count
  );
  const graph: unknown[] = [
    ...reviews.map((r) => ({
      "@type": "Review",
      itemReviewed: { "@id": `${site.url}#business` },
      reviewBody: r.body,
      reviewRating: {
        "@type": "Rating",
        ratingValue: r.rating ?? 5,
        bestRating: 5,
      },
      author: { "@type": "Person", name: r.name },
      ...(r.date ? { datePublished: r.date } : {}),
    })),
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: site.url },
        { "@type": "ListItem", position: 2, name: "Reviews", item: url },
      ],
    },
  ];
  if (enabledAgg.length > 0) {
    const primary = enabledAgg[0];
    graph.push({
      "@type": "AggregateRating",
      itemReviewed: { "@id": `${site.url}#business` },
      ratingValue: primary.value,
      reviewCount: primary.count,
      bestRating: 5,
    });
  }
  return { "@context": "https://schema.org", "@graph": graph };
}

export default function ReviewsPage() {
  const enabledAgg = aggregateRatings.filter((a) => a.enabled);

  return (
    <main className="text-foreground">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewsJsonLd()) }}
      />

      <SiteHeader />

      <section className="pt-32 pb-16 border-b border-border">
        <div className="container-wrap max-w-3xl">
          <nav
            aria-label="Breadcrumb"
            className="text-xs text-foreground/60 tracking-widest uppercase mb-4"
          >
            <Link href="/" className="hover:text-foreground">Home</Link>
            <span className="mx-2 text-foreground/30">/</span>
            <span className="text-foreground/80">Reviews</span>
          </nav>
          <span className="eyebrow">REVIEWS</span>
          <h1 className="font-heading uppercase text-5xl md:text-7xl mt-4 leading-[0.95]">
            RIDERS <span className="text-accent">LOVE IT</span>
          </h1>
          <p className="mt-6 text-foreground/70 leading-relaxed">
            Eighteen years, tens of thousands of riders, and a trail of
            five-star memories along the Atlantic coast. Here are guest
            testimonials, and links out to the real reviews on TripAdvisor
            and Google — the ones we couldn&apos;t manipulate if we tried.
          </p>
        </div>
      </section>

      {/* Aggregate ratings — real numbers from 3rd parties. */}
      <section className="py-16 md:py-20 border-b border-border">
        <div className="container-wrap">
          <span className="eyebrow">Where the real reviews live</span>
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {aggregateRatings.map((agg) => (
              <div
                key={agg.id}
                className="rounded-2xl border border-border bg-card p-6 flex flex-col"
              >
                <div className="text-xs uppercase tracking-widest text-foreground/50 font-semibold">
                  {agg.label}
                </div>
                {agg.enabled && agg.value && agg.count ? (
                  <>
                    <div className="mt-3 font-heading text-5xl leading-none">
                      {agg.value}
                      <span className="text-2xl text-foreground/50">/5</span>
                    </div>
                    <div className="mt-1 text-sm text-foreground/60">
                      {agg.count.toLocaleString()} verified reviews
                    </div>
                  </>
                ) : (
                  <>
                    <div className="mt-3 font-heading text-4xl leading-tight text-foreground/50">
                      Rating pending
                    </div>
                    <div className="mt-1 text-xs text-foreground/50">
                      [TODO: confirm real numbers with Arlindo]
                    </div>
                  </>
                )}
                <a
                  href={agg.url ?? "#"}
                  target={agg.url ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="btn btn-secondary mt-6 self-start"
                  aria-disabled={!agg.url}
                >
                  {agg.url ? `Read on ${agg.label} →` : "Link pending"}
                </a>
              </div>
            ))}
          </div>
          {enabledAgg.length === 0 && (
            <p className="mt-6 text-xs text-foreground/50 max-w-2xl">
              We&apos;re verifying the profile URLs so the numbers you see
              here match exactly what the third-party sites report. Until
              then, ask us for direct links to the reviews and we&apos;ll
              send them by email.
            </p>
          )}
        </div>
      </section>

      {/* Individual testimonials */}
      <section className="py-16 md:py-20">
        <div className="container-wrap">
          <span className="eyebrow">Guest testimonials</span>
          <div className="mt-8 grid md:grid-cols-2 gap-6">
            {reviews.map((r, i) => (
              <blockquote
                key={`${r.name}-${i}`}
                className="rounded-2xl border border-border bg-card p-8"
              >
                <div className="font-heading text-4xl text-foreground/40 leading-none">
                  &ldquo;
                </div>
                <p className="mt-4 text-foreground/85 leading-relaxed">
                  {r.body}
                </p>
                <footer className="mt-6 flex items-center justify-between flex-wrap gap-3 text-sm">
                  <div>
                    <div className="font-semibold">{r.name}</div>
                    {r.location && (
                      <div className="text-foreground/60">{r.location}</div>
                    )}
                  </div>
                  {r.source && (
                    <span className="inline-flex items-center rounded-full bg-accent/10 text-accent text-[10px] font-bold uppercase tracking-widest px-3 py-1">
                      {r.source}
                    </span>
                  )}
                </footer>
              </blockquote>
            ))}
          </div>

          {reviews.length < 6 && (
            <p className="mt-8 text-sm text-foreground/60 max-w-2xl">
              We&apos;re adding more testimonials as guests come back with
              them. The full set of reviews — sorted by date, activity, and
              nationality — is on the third-party sites above.
            </p>
          )}
        </div>
      </section>

      {/* Book CTA */}
      <section className="py-16 md:py-20 border-t border-border">
        <div className="container-wrap max-w-3xl text-center">
          <span className="eyebrow">Ready to be next?</span>
          <h2 className="font-heading uppercase text-4xl md:text-5xl mt-4 leading-tight">
            Pick a tour, we&apos;ll take it from there
          </h2>
          <div className="mt-8 flex flex-wrap gap-3 justify-center">
            <Link href="/tours" className="btn btn-primary">
              SEE ALL TOURS
            </Link>
            <Link href="/#contact" className="btn btn-secondary">
              Contact us
            </Link>
          </div>
        </div>
      </section>

      <footer className="border-t border-border py-10">
        <div className="container-wrap text-xs text-foreground/50 flex flex-wrap gap-x-4 gap-y-2">
          <Link href="/" className="hover:text-foreground">Home</Link>
          <Link href="/tours" className="hover:text-foreground">All tours</Link>
          <Link href="/terms" className="hover:text-foreground">Terms</Link>
          <Link href="/privacy" className="hover:text-foreground">Privacy</Link>
          <span className="ml-auto">© 2026 {site.name}</span>
        </div>
      </footer>
    </main>
  );
}
