import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { ExperienceView, experienceMeta } from "@/components/views/SimpleViews";

export const metadata: Metadata = pageMetadata({ ...experienceMeta.fr, path: "/experience", lang: "fr" });

export default function Page() {
  return <ExperienceView lang="fr" />;
}
