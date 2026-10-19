import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Calendar, CheckCircle2, MapPin, Tag } from "lucide-react";
import Reveal from "@/components/Reveal";
import Badge from "@/components/Badge";
import PhotoGallery from "@/components/PhotoGallery";
import { pageMetadata } from "@/lib/seo";
import { getJourneyPost, journey } from "@/lib/journey";
import { profile, siteUrl } from "@/lib/data";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return journey.map((p) => ({ slug: p.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const p = getJourneyPost(slug);
  if (!p) return {};
  const meta = pageMetadata({
    title: p.title,
    description: p.excerpt.slice(0, 158),
    path: `/journey/${p.slug}`,
    image: p.cover.src,
    imageWidth: p.cover.width,
    imageHeight: p.cover.height,
    keywords: [...p.tags, profile.name],
  });
  return { ...meta, openGraph: { ...meta.openGraph, type: "article", publishedTime: p.date, authors: [profile.name] } };
}

export default async function JourneyPostPage({ params }: Params) {
  const { slug } = await params;
  const p = getJourneyPost(slug);
  if (!p) notFound();

  const i = journey.findIndex((x) => x.slug === p.slug);
  const newer = i > 0 ? journey[i - 1] : null;
  const older = i < journey.length - 1 ? journey[i + 1] : null;
  const url = `${siteUrl}/journey/${p.slug}`;
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
      inLanguage: "en",
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
        { "@type": "ListItem", position: 2, name: "Journey", item: `${siteUrl}/journey` },
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
            <li><Link href="/" className="hover:text-ink">Home</Link></li>
            <li>/</li>
            <li><Link href="/journey" className="hover:text-ink">Journey</Link></li>
            <li>/</li>
            <li className="text-ink-muted truncate max-w-[16rem]" aria-current="page">{p.title}</li>
          </ol>
        </nav>

        <Reveal>
          <span className="eyebrow mt-8 block">{p.category}</span>
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
            <h2 className="font-mono text-[11px] tracking-wide text-accent uppercase">What I took from it</h2>
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
            <h2 className="text-2xl font-semibold text-ink">Photos</h2>
            <p className="mt-1 text-sm text-ink-faint">Click a photo to view it full screen.</p>
            <div className="mt-6"><PhotoGallery photos={gallery} /></div>
          </section>
        )}

        <div className="mt-12 flex flex-wrap items-center gap-2">
          <Tag size={14} className="text-ink-faint" />
          {p.tags.map((t) => <Badge key={t}>{t}</Badge>)}
        </div>

        {p.related && p.related.length > 0 && (
          <div className="mt-8 flex flex-wrap gap-3">
            {p.related.map((r) => (
              <Link key={r.href} href={r.href} className="inline-flex items-center gap-2 rounded-lg border border-border-soft px-4 py-2.5 text-sm text-ink hover:border-accent/40 hover:text-accent transition-colors">
                {r.label} <ArrowRight size={14} />
              </Link>
            ))}
          </div>
        )}

        <div className="mt-14 glass rounded-2xl p-7 flex flex-col sm:flex-row sm:items-center justify-between gap-5">
          <div>
            <p className="text-ink font-medium">Looking for a PFE intern with this kind of path?</p>
            <p className="text-sm text-ink-muted mt-1">Available for a 6-month internship from January 2027.</p>
          </div>
          <Link href="/contact" className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-medium text-white shadow-glow hover:bg-primary-dim transition-colors">
            Get in touch <ArrowRight size={16} />
          </Link>
        </div>

        <nav aria-label="More stories" className="mt-12 grid sm:grid-cols-2 gap-4">
          {older ? (
            <Link href={`/journey/${older.slug}`} className="group glass rounded-xl p-5 hover:border-accent/40 transition-colors">
              <span className="flex items-center gap-1.5 font-mono text-[11px] text-ink-faint"><ArrowLeft size={13} /> EARLIER</span>
              <span className="mt-1.5 block text-ink group-hover:text-accent transition-colors">{older.title}</span>
            </Link>
          ) : <span />}
          {newer && (
            <Link href={`/journey/${newer.slug}`} className="group glass rounded-xl p-5 text-right hover:border-accent/40 transition-colors">
              <span className="flex items-center justify-end gap-1.5 font-mono text-[11px] text-ink-faint">LATER <ArrowRight size={13} /></span>
              <span className="mt-1.5 block text-ink group-hover:text-accent transition-colors">{newer.title}</span>
            </Link>
          )}
        </nav>
      </div>
    </article>
  );
}
