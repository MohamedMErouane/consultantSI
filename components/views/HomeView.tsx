import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Download, FolderKanban, Github, Linkedin, Mail, MapPin } from "lucide-react";
import RoleTyping from "@/components/RoleTyping";
import { getJourney } from "@/lib/journey";
import { getProjects } from "@/lib/projects";
import { getContent } from "@/lib/content";
import { type Lang, localePath } from "@/lib/i18n";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import ProjectCard from "@/components/ProjectCard";
import Counter from "@/components/Counter";

const T = {
  en: {
    photoAlt: "Portrait of Mohamed Merouane", available: "Available for a 6-month PFE · Jan 2027",
    intro: "Final-year Information Systems engineering student at ENSIASD.", download: "Download CV", seeProjects: "See projects",
    degree: "Engineering, IS Management & Governance", statusNote: "# PFE · 6 months · Jan 2027", available2: "available",
    workedFor: "Delivered work for",
    howEyebrow: "How I work", howTitle: "From the business need to software people actually use",
    howDesc: "Most projects fail between the meeting room and the code. I cover the whole path, so nothing gets lost in translation.",
    selEyebrow: "Selected work", selTitle: "Featured projects",
    selDesc: "An ERP process redesign, a Kubernetes delivery platform and a school platform built end-to-end — each told as problem, solution and impact, with the code to back it up.",
    allProjects: (n: number) => `All ${n} projects`,
    csEyebrow: "Consultant SI foundations", csTitle: "Business analysis and IS consulting skills",
    csDesc: "Alongside development, my training and internships cover process analysis, requirements, functional specifications and working with business stakeholders.",
    fullSkills: "View full skill set",
    jEyebrow: "Journey", jTitle: "Behind the CV, in real photos", jDesc: "Internships, events and milestones, each with a short story.", jAll: "See the whole journey",
    ctaTitle: "Looking for a PFE intern who can talk to the business and ship the code?",
    ctaText: "Available for a 6-month internship from January 2027 — Business Analyst, Consultant SI / ERP or Full-Stack Software Engineering.",
    contact: "Get in touch",
  },
  fr: {
    photoAlt: "Portrait de Mohamed Merouane", available: "Disponible pour un PFE de 6 mois · janv. 2027",
    intro: "Élève ingénieur en dernière année en Systèmes d'Information à l'ENSIASD.", download: "Télécharger le CV", seeProjects: "Voir les projets",
    degree: "Ingénieur, Management & Gouvernance des SI", statusNote: "# PFE · 6 mois · janv. 2027", available2: "disponible",
    workedFor: "Ils m'ont fait confiance",
    howEyebrow: "Ma méthode", howTitle: "Du besoin métier au logiciel vraiment utilisé",
    howDesc: "La plupart des projets échouent entre la salle de réunion et le code. Je couvre tout le parcours, pour que rien ne se perde en route.",
    selEyebrow: "Sélection", selTitle: "Projets phares",
    selDesc: "Une refonte de processus sur ERP, une plateforme de livraison Kubernetes et une plateforme scolaire conçue de bout en bout : chacun présenté en problème, solution et impact, avec le code à l'appui.",
    allProjects: (n: number) => `Les ${n} projets`,
    csEyebrow: "Socle Consultant SI", csTitle: "Business analysis et conseil en SI",
    csDesc: "En plus du développement, ma formation et mes stages couvrent l'analyse des processus, le recueil des besoins, les spécifications fonctionnelles et le travail avec les équipes métier.",
    fullSkills: "Voir toutes les compétences",
    jEyebrow: "Parcours", jTitle: "Derrière le CV, en vraies photos", jDesc: "Stages, événements et étapes clés, chacun avec une courte histoire.", jAll: "Voir tout le parcours",
    ctaTitle: "Vous cherchez un stagiaire PFE qui sait parler au métier et livrer le code ?",
    ctaText: "Disponible pour un stage de 6 mois à partir de janvier 2027 : Business Analyst, Consultant SI / ERP ou ingénierie logicielle full-stack.",
    contact: "Me contacter",
  },
};

const journeyCat = { Internship: "Stage", Event: "Événement", Milestone: "Étape clé", Hackathon: "Hackathon" } as const;

export default function HomeView({ lang }: { lang: Lang }) {
  const t = T[lang];
  const L = (p: string) => localePath(lang, p);
  const { profile, experience, consultingCompetencies, workedWith, highlights, approach } = getContent(lang);
  const projects = getProjects(lang);
  const journey = getJourney(lang);
  const featured = projects.filter((p) => p.featured).slice(0, 3);
  const latest = experience.slice(0, 3);

  return (
    <>
      {/* ---------------- HERO ---------------- */}
      <section className="relative pt-36 sm:pt-40 pb-20 px-6">
        <div className="mx-auto max-w-6xl grid lg:grid-cols-[1.15fr_0.85fr] gap-14 lg:gap-16 items-center">
          <div>
            <div>
              <div className="flex flex-wrap items-center gap-4">
              <Image
                src={profile.photo}
                alt={t.photoAlt}
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
                {t.available}
              </span>
              </div>
            </div>

            <div>
              <h1 className="mt-6 text-5xl sm:text-7xl font-semibold tracking-tight leading-[1.02] text-balance">
                <span className="text-ink">Mohamed</span>{" "}
                <span className="bg-gradient-to-r from-accent via-sky-300 to-primary bg-clip-text text-transparent">Merouane</span>
              </h1>
            </div>

            <div>
              <p className="mt-5 text-xl sm:text-2xl font-mono text-ink-muted min-h-[2.25rem]">
                <span className="text-ink-faint">&gt; </span>
                <RoleTyping roles={profile.roles} />
              </p>
            </div>

            <div>
              <p className="mt-6 text-ink-muted text-lg leading-relaxed max-w-xl">
                {t.intro} {profile.tagline}
              </p>
            </div>

            <div>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <Link
                  href={L("/resume")}
                  className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-medium text-white shadow-glow hover:bg-primary-dim transition-colors"
                >
                  <Download size={16} /> {t.download}
                </Link>
                <Link
                  href={L("/projects")}
                  className="inline-flex items-center gap-2 rounded-lg border border-border px-5 py-3 text-sm font-medium text-ink hover:border-accent/50 hover:text-accent transition-colors"
                >
                  <FolderKanban size={16} /> {t.seeProjects}
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
            </div>

            <div>
              <p className="mt-6 inline-flex items-center gap-2 text-xs text-ink-faint font-mono">
                <MapPin size={13} /> {profile.location} · {profile.mobility}
              </p>
            </div>
          </div>

          {/* Signature element: a "spec panel" — case-file styling that speaks the consultant's own language */}
          <div>
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
                  <p><span className="text-ink-faint">degree:</span> <span className="text-ink">{t.degree}</span></p>
                  <p><span className="text-ink-faint">status:</span> <span className="text-emerald-400">{t.available2}</span> <span className="text-ink-faint">{t.statusNote}</span></p>
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
          </div>
        </div>

        {/* Key numbers */}
        <div>
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
        </div>
      </section>

      {/* ---------------- WORKED WITH ---------------- */}
      <section className="px-6 pb-8">
        <div className="mx-auto max-w-6xl">
          <p className="eyebrow text-center !text-ink-faint">{t.workedFor}</p>
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
            eyebrow={t.howEyebrow}
            title={t.howTitle}
            description={t.howDesc}
          />
          <div className="relative mt-12">
          <div className="hidden lg:block absolute top-9 left-[12%] right-[12%] h-px bg-gradient-to-r from-accent/0 via-accent/50 to-accent/0" aria-hidden />
          <ol className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 relative">
            {approach.map((a, i) => (
              <Reveal key={a.step} delay={i * 0.07} as="li">
                <div className="relative glass rounded-xl p-5 h-full">
                  <span className="grid h-9 w-9 place-items-center rounded-full border border-accent/40 bg-bg font-mono text-xs text-accent">
                    {a.step}
                  </span>
                  <p className="mt-4 text-ink font-medium">{a.title}</p>
                  <p className="text-ink-muted text-sm mt-1.5 leading-relaxed">{a.text}</p>
                </div>
              </Reveal>
            ))}
          </ol>
          </div>
        </div>
      </section>

      {/* ---------------- FEATURED PROJECTS ---------------- */}
      <section className="px-6 py-24 border-t border-border-soft">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              eyebrow={t.selEyebrow}
              title={t.selTitle}
              description={t.selDesc}
            />
            <Link
              href={L("/projects")}
              className="inline-flex items-center gap-2 text-sm text-accent hover:gap-3 transition-all"
            >
              {t.allProjects(projects.length)} <ArrowRight size={15} />
            </Link>
          </div>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {featured.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.08}>
                <ProjectCard project={p} lang={lang} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- CONSULTANT SI STRIP ---------------- */}
      <section className="px-6 py-24 border-t border-border-soft">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow={t.csEyebrow}
            title={t.csTitle}
            description={t.csDesc}
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
              href={L("/skills")}
              className="mt-8 inline-flex items-center gap-2 text-sm text-accent hover:gap-3 transition-all"
            >
              {t.fullSkills} <ArrowRight size={15} />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ---------------- JOURNEY ---------------- */}
      <section className="px-6 py-24 border-t border-border-soft">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow={t.jEyebrow}
            title={t.jTitle}
            description={t.jDesc}
          />
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {journey.slice(0, 3).map((p, i) => (
              <Reveal key={p.slug} delay={i * 0.06}>
                <Link href={L(`/journey/${p.slug}`)} className="group block overflow-hidden rounded-2xl border border-border-soft bg-bg-elevated hover:border-accent/40 transition-colors h-full">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image src={p.cover.src} alt={p.cover.alt} fill sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
                  </div>
                  <div className="p-5">
                    <p className="font-mono text-[11px] uppercase tracking-wide"><span className="text-accent">{lang === "fr" ? journeyCat[p.category] : p.category}</span> <span className="text-ink-faint">· {p.dateLabel}</span></p>
                    <p className="mt-2 text-ink font-medium group-hover:text-accent transition-colors text-balance">{p.title}</p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.2}>
            <Link href={L("/journey")} className="mt-8 inline-flex items-center gap-2 text-sm text-accent hover:gap-3 transition-all">
              {t.jAll} <ArrowRight size={15} />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ---------------- CTA ---------------- */}
      <section className="px-6 pb-20">
        <Reveal>
          <div className="mx-auto max-w-6xl glass rounded-2xl px-8 py-14 text-center bg-radial-glow">
            <h2 className="text-3xl sm:text-4xl font-semibold text-ink text-balance">
              {t.ctaTitle}
            </h2>
            <p className="mt-4 text-ink-muted max-w-xl mx-auto">
              {t.ctaText}
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Link
                href={L("/contact")}
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-medium text-white shadow-glow hover:bg-primary-dim transition-colors"
              >
                {t.contact} <ArrowRight size={16} />
              </Link>
              <Link
                href={L("/resume")}
                className="inline-flex items-center gap-2 rounded-lg border border-border px-6 py-3 text-sm font-medium text-ink hover:border-accent/50 hover:text-accent transition-colors"
              >
                <Download size={16} /> {t.download}
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
