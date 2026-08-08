"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import ProjectCard, { Project } from "@/components/ProjectCard";
import { cn } from "@/lib/cn";

export default function ProjectsExplorer({ projects }: { projects: Project[] }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<string>("All");

  const categories = useMemo(
    () => ["All", ...Array.from(new Set(projects.map((p) => p.category)))],
    [projects]
  );

  const filtered = projects.filter((p) => {
    const matchesCategory = category === "All" || p.category === category;
    const q = query.trim().toLowerCase();
    const matchesQuery =
      q.length === 0 ||
      p.title.toLowerCase().includes(q) ||
      p.stack.some((s) => s.toLowerCase().includes(q)) ||
      p.category.toLowerCase().includes(q);
    return matchesCategory && matchesQuery;
  });

  return (
    <div>
      <div className="flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between">
        <div className="relative w-full sm:max-w-xs">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-ink-faint" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search projects or stack…"
            className="w-full rounded-lg border border-border bg-bg-panel/60 pl-9 pr-3 py-2.5 text-sm text-ink placeholder:text-ink-faint outline-none focus:border-accent/60 transition-colors"
          />
        </div>
        <div className="flex flex-wrap gap-2">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setCategory(c)}
              className={cn(
                "rounded-full border px-3.5 py-1.5 text-xs font-mono transition-colors",
                category === c
                  ? "border-accent/50 bg-accent/10 text-accent"
                  : "border-border text-ink-muted hover:text-ink hover:border-ink-faint"
              )}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      {filtered.length === 0 ? (
        <p className="mt-16 text-center text-ink-muted text-sm">
          No project matches "{query}". Try a different search term.
        </p>
      ) : (
        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((p) => (
            <ProjectCard key={p.title} project={p} />
          ))}
        </div>
      )}
    </div>
  );
}
