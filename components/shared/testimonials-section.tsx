import { Star, MessageSquareHeart, Award, Users, ShieldCheck } from "lucide-react";
import { testimonials } from "@/content/testimonials";
import { DOCTOR, STATS, whatsappLink } from "@/content/site";
import { StaggerGrid, StaggerItem } from "@/components/motion/stagger-grid";

/**
 * Renders only client-verified testimonials from content/testimonials.ts.
 * Never emits Review/aggregateRating schema — NMC + Google YMYL guardrail.
 * Shows an honest, still-useful trust state while the array is empty rather
 * than a dead end: verifiable credentials/stats stand in until real,
 * consented patient stories are collected.
 */
export function TestimonialsSection() {
  if (testimonials.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-border bg-white p-8 text-center sm:p-10">
        <MessageSquareHeart className="mx-auto size-8 text-brand/60" aria-hidden="true" />
        <p className="mx-auto mt-3 max-w-md text-sm text-text-light">
          Patient stories are being collected with written consent and will appear here soon.
          Until then, here&apos;s what&apos;s independently verifiable about the centre:
        </p>

        <div className="mx-auto mt-6 grid max-w-2xl grid-cols-1 gap-3 sm:grid-cols-3">
          <div className="flex flex-col items-center gap-2 rounded-xl bg-bg-neutral p-4">
            <Users className="size-5 text-brand" aria-hidden="true" />
            <p className="text-sm font-semibold text-text-dark">
              {STATS[1].value}+ BMT patients
            </p>
            <p className="text-xs text-text-light">managed by Dr. Polisetty</p>
          </div>
          <div className="flex flex-col items-center gap-2 rounded-xl bg-bg-neutral p-4">
            <Award className="size-5 text-brand" aria-hidden="true" />
            <p className="text-sm font-semibold text-text-dark">ASH Abstract Award</p>
            <p className="text-xs text-text-light">American Society of Hematology</p>
          </div>
          <div className="flex flex-col items-center gap-2 rounded-xl bg-bg-neutral p-4">
            <ShieldCheck className="size-5 text-brand" aria-hidden="true" />
            <p className="text-sm font-semibold text-text-dark">{DOCTOR.experienceYears}+ years</p>
            <p className="text-xs text-text-light">focused hematology practice</p>
          </div>
        </div>

        <a
          href={whatsappLink("Hello, I recently visited AP Blood & Blood Cancer Centre and would like to share my experience.")}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand hover:underline"
        >
          Been a patient here? Share your experience with us
        </a>
      </div>
    );
  }

  return (
    <StaggerGrid className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {testimonials.map((t, i) => (
        <StaggerItem key={i}>
          <figure className="flex h-full flex-col rounded-2xl border border-border bg-white p-6">
            <div className="flex gap-0.5" aria-hidden="true">
              {Array.from({ length: 5 }).map((_, star) => (
                <Star
                  key={star}
                  className={`size-4 ${star < t.rating ? "fill-brand text-brand" : "text-border"}`}
                />
              ))}
            </div>
            <blockquote className="mt-3 flex-1 text-sm text-text-dark">&ldquo;{t.quote}&rdquo;</blockquote>
            <figcaption className="mt-4 text-sm">
              <span className="font-semibold text-text-dark">{t.name}</span>
              <span className="text-text-light"> — {t.location}</span>
            </figcaption>
          </figure>
        </StaggerItem>
      ))}
    </StaggerGrid>
  );
}
