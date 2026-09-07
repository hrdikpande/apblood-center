import type { Metadata } from "next";
import { Video, FileCheck2, MessageCircle } from "lucide-react";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/motion/reveal";
import { StaggerGrid, StaggerItem } from "@/components/motion/stagger-grid";
import { SecondOpinionForm } from "@/components/forms/second-opinion-form";
import { CATCHMENT_CITIES } from "@/content/site";

export const metadata: Metadata = {
  title: "Online Second Opinion",
  description:
    "Request an online second opinion from a clinical haematologist at AP Blood & Blood Cancer Centre for patients outside Vijayawada.",
  alternates: { canonical: "/second-opinion" },
};

const STEPS = [
  {
    icon: FileCheck2,
    title: "Share your reports",
    description: "Send existing blood test reports, scans or prior treatment summaries along with your request.",
  },
  {
    icon: Video,
    title: "Consult by video or phone",
    description: "Discuss your case with a clinical haematologist over a scheduled video or phone consultation.",
  },
  {
    icon: MessageCircle,
    title: "Get a written summary",
    description: "Receive a clear summary of the assessment and recommended next steps to discuss with your local doctor.",
  },
];

export default function SecondOpinionPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <Breadcrumbs items={[{ name: "Second Opinion", href: "/second-opinion" }]} />

      <Reveal className="mt-6 max-w-2xl">
        <h1 className="font-display text-4xl font-bold text-text-dark sm:text-5xl">
          Online Second Opinion
        </h1>
        <p className="prose-medical mt-4 text-lg text-text-light">
          Families from {CATCHMENT_CITIES.slice(1).join(", ")} and beyond don&apos;t need to travel
          to Vijayawada for an initial review. Share your reports and consult a clinical
          haematologist remotely before deciding on next steps.
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

      <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.2fr]">
        <Reveal>
          <SectionHeading title="Who is this for?" />
          <ul className="prose-medical mt-5 space-y-3 text-text-dark">
            <li>Patients recently diagnosed with a blood disorder or blood cancer seeking a specialist review.</li>
            <li>Families outside Vijayawada — including Guntur, Tenali, Machilipatnam, Gudivada, Nuzvid, Eluru, Rajahmundry, Ongole and Khammam — weighing treatment options before travelling.</li>
            <li>Patients wanting clarity on a diagnosis or treatment plan before proceeding.</li>
          </ul>
        </Reveal>
        <Reveal delay={0.1} className="rounded-3xl border border-border bg-white p-6 sm:p-8">
          <SecondOpinionForm />
        </Reveal>
      </div>
    </div>
  );
}
