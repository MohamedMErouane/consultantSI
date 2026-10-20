import Link from "next/link";
import { ArrowRight, GraduationCap, BadgeCheck, FileText } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import { getContent } from "@/lib/content";
import { projects } from "@/lib/projects";
import { type Lang, localePath } from "@/lib/i18n";

const T = {
  en: {
    eyebrow: "About",
    title: "Information systems consulting and software development",
    why: "I am applying for PFE positions in two directions: Consultant SI / Business Analyst, and Software Engineer / Full-Stack Developer. This is intentional. My degree focuses on information systems management and governance, while most of my professional experience has been in development. This site presents both sides, using only projects and experience I have actually worked on.",
    pillars: (n: number) => [
      { title: "Information Systems", text: "Trained to see a company as a network of processes and data flows, not just a codebase — coursework in IT governance and change management (conduite du changement) at ENSIASD." },
      { title: "Digital Transformation", text: "Designing information systems around existing business processes, from an Odoo purchasing-process redesign to an EdTech platform built end to end." },
      { title: "Business Analysis", text: "Comfortable translating a vague business need into functional specifications, requirements, and BPMN/UML models a technical team can build from." },
      { title: "Software Engineering", text: "Full-stack delivery across React, Next.js, Django and NestJS — from a Moroccan EdTech startup to enterprise applications at a public port authority." },
      { title: "ERP & IT Governance", text: "ERP process design on Odoo 17 and a cybersecurity governance framework (MCGL) mapped to NIST CSF, GDPR and ISO 27001." },
      { title: "Delivery & Independent Work", text: `Worked in Agile sprints at EtudiaLab and Marsa Maroc, and delivered a blockchain gaming platform under a freelance contract. ${n} projects in total are listed on the Projects page.` },
    ],
    links: ["Education", "Certifications", "Resume"],
  },
  fr: {
    eyebrow: "À propos",
    title: "Conseil en systèmes d'information et développement logiciel",
    why: "Je candidate à des PFE dans deux directions : Consultant SI / Business Analyst, et Ingénieur logiciel / Développeur full-stack. C'est un choix assumé. Ma formation porte sur le management et la gouvernance des systèmes d'information, tandis que l'essentiel de mon expérience professionnelle est en développement. Ce site présente les deux facettes, avec uniquement des projets et des expériences sur lesquels j'ai réellement travaillé.",
    pillars: (n: number) => [
      { title: "Systèmes d'information", text: "Formé à voir une entreprise comme un réseau de processus et de flux de données, pas seulement comme du code : gouvernance des SI et conduite du changement à l'ENSIASD." },
      { title: "Transformation digitale", text: "Concevoir des systèmes d'information autour des processus métier existants, d'une refonte du processus achats sur Odoo à une plateforme EdTech conçue de bout en bout." },
      { title: "Business analysis", text: "À l'aise pour traduire un besoin métier flou en spécifications fonctionnelles, exigences et modèles BPMN/UML exploitables par une équipe technique." },
      { title: "Ingénierie logicielle", text: "Livraison full-stack avec React, Next.js, Django et NestJS : d'une startup EdTech marocaine aux applications d'entreprise d'une autorité portuaire publique." },
      { title: "ERP et gouvernance des SI", text: "Conception de processus ERP sur Odoo 17 et référentiel de gouvernance cybersécurité (MCGL) aligné sur le NIST CSF, le RGPD et l'ISO 27001." },
      { title: "Livraison et autonomie", text: `Travail en sprints Agile chez EtudiaLab et Marsa Maroc, et livraison d'une plateforme de jeux blockchain en freelance. ${n} projets au total sont présentés sur la page Projets.` },
    ],
    links: ["Formation", "Certifications", "CV"],
  },
};

export default function AboutView({ lang }: { lang: Lang }) {
  const t = T[lang];
  const { profile } = getContent(lang);
  const pillars = t.pillars(projects.length);
  const links = [
    { href: "/education", label: t.links[0], icon: GraduationCap },
    { href: "/certifications", label: t.links[1], icon: BadgeCheck },
    { href: "/resume", label: t.links[2], icon: FileText },
  ];

  return (
    <section className="px-6 pt-40 pb-28">
      <div className="mx-auto max-w-4xl">
        <SectionHeading as="h1" eyebrow={t.eyebrow} title={t.title} />

        <Reveal delay={0.1}>
          <p className="mt-8 text-lg text-ink-muted leading-relaxed">{profile.summary}</p>
        </Reveal>

        <Reveal delay={0.16}>
          <p className="mt-5 text-ink-muted leading-relaxed">{t.why}</p>
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

        <div className="mt-12 grid sm:grid-cols-3 gap-4">
          {links.map((l) => (
            <Link
              key={l.href}
              href={localePath(lang, l.href)}
              className="group glass rounded-xl px-5 py-4 flex items-center justify-between text-sm text-ink hover:border-accent/40 transition-colors"
            >
              <span className="flex items-center gap-3">
                <l.icon size={17} className="text-accent" /> {l.label}
              </span>
              <ArrowRight size={15} className="text-ink-faint group-hover:text-accent group-hover:translate-x-0.5 transition-all" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
