import type { MetadataRoute } from "next";
import { allRoutes, siteUrl } from "@/lib/data";
import { projects } from "@/lib/projects";
import { journey } from "@/lib/journey";
import { langs, localePath } from "@/lib/i18n";

// Bump when content changes meaningfully, so search engines re-crawl.
const lastModified = new Date("2026-10-20");

type Entry = { path: string; priority: number; images?: string[] };

const abs = (p: string) => `${siteUrl}${p === "/" ? "" : p}`;

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: Entry[] = [
    ...allRoutes.map((r) => ({ path: r.href, priority: r.href === "/" ? 1 : r.href === "/projects" ? 0.9 : 0.7 })),
    ...projects.map((p) => ({ path: `/projects/${p.slug}`, priority: p.featured ? 0.85 : 0.75, images: p.media?.map((m) => `${siteUrl}${m.src}`) })),
    ...journey.map((p) => ({ path: `/journey/${p.slug}`, priority: 0.7, images: [p.cover, ...p.photos].map((g) => `${siteUrl}${g.src}`) })),
  ];

  // Every page exists in English and French; each URL lists both versions (hreflang).
  return entries.flatMap((e) =>
    langs.map((lang) => ({
      url: abs(localePath(lang, e.path)),
      lastModified,
      changeFrequency: "monthly" as const,
      priority: lang === "en" ? e.priority : Math.max(0.5, e.priority - 0.05),
      alternates: { languages: { en: abs(e.path), fr: abs(localePath("fr", e.path)) } },
      ...(e.images?.length ? { images: e.images } : {}),
    }))
  );
}
