import Image from "next/image";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Download, FolderKanban, Github, Linkedin, Mail, MapPin } from "lucide-react";
import RoleTyping from "@/components/RoleTyping";
import { journey } from "@/lib/journey";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import ProjectCard from "@/components/ProjectCard";
import Counter from "@/components/Counter";
import { profile, projects, experience, consultingCompetencies, workedWith, highlights, approach } from "@/lib/data";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function HomePage() {
  const featured = projects.filter((p) => p.featured).slice(0, 3);
  const latest = experience.slice(0, 3);

  return (
    <>
      {/* ---------------- HERO ---------------- */}
      <section className="relative pt-36 sm:pt-40 pb-20 px-6">
        <div className="mx-auto max-w-6xl grid lg:grid-cols-[1.15fr_0.85fr] gap-14 lg:gap-16 items-center">
          <div>
            <Reveal>
              <div className="flex flex-wrap items-center gap-4">
              <Image
                src={profile.photo}
                alt="Portrait of Mohamed Merouane"
                width={200}
                height={200}
                priority
                className="h-20 w-20 rounded-full object-cover ring-2 ring-accent/50 ring-offset-4 ring-offset-bg"
              />
              <span className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3 py-1.5 font-mono text-[11px] tracking-[0.14em] uppercase text-accent">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60 animate-ping" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                </span>
                Available for a 6-month PFE · Jan 2027
              </span>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <h1 className="mt-6 text-5xl sm:text-7xl font-semibold tracking-tight leading-[1.02] text-balance">
                <span className="text-ink">Mohamed</span>{" "}
                <span className="bg-gradient-to-r from-accent via-sky-300 to-primary bg-clip-text text-transparent">Merouane</span>
              </h1>
            </Reveal>

            <Reveal delay={0.14}>
              <p className="mt-5 text-xl sm:text-2xl font-mono text-ink-muted min-h-[2.25rem]">
                <span className="text-ink-faint">&gt; </span>
                <RoleTyping roles={profile.roles} />
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="mt-6 text-ink-muted text-lg leading-relaxed max-w-xl">
                Final-year Information Systems engineering student at ENSIASD. {profile.tagline}
              </p>
            </Reveal>

            <Reveal delay={0.26}>
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
                  <FolderKanban size={16} /> See projects
                </Link>
                <div className="flex items-center gap-1 sm:ml-2">
                  {[
                    { href: profile.linkedin, icon: Linkedin, label: "LinkedIn" },
                    { href: profile.github, icon: Github, label: "GitHub" },
                    { href: `mailto:${profile.email}`, icon: Mail, label: "Email" },
                  ].map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      aria-label={s.label}
                      target={s.href.startsWith("http") ? "_blank" : undefined}
                      rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="grid h-11 w-11 place-items-center rounded-lg text-ink-muted hover:text-accent hover:bg-accent/10 transition-colors"
                    >
                      <s.icon size={18} />
                    </a>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.32}>
              <p className="mt-6 inline-flex items-center gap-2 text-xs text-ink-faint font-mono">
                <MapPin size={13} /> {profile.location} · {profile.mobility}
              </p>
            </Reveal>
          </div>

          {/* Signature element: a "spec panel" — case-file styling that speaks the consultant's own language */}
          <Reveal delay={0.2} y={22}>
            <div className="relative">
              <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-primary/20 blur-3xl" aria-hidden />
              <div className="glass rounded-2xl overflow-hidden shadow-glow">
                <div className="flex items-center gap-1.5 px-4 py-3 border-b border-border-soft">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#ef4444]/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#f59e0b]/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#22c55e]/70" />
                  <span className="ml-3 font-mono text-[11px] text-ink-faint">candidate-profile.yaml</span>
                </div>
                <div className="p-6 font-mono text-[13px] leading-7 overflow-x-auto">
                  <p><span className="text-ink-faint">candidate:</span> <span className="text-ink">Mohamed Merouane</span></p>
                  <p><span className="text-ink-faint">degree:</span> <span className="text-ink">Engineering, IS Management &amp; Governance</span></p>
                  <p><span className="text-ink-faint">status:</span> <span className="text-emerald-400">available</span> <span className="text-ink-faint"># PFE · 6 months · Jan 2027</span></p>
                  <p className="mt-3"><span className="text-ink-faint">tracks:</span></p>
                  <p className="pl-4 text-ink">- business_analysis <span className="text-ink-faint">/ AMOA</span></p>
                  <p className="pl-4 text-ink">- erp_consulting <span className="text-ink-faint">/ Odoo</span></p>
                  <p className="pl-4 text-ink">- full_stack_engineering</p>
                  <p className="mt-3"><span className="text-ink-faint">shipped_at:</span></p>
                  {latest.map((e) => (
                    <p key={e.company} className="pl-4 text-ink">
                      ✓ {e.company.split(" — ")[0]} <span className="text-ink-faint">{e.period.split(" – ")[0]}</span>
                    </p>
                  ))}
                  <p className="mt-3"><span className="text-ink-faint">stack:</span> <span className="text-accent">[React, Next.js, NestJS, Django, PostgreSQL, Docker]</span></p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Key numbers */}
        <Reveal delay={0.38}>
          <div className="mx-auto max-w-6xl mt-16 grid grid-cols-3 rounded-2xl glass divide-x divide-border-soft">
            {highlights.map((h) => (
              <div key={h.label} className="px-4 sm:px-8 py-6 text-center sm:text-left">
                <p className="text-3xl sm:text-4xl font-semibold text-ink font-mono">
                  <Counter to={h.value} suffix={h.suffix} />
                </p>
                <p className="text-[11px] sm:text-xs text-ink-muted mt-1.5 leading-snug">{h.label}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* ---------------- WORKED WITH ---------------- */}
      <section className="px-6 pb-8">
        <div className="mx-auto max-w-6xl">
          <p className="eyebrow text-center !text-ink-faint">Delivered work for</p>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-x-10 gap-y-3">
            {workedWith.map((w) => (
              <span key={w} className="text-lg sm:text-xl font-semibold tracking-tight text-ink-muted/80 hover:text-ink transition-colors">
                {w}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- APPROACH ---------------- */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="How I work"
            title="From the business need to software people actually use"
            description="Most projects fail between the meeting room and the code. I cover the whole path, so nothing gets lost in translation."
          />
          <ol className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-4 relative">
            <div className="hidden lg:block absolute top-9 left-[12%] right-[12%] h-px bg-gradient-to-r from-accent/0 via-accent/50 to-accent/0" aria-hidden />
            {approach.map((a, i) => (
              <Reveal key={a.step} delay={i * 0.07}>
                <li className="relative glass rounded-xl p-5 h-full">
                  <span className="grid h-9 w-9 place-items-center rounded-full border border-accent/40 bg-bg font-mono text-xs text-accent">
                    {a.step}
                  </span>
                  <p className="mt-4 text-ink font-medium">{a.title}</p>
                  <p className="text-ink-muted text-sm mt-1.5 leading-relaxed">{a.text}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* ---------------- FEATURED PROJECTS ---------------- */}
      <section className="px-6 py-24 border-t border-border-soft">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              eyebrow="Selected work"
              title="Featured projects"
              description="An ERP process redesign, a Kubernetes delivery platform and a school platform built end-to-end — each told as problem, solution and impact, with the code to back it up."
            />
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-sm text-accent hover:gap-3 transition-all"
            >
              All {projects.length} projects <ArrowRight size={15} />
            </Link>
          </div>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {featured.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.08}>
                <ProjectCard project={p} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- CONSULTANT SI STRIP ---------------- */}
      <section className="px-6 py-24 border-t border-border-soft">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Consultant SI foundations"
            title="Business analysis and IS consulting skills"
            description="Alongside development, my training and internships cover process analysis, requirements, functional specifications and working with business stakeholders."
          />
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {consultingCompetencies.slice(0, 6).map((c, i) => (
              <Reveal key={c.label} delay={i * 0.05}>
                <div className="glass rounded-xl p-5 h-full hover:border-accent/30 transition-colors">
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

      {/* ---------------- JOURNEY ---------------- */}
      <section className="px-6 py-24 border-t border-border-soft">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Journey"
            title="Behind the CV, in real photos"
            description="Internships, events and milestones, each with a short story."
          />
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {journey.slice(0, 3).map((p, i) => (
              <Reveal key={p.slug} delay={i * 0.06}>
                <Link href={`/journey/${p.slug}`} className="group block overflow-hidden rounded-2xl border border-border-soft bg-bg-elevated hover:border-accent/40 transition-colors h-full">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image src={p.cover.src} alt={p.cover.alt} fill sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
                  </div>
                  <div className="p-5">
                    <p className="font-mono text-[11px] uppercase tracking-wide"><span className="text-accent">{p.category}</span> <span className="text-ink-faint">· {p.dateLabel}</span></p>
                    <p className="mt-2 text-ink font-medium group-hover:text-accent transition-colors text-balance">{p.title}</p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.2}>
            <Link href="/journey" className="mt-8 inline-flex items-center gap-2 text-sm text-accent hover:gap-3 transition-all">
              See the whole journey <ArrowRight size={15} />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ---------------- CTA ---------------- */}
      <section className="px-6 pb-20">
        <Reveal>
          <div className="mx-auto max-w-6xl glass rounded-2xl px-8 py-14 text-center bg-radial-glow">
            <h2 className="text-3xl sm:text-4xl font-semibold text-ink text-balance">
              Looking for a PFE intern who can talk to the business and ship the code?
            </h2>
            <p className="mt-4 text-ink-muted max-w-xl mx-auto">
              Available for a 6-month internship from January 2027 — Business Analyst, Consultant SI / ERP or Full-Stack Software Engineering.
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
