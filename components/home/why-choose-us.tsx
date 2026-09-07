import { Target, Beaker, MonitorSmartphone, UserCheck, Dna } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { StaggerGrid, StaggerItem } from "@/components/motion/stagger-grid";

const REASONS = [
  {
    icon: Target,
    title: "Specialty focus, not general medicine",
    description:
      "The centre treats blood disorders and blood cancers exclusively — every consultation, protocol and follow-up is built around hematology alone.",
  },
  {
    icon: Beaker,
    title: "Internationally aligned protocols",
    description:
      "Diagnosis and treatment planning follow internationally aligned clinical protocols, adapted to each patient's individual profile.",
  },
  {
    icon: MonitorSmartphone,
    title: "On-site diagnostics",
    description:
      "Bone marrow biopsy, aspiration and related diagnostic procedures are performed at the centre, keeping diagnosis and treatment coordinated in one place.",
  },
  {
    icon: UserCheck,
    title: "Personalized treatment planning",
    description:
      "Your treatment plan is built around your specific diagnosis, subtype, stage and overall health — not a one-size-fits-all protocol.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <Reveal>
          <div className="relative flex aspect-[4/5] w-full flex-col items-center justify-center overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-rose/50 via-white to-rose/10 p-8 text-center lg:aspect-auto lg:h-full lg:min-h-[26rem]">
            <div aria-hidden="true" className="animate-cell-b absolute -top-12 -left-12 size-52 rounded-full bg-rose/60 blur-3xl" />
            <div aria-hidden="true" className="animate-cell-a absolute -bottom-16 -right-10 size-56 rounded-full bg-brand/10 blur-3xl" />
            <Dna className="relative size-12 text-brand" strokeWidth={1.5} aria-hidden="true" />
            <p className="relative mt-5 max-w-[18rem] font-display text-xl font-semibold text-text-dark">
              &ldquo;Hematology only — nothing broader, nothing diluted.&rdquo;
            </p>
            <p className="relative mt-2 text-sm text-text-light">Dr. Amarnadh Polisetty</p>
          </div>
        </Reveal>

        <div>
          <span className="text-sm font-semibold uppercase tracking-wide text-brand">
            Why This Centre
          </span>
          <h2 className="mt-3 text-balance font-display text-3xl font-semibold text-text-dark sm:text-4xl">
            Care built around one specialty
          </h2>

          <StaggerGrid className="mt-8 space-y-5">
            {REASONS.map(({ icon: Icon, title, description }) => (
              <StaggerItem key={title}>
                <div className="flex gap-4">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-brand/10 text-brand">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-text-dark">{title}</h3>
                    <p className="mt-1 text-sm text-text-light">{description}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerGrid>
        </div>
      </div>
    </section>
  );
}
