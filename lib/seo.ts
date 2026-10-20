import type { Metadata } from "next";
import { profile } from "@/lib/data";
import { type Lang, languageAlternates, localePath } from "@/lib/i18n";

// Child segments replace the parent's openGraph/twitter objects wholesale,
// so each page rebuilds them (including the share image) to get its own
// og:url, canonical and hreflang links. `path` is given without the /fr prefix.
export function pageMetadata({
  title,
  description,
  path,
  lang = "en",
  image = "/opengraph-image",
  imageWidth = 1200,
  imageHeight = 630,
  keywords,
}: {
  title: string;
  description: string;
  path: string;
  lang?: Lang;
  image?: string;
  imageWidth?: number;
  imageHeight?: number;
  keywords?: string[];
}): Metadata {
  const fullTitle = `${title} — ${profile.name}`;
  const url = localePath(lang, path);
  return {
    title,
    description,
    ...(keywords ? { keywords } : {}),
    alternates: { canonical: url, languages: languageAlternates(path) },
    openGraph: {
      type: "website",
      url,
      title: fullTitle,
      description,
      siteName: profile.name,
      locale: lang === "fr" ? "fr_FR" : "en_US",
      alternateLocale: lang === "fr" ? ["en_US"] : ["fr_FR"],
      images: [{ url: image, width: imageWidth, height: imageHeight, alt: fullTitle }],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [image],
    },
  };
}
