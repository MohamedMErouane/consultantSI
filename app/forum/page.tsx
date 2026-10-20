import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Download, Github, Globe, Linkedin, Mail, Phone, UserPlus } from "lucide-react";
import { profile } from "@/lib/data";
import { pageMetadata } from "@/lib/seo";

// Landing page behind the QR code used at career fairs (CV, business card, Wallet pass).
// Mobile-first: a recruiter scans, saves the contact and downloads the right CV in two taps.
export const metadata: Metadata = {
  ...pageMetadata({
    title: "Forum — CV & contact",
    description:
      "Mohamed Merouane — CV Consultant SI / ERP et Développeur Full-Stack (FR / EN), contact et projets. PFE de 6 mois dès janvier 2027.",
    path: "/forum",
  }),
  // Duplicate of /resume and /contact content: keep it out of search results.
  robots: { index: false, follow: true },
};

const cvs = [
  { title: "Consultant SI / ERP — Business Analyst", lang: "FR", href: "/cv-consultant-si-fr.pdf" },
  { title: "IS / ERP Consultant — Business Analyst", lang: "EN", href: "/cv-consultant-si-en.pdf" },
  { title: "Développeur Full-Stack", lang: "FR", href: "/cv-full-stack-fr.pdf" },
  { title: "Full-Stack Developer", lang: "EN", href: "/cv-full-stack-en.pdf" },
];

const featured = [
  { slug: "procure-to-pay-redesign-odoo", title: "Refonte Procure-to-Pay sur Odoo 17", tag: "Conseil SI / ERP" },
  { slug: "edutrack-school-management-platform", title: "EduTrack — gestion des absences, architecture et dev en solo", tag: "Full-Stack · IA" },
  { slug: "kubernetes-devops-platform", title: "Plateforme Kubernetes — CI/CD, IaC, observabilité", tag: "DevOps" },
  { slug: "arcade-gaming-xrpl-44you", title: "Jeu multijoueur + blockchain XRPL (44you)", tag: "Web3 · Freelance" },
];

const telHref = `tel:${profile.phone.replace(/\s/g, "")}`;
const waHref = `https://wa.me/${profile.phone.replace(/[^\d]/g, "")}`;

export default function ForumPage() {
  return (
    <section className="px-5 pt-28 pb-20">
      <div className="mx-auto max-w-md">
        {/* Identity */}
        <div className="glass rounded-2xl p-6 text-center">
          <Image
            src={profile.photo}
            alt={profile.name}
            width={112}
            height={112}
            priority
            className="mx-auto h-28 w-28 rounded-full object-cover border border-border"
          />
          <h1 className="mt-4 text-2xl font-semibold text-ink">{profile.name}</h1>
          <p className="mt-1 text-sm text-ink-muted">Élève ingénieur SI — ENSIASD</p>
          <p className="mt-1 text-sm text-ink">Consultant SI / ERP · Développeur Full-Stack</p>
          <p className="mt-4 inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-3 py-1 font-mono text-[11px] text-accent">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />
            PFE de 6 mois dès janvier 2027 · Maroc &amp; Europe
          </p>

          <a
            href="/mohamed-merouane.vcf"
            download="Mohamed-Merouane.vcf"
            className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-4 py-3.5 text-sm font-medium text-white hover:bg-primary-dim transition-colors"
          >
            <UserPlus size={18} /> Enregistrer mon contact
          </a>

          <div className="mt-3 grid grid-cols-4 gap-2">
            <a href={`mailto:${profile.email}`} aria-label="Email" className="flex flex-col items-center gap-1 rounded-xl border border-border py-3 text-[11px] text-ink-muted hover:border-accent/50 hover:text-accent transition-colors">
              <Mail size={18} /> Email
            </a>
            <a href={waHref} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="flex flex-col items-center gap-1 rounded-xl border border-border py-3 text-[11px] text-ink-muted hover:border-accent/50 hover:text-accent transition-colors">
              <Phone size={18} /> WhatsApp
            </a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="flex flex-col items-center gap-1 rounded-xl border border-border py-3 text-[11px] text-ink-muted hover:border-accent/50 hover:text-accent transition-colors">
              <Linkedin size={18} /> LinkedIn
            </a>
            <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="flex flex-col items-center gap-1 rounded-xl border border-border py-3 text-[11px] text-ink-muted hover:border-accent/50 hover:text-accent transition-colors">
              <Github size={18} /> GitHub
            </a>
          </div>
          <a href={telHref} className="mt-3 block font-mono text-xs text-ink-muted hover:text-accent">
            {profile.phone}
          </a>
        </div>

        {/* CVs */}
        <h2 className="mt-8 px-1 font-mono text-xs uppercase tracking-wider text-ink-muted">CV · Résumé</h2>
        <div className="mt-3 space-y-2">
          {cvs.map((cv) => (
            <a
              key={cv.href}
              href={cv.href}
              target="_blank"
              rel="noopener noreferrer"
              className="glass flex items-center justify-between gap-3 rounded-xl px-4 py-3.5 hover:border-accent/50 transition-colors"
            >
              <span className="flex items-center gap-3 min-w-0">
                <span className="rounded-md border border-border px-1.5 py-0.5 font-mono text-[10px] text-accent">{cv.lang}</span>
                <span className="truncate text-sm text-ink">{cv.title}</span>
              </span>
              <Download size={16} className="shrink-0 text-ink-muted" />
            </a>
          ))}
        </div>

        {/* Projects */}
        <h2 className="mt-8 px-1 font-mono text-xs uppercase tracking-wider text-ink-muted">Projets phares</h2>
        <div className="mt-3 space-y-2">
          {featured.map((p) => (
            <Link
              key={p.slug}
              href={`/projects/${p.slug}`}
              className="glass flex items-center justify-between gap-3 rounded-xl px-4 py-3.5 hover:border-accent/50 transition-colors"
            >
              <span className="min-w-0">
                <span className="block font-mono text-[10px] uppercase tracking-wider text-accent">{p.tag}</span>
                <span className="mt-0.5 block text-sm text-ink">{p.title}</span>
              </span>
              <ArrowRight size={16} className="shrink-0 text-ink-muted" />
            </Link>
          ))}
        </div>

        <Link
          href="/"
          className="mt-8 flex w-full items-center justify-center gap-2 rounded-xl border border-border px-4 py-3.5 text-sm text-ink hover:border-accent/50 hover:text-accent transition-colors"
        >
          <Globe size={16} /> Voir le portfolio complet
        </Link>
      </div>
    </section>
  );
}
