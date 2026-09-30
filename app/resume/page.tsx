import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import Link from "next/link";
import { Download } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = pageMetadata({
  title: "Resume",
  description: "Download Mohamed Merouane's résumé — Consultant SI / Software Engineer track.",
  path: "/resume",
});

export default function ResumePage() {
  return (
    <section className="px-6 pt-40 pb-28">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          eyebrow="Résumé"
          title="Resume"
          description="The Consultant SI-oriented CV, kept up to date with the latest experience and skills."
        />

        <Reveal delay={0.1}>
          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-medium text-white shadow-glow hover:bg-primary-dim transition-colors"
            >
              <Download size={16} /> Download PDF
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-border px-5 py-3 text-sm font-medium text-ink hover:border-accent/50 hover:text-accent transition-colors"
            >
              Open in new tab
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.18}>
          <div className="mt-10 glass rounded-2xl overflow-hidden">
            <iframe
              src="/resume.pdf"
              title="Mohamed Merouane — Resume"
              className="w-full h-[80vh]"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
