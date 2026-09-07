import Link from "next/link";
import { Globe2, ArrowRight } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { buttonVariants } from "@/components/ui/button";
import { CATCHMENT_CITIES } from "@/content/site";
import { cn } from "@/lib/utils";

export function SecondOpinionBand() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <Reveal>
        <div className="grid grid-cols-1 items-center gap-8 rounded-3xl border border-border bg-white p-8 lg:grid-cols-[auto_1fr_auto] lg:gap-10">
          <span className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-rose text-brand">
            <Globe2 className="size-7" aria-hidden="true" />
          </span>
          <div>
            <h3 className="font-display text-xl font-semibold text-text-dark sm:text-2xl">
              Outside Vijayawada? Get an online second opinion.
            </h3>
            <p className="mt-1.5 max-w-2xl text-sm text-text-light">
              Families from {CATCHMENT_CITIES.slice(1, 6).join(", ")} and beyond can share reports
              in advance and consult by video or phone before planning a visit.
            </p>
          </div>
          <Link
            href="/second-opinion"
            className={cn(buttonVariants({ size: "lg" }), "h-11 shrink-0 gap-2 rounded-full px-5")}
          >
            Request Second Opinion
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </div>
      </Reveal>
    </section>
  );
}
