import type { Metadata } from "next";
import Link from "next/link";
import { UserRound, Activity, Stethoscope } from "lucide-react";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { SectionHeading } from "@/components/shared/section-heading";
import { MedicallyReviewedBadge } from "@/components/shared/medically-reviewed-badge";
import { Reveal } from "@/components/motion/reveal";
import { StaggerGrid, StaggerItem } from "@/components/motion/stagger-grid";
import { CtaBand } from "@/components/shared/cta-band";
import { FaqSection } from "@/components/shared/faq-section";

export const metadata: Metadata = {
  title: "Adult Hematology Program",
  description:
    "Diagnosis and personalized treatment for adult blood disorders and blood cancers at AP Blood & Blood Cancer Centre, Vijayawada.",
  alternates: { canonical: "/programs/adult-hematology" },
};

const CONDITIONS = [
  { name: "Leukemia", href: "/conditions/leukemia" },
  { name: "Lymphoma", href: "/conditions/lymphoma" },
  { name: "Multiple Myeloma", href: "/conditions/multiple-myeloma" },
  { name: "Anemia", href: "/conditions/anemia" },
  { name: "Bone Marrow Disorders", href: "/conditions/bone-marrow-disorders" },
  { name: "Platelet Disorders", href: "/conditions/platelet-disorders" },
];

const faqs = [
  {
    question: "What symptoms in adults warrant a hematology referral?",
    answer:
      "Persistent fatigue, unexplained weight loss, easy bruising or bleeding, recurrent infections, night sweats and unexplained lymph node swelling are common reasons for referral. Routine abnormal blood counts can also prompt a specialist evaluation.",
  },
  {
    question: "Does adult hematology include blood cancer care?",
    answer:
      "Yes. The adult hematology program covers both non-cancerous blood disorders and blood cancers such as leukemia, lymphoma and multiple myeloma, including coordination of bone marrow transplant when relevant.",
  },
  {
    question: "Can I get a second opinion on an existing diagnosis?",
    answer:
      "Yes — you can request an online second opinion by sharing your existing reports, or book an in-person consultation to discuss your case in detail.",
  },
];

export default function AdultHematologyPage() {
  return (
    <>
      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ name: "Adult Hematology", href: "/programs/adult-hematology" }]} />

        <Reveal className="mt-6">
          <span className="inline-flex items-center gap-2 rounded-full bg-rose px-3 py-1.5 text-xs font-semibold text-brand">
            <UserRound className="size-3.5" aria-hidden="true" />
            Program
          </span>
          <h1 className="mt-4 text-balance font-display text-4xl font-bold text-text-dark sm:text-5xl">
            Adult Hematology
          </h1>
          <p className="prose-medical mt-5 text-lg text-text-light">
            The adult hematology program diagnoses and manages the full range of blood disorders
            and blood cancers in adults — from routine abnormal blood counts to complex cases
            requiring bone marrow transplant.
          </p>
        </Reveal>

        <section className="mt-12">
          <SectionHeading title="A single point of specialist care" />
          <Reveal className="prose-medical mt-6 space-y-4 text-text-dark">
            <p>
              Adult patients are referred to hematology for a wide range of reasons — an abnormal
              routine blood test, unexplained fatigue or bruising, or a confirmed diagnosis
              requiring ongoing specialist management. The program is built to handle each of
              these starting points with the same depth of expertise.
            </p>
            <p>
              For patients with a confirmed blood cancer diagnosis, treatment planning considers
              subtype, stage and overall health, drawing on chemotherapy, immunotherapy, targeted
              therapy and, where appropriate, bone marrow transplant.
            </p>
          </Reveal>
        </section>

        <section className="mt-12">
          <SectionHeading eyebrow="Conditions" title="Conditions commonly managed in adults" />
          <StaggerGrid className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
            {CONDITIONS.map((c) => (
              <StaggerItem key={c.href}>
                <Link href={c.href} className="flex h-full items-center gap-2 rounded-xl border border-border bg-white p-4 text-sm font-medium text-text-dark hover:border-brand/30 hover:text-brand">
                  {c.name}
                </Link>
              </StaggerItem>
            ))}
          </StaggerGrid>
        </section>

        <section className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2">
          <div className="rounded-2xl border border-border bg-bg-neutral p-6">
            <Stethoscope className="size-6 text-brand" aria-hidden="true" />
            <h3 className="mt-3 font-display text-lg font-semibold text-text-dark">Full diagnostic workup</h3>
            <p className="mt-1.5 text-sm text-text-light">
              From CBC and peripheral smear to bone marrow biopsy and flow cytometry, diagnostics
              are coordinated on-site.
            </p>
          </div>
          <div className="rounded-2xl border border-border bg-bg-neutral p-6">
            <Activity className="size-6 text-brand" aria-hidden="true" />
            <h3 className="mt-3 font-display text-lg font-semibold text-text-dark">Personalized treatment planning</h3>
            <p className="mt-1.5 text-sm text-text-light">
              Treatment plans are built around your specific diagnosis and health profile, not a
              standard protocol applied to everyone.
            </p>
          </div>
        </section>

        <section className="mt-14">
          <SectionHeading eyebrow="FAQs" title="Common questions" />
          <div className="mt-6">
            <FaqSection faqs={faqs} idPrefix="adult-faq" />
          </div>
        </section>

        <div className="mt-12">
          <MedicallyReviewedBadge reviewDate="2026-07-01" />
        </div>
      </div>

      <CtaBand
        heading="Have symptoms or an abnormal blood test result?"
        body="Book a consultation with a clinical haematologist for a thorough evaluation."
      />
    </>
  );
}
