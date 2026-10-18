import type { Metadata } from "next";
import { profile } from "@/lib/data";

// Child segments replace the parent's openGraph/twitter objects wholesale,
// so each page rebuilds them (including the share image) to get its own
// og:url and canonical.
export function pageMetadata({
  title,
  description,
  path,
  image = "/opengraph-image",
  keywords,
}: {
  title: string;
  description: string;
  path: string;
  image?: string;
  keywords?: string[];
}): Metadata {
  const fullTitle = `${title} — ${profile.name}`;
  return {
    title,
    description,
    ...(keywords ? { keywords } : {}),
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      url: path,
      title: fullTitle,
      description,
      siteName: profile.name,
      locale: "en_US",
      images: [{ url: image, width: 1200, height: 630, alt: fullTitle }],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [image],
    },
  };
}
