import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Calendar, CheckCircle2, MapPin, Tag } from "lucide-react";
import Reveal from "@/components/Reveal";
import Badge from "@/components/Badge";
import PhotoGallery from "@/components/PhotoGallery";
import { pageMetadata } from "@/lib/seo";
import { getJourney, getLocalizedJourneyPost } from "@/lib/journey";
import { journeyCategoryFr } from "@/lib/fr/journey";
import { profile, siteUrl } from "@/lib/data";
import { type Lang, localePath } from "@/lib/i18n";

const T = {
  en: {
    home: "Home", journey: "Journey", took: "What I took from it", photos: "Photos", photosNote: "Click a photo to view it full screen.",
    ctaTitle: "Looking for a PFE intern with this kind of path?", ctaText: "Available for a 6-month internship from January 2027.", contact: "Get in touch",
    more: "More stories", earlier: "EARLIER", later: "LATER",
  },
  fr: {
    home: "Accueil", journey: "Parcours", took: "Ce que j'en retiens", photos: "Photos", photosNote: "Cliquez sur une photo pour l'agrandir.",
    ctaTitle: "Vous cherchez un stagiaire PFE avec ce parcours ?", ctaText: "Disponible pour un stage de 6 mois à partir de janvier 2027.", contact: "Me contacter",
    more: "Autres histoires", earlier: "AVANT", later: "APRÈS",
  },
};

export function journeyPostMetadata(slug: string, lang: Lang): Metadata {
  const p = getLocalizedJourneyPost(slug, lang);
  if (!p) return {};
  const meta = pageMetadata({
    title: p.title,
    description: p.excerpt.slice(0, 158),
    path: `/journey/${p.slug}`,
    lang,
    image: p.cover.src,
    imageWidth: p.cover.width,
    imageHeight: p.cover.height,
    keywords: [...p.tags, profile.name],
  });
  return { ...meta, openGraph: { ...meta.openGraph, type: "article", publishedTime: p.date, authors: [profile.name] } };
}

export default function JourneyPostView({ slug, lang }: { slug: string; lang: Lang }) {
  const t = T[lang];
  const L = (path: string) => localePath(lang, path);
  const journey = getJourney(lang);
  const p = getLocalizedJourneyPost(slug, lang);
  if (!p) notFound();

  const i = journey.findIndex((x) => x.slug === p.slug);
  const newer = i > 0 ? journey[i - 1] : null;
  const older = i < journey.length - 1 ? journey[i + 1] : null;
  const url = `${siteUrl}${L(`/journey/${p.slug}`)}`;
  const gallery = [p.cover, ...p.photos];

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: p.title,
      description: p.excerpt,
      datePublished: p.date,
      url,
      mainEntityOfPage: url,
      image: gallery.map((g) => `${siteUrl}${g.src}`),
      keywords: p.tags.join(", "),
      author: { "@type": "Person", name: profile.name, url: siteUrl },
      publisher: { "@type": "Person", name: profile.name, url: siteUrl },
      contentLocation: { "@type": "Place", name: p.location },
      inLanguage: lang,
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: t.home, item: `${siteUrl}${L("/")}` },
        { "@type": "ListItem", position: 2, name: t.journey, item: `${siteUrl}${L("/journey")}` },
        { "@type": "ListItem", position: 3, name: p.title, item: url },
      ],
    },
  ];

  return (
    <article className="px-6 pt-36 pb-24">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="mx-auto max-w-3xl">
        <nav aria-label="Breadcrumb" className="font-mono text-xs text-ink-faint">
          <ol className="flex flex-wrap items-center gap-2">
            <li><Link href={L("/")} className="hover:text-ink">{t.home}</Link></li>
            <li>/</li>
            <li><Link href={L("/journey")} className="hover:text-ink">{t.journey}</Link></li>
            <li>/</li>
            <li className="text-ink-muted truncate max-w-[16rem]" aria-current="page">{p.title}</li>
          </ol>
        </nav>

        <Reveal>
          <span className="eyebrow mt-8 block">{lang === "fr" ? journeyCategoryFr[p.category] : p.category}</span>
          <h1 className="mt-3 text-3xl sm:text-5xl font-semibold tracking-tight text-ink leading-tight text-balance">{p.title}</h1>
          <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm text-ink-muted">
            <span className="flex items-center gap-1.5"><Calendar size={14} className="text-accent" /> <time dateTime={p.date}>{p.dateLabel}</time></span>
            <span className="flex items-center gap-1.5"><MapPin size={14} className="text-accent" /> {p.location}</span>
          </div>
        </Reveal>

        <Reveal delay={0.06}>
          <div className="mt-10 overflow-hidden rounded-2xl border border-border-soft bg-bg-elevated">
            <Image
              src={p.cover.src}
              alt={p.cover.alt}
              width={p.cover.width}
              height={p.cover.height}
              sizes="(min-width: 768px) 768px, 100vw"
              className="mx-auto h-auto max-h-[640px] w-auto object-contain"
              priority
            />
          </div>
        </Reveal>

        <div className="mt-12 space-y-5 text-lg text-ink-muted leading-relaxed">
          {p.body.map((para) => <p key={para}>{para}</p>)}
        </div>

        {p.takeaways.length > 0 && (
          <section className="mt-12 glass rounded-2xl p-6 sm:p-7">
            <h2 className="font-mono text-[11px] tracking-wide text-accent uppercase">{t.took}</h2>
            <ul className="mt-4 space-y-3">
              {p.takeaways.map((t) => (
                <li key={t} className="flex gap-3 text-ink-muted leading-relaxed">
                  <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-emerald-400" /> {t}
                </li>
              ))}
            </ul>
          </section>
        )}

        {p.photos.length > 0 && (
          <section className="mt-14">
            <h2 className="text-2xl font-semibold text-ink">{t.photos}</h2>
            <p className="mt-1 text-sm text-ink-faint">{t.photosNote}</p>
            <div className="mt-6"><PhotoGallery photos={gallery} lang={lang} /></div>
          </section>
        )}

        <div className="mt-12 flex flex-wrap items-center gap-2">
          <Tag size={14} className="text-ink-faint" />
          {p.tags.map((t) => <Badge key={t}>{t}</Badge>)}
        </div>

        {p.related && p.related.length > 0 && (
          <div className="mt-8 flex flex-wrap gap-3">
            {p.related.map((r) => (
              <Link key={r.href} href={L(r.href)} className="inline-flex items-center gap-2 rounded-lg border border-border-soft px-4 py-2.5 text-sm text-ink hover:border-accent/40 hover:text-accent transition-colors">
                {r.label} <ArrowRight size={14} />
              </Link>
            ))}
          </div>
        )}

        <div className="mt-14 glass rounded-2xl p-7 flex flex-col sm:flex-row sm:items-center justify-between gap-5">
          <div>
            <p className="text-ink font-medium">{t.ctaTitle}</p>
            <p className="text-sm text-ink-muted mt-1">{t.ctaText}</p>
          </div>
          <Link href={L("/contact")} className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-medium text-white shadow-glow hover:bg-primary-dim transition-colors">
            {t.contact} <ArrowRight size={16} />
          </Link>
        </div>

        <nav aria-label={t.more} className="mt-12 grid sm:grid-cols-2 gap-4">
          {older ? (
            <Link href={L(`/journey/${older.slug}`)} className="group glass rounded-xl p-5 hover:border-accent/40 transition-colors">
              <span className="flex items-center gap-1.5 font-mono text-[11px] text-ink-faint"><ArrowLeft size={13} /> {t.earlier}</span>
              <span className="mt-1.5 block text-ink group-hover:text-accent transition-colors">{older.title}</span>
            </Link>
          ) : <span />}
          {newer && (
            <Link href={L(`/journey/${newer.slug}`)} className="group glass rounded-xl p-5 text-right hover:border-accent/40 transition-colors">
              <span className="flex items-center justify-end gap-1.5 font-mono text-[11px] text-ink-faint">{t.later} <ArrowRight size={13} /></span>
              <span className="mt-1.5 block text-ink group-hover:text-accent transition-colors">{newer.title}</span>
            </Link>
          )}
        </nav>
      </div>
    </article>
  );
}
