import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { Download, ExternalLink, FileText } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = pageMetadata({
  title: "Resume",
  description: "Download Mohamed Merouane's CV — IS / ERP Consultant and Full-Stack Developer, in French and English.",
  path: "/resume",
});

const cvs = [
  {
    title: "Consultant SI / ERP — Business Analyst",
    lang: "FR",
    href: "/cv-consultant-si-fr.pdf",
    note: "Odoo 17, BPMN, analyse fonctionnelle, recette, conduite du changement",
  },
  {
    title: "IS / ERP Consultant — Business Analyst",
    lang: "EN",
    href: "/cv-consultant-si-en.pdf",
    note: "Odoo 17, BPMN, functional analysis, UAT, change management",
  },
  {
    title: "Développeur Full-Stack",
    lang: "FR",
    href: "/cv-full-stack-fr.pdf",
    note: "React, Next.js, NestJS, Django, Docker, Kubernetes",
  },
  {
    title: "Full-Stack Developer",
    lang: "EN",
    href: "/cv-full-stack-en.pdf",
    note: "React, Next.js, TypeScript, Node.js, Django, Kubernetes",
  },
];

export default function ResumePage() {
  return (
    <section className="px-6 pt-40 pb-28">
      <div className="mx-auto max-w-5xl">
        <SectionHeading as="h1"
          eyebrow="Résumé"
          title="Resume"
          description="Pick the version that matches your role. All four are one page and ATS-friendly."
        />

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {cvs.map((cv, i) => (
            <Reveal key={cv.href} delay={0.06 * i}>
              <div className="glass rounded-xl p-5 h-full flex flex-col">
                <div className="flex items-start justify-between gap-3">
                  <FileText size={20} className="text-accent" />
                  <span className="rounded-full border border-border px-2 py-0.5 font-mono text-[10px] text-ink-muted">{cv.lang}</span>
                </div>
                <p className="mt-4 text-ink font-medium">{cv.title}</p>
                <p className="mt-1 text-xs text-ink-muted flex-1">{cv.note}</p>
                <div className="mt-5 flex items-center gap-2">
                  <a
                    href={cv.href}
                    download
                    className="inline-flex items-center gap-1.5 rounded-lg bg-primary px-3.5 py-2 text-xs font-medium text-white hover:bg-primary-dim transition-colors"
                  >
                    <Download size={14} /> Download
                  </a>
                  <a
                    href={cv.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-lg border border-border px-3.5 py-2 text-xs text-ink hover:border-accent/50 hover:text-accent transition-colors"
                  >
                    <ExternalLink size={14} /> Open
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.18}>
          <div className="mt-10 glass rounded-2xl overflow-hidden hidden sm:block">
            <iframe src="/cv-full-stack-en.pdf" title="Mohamed Merouane — Resume" className="w-full h-[85vh] bg-white" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
