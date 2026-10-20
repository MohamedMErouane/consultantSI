import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { EducationView, educationMeta } from "@/components/views/SimpleViews";

export const metadata: Metadata = pageMetadata({ ...educationMeta.en, path: "/education", lang: "en" });

export default function Page() {
  return <EducationView lang="en" />;
}
