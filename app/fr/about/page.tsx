import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import AboutView from "@/components/views/AboutView";

export const metadata: Metadata = pageMetadata({ title: "À propos", description: "Mohamed Merouane, élève ingénieur en systèmes d'information, entre business analysis et ingénierie logicielle.", path: "/about", lang: "fr" });

export default function Page() {
  return <AboutView lang="fr" />;
}
