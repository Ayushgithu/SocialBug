import type { MetadataRoute } from "next";
import { socialLinks } from "@/lib/data";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
    ],
    sitemap: `${socialLinks.siteUrl}/sitemap.xml`,
    host: socialLinks.siteUrl,
  };
}