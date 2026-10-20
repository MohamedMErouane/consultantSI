import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { SkillsView, skillsMeta } from "@/components/views/SimpleViews";

export const metadata: Metadata = pageMetadata({ ...skillsMeta.en, path: "/skills", lang: "en" });

export default function Page() {
  return <SkillsView lang="en" />;
}
