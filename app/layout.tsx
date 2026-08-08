import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { profile } from "@/lib/data";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono", display: "swap", weight: ["400", "500"] });

const siteUrl = "https://med-merouane.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${profile.name} — Consultant SI & Software Engineer`,
    template: `%s — ${profile.name}`,
  },
  description: profile.summary,
  keywords: [
    "Mohamed Merouane", "Consultant SI", "Business Analyst", "Information Systems",
    "ERP", "BPMN", "Digital Transformation", "Full-Stack Developer", "PFE Morocco",
  ],
  authors: [{ name: profile.name, url: siteUrl }],
  openGraph: {
    type: "website",
    url: siteUrl,
    title: `${profile.name} — Consultant SI & Software Engineer`,
    description: profile.summary,
    siteName: profile.name,
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} — Consultant SI & Software Engineer`,
    description: profile.summary,
  },
  robots: { index: true, follow: true },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  url: siteUrl,
  email: profile.email,
  jobTitle: profile.roles.join(" / "),
  sameAs: [profile.linkedin, profile.github],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${mono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body className="font-sans antialiased bg-bg text-ink min-h-screen flex flex-col">
        <div className="fixed inset-0 -z-10 bg-blueprint opacity-[0.35]" aria-hidden />
        <div className="fixed inset-x-0 top-0 h-[520px] -z-10 bg-radial-glow" aria-hidden />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
