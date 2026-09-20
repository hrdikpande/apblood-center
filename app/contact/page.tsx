import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, Phone, Mail, Clock, Navigation } from "lucide-react";
import { WhatsAppIcon } from "@/components/icons/whatsapp";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { Reveal } from "@/components/motion/reveal";
import { buttonVariants } from "@/components/ui/button";
import { NAP, telLink, whatsappLink } from "@/content/site";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact AP Blood & Blood Cancer Centre in Suryaraopeta, Vijayawada — phone, WhatsApp, email, directions and clinic hours.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <Breadcrumbs items={[{ name: "Contact", href: "/contact" }]} />
      <Reveal className="mt-6 max-w-2xl">
        <h1 className="font-display text-4xl font-bold text-text-dark sm:text-5xl">Contact Us</h1>
        <p className="prose-medical mt-4 text-lg text-text-light">
          Reach out by phone, WhatsApp or email, or find us on Prakasam Road, Suryaraopeta.
        </p>
      </Reveal>

      <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.2fr]">
        <Reveal className="space-y-4">
          <div className="flex items-start gap-3 rounded-2xl border border-border bg-white p-5">
            <MapPin className="mt-0.5 size-5 shrink-0 text-brand" aria-hidden="true" />
            <div>
              <h2 className="text-sm font-semibold text-text-dark">Address</h2>
              <p className="mt-1 text-sm text-text-light">{NAP.fullAddress}</p>
              <p className="mt-1 text-xs text-text-light">
                Landmark: Off Prakasam Road, Suryaraopeta — a central Vijayawada locality with
                nearby street and two-wheeler parking.
              </p>
              <a
                href={NAP.mapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center gap-1.5 text-sm font-semibold text-brand"
              >
                <Navigation className="size-4" aria-hidden="true" />
                Get Directions
              </a>
            </div>
          </div>

          <div className="flex items-start gap-3 rounded-2xl border border-border bg-white p-5">
            <Phone className="mt-0.5 size-5 shrink-0 text-brand" aria-hidden="true" />
            <div>
              <h2 className="text-sm font-semibold text-text-dark">Phone</h2>
              <a href={telLink()} className="mt-1 block text-sm text-text-light hover:text-brand">
                {NAP.phoneDisplay}
              </a>
            </div>
          </div>

          <div className="flex items-start gap-3 rounded-2xl border border-border bg-white p-5">
            <WhatsAppIcon className="mt-0.5 size-5 shrink-0 text-success" />
            <div>
              <h2 className="text-sm font-semibold text-text-dark">WhatsApp</h2>
              <a
                href={whatsappLink("Hello, I would like to know more about AP Blood & Blood Cancer Centre.")}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 block text-sm text-text-light hover:text-brand"
              >
                {NAP.phoneDisplay}
              </a>
            </div>
          </div>

          <div className="flex items-start gap-3 rounded-2xl border border-border bg-white p-5">
            <Mail className="mt-0.5 size-5 shrink-0 text-brand" aria-hidden="true" />
            <div>
              <h2 className="text-sm font-semibold text-text-dark">Email</h2>
              <a href={`mailto:${NAP.email}`} className="mt-1 block text-sm text-text-light hover:text-brand">
                {NAP.email}
              </a>
            </div>
          </div>

          <div className="flex items-start gap-3 rounded-2xl border border-border bg-white p-5">
            <Clock className="mt-0.5 size-5 shrink-0 text-brand" aria-hidden="true" />
            <div>
              <h2 className="text-sm font-semibold text-text-dark">Clinic Hours</h2>
              <p className="mt-1 text-sm text-text-light">Monday – Saturday, 9:00 AM – 6:00 PM</p>
            </div>
          </div>

          <Link href="/book-appointment" className={cn(buttonVariants({ size: "lg" }), "h-12 w-full rounded-full text-base")}>
            Book an Appointment
          </Link>
        </Reveal>

        <Reveal delay={0.1} className="overflow-hidden rounded-3xl border border-border">
          <iframe
            title="AP Blood & Blood Cancer Centre location map"
            src={`https://www.google.com/maps?q=${NAP.mapsEmbedQuery}&output=embed`}
            width="100%"
            height="100%"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="block min-h-[420px]"
          />
        </Reveal>
      </div>
    </div>
  );
}
