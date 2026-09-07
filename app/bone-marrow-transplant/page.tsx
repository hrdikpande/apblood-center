import type { Metadata } from "next";
import { getTreatment } from "@/content/treatments";
import { TreatmentTemplate } from "@/components/templates/treatment-template";

const entry = getTreatment("bone-marrow-transplant")!;

export const metadata: Metadata = {
  title: entry.metaTitle,
  description: entry.metaDescription,
  alternates: { canonical: "/bone-marrow-transplant" },
  openGraph: { title: entry.metaTitle, description: entry.metaDescription },
};

export default function BoneMarrowTransplantPage() {
  return <TreatmentTemplate entry={entry} breadcrumbHref="/bone-marrow-transplant" />;
}
