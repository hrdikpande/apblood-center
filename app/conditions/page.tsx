import type { Metadata } from "next";
import { conditions } from "@/content/conditions";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { ConditionCard } from "@/components/shared/condition-card";
import { StaggerGrid, StaggerItem } from "@/components/motion/stagger-grid";
import { Reveal } from "@/components/motion/reveal";
import { CtaBand } from "@/components/shared/cta-band";

export const metadata: Metadata = {
  title: "Blood Conditions We Treat",
  description:
    "Diagnosis and personalized treatment planning for leukemia, lymphoma, multiple myeloma, thalassemia, hemophilia, anemia and other blood disorders in Vijayawada.",
  alternates: { canonical: "/conditions" },
};

export default function ConditionsHubPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <Breadcrumbs items={[{ name: "Conditions", href: "/conditions" }]} />
      <Reveal className="mt-6 max-w-2xl">
        <h1 className="font-display text-4xl font-bold text-text-dark sm:text-5xl">
          Blood Conditions We Treat
        </h1>
        <p className="mt-4 text-lg text-text-light">
          AP Blood &amp; Blood Cancer Centre focuses exclusively on hematology. Explore the blood
          disorders, bone marrow conditions and blood cancers Dr. Amarnadh Polisetty diagnoses and
          manages at the centre.
        </p>
      </Reveal>

      <StaggerGrid className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {conditions.map((entry) => (
          <StaggerItem key={entry.slug}>
            <ConditionCard entry={entry} />
          </StaggerItem>
        ))}
      </StaggerGrid>

      <div className="mt-16">
        <CtaBand
          heading="Not sure which condition matches your symptoms?"
          body="Book a consultation and let a clinical haematologist guide your diagnosis."
        />
      </div>
    </div>
  );
}
