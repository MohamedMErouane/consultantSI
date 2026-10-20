import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { ExperienceView, experienceMeta } from "@/components/views/SimpleViews";

export const metadata: Metadata = pageMetadata({ ...experienceMeta.en, path: "/experience", lang: "en" });

export default function Page() {
  return <ExperienceView lang="en" />;
}
