import Link from "next/link";
import { Mail, Linkedin, Github, Phone, MapPin, CalendarCheck } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import ContactForm from "@/components/ContactForm";
import Reveal from "@/components/Reveal";
import { getContent } from "@/lib/content";
import type { Lang } from "@/lib/i18n";

export const contactMeta = {
  en: { title: "Contact", description: "Get in touch with Mohamed Merouane about a PFE internship, consulting opportunity, or collaboration." },
  fr: { title: "Contact", description: "Contacter Mohamed Merouane pour un stage PFE, une mission de conseil ou une collaboration." },
};

export default function ContactView({ lang }: { lang: Lang }) {
  const fr = lang === "fr";
  const { profile } = getContent(lang);
  const links = [
    { icon: Mail, label: profile.email, href: `mailto:${profile.email}` },
    { icon: Phone, label: profile.phone, href: `tel:${profile.phone.replace(/\s/g, "")}` },
    { icon: Linkedin, label: "linkedin.com/in/mohamedmerouane", href: profile.linkedin },
    { icon: Github, label: "github.com/MohamedMErouane", href: profile.github },
  ];

  return (
    <section className="px-6 pt-40 pb-28">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          as="h1"
          eyebrow={fr ? "Parlons-en" : "Let's talk"}
          title="Contact"
          description={
            fr
              ? "Ouvert aux opportunités de PFE à partir de janvier 2027 : Consultant SI, Business Analyst, transformation digitale ou ingénierie logicielle."
              : "Open to PFE opportunities starting January 2027 — Consultant SI, Business Analyst, Digital Transformation, or Software Engineering tracks."
          }
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
                  {fr
                    ? "PFE de 6 mois · à partir de janvier 2027 (démarrage possible jusqu'en mars)"
                    : "6-month PFE · from January 2027 (start possible until March)"}
                </p>
                <p className="flex items-center gap-3 text-ink-muted">
                  <MapPin size={17} className="text-accent shrink-0" />
                  {profile.location} · {profile.mobility}
                </p>
                <p className="text-ink-faint text-xs pl-[29px]">
                  {fr
                    ? "Langues : arabe (langue maternelle), français et anglais (niveau professionnel)"
                    : "Languages: Arabic (native), French and English (professional)"}
                </p>
                {fr && (
                  <p className="text-ink-faint text-xs pl-[29px]">Convention de stage fournie par l'ENSIASD.</p>
                )}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <ContactForm lang={lang} />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
