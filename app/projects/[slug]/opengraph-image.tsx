import { ImageResponse } from "next/og";
import { getProject, projects } from "@/lib/projects";
import { profile } from "@/lib/data";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Project case study — Mohamed Merouane";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = getProject(slug);
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: "linear-gradient(135deg, #050816 0%, #0D1326 60%, #13224a 100%)",
          color: "#E7ECF7",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", fontSize: 24, color: "#38BDF8", letterSpacing: 4 }}>
          {(p?.category ?? "PROJECT").toUpperCase()}
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 64, fontWeight: 700, lineHeight: 1.1 }}>{p?.title ?? "Project"}</div>
          <div style={{ display: "flex", fontSize: 30, color: "#A3ADC2", marginTop: 24 }}>
            {(p?.stack ?? []).slice(0, 5).join("  ·  ")}
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", fontSize: 26, color: "#8B94AC" }}>
          <span>{profile.name} — case study</span>
          <span style={{ color: "#38BDF8" }}>mohamedmerouane.me</span>
        </div>
      </div>
    ),
    size
  );
}
