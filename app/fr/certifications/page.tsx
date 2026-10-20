import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { CertificationsView, certificationsMeta } from "@/components/views/SimpleViews";

export const metadata: Metadata = pageMetadata({ ...certificationsMeta.fr, path: "/certifications", lang: "fr" });

export default function Page() {
  return <CertificationsView lang="fr" />;
}
