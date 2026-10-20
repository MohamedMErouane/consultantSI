import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { ProjectsView, projectsMeta } from "@/components/views/SimpleViews";

export const metadata: Metadata = pageMetadata({ ...projectsMeta.fr, path: "/projects", lang: "fr" });

export default function Page() {
  return <ProjectsView lang="fr" />;
}
