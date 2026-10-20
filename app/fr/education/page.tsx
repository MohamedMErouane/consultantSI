import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { EducationView, educationMeta } from "@/components/views/SimpleViews";

export const metadata: Metadata = pageMetadata({ ...educationMeta.fr, path: "/education", lang: "fr" });

export default function Page() {
  return <EducationView lang="fr" />;
}
