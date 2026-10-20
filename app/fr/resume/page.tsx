import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { ResumeView, resumeMeta } from "@/components/views/SimpleViews";

export const metadata: Metadata = pageMetadata({ ...resumeMeta.fr, path: "/resume", lang: "fr" });

export default function Page() {
  return <ResumeView lang="fr" />;
}
