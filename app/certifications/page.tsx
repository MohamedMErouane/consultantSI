import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { CertificationsView, certificationsMeta } from "@/components/views/SimpleViews";

export const metadata: Metadata = pageMetadata({ ...certificationsMeta.en, path: "/certifications", lang: "en" });

export default function Page() {
  return <CertificationsView lang="en" />;
}
