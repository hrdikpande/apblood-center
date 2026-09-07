import type { Metadata } from "next";
import { MapPin, Phone, Clock } from "lucide-react";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { Reveal } from "@/components/motion/reveal";
import { AppointmentForm } from "@/components/forms/appointment-form";
import { NAP, telLink } from "@/content/site";

export const metadata: Metadata = {
  title: "Book an Appointment",
  description:
    "Book a consultation with Dr. Amarnadh Polisetty, Clinical Haematologist, at AP Blood & Blood Cancer Centre, Vijayawada.",
  alternates: { canonical: "/book-appointment" },
};

export default function BookAppointmentPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
      <Breadcrumbs items={[{ name: "Book an Appointment", href: "/book-appointment" }]} />

      <div className="mt-8 grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.2fr]">
        <Reveal>
          <h1 className="font-display text-3xl font-bold text-text-dark sm:text-4xl">
            Book an Appointment
          </h1>
          <p className="prose-medical mt-4 text-text-light">
            Share a few details below and our team will call you to confirm your visit. If your
            case is urgent, please call the centre directly.
          </p>

          <div className="mt-8 space-y-4 rounded-2xl border border-border bg-bg-neutral p-5">
            <div className="flex items-start gap-3">
              <MapPin className="mt-0.5 size-5 shrink-0 text-brand" aria-hidden="true" />
              <p className="text-sm text-text-dark">{NAP.fullAddress}</p>
            </div>
            <div className="flex items-start gap-3">
              <Phone className="mt-0.5 size-5 shrink-0 text-brand" aria-hidden="true" />
              <a href={telLink()} className="text-sm text-text-dark hover:text-brand">
                {NAP.phoneDisplay}
              </a>
            </div>
            <div className="flex items-start gap-3">
              <Clock className="mt-0.5 size-5 shrink-0 text-brand" aria-hidden="true" />
              <p className="text-sm text-text-dark">Monday – Saturday, 9:00 AM – 6:00 PM</p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="rounded-3xl border border-border bg-white p-6 sm:p-8">
          <AppointmentForm />
        </Reveal>
      </div>
    </div>
  );
}
