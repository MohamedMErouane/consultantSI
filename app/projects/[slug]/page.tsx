import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Briefcase, Calendar, CheckCircle2, Github, User } from "lucide-react";
import Reveal from "@/components/Reveal";
import Badge from "@/components/Badge";
import PhotoGallery from "@/components/PhotoGallery";
import { pageMetadata } from "@/lib/seo";
import { getProject, projects } from "@/lib/projects";
import { profile, siteUrl } from "@/lib/data";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const p = getProject(slug);
  if (!p) return {};
  return pageMetadata({
    title: `${p.shortTitle} — Case Study`,
    description: `${p.problem} ${p.solution}`.slice(0, 158),
    path: `/projects/${p.slug}`,
    image: `/projects/${p.slug}/opengraph-image`,
    keywords: [...p.stack, ...p.skills, profile.name],
  });
}

export default async function ProjectPage({ params }: Params) {
  const { slug } = await params;
  const p = getProject(slug);
  if (!p) notFound();

  const i = projects.findIndex((x) => x.slug === p.slug);
  const prev = projects[(i - 1 + projects.length) % projects.length];
  const next = projects[(i + 1) % projects.length];
  const url = `${siteUrl}/projects/${p.slug}`;

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
      inLanguage: "en",
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
        { "@type": "ListItem", position: 2, name: "Projects", item: `${siteUrl}/projects` },
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
            <li><Link href="/" className="hover:text-ink">Home</Link></li>
            <li>/</li>
            <li><Link href="/projects" className="hover:text-ink">Projects</Link></li>
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
              <Github size={16} /> View the code on GitHub
            </a>
          )}
        </Reveal>

        {/* Fact sheet */}
        <Reveal delay={0.08}>
          <dl className="mt-10 grid sm:grid-cols-3 gap-px overflow-hidden rounded-2xl border border-border-soft bg-border-soft">
            {[
              { icon: User, label: "Role", value: p.role },
              { icon: Briefcase, label: "Context", value: p.context },
              { icon: Calendar, label: "Period", value: p.period },
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
            <h2 className="text-2xl font-semibold text-ink">Screenshots &amp; diagrams</h2>
            <p className="mt-1 text-sm text-ink-faint">Captured from the running project. Click to view full screen.</p>
            <div className="mt-6"><PhotoGallery photos={p.media} /></div>
          </section>
        )}

        {/* Problem / Solution / Impact */}
        <div className="mt-14 grid md:grid-cols-3 gap-4">
          {[
            { k: "The problem", v: p.problem },
            { k: "The solution", v: p.solution },
            { k: "The impact", v: p.impact },
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
          <h2 className="text-2xl font-semibold text-ink">What I did</h2>
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
          <h2 className="text-2xl font-semibold text-ink">Key challenges</h2>
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
          <h2 className="text-2xl font-semibold text-ink">Results</h2>
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
            <h2 className="eyebrow">Tech stack</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {p.stack.map((s) => <Badge key={s} variant="accent">{s}</Badge>)}
            </div>
          </div>
          <div>
            <h2 className="eyebrow">Skills demonstrated</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {p.skills.map((s) => <Badge key={s}>{s}</Badge>)}
            </div>
          </div>
        </section>

        {/* CTA */}
        <div className="mt-16 glass rounded-2xl p-7 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-5">
          <div>
            <p className="text-ink font-medium">Want this kind of work on your team?</p>
            <p className="text-sm text-ink-muted mt-1">Available for a 6-month PFE internship from January 2027.</p>
          </div>
          <Link href="/contact" className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-medium text-white shadow-glow hover:bg-primary-dim transition-colors">
            Get in touch <ArrowRight size={16} />
          </Link>
        </div>

        {/* Prev / next */}
        <nav aria-label="More projects" className="mt-12 grid sm:grid-cols-2 gap-4">
          <Link href={`/projects/${prev.slug}`} className="group glass rounded-xl p-5 hover:border-accent/40 transition-colors">
            <span className="flex items-center gap-1.5 font-mono text-[11px] text-ink-faint"><ArrowLeft size={13} /> PREVIOUS</span>
            <span className="mt-1.5 block text-ink group-hover:text-accent transition-colors">{prev.shortTitle}</span>
          </Link>
          <Link href={`/projects/${next.slug}`} className="group glass rounded-xl p-5 text-right hover:border-accent/40 transition-colors">
            <span className="flex items-center justify-end gap-1.5 font-mono text-[11px] text-ink-faint">NEXT <ArrowRight size={13} /></span>
            <span className="mt-1.5 block text-ink group-hover:text-accent transition-colors">{next.shortTitle}</span>
          </Link>
        </nav>
      </div>
    </article>
  );
}
