import type { MetadataRoute } from "next";
import { allRoutes, siteUrl } from "@/lib/data";
import { projects } from "@/lib/projects";

// Bump when content changes meaningfully, so search engines re-crawl.
const lastModified = new Date("2026-10-18");

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
  return [...pages, ...caseStudies];
}
