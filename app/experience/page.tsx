import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import SectionHeading from "@/components/SectionHeading";
import Timeline, { TimelineEntry } from "@/components/Timeline";
import { experience } from "@/lib/data";

export const metadata: Metadata = pageMetadata({
  title: "Experience",
  description: "Professional experience — internships and a full-stack developer role in web development, AI automation and enterprise systems.",
  path: "/experience",
});

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
          description="Three internships and one full-stack developer role, in EdTech, public-sector port operations, e-commerce and mobile development."
        />
        <div className="mt-14">
          <Timeline items={items} />
        </div>
      </div>
    </section>
  );
}
