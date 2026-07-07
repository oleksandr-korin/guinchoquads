import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { tours, tourSlugs, MEETING } from "@/data/tours";
import { photos } from "@/data/photos";
import { site, siteUrl } from "@/app/lib/site";
import { mailtoBooking } from "@/app/lib/mailto";
import { SiteHeader } from "@/app/components/site-header";
import { PhotoSlot } from "@/app/components/photo-slot";

export function generateStaticParams() {
  return tourSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const tour = tours[slug];
  if (!tour) return {};
  const url = siteUrl(`/tours/${slug}`);
  return {
    title: tour.metaTitle,
    description: tour.metaDescription,
    keywords: tour.keywords,
    alternates: { canonical: url },
    openGraph: {
      title: tour.metaTitle,
      description: tour.metaDescription,
      url,
      type: "website",
    },
  };
}

function tourJsonLd(slug: string) {
  const tour = tours[slug];
  if (!tour) return null;
  const url = siteUrl(`/tours/${slug}`);
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "TouristTrip",
        "@id": `${url}#trip`,
        name: tour.metaTitle,
        description: tour.metaDescription,
        provider: { "@id": `${site.url}#business` },
        touristType: ["Adventure travellers", "Family groups", "First-time riders"],
        offers: tour.variants.map((v) => ({
          "@type": "Offer",
          name: `${tour.title} — ${v.name}`,
          description: v.description ?? tour.intro,
          priceCurrency: "EUR",
          price: v.price.replace(/[^0-9.]/g, "") || undefined,
          availability: "https://schema.org/InStock",
          itemOffered: {
            "@type": "Service",
            name: `${tour.title} — ${v.name}`,
            provider: { "@id": `${site.url}#business` },
          },
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: site.url,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Tours",
            item: siteUrl("/tours"),
          },
          {
            "@type": "ListItem",
            position: 3,
            name: tour.title,
            item: url,
          },
        ],
      },
    ],
  };
}

export default async function TourDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const tour = tours[slug];
  if (!tour) notFound();

  const photo = photos.experience[tour.photoKey] ?? photos.hero;
  const bookHref = mailtoBooking(tour.title);

  return (
    <main className="text-foreground">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(tourJsonLd(slug)),
        }}
      />

      <SiteHeader />

      {/* Hero */}
      <section className="relative min-h-[60vh] md:min-h-[75vh] flex items-end pt-16">
        <div className="absolute inset-0">
          <PhotoSlot
            photo={photo}
            variant="hero"
            slotLabel={tour.title}
            className="w-full h-full"
            imgClassName="absolute inset-0 h-full w-full object-cover"
          />
        </div>
        <div className="absolute inset-0 overlay-dark" />
        <div className="container-wrap relative z-10 pb-10 md:pb-20 w-full">
          <nav
            aria-label="Breadcrumb"
            className="text-xs text-foreground/60 tracking-widest uppercase mb-4"
          >
            <Link href="/" className="hover:text-foreground">Home</Link>
            <span className="mx-2 text-foreground/30">/</span>
            <Link href="/tours" className="hover:text-foreground">Tours</Link>
            <span className="mx-2 text-foreground/30">/</span>
            <span className="text-foreground/80">{tour.title}</span>
          </nav>
          <span className="eyebrow">{tour.eyebrow}</span>
          <h1 className="font-heading uppercase text-5xl sm:text-6xl md:text-7xl mt-4 leading-[0.95]">
            {tour.headline}
          </h1>
          <p className="mt-6 max-w-xl text-base md:text-lg text-foreground/85 leading-relaxed">
            {tour.intro}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={bookHref} className="btn btn-primary" data-track="book_click" data-track-params={`{"source":"tour_${slug}"}`}>
              BOOK THIS TOUR
            </a>
            <a href="#pricing" className="btn btn-secondary">
              See durations
            </a>
          </div>
        </div>
      </section>

      {/* About the tour */}
      <section className="py-20 md:py-24 border-t border-border">
        <div className="container-wrap max-w-3xl">
          <span className="eyebrow">About the tour</span>
          <h2 className="font-heading uppercase text-4xl md:text-5xl mt-4 leading-tight">
            What you&apos;re signing up for
          </h2>
          <div className="mt-8 space-y-6 text-foreground/85 leading-relaxed">
            {tour.description.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing / variants */}
      <section id="pricing" className="py-20 md:py-24 border-t border-border">
        <div className="container-wrap">
          <div className="max-w-3xl">
            <span className="eyebrow">Durations &amp; prices</span>
            <h2 className="font-heading uppercase text-4xl md:text-5xl mt-4 leading-tight">
              Pick your ride
            </h2>
          </div>
          <div
            className={
              "mt-12 grid gap-5 " +
              (tour.variants.length >= 4
                ? "sm:grid-cols-2 lg:grid-cols-4"
                : tour.variants.length === 3
                  ? "sm:grid-cols-3"
                  : "sm:grid-cols-2")
            }
          >
            {tour.variants.map((v) => (
              <article
                key={v.id}
                className="rounded-2xl border border-border bg-card p-6 md:p-7 flex flex-col"
              >
                <div className="text-xs uppercase tracking-widest text-foreground/50 font-semibold">
                  {v.duration}
                </div>
                <div className="mt-3 font-heading text-4xl md:text-5xl leading-none">
                  {v.price}
                </div>
                <div className="mt-1 text-xs text-foreground/50">
                  per participant
                </div>
                <div className="mt-4 font-semibold">{v.name}</div>
                {v.description && (
                  <p className="mt-2 text-sm text-foreground/70 leading-relaxed">
                    {v.description}
                  </p>
                )}
                {v.minGroup && (
                  <p className="mt-3 text-xs text-foreground/60">
                    Minimum group of {v.minGroup} to run.
                  </p>
                )}
                <div className="mt-auto pt-6">
                  <a
                    href={mailtoBooking(`${tour.title} — ${v.name}`)}
                    data-track="book_click"
                    data-track-params={`{"source":"tour_${slug}_${v.id}"}`}
                    className="btn btn-secondary w-full"
                  >
                    Book this tour
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Details grid */}
      <section className="py-20 md:py-24 border-t border-border">
        <div className="container-wrap grid md:grid-cols-3 gap-10">
          <div>
            <span className="eyebrow">What&apos;s included</span>
            <ul className="mt-6 space-y-3 text-foreground/85">
              {tour.included.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <span className="eyebrow">What to bring</span>
            <ul className="mt-6 space-y-3 text-foreground/85">
              {tour.bring.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <span className="eyebrow">Requirements</span>
            <ul className="mt-6 space-y-3 text-foreground/85">
              {tour.requirements.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Meeting + route */}
      <section className="py-20 md:py-24 border-t border-border">
        <div className="container-wrap grid md:grid-cols-2 gap-10">
          <div>
            <span className="eyebrow">Meeting point</span>
            <h3 className="font-heading uppercase text-2xl mt-4 leading-tight">
              We start at the Guincho office
            </h3>
            <p className="mt-4 text-foreground/85 leading-relaxed">{MEETING}</p>
            <p className="mt-4 text-sm text-foreground/70">
              Travelling from Lisbon? Free transfer from Cascais train station —
              just tell us your arrival time.
            </p>
          </div>
          {tour.route && (
            <div>
              <span className="eyebrow">Route</span>
              <h3 className="font-heading uppercase text-2xl mt-4 leading-tight">
                Where the tour goes
              </h3>
              <p className="mt-4 text-foreground/85 leading-relaxed">
                {tour.route}
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Related tours */}
      {tour.related.length > 0 && (
        <section className="py-20 md:py-24 border-t border-border">
          <div className="container-wrap">
            <span className="eyebrow">You might also like</span>
            <div className="mt-8 grid md:grid-cols-3 gap-6">
              {tour.related.map((relSlug) => {
                const rel = tours[relSlug];
                if (!rel) return null;
                const relPhoto = photos.experience[rel.photoKey] ?? photos.hero;
                return (
                  <Link
                    key={relSlug}
                    href={`/tours/${relSlug}`}
                    className="group relative block overflow-hidden rounded-2xl aspect-[4/3] isolate"
                  >
                    <div className="absolute inset-0">
                      <PhotoSlot
                        photo={relPhoto}
                        variant="card"
                        slotLabel={rel.title}
                        className="w-full h-full"
                        imgClassName="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105"
                      />
                    </div>
                    {!relPhoto.placeholder && (
                      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                    )}
                    {!relPhoto.placeholder && (
                      <div className="absolute bottom-0 left-0 right-0 p-5">
                        <h3 className="font-heading uppercase text-2xl leading-none">
                          {rel.title}
                        </h3>
                        <p className="mt-2 text-xs text-white/80">{rel.intro}</p>
                      </div>
                    )}
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Book CTA */}
      <section className="py-20 md:py-24 border-t border-border">
        <div className="container-wrap max-w-3xl text-center">
          <span className="eyebrow">Book by email</span>
          <h2 className="font-heading uppercase text-4xl md:text-5xl mt-4 leading-tight">
            Tell us your date
          </h2>
          <p className="mt-4 text-foreground/70 leading-relaxed">
            Every enquiry lands in Arlindo&apos;s inbox — usually a same-day
            reply.
          </p>
          <a
            href={bookHref}
            data-track="book_click"
            data-track-params={`{"source":"tour_${slug}_footer"}`}
            className="btn btn-primary mt-8"
          >
            EMAIL US TO BOOK
          </a>
          <div className="mt-6 text-sm text-foreground/60">
            or call{" "}
            <a
              className="hover:underline"
              href={`tel:${site.phones.mobile.replace(/\s+/g, "")}`}
            >
              {site.phones.mobile}
            </a>
          </div>
        </div>
      </section>

      {/* Simple footer */}
      <footer className="border-t border-border py-10">
        <div className="container-wrap text-xs text-foreground/50 flex flex-wrap gap-x-4 gap-y-2">
          <Link href="/" className="hover:text-foreground">Home</Link>
          <Link href="/tours" className="hover:text-foreground">All tours</Link>
          <Link href="/terms" className="hover:text-foreground">Terms</Link>
          <Link href="/privacy" className="hover:text-foreground">Privacy</Link>
          <span className="ml-auto">© 2026 Guincho Adventours</span>
        </div>
      </footer>
    </main>
  );
}
