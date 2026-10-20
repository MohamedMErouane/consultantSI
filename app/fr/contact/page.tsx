import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import ContactView, { contactMeta } from "@/components/views/ContactView";

export const metadata: Metadata = pageMetadata({ ...contactMeta.fr, path: "/contact", lang: "fr" });

export default function Page() {
  return <ContactView lang="fr" />;
}
