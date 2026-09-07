import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Building2, Microscope, Users2 } from "lucide-react";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/motion/reveal";
import { StaggerGrid, StaggerItem } from "@/components/motion/stagger-grid";
import { CtaBand } from "@/components/shared/cta-band";
import { buttonVariants } from "@/components/ui/button";
import { DOCTOR, SITE } from "@/content/site";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "About the Centre",
  description:
    "AP Blood & Blood Cancer Centre in Vijayawada is a specialty hematology centre offering diagnosis and personalized treatment for blood disorders and blood cancers.",
  alternates: { canonical: "/about" },
};

const PILLARS = [
  {
    icon: Building2,
    title: "A specialty centre, not a general hospital",
    description:
      "Every part of the centre — from the consultation process to on-site diagnostics — is organized around one specialty: hematology and blood cancer care.",
  },
  {
    icon: Microscope,
    title: "Diagnosis and treatment under one roof",
    description:
      "Bone marrow biopsy, aspiration and related diagnostic procedures are performed on-site, so diagnosis and treatment planning stay coordinated.",
  },
  {
    icon: Users2,
    title: "Care for adults and children",
    description:
      "The centre manages both adult and pediatric hematology cases, recognizing that blood disorders present differently across age groups.",
  },
];

export default function AboutPage() {
  return (
    <>
      <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ name: "About", href: "/about" }]} />

        <Reveal className="mt-6 max-w-2xl">
          <h1 className="font-display text-4xl font-bold text-text-dark sm:text-5xl">
            About AP Blood &amp; Blood Cancer Centre
          </h1>
          <p className="prose-medical mt-4 text-lg text-text-light">{SITE.description}</p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
          <Reveal>
            <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-rose/50 via-white to-rose/10">
              <div aria-hidden="true" className="animate-cell-a absolute -top-12 -right-8 size-48 rounded-full bg-rose/60 blur-3xl" />
              <div aria-hidden="true" className="animate-cell-b absolute -bottom-14 -left-10 size-52 rounded-full bg-brand/10 blur-3xl" />
              <Building2 className="relative size-16 text-brand/70" strokeWidth={1.25} aria-hidden="true" />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display text-2xl font-semibold text-text-dark">Our approach</h2>
            <p className="prose-medical mt-4 text-text-dark">
              AP Blood &amp; Blood Cancer Centre was established to give patients in Andhra Pradesh
              access to focused hematology care close to home, without needing to travel to a
              metro city for a specialist opinion. Rather than operating as one department within
              a large multi-speciality hospital, the centre is built entirely around blood
              disorders, bone marrow conditions and blood cancers.
            </p>
            <p className="prose-medical mt-4 text-text-dark">
              This narrow focus allows the clinical team, led by {DOCTOR.name}, to concentrate on
              depth of expertise and continuity of care — from the first consultation through
              diagnosis, treatment and long-term follow-up.
            </p>
            <Link
              href={`/${DOCTOR.slug}`}
              className={cn(buttonVariants({ variant: "outline", size: "lg" }), "mt-6 h-11 gap-2 rounded-full px-5")}
            >
              Meet {DOCTOR.name}
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </Reveal>
        </div>

        <section className="mt-16">
          <SectionHeading title="What sets a specialty centre apart" align="center" className="mx-auto" />
          <StaggerGrid className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-3">
            {PILLARS.map((pillar) => (
              <StaggerItem key={pillar.title}>
                <div className="h-full rounded-2xl border border-border bg-white p-6">
                  <span className="flex size-11 items-center justify-center rounded-xl bg-rose text-brand">
                    <pillar.icon className="size-5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-4 font-display text-lg font-semibold text-text-dark">{pillar.title}</h3>
                  <p className="mt-1.5 text-sm text-text-light">{pillar.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGrid>
        </section>
      </div>

      <CtaBand
        heading="Have questions about the centre?"
        body="Reach out to our team by phone or WhatsApp, or book a consultation directly."
      />
    </>
  );
}
