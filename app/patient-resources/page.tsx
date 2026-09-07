import type { Metadata } from "next";
import Link from "next/link";
import { FileText, ListChecks, HeartHandshake, Wallet } from "lucide-react";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/motion/reveal";
import { CtaBand } from "@/components/shared/cta-band";

export const metadata: Metadata = {
  title: "Patient Resources",
  description:
    "What to expect at your first visit, a pre-appointment checklist and practical guidance for patients of AP Blood & Blood Cancer Centre, Vijayawada.",
  alternates: { canonical: "/patient-resources" },
};

const CHECKLIST = [
  "A valid photo ID",
  "Recent blood test reports, scans or biopsy results, if available",
  "A list of current medications and dosages",
  "A brief written history of your symptoms, including when they started",
  "Insurance or Aarogyasri card, if applicable",
  "A family member or attendant, especially for a first visit",
];

const WHAT_TO_EXPECT = [
  {
    title: "Before your visit",
    description: "If you have prior reports, share them in advance where possible so the consultation can focus on discussing findings and next steps.",
  },
  {
    title: "During your consultation",
    description: "Dr. Amarnadh Polisetty will review your history and reports, examine you, and explain what further tests, if any, are needed.",
  },
  {
    title: "If further testing is needed",
    description: "Diagnostic procedures such as blood tests, bone marrow biopsy or imaging can typically be arranged on-site.",
  },
  {
    title: "After your diagnosis",
    description: "You'll receive a personalized treatment plan, explained in plain language, along with an opportunity to ask questions before proceeding.",
  },
];

export default function PatientResourcesPage() {
  return (
    <>
      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ name: "Patient Resources", href: "/patient-resources" }]} />

        <Reveal className="mt-6 max-w-2xl">
          <h1 className="font-display text-4xl font-bold text-text-dark sm:text-5xl">
            Patient Resources
          </h1>
          <p className="prose-medical mt-4 text-lg text-text-light">
            Practical guidance to help you prepare for your first visit and understand what to
            expect at each stage of care.
          </p>
        </Reveal>

        <section className="mt-12">
          <SectionHeading eyebrow="First Visit" title="Before you arrive: a quick checklist" />
          <Reveal className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {CHECKLIST.map((item) => (
              <div key={item} className="flex items-start gap-3 rounded-xl border border-border bg-white p-4">
                <ListChecks className="mt-0.5 size-5 shrink-0 text-success" aria-hidden="true" />
                <span className="text-sm text-text-dark">{item}</span>
              </div>
            ))}
          </Reveal>
        </section>

        <section className="mt-14">
          <SectionHeading eyebrow="What to Expect" title="Your care, stage by stage" />
          <div className="mt-6 space-y-4">
            {WHAT_TO_EXPECT.map((step, i) => (
              <Reveal key={step.title} delay={i * 0.05} className="flex gap-4 rounded-2xl border border-border bg-white p-5">
                <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-rose font-display text-sm font-semibold text-brand">
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-display text-lg font-semibold text-text-dark">{step.title}</h3>
                  <p className="mt-1.5 text-sm text-text-light">{step.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2">
          <Reveal className="rounded-2xl border border-border bg-bg-neutral p-6">
            <FileText className="size-6 text-brand" aria-hidden="true" />
            <h3 className="mt-3 font-display text-lg font-semibold text-text-dark">Understanding your diagnosis</h3>
            <p className="mt-1.5 text-sm text-text-light">
              Read our <Link href="/blog" className="font-medium text-brand hover:underline">patient guides</Link> for plain-language explanations of common blood conditions and treatments.
            </p>
          </Reveal>
          <Reveal delay={0.05} className="rounded-2xl border border-border bg-bg-neutral p-6">
            <Wallet className="size-6 text-brand" aria-hidden="true" />
            <h3 className="mt-3 font-display text-lg font-semibold text-text-dark">Insurance & Aarogyasri</h3>
            <p className="mt-1.5 text-sm text-text-light">
              Visit our <Link href="/insurance" className="font-medium text-brand hover:underline">Insurance page</Link> to understand cashless treatment support and empanelment.
            </p>
          </Reveal>
        </section>

        <div className="mt-14 flex items-start gap-3 rounded-2xl bg-rose/40 p-5">
          <HeartHandshake className="mt-0.5 size-5 shrink-0 text-brand" aria-hidden="true" />
          <p className="text-sm text-text-dark">
            Newly diagnosed and unsure where to start? Call our team — we&apos;re happy to walk you
            through what to expect before your first visit.
          </p>
        </div>
      </div>

      <CtaBand
        heading="Ready to schedule your first visit?"
        body="Book an appointment and our team will help you prepare."
      />
    </>
  );
}
