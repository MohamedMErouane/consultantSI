import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Download, FolderKanban } from "lucide-react";
import RoleTyping from "@/components/RoleTyping";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import ProjectCard from "@/components/ProjectCard";
import Counter from "@/components/Counter";
import Badge from "@/components/Badge";
import { profile, projects, experience, consultingCompetencies, targetCompanies } from "@/lib/data";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function HomePage() {
  const featured = projects.filter((p) => p.featured).slice(0, 3);

  return (
    <>
      {/* ---------------- HERO ---------------- */}
      <section className="relative pt-40 pb-28 px-6">
        <div className="mx-auto max-w-6xl grid lg:grid-cols-[1.1fr_0.9fr] gap-16 items-center">
          <div>
            <Reveal>
              <span className="eyebrow inline-flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
                Open to PFE — starting January 2027
              </span>
            </Reveal>

            <Reveal delay={0.08}>
              <h1 className="mt-5 text-4xl sm:text-6xl font-semibold tracking-tight text-ink leading-[1.08] text-balance">
                Information Systems <br className="hidden sm:block" />
                Engineering Student
              </h1>
            </Reveal>

            <Reveal delay={0.14}>
              <p className="mt-5 text-2xl sm:text-3xl font-mono text-ink-muted h-10">
                <RoleTyping roles={profile.roles} />
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="mt-6 text-ink-muted text-lg leading-relaxed max-w-xl">
                {profile.tagline}
              </p>
            </Reveal>

            <Reveal delay={0.28}>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <Link
                  href="/resume"
                  className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-medium text-white shadow-glow hover:bg-primary-dim transition-colors"
                >
                  <Download size={16} /> Download CV
                </Link>
                <Link
                  href="/projects"
                  className="inline-flex items-center gap-2 rounded-lg border border-border px-5 py-3 text-sm font-medium text-ink hover:border-accent/50 hover:text-accent transition-colors"
                >
                  <FolderKanban size={16} /> See Projects
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-5 py-3 text-sm font-medium text-ink-muted hover:text-ink transition-colors"
                >
                  Contact Me <ArrowRight size={16} />
                </Link>
              </div>
            </Reveal>

            <Reveal delay={0.34}>
              <div className="mt-14 grid grid-cols-3 max-w-md gap-6 font-mono">
                <div>
                  <p className="text-2xl text-ink font-semibold">
                    <Counter to={experience.length} />
                  </p>
                  <p className="text-xs text-ink-faint mt-1">Work experiences</p>
                </div>
                <div>
                  <p className="text-2xl text-ink font-semibold">
                    <Counter to={projects.length} />
                  </p>
                  <p className="text-xs text-ink-faint mt-1">Shipped projects</p>
                </div>
                <div>
                  <p className="text-2xl text-ink font-semibold">
                    Jan 2027
                  </p>
                  <p className="text-xs text-ink-faint mt-1">PFE target</p>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Signature element: a "spec panel" — case-file styling that speaks the consultant's own language */}
          <Reveal delay={0.2} y={22}>
            <div className="glass rounded-2xl overflow-hidden shadow-glow">
              <div className="flex items-center gap-1.5 px-4 py-3 border-b border-border-soft">
                <span className="h-2.5 w-2.5 rounded-full bg-[#ef4444]/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#f59e0b]/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#22c55e]/70" />
                <span className="ml-3 font-mono text-[11px] text-ink-faint">candidate-profile.spec</span>
              </div>
              <div className="p-6 font-mono text-[13px] leading-7">
                <p><span className="text-ink-faint">project:</span> <span className="text-ink">"PFE — Consultant SI"</span></p>
                <p><span className="text-ink-faint">candidate:</span> <span className="text-ink">"Mohamed Merouane"</span></p>
                <p><span className="text-ink-faint">status:</span> <span className="text-accent">"available"</span></p>
                <p className="mt-3"><span className="text-ink-faint">stakeholders:</span></p>
                <p className="pl-4 text-ink">- business_analysis</p>
                <p className="pl-4 text-ink">- software_engineering</p>
                <p className="pl-4 text-ink">- digital_transformation</p>
                <p className="mt-3"><span className="text-ink-faint">requirements:</span></p>
                <p className="pl-4 text-ink">✓ BPMN / UML modeling</p>
                <p className="pl-4 text-ink">✓ ERP &amp; functional specs</p>
                <p className="pl-4 text-ink">✓ React · Django · NestJS</p>
                <p className="mt-3 text-ink-faint">// last updated: {profile.lastUpdated}</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------------- TARGET COMPANIES MARQUEE ---------------- */}
      <section className="border-y border-border-soft py-6 overflow-hidden">
        <Reveal>
          <p className="text-center eyebrow mb-4">Preparing for opportunities at</p>
        </Reveal>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3 px-6 max-w-5xl mx-auto">
          {targetCompanies.map((c) => (
            <span key={c} className="text-ink-faint text-sm font-medium tracking-wide">
              {c}
            </span>
          ))}
        </div>
      </section>

      {/* ---------------- CONSULTANT SI STRIP ---------------- */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Consultant SI Foundations"
            title="Business analysis and IS consulting skills"
            description="Alongside development work, my training and internships cover process analysis, requirements gathering, functional specifications and working with business stakeholders."
          />
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {consultingCompetencies.slice(0, 6).map((c, i) => (
              <Reveal key={c.label} delay={i * 0.05}>
                <div className="glass rounded-xl p-5 h-full">
                  <p className="text-ink font-medium">{c.label}</p>
                  <p className="text-ink-muted text-sm mt-1.5 leading-relaxed">{c.detail}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.2}>
            <Link
              href="/skills"
              className="mt-8 inline-flex items-center gap-2 text-sm text-accent hover:gap-3 transition-all"
            >
              View full skill set <ArrowRight size={15} />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ---------------- FEATURED PROJECTS ---------------- */}
      <section className="px-6 py-24 border-t border-border-soft">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Selected Work"
            title="Featured projects"
            description="An academic ERP system, a cybersecurity compliance study and production EdTech features — functional design, regulatory analysis and full-stack execution."
          />
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {featured.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.08}>
                <ProjectCard project={p} />
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.2}>
            <Link
              href="/projects"
              className="mt-8 inline-flex items-center gap-2 text-sm text-accent hover:gap-3 transition-all"
            >
              View all projects <ArrowRight size={15} />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ---------------- CTA ---------------- */}
      <section className="px-6 pb-28">
        <Reveal>
          <div className="mx-auto max-w-6xl glass rounded-2xl px-8 py-14 text-center bg-radial-glow">
            <h2 className="text-3xl sm:text-4xl font-semibold text-ink text-balance">
              Looking for a PFE intern in IS consulting or software engineering?
            </h2>
            <p className="mt-4 text-ink-muted max-w-xl mx-auto">
              Available for a Final Year Internship starting January 2027 — open to Consultant SI, Business Analyst, and Software Engineering tracks.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-medium text-white shadow-glow hover:bg-primary-dim transition-colors"
              >
                Get in touch <ArrowRight size={16} />
              </Link>
              <Link
                href="/resume"
                className="inline-flex items-center gap-2 rounded-lg border border-border px-6 py-3 text-sm font-medium text-ink hover:border-accent/50 hover:text-accent transition-colors"
              >
                <Download size={16} /> Download CV
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
