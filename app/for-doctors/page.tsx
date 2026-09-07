import type { Metadata } from "next";
import { Stethoscope, ClipboardList, Users } from "lucide-react";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/motion/reveal";
import { StaggerGrid, StaggerItem } from "@/components/motion/stagger-grid";
import { ReferralForm } from "@/components/forms/referral-form";
import { NAP, telLink } from "@/content/site";

export const metadata: Metadata = {
  title: "For Referring Physicians",
  description:
    "Refer a patient to AP Blood & Blood Cancer Centre for hematology and blood cancer evaluation. Direct referral line and shared-care coordination.",
  alternates: { canonical: "/for-doctors" },
};

const POINTS = [
  {
    icon: Stethoscope,
    title: "Direct referral line",
    description: `Call ${NAP.phoneDisplay} or submit the form below and our team will coordinate scheduling directly with you.`,
  },
  {
    icon: ClipboardList,
    title: "Transfer of care protocol",
    description: "Share available reports and a brief clinical summary in advance so the initial consultation can focus on next steps.",
  },
  {
    icon: Users,
    title: "Shared-care model",
    description: "For patients who need ongoing local follow-up, we coordinate with the referring physician on a shared-care basis where appropriate.",
  },
];

export default function ForDoctorsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <Breadcrumbs items={[{ name: "For Referring Physicians", href: "/for-doctors" }]} />

      <Reveal className="mt-6 max-w-2xl">
        <h1 className="font-display text-4xl font-bold text-text-dark sm:text-5xl">
          For Referring Physicians
        </h1>
        <p className="prose-medical mt-4 text-lg text-text-light">
          AP Blood & Blood Cancer Centre works with referring physicians across Andhra Pradesh to
          coordinate hematology and blood cancer care for shared patients.
        </p>
      </Reveal>

      <StaggerGrid className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-3">
        {POINTS.map((point) => (
          <StaggerItem key={point.title}>
            <div className="h-full rounded-2xl border border-border bg-white p-6">
              <span className="flex size-11 items-center justify-center rounded-xl bg-rose text-brand">
                <point.icon className="size-5" aria-hidden="true" />
              </span>
              <h3 className="mt-4 font-display text-lg font-semibold text-text-dark">{point.title}</h3>
              <p className="mt-1.5 text-sm text-text-light">{point.description}</p>
            </div>
          </StaggerItem>
        ))}
      </StaggerGrid>

      <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.2fr]">
        <Reveal>
          <SectionHeading title="When to refer" />
          <ul className="prose-medical mt-5 space-y-3 text-text-dark">
            <li>Abnormal CBC findings requiring hematology work-up (unexplained cytopenias, elevated white cell counts, abnormal peripheral smear).</li>
            <li>Suspected leukemia, lymphoma or multiple myeloma requiring staging and treatment planning.</li>
            <li>Known bone marrow disorders, thalassemia, hemophilia or platelet disorders needing specialist management.</li>
            <li>Patients being evaluated for bone marrow transplant.</li>
          </ul>
        </Reveal>
        <Reveal delay={0.1} className="rounded-3xl border border-border bg-white p-6 sm:p-8">
          <h2 className="font-display text-xl font-semibold text-text-dark">Submit a Referral</h2>
          <div className="mt-5">
            <ReferralForm />
          </div>
        </Reveal>
      </div>

      <p className="mt-10 text-sm text-text-light">
        For urgent referrals, please call{" "}
        <a href={telLink()} className="font-semibold text-brand">
          {NAP.phoneDisplay}
        </a>{" "}
        directly.
      </p>
    </div>
  );
}
