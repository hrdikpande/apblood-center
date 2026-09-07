import type { Metadata } from "next";
import { notFound, redirect } from "next/navigation";
import { treatmentSlugs, getTreatment } from "@/content/treatments";
import { TreatmentTemplate } from "@/components/templates/treatment-template";

// The Bone Marrow Transplant entry is rendered at its own flagship URL
// (/bone-marrow-transplant) instead of under /treatments/[slug].
const routedSlugs = treatmentSlugs.filter((slug) => slug !== "bone-marrow-transplant");

export function generateStaticParams() {
  return routedSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const entry = getTreatment(slug);
  if (!entry || slug === "bone-marrow-transplant") return {};

  return {
    title: entry.metaTitle,
    description: entry.metaDescription,
    alternates: { canonical: `/treatments/${entry.slug}` },
    openGraph: { title: entry.metaTitle, description: entry.metaDescription },
  };
}

export default async function TreatmentPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  if (slug === "bone-marrow-transplant") redirect("/bone-marrow-transplant");

  const entry = getTreatment(slug);
  if (!entry) notFound();

  return <TreatmentTemplate entry={entry} />;
}
