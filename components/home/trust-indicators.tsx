import { Award, BadgeCheck, ShieldCheck, HeartHandshake } from "lucide-react";
import { DOCTOR } from "@/content/site";
import { SectionHeading } from "@/components/shared/section-heading";
import { StaggerGrid, StaggerItem } from "@/components/motion/stagger-grid";

const icons = [Award, BadgeCheck, ShieldCheck, HeartHandshake];

export function TrustIndicators() {
  const items = [...DOCTOR.achievements.slice(0, 3), "Medically reviewed content, reviewed regularly by Dr. Amarnadh Polisetty"];

  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <SectionHeading eyebrow="Credentials" title="Qualifications & recognition" align="center" className="mx-auto" />
      <StaggerGrid className="mt-10 divide-y divide-border rounded-2xl border border-border bg-white sm:grid sm:grid-cols-2 sm:divide-y-0 sm:divide-x lg:grid-cols-4">
        {items.map((item, i) => {
          const Icon = icons[i % icons.length];
          return (
            <StaggerItem key={i}>
              <div className="flex h-full items-start gap-3 p-6">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-rose text-brand">
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <p className="text-sm text-text-dark">{item}</p>
              </div>
            </StaggerItem>
          );
        })}
      </StaggerGrid>
    </section>
  );
}
