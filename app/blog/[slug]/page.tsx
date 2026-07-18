import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { posts, postSlugs, allSitemapPosts } from "@/data/posts";
import { tours } from "@/data/tours";
import { site, siteUrl } from "@/app/lib/site";
import { SiteHeader } from "@/app/components/site-header";

export function generateStaticParams() {
  return allSitemapPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = posts[slug];
  if (!post) return {};
  const url = siteUrl(`/blog/${slug}`);
  const isProd = process.env.VERCEL_ENV === "production";
  const isDraft = post.status !== "published";
  return {
    title: post.metaTitle,
    description: post.metaDescription,
    keywords: post.keywords,
    alternates: { canonical: url },
    robots:
      isDraft && isProd
        ? { index: false, follow: false }
        : { index: true, follow: true },
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      url,
      type: "article",
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt ?? post.publishedAt,
      authors: [post.author],
    },
  };
}

function postJsonLd(slug: string) {
  const post = posts[slug];
  if (!post) return null;
  const url = siteUrl(`/blog/${slug}`);
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        "@id": `${url}#article`,
        headline: post.title,
        description: post.metaDescription,
        articleBody: post.sections.flatMap((s) => s.paragraphs).join("\n\n"),
        datePublished: post.publishedAt,
        dateModified: post.updatedAt ?? post.publishedAt,
        author: { "@type": "Person", name: post.author },
        publisher: { "@id": `${site.url}#business` },
        mainEntityOfPage: { "@type": "WebPage", "@id": url },
        keywords: post.keywords.join(", "),
        wordCount: post.sections
          .flatMap((s) => s.paragraphs)
          .join(" ")
          .split(/\s+/).length,
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: site.url },
          {
            "@type": "ListItem",
            position: 2,
            name: "Field Notes",
            item: siteUrl("/blog"),
          },
          {
            "@type": "ListItem",
            position: 3,
            name: post.title,
            item: url,
          },
        ],
      },
    ],
  };
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = posts[slug];
  if (!post) notFound();

  const related = post.relatedTours
    .map((s) => tours[s])
    .filter((t): t is NonNullable<typeof t> => Boolean(t));

  return (
    <main className="text-foreground">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(postJsonLd(slug)) }}
      />

      <SiteHeader />

      <article>
        <header className="pt-32 pb-12 border-b border-border">
          <div className="container-wrap max-w-3xl">
            <nav
              aria-label="Breadcrumb"
              className="text-xs text-foreground/60 tracking-widest uppercase mb-4"
            >
              <Link href="/" className="hover:text-foreground">Home</Link>
              <span className="mx-2 text-foreground/30">/</span>
              <Link href="/blog" className="hover:text-foreground">Field Notes</Link>
              <span className="mx-2 text-foreground/30">/</span>
              <span className="text-foreground/80">{post.title}</span>
            </nav>
            <div className="text-xs uppercase tracking-widest text-foreground/50">
              {new Date(post.publishedAt).toLocaleDateString("en-GB", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
              <span className="mx-2 text-foreground/30">·</span>
              {post.readingMinutes} min read
              <span className="mx-2 text-foreground/30">·</span>
              by {post.author}
            </div>
            <h1 className="mt-4 font-heading uppercase text-4xl md:text-6xl leading-[0.98]">
              {post.title}
            </h1>
            <p className="mt-6 text-lg text-foreground/70 leading-relaxed">
              {post.excerpt}
            </p>
          </div>
        </header>

        <div className="py-16">
          <div className="container-wrap max-w-3xl">
            {post.sections.map((section, idx) => (
              <section key={idx} className="mb-12 last:mb-0">
                {section.heading && (
                  <h2 className="font-heading uppercase text-2xl md:text-3xl leading-tight mb-6">
                    {section.heading}
                  </h2>
                )}
                <div className="space-y-5 text-foreground/85 leading-relaxed">
                  {section.paragraphs.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>

        {related.length > 0 && (
          <section className="border-t border-border py-16">
            <div className="container-wrap max-w-3xl">
              <span className="eyebrow">Ride it yourself</span>
              <h2 className="font-heading uppercase text-3xl md:text-4xl mt-4 leading-tight">
                Related tours
              </h2>
              <ul className="mt-8 space-y-4">
                {related.map((t) => (
                  <li key={t.slug}>
                    <Link
                      href={`/tours/${t.slug}`}
                      className="block border border-border rounded-2xl p-5 hover:border-accent transition"
                    >
                      <div className="font-heading uppercase text-xl">
                        {t.title}
                      </div>
                      <div className="mt-1 text-sm text-foreground/70">
                        {t.intro}
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}
      </article>

      <footer className="border-t border-border py-10">
        <div className="container-wrap text-xs text-foreground/50 flex flex-wrap gap-x-4 gap-y-2">
          <Link href="/" className="hover:text-foreground">Home</Link>
          <Link href="/blog" className="hover:text-foreground">Field Notes</Link>
          <Link href="/tours" className="hover:text-foreground">Tours</Link>
          <Link href="/terms" className="hover:text-foreground">Terms</Link>
          <Link href="/privacy" className="hover:text-foreground">Privacy</Link>
          <span className="ml-auto">© 2026 {site.name}</span>
        </div>
      </footer>
    </main>
  );
}
