"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Github, Linkedin, Mail } from "lucide-react";
import { getContent } from "@/lib/content";
import { langFromPath, localePath } from "@/lib/i18n";

export default function Footer() {
  const lang = langFromPath(usePathname() || "/");
  const fr = lang === "fr";
  const { allRoutes, profile } = getContent(lang);
  return (
    <footer className="border-t border-border-soft mt-24">
      <div className="mx-auto max-w-6xl px-6 py-12 grid gap-10 md:grid-cols-[1.2fr_1fr] items-start">
        <div>
          <p className="font-mono text-sm tracking-wide text-ink">
            M.MEROUANE<span className="text-accent">_</span>
          </p>
          <p className="mt-3 text-sm text-ink-muted max-w-sm leading-relaxed">
            {fr
              ? "Business analysis et développement full-stack. Disponible pour un PFE de 6 mois à partir de janvier 2027."
              : "Business analysis and full-stack development. Available for a 6-month PFE from January 2027."}
          </p>
          <div className="mt-5 flex items-center gap-4">
            <a href={`mailto:${profile.email}`} aria-label="Email" className="text-ink-muted hover:text-accent transition-colors">
              <Mail size={18} />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-ink-muted hover:text-accent transition-colors">
              <Linkedin size={18} />
            </a>
            <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-ink-muted hover:text-accent transition-colors">
              <Github size={18} />
            </a>
          </div>
        </div>
        <nav aria-label={fr ? "Pied de page" : "Footer"}>
          <ul className="grid grid-cols-3 gap-x-6 gap-y-2.5 text-sm">
            {allRoutes.map((r) => (
              <li key={r.href}>
                <Link href={localePath(lang, r.href)} className="text-ink-muted hover:text-ink transition-colors">
                  {r.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="border-t border-border-soft">
        <p className="mx-auto max-w-6xl px-6 py-5 text-xs text-ink-faint font-mono">
          © {new Date().getFullYear()} {profile.name} · {fr ? "Mis à jour" : "Last updated"} {profile.lastUpdated}
        </p>
      </div>
    </footer>
  );
}
