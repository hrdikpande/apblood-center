import {
  Dna,
  Syringe,
  Microscope,
  Baby,
  UserRound,
  FlaskConical,
  Droplet,
  Activity,
} from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { StaggerGrid, StaggerItem } from "@/components/motion/stagger-grid";

const EXPERTISE = [
  { label: "Adult Hematology", icon: UserRound },
  { label: "Pediatric Hematology", icon: Baby },
  { label: "Blood Cancer", icon: Dna },
  { label: "Bone Marrow Transplant", icon: FlaskConical },
  { label: "Chemotherapy & Immunotherapy", icon: Syringe },
  { label: "Bone Marrow Biopsy & Aspiration", icon: Microscope },
  { label: "Coagulation Disorders", icon: Droplet },
  { label: "Targeted Therapy", icon: Activity },
];

export function ExpertiseGrid() {
  return (
    <section className="bg-bg-neutral">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Areas of Expertise"
          title="A practice focused entirely on blood"
          description="Every area of expertise below sits within hematology — nothing broader, nothing diluted."
          align="center"
          className="mx-auto"
        />
        <StaggerGrid className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {EXPERTISE.map(({ label, icon: Icon }) => (
            <StaggerItem key={label}>
              <div className="flex h-full flex-col items-center gap-3 rounded-2xl border border-border bg-white p-5 text-center">
                <span className="flex size-11 items-center justify-center rounded-xl bg-rose text-brand">
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <span className="text-sm font-medium text-text-dark">{label}</span>
              </div>
            </StaggerItem>
          ))}
        </StaggerGrid>
      </div>
    </section>
  );
}
