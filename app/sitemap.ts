import type { MetadataRoute } from "next";
import { allRoutes, siteUrl } from "@/lib/data";
import { projects } from "@/lib/projects";
import { journey } from "@/lib/journey";

// Bump when content changes meaningfully, so search engines re-crawl.
const lastModified = new Date("2026-10-19");

export default function sitemap(): MetadataRoute.Sitemap {
  const pages: MetadataRoute.Sitemap = allRoutes.map((item) => ({
    url: `${siteUrl}${item.href === "/" ? "" : item.href}`,
    lastModified,
    changeFrequency: "monthly",
    priority: item.href === "/" ? 1 : item.href === "/projects" ? 0.9 : 0.7,
  }));
  const caseStudies: MetadataRoute.Sitemap = projects.map((p) => ({
    url: `${siteUrl}/projects/${p.slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: p.featured ? 0.85 : 0.75,
  }));
  const stories: MetadataRoute.Sitemap = journey.map((p) => ({
    url: `${siteUrl}/journey/${p.slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.7,
    images: [p.cover, ...p.photos].map((g) => `${siteUrl}${g.src}`),
  }));
  return [...pages, ...caseStudies, ...stories];
}
