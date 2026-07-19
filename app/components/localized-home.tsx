import Link from "next/link";
import { tourSlugs, tours } from "@/data/tours";
import { photos } from "@/data/photos";
import { site } from "@/app/lib/site";
import { mailtoBooking } from "@/app/lib/mailto";
import { primaryNav } from "@/app/lib/nav";
import { MobileMenu } from "@/app/components/mobile-menu";
import { PhotoSlot } from "@/app/components/photo-slot";
import { LanguageSwitcher } from "@/app/components/language-switcher";
import { localePath, type Locale } from "@/app/lib/i18n";
import type { LocaleStrings } from "@/data/i18n";

type Props = {
  locale: Locale;
  strings: LocaleStrings;
};

// A minimal but self-respecting landing page for a non-default locale.
// Hero + tour cards + CTA + footer, all pulling from the locale dictionary.
// Links point back at the English tour detail pages for now — those are the
// only fully-translated destinations we have. When per-tour translations
// ship, this component doesn't change; only the target URLs do.
export function LocalizedHome({ locale, strings }: Props) {
  const s = strings.home;
  const nav = strings.nav;
  const bookHref = mailtoBooking(`Booking enquiry (${locale.toUpperCase()})`);
  const items = tourSlugs.map((slug) => ({
    slug,
    photoKey: tours[slug].photoKey,
    title: strings.tours[slug as keyof typeof strings.tours]?.title ?? tours[slug].title,
    short:
      strings.tours[slug as keyof typeof strings.tours]?.short ?? tours[slug].intro,
    priceFrom: tours[slug].variants[0]?.price ?? "",
  }));

  // Nav labels come from the dictionary; hrefs stay language-neutral (the
  // English destination pages) since we haven't localised those yet.
  const navLinks = primaryNav.map((link) => {
    const label = (() => {
      if (link.href.endsWith("/tours")) return nav.tours;
      if (link.href.includes("#prices")) return nav.prices;
      if (link.href.includes("#groups")) return nav.groups;
      if (link.href.includes("gift")) return nav.gift;
      if (link.href.includes("blog")) return nav.fieldNotes;
      if (link.href.includes("reviews")) return nav.reviews;
      if (link.href.includes("#faq")) return nav.faq;
      if (link.href.includes("#contact")) return nav.contact;
      return link.label;
    })();
    return { href: link.href, label };
  });

  return (
    <main className="text-foreground">
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/70 backdrop-blur-md border-b border-white/5">
        <div className="container-wrap flex items-center justify-between h-16 gap-4">
          <Link href={localePath(locale, "/")} className="flex items-center gap-2 shrink-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={photos.logo.src} alt={photos.logo.alt} className="h-10 w-auto" />
          </Link>
          <nav className="hidden lg:flex items-center gap-5 xl:gap-6 text-sm text-foreground/70 font-medium">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hover:text-foreground transition whitespace-nowrap"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="hidden lg:flex items-center gap-4">
            <LanguageSwitcher current={locale} />
            <a href={bookHref} className="btn btn-primary">
              {nav.book}
            </a>
          </div>
          <div className="lg:hidden flex items-center gap-1">
            <LanguageSwitcher current={locale} />
            <MobileMenu
              links={navLinks}
              phone={site.phones.mobile}
              bookHref={bookHref}
              bookLabel={nav.book}
            />
          </div>
        </div>
      </header>

      <section className="pt-32 pb-16 border-b border-border">
        <div className="container-wrap max-w-4xl">
          <span className="eyebrow">{s.eyebrow}</span>
          <h1 className="font-heading uppercase text-6xl md:text-8xl mt-4 leading-[0.9]">
            {s.headlineLine1}
            <br />
            {s.headlineLine2}
          </h1>
          <p className="mt-6 text-2xl text-accent font-medium">{s.tagline}</p>
          <p className="mt-6 text-foreground/70 leading-relaxed text-lg max-w-2xl">
            {s.subheadline}
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href={bookHref} className="btn btn-primary">
              {s.primaryCta}
            </a>
            <Link href="/tours" className="btn btn-secondary">
              {s.secondaryCta}
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="container-wrap">
          <div className="max-w-3xl mb-12">
            <h2 className="font-heading uppercase text-4xl md:text-5xl leading-tight">
              {s.toursTitle}
            </h2>
            <p className="mt-4 text-foreground/70 leading-relaxed">
              {s.toursSubtitle}
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((t) => {
              const photo = photos.experience[t.photoKey] ?? photos.hero;
              return (
                <Link
                  key={t.slug}
                  href={`/tours/${t.slug}`}
                  className="group relative block overflow-hidden rounded-2xl aspect-[4/5] isolate"
                >
                  <div className="absolute inset-0">
                    <PhotoSlot
                      photo={photo}
                      variant="card"
                      slotLabel={t.title}
                      className="w-full h-full"
                      imgClassName="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                  </div>
                  {!photo.placeholder && (
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                  )}
                  {t.priceFrom && (
                    <div className="absolute top-4 right-4 rounded-full bg-accent text-accent-foreground text-[10px] font-bold uppercase tracking-widest px-3 py-1">
                      {t.priceFrom}
                    </div>
                  )}
                  {!photo.placeholder && (
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="font-heading uppercase text-3xl leading-none">
                        {t.title}
                      </h3>
                      <p className="mt-3 text-sm text-white/80 leading-relaxed">
                        {t.short}
                      </p>
                    </div>
                  )}
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24 border-t border-border">
        <div className="container-wrap max-w-2xl text-center">
          <h2 className="font-heading uppercase text-4xl md:text-5xl leading-tight">
            {s.ctaTitle}
          </h2>
          <p className="mt-4 text-foreground/70 leading-relaxed">
            {s.ctaSubtitle}
          </p>
          <a href={bookHref} className="btn btn-primary mt-8">
            {s.primaryCta}
          </a>
        </div>
      </section>

      <footer className="border-t border-border py-10">
        <div className="container-wrap text-xs text-foreground/50 flex flex-wrap gap-x-4 gap-y-2">
          <Link href={localePath(locale, "/")} className="hover:text-foreground">
            {s.footer.home}
          </Link>
          <Link href="/tours" className="hover:text-foreground">
            {s.footer.tours}
          </Link>
          <Link href="/terms" className="hover:text-foreground">
            {s.footer.terms}
          </Link>
          <Link href="/privacy" className="hover:text-foreground">
            {s.footer.privacy}
          </Link>
          <span className="ml-auto">© 2026 {site.name}</span>
        </div>
      </footer>
    </main>
  );
}
