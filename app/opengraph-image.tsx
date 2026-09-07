import { ImageResponse } from "next/og";
import { SITE } from "@/content/site";

export const alt = "AP Blood & Blood Cancer Centre — Vijayawada";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "linear-gradient(135deg, #ffffff 0%, #fee2e2 100%)",
          padding: "80px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div style={{ width: 60, height: 60, borderRadius: 18, background: "#B91C1C", display: "flex" }} />
          <div style={{ fontSize: 30, fontWeight: 700, color: "#111827" }}>{SITE.shortName}</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 58, fontWeight: 700, color: "#111827", lineHeight: 1.15, maxWidth: 900 }}>
            Andhra Pradesh&apos;s dedicated centre for blood disorders &amp; blood cancer care
          </div>
        </div>
        <div style={{ fontSize: 24, color: "#6B7280" }}>Vijayawada, Andhra Pradesh</div>
      </div>
    ),
    { ...size }
  );
}
