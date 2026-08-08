import type { Metadata } from "next";
import Link from "next/link";
import { Mail, Linkedin, Github, Phone } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import ContactForm from "@/components/ContactForm";
import Reveal from "@/components/Reveal";
import { profile } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Mohamed Merouane about a PFE internship, consulting opportunity, or collaboration.",
};

const links = [
  { icon: Mail, label: profile.email, href: `mailto:${profile.email}` },
  { icon: Phone, label: profile.phone, href: `tel:${profile.phone.replace(/\s/g, "")}` },
  { icon: Linkedin, label: "LinkedIn profile", href: profile.linkedin },
  { icon: Github, label: "GitHub profile", href: profile.github },
];

export default function ContactPage() {
  return (
    <section className="px-6 pt-40 pb-28">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
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
                  className="flex items-center gap-3 glass rounded-xl px-5 py-4 text-sm text-ink hover:border-accent/40 transition-colors"
                >
                  <l.icon size={17} className="text-accent shrink-0" />
                  {l.label}
                </Link>
              ))}
              <p className="text-xs text-ink-faint pt-2">Based in {profile.location} — open to relocation for the right opportunity.</p>
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
