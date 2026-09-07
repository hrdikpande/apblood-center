import type { Metadata } from "next";
import { FileCheck2, PhoneCall, ShieldCheck } from "lucide-react";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/motion/reveal";
import { StaggerGrid, StaggerItem } from "@/components/motion/stagger-grid";
import { CtaBand } from "@/components/shared/cta-band";
import { INSURANCE_SCHEMES, NAP, telLink } from "@/content/site";

export const metadata: Metadata = {
  title: "Insurance & Aarogyasri",
  description:
    "Information on cashless treatment support, Dr. NTR Vaidya Seva (Aarogyasri), EHS and insurance processes at AP Blood & Blood Cancer Centre, Vijayawada.",
  alternates: { canonical: "/insurance" },
};

const STEPS = [
  {
    icon: PhoneCall,
    title: "Confirm your scheme",
    description: "Call the centre with your policy or scheme details so our team can confirm current empanelment status before your visit.",
  },
  {
    icon: FileCheck2,
    title: "Share required documents",
    description: "Our team will guide you on the specific documents and approvals needed for cashless processing.",
  },
  {
    icon: ShieldCheck,
    title: "Coordinated support",
    description: "Where empanelment applies, our team coordinates directly with the scheme or insurer on your behalf.",
  },
];

export default function InsurancePage() {
  return (
    <>
      <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ name: "Insurance & Aarogyasri", href: "/insurance" }]} />

        <Reveal className="mt-6 max-w-2xl">
          <h1 className="font-display text-4xl font-bold text-text-dark sm:text-5xl">
            Insurance &amp; Aarogyasri
          </h1>
          <p className="prose-medical mt-4 text-lg text-text-light">
            We help eligible patients navigate cashless treatment support through Dr. NTR Vaidya
            Seva (Aarogyasri), Employees Health Scheme (EHS) and private health insurance, subject
            to current empanelment and policy terms.
          </p>
        </Reveal>

        <StaggerGrid className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-3">
          {STEPS.map((step, i) => (
            <StaggerItem key={step.title}>
              <div className="h-full rounded-2xl border border-border bg-white p-6">
                <span className="flex size-11 items-center justify-center rounded-xl bg-rose text-brand">
                  <step.icon className="size-5" aria-hidden="true" />
                </span>
                <h3 className="mt-4 font-display text-lg font-semibold text-text-dark">
                  {i + 1}. {step.title}
                </h3>
                <p className="mt-1.5 text-sm text-text-light">{step.description}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGrid>

        <section className="mt-14">
          <SectionHeading title="Current empanelment" />
          <Reveal className="mt-5">
            {INSURANCE_SCHEMES.length > 0 ? (
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {INSURANCE_SCHEMES.map((scheme) => (
                  <div key={scheme.name} className="rounded-2xl border border-border bg-white p-5">
                    <h3 className="font-display text-lg font-semibold text-text-dark">{scheme.name}</h3>
                    <p className="mt-1.5 text-sm text-text-light">{scheme.description}</p>
                  </div>
                ))}
              </div>
            ) : (
              <div className="rounded-2xl border border-dashed border-border bg-bg-neutral p-6 text-sm text-text-light">
                Empanelment details are confirmed directly with our team, as scheme participation
                can change. Please{" "}
                <a href={telLink()} className="font-semibold text-brand">
                  call {NAP.phoneDisplay}
                </a>{" "}
                to check current status for your specific scheme or insurer before your visit.
              </div>
            )}
          </Reveal>
        </section>
      </div>

      <CtaBand
        heading="Have a question about your coverage?"
        body="Call our team or send your policy details on WhatsApp and we'll help you understand your options."
      />
    </>
  );
}
