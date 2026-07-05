import type { MetadataRoute } from "next";
import { site, siteUrl } from "@/app/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    {
      url: siteUrl("/"),
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    // Additional routes go here as we add them (e.g. /terms in Phase 9).
  ];
}
