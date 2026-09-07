import Link from "next/link";
import { ArrowRight, GraduationCap } from "lucide-react";
import { DOCTOR } from "@/content/site";
import { Reveal } from "@/components/motion/reveal";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function DoctorIntro() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <Reveal className="order-2 lg:order-1">
          <span className="text-sm font-semibold uppercase tracking-wide text-brand">
            Your Specialist
          </span>
          <h2 className="mt-3 text-balance font-display text-3xl font-semibold text-text-dark sm:text-4xl">
            {DOCTOR.name}
          </h2>
          <p className="mt-1 text-base font-medium text-text-light">{DOCTOR.credentials}</p>
          <p className="prose-medical mt-5 text-text-dark">{DOCTOR.bio[0]}</p>

          <div className="mt-6 flex items-center gap-2.5 rounded-xl bg-bg-neutral p-4">
            <GraduationCap className="size-5 shrink-0 text-brand" aria-hidden="true" />
            <p className="text-sm text-text-dark">
              {DOCTOR.experienceYears}+ years of focused clinical haematology practice, including
              experience managing 500+ bone marrow transplant patients as part of specialist
              transplant teams.
            </p>
          </div>

          <Link
            href={`/${DOCTOR.slug}`}
            className={cn(buttonVariants({ variant: "outline", size: "lg" }), "mt-7 h-11 gap-2 rounded-full px-5")}
          >
            Meet Dr. Amarnadh Polisetty
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </Reveal>

        <Reveal delay={0.1} className="order-1 lg:order-2">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-rose/50 via-white to-rose/10">
            <div aria-hidden="true" className="animate-cell-a absolute -top-10 -left-10 size-48 rounded-full bg-rose/60 blur-3xl" />
            <div aria-hidden="true" className="animate-cell-c absolute -bottom-14 -right-10 size-56 rounded-full bg-brand/10 blur-3xl" />
            <div className="relative flex h-full flex-col items-center justify-center gap-4 p-8 text-center">
              <span className="flex size-24 items-center justify-center rounded-full border-2 border-brand/25 bg-white/80 font-display text-3xl font-bold text-brand backdrop-blur-sm">
                AP
              </span>
              <div>
                <p className="font-display text-base font-semibold text-text-dark">{DOCTOR.name}</p>
                <p className="mt-0.5 text-xs text-text-light">{DOCTOR.credentialsShort}</p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
