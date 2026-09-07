import type { Metadata } from "next";
import Link from "next/link";
import { Baby, ShieldCheck, Users } from "lucide-react";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { SectionHeading } from "@/components/shared/section-heading";
import { MedicallyReviewedBadge } from "@/components/shared/medically-reviewed-badge";
import { Reveal } from "@/components/motion/reveal";
import { StaggerGrid, StaggerItem } from "@/components/motion/stagger-grid";
import { CtaBand } from "@/components/shared/cta-band";
import { FaqSection } from "@/components/shared/faq-section";

export const metadata: Metadata = {
  title: "Pediatric Hematology Program",
  description:
    "Diagnosis and management of blood disorders and blood cancers in children at AP Blood & Blood Cancer Centre, Vijayawada.",
  alternates: { canonical: "/programs/pediatric-hematology" },
};

const CONDITIONS = [
  { name: "Thalassemia", href: "/conditions/thalassemia" },
  { name: "Sickle Cell Disease", href: "/conditions/sickle-cell-disease" },
  { name: "Hemophilia", href: "/conditions/hemophilia" },
  { name: "Anemia", href: "/conditions/anemia" },
  { name: "Platelet Disorders", href: "/conditions/platelet-disorders" },
  { name: "Leukemia", href: "/conditions/leukemia" },
];

const faqs = [
  {
    question: "At what age can a child be seen for a blood disorder evaluation?",
    answer:
      "Children of any age, including infants, can be evaluated for suspected blood disorders. The approach to testing and treatment is adjusted to the child's age and specific condition.",
  },
  {
    question: "Are parents present during consultations and procedures?",
    answer:
      "Yes, a parent or guardian is present throughout consultations, and our team explains each step in advance for procedures such as blood draws or bone marrow tests.",
  },
  {
    question: "Does the centre manage childhood leukemia?",
    answer:
      "The centre evaluates and manages pediatric blood cancers, including childhood leukemia, with treatment plans personalized to the child's diagnosis, age and overall health.",
  },
];

export default function PediatricHematologyPage() {
  return (
    <>
      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ name: "Pediatric Hematology", href: "/programs/pediatric-hematology" }]} />

        <Reveal className="mt-6">
          <span className="inline-flex items-center gap-2 rounded-full bg-rose px-3 py-1.5 text-xs font-semibold text-brand">
            <Baby className="size-3.5" aria-hidden="true" />
            Program
          </span>
          <h1 className="mt-4 text-balance font-display text-4xl font-bold text-text-dark sm:text-5xl">
            Pediatric Hematology
          </h1>
          <p className="prose-medical mt-5 text-lg text-text-light">
            The pediatric hematology program at AP Blood &amp; Blood Cancer Centre diagnoses and
            manages blood disorders and blood cancers in infants, children and adolescents, with
            care adapted to a child&apos;s age, development and family needs.
          </p>
        </Reveal>

        <section className="mt-12">
          <SectionHeading title="A different approach for younger patients" />
          <Reveal className="prose-medical mt-6 space-y-4 text-text-dark">
            <p>
              Blood disorders in children often present differently than in adults, and treatment
              decisions must account for growth, development and long-term outcomes. Our approach
              combines careful diagnosis with clear communication for both the child and their
              family at every step.
            </p>
            <p>
              Common reasons for a pediatric hematology referral include unexplained anemia,
              easy bruising or bleeding, prolonged fevers with abnormal blood counts, or a family
              history of an inherited blood disorder such as thalassemia or sickle cell disease.
            </p>
          </Reveal>
        </section>

        <section className="mt-12">
          <SectionHeading eyebrow="Conditions" title="Conditions commonly managed in children" />
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
            <ShieldCheck className="size-6 text-brand" aria-hidden="true" />
            <h3 className="mt-3 font-display text-lg font-semibold text-text-dark">Family-centered care</h3>
            <p className="mt-1.5 text-sm text-text-light">
              Parents are involved in every discussion, with plain-language explanations of
              diagnosis, tests and treatment options.
            </p>
          </div>
          <div className="rounded-2xl border border-border bg-bg-neutral p-6">
            <Users className="size-6 text-brand" aria-hidden="true" />
            <h3 className="mt-3 font-display text-lg font-semibold text-text-dark">Coordinated diagnostics</h3>
            <p className="mt-1.5 text-sm text-text-light">
              Blood tests and, where needed, bone marrow evaluation are coordinated on-site to
              minimize the number of visits required.
            </p>
          </div>
        </section>

        <section className="mt-14">
          <SectionHeading eyebrow="FAQs" title="Common questions from parents" />
          <div className="mt-6">
            <FaqSection faqs={faqs} idPrefix="peds-faq" />
          </div>
        </section>

        <div className="mt-12">
          <MedicallyReviewedBadge reviewDate="2026-07-01" />
        </div>
      </div>

      <CtaBand
        heading="Concerned about your child's symptoms?"
        body="Book a consultation with a clinical haematologist experienced in pediatric blood disorders."
        whatsappMessage="Hello, I would like to book a pediatric hematology consultation."
      />
    </>
  );
}
