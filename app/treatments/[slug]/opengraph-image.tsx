import { ImageResponse } from "next/og";
import { treatmentSlugs, getTreatment } from "@/content/treatments";

export const alt = "AP Blood & Blood Cancer Centre";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return treatmentSlugs
    .filter((slug) => slug !== "bone-marrow-transplant")
    .map((slug) => ({ slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const entry = getTreatment(slug);
  const title = entry?.name ?? "AP Blood & Blood Cancer Centre";

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
          padding: "72px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div
            style={{
              width: 52,
              height: 52,
              borderRadius: 16,
              background: "#B91C1C",
              display: "flex",
            }}
          />
          <div style={{ fontSize: 26, fontWeight: 700, color: "#111827" }}>
            AP Blood &amp; Blood Cancer Centre
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 22, fontWeight: 600, color: "#B91C1C", marginBottom: 12 }}>
            Treatment
          </div>
          <div style={{ fontSize: 64, fontWeight: 700, color: "#111827", lineHeight: 1.1 }}>
            {title}
          </div>
        </div>
        <div style={{ fontSize: 22, color: "#6B7280" }}>Vijayawada, Andhra Pradesh</div>
      </div>
    ),
    { ...size }
  );
}
