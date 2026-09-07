import { STATS } from "@/content/site";
import { CountUp } from "@/components/motion/count-up";
import { StaggerGrid, StaggerItem } from "@/components/motion/stagger-grid";

export function StatsSection() {
  return (
    <section className="border-y border-border bg-white">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <StaggerGrid className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {STATS.map((stat, i) => (
            <StaggerItem
              key={stat.label}
              className={`text-center ${i > 0 ? "lg:border-l lg:border-border lg:pl-8" : ""}`}
            >
              <div className="font-display text-4xl font-bold text-brand sm:text-5xl">
                <CountUp value={stat.value} suffix={stat.suffix} />
              </div>
              <p className="mt-2 text-sm text-text-light">{stat.label}</p>
            </StaggerItem>
          ))}
        </StaggerGrid>
      </div>
    </section>
  );
}
