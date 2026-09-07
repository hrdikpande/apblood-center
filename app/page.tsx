import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Hero } from "@/components/home/hero";
import { DoctorIntro } from "@/components/home/doctor-intro";
import { StatsSection } from "@/components/home/stats-section";
import { TrustIndicators } from "@/components/home/trust-indicators";
import { ExpertiseGrid } from "@/components/home/expertise-grid";
import { InsuranceStrip } from "@/components/home/insurance-strip";
import { WhyChooseUs } from "@/components/home/why-choose-us";
import { PatientJourney } from "@/components/home/patient-journey";
import { SecondOpinionBand } from "@/components/home/second-opinion-band";
import { SectionHeading } from "@/components/shared/section-heading";
import { ConditionCard } from "@/components/shared/condition-card";
import { TreatmentCard } from "@/components/shared/treatment-card";
import { BlogCard } from "@/components/shared/blog-card";
import { TestimonialsSection } from "@/components/shared/testimonials-section";
import { FaqSection } from "@/components/shared/faq-section";
import { CtaBand } from "@/components/shared/cta-band";
import { StaggerGrid, StaggerItem } from "@/components/motion/stagger-grid";
import { conditions } from "@/content/conditions";
import { treatments } from "@/content/treatments";
import { blogPosts } from "@/content/blog";
import { homeFaqs, teluguFaqs } from "@/content/faqs";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <DoctorIntro />
      <StatsSection />
      <TrustIndicators />
      <ExpertiseGrid />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeading eyebrow="Conditions" title="Conditions we treat" />
          <Link href="/conditions" className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand">
            View all conditions
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </div>
        <StaggerGrid className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {conditions.slice(0, 6).map((entry) => (
            <StaggerItem key={entry.slug}>
              <ConditionCard entry={entry} />
            </StaggerItem>
          ))}
        </StaggerGrid>
      </section>

      <section className="bg-bg-neutral">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionHeading eyebrow="Treatments" title="Treatments & procedures" />
            <Link href="/treatments" className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand">
              View all treatments
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </div>
          <StaggerGrid className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {treatments.map((entry) => (
              <StaggerItem key={entry.slug}>
                <TreatmentCard entry={entry} />
              </StaggerItem>
            ))}
          </StaggerGrid>
        </div>
      </section>

      <div className="py-16">
        <InsuranceStrip />
      </div>

      <WhyChooseUs />
      <PatientJourney />

      <div className="py-16">
        <SecondOpinionBand />
      </div>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Patient Stories" title="What patients say" align="center" className="mx-auto" />
        <div className="mt-10">
          <TestimonialsSection />
        </div>
      </section>

      <section className="bg-bg-neutral">
        <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="FAQs" title="Frequently asked questions" align="center" className="mx-auto" />
          <div className="mt-8">
            <FaqSection faqs={homeFaqs} idPrefix="home-faq" />
          </div>

          <div className="mt-10 rounded-2xl border border-border bg-white p-6">
            <h3 className="font-display text-base font-semibold text-text-dark">తెలుగులో సాధారణ ప్రశ్నలు</h3>
            <div className="mt-4 space-y-6">
              {teluguFaqs.map((faq, i) => (
                <div key={i} className="space-y-1.5">
                  <p className="text-sm font-semibold text-text-dark">{faq.questionTelugu}</p>
                  <p className="text-sm text-text-light">{faq.answerTelugu}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeading eyebrow="From the Blog" title="Latest articles" />
          <Link href="/blog" className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand">
            View all articles
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </div>
        <StaggerGrid className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.slice(0, 3).map((post) => (
            <StaggerItem key={post.slug}>
              <BlogCard post={post} />
            </StaggerItem>
          ))}
        </StaggerGrid>
      </section>

      <CtaBand
        heading="Ready to consult a clinical haematologist?"
        body="Book an appointment at AP Blood & Blood Cancer Centre, Vijayawada, or reach out on WhatsApp for a quick response."
      />
    </>
  );
}
