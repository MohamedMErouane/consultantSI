import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import { pageMetadata } from "@/lib/seo";
import { getJourney, journey as journeyEn } from "@/lib/journey";
import { journeyCategoryFr } from "@/lib/fr/journey";
import { type Lang, localePath } from "@/lib/i18n";
import { profile, siteUrl } from "@/lib/data";

const T = {
  en: {
    title: "Journey",
    description: "Mohamed Merouane's journey in photos: internships, the EtudiaLab EduTrack project, GITEX Africa 2025, his ENSIASD defence, DUT graduation and hackathons.",
    eyebrow: "Journey", h1: "The path behind the CV, in real photos",
    intro: "Internships, events and milestones, each with a short story about what I did and what I took from it.",
    read: "Read the story", blog: "Journey",
  },
  fr: {
    title: "Parcours",
    description: "Le parcours de Mohamed Merouane en photos : stages, le projet EduTrack chez EtudiaLab, le GITEX Africa 2025, sa soutenance à l'ENSIASD, l'obtention du DUT et les hackathons.",
    eyebrow: "Parcours", h1: "Le chemin derrière le CV, en vraies photos",
    intro: "Stages, événements et étapes clés, chacun avec une courte histoire : ce que j'ai fait et ce que j'en ai retenu.",
    read: "Lire l'histoire", blog: "Parcours",
  },
};

export function journeyMetadata(lang: Lang) {
  return pageMetadata({
    title: T[lang].title,
    description: T[lang].description,
    path: "/journey",
    lang,
    image: journeyEn[0]?.cover.src,
    keywords: ["Mohamed Merouane", "journey", "parcours", "ENSIASD", "EtudiaLab", "GITEX Africa 2025", "PFE 2027"],
  });
}

export default function JourneyView({ lang }: { lang: Lang }) {
  const t = T[lang];
  const journey = getJourney(lang);
  const L = (p: string) => localePath(lang, p);
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: `${profile.name} — ${t.blog}`,
    url: `${siteUrl}${L("/journey")}`,
    author: { "@type": "Person", name: profile.name, url: siteUrl },
    blogPost: journey.map((p) => ({
      "@type": "BlogPosting",
      headline: p.title,
      datePublished: p.date,
      url: `${siteUrl}${L(`/journey/${p.slug}`)}`,
      image: `${siteUrl}${p.cover.src}`,
    })),
  };

  return (
    <section className="px-6 pt-40 pb-28">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          as="h1"
          eyebrow={t.eyebrow}
          title={t.h1}
          description={t.intro}
        />

        <ol className="relative mt-16 space-y-10 border-l border-border-soft pl-6 sm:pl-10">
          {journey.map((p, i) => (
            <li key={p.slug} className="relative">
              <span className="absolute -left-[31px] sm:-left-[47px] top-6 h-3 w-3 rounded-full border-2 border-accent bg-bg" aria-hidden />
              <Reveal delay={Math.min(i, 4) * 0.05}>
                <Link
                  href={L(`/journey/${p.slug}`)}
                  className="group grid overflow-hidden rounded-2xl border border-border-soft bg-bg-elevated transition-colors hover:border-accent/40 sm:grid-cols-[260px_1fr]"
                >
                  <div className="relative aspect-[4/3] sm:aspect-auto sm:min-h-[220px] overflow-hidden bg-bg">
                    <Image
                      src={p.cover.src}
                      alt={p.cover.alt}
                      fill
                      sizes="(min-width: 640px) 260px, 100vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      priority={i < 2}
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-[11px] uppercase tracking-wide">
                      <span className="text-accent">{lang === "fr" ? journeyCategoryFr[p.category] : p.category}</span>
                      <span className="text-ink-faint">{p.dateLabel}</span>
                    </div>
                    <h2 className="mt-2 text-xl font-semibold text-ink group-hover:text-accent transition-colors text-balance">{p.title}</h2>
                    <p className="mt-2 flex items-center gap-1.5 text-xs text-ink-faint"><MapPin size={12} /> {p.location}</p>
                    <p className="mt-3 text-sm text-ink-muted leading-relaxed">{p.excerpt}</p>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-sm text-accent">
                      {t.read} <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
