import Badge from "@/components/Badge";

export type Project = {
  title: string;
  period: string;
  category: string;
  stack: string[];
  problem: string;
  solution: string;
  impact: string;
  featured?: boolean;
};

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group glass rounded-2xl p-6 sm:p-7 h-full flex flex-col transition-transform duration-300 hover:-translate-y-1">
      <div className="flex items-start justify-between gap-3">
        <div>
          <span className="eyebrow">{project.category}</span>
          <h3 className="mt-2 text-xl font-semibold text-ink">{project.title}</h3>
        </div>
        <span className="font-mono text-xs text-ink-faint whitespace-nowrap pt-1">{project.period}</span>
      </div>

      <div className="mt-5 space-y-3 text-sm flex-1">
        <div>
          <p className="font-mono text-[11px] text-accent tracking-wide">PROBLEM</p>
          <p className="text-ink-muted leading-relaxed mt-0.5">{project.problem}</p>
        </div>
        <div>
          <p className="font-mono text-[11px] text-accent tracking-wide">SOLUTION</p>
          <p className="text-ink-muted leading-relaxed mt-0.5">{project.solution}</p>
        </div>
        <div>
          <p className="font-mono text-[11px] text-accent tracking-wide">IMPACT</p>
          <p className="text-ink-muted leading-relaxed mt-0.5">{project.impact}</p>
        </div>
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.stack.map((s) => (
          <Badge key={s}>{s}</Badge>
        ))}
      </div>
    </div>
  );
}
