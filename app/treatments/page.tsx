import type { Metadata } from "next";
import { treatments } from "@/content/treatments";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { TreatmentCard } from "@/components/shared/treatment-card";
import { StaggerGrid, StaggerItem } from "@/components/motion/stagger-grid";
import { Reveal } from "@/components/motion/reveal";
import { CtaBand } from "@/components/shared/cta-band";

export const metadata: Metadata = {
  title: "Treatments & Procedures",
  description:
    "Bone marrow transplant, chemotherapy, immunotherapy, targeted therapy and diagnostic procedures offered at AP Blood & Blood Cancer Centre, Vijayawada.",
  alternates: { canonical: "/treatments" },
};

export default function TreatmentsHubPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <Breadcrumbs items={[{ name: "Treatments", href: "/treatments" }]} />
      <Reveal className="mt-6 max-w-2xl">
        <h1 className="font-display text-4xl font-bold text-text-dark sm:text-5xl">
          Treatments &amp; Procedures
        </h1>
        <p className="mt-4 text-lg text-text-light">
          From diagnostic bone marrow procedures to bone marrow transplant, chemotherapy,
          immunotherapy and targeted therapy — every treatment plan is personalized to your
          diagnosis and overall health.
        </p>
      </Reveal>

      <StaggerGrid className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {treatments.map((entry) => (
          <StaggerItem key={entry.slug}>
            <TreatmentCard entry={entry} />
          </StaggerItem>
        ))}
      </StaggerGrid>

      <div className="mt-16">
        <CtaBand
          heading="Wondering which treatment path is right for you?"
          body="Book a consultation to discuss a personalized treatment plan with a clinical haematologist."
        />
      </div>
    </div>
  );
}
