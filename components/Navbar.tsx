"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X, Download } from "lucide-react";
import { getContent } from "@/lib/content";
import { langFromPath, localePath, stripLang } from "@/lib/i18n";
import { cn } from "@/lib/cn";

export default function Navbar() {
  const pathname = usePathname() || "/";
  const lang = langFromPath(pathname);
  const fr = lang === "fr";
  const { nav } = getContent(lang);
  const base = stripLang(pathname);
  const other = fr ? "en" : "fr";
  const switchHref = localePath(other, base);
  const L = (href: string) => localePath(lang, href);
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-colors duration-300",
        scrolled ? "glass" : "bg-transparent border-b border-transparent"
      )}
    >
      <nav className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
        <Link href={L("/")} aria-label={fr ? "Mohamed Merouane — accueil" : "Mohamed Merouane — home"} className="group flex items-center gap-2.5 font-mono text-sm tracking-wide text-ink hover:text-accent transition-colors">
          <span className="grid h-8 w-8 place-items-center rounded-lg border border-accent/50 bg-accent/10 font-sans text-base font-bold text-accent shadow-glow transition-transform group-hover:rotate-[-6deg]">
            M
          </span>
          M.MEROUANE<span className="text-accent">_</span>
        </Link>

        <ul className="hidden md:flex items-center gap-1">
          {nav.map((item) => {
            const active = base === item.href || base.startsWith(item.href + "/");
            return (
              <li key={item.href}>
                <Link
                  href={L(item.href)}
                  className={cn(
                    "px-3 py-2 rounded-md text-sm transition-colors",
                    active ? "text-accent" : "text-ink-muted hover:text-ink"
                  )}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="hidden md:flex items-center gap-2">
          <Link
            href={switchHref}
            hrefLang={other}
            aria-label={fr ? "Read this page in English" : "Lire cette page en français"}
            className="rounded-md border border-border px-2.5 py-2 font-mono text-xs text-ink-muted hover:text-ink hover:border-accent/50 transition-colors"
          >
            <span className={fr ? "text-ink-faint" : "text-accent"}>EN</span>
            <span className="text-ink-faint"> / </span>
            <span className={fr ? "text-accent" : "text-ink-faint"}>FR</span>
          </Link>
          <Link
            href={L("/resume")}
            className="inline-flex items-center gap-2 rounded-md border border-primary/40 bg-primary/10 px-4 py-2 text-sm text-ink hover:bg-primary/20 hover:border-accent/60 transition-colors"
          >
            <Download size={15} />
            {fr ? "CV" : "Resume"}
          </Link>
        </div>

        <button
          aria-label={fr ? "Ouvrir le menu" : "Toggle menu"}
          className="md:hidden text-ink"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden glass border-t border-border-soft px-6 py-4">
          <ul className="flex flex-col gap-1">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={L(item.href)}
                  className={cn(
                    "block px-2 py-2.5 text-sm rounded-md",
                    base === item.href ? "text-accent" : "text-ink-muted"
                  )}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="pt-2 flex items-center justify-between">
              <Link
                href={L("/resume")}
                className="inline-flex items-center gap-2 text-sm text-accent"
              >
                <Download size={15} /> {fr ? "CV" : "Resume"}
              </Link>
              <Link href={switchHref} hrefLang={other} className="rounded-md border border-border px-3 py-1.5 font-mono text-xs text-ink">
                {fr ? "English" : "Français"}
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
