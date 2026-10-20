import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Badge from "@/components/Badge";
import type { Project } from "@/lib/projects";
import { type Lang, localePath } from "@/lib/i18n";

export type { Project };

export default function ProjectCard({ project, lang = "en" }: { project: Project; lang?: Lang }) {
  const fr = lang === "fr";
  const thumb = project.media?.find((m) => m.thumb) ?? project.media?.[0];
  return (
    <Link
      href={localePath(lang, `/projects/${project.slug}`)}
      className="group glass rounded-2xl p-6 sm:p-7 h-full flex flex-col transition-all duration-300 hover:-translate-y-1 hover:border-accent/40"
    >
      {thumb && (
        <div className="relative -mx-6 -mt-6 sm:-mx-7 sm:-mt-7 mb-6 aspect-[16/9] overflow-hidden rounded-t-2xl border-b border-border-soft bg-bg">
          <Image
            src={thumb.src}
            alt={thumb.alt}
            fill
            sizes="(min-width: 1024px) 560px, 100vw"
            className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
          />
        </div>
      )}
      <div className="flex items-start justify-between gap-3">
        <div>
          <span className="eyebrow">{project.category}</span>
          <h3 className="mt-2 text-xl font-semibold text-ink group-hover:text-accent transition-colors">{project.title}</h3>
        </div>
        <span className="font-mono text-xs text-ink-faint whitespace-nowrap pt-1">{project.period.split(" – ")[0]}</span>
      </div>

      <div className="mt-5 space-y-3 text-sm flex-1">
        <div>
          <p className="font-mono text-[11px] text-accent tracking-wide">{fr ? "PROBLÈME" : "PROBLEM"}</p>
          <p className="text-ink-muted leading-relaxed mt-0.5">{project.problem}</p>
        </div>
        <div>
          <p className="font-mono text-[11px] text-accent tracking-wide">SOLUTION</p>
          <p className="text-ink-muted leading-relaxed mt-0.5">{project.solution}</p>
        </div>
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.stack.slice(0, 5).map((s) => (
          <Badge key={s}>{s}</Badge>
        ))}
      </div>

      <span className="mt-6 inline-flex items-center gap-1.5 text-sm text-accent">
        {project.repoUrl ? (fr ? "Étude de cas + code" : "Case study + code") : fr ? "Lire l'étude de cas" : "Read the case study"}
        <ArrowUpRight size={15} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </span>
    </Link>
  );
}
