"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X, Download } from "lucide-react";
import { nav, profile } from "@/lib/data";
import { cn } from "@/lib/cn";

export default function Navbar() {
  const pathname = usePathname();
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
        <Link href="/" className="font-mono text-sm tracking-wide text-ink hover:text-accent transition-colors">
          M.MEROUANE<span className="text-accent">_</span>
        </Link>

        <ul className="hidden md:flex items-center gap-1">
          {nav.map((item) => {
            const active = pathname === item.href;
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
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

        <div className="hidden md:block">
          <Link
            href="/resume"
            className="inline-flex items-center gap-2 rounded-md border border-primary/40 bg-primary/10 px-4 py-2 text-sm text-ink hover:bg-primary/20 hover:border-accent/60 transition-colors"
          >
            <Download size={15} />
            Resume
          </Link>
        </div>

        <button
          aria-label="Toggle menu"
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
                  href={item.href}
                  className={cn(
                    "block px-2 py-2.5 text-sm rounded-md",
                    pathname === item.href ? "text-accent" : "text-ink-muted"
                  )}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <Link
                href="/resume"
                className="inline-flex items-center gap-2 text-sm text-accent"
              >
                <Download size={15} /> Resume
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
