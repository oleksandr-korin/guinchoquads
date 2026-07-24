import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { groups, groupSlugs } from "@/data/groups";
import { photos } from "@/data/photos";
import { site, siteUrl } from "@/app/lib/site";
import { mailtoBooking } from "@/app/lib/mailto";
import { SiteHeader } from "@/app/components/site-header";
import { PhotoSlot } from "@/app/components/photo-slot";

export function generateStaticParams() {
  return groupSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const g = groups[slug];
  if (!g) return {};
  const url = siteUrl(`/groups/${slug}`);
  return {
    title: g.metaTitle,
    description: g.metaDescription,
    keywords: g.keywords,
    alternates: { canonical: url },
    openGraph: { title: g.metaTitle, description: g.metaDescription, url, type: "website" },
  };
}

function groupJsonLd(slug: string) {
  const g = groups[slug];
  if (!g) return null;
  const url = siteUrl(`/groups/${slug}`);
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${url}#service`,
        serviceType: g.title,
        name: g.metaTitle,
        description: g.metaDescription,
        provider: { "@id": `${site.url}#business` },
        areaServed: { "@type": "Place", name: "Cascais, Portugal" },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: site.url },
          {
            "@type": "ListItem",
            position: 2,
            name: "Groups",
            item: siteUrl("/#groups"),
          },
          { "@type": "ListItem", position: 3, name: g.title, item: url },
        ],
      },
    ],
  };
}

export default async function GroupPageDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const g = groups[slug];
  if (!g) notFound();

  const photo = photos.experience[g.photoKey] ?? photos.hero;
  const bookHref = mailtoBooking(g.cta.topic);

  return (
    <main className="text-foreground">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(groupJsonLd(slug)) }}
      />

      <SiteHeader />

      <section className="relative min-h-[55vh] md:min-h-[70vh] flex items-end pt-16">
        <div className="absolute inset-0">
          <PhotoSlot
            photo={photo}
            variant="hero"
            slotLabel={g.title}
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
            <Link href="/#groups" className="hover:text-foreground">Groups</Link>
            <span className="mx-2 text-foreground/30">/</span>
            <span className="text-foreground/80">{g.title}</span>
          </nav>
          <span className="eyebrow">{g.eyebrow}</span>
          <h1 className="font-heading uppercase text-5xl sm:text-6xl md:text-7xl mt-4 leading-[0.95]">
            {g.headline}
          </h1>
          <p className="mt-6 max-w-xl text-base md:text-lg text-foreground/85 leading-relaxed">
            {g.intro}
          </p>
          <a
            href={bookHref}
            data-track="book_click"
            data-track-params={`{"cta_source":"group_${slug}"}`}
            className="btn btn-primary mt-8"
          >
            {g.cta.label.toUpperCase()}
          </a>
        </div>
      </section>

      <section className="py-20 md:py-24 border-t border-border">
        <div className="container-wrap max-w-3xl">
          <span className="eyebrow">How it works</span>
          <div className="mt-8 space-y-6 text-foreground/85 leading-relaxed">
            {g.description.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24 border-t border-border">
        <div className="container-wrap grid md:grid-cols-3 gap-10">
          <div>
            <span className="eyebrow">Logistics</span>
            <ul className="mt-6 space-y-3 text-foreground/85">
              {g.logistics.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <span className="eyebrow">Who it&apos;s for</span>
            <ul className="mt-6 space-y-3 text-foreground/85">
              {g.who.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <span className="eyebrow">Activities</span>
            <ul className="mt-6 space-y-3 text-foreground/85">
              {g.activities.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24 border-t border-border">
        <div className="container-wrap">
          <span className="eyebrow">Related pages</span>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {g.related.map((r) => (
              <Link
                key={r.href}
                href={r.href}
                className="block rounded-2xl border border-border bg-card p-6 hover:border-accent transition"
              >
                <div className="font-heading uppercase text-xl leading-tight">
                  {r.label}
                </div>
                <p className="mt-2 text-sm text-foreground/70 leading-relaxed">
                  {r.blurb}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24 border-t border-border">
        <div className="container-wrap max-w-3xl text-center">
          <span className="eyebrow">Book by email</span>
          <h2 className="font-heading uppercase text-4xl md:text-5xl mt-4 leading-tight">
            Tell us the date and the size
          </h2>
          <a
            href={bookHref}
            data-track="book_click"
            data-track-params={`{"cta_source":"group_${slug}_footer"}`}
            className="btn btn-primary mt-8"
          >
            {g.cta.label.toUpperCase()}
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
