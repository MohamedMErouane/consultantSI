// Experience, Projects, Skills, Education, Certifications and Resume pages, in both languages.
import { BadgeCheck, CircleDashed, Clock, Download, ExternalLink, FileText } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import Badge from "@/components/Badge";
import Timeline, { type TimelineEntry } from "@/components/Timeline";
import ProjectsExplorer from "@/components/ProjectsExplorer";
import { getContent } from "@/lib/content";
import { getProjects } from "@/lib/projects";
import { cn } from "@/lib/cn";
import type { Lang } from "@/lib/i18n";

/* ---------------- Experience ---------------- */

export const experienceMeta = {
  en: { title: "Experience", description: "Professional experience — internships and a full-stack developer role in web development, AI-assisted development and enterprise systems." },
  fr: { title: "Expérience", description: "Expérience professionnelle de Mohamed Merouane : stages et mission freelance en développement web, développement assisté par l'IA et systèmes d'entreprise." },
};

export function ExperienceView({ lang }: { lang: Lang }) {
  const { experience } = getContent(lang);
  const items: TimelineEntry[] = experience.map((e) => ({
    title: e.role, subtitle: e.company, period: e.period, location: e.location, bullets: e.bullets, tags: e.tags,
  }));
  const fr = lang === "fr";
  return (
    <section className="px-6 pt-40 pb-28">
      <div className="mx-auto max-w-3xl">
        <SectionHeading
          as="h1"
          eyebrow={fr ? "Carrière" : "Career"}
          title={experienceMeta[lang].title}
          description={
            fr
              ? "Six expériences depuis 2023 : cinq stages et une mission freelance, dans les opérations portuaires publiques, l'EdTech, l'e-commerce Web3, les logiciels RH et le mobile."
              : "Six experiences since 2023: five internships and a freelance engagement, across public-sector port operations, EdTech, Web3 e-commerce, HR software and mobile."
          }
        />
        <div className="mt-14">
          <Timeline items={items} />
        </div>
      </div>
    </section>
  );
}

/* ---------------- Projects ---------------- */

export const projectsMeta = {
  en: { title: "Projects", description: "Case studies by Mohamed Merouane: an Odoo ERP process redesign, a Kubernetes platform, a school-management platform built solo, enterprise apps at Marsa Maroc, Web3 and real-time projects." },
  fr: { title: "Projets", description: "Études de cas de Mohamed Merouane : refonte de processus sur Odoo, plateforme Kubernetes, plateforme scolaire conçue seul, applications chez Marsa Maroc, projets Web3 et temps réel." },
};

export function ProjectsView({ lang }: { lang: Lang }) {
  const fr = lang === "fr";
  return (
    <section className="px-6 pt-40 pb-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          as="h1"
          eyebrow={fr ? "Réalisations" : "Work"}
          title={projectsMeta[lang].title}
          description={
            fr
              ? "Chaque projet est présenté comme le documenterait un Consultant SI : d'abord le problème métier, puis la solution, puis l'impact. Ouvrez une carte pour l'étude de cas complète."
              : "Each project is framed the way a Consultant SI would document it: the business problem first, then the solution, then the impact. Open any card for the full case study."
          }
        />
        <div className="mt-12">
          <ProjectsExplorer projects={getProjects(lang)} lang={lang} />
        </div>
      </div>
    </section>
  );
}

/* ---------------- Skills ---------------- */

export const skillsMeta = {
  en: { title: "Skills", description: "Consulting competencies and engineering skills — from business process modeling to full-stack development." },
  fr: { title: "Compétences", description: "Compétences en conseil SI et en ingénierie logicielle : de la modélisation des processus métier au développement full-stack." },
};

export function SkillsView({ lang }: { lang: Lang }) {
  const fr = lang === "fr";
  const { engineeringSkills, engineeringGroupLabels, consultingCompetencies, coreAreas } = getContent(lang);
  return (
    <section className="px-6 pt-40 pb-28">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          as="h1"
          eyebrow={fr ? "Cartographie" : "Capability Map"}
          title={skillsMeta[lang].title}
          description={fr ? "Compétences en conseil SI et en ingénierie logicielle, présentées séparément." : "Consulting competencies and software engineering skills, listed separately."}
        />

        <Reveal delay={0.1}>
          <div className="mt-14 glass rounded-2xl p-7 sm:p-9">
            <h2 className="eyebrow mb-6">{fr ? "Domaines clés" : "Core areas"}</h2>
            <div className="flex flex-wrap gap-2">
              {coreAreas.map((a) => <Badge key={a}>{a}</Badge>)}
            </div>
          </div>
        </Reveal>

        <div className="mt-16">
          <h2 className="eyebrow mb-6">{fr ? "Compétences Consultant SI" : "Consultant SI competencies"}</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {consultingCompetencies.map((c, i) => (
              <Reveal key={c.label} delay={i * 0.04}>
                <div className="glass rounded-xl p-5 h-full">
                  <p className="text-ink font-medium text-sm">{c.label}</p>
                  <p className="text-ink-muted text-xs mt-1.5 leading-relaxed">{c.detail}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mt-16">
          <h2 className="eyebrow mb-6">{fr ? "Stack d'ingénierie logicielle" : "Software engineering stack"}</h2>
          <div className="glass rounded-2xl p-7 sm:p-9 grid sm:grid-cols-2 gap-8">
            {Object.entries(engineeringSkills).map(([key, list]) => (
              <div key={key}>
                <p className="text-sm text-ink-muted mb-3">{engineeringGroupLabels[key] ?? key}</p>
                <div className="flex flex-wrap gap-2">
                  {list.map((s) => <Badge key={s} variant="accent">{s}</Badge>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Education ---------------- */

export const educationMeta = {
  en: { title: "Education", description: "Engineering degree in Information Systems Management & Governance at ENSIASD, Morocco, preceded by a DUT in computer science." },
  fr: { title: "Formation", description: "Cycle ingénieur en Management et Gouvernance des Systèmes d'Information à l'ENSIASD (Maroc), après un DUT en Génie Informatique." },
};

export function EducationView({ lang }: { lang: Lang }) {
  const fr = lang === "fr";
  const { education } = getContent(lang);
  return (
    <section className="px-6 pt-40 pb-28">
      <div className="mx-auto max-w-3xl">
        <SectionHeading
          as="h1"
          eyebrow={fr ? "Parcours académique" : "Academic Path"}
          title={educationMeta[lang].title}
          description={
            fr
              ? "Un cycle ingénieur en management et gouvernance des systèmes d'information, précédé d'un DUT en informatique."
              : "An engineering degree in information systems management and governance, preceded by a DUT in computer science."
          }
        />
        <div className="mt-14 space-y-6">
          {education.map((e, i) => (
            <Reveal key={e.school} delay={i * 0.08}>
              <div className="glass rounded-2xl p-6 sm:p-8">
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h2 className="text-lg font-semibold text-ink">{e.degree}</h2>
                  <span className="font-mono text-xs text-accent">{e.period}</span>
                </div>
                <p className="text-sm text-ink-muted mt-1">{e.school} — {e.location}</p>
                {e.details.length > 0 && (
                  <ul className="mt-4 space-y-1.5">
                    {e.details.map((d) => (
                      <li key={d} className="text-sm text-ink-muted leading-relaxed flex gap-2">
                        <span className="mt-1.5 h-1 w-1 rounded-full bg-accent shrink-0" />
                        {d}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Certifications ---------------- */

export const certificationsMeta = {
  en: { title: "Certifications", description: "Professional certificates from Meta, IBM, Princeton and the University at Buffalo, plus Odoo and ITIL in progress." },
  fr: { title: "Certifications", description: "Certificats professionnels Meta, IBM, Princeton et University at Buffalo, avec Odoo et ITIL en cours." },
};

export function CertificationsView({ lang }: { lang: Lang }) {
  const fr = lang === "fr";
  const { certifications } = getContent(lang);
  const statusMeta = {
    completed: { label: fr ? "Obtenue" : "Completed", icon: BadgeCheck, className: "text-accent border-accent/30 bg-accent/10" },
    "in-progress": { label: fr ? "En cours" : "In progress", icon: Clock, className: "text-primary border-primary/30 bg-primary/10" },
    planned: { label: fr ? "Prévue" : "Planned", icon: CircleDashed, className: "text-ink-muted border-border bg-bg-panel/60" },
  } as const;
  return (
    <section className="px-6 pt-40 pb-28">
      <div className="mx-auto max-w-3xl">
        <SectionHeading
          as="h1"
          eyebrow={fr ? "Diplômes et certificats" : "Credentials"}
          title={certificationsMeta[lang].title}
          description={
            fr
              ? "Certificats professionnels en développement full-stack et en blockchain, avec des certifications ERP et ITIL en préparation."
              : "Professional certificates in full-stack development and blockchain, with ERP and IT service management certifications on the way."
          }
        />
        <div className="mt-14 space-y-4">
          {certifications.map((c, i) => {
            const meta = statusMeta[c.status];
            const Icon = meta.icon;
            return (
              <Reveal key={c.name} delay={i * 0.06}>
                <div className="glass rounded-xl p-5 sm:p-6 flex items-start justify-between gap-4">
                  <div>
                    <p className="text-ink font-medium">{c.name}</p>
                    <p className="text-sm text-ink-muted mt-1">{c.issuer}{c.year ? ` · ${c.year}` : ""}</p>
                  </div>
                  <span className={cn("shrink-0 inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-mono", meta.className)}>
                    <Icon size={13} />
                    {meta.label}
                  </span>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Resume ---------------- */

export const resumeMeta = {
  en: { title: "Resume", description: "Download Mohamed Merouane's CV — IS / ERP Consultant and Full-Stack Developer, in French and English." },
  fr: { title: "CV", description: "Téléchargez le CV de Mohamed Merouane : Consultant SI / ERP et Développeur Full-Stack, en français et en anglais." },
};

const cvs = [
  { title: "Consultant SI / ERP — Business Analyst", lang: "FR", href: "/cv-consultant-si-fr.pdf", note: "Odoo 17, BPMN, analyse fonctionnelle, recette, conduite du changement" },
  { title: "IS / ERP Consultant — Business Analyst", lang: "EN", href: "/cv-consultant-si-en.pdf", note: "Odoo 17, BPMN, functional analysis, UAT, change management" },
  { title: "Développeur Full-Stack", lang: "FR", href: "/cv-full-stack-fr.pdf", note: "React, Next.js, NestJS, Django, Docker, Kubernetes" },
  { title: "Full-Stack Developer", lang: "EN", href: "/cv-full-stack-en.pdf", note: "React, Next.js, TypeScript, Node.js, Django, Kubernetes" },
];

export function ResumeView({ lang }: { lang: Lang }) {
  const fr = lang === "fr";
  // French visitors see the French CVs first.
  const ordered = fr ? [...cvs].sort((a, b) => (a.lang === b.lang ? 0 : a.lang === "FR" ? -1 : 1)) : cvs;
  const preview = fr ? "/cv-full-stack-fr.pdf" : "/cv-full-stack-en.pdf";
  return (
    <section className="px-6 pt-40 pb-28">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          as="h1"
          eyebrow={fr ? "Curriculum vitae" : "Résumé"}
          title={resumeMeta[lang].title}
          description={
            fr
              ? "Choisissez la version adaptée au poste. Les quatre tiennent sur une page et sont lisibles par les ATS."
              : "Pick the version that matches your role. All four are one page and ATS-friendly."
          }
        />
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {ordered.map((cv, i) => (
            <Reveal key={cv.href} delay={0.06 * i}>
              <div className="glass rounded-xl p-5 h-full flex flex-col">
                <div className="flex items-start justify-between gap-3">
                  <FileText size={20} className="text-accent" />
                  <span className="rounded-full border border-border px-2 py-0.5 font-mono text-[10px] text-ink-muted">{cv.lang}</span>
                </div>
                <p className="mt-4 text-ink font-medium">{cv.title}</p>
                <p className="mt-1 text-xs text-ink-muted flex-1">{cv.note}</p>
                <div className="mt-5 flex items-center gap-2">
                  <a href={cv.href} download className="inline-flex items-center gap-1.5 rounded-lg bg-primary px-3.5 py-2 text-xs font-medium text-white hover:bg-primary-dim transition-colors">
                    <Download size={14} /> {fr ? "Télécharger" : "Download"}
                  </a>
                  <a href={cv.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 rounded-lg border border-border px-3.5 py-2 text-xs text-ink hover:border-accent/50 hover:text-accent transition-colors">
                    <ExternalLink size={14} /> {fr ? "Ouvrir" : "Open"}
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.18}>
          <div className="mt-10 glass rounded-2xl overflow-hidden hidden sm:block">
            <iframe src={preview} title={fr ? "Mohamed Merouane — CV" : "Mohamed Merouane — Resume"} className="w-full h-[85vh] bg-white" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
