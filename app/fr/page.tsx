import type { Metadata } from "next";
import HomeView from "@/components/views/HomeView";
import { languageAlternates } from "@/lib/i18n";

const title = "Mohamed Merouane — Business Analyst et Ingénieur Full-Stack | Stage PFE 2027";
const description =
  "Mohamed Merouane, élève ingénieur en systèmes d'information (ENSIASD, Maroc). Business analysis, ERP (Odoo) et développement full-stack React, Next.js, NestJS et Django. Disponible pour un stage PFE de 6 mois à partir de janvier 2027.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  keywords: [
    "Mohamed Merouane", "stage PFE 2027", "stage de fin d'études", "Consultant SI", "Business Analyst", "Consultant ERP Odoo",
    "Développeur Full-Stack", "stage développeur full-stack", "AMOA", "BPMN", "ENSIASD", "France", "Maroc",
  ],
  alternates: { canonical: "/fr", languages: languageAlternates("/") },
  openGraph: {
    type: "profile",
    url: "/fr",
    title,
    description,
    siteName: "Mohamed Merouane",
    locale: "fr_FR",
    alternateLocale: ["en_US"],
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: title }],
  },
  twitter: { card: "summary_large_image", title, description, images: ["/twitter-image"] },
};

export default function Page() {
  return <HomeView lang="fr" />;
}
