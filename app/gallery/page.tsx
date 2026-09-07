import type { Metadata } from "next";
import { Images, Phone } from "lucide-react";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { Reveal } from "@/components/motion/reveal";
import { NAP, telLink } from "@/content/site";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "A look inside AP Blood & Blood Cancer Centre — reception, daycare ward and laboratory facilities in Vijayawada.",
  alternates: { canonical: "/gallery" },
};

export default function GalleryPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <Breadcrumbs items={[{ name: "Gallery", href: "/gallery" }]} />
      <Reveal className="mt-6 max-w-2xl">
        <h1 className="font-display text-4xl font-bold text-text-dark sm:text-5xl">Gallery</h1>
        <p className="prose-medical mt-4 text-lg text-text-light">
          A look inside the centre — our reception, daycare ward and diagnostic facilities.
        </p>
      </Reveal>

      <Reveal delay={0.1} className="mt-10 rounded-3xl border border-dashed border-border bg-white p-10 text-center sm:p-16">
        <Images className="mx-auto size-9 text-brand/60" aria-hidden="true" />
        <p className="mx-auto mt-4 max-w-md text-sm text-text-light">
          Photos of the centre are being prepared and will appear here soon. In the meantime, call
          or visit us at {NAP.fullAddress}.
        </p>
        <a
          href={telLink()}
          className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand hover:underline"
        >
          <Phone className="size-4" aria-hidden="true" />
          Call {NAP.phoneDisplay}
        </a>
      </Reveal>
    </div>
  );
}
