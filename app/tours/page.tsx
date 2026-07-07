import type { Metadata } from "next";
import Link from "next/link";
import { tours, tourSlugs } from "@/data/tours";
import { photos } from "@/data/photos";
import { site, siteUrl } from "@/app/lib/site";
import { SiteHeader } from "@/app/components/site-header";
import { PhotoSlot } from "@/app/components/photo-slot";

const url = siteUrl("/tours");

export const metadata: Metadata = {
  title: "Tours in Guincho, Cascais",
  description:
    "Every tour we run out of Areia, Guincho — quads, buggies, sea kayak, mountain bike, hiking, and the Sintra Jeep tour. Pick your activity, book by email.",
  alternates: { canonical: url },
  openGraph: {
    title: "Guincho Adventours — Tours",
    description:
      "Quads, buggies, kayak, mountain bike, hiking, Sintra Jeep. Guided from Areia, Cascais.",
    url,
  },
};

export default function ToursHub() {
  const items = tourSlugs.map((slug) => tours[slug]);
  return (
    <main className="text-foreground">
      <SiteHeader />

      <section className="pt-32 pb-16 border-b border-border">
        <div className="container-wrap max-w-3xl">
          <nav
            aria-label="Breadcrumb"
            className="text-xs text-foreground/60 tracking-widest uppercase mb-4"
          >
            <Link href="/" className="hover:text-foreground">Home</Link>
            <span className="mx-2 text-foreground/30">/</span>
            <span className="text-foreground/80">Tours</span>
          </nav>
          <span className="eyebrow">TOURS</span>
          <h1 className="font-heading uppercase text-5xl md:text-7xl mt-4 leading-[0.95]">
            EVERY TOUR WE RUN
          </h1>
          <p className="mt-6 text-foreground/70 leading-relaxed">
            Six ways to see the Guincho coast and the Sintra hills — from a
            fast adrenaline hour on a quad to a full day on foot or in a Jeep.
            Same office, same 18-year-old operation, same email inbox to book.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="container-wrap grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((tour) => {
            const photo =
              photos.experience[tour.photoKey] ?? photos.hero;
            const priceFrom = tour.variants[0]?.price;
            return (
              <Link
                key={tour.slug}
                href={`/tours/${tour.slug}`}
                className="group relative block overflow-hidden rounded-2xl aspect-[4/5] isolate"
              >
                <div className="absolute inset-0">
                  <PhotoSlot
                    photo={photo}
                    variant="card"
                    slotLabel={tour.title}
                    className="w-full h-full"
                    imgClassName="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                {!photo.placeholder && (
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                )}
                <div className="absolute top-4 right-4 rounded-full bg-accent text-accent-foreground text-[10px] font-bold uppercase tracking-widest px-3 py-1">
                  from {priceFrom}
                </div>
                {!photo.placeholder && (
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h2 className="font-heading uppercase text-3xl leading-none">
                      {tour.title}
                    </h2>
                    <p className="mt-3 text-sm text-white/80 leading-relaxed">
                      {tour.intro}
                    </p>
                  </div>
                )}
              </Link>
            );
          })}
        </div>
      </section>

      <footer className="border-t border-border py-10">
        <div className="container-wrap text-xs text-foreground/50 flex flex-wrap gap-x-4 gap-y-2">
          <Link href="/" className="hover:text-foreground">Home</Link>
          <Link href="/terms" className="hover:text-foreground">Terms</Link>
          <Link href="/privacy" className="hover:text-foreground">Privacy</Link>
          <span className="ml-auto">© 2026 {site.name}</span>
        </div>
      </footer>
    </main>
  );
}
