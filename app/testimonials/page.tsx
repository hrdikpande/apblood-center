import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { Reveal } from "@/components/motion/reveal";
import { TestimonialsSection } from "@/components/shared/testimonials-section";
import { CtaBand } from "@/components/shared/cta-band";
import { NAP } from "@/content/site";

export const metadata: Metadata = {
  title: "Patient Testimonials",
  description:
    "Patient stories and experiences from AP Blood & Blood Cancer Centre, Vijayawada, shared with written consent.",
  alternates: { canonical: "/testimonials" },
};

export default function TestimonialsPage() {
  return (
    <>
      <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ name: "Testimonials", href: "/testimonials" }]} />
        <Reveal className="mt-6 max-w-2xl">
          <h1 className="font-display text-4xl font-bold text-text-dark sm:text-5xl">
            Patient Testimonials
          </h1>
          <p className="prose-medical mt-4 text-lg text-text-light">
            Stories shared here are published only with a patient&apos;s explicit written consent.
          </p>
        </Reveal>

        <div className="mt-10">
          <TestimonialsSection />
        </div>

        <p className="mt-10 text-sm text-text-light">
          If you&apos;d like to share your experience with the centre, write to us at{" "}
          <a href={`mailto:${NAP.email}`} className="font-semibold text-brand">
            {NAP.email}
          </a>
          .
        </p>
      </div>

      <CtaBand
        heading="Ready to consult a clinical haematologist?"
        body="Book an appointment at AP Blood & Blood Cancer Centre, Vijayawada."
      />
    </>
  );
}
