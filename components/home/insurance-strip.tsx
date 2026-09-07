import Link from "next/link";
import { ShieldCheck, ArrowRight } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function InsuranceStrip() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <Reveal>
        <div className="flex flex-col items-start gap-5 rounded-3xl border border-brand/15 bg-rose/40 p-8 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-start gap-4">
            <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-white text-brand">
              <ShieldCheck className="size-6" aria-hidden="true" />
            </span>
            <div>
              <h3 className="font-display text-xl font-semibold text-text-dark">
                Cashless treatment support
              </h3>
              <p className="mt-1 max-w-xl text-sm text-text-light">
                We help eligible patients navigate Dr. NTR Vaidya Seva (Aarogyasri), EHS and
                private insurance processes. Confirm current empanelment status before your visit.
              </p>
            </div>
          </div>
          <Link
            href="/insurance"
            className={cn(buttonVariants({ size: "lg" }), "h-11 shrink-0 gap-2 rounded-full px-5")}
          >
            Insurance &amp; Aarogyasri
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </div>
      </Reveal>
    </section>
  );
}
