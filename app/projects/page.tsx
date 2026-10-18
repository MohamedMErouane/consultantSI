import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import SectionHeading from "@/components/SectionHeading";
import ProjectsExplorer from "@/components/ProjectsExplorer";
import { projects } from "@/lib/data";

export const metadata: Metadata = pageMetadata({
  title: "Projects",
  description: "Case studies by Mohamed Merouane: a school-management platform built solo, enterprise apps at Marsa Maroc, an Odoo ERP deployment, blockchain and real-time projects.",
  path: "/projects",
});

export default function ProjectsPage() {
  return (
    <section className="px-6 pt-40 pb-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading as="h1"
          eyebrow="Work"
          title="Projects"
          description="Each project is framed the way a Consultant SI would document it: the business problem first, then the solution, then the impact. Open any card for the full case study."
        />
        <div className="mt-12">
          <ProjectsExplorer projects={projects} />
        </div>
      </div>
    </section>
  );
}
