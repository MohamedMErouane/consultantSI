import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import AboutView from "@/components/views/AboutView";

export const metadata: Metadata = pageMetadata({ title: "About", description: "About Mohamed Merouane — Information Systems Engineering student bridging business analysis and software engineering.", path: "/about", lang: "en" });

export default function Page() {
  return <AboutView lang="en" />;
}
