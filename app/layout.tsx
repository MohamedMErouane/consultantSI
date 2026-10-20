import { Analytics } from "@vercel/analytics/next";
import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import IntroSplash, { IntroScript } from "@/components/IntroSplash";
import { profile, siteUrl } from "@/lib/data";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono", display: "swap", weight: ["400", "500"] });

const defaultTitle = `${profile.name} — Business Analyst & Full-Stack Engineer | PFE 2027`;
const defaultDescription =
  "Mohamed Merouane, final-year Information Systems engineering student (ENSIASD, Morocco). Business analysis, ERP (Odoo) and full-stack development with React, Next.js, NestJS and Django. Open to a 6-month PFE from January 2027.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: defaultTitle,
    template: `%s — ${profile.name}`,
  },
  description: defaultDescription,
  applicationName: profile.name,
  keywords: [
    "Mohamed Merouane", "Merouane Mohamed", "Mohamed Merouane portfolio", "Mohamed Merouane ENSIASD",
    "Business Analyst", "Consultant SI", "Consultant ERP", "Odoo", "AMOA", "BPMN",
    "Full-Stack Developer", "Développeur Full-Stack", "React", "Next.js", "NestJS", "Django", "TypeScript",
    "Stage PFE 2027", "PFE Maroc", "stage ingénieur Maroc", "ENSIASD", "Taroudant", "Agadir", "Morocco",
  ],
  authors: [{ name: profile.name, url: siteUrl }],
  creator: profile.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "profile",
    url: siteUrl,
    title: defaultTitle,
    description: defaultDescription,
    siteName: profile.name,
    locale: "en_US",
    firstName: "Mohamed",
    lastName: "Merouane",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: defaultTitle }],
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: defaultDescription,
    images: ["/twitter-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  // Set these in Vercel → Settings → Environment Variables after adding the site to
  // Google Search Console / Bing Webmaster Tools (HTML-tag verification method).
  verification: {
    ...(process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
      ? { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION }
      : {}),
    ...(process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION
      ? { other: { "msvalidate.01": process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION } }
      : {}),
  },
};

export const viewport: Viewport = { themeColor: "#050816", colorScheme: "dark" };

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${siteUrl}/#person`,
    name: profile.name,
    alternateName: ["Merouane Mohamed", "medd"],
    givenName: "Mohamed",
    familyName: "Merouane",
    url: siteUrl,
    image: `${siteUrl}${profile.photo}`,
    email: `mailto:${profile.email}`,
    jobTitle: "Business Analyst & Full-Stack Engineer (engineering student)",
    description: defaultDescription,
    address: { "@type": "PostalAddress", addressLocality: "Taroudant", addressCountry: "MA" },
    alumniOf: [
      { "@type": "CollegeOrUniversity", name: "ENSIASD — École Nationale Supérieure de l'Intelligence Artificielle et des Sciences des Données" },
      { "@type": "CollegeOrUniversity", name: "École Supérieure de Technologie d'Essaouira" },
    ],
    knowsAbout: [
      "Business Analysis", "Information Systems", "ERP", "Odoo", "BPMN", "UML",
      "React", "Next.js", "TypeScript", "Node.js", "NestJS", "Django", "PostgreSQL", "Docker", "Kubernetes",
    ],
    knowsLanguage: ["ar", "fr", "en"],
    sameAs: [profile.linkedin, profile.github],
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    url: siteUrl,
    name: `${profile.name} — Portfolio`,
    inLanguage: "en",
    author: { "@id": `${siteUrl}/#person` },
  },
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${mono.variable}`} suppressHydrationWarning>
      <head>
        <IntroScript />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body className="font-sans antialiased bg-bg text-ink min-h-screen flex flex-col">
        <IntroSplash />
        <div className="fixed inset-0 -z-10 bg-blueprint opacity-[0.35]" aria-hidden />
        <div className="fixed inset-x-0 top-0 h-[520px] -z-10 bg-radial-glow" aria-hidden />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
