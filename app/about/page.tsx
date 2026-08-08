import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import { profile } from "@/lib/data";

export const metadata: Metadata = {
  title: "About",
  description: "About Mohamed Merouane — Information Systems Engineering student bridging business analysis and software engineering.",
};

const pillars = [
  {
    title: "Information Systems",
    text: "Trained to see a company as a network of processes and data flows, not just a codebase — coursework in IS governance and enterprise architecture at ENSIASD.",
  },
  {
    title: "Digital Transformation",
    text: "Experience turning manual, paper-based workflows into structured digital processes, from an academic ERP project to production EdTech features.",
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
    title: "Agile, Leadership & Problem Solving",
    text: "Delivered features under Agile/CI-CD discipline across four internships, while independently shipping two Web3 projects outside any curriculum.",
  },
];

export default function AboutPage() {
  return (
    <section className="px-6 pt-40 pb-28">
      <div className="mx-auto max-w-4xl">
        <SectionHeading eyebrow="About" title="Two ways of solving the same problem." />

        <Reveal delay={0.1}>
          <p className="mt-8 text-lg text-ink-muted leading-relaxed">{profile.summary}</p>
        </Reveal>

        <Reveal delay={0.16}>
          <p className="mt-5 text-ink-muted leading-relaxed">
            Most engineering portfolios show only the code. Mine is built on a simple premise: the code is
            the easy part to prove. What's harder to show — and what a consulting firm actually screens
            for — is whether you can sit in a client workshop, structure what you hear into a requirement,
            and know when the answer is a process fix rather than a feature request. This site tries to
            show both halves honestly, using only what I've actually built and shipped.
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
