import type { MetadataRoute } from "next";
import { siteUrl } from "@/app/lib/site";
import { tourSlugs } from "@/data/tours";
import { groupSlugs } from "@/data/groups";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    {
      url: siteUrl("/"),
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
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
      url: siteUrl("/gift-a-tour"),
      lastModified: now,
      changeFrequency: "monthly",
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
