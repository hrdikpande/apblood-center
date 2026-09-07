import Link from "next/link";
import { ArrowRight, Activity } from "lucide-react";
import type { TreatmentEntry } from "@/content/types";

export function TreatmentCard({ entry }: { entry: TreatmentEntry }) {
  const href = entry.slug === "bone-marrow-transplant" ? "/bone-marrow-transplant" : `/treatments/${entry.slug}`;
  const isFlagship = entry.slug === "bone-marrow-transplant";

  return (
    <Link
      href={href}
      className={`group flex h-full flex-col rounded-2xl border p-6 transition-all hover:-translate-y-1 hover:shadow-lg ${
        isFlagship ? "border-brand/30 bg-rose/40 hover:border-brand/50" : "border-border bg-white hover:border-brand/30"
      }`}
    >
      <span className="flex size-11 items-center justify-center rounded-xl bg-brand/10 text-brand">
        <Activity className="size-5" aria-hidden="true" />
      </span>
      {isFlagship && (
        <span className="mt-3 inline-block w-fit rounded-full bg-brand px-2.5 py-0.5 text-xs font-semibold text-white">
          Flagship Program
        </span>
      )}
      <h3 className="mt-3 font-display text-lg font-semibold text-text-dark">{entry.shortLabel}</h3>
      <p className="mt-2 line-clamp-2 flex-1 text-sm text-text-light">{entry.directAnswer}</p>
      <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand">
        Learn more
        <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
      </span>
    </Link>
  );
}
