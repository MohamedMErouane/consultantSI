import type { Metadata } from "next";
import ProjectView, { projectMetadata } from "@/components/views/ProjectView";
import { projects } from "@/lib/projects";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  return projectMetadata(slug, "fr");
}

export default async function Page({ params }: Params) {
  const { slug } = await params;
  return <ProjectView slug={slug} lang="fr" />;
}
