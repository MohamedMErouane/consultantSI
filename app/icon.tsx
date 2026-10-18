import { ImageResponse } from "next/og";

// Favicon shown in browser tabs and next to the site in Google results.
export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#2563EB",
          borderRadius: 14,
          color: "white",
          fontSize: 34,
          fontWeight: 800,
          fontFamily: "sans-serif",
          letterSpacing: -1,
        }}
      >
        MM
      </div>
    ),
    size
  );
}
