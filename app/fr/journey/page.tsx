import type { Metadata } from "next";
import JourneyView, { journeyMetadata } from "@/components/views/JourneyView";

export const metadata: Metadata = journeyMetadata("fr");

export default function Page() {
  return <JourneyView lang="fr" />;
}
