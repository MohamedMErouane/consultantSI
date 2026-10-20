import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Briefcase, Calendar, CheckCircle2, Github, User } from "lucide-react";
import Reveal from "@/components/Reveal";
import Badge from "@/components/Badge";
import PhotoGallery from "@/components/PhotoGallery";
import { pageMetadata } from "@/lib/seo";
import { getProjects, getLocalizedProject } from "@/lib/projects";
import { profile, siteUrl } from "@/lib/data";
import { type Lang, localePath } from "@/lib/i18n";

const T = {
  en: {
    caseStudy: "Case Study", home: "Home", projects: "Projects", code: "View the code on GitHub",
    role: "Role", context: "Context", period: "Period", problem: "The problem", solution: "The solution", impact: "The impact",
    media: "Screenshots & diagrams", mediaNote: "Captured from the running project. Click to view full screen.",
    did: "What I did", challenges: "Key challenges", results: "Results", stack: "Tech stack", skills: "Skills demonstrated",
    ctaTitle: "Want this kind of work on your team?", ctaText: "Available for a 6-month PFE internship from January 2027.", contact: "Get in touch",
    more: "More projects", previous: "PREVIOUS", next: "NEXT",
  },
  fr: {
    caseStudy: "Étude de cas", home: "Accueil", projects: "Projets", code: "Voir le code sur GitHub",
    role: "Rôle", context: "Contexte", period: "Période", problem: "Le problème", solution: "La solution", impact: "L'impact",
    media: "Captures et diagrammes", mediaNote: "Issus du projet réel. Cliquez pour agrandir.",
    did: "Ce que j'ai fait", challenges: "Défis principaux", results: "Résultats", stack: "Stack technique", skills: "Compétences mobilisées",
    ctaTitle: "Ce type de travail vous intéresse pour votre équipe ?", ctaText: "Disponible pour un stage PFE de 6 mois à partir de janvier 2027.", contact: "Me contacter",
    more: "Autres projets", previous: "PRÉCÉDENT", next: "SUIVANT",
  },
};

export function projectMetadata(slug: string, lang: Lang): Metadata {
  const p = getLocalizedProject(slug, lang);
  if (!p) return {};
  return pageMetadata({
    title: `${p.shortTitle} — ${T[lang].caseStudy}`,
    description: `${p.problem} ${p.solution}`.slice(0, 158),
    path: `/projects/${p.slug}`,
    lang,
    image: `/projects/${p.slug}/opengraph-image`,
    keywords: [...p.stack, ...p.skills, profile.name],
  });
}

export default function ProjectView({ slug, lang }: { slug: string; lang: Lang }) {
  const t = T[lang];
  const L = (path: string) => localePath(lang, path);
  const projects = getProjects(lang);
  const p = getLocalizedProject(slug, lang);
  if (!p) notFound();

  const i = projects.findIndex((x) => x.slug === p.slug);
  const prev = projects[(i - 1 + projects.length) % projects.length];
  const next = projects[(i + 1) % projects.length];
  const url = `${siteUrl}${L(`/projects/${p.slug}`)}`;

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": p.repoUrl ? "SoftwareSourceCode" : "CreativeWork",
      ...(p.repoUrl ? { codeRepository: p.repoUrl } : {}),
      name: p.title,
      headline: p.title,
      description: p.overview,
      url,
      ...(p.media?.length ? { image: p.media.map((m) => `${siteUrl}${m.src}`) } : {}),
      genre: p.category,
      keywords: [...p.stack, ...p.skills].join(", "),
      author: { "@type": "Person", name: profile.name, url: siteUrl },
      creator: { "@type": "Person", name: profile.name, url: siteUrl },
      inLanguage: lang,
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: t.home, item: `${siteUrl}${L("/")}` },
        { "@type": "ListItem", position: 2, name: t.projects, item: `${siteUrl}${L("/projects")}` },
        { "@type": "ListItem", position: 3, name: p.shortTitle, item: url },
      ],
    },
  ];

  return (
    <article className="px-6 pt-36 pb-24">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="mx-auto max-w-4xl">
        <nav aria-label="Breadcrumb" className="font-mono text-xs text-ink-faint">
          <ol className="flex flex-wrap items-center gap-2">
            <li><Link href={L("/")} className="hover:text-ink">{t.home}</Link></li>
            <li>/</li>
            <li><Link href={L("/projects")} className="hover:text-ink">{t.projects}</Link></li>
            <li>/</li>
            <li className="text-ink-muted" aria-current="page">{p.shortTitle}</li>
          </ol>
        </nav>

        <Reveal>
          <span className="eyebrow mt-8 block">{p.category}</span>
          <h1 className="mt-3 text-3xl sm:text-5xl font-semibold tracking-tight text-ink leading-tight text-balance">{p.title}</h1>
          <p className="mt-5 text-lg text-ink-muted leading-relaxed">{p.overview}</p>
          {p.repoUrl && (
            <a
              href={p.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-medium text-white shadow-glow hover:bg-primary-dim transition-colors"
            >
              <Github size={16} /> {t.code}
            </a>
          )}
        </Reveal>

        {/* Fact sheet */}
        <Reveal delay={0.08}>
          <dl className="mt-10 grid sm:grid-cols-3 gap-px overflow-hidden rounded-2xl border border-border-soft bg-border-soft">
            {[
              { icon: User, label: t.role, value: p.role },
              { icon: Briefcase, label: t.context, value: p.context },
              { icon: Calendar, label: t.period, value: p.period },
            ].map((f) => (
              <div key={f.label} className="bg-bg-elevated p-5">
                <dt className="flex items-center gap-2 font-mono text-[11px] tracking-wide text-accent uppercase">
                  <f.icon size={13} /> {f.label}
                </dt>
                <dd className="mt-2 text-sm text-ink leading-relaxed">{f.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>

        {/* Screenshots & diagrams */}
        {p.media && p.media.length > 0 && (
          <section className="mt-14">
            <h2 className="text-2xl font-semibold text-ink">{t.media}</h2>
            <p className="mt-1 text-sm text-ink-faint">{t.mediaNote}</p>
            <div className="mt-6"><PhotoGallery photos={p.media} lang={lang} /></div>
          </section>
        )}

        {/* Problem / Solution / Impact */}
        <div className="mt-14 grid md:grid-cols-3 gap-4">
          {[
            { k: t.problem, v: p.problem },
            { k: t.solution, v: p.solution },
            { k: t.impact, v: p.impact },
          ].map((b, n) => (
            <Reveal key={b.k} delay={n * 0.06}>
              <section className="glass rounded-xl p-5 h-full">
                <h2 className="font-mono text-[11px] tracking-wide text-accent uppercase">{b.k}</h2>
                <p className="mt-2 text-sm text-ink-muted leading-relaxed">{b.v}</p>
              </section>
            </Reveal>
          ))}
        </div>

        {/* What I did */}
        <section className="mt-16">
          <h2 className="text-2xl font-semibold text-ink">{t.did}</h2>
          <ol className="mt-6 space-y-3">
            {p.contributions.map((c, n) => (
              <li key={c} className="flex gap-4">
                <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full border border-accent/40 font-mono text-[11px] text-accent">
                  {String(n + 1).padStart(2, "0")}
                </span>
                <p className="pt-0.5 text-ink-muted leading-relaxed">{c}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* Challenges */}
        <section className="mt-16">
          <h2 className="text-2xl font-semibold text-ink">{t.challenges}</h2>
          <div className="mt-6 grid sm:grid-cols-2 gap-4">
            {p.challenges.map((c) => (
              <div key={c.title} className="glass rounded-xl p-5">
                <h3 className="text-ink font-medium">{c.title}</h3>
                <p className="mt-2 text-sm text-ink-muted leading-relaxed">{c.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Results */}
        <section className="mt-16">
          <h2 className="text-2xl font-semibold text-ink">{t.results}</h2>
          <ul className="mt-6 space-y-3">
            {p.results.map((r) => (
              <li key={r} className="flex gap-3 text-ink-muted leading-relaxed">
                <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-emerald-400" /> {r}
              </li>
            ))}
          </ul>
        </section>

        {/* Stack & skills */}
        <section className="mt-16 grid sm:grid-cols-2 gap-8">
          <div>
            <h2 className="eyebrow">{t.stack}</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {p.stack.map((s) => <Badge key={s} variant="accent">{s}</Badge>)}
            </div>
          </div>
          <div>
            <h2 className="eyebrow">{t.skills}</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {p.skills.map((s) => <Badge key={s}>{s}</Badge>)}
            </div>
          </div>
        </section>

        {/* CTA */}
        <div className="mt-16 glass rounded-2xl p-7 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-5">
          <div>
            <p className="text-ink font-medium">{t.ctaTitle}</p>
            <p className="text-sm text-ink-muted mt-1">{t.ctaText}</p>
          </div>
          <Link href={L("/contact")} className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-medium text-white shadow-glow hover:bg-primary-dim transition-colors">
            {t.contact} <ArrowRight size={16} />
          </Link>
        </div>

        {/* Prev / next */}
        <nav aria-label={t.more} className="mt-12 grid sm:grid-cols-2 gap-4">
          <Link href={L(`/projects/${prev.slug}`)} className="group glass rounded-xl p-5 hover:border-accent/40 transition-colors">
            <span className="flex items-center gap-1.5 font-mono text-[11px] text-ink-faint"><ArrowLeft size={13} /> {t.previous}</span>
            <span className="mt-1.5 block text-ink group-hover:text-accent transition-colors">{prev.shortTitle}</span>
          </Link>
          <Link href={L(`/projects/${next.slug}`)} className="group glass rounded-xl p-5 text-right hover:border-accent/40 transition-colors">
            <span className="flex items-center justify-end gap-1.5 font-mono text-[11px] text-ink-faint">{t.next} <ArrowRight size={13} /></span>
            <span className="mt-1.5 block text-ink group-hover:text-accent transition-colors">{next.shortTitle}</span>
          </Link>
        </nav>
      </div>
    </article>
  );
}
