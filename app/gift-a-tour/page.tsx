import type { Metadata } from "next";
import Link from "next/link";
import { site, siteUrl } from "@/app/lib/site";
import { mailtoBooking } from "@/app/lib/mailto";
import { SiteHeader } from "@/app/components/site-header";

const url = siteUrl("/gift-a-tour");

export const metadata: Metadata = {
  title: "Gift a Tour — Voucher for any Guincho Adventours experience",
  description:
    "Give someone a quad, buggy, kayak, Sintra Jeep or hiking tour as a gift. We email a voucher for any tour, redeemable within 12 months. From €25.",
  alternates: { canonical: url },
  keywords: [
    "gift voucher quad tour Portugal",
    "adventure gift Cascais",
    "Sintra experience gift",
    "quad tour gift certificate",
  ],
  openGraph: {
    title: "Gift a Tour — Guincho Adventours",
    description:
      "Give a Guincho adventure as a gift. Any tour, any duration, we email the voucher.",
    url,
  },
};

const options = [
  {
    title: "Coastline hike",
    detail: "2 h · from €25 per person",
    href: "/tours/hiking",
  },
  {
    title: "1-hour quad",
    detail: "1 h · from €60 per person",
    href: "/tours/quad-bike-tours",
  },
  {
    title: "Sea kayak — Cascais",
    detail: "2 h 30 · from €50 per person",
    href: "/tours/sea-kayak",
  },
  {
    title: "Sintra Jeep half-day",
    detail: "≈ 2 h 30 · from €60 per person",
    href: "/tours/jeep-sintra-tour",
  },
  {
    title: "3-hour signature quad",
    detail: "3 h · from €140 per person",
    href: "/tours/quad-bike-tours",
  },
];

const bookHref = mailtoBooking("Gift-a-tour voucher");

export default function GiftPage() {
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
            <span className="text-foreground/80">Gift a tour</span>
          </nav>
          <span className="eyebrow">GIFT VOUCHER</span>
          <h1 className="font-heading uppercase text-5xl md:text-7xl mt-4 leading-[0.95]">
            GIVE AN{" "}
            <span className="text-accent">ADVENTURE</span>
          </h1>
          <p className="mt-6 text-foreground/70 leading-relaxed">
            Buy any of our tours as a gift. We email you a printable voucher —
            valid for 12 months, redeemable for the recipient on any tour date
            they choose. Perfect for birthdays, Christmas, retirement, or the
            person in your life who already owns too much stuff.
          </p>
          <a
            href={bookHref}
            data-track="book_click"
            data-track-params='{"source":"gift_hero"}'
            className="btn btn-primary mt-8"
          >
            SEND A GIFT VOUCHER
          </a>
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="container-wrap max-w-3xl">
          <span className="eyebrow">How it works</span>
          <ol className="mt-8 space-y-6 text-foreground/85 leading-relaxed">
            <li className="flex gap-4">
              <span className="font-heading text-4xl text-accent leading-none w-8 shrink-0">
                1
              </span>
              <div>
                <div className="font-semibold">Pick the tour.</div>
                <p className="mt-1 text-foreground/70">
                  Any tour from our site — quads, buggies, kayak, Sintra Jeep,
                  bike or hike. Or leave it open and let the recipient choose.
                </p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="font-heading text-4xl text-accent leading-none w-8 shrink-0">
                2
              </span>
              <div>
                <div className="font-semibold">Email us who it&apos;s for.</div>
                <p className="mt-1 text-foreground/70">
                  Send us the tour, the recipient&apos;s name, and a message
                  you&apos;d like on the voucher. We reply with a payment link.
                </p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="font-heading text-4xl text-accent leading-none w-8 shrink-0">
                3
              </span>
              <div>
                <div className="font-semibold">We send the voucher.</div>
                <p className="mt-1 text-foreground/70">
                  Printable PDF, valid for 12 months. The recipient contacts us
                  to book their date — no pressure, no expiry drama.
                </p>
              </div>
            </li>
          </ol>
        </div>
      </section>

      <section className="py-20 md:py-24 border-t border-border">
        <div className="container-wrap">
          <span className="eyebrow">Popular gift ideas</span>
          <h2 className="font-heading uppercase text-4xl md:text-5xl mt-4 leading-tight">
            What to give
          </h2>
          <p className="mt-4 text-sm text-foreground/60">
            Prices do not include VAT.
          </p>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {options.map((o) => (
              <Link
                key={o.title}
                href={o.href}
                className="block rounded-2xl border border-border bg-card p-6 hover:border-accent transition"
              >
                <div className="text-xs uppercase tracking-widest text-foreground/50 font-semibold">
                  {o.detail}
                </div>
                <div className="mt-3 font-heading uppercase text-2xl leading-tight">
                  {o.title}
                </div>
                <div className="mt-3 text-sm text-accent">
                  See the tour →
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24 border-t border-border">
        <div className="container-wrap max-w-3xl text-center">
          <span className="eyebrow">Ready?</span>
          <h2 className="font-heading uppercase text-4xl md:text-5xl mt-4 leading-tight">
            Send us the gift details
          </h2>
          <p className="mt-4 text-foreground/70 leading-relaxed">
            One email, we handle the rest.
          </p>
          <a
            href={bookHref}
            data-track="book_click"
            data-track-params='{"source":"gift_footer"}'
            className="btn btn-primary mt-8"
          >
            SEND A GIFT VOUCHER
          </a>
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
