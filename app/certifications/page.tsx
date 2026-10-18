import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import { BadgeCheck, CircleDashed, Clock } from "lucide-react";
import { certifications } from "@/lib/data";
import { cn } from "@/lib/cn";

export const metadata: Metadata = pageMetadata({
  title: "Certifications",
  description: "Professional certificates from Meta, IBM, Princeton and the University at Buffalo, plus Odoo and ITIL in progress.",
  path: "/certifications",
});

const statusMeta = {
  completed: { label: "Completed", icon: BadgeCheck, className: "text-accent border-accent/30 bg-accent/10" },
  "in-progress": { label: "In progress", icon: Clock, className: "text-primary border-primary/30 bg-primary/10" },
  planned: { label: "Planned", icon: CircleDashed, className: "text-ink-muted border-border bg-bg-panel/60" },
} as const;

export default function CertificationsPage() {
  return (
    <section className="px-6 pt-40 pb-28">
      <div className="mx-auto max-w-3xl">
        <SectionHeading as="h1"
          eyebrow="Credentials"
          title="Certifications"
          description="Professional certificates in full-stack development and blockchain, with ERP and IT service management certifications on the way."
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
                    <p className="text-sm text-ink-muted mt-1">
                      {c.issuer}
                      {c.year ? ` · ${c.year}` : ""}
                    </p>
                  </div>
                  <span
                    className={cn(
                      "shrink-0 inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-mono",
                      meta.className
                    )}
                  >
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
