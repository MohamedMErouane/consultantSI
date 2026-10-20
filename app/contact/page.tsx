import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import ContactView, { contactMeta } from "@/components/views/ContactView";

export const metadata: Metadata = pageMetadata({ ...contactMeta.en, path: "/contact", lang: "en" });

export default function Page() {
  return <ContactView lang="en" />;
}
