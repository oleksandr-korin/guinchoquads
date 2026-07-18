import type { Metadata } from "next";
import Link from "next/link";
import { publishedPosts } from "@/data/posts";
import { site, siteUrl } from "@/app/lib/site";
import { SiteHeader } from "@/app/components/site-header";

const url = siteUrl("/blog");

export const metadata: Metadata = {
  title: "Field Notes — Trails, Coast & Stories from Guincho",
  description:
    "Local stories from the Guincho coast and the Sintra hills — trails, hidden coves, the working tracks behind the dunes. Written by the people who guide them.",
  alternates: { canonical: url },
  openGraph: {
    title: "Field Notes — Guincho Adventours",
    description:
      "Local stories from the Guincho coast and the Sintra hills. Trails, coves, and the tracks the guidebooks never mention.",
    url,
  },
};

function blogJsonLd() {
  const items = publishedPosts();
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Blog",
        "@id": `${url}#blog`,
        url,
        name: "Field Notes",
        description:
          "Local stories from the Guincho coast and the Sintra hills.",
        publisher: { "@id": `${site.url}#business` },
        blogPost: items.map((p) => ({
          "@type": "BlogPosting",
          "@id": `${siteUrl(`/blog/${p.slug}`)}#article`,
          headline: p.title,
          url: siteUrl(`/blog/${p.slug}`),
          datePublished: p.publishedAt,
          dateModified: p.updatedAt ?? p.publishedAt,
          author: { "@type": "Person", name: p.author },
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: site.url },
          { "@type": "ListItem", position: 2, name: "Field Notes", item: url },
        ],
      },
    ],
  };
}

export default function BlogIndex() {
  const items = publishedPosts();

  return (
    <main className="text-foreground">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogJsonLd()) }}
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
            <span className="text-foreground/80">Field Notes</span>
          </nav>
          <span className="eyebrow">FIELD NOTES</span>
          <h1 className="font-heading uppercase text-5xl md:text-7xl mt-4 leading-[0.95]">
            STORIES FROM THE COAST
          </h1>
          <p className="mt-6 text-foreground/70 leading-relaxed">
            Trails, coves and working tracks along the Guincho coast and the
            Sintra hills — the kind of local detail the big travel sites never
            get to. Written by the people who guide them.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="container-wrap max-w-3xl">
          {items.length === 0 ? (
            <p className="text-foreground/60">No posts published yet.</p>
          ) : (
            <ul className="space-y-12">
              {items.map((p) => (
                <li key={p.slug} className="border-b border-border pb-12 last:border-none">
                  <div className="text-xs uppercase tracking-widest text-foreground/50">
                    {new Date(p.publishedAt).toLocaleDateString("en-GB", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                    <span className="mx-2 text-foreground/30">·</span>
                    {p.readingMinutes} min read
                  </div>
                  <h2 className="mt-3 font-heading uppercase text-3xl md:text-4xl leading-tight">
                    <Link href={`/blog/${p.slug}`} className="hover:text-accent">
                      {p.title}
                    </Link>
                  </h2>
                  <p className="mt-4 text-foreground/70 leading-relaxed">
                    {p.excerpt}
                  </p>
                  <Link
                    href={`/blog/${p.slug}`}
                    className="mt-4 inline-block text-sm text-accent"
                  >
                    Read the story →
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>

      <footer className="border-t border-border py-10">
        <div className="container-wrap text-xs text-foreground/50 flex flex-wrap gap-x-4 gap-y-2">
          <Link href="/" className="hover:text-foreground">Home</Link>
          <Link href="/tours" className="hover:text-foreground">Tours</Link>
          <Link href="/terms" className="hover:text-foreground">Terms</Link>
          <Link href="/privacy" className="hover:text-foreground">Privacy</Link>
          <span className="ml-auto">© 2026 {site.name}</span>
        </div>
      </footer>
    </main>
  );
}
