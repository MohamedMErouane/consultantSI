import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import SkillBar from "@/components/SkillBar";
import Badge from "@/components/Badge";
import { engineeringSkills, consultingCompetencies, skillRadar } from "@/lib/data";

export const metadata: Metadata = {
  title: "Skills",
  description: "Consulting competencies and engineering skills — from business process modeling to full-stack development.",
};

const groupLabels: Record<string, string> = {
  Programming: "Programming",
  Backend: "Backend",
  Frontend: "Frontend",
  Databases: "Databases",
  Cloud_DevOps: "Cloud & DevOps",
  Business: "Business & Process",
};

export default function SkillsPage() {
  return (
    <section className="px-6 pt-40 pb-28">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="Capability Map"
          title="Skills"
          description="Two tracks, kept deliberately visible side by side — because the strongest Consultant SI candidates are the ones who can also read the code they're specifying."
        />

        {/* Proficiency overview */}
        <Reveal delay={0.1}>
          <div className="mt-14 glass rounded-2xl p-7 sm:p-9">
            <h3 className="eyebrow mb-6">Proficiency overview</h3>
            <div className="grid sm:grid-cols-2 gap-x-10 gap-y-6">
              {skillRadar.map((s) => (
                <SkillBar key={s.label} label={s.label} value={s.value} />
              ))}
            </div>
          </div>
        </Reveal>

        {/* Consulting competencies */}
        <div className="mt-16">
          <h3 className="eyebrow mb-6">Consultant SI competencies</h3>
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

        {/* Engineering stack */}
        <div className="mt-16">
          <h3 className="eyebrow mb-6">Software engineering stack</h3>
          <div className="glass rounded-2xl p-7 sm:p-9 grid sm:grid-cols-2 gap-8">
            {Object.entries(engineeringSkills).map(([key, list]) => (
              <div key={key}>
                <p className="text-sm text-ink-muted mb-3">{groupLabels[key] ?? key}</p>
                <div className="flex flex-wrap gap-2">
                  {list.map((s) => (
                    <Badge key={s} variant="accent">
                      {s}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
