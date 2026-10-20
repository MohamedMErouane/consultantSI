import type { Metadata } from "next";
import JourneyPostView, { journeyPostMetadata } from "@/components/views/JourneyPostView";
import { journey } from "@/lib/journey";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return journey.map((p) => ({ slug: p.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  return journeyPostMetadata(slug, "fr");
}

export default async function Page({ params }: Params) {
  const { slug } = await params;
  return <JourneyPostView slug={slug} lang="fr" />;
}
