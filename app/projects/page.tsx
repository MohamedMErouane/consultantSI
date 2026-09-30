import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import SectionHeading from "@/components/SectionHeading";
import ProjectsExplorer from "@/components/ProjectsExplorer";
import { projects } from "@/lib/data";

export const metadata: Metadata = pageMetadata({
  title: "Projects",
  description: "Full-stack, ERP, and blockchain projects — with the business problem, solution, and impact for each.",
  path: "/projects",
});

export default function ProjectsPage() {
  return (
    <section className="px-6 pt-40 pb-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Work"
          title="Projects"
          description="Each project is framed the way a Consultant SI would document it: the business problem first, then the solution, then the impact."
        />
        <div className="mt-12">
          <ProjectsExplorer projects={projects} />
        </div>
      </div>
    </section>
  );
}
