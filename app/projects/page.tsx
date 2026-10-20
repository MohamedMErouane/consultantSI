import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { ProjectsView, projectsMeta } from "@/components/views/SimpleViews";

export const metadata: Metadata = pageMetadata({ ...projectsMeta.en, path: "/projects", lang: "en" });

export default function Page() {
  return <ProjectsView lang="en" />;
}
