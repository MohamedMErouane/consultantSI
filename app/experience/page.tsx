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
        <SectionHeading as="h1"
          eyebrow="Career"
          title="Experience"
          description="Six experiences since 2023: five internships and a freelance engagement, across public-sector port operations, EdTech, Web3 e-commerce, HR software and mobile."
        />
        <div className="mt-14">
          <Timeline items={items} />
        </div>
      </div>
    </section>
  );
}
