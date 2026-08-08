import Reveal from "@/components/Reveal";
import Badge from "@/components/Badge";

export type TimelineEntry = {
  title: string;
  subtitle: string;
  period: string;
  location?: string;
  bullets: string[];
  tags?: string[];
};

export default function Timeline({ items }: { items: TimelineEntry[] }) {
  return (
    <ol className="relative">
      <div className="absolute left-[9px] top-2 bottom-2 w-px flow-line" aria-hidden />
      {items.map((item, i) => (
        <li key={item.title + item.period} className="relative pl-10 pb-12 last:pb-0">
          <Reveal delay={i * 0.05}>
            <span className="absolute left-0 top-1.5 h-[19px] w-[19px] rounded-full border-2 border-accent bg-bg" aria-hidden />
            <div className="glass rounded-xl p-5 sm:p-6">
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="text-lg font-semibold text-ink">{item.title}</h3>
                <span className="font-mono text-xs text-accent">{item.period}</span>
              </div>
              <p className="text-sm text-ink-muted mt-0.5">
                {item.subtitle}
                {item.location ? ` — ${item.location}` : ""}
              </p>
              <ul className="mt-3 space-y-1.5">
                {item.bullets.map((b) => (
                  <li key={b} className="text-sm text-ink-muted leading-relaxed flex gap-2">
                    <span className="text-accent mt-1.5 h-1 w-1 rounded-full bg-accent shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>
              {item.tags && item.tags.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {item.tags.map((t) => (
                    <Badge key={t}>{t}</Badge>
                  ))}
                </div>
              )}
            </div>
          </Reveal>
        </li>
      ))}
    </ol>
  );
}
