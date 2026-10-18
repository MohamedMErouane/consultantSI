import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import Link from "next/link";
import { Mail, Linkedin, Github, Phone, MapPin, CalendarCheck } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import ContactForm from "@/components/ContactForm";
import Reveal from "@/components/Reveal";
import { profile } from "@/lib/data";

export const metadata: Metadata = pageMetadata({
  title: "Contact",
  description: "Get in touch with Mohamed Merouane about a PFE internship, consulting opportunity, or collaboration.",
  path: "/contact",
});

const links = [
  { icon: Mail, label: profile.email, href: `mailto:${profile.email}` },
  { icon: Phone, label: profile.phone, href: `tel:${profile.phone.replace(/\s/g, "")}` },
  { icon: Linkedin, label: "linkedin.com/in/mohamedmerouane", href: profile.linkedin },
  { icon: Github, label: "github.com/MohamedMErouane", href: profile.github },
];

export default function ContactPage() {
  return (
    <section className="px-6 pt-40 pb-28">
      <div className="mx-auto max-w-5xl">
        <SectionHeading as="h1"
          eyebrow="Let's talk"
          title="Contact"
          description="Open to PFE opportunities starting January 2027 — Consultant SI, Business Analyst, Digital Transformation, or Software Engineering tracks."
        />

        <div className="mt-14 grid lg:grid-cols-[1fr_1.2fr] gap-10">
          <Reveal>
            <div className="space-y-3">
              {links.map((l) => (
                <Link
                  key={l.label}
                  href={l.href}
                  target={l.href.startsWith("http") ? "_blank" : undefined}
                  rel={l.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-3 glass rounded-xl px-5 py-4 text-sm text-ink hover:border-accent/40 transition-colors"
                >
                  <l.icon size={17} className="text-accent shrink-0" />
                  {l.label}
                </Link>
              ))}
              <div className="glass rounded-xl px-5 py-5 mt-6 space-y-3 text-sm">
                <p className="flex items-center gap-3 text-ink">
                  <CalendarCheck size={17} className="text-accent shrink-0" />
                  6-month PFE · from January 2027 (start possible until March)
                </p>
                <p className="flex items-center gap-3 text-ink-muted">
                  <MapPin size={17} className="text-accent shrink-0" />
                  {profile.location} · {profile.mobility}
                </p>
                <p className="text-ink-faint text-xs pl-[29px]">Languages: Arabic (native), French and English (professional)</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <ContactForm />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
