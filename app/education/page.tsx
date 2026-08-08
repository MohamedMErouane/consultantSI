import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import { education } from "@/lib/data";

export const metadata: Metadata = {
  title: "Education",
  description: "Engineering degree in Information Systems Management & Governance at ENSIASD, Morocco.",
};

export default function EducationPage() {
  return (
    <section className="px-6 pt-40 pb-28">
      <div className="mx-auto max-w-3xl">
        <SectionHeading
          eyebrow="Academic Path"
          title="Education"
          description="A degree built specifically at the intersection of information systems and governance — not a generic computer science track."
        />
        <div className="mt-14 space-y-6">
          {education.map((e, i) => (
            <Reveal key={e.school} delay={i * 0.08}>
              <div className="glass rounded-2xl p-6 sm:p-8">
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h3 className="text-lg font-semibold text-ink">{e.degree}</h3>
                  <span className="font-mono text-xs text-accent">{e.period}</span>
                </div>
                <p className="text-sm text-ink-muted mt-1">
                  {e.school} — {e.location}
                </p>
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
