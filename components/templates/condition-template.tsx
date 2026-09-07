import Link from "next/link";
import { ArrowRight, CheckCircle2, AlertTriangle, Stethoscope, HeartPulse } from "lucide-react";
import type { ConditionEntry } from "@/content/types";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { SectionHeading } from "@/components/shared/section-heading";
import { MedicallyReviewedBadge } from "@/components/shared/medically-reviewed-badge";
import { CtaBand } from "@/components/shared/cta-band";
import { Reveal } from "@/components/motion/reveal";
import { StaggerGrid, StaggerItem } from "@/components/motion/stagger-grid";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { JsonLd } from "@/components/schema/json-ld";
import { medicalConditionSchema, faqPageSchema } from "@/lib/schema";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function ConditionTemplate({ entry }: { entry: ConditionEntry }) {
  return (
    <>
      <JsonLd data={medicalConditionSchema(entry)} />
      <JsonLd data={faqPageSchema(entry.faqs)} />

      <section className="border-b border-border bg-bg-neutral">
        <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ name: "Conditions", href: "/conditions" }, { name: entry.name, href: `/conditions/${entry.slug}` }]} />
          <Reveal className="mt-6">
            <h1 className="text-balance font-display text-4xl font-bold text-text-dark sm:text-5xl">
              {entry.name}
            </h1>
            <p className="prose-medical mt-5 text-lg text-text-light">{entry.directAnswer}</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link href="/book-appointment" className={cn(buttonVariants({ size: "lg" }), "h-11 rounded-full px-6")}>
                Book a Consultation
              </Link>
              <Link href="/second-opinion" className={cn(buttonVariants({ variant: "outline", size: "lg" }), "h-11 rounded-full px-6")}>
                Request a Second Opinion
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <div className="mx-auto max-w-4xl space-y-16 px-4 py-14 sm:px-6 lg:px-8">
        <section>
          <SectionHeading title={`Understanding ${entry.name}`} />
          <Reveal className="prose-medical mt-6 space-y-4 text-text-dark">
            {entry.understanding.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </Reveal>
        </section>

        <section>
          <SectionHeading eyebrow="Symptoms" title={`Signs of ${entry.name} to watch for`} />
          <StaggerGrid className="mt-6 grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2">
            {entry.symptoms.map((symptom, i) => (
              <StaggerItem key={i}>
                <div className="flex items-start gap-3 border-b border-border/70 py-3 sm:border-none sm:py-0">
                  <HeartPulse className="mt-0.5 size-5 shrink-0 text-brand" aria-hidden="true" />
                  <span className="text-sm text-text-dark">{symptom}</span>
                </div>
              </StaggerItem>
            ))}
          </StaggerGrid>
        </section>

        <section>
          <SectionHeading eyebrow="Red flags" title="When to see a haematologist" />
          <Reveal className="mt-6 space-y-3">
            {entry.whenToSeeDoctor.map((p, i) => (
              <div key={i} className="flex items-start gap-3 rounded-xl bg-rose/50 p-4">
                <AlertTriangle className="mt-0.5 size-5 shrink-0 text-brand" aria-hidden="true" />
                <p className="text-sm text-text-dark">{p}</p>
              </div>
            ))}
          </Reveal>
        </section>

        <section>
          <SectionHeading eyebrow="Diagnosis" title="Tests offered at the centre" />
          <StaggerGrid className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {entry.diagnosis.map((d, i) => (
              <StaggerItem key={i}>
                <div className="h-full rounded-2xl border border-border bg-white p-5">
                  <Stethoscope className="size-5 text-info" aria-hidden="true" />
                  <h3 className="mt-3 font-display text-lg font-semibold text-text-dark">{d.title}</h3>
                  <p className="mt-1.5 text-sm text-text-light">{d.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGrid>
        </section>

        <section>
          <SectionHeading eyebrow="Treatment" title="Treatment options" description="Your treatment plan is personalized to your diagnosis, subtype and overall health." />
          <StaggerGrid className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {entry.treatmentOptions.map((t, i) => (
              <StaggerItem key={i}>
                <div className="h-full rounded-2xl border border-border bg-white p-5">
                  <CheckCircle2 className="size-5 text-success" aria-hidden="true" />
                  <h3 className="mt-3 font-display text-lg font-semibold text-text-dark">{t.title}</h3>
                  <p className="mt-1.5 text-sm text-text-light">{t.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGrid>
        </section>

        <section>
          <SectionHeading title="Why choose AP Blood & Blood Cancer Centre" />
          <Reveal className="prose-medical mt-6 space-y-4 text-text-dark">
            {entry.whyHere.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </Reveal>
        </section>

        <section>
          <SectionHeading eyebrow="FAQs" title={`Common questions about ${entry.name}`} />
          <Reveal className="mt-6">
            <Accordion>
              {entry.faqs.map((faq, i) => (
                <AccordionItem key={i} value={`faq-${i}`}>
                  <AccordionTrigger className="font-display text-base">{faq.question}</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-text-light">{faq.answer}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        </section>

        <MedicallyReviewedBadge reviewDate={entry.reviewDate} />

        <Link
          href="/second-opinion"
          className="flex items-center justify-between rounded-2xl border border-brand/20 bg-rose/40 p-5 text-sm font-medium text-text-dark transition-colors hover:bg-rose"
        >
          Outstation and can&apos;t visit in person? Request an online second opinion.
          <ArrowRight className="size-4 shrink-0 text-brand" aria-hidden="true" />
        </Link>
      </div>

      <CtaBand
        heading={entry.ctaHeading}
        body={entry.ctaBody}
        whatsappMessage={`Hello, I would like to consult about ${entry.name}.`}
      />
    </>
  );
}
