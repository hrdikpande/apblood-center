import { ShieldCheck } from "lucide-react";
import { DOCTOR } from "@/content/site";

function formatReviewDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-IN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

/**
 * Required on every condition/treatment/blog template — structurally enforces
 * the EEAT "medically reviewed by" guardrail rather than relying on convention.
 */
export function MedicallyReviewedBadge({ reviewDate }: { reviewDate: string }) {
  return (
    <div className="flex items-start gap-3 rounded-2xl border border-border bg-bg-neutral px-4 py-3 text-sm text-text-light">
      <ShieldCheck className="mt-0.5 size-5 shrink-0 text-success" aria-hidden="true" />
      <p>
        <span className="font-semibold text-text-dark">
          Medically reviewed by {DOCTOR.name}, {DOCTOR.credentialsShort}
        </span>
        <br />
        Last reviewed on {formatReviewDate(reviewDate)}
      </p>
    </div>
  );
}
