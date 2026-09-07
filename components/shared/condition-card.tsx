import Link from "next/link";
import { ArrowRight, Droplets } from "lucide-react";
import type { ConditionEntry } from "@/content/types";

export function ConditionCard({ entry }: { entry: ConditionEntry }) {
  return (
    <Link
      href={`/conditions/${entry.slug}`}
      className="group flex h-full flex-col rounded-2xl border border-border bg-white p-6 transition-all hover:-translate-y-1 hover:border-brand/30 hover:shadow-lg"
    >
      <span className="flex size-11 items-center justify-center rounded-xl bg-rose text-brand">
        <Droplets className="size-5" aria-hidden="true" />
      </span>
      <h3 className="mt-4 font-display text-lg font-semibold text-text-dark">{entry.shortLabel}</h3>
      <p className="mt-2 line-clamp-2 flex-1 text-sm text-text-light">{entry.directAnswer}</p>
      <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand">
        Learn more
        <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
      </span>
    </Link>
  );
}
