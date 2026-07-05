import type { MetadataRoute } from "next";
import { siteUrl } from "@/app/lib/site";

export default function robots(): MetadataRoute.Robots {
  const isProd = process.env.VERCEL_ENV === "production";
  return {
    rules: isProd
      ? [{ userAgent: "*", allow: "/" }]
      : [{ userAgent: "*", disallow: "/" }],
    sitemap: siteUrl("/sitemap.xml"),
  };
}
