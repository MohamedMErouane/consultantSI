import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { SkillsView, skillsMeta } from "@/components/views/SimpleViews";

export const metadata: Metadata = pageMetadata({ ...skillsMeta.fr, path: "/skills", lang: "fr" });

export default function Page() {
  return <SkillsView lang="fr" />;
}
