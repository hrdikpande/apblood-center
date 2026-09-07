import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { Reveal } from "@/components/motion/reveal";
import { FaqSection } from "@/components/shared/faq-section";
import { CtaBand } from "@/components/shared/cta-band";
import { homeFaqs, moreFaqs, teluguFaqs } from "@/content/faqs";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Answers to common questions about consulting a clinical haematologist, booking appointments, diagnosis and treatment at AP Blood & Blood Cancer Centre, Vijayawada.",
  alternates: { canonical: "/faqs" },
};

const allFaqs = [...homeFaqs, ...moreFaqs];

export default function FaqsPage() {
  return (
    <>
      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ name: "FAQs", href: "/faqs" }]} />
        <Reveal className="mt-6">
          <h1 className="font-display text-4xl font-bold text-text-dark sm:text-5xl">
            Frequently Asked Questions
          </h1>
          <p className="prose-medical mt-4 text-lg text-text-light">
            Answers to common questions about visiting the centre, diagnosis and treatment.
          </p>
        </Reveal>

        <div className="mt-8">
          <FaqSection faqs={allFaqs} idPrefix="faqs-page" />
        </div>

        <div className="mt-10 rounded-2xl border border-border bg-bg-neutral p-6">
          <h2 className="font-display text-lg font-semibold text-text-dark">తెలుగులో సాధారణ ప్రశ్నలు</h2>
          <div className="mt-4 space-y-6">
            {teluguFaqs.map((faq, i) => (
              <div key={i} className="space-y-1.5">
                <p className="text-sm font-semibold text-text-dark">{faq.questionTelugu}</p>
                <p className="text-sm text-text-light">{faq.answerTelugu}</p>
                <details className="mt-1 text-xs text-text-light">
                  <summary className="cursor-pointer select-none text-brand">Read in English</summary>
                  <p className="mt-1.5">
                    <span className="font-medium text-text-dark">{faq.question}</span> {faq.answer}
                  </p>
                </details>
              </div>
            ))}
          </div>
        </div>
      </div>

      <CtaBand
        heading="Still have questions?"
        body="Call our team or send us a message on WhatsApp — we're happy to help."
      />
    </>
  );
}
