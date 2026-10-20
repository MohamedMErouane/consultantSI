import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { ResumeView, resumeMeta } from "@/components/views/SimpleViews";

export const metadata: Metadata = pageMetadata({ ...resumeMeta.en, path: "/resume", lang: "en" });

export default function Page() {
  return <ResumeView lang="en" />;
}
