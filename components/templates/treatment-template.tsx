import Link from "next/link";
import { ArrowRight, ListChecks, Users, Sparkles } from "lucide-react";
import type { TreatmentEntry } from "@/content/types";
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
import { medicalProcedureSchema, faqPageSchema } from "@/lib/schema";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function TreatmentTemplate({
  entry,
  breadcrumbHref,
}: {
  entry: TreatmentEntry;
  /** Allows the BMT flagship page to reuse this template under its own top-level URL. */
  breadcrumbHref?: string;
}) {
  const selfHref = breadcrumbHref ?? `/treatments/${entry.slug}`;

  return (
    <>
      <JsonLd data={medicalProcedureSchema(entry)} />
      <JsonLd data={faqPageSchema(entry.faqs)} />

      <section className="border-b border-border bg-bg-neutral">
        <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ name: "Treatments", href: "/treatments" }, { name: entry.name, href: selfHref }]} />
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
          <SectionHeading eyebrow="The process" title="What the treatment involves" />
          <div className="mt-6 space-y-4">
            {entry.process.map((step, i) => (
              <Reveal key={i} delay={i * 0.05} className="flex gap-4 rounded-2xl border border-border bg-white p-5">
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

        <section>
          <SectionHeading eyebrow="Candidacy" title="Who this treatment may be considered for" />
          <StaggerGrid className="mt-6 flex flex-wrap gap-2.5">
            {entry.candidacy.map((c, i) => (
              <StaggerItem key={i}>
                <span className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-4 py-2 text-sm text-text-dark">
                  <Users className="size-4 shrink-0 text-info" aria-hidden="true" />
                  {c}
                </span>
              </StaggerItem>
            ))}
          </StaggerGrid>
        </section>

        <section>
          <SectionHeading eyebrow="Patient experience" title="What to expect" />
          <Reveal className="mt-6 space-y-3">
            {entry.whatToExpect.map((p, i) => (
              <div key={i} className="flex items-start gap-3 rounded-xl bg-bg-neutral p-4">
                <ListChecks className="mt-0.5 size-5 shrink-0 text-success" aria-hidden="true" />
                <p className="text-sm text-text-dark">{p}</p>
              </div>
            ))}
          </Reveal>
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
          <span className="flex items-center gap-2">
            <Sparkles className="size-4 text-brand" aria-hidden="true" />
            Outstation and can&apos;t visit in person? Request an online second opinion.
          </span>
          <ArrowRight className="size-4 shrink-0 text-brand" aria-hidden="true" />
        </Link>
      </div>

      <CtaBand
        heading={entry.ctaHeading}
        body={entry.ctaBody}
        whatsappMessage={`Hello, I would like to know more about ${entry.name}.`}
      />
    </>
  );
}
