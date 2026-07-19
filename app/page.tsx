import { experiences } from "@/data/experiences";
import { pricingTiers } from "@/data/pricing";
import { faq } from "@/data/faq";
import { photos } from "@/data/photos";
import { MobileMenu } from "@/app/components/mobile-menu";
import { LanguageSwitcher } from "@/app/components/language-switcher";
import { PhotoSlot } from "@/app/components/photo-slot";
import { PromoRibbon } from "@/app/components/promo-ribbon";
import { PromoCallout } from "@/app/components/promo-callout";
import { PromoBadge } from "@/app/components/promo-badge";
import { site, siteUrl } from "@/app/lib/site";
import { mailtoBooking } from "@/app/lib/mailto";
import { legal } from "@/app/lib/legal";
import { primaryNav } from "@/app/lib/nav";
import { reviews } from "@/data/reviews";

function PhoneIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.33 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function PinIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function ArrowUpRight({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M7 17L17 7" />
      <path d="M8 7h9v9" />
    </svg>
  );
}

function Stars() {
  return (
    <div className="flex items-center gap-0.5 text-accent">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-4 h-4"
          aria-hidden="true"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

const LOGO = photos.logo.src;

const stats = [
  { value: "18", label: "Years on the trails" },
  { value: "100,000+", label: "Kilometres ridden" },
  { value: "~50,000", label: "Happy adventurers" },
  { value: "6", label: "Ways to explore" },
];

const highlights = [
  {
    title: "Half-day of trails",
    desc: "Three full hours of trails, stops and scenery — never rushed.",
  },
  {
    title: "Local expert guides",
    desc: "We've ridden these trails for 18 years and know every turn.",
  },
  {
    title: "All levels welcome",
    desc: "Full briefing and gear so beginners ride with confidence.",
  },
  {
    title: "Ends at our Guincho office",
    desc: "The route finishes back at base in Areia, Cascais.",
  },
];


function jsonLd() {
  const businessId = `${site.url}#business`;
  const address = {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    addressLocality: site.address.locality,
    postalCode: site.address.postalCode,
    addressRegion: site.address.region,
    addressCountry: site.address.country,
  };

  const localBusiness = {
    "@type": ["LocalBusiness", "TouristAttraction"],
    "@id": businessId,
    name: site.name,
    url: site.url,
    description: site.description,
    image: siteUrl("/opengraph-image.png"),
    telephone: site.phones.mobile,
    email: site.emails.booking,
    address,
    geo: {
      "@type": "GeoCoordinates",
      latitude: site.geo.lat,
      longitude: site.geo.lng,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "09:00",
        closes: "18:30",
      },
    ],
    priceRange: "€€",
    sameAs: Object.values(site.socials).filter(Boolean),
  };

  const offerCatalog = {
    "@type": "OfferCatalog",
    name: "Quad tour durations",
    itemListElement: pricingTiers.map((tier) => ({
      "@type": "Offer",
      name: `${tier.duration} quad tour`,
      description: tier.scenery,
      priceCurrency: "EUR",
      price:
        tier.priceLabel.startsWith("€")
          ? tier.priceLabel.replace(/[^0-9.]/g, "")
          : undefined,
      priceSpecification:
        tier.priceLabel.startsWith("€")
          ? {
              "@type": "PriceSpecification",
              priceCurrency: "EUR",
              price: tier.priceLabel.replace(/[^0-9.]/g, ""),
            }
          : undefined,
      availability: "https://schema.org/InStock",
      itemOffered: {
        "@type": "Service",
        name: `${tier.duration} guided quad tour`,
        provider: { "@id": businessId },
      },
    })),
  };

  const reviewGraph = reviews.map((r) => ({
    "@type": "Review",
    itemReviewed: { "@id": businessId },
    reviewBody: r.body,
    reviewRating: {
      "@type": "Rating",
      ratingValue: 5,
      bestRating: 5,
    },
    author: { "@type": "Person", name: r.name },
  }));

  const faqPage = {
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  const website = {
    "@type": "WebSite",
    "@id": `${site.url}#website`,
    url: site.url,
    name: site.name,
    inLanguage: "en",
    publisher: { "@id": businessId },
  };

  return {
    "@context": "https://schema.org",
    "@graph": [localBusiness, offerCatalog, ...reviewGraph, faqPage, website],
  };
}

export default function Home() {
  return (
    <main className="text-foreground">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd()) }}
      />
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/40 backdrop-blur-md border-b border-white/5">
        <div className="container-wrap flex items-center justify-between h-16">
          <a href="#top" className="flex items-center gap-2 shrink-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={LOGO}
              alt="Guincho Adventours"
              className="h-10 w-auto"
            />
          </a>
          <nav className="hidden lg:flex items-center gap-5 xl:gap-6 text-sm text-foreground/70 font-medium">
            {primaryNav.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-foreground transition whitespace-nowrap"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="hidden lg:flex items-center gap-3 xl:gap-4">
            <a
              href="tel:+351934479075"
              data-track="phone_click"
              data-track-params='{"source":"header"}'
              aria-label="Call +351 934 479 075"
              className="inline-flex items-center gap-2 text-sm font-semibold text-foreground hover:text-accent transition whitespace-nowrap"
            >
              <PhoneIcon className="w-4 h-4 text-accent" />
              <span className="hidden xl:inline">+351 934 479 075</span>
            </a>
            <LanguageSwitcher current="en" />
            <a
              href={mailtoBooking("Booking enquiry")}
              data-track="book_click"
              data-track-params='{"source":"header"}'
              className="btn btn-primary"
            >
              BOOK A TOUR
            </a>
          </div>
          <div className="lg:hidden flex items-center gap-1">
            <LanguageSwitcher current="en" />
            <MobileMenu
              links={primaryNav}
              phone="+351 934 479 075"
              bookHref={mailtoBooking("Booking enquiry")}
            />
          </div>
        </div>
      </header>

      <PromoRibbon />

      {/* Hero */}
      <section id="top" className="relative min-h-[80vh] md:min-h-[100vh] flex items-end pt-16">
        <div className="absolute inset-0">
          <picture>
            <source
              media="(max-width: 639px)"
              srcSet="/photos/hero-mobile.jpg"
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={photos.hero.src}
              alt={photos.hero.alt}
              className="absolute inset-0 h-full w-full object-cover"
            />
          </picture>
        </div>
        <div className="absolute inset-0 overlay-dark" />
        {/* Extra mobile-only tint — the portrait crop is bright, this darkens for text legibility. */}
        <div className="absolute inset-0 bg-black/30 sm:hidden pointer-events-none" />
        <div className="container-wrap relative z-10 pb-10 md:pb-28 w-full">
          <div className="max-w-4xl md:ml-auto md:text-right">
            <span className="eyebrow md:justify-end">
              <PinIcon className="w-4 h-4" />
              AREIA · GUINCHO · CASCAIS
            </span>
            <h1 className="font-heading uppercase text-5xl sm:text-7xl md:text-8xl lg:text-9xl mt-5 leading-[0.95]">
              RIDE THE WILD
              <br />
              <span className="text-accent">ATLANTIC COAST</span>
            </h1>
            <p className="mt-6 max-w-xl md:ml-auto text-base md:text-lg text-foreground/80 leading-relaxed">
              Quad bikes, buggies and guided trails along the cliffs of
              Guincho, Cascais — minutes from Sintra and Lisbon. Real off-road
              adventure, run by locals who know every dune.
            </p>
            <div className="mt-8 flex flex-wrap gap-3 md:justify-end">
              <a
                href={mailtoBooking("Booking enquiry")}
                data-track="book_click"
                data-track-params='{"source":"hero"}'
                className="btn btn-primary"
              >
                BOOK A TOUR
              </a>
              <a
                href="#experiences"
                data-track="explore_click"
                className="btn btn-secondary"
              >
                Explore experiences
              </a>
            </div>
            <div className="mt-8 flex items-center gap-3 text-sm text-foreground/70 md:justify-end">
              <Stars />
              <span>Loved by ~50,000 adventurers over 18 years</span>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-accent text-accent-foreground">
        <div className="container-wrap grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-8 md:gap-10 py-10 md:py-20">
          {stats.map((s) => (
            <div key={s.label} className="text-left">
              <div className="font-heading uppercase text-4xl sm:text-5xl md:text-6xl leading-none">
                {s.value}
              </div>
              <div className="mt-2 md:mt-3 text-[11px] md:text-sm uppercase tracking-wider md:tracking-widest font-semibold leading-tight">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Experiences */}
      <section id="experiences" className="py-24 md:py-32">
        <div className="container-wrap">
          <div className="max-w-3xl">
            <span className="eyebrow">EXPERIENCES</span>
            <h2 className="font-heading uppercase text-5xl md:text-7xl mt-4 leading-[0.95]">
              SIX WAYS TO <span className="text-accent">EXPLORE</span>
            </h2>
            <p className="mt-6 text-foreground/70 leading-relaxed max-w-xl">
              From adrenaline on the dunes to a calm paddle along the coast —
              pick your adventure and we&apos;ll handle the rest.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {experiences.map((e) => {
              const slot = photos.experience[e.slug];
              const hasReal = slot && !slot.placeholder && slot.src;
              return (
                <a
                  key={e.title}
                  href={`/tours/${e.slug}`}
                  data-track="experience_click"
                  data-track-params={`{"slug":"${e.slug}"}`}
                  className="group relative block overflow-hidden rounded-2xl aspect-[4/5] isolate"
                >
                  <div className="absolute inset-0">
                    <PhotoSlot
                      photo={slot}
                      variant="card"
                      slotLabel={e.title}
                      className="w-full h-full"
                      imgClassName="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                  </div>
                  {hasReal && (
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                  )}
                  <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-accent text-accent-foreground flex items-center justify-center transition group-hover:-translate-y-1 group-hover:translate-x-1">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                  {hasReal && (
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="font-heading uppercase text-3xl leading-none">
                        {e.title}
                      </h3>
                      <p className="mt-3 text-sm text-white/80 leading-relaxed">
                        {e.desc}
                      </p>
                    </div>
                  )}
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Signature Tour */}
      <section
        id="signature"
        className="relative py-24 md:py-32 border-t border-border overflow-hidden"
      >
        <PhotoSlot
          photo={photos.signature}
          variant="background"
          imgClassName="absolute inset-0 h-full w-full object-cover opacity-40"
        />
        <div className="absolute inset-0 overlay-side" />
        <div className="container-wrap relative">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-6">
              <span className="eyebrow">OUR SIGNATURE TOUR</span>
              <h2 className="font-heading uppercase text-5xl md:text-7xl mt-4 leading-[0.95]">
                THE 3-HOUR <span className="text-accent">GUIDED RIDE</span>
              </h2>
              <p className="mt-6 text-foreground/80 leading-relaxed max-w-lg">
                The full Guincho Adventours experience: a guided expedition
                across coastal trails, dunes and viewpoints, finishing back at
                our office in Areia. Just show up — we bring the machines, the
                gear and the route.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={mailtoBooking("3-hour guided ride")}
                  data-track="book_click"
                  data-track-params='{"source":"signature"}'
                  className="btn btn-primary"
                >
                  BOOK THE 3-HOUR TOUR
                </a>
                <a href="#prices" className="btn btn-secondary">
                  See all durations
                </a>
              </div>
              <div className="mt-10 inline-flex items-baseline gap-3">
                <span className="font-heading text-7xl md:text-8xl">3</span>
                <span className="text-foreground/70">Hours</span>
              </div>
            </div>
            <div className="lg:col-span-6 grid sm:grid-cols-2 gap-4">
              {highlights.map((h) => (
                <div
                  key={h.title}
                  className="rounded-xl border border-border bg-background/70 backdrop-blur p-6"
                >
                  <h3 className="font-heading text-xl">{h.title}</h3>
                  <p className="mt-2 text-sm text-foreground/70 leading-relaxed">
                    {h.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <PromoCallout placement="signature-callout" className="mt-16 md:mt-20" />

          {/* Prefer shorter? — bridge to Prices */}
          <div className="relative mt-16 md:mt-20 rounded-2xl border border-border bg-background/70 backdrop-blur p-6 md:p-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div>
                <div className="eyebrow">Also available</div>
                <p className="mt-2 text-foreground/85 text-lg leading-snug">
                  Prefer something shorter? We also run{" "}
                  <span className="text-accent font-semibold">
                    1 h, 1 h 30 and 2 h
                  </span>{" "}
                  quad tours — with the 1 h 30 adding a Praia do Abano photo stop.
                </p>
              </div>
              <a
                href="#prices"
                className="btn btn-secondary shrink-0 self-start md:self-auto"
              >
                See prices
              </a>
            </div>

            <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3">
              {pricingTiers.map((tier) => (
                <a
                  key={tier.slug}
                  href="#prices"
                  className={
                    "group flex flex-col justify-between rounded-xl border p-4 transition " +
                    (tier.highlight
                      ? "border-accent/60 bg-accent/5 hover:bg-accent/10"
                      : "border-border bg-card hover:border-white/30")
                  }
                >
                  <div className="text-[10px] uppercase tracking-widest text-foreground/50 font-semibold">
                    {tier.duration}
                  </div>
                  <div className="mt-3 font-heading text-3xl leading-none">
                    {tier.priceLabel}
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Prices */}
      <section id="prices" className="py-24 md:py-32 border-t border-border">
        <div className="container-wrap">
          <div className="max-w-3xl">
            <span className="eyebrow">PRICES</span>
            <h2 className="font-heading uppercase text-5xl md:text-7xl mt-4 leading-[0.95]">
              QUAD TOURS <span className="text-accent">FROM €60</span>
            </h2>
            <p className="mt-6 text-foreground/70 leading-relaxed max-w-xl">
              Four durations, one Atlantic coast. Prices are per participant and
              include all gear and the pre-ride briefing. Prices do not include
              VAT.
            </p>
          </div>

          <PromoCallout placement="prices-callout" className="mt-10" />

          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {pricingTiers.map((tier) => (
              <article
                key={tier.slug}
                className={
                  "relative flex flex-col rounded-2xl border p-6 md:p-7 " +
                  (tier.highlight
                    ? "border-accent bg-accent/5"
                    : "border-border bg-card")
                }
              >
                {tier.highlight && (
                  <div className="absolute -top-3 left-6 bg-accent text-accent-foreground text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full">
                    Signature
                  </div>
                )}
                {tier.perkBadge && (
                  <div className="absolute -top-3 right-6 bg-accent text-accent-foreground text-[11px] font-bold tracking-wide uppercase px-3 py-1 rounded-full whitespace-nowrap">
                    {tier.perkBadge}
                  </div>
                )}
                <div className="text-xs uppercase tracking-widest text-foreground/50 font-semibold">
                  {tier.duration}
                </div>
                <div className="mt-3 font-heading text-5xl md:text-6xl leading-none">
                  {tier.priceLabel}
                </div>
                <div className="mt-1 text-xs text-foreground/50">per participant</div>

                <p className="mt-6 text-sm text-foreground/80 leading-relaxed">
                  {tier.scenery}
                </p>

                <div className="mt-4 text-xs text-foreground/60 leading-relaxed">
                  <div className="flex items-start gap-2">
                    <span className="text-accent mt-[2px]">•</span>
                    <span>{tier.groupRule}</span>
                  </div>
                  {tier.weightRule && (
                    <div className="flex items-start gap-2 mt-1">
                      <span className="text-accent mt-[2px]">•</span>
                      <span>{tier.weightRule}</span>
                    </div>
                  )}
                </div>

                <a
                  href={mailtoBooking(`${tier.duration} quad tour`)}
                  data-track="pricing_tier_click"
                  data-track-params={`{"tier":"${tier.slug}"}`}
                  className={
                    "btn mt-6 " +
                    (tier.highlight ? "btn-primary" : "btn-secondary")
                  }
                >
                  BOOK THIS TOUR
                </a>
              </article>
            ))}
          </div>

          <p className="mt-6 text-xs text-foreground/50">
            Prefer to ride as a passenger? Passenger mode is available on
            request for the longer tours — just mention it when you enquire.
          </p>
        </div>
      </section>

      {/* Sightseeing (Jeep) */}
      <section
        id="sightseeing"
        className="relative py-24 md:py-32 border-t border-border overflow-hidden"
      >
        <PhotoSlot
          photo={photos.sightseeing}
          variant="background"
          imgClassName="absolute inset-0 h-full w-full object-cover opacity-30"
        />
        <div className="absolute inset-0 overlay-side" />
        <div className="container-wrap relative">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-6">
              <div className="flex items-center gap-3 flex-wrap">
                <span className="eyebrow">SIGHTSEEING TOUR</span>
                <PromoBadge placement="sightseeing-badge" />
              </div>
              <h2 className="font-heading uppercase text-5xl md:text-7xl mt-4 leading-[0.95]">
                SINTRA, CABO DA ROCA{" "}
                <span className="text-accent">&amp; WINE CELLARS</span>
              </h2>
              <p className="mt-6 text-foreground/80 leading-relaxed max-w-lg">
                A calmer, cultural day out. Land Rovers, expert local drivers,
                UNESCO sites and an optional wine tasting at a working cellar.
                Ideal for groups of 20 to 50 people — corporate days, family
                visits, less-active guests.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={mailtoBooking("Jeep Sintra tour")}
                  data-track="book_click"
                  data-track-params='{"source":"jeep"}'
                  className="btn btn-primary"
                >
                  ENQUIRE ABOUT THE JEEP TOUR
                </a>
              </div>
            </div>

            <div className="lg:col-span-6 grid sm:grid-cols-2 gap-4">
              {[
                {
                  title: "Hotel pick-up",
                  desc: "We collect you at your hotel or a meeting point that works for the group.",
                },
                {
                  title: "Sintra town",
                  desc: "The UNESCO heritage centre — palaces, misty hills, the whole postcard.",
                },
                {
                  title: "Cabo da Roca",
                  desc: "Mainland Europe's westernmost cliffs. Photo stops and short walks.",
                },
                {
                  title: "Wine cellar",
                  desc: "A working cellar visit. Add a full tasting with cheese and bread if you'd like.",
                },
                {
                  title: "No driving",
                  desc: "You get driven the whole way — alcohol welcome, unlike the quads.",
                },
                {
                  title: "Big groups",
                  desc: "Comfortably from 20 to 50 people. Perfect for corporate off-sites.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl border border-border bg-background/70 backdrop-blur p-6"
                >
                  <h3 className="font-heading text-xl">{item.title}</h3>
                  <p className="mt-2 text-sm text-foreground/70 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Groups — stag + corporate */}
      <section id="groups" className="py-24 md:py-32 border-t border-border">
        <div className="container-wrap">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 flex-wrap">
              <span className="eyebrow">GROUPS</span>
              <PromoBadge placement="groups-badge" />
            </div>
            <h2 className="font-heading uppercase text-5xl md:text-7xl mt-4 leading-[0.95]">
              STAG PARTIES <span className="text-accent">&amp; CORPORATE DAYS</span>
            </h2>
            <p className="mt-6 text-foreground/70 leading-relaxed max-w-xl">
              Two of our biggest audiences. We run the whole day — briefing,
              gear, guides, logistics — so the group can just show up and ride.
            </p>
          </div>

          <div className="mt-14 grid md:grid-cols-2 gap-6">
            <article className="rounded-2xl border border-border bg-card p-8 flex flex-col">
              <div className="eyebrow">Stag &amp; bachelor parties</div>
              <h3 className="font-heading uppercase text-3xl md:text-4xl mt-3 leading-tight">
                Big group. Big adventure.
              </h3>
              <p className="mt-4 text-foreground/75 leading-relaxed">
                Weekends, birthdays, groups of mates from 20 to a few dozen.
                Quads or buggies on the coastal trails — tell us the date and
                the size, we&apos;ll plan the day around it.
              </p>
              <ul className="mt-6 space-y-2 text-sm text-foreground/70">
                <li className="flex gap-2">
                  <span className="text-accent">•</span>
                  Fast, adrenaline-heavy quad tours (1 h or 1 h 30 for bigger groups).
                </li>
                <li className="flex gap-2">
                  <span className="text-accent">•</span>
                  Full gear, briefing and guides included.
                </li>
                <li className="flex gap-2">
                  <span className="text-accent">•</span>
                  We&apos;ll help slot in food or drinks stops if you want.
                </li>
              </ul>
              <a
                href="/groups/stag-parties"
                data-track="book_click"
                data-track-params='{"source":"stag"}'
                className="btn btn-primary mt-8 self-start"
              >
                PLAN YOUR PARTY
              </a>
            </article>

            <article className="rounded-2xl border border-border bg-card p-8 flex flex-col">
              <div className="eyebrow">Corporate events</div>
              <h3 className="font-heading uppercase text-3xl md:text-4xl mt-3 leading-tight">
                Off-sites, team days, incentive trips.
              </h3>
              <p className="mt-4 text-foreground/75 leading-relaxed">
                From 10 to 50+ people. Everyone on quads, everyone on the Jeep
                sightseeing tour, or a mix — half the group on the coast, half
                in Sintra with wine cellars.
              </p>
              <ul className="mt-6 space-y-2 text-sm text-foreground/70">
                <li className="flex gap-2">
                  <span className="text-accent">•</span>
                  Groups from 10 to 50+ — quads and Land Rovers combined.
                </li>
                <li className="flex gap-2">
                  <span className="text-accent">•</span>
                  Add a wine tasting stop for the sightseeing group.
                </li>
                <li className="flex gap-2">
                  <span className="text-accent">•</span>
                  One invoice, one point of contact, 18 years of doing this.
                </li>
              </ul>
              <a
                href="/groups/corporate"
                data-track="book_click"
                data-track-params='{"source":"corporate"}'
                className="btn btn-primary mt-8 self-start"
              >
                REQUEST A CORPORATE PROPOSAL
              </a>
            </article>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section
        id="reviews"
        className="relative py-24 md:py-32 border-t border-border overflow-hidden"
      >
        <PhotoSlot
          photo={photos.reviews}
          variant="background"
          imgClassName="absolute inset-0 h-full w-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-background/60" />
        <div className="container-wrap relative">
          <div className="max-w-2xl">
            <span className="eyebrow">REVIEWS</span>
            <h2 className="font-heading uppercase text-5xl md:text-7xl mt-4 leading-[0.95]">
              RIDERS <span className="text-accent">LOVE IT</span>
            </h2>
            <p className="mt-5 text-foreground/70 leading-relaxed">
              Eighteen years, tens of thousands of riders, and a trail of five-star
              memories along the Atlantic coast.
            </p>
          </div>

          <div className="mt-14 grid md:grid-cols-2 gap-6">
            {reviews.map((r) => (
              <blockquote
                key={r.name}
                className="rounded-xl border border-border bg-background/70 backdrop-blur p-8"
              >
                <div className="font-heading text-4xl text-foreground/40 leading-none">
                  &ldquo;
                </div>
                <p className="mt-4 text-foreground/85 leading-relaxed">
                  {r.body}
                </p>
                <footer className="mt-6 text-sm">
                  <div className="font-semibold">{r.name}</div>
                  <div className="text-foreground/60">{r.location}</div>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* Owner trust — Meet Arlindo */}
      <section id="owner" className="py-24 md:py-32 border-t border-border">
        <div className="container-wrap">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            <div className="lg:col-span-5">
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-border">
                <PhotoSlot
                  photo={photos.arlindo}
                  variant="portrait"
                  slotLabel="Portrait of Arlindo"
                  className="w-full h-full"
                  imgClassName="absolute inset-0 h-full w-full object-cover"
                />
              </div>
            </div>

            <div className="lg:col-span-7">
              <span className="eyebrow">MEET THE OWNER</span>
              <h2 className="font-heading uppercase text-5xl md:text-7xl mt-4 leading-[0.95]">
                ARLINDO
              </h2>
              <div className="mt-3 text-foreground/60 text-sm uppercase tracking-widest font-semibold">
                Owner &amp; lead guide
              </div>

              <blockquote className="mt-8 text-xl md:text-2xl text-foreground/85 leading-snug max-w-xl">
                <span className="font-heading text-accent text-4xl leading-none align-top mr-1">
                  &ldquo;
                </span>
                Eighteen years on these trails. If you email us, I&apos;m the
                one who writes back — no call centre, no chatbot.
              </blockquote>

              <div className="mt-10 grid grid-cols-3 gap-6 max-w-lg">
                <div>
                  <div className="font-heading text-4xl md:text-5xl leading-none">
                    18
                  </div>
                  <div className="mt-2 text-[11px] uppercase tracking-widest text-foreground/60 leading-tight">
                    Years guiding
                  </div>
                </div>
                <div>
                  <div className="font-heading text-4xl md:text-5xl leading-none">
                    ~50k
                  </div>
                  <div className="mt-2 text-[11px] uppercase tracking-widest text-foreground/60 leading-tight">
                    Riders looked after
                  </div>
                </div>
                <div>
                  <div className="font-heading text-4xl md:text-5xl leading-none">
                    365
                  </div>
                  <div className="mt-2 text-[11px] uppercase tracking-widest text-foreground/60 leading-tight">
                    Days a year, open
                  </div>
                </div>
              </div>

              <a
                href={mailtoBooking("Question for Arlindo")}
                data-track="book_click"
                data-track-params='{"source":"owner"}'
                className="btn btn-secondary mt-10"
              >
                Email Arlindo
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24 md:py-32 border-t border-border">
        <div className="container-wrap">
          <div className="max-w-3xl">
            <span className="eyebrow">FAQ</span>
            <h2 className="font-heading uppercase text-5xl md:text-7xl mt-4 leading-[0.95]">
              THE QUESTIONS <span className="text-accent">WE HEAR MOST</span>
            </h2>
            <p className="mt-6 text-foreground/70 leading-relaxed max-w-xl">
              Answered directly by Arlindo. If it&apos;s not here, email us and
              he&apos;ll write back.
            </p>
          </div>

          <div className="mt-12 max-w-3xl divide-y divide-border border-y border-border">
            {faq.map((item, idx) => (
              <details
                key={item.q}
                className="group py-5"
                {...(idx === 0 ? { open: true } : {})}
              >
                <summary className="flex items-start justify-between gap-6 list-none cursor-pointer">
                  <span className="font-heading uppercase text-lg md:text-xl leading-snug">
                    {item.q}
                  </span>
                  <span
                    aria-hidden="true"
                    className="mt-1 shrink-0 w-6 h-6 rounded-full border border-border flex items-center justify-center text-foreground/60 transition group-open:rotate-45 group-open:border-accent group-open:text-accent"
                  >
                    +
                  </span>
                </summary>
                <div className="mt-3 text-foreground/75 leading-relaxed">
                  {item.a}
                </div>
              </details>
            ))}
          </div>

          <p className="mt-8 text-sm text-foreground/50 max-w-3xl">
            Something we didn&apos;t answer? Email us — we reply the same day.
          </p>
        </div>
      </section>

      {/* Booking / Contact */}
      <section id="contact" className="py-24 md:py-32 border-t border-border">
        <div className="container-wrap grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <span className="eyebrow">CONTACT</span>
            <h2 className="font-heading uppercase text-5xl md:text-7xl mt-4 leading-[0.95]">
              BOOK YOUR <span className="text-accent">RIDE</span>
            </h2>
            <p className="mt-5 text-foreground/70 leading-relaxed">
              Tell us what you&apos;d like to ride and when. We&apos;ll confirm
              availability and get you out on the trails.
            </p>

            <dl className="mt-10 space-y-6 text-sm">
              <div>
                <dt className="text-foreground/50 uppercase tracking-widest text-xs">
                  Call us
                </dt>
                <dd className="mt-2 space-y-1">
                  <a
                    className="block hover:underline"
                    href="tel:+351934479075"
                    data-track="phone_click"
                    data-track-params='{"source":"contact"}'
                  >
                    +351 934 479 075
                  </a>
                  <a
                    className="block hover:underline"
                    href="tel:+351214869700"
                    data-track="phone_click"
                    data-track-params='{"source":"contact"}'
                  >
                    +351 214 869 700
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-foreground/50 uppercase tracking-widest text-xs">
                  Visit
                </dt>
                <dd className="mt-2 text-foreground/85">
                  Rua da Areia n.º 1306,
                  <br />
                  Areia, 2750-095 Cascais
                </dd>
              </div>
              <div>
                <dt className="text-foreground/50 uppercase tracking-widest text-xs">
                  Hours
                </dt>
                <dd className="mt-2 text-foreground/85">
                  Mon–Sun · 09:00–18:30
                </dd>
              </div>
            </dl>
          </div>

          <div className="lg:col-span-7 rounded-xl border border-border bg-card p-8 md:p-14 flex flex-col items-start justify-center">
            <p className="text-foreground/85 text-lg md:text-xl leading-relaxed max-w-lg">
              Tap the button and your email app opens with a ready-to-fill
              booking template — date, group size, questions. Arlindo replies
              the same day.
            </p>
            <a
              href={mailtoBooking("Booking enquiry")}
              data-track="book_click"
              data-track-params='{"source":"contact_section"}'
              className="btn btn-primary mt-10"
            >
              REQUEST BOOKING
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-14">
        <div className="container-wrap grid md:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={LOGO} alt="Guincho Adventours" className="h-10 w-auto" />
            </div>
            <p className="mt-6 text-sm text-foreground/60 max-w-sm leading-relaxed">
              Adventure tours along the wild Atlantic coast of Areia, Guincho —
              Cascais, Portugal. Minutes from Sintra and Lisbon.
            </p>
          </div>

          <div>
            <div className="eyebrow mb-4">Explore</div>
            <ul className="space-y-2 text-sm">
              <li><a className="hover:underline" href="/tours">Tours</a></li>
              <li><a className="hover:underline" href="/groups/stag-parties">Stag parties</a></li>
              <li><a className="hover:underline" href="/groups/corporate">Corporate events</a></li>
              <li><a className="hover:underline" href="/gift-a-tour">Gift a tour</a></li>
              <li><a className="hover:underline" href="#faq">FAQ</a></li>
              <li><a className="hover:underline" href="#contact">Book a tour</a></li>
            </ul>
          </div>

          <div>
            <div className="eyebrow mb-4">Contact</div>
            <ul className="space-y-2 text-sm text-foreground/80">
              <li><a className="hover:underline" href="tel:+351934479075" data-track="phone_click" data-track-params='{"source":"footer"}'>+351 934 479 075</a></li>
              <li><a className="hover:underline" href="tel:+351214869700" data-track="phone_click" data-track-params='{"source":"footer"}'>+351 214 869 700</a></li>
              <li>Rua da Areia n.º 1306, Areia, 2750-095 Cascais</li>
              <li>Mon–Sun · 09:00–18:30</li>
            </ul>
          </div>
        </div>

        <div className="container-wrap mt-12 border-t border-border pt-6 flex flex-col md:flex-row md:items-center md:justify-between gap-3 text-xs text-foreground/50">
          <div>© 2026 Guincho Adventours. All rights reserved.</div>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
            <a className="hover:text-foreground" href="/terms">Terms</a>
            <a className="hover:text-foreground" href="/privacy">Privacy</a>
            <span className="text-foreground/40">RNAAT {legal.rnaat}</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
