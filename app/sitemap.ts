import type { MetadataRoute } from "next";
import { siteUrl } from "@/app/lib/site";
import { tourSlugs } from "@/data/tours";
import { groupSlugs } from "@/data/groups";
import { publishedPosts } from "@/data/posts";
import { locales as localeStrings } from "@/data/i18n";
import { locales, defaultLocale, localeUrl, type Locale } from "@/app/lib/i18n";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  // Localised homepages appear in the sitemap only if their dictionary has
  // been reviewed by a native speaker (reviewed=true). Machine-quality
  // pages stay noindex/nofollow and out of the sitemap to protect search
  // authority.
  const reviewedLocaleHomes = locales
    .filter((l): l is Locale => l !== defaultLocale && localeStrings[l].reviewed)
    .map((l) => ({
      url: localeUrl(l, "/"),
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    }));

  return [
    {
      url: siteUrl("/"),
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    ...reviewedLocaleHomes,
    {
      url: siteUrl("/tours"),
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...tourSlugs.map((slug) => ({
      url: siteUrl(`/tours/${slug}`),
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...groupSlugs.map((slug) => ({
      url: siteUrl(`/groups/${slug}`),
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    {
      url: siteUrl("/blog"),
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    ...publishedPosts().map((p) => ({
      url: siteUrl(`/blog/${p.slug}`),
      lastModified: new Date(p.updatedAt ?? p.publishedAt),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
    {
      url: siteUrl("/gift-a-tour"),
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: siteUrl("/reviews"),
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: siteUrl("/terms"),
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: siteUrl("/privacy"),
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
