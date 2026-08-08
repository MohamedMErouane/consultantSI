import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import Timeline, { TimelineEntry } from "@/components/Timeline";
import { experience } from "@/lib/data";

export const metadata: Metadata = {
  title: "Experience",
  description: "Professional experience — internships in full-stack development, AI automation, and enterprise systems.",
};

export default function ExperiencePage() {
  const items: TimelineEntry[] = experience.map((e) => ({
    title: e.role,
    subtitle: e.company,
    period: e.period,
    location: e.location,
    bullets: e.bullets,
    tags: e.tags,
  }));

  return (
    <section className="px-6 pt-40 pb-28">
      <div className="mx-auto max-w-3xl">
        <SectionHeading
          eyebrow="Career"
          title="Experience"
          description="Four internships across EdTech, public-sector infrastructure, e-commerce, and mobile — each one adding a different layer to the full-stack + consulting skill set."
        />
        <div className="mt-14">
          <Timeline items={items} />
        </div>
      </div>
    </section>
  );
}
