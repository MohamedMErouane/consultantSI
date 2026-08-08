import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-border-soft mt-24">
      <div className="mx-auto max-w-6xl px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs text-ink-faint font-mono">
          © {new Date().getFullYear()} {profile.name}. Built with Next.js.
        </p>
        <div className="flex items-center gap-4">
          <Link href={`mailto:${profile.email}`} aria-label="Email" className="text-ink-muted hover:text-accent transition-colors">
            <Mail size={17} />
          </Link>
          <Link href={profile.linkedin} target="_blank" aria-label="LinkedIn" className="text-ink-muted hover:text-accent transition-colors">
            <Linkedin size={17} />
          </Link>
          <Link href={profile.github} target="_blank" aria-label="GitHub" className="text-ink-muted hover:text-accent transition-colors">
            <Github size={17} />
          </Link>
        </div>
      </div>
    </footer>
  );
}
