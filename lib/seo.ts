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
  imageWidth = 1200,
  imageHeight = 630,
  keywords,
}: {
  title: string;
  description: string;
  path: string;
  image?: string;
  imageWidth?: number;
  imageHeight?: number;
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
