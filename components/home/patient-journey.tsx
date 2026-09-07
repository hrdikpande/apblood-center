import { MessageCircleQuestion, Microscope, ClipboardList, HeartPulse, CalendarClock } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/motion/reveal";

const STEPS = [
  { icon: MessageCircleQuestion, title: "Consult", description: "Meet Dr. Amarnadh Polisetty to discuss your symptoms, history and existing reports." },
  { icon: Microscope, title: "Diagnose", description: "On-site diagnostics — blood tests, bone marrow biopsy, imaging — confirm your diagnosis." },
  { icon: ClipboardList, title: "Plan", description: "A personalized treatment plan is built around your diagnosis, stage and overall health." },
  { icon: HeartPulse, title: "Treat", description: "Treatment is delivered and monitored closely, with supportive care throughout." },
  { icon: CalendarClock, title: "Follow-up", description: "Ongoing follow-up tracks your response and adjusts the plan as needed." },
];

export function PatientJourney() {
  return (
    <section className="bg-bg-neutral">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Your Journey" title="From first consult to follow-up" align="center" className="mx-auto" />
        <div className="relative mt-12 grid grid-cols-1 gap-8 sm:grid-cols-5 sm:gap-4">
          <div className="absolute left-0 right-0 top-6 hidden h-px bg-border sm:block" aria-hidden="true" />
          {STEPS.map((step, i) => (
            <Reveal key={step.title} delay={i * 0.08} className="relative flex flex-col items-center text-center">
              <span className="relative z-10 flex size-12 items-center justify-center rounded-full border-2 border-brand bg-white text-brand">
                <step.icon className="size-5" aria-hidden="true" />
              </span>
              <h3 className="mt-4 font-display text-lg font-semibold text-text-dark">
                {i + 1}. {step.title}
              </h3>
              <p className="mt-1.5 text-sm text-text-light">{step.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
