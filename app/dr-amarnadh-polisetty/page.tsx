import type { Metadata } from "next";
import Image from "next/image";
import { GraduationCap, Award, Stethoscope } from "lucide-react";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/motion/reveal";
import { StaggerGrid, StaggerItem } from "@/components/motion/stagger-grid";
import { CtaBand } from "@/components/shared/cta-band";
import { DOCTOR } from "@/content/site";

export const metadata: Metadata = {
  title: `${DOCTOR.name} | Clinical Haematologist, Vijayawada`,
  description: `${DOCTOR.name} is a clinical haematologist and haemato-oncologist in Vijayawada, focused exclusively on blood disorders, bone marrow conditions and blood cancer.`,
  alternates: { canonical: `/${DOCTOR.slug}` },
};

export default function DoctorProfilePage() {
  return (
    <>
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ name: DOCTOR.name, href: `/${DOCTOR.slug}` }]} />

        <div className="mt-8 grid grid-cols-1 items-start gap-10 lg:grid-cols-[320px_1fr]">
          <Reveal>
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-rose/50 via-white to-rose/10">
              <div aria-hidden="true" className="animate-cell-a absolute -top-10 -right-10 size-44 rounded-full bg-rose/60 blur-3xl" />
              <div aria-hidden="true" className="animate-cell-c absolute -bottom-12 -left-10 size-48 rounded-full bg-brand/10 blur-3xl" />
              <Image
                src={DOCTOR.photoConsult.src}
                alt={DOCTOR.photoConsult.alt}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 320px"
                className="object-cover object-top"
              />
              <div
                aria-hidden="true"
                className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-text-dark/75 to-transparent"
              />
              <p className="absolute inset-x-0 bottom-0 p-4 text-center text-xs text-white/85">
                {DOCTOR.credentialsShort}
              </p>
            </div>
            <div className="mt-5 rounded-2xl border border-border bg-white p-5">
              <h2 className="text-sm font-semibold text-text-dark">Education</h2>
              <ul className="mt-2 space-y-1.5 text-sm text-text-light">
                {DOCTOR.education.map((e) => (
                  <li key={e} className="flex items-center gap-2">
                    <GraduationCap className="size-4 shrink-0 text-brand" aria-hidden="true" />
                    {e}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="text-balance font-display text-4xl font-bold text-text-dark sm:text-5xl">
              {DOCTOR.name}
            </h1>
            <p className="mt-2 text-lg font-medium text-brand">{DOCTOR.title}</p>
            <p className="mt-1 text-sm text-text-light">{DOCTOR.credentials}</p>

            <div className="prose-medical mt-6 space-y-4 text-text-dark">
              {DOCTOR.bio.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </Reveal>
        </div>

        <section className="mt-16">
          <SectionHeading eyebrow="Achievements" title="Recognition & experience" />
          <StaggerGrid className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {DOCTOR.achievements.map((a, i) => (
              <StaggerItem key={i}>
                <div className="flex h-full items-start gap-3 rounded-2xl border border-border bg-white p-5">
                  <Award className="mt-0.5 size-5 shrink-0 text-brand" aria-hidden="true" />
                  <p className="text-sm text-text-dark">{a}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGrid>
        </section>

        <section className="mt-16">
          <SectionHeading eyebrow="Expertise" title="Clinical areas of focus" />
          <StaggerGrid className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {DOCTOR.expertise.map((e) => (
              <StaggerItem key={e}>
                <div className="flex items-center gap-2 rounded-xl bg-bg-neutral p-3.5">
                  <Stethoscope className="size-4 shrink-0 text-brand" aria-hidden="true" />
                  <span className="text-sm text-text-dark">{e}</span>
                </div>
              </StaggerItem>
            ))}
          </StaggerGrid>
        </section>
      </div>

      <CtaBand
        heading={`Consult ${DOCTOR.name}`}
        body="Book an appointment to discuss your diagnosis, symptoms or treatment options."
        whatsappMessage={`Hello, I would like to book a consultation with ${DOCTOR.name}.`}
      />
    </>
  );
}
