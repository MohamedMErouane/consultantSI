import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import { profile, projects } from "@/lib/data";

export const metadata: Metadata = pageMetadata({
  title: "About",
  description: "About Mohamed Merouane — Information Systems Engineering student bridging business analysis and software engineering.",
  path: "/about",
});

const pillars = [
  {
    title: "Information Systems",
    text: "Trained to see a company as a network of processes and data flows, not just a codebase — coursework in IT governance and change management (conduite du changement) at ENSIASD.",
  },
  {
    title: "Digital Transformation",
    text: "Designing information systems around existing business processes, from an academic ERP project to production features on an EdTech platform.",
  },
  {
    title: "Business Analysis",
    text: "Comfortable translating a vague business need into functional specifications, requirements, and BPMN/UML models a technical team can build from.",
  },
  {
    title: "Software Engineering",
    text: "Full-stack delivery across React, Next.js, Django, and NestJS — from a Moroccan EdTech startup to enterprise applications at a public port authority.",
  },
  {
    title: "ERP & IT Governance",
    text: "Academic and project-based grounding in ERP concepts (inventory, purchasing, sales, reporting) and the governance frameworks that keep systems auditable.",
  },
  {
    title: "Delivery & Independent Work",
    text: `Worked in Agile sprints with CI/CD at EtudiaLab and Marsa Maroc, and delivered a blockchain gaming platform under a freelance contract. ${projects.length} projects in total are listed on the Projects page.`,
  },
];

export default function AboutPage() {
  return (
    <section className="px-6 pt-40 pb-28">
      <div className="mx-auto max-w-4xl">
        <SectionHeading eyebrow="About" title="Information systems consulting and software development" />

        <Reveal delay={0.1}>
          <p className="mt-8 text-lg text-ink-muted leading-relaxed">{profile.summary}</p>
        </Reveal>

        <Reveal delay={0.16}>
          <p className="mt-5 text-ink-muted leading-relaxed">
            I am applying for PFE positions in two directions: Consultant SI / Business Analyst, and
            Software Engineer / Full-Stack Developer. This is intentional. My degree focuses on information
            systems management and governance, while most of my professional experience has been in
            development. This site presents both sides, using only projects and experience I have actually
            worked on.
          </p>
        </Reveal>

        <div className="mt-16 grid sm:grid-cols-2 gap-5">
          {pillars.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.05}>
              <div className="glass rounded-xl p-6 h-full">
                <h3 className="text-ink font-medium">{p.title}</h3>
                <p className="text-sm text-ink-muted mt-2 leading-relaxed">{p.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
