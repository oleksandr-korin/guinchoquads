import Link from "next/link";
import { photos } from "@/data/photos";
import { reviews } from "@/data/reviews";
import { legal } from "@/app/lib/legal";
import { mailtoBooking } from "@/app/lib/mailto";
import { MobileMenu } from "@/app/components/mobile-menu";
import { PhotoSlot } from "@/app/components/photo-slot";
import { PromoRibbon } from "@/app/components/promo-ribbon";
import { PromoCallout } from "@/app/components/promo-callout";
import { PromoBadge } from "@/app/components/promo-badge";
import { LanguageSwitcher } from "@/app/components/language-switcher";
import { localePath, type Locale } from "@/app/lib/i18n";
import type { LocaleStrings } from "@/data/i18n";

type Props = {
  locale: Locale;
  strings: LocaleStrings;
};

// --------------------------------------------------------------------
// Icons (kept inline so translation pages are one component only)
// --------------------------------------------------------------------

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

// --------------------------------------------------------------------
// Full-fidelity localised homepage. Mirrors app/page.tsx section-by-
// section but reads all strings from the locale dictionary. Customer
// review quotes stay in the language they were written in — we don't
// translate testimonials.
// --------------------------------------------------------------------
export function LocalizedHome({ locale, strings }: Props) {
  const s = strings;
  const bookHref = mailtoBooking(`Booking enquiry (${locale.toUpperCase()})`);

  const localizedNav = [
    { href: "/tours", label: s.nav.tours },
    { href: "#prices", label: s.nav.prices },
    { href: "#groups", label: s.nav.groups },
    { href: "/gift-a-tour", label: s.nav.gift },
    { href: "/blog", label: s.nav.fieldNotes },
    { href: "/reviews", label: s.nav.reviews },
    { href: "#faq", label: s.nav.faq },
    { href: "#contact", label: s.nav.contact },
  ];

  return (
    <main className="text-foreground">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/70 backdrop-blur-md border-b border-white/5">
        <div className="container-wrap flex items-center justify-between h-16 gap-4">
          <a href="#top" className="flex items-center gap-2 shrink-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={photos.logo.src} alt={photos.logo.alt} className="h-10 w-auto" />
          </a>
          <nav className="hidden lg:flex items-center gap-5 xl:gap-6 text-sm text-foreground/70 font-medium">
            {localizedNav.map((link) => (
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
            <LanguageSwitcher current={locale} />
            <a
              href={bookHref}
              data-track="book_click"
              data-track-params='{"source":"header"}'
              className="btn btn-primary"
            >
              {s.nav.book}
            </a>
          </div>
          <div className="lg:hidden flex items-center gap-1">
            <LanguageSwitcher current={locale} />
            <MobileMenu
              links={localizedNav}
              phone="+351 934 479 075"
              bookHref={bookHref}
              bookLabel={s.nav.book}
            />
          </div>
        </div>
      </header>

      <PromoRibbon />

      {/* Hero */}
      <section id="top" className="relative min-h-[80vh] md:min-h-[100vh] flex items-end pt-16">
        <div className="absolute inset-0">
          <picture>
            <source media="(max-width: 639px)" srcSet="/photos/hero-mobile.jpg" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={photos.hero.src}
              alt={photos.hero.alt}
              className="absolute inset-0 h-full w-full object-cover"
            />
          </picture>
        </div>
        <div className="absolute inset-0 overlay-dark" />
        <div className="absolute inset-0 bg-black/30 sm:hidden pointer-events-none" />
        <div className="container-wrap relative z-10 pb-10 md:pb-28 w-full">
          <div className="max-w-4xl md:ml-auto md:text-right">
            <span className="eyebrow md:justify-end">
              <PinIcon className="w-4 h-4" />
              {s.hero.location}
            </span>
            <h1 className="font-heading uppercase text-5xl sm:text-7xl md:text-8xl lg:text-9xl mt-5 leading-[0.95]">
              {s.hero.headlineLine1}
              <br />
              <span className="text-accent">{s.hero.headlineLine2}</span>
            </h1>
            <p className="mt-6 max-w-xl md:ml-auto text-base md:text-lg text-foreground/80 leading-relaxed">
              {s.hero.subheadline}
            </p>
            <div className="mt-8 flex flex-wrap gap-3 md:justify-end">
              <a
                href={bookHref}
                data-track="book_click"
                data-track-params='{"source":"hero"}'
                className="btn btn-primary"
              >
                {s.hero.primaryCta}
              </a>
              <a
                href="#experiences"
                data-track="explore_click"
                className="btn btn-secondary"
              >
                {s.hero.secondaryCta}
              </a>
            </div>
            <div className="mt-8 flex items-center gap-3 text-sm text-foreground/70 md:justify-end">
              <Stars />
              <span>{s.hero.starsCaption}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-accent text-accent-foreground">
        <div className="container-wrap grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-8 md:gap-10 py-10 md:py-20">
          {s.stats.map((stat) => (
            <div key={stat.label} className="text-left">
              <div className="font-heading uppercase text-4xl sm:text-5xl md:text-6xl leading-none">
                {stat.value}
              </div>
              <div className="mt-2 md:mt-3 text-[11px] md:text-sm uppercase tracking-wider md:tracking-widest font-semibold leading-tight">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Experiences */}
      <section id="experiences" className="py-24 md:py-32">
        <div className="container-wrap">
          <div className="max-w-3xl">
            <span className="eyebrow">{s.experiencesSection.eyebrow}</span>
            <h2 className="font-heading uppercase text-5xl md:text-7xl mt-4 leading-[0.95]">
              {s.experiencesSection.titleLine1}{" "}
              <span className="text-accent">{s.experiencesSection.titleLine2}</span>
            </h2>
            <p className="mt-6 text-foreground/70 leading-relaxed max-w-xl">
              {s.experiencesSection.intro}
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {s.experiences.map((e) => {
              const slot = photos.experience[e.slug];
              const hasReal = slot && !slot.placeholder && slot.src;
              return (
                <a
                  key={e.slug}
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
              <span className="eyebrow">{s.signature.eyebrow}</span>
              <h2 className="font-heading uppercase text-5xl md:text-7xl mt-4 leading-[0.95]">
                {s.signature.titleLine1}{" "}
                <span className="text-accent">{s.signature.titleLine2}</span>
              </h2>
              <p className="mt-6 text-foreground/80 leading-relaxed max-w-lg">
                {s.signature.body}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={mailtoBooking("3-hour guided ride")}
                  data-track="book_click"
                  data-track-params='{"source":"signature"}'
                  className="btn btn-primary"
                >
                  {s.signature.primaryCta}
                </a>
                <a href="#prices" className="btn btn-secondary">
                  {s.signature.secondaryCta}
                </a>
              </div>
              <div className="mt-10 inline-flex items-baseline gap-3">
                <span className="font-heading text-7xl md:text-8xl">3</span>
                <span className="text-foreground/70">{s.signature.hoursLabel}</span>
              </div>
            </div>
            <div className="lg:col-span-6 grid sm:grid-cols-2 gap-4">
              {s.signature.highlights.map((h) => (
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

          {/* Also-available bridge to Prices */}
          <div className="relative mt-16 md:mt-20 rounded-2xl border border-border bg-background/70 backdrop-blur p-6 md:p-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div>
                <div className="eyebrow">{s.signature.alsoAvailableEyebrow}</div>
                <p className="mt-2 text-foreground/85 text-lg leading-snug">
                  {s.signature.alsoAvailableBody}
                </p>
              </div>
              <a href="#prices" className="btn btn-secondary shrink-0 self-start md:self-auto">
                {s.signature.seePricesCta}
              </a>
            </div>

            <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3">
              {s.prices.tiers.map((tier) => (
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
            <span className="eyebrow">{s.prices.eyebrow}</span>
            <h2 className="font-heading uppercase text-5xl md:text-7xl mt-4 leading-[0.95]">
              {s.prices.titleLine1}{" "}
              <span className="text-accent">{s.prices.titleLine2}</span>
            </h2>
            <p className="mt-6 text-foreground/70 leading-relaxed max-w-xl">
              {s.prices.body}
            </p>
          </div>

          <PromoCallout placement="prices-callout" className="mt-10" />

          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {s.prices.tiers.map((tier) => (
              <article
                key={tier.slug}
                className={
                  "relative flex flex-col rounded-2xl border p-6 md:p-7 " +
                  (tier.highlight ? "border-accent bg-accent/5" : "border-border bg-card")
                }
              >
                {tier.highlight && (
                  <div className="absolute -top-3 left-6 bg-accent text-accent-foreground text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full">
                    {s.prices.signatureBadge}
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
                <div className="mt-1 text-xs text-foreground/50">
                  {s.prices.perParticipant}
                </div>

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
                  className={"btn mt-6 " + (tier.highlight ? "btn-primary" : "btn-secondary")}
                >
                  {s.prices.bookCta}
                </a>
              </article>
            ))}
          </div>

          <p className="mt-6 text-xs text-foreground/50">{s.prices.passengerNote}</p>
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
                <span className="eyebrow">{s.sightseeing.eyebrow}</span>
                <PromoBadge placement="sightseeing-badge" />
              </div>
              <h2 className="font-heading uppercase text-5xl md:text-7xl mt-4 leading-[0.95]">
                {s.sightseeing.titleLine1}{" "}
                <span className="text-accent">{s.sightseeing.titleLine2}</span>
              </h2>
              <p className="mt-6 text-foreground/80 leading-relaxed max-w-lg">
                {s.sightseeing.body}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={mailtoBooking("Jeep Sintra tour")}
                  data-track="book_click"
                  data-track-params='{"source":"jeep"}'
                  className="btn btn-primary"
                >
                  {s.sightseeing.cta}
                </a>
              </div>
            </div>

            <div className="lg:col-span-6 grid sm:grid-cols-2 gap-4">
              {s.sightseeing.highlights.map((item) => (
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

      {/* Groups */}
      <section id="groups" className="py-24 md:py-32 border-t border-border">
        <div className="container-wrap">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 flex-wrap">
              <span className="eyebrow">{s.groups.eyebrow}</span>
              <PromoBadge placement="groups-badge" />
            </div>
            <h2 className="font-heading uppercase text-5xl md:text-7xl mt-4 leading-[0.95]">
              {s.groups.titleLine1}{" "}
              <span className="text-accent">{s.groups.titleLine2}</span>
            </h2>
            <p className="mt-6 text-foreground/70 leading-relaxed max-w-xl">
              {s.groups.body}
            </p>
          </div>

          <div className="mt-14 grid md:grid-cols-2 gap-6">
            <article className="rounded-2xl border border-border bg-card p-8 flex flex-col">
              <div className="eyebrow">{s.groups.stag.eyebrow}</div>
              <h3 className="font-heading uppercase text-3xl md:text-4xl mt-3 leading-tight">
                {s.groups.stag.title}
              </h3>
              <p className="mt-4 text-foreground/75 leading-relaxed">
                {s.groups.stag.body}
              </p>
              <ul className="mt-6 space-y-2 text-sm text-foreground/70">
                {s.groups.stag.points.map((p, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-accent">•</span>
                    {p}
                  </li>
                ))}
              </ul>
              <Link
                href="/groups/stag-parties"
                data-track="book_click"
                data-track-params='{"source":"stag"}'
                className="btn btn-primary mt-8 self-start"
              >
                {s.groups.stag.cta}
              </Link>
            </article>

            <article className="rounded-2xl border border-border bg-card p-8 flex flex-col">
              <div className="eyebrow">{s.groups.corporate.eyebrow}</div>
              <h3 className="font-heading uppercase text-3xl md:text-4xl mt-3 leading-tight">
                {s.groups.corporate.title}
              </h3>
              <p className="mt-4 text-foreground/75 leading-relaxed">
                {s.groups.corporate.body}
              </p>
              <ul className="mt-6 space-y-2 text-sm text-foreground/70">
                {s.groups.corporate.points.map((p, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-accent">•</span>
                    {p}
                  </li>
                ))}
              </ul>
              <Link
                href="/groups/corporate"
                data-track="book_click"
                data-track-params='{"source":"corporate"}'
                className="btn btn-primary mt-8 self-start"
              >
                {s.groups.corporate.cta}
              </Link>
            </article>
          </div>
        </div>
      </section>

      {/* Reviews — customer quotes stay in their original language */}
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
            <span className="eyebrow">{s.reviewsSection.eyebrow}</span>
            <h2 className="font-heading uppercase text-5xl md:text-7xl mt-4 leading-[0.95]">
              {s.reviewsSection.titleLine1}{" "}
              <span className="text-accent">{s.reviewsSection.titleLine2}</span>
            </h2>
            <p className="mt-5 text-foreground/70 leading-relaxed">
              {s.reviewsSection.body}
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
                <p className="mt-4 text-foreground/85 leading-relaxed">{r.body}</p>
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
              <span className="eyebrow">{s.owner.eyebrow}</span>
              <h2 className="font-heading uppercase text-5xl md:text-7xl mt-4 leading-[0.95]">
                {s.owner.name}
              </h2>
              <div className="mt-3 text-foreground/60 text-sm uppercase tracking-widest font-semibold">
                {s.owner.role}
              </div>

              <blockquote className="mt-8 text-xl md:text-2xl text-foreground/85 leading-snug max-w-xl">
                <span className="font-heading text-accent text-4xl leading-none align-top mr-1">
                  &ldquo;
                </span>
                {s.owner.quote}
              </blockquote>

              <div className="mt-10 grid grid-cols-3 gap-6 max-w-lg">
                {s.owner.stats.map((stat) => (
                  <div key={stat.label}>
                    <div className="font-heading text-4xl md:text-5xl leading-none">
                      {stat.value}
                    </div>
                    <div className="mt-2 text-[11px] uppercase tracking-widest text-foreground/60 leading-tight">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              <a
                href={mailtoBooking("Question for Arlindo")}
                data-track="book_click"
                data-track-params='{"source":"owner"}'
                className="btn btn-secondary mt-10"
              >
                {s.owner.cta}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24 md:py-32 border-t border-border">
        <div className="container-wrap">
          <div className="max-w-3xl">
            <span className="eyebrow">{s.faqSection.eyebrow}</span>
            <h2 className="font-heading uppercase text-5xl md:text-7xl mt-4 leading-[0.95]">
              {s.faqSection.titleLine1}{" "}
              <span className="text-accent">{s.faqSection.titleLine2}</span>
            </h2>
            <p className="mt-6 text-foreground/70 leading-relaxed max-w-xl">
              {s.faqSection.body}
            </p>
          </div>

          <div className="mt-12 max-w-3xl divide-y divide-border border-y border-border">
            {s.faqSection.items.map((item, idx) => (
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
                <div className="mt-3 text-foreground/75 leading-relaxed">{item.a}</div>
              </details>
            ))}
          </div>

          <p className="mt-8 text-sm text-foreground/50 max-w-3xl">{s.faqSection.footnote}</p>
        </div>
      </section>

      {/* Booking / Contact */}
      <section id="contact" className="py-24 md:py-32 border-t border-border">
        <div className="container-wrap grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <span className="eyebrow">{s.contact.eyebrow}</span>
            <h2 className="font-heading uppercase text-5xl md:text-7xl mt-4 leading-[0.95]">
              {s.contact.titleLine1}{" "}
              <span className="text-accent">{s.contact.titleLine2}</span>
            </h2>
            <p className="mt-5 text-foreground/70 leading-relaxed">{s.contact.body}</p>

            <dl className="mt-10 space-y-6 text-sm">
              <div>
                <dt className="text-foreground/50 uppercase tracking-widest text-xs">
                  {s.contact.callLabel}
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
                  {s.contact.visitLabel}
                </dt>
                <dd className="mt-2 text-foreground/85">
                  Rua da Areia n.º 1306,
                  <br />
                  Areia, 2750-095 Cascais
                </dd>
              </div>
              <div>
                <dt className="text-foreground/50 uppercase tracking-widest text-xs">
                  {s.contact.hoursLabel}
                </dt>
                <dd className="mt-2 text-foreground/85">{s.contact.hoursValue}</dd>
              </div>
            </dl>
          </div>

          <div className="lg:col-span-7 rounded-xl border border-border bg-card p-8 md:p-14 flex flex-col items-start justify-center">
            <p className="text-foreground/85 text-lg md:text-xl leading-relaxed max-w-lg">
              {s.contact.formPrompt}
            </p>
            <a
              href={bookHref}
              data-track="book_click"
              data-track-params='{"source":"contact_section"}'
              className="btn btn-primary mt-10"
            >
              {s.contact.formCta}
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
              <img src={photos.logo.src} alt="Guincho Adventours" className="h-10 w-auto" />
            </div>
            <p className="mt-6 text-sm text-foreground/60 max-w-sm leading-relaxed">
              {s.footer.tagline}
            </p>
          </div>

          <div>
            <div className="eyebrow mb-4">{s.footer.exploreEyebrow}</div>
            <ul className="space-y-2 text-sm">
              <li>
                <Link className="hover:underline" href={localePath(locale, "/tours")}>
                  {s.footer.exploreLinks.tours}
                </Link>
              </li>
              <li>
                <Link className="hover:underline" href="/groups/stag-parties">
                  {s.footer.exploreLinks.stag}
                </Link>
              </li>
              <li>
                <Link className="hover:underline" href="/groups/corporate">
                  {s.footer.exploreLinks.corporate}
                </Link>
              </li>
              <li>
                <Link className="hover:underline" href="/gift-a-tour">
                  {s.footer.exploreLinks.gift}
                </Link>
              </li>
              <li>
                <a className="hover:underline" href="#faq">
                  {s.footer.exploreLinks.faq}
                </a>
              </li>
              <li>
                <a className="hover:underline" href="#contact">
                  {s.footer.exploreLinks.book}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <div className="eyebrow mb-4">{s.footer.contactEyebrow}</div>
            <ul className="space-y-2 text-sm text-foreground/80">
              <li>
                <a
                  className="hover:underline"
                  href="tel:+351934479075"
                  data-track="phone_click"
                  data-track-params='{"source":"footer"}'
                >
                  +351 934 479 075
                </a>
              </li>
              <li>
                <a
                  className="hover:underline"
                  href="tel:+351214869700"
                  data-track="phone_click"
                  data-track-params='{"source":"footer"}'
                >
                  +351 214 869 700
                </a>
              </li>
              <li>Rua da Areia n.º 1306, Areia, 2750-095 Cascais</li>
              <li>{s.contact.hoursValue}</li>
            </ul>
          </div>
        </div>

        <div className="container-wrap mt-12 border-t border-border pt-6 flex flex-col md:flex-row md:items-center md:justify-between gap-3 text-xs text-foreground/50">
          <div>{s.footer.copyright}</div>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
            <Link className="hover:text-foreground" href="/terms">
              {s.home.footer.terms}
            </Link>
            <Link className="hover:text-foreground" href="/privacy">
              {s.home.footer.privacy}
            </Link>
            <span className="text-foreground/40">RNAAT {legal.rnaat}</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
