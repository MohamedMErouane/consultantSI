import { ImageResponse } from "next/og";
import { profile } from "@/lib/data";

export const alt = `${profile.name} — Consultant SI & Software Engineer`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(135deg, #050816 0%, #0D1326 60%, #13224a 100%)",
          color: "#E6EAF2",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", fontSize: 26, color: "#38BDF8", letterSpacing: 4 }}>
          OPEN TO PFE — JANUARY 2027
        </div>
        <div style={{ display: "flex", fontSize: 76, fontWeight: 700, marginTop: 24 }}>{profile.name}</div>
        <div style={{ display: "flex", fontSize: 38, color: "#A3ADC2", marginTop: 16 }}>
          Consultant SI · Business Analyst · Software Engineer
        </div>
        <div style={{ display: "flex", fontSize: 26, color: "#6B7690", marginTop: 48 }}>
          Information Systems Management &amp; Governance — ENSIASD
        </div>
        <div style={{ display: "flex", width: 160, height: 6, background: "#2563EB", marginTop: 40, borderRadius: 3 }} />
      </div>
    ),
    size
  );
}
