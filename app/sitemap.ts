import type { MetadataRoute } from "next";
import { allRoutes, siteUrl } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  return allRoutes.map((item) => ({
    url: `${siteUrl}${item.href}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: item.href === "/" ? 1 : 0.7,
  }));
}
