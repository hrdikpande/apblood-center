import Image from "next/image";
import Link from "next/link";
import { Phone, MapPin, Mail } from "lucide-react";
import { WhatsAppIcon } from "@/components/icons/whatsapp";
import { NAP, SITE, FOOTER_LINKS, telLink, whatsappLink } from "@/content/site";
import { conditions } from "@/content/conditions";
import { treatments } from "@/content/treatments";
import { DisclaimerBlock } from "@/components/shared/disclaimer-block";

export function Footer() {
  return (
    <footer className="border-t border-border bg-bg-neutral pb-20 lg:pb-0">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Link href="/" aria-label={`${SITE.shortName} — home`} className="inline-flex items-center">
              <Image
                src="/logo.jpeg"
                alt={SITE.name}
                width={330}
                height={120}
                className="h-12 w-auto"
              />
            </Link>
            <p className="mt-4 max-w-sm text-sm text-text-light">{SITE.description}</p>

            <div className="mt-6 space-y-2.5 text-sm">
              <a href={NAP.mapsDirectionsUrl} target="_blank" rel="noopener noreferrer" className="flex items-start gap-2.5 text-text-light hover:text-brand">
                <MapPin className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
                {NAP.fullAddress}
              </a>
              <a href={telLink()} className="flex items-center gap-2.5 text-text-light hover:text-brand">
                <Phone className="size-4 shrink-0" aria-hidden="true" />
                {NAP.phoneDisplay}
              </a>
              <a href={whatsappLink("Hello, I would like to know more about AP Blood & Blood Cancer Centre.")} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 text-text-light hover:text-brand">
                <WhatsAppIcon className="size-4 shrink-0" />
                WhatsApp {NAP.phoneDisplay}
              </a>
              <a href={`mailto:${NAP.email}`} className="flex items-center gap-2.5 text-text-light hover:text-brand">
                <Mail className="size-4 shrink-0" aria-hidden="true" />
                {NAP.email}
              </a>
            </div>
          </div>

          <FooterColumn title="The Centre" links={FOOTER_LINKS.centre} />
          <FooterColumn title="Programs" links={FOOTER_LINKS.programs} />

          <div>
            <h3 className="text-sm font-semibold text-text-dark">Conditions We Treat</h3>
            <ul className="mt-4 space-y-2.5">
              {conditions.map((c) => (
                <li key={c.slug}>
                  <Link href={`/conditions/${c.slug}`} className="text-sm text-text-light hover:text-brand">
                    {c.shortLabel}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10">
          <h3 className="text-sm font-semibold text-text-dark">Treatments</h3>
          <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2">
            {treatments.map((t) => (
              <Link
                key={t.slug}
                href={t.slug === "bone-marrow-transplant" ? "/bone-marrow-transplant" : `/treatments/${t.slug}`}
                className="text-sm text-text-light hover:text-brand"
              >
                {t.shortLabel}
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-10 overflow-hidden rounded-2xl border border-border">
          <iframe
            title="AP Blood & Blood Cancer Centre location map"
            src={`https://www.google.com/maps?q=${NAP.mapsEmbedQuery}&output=embed`}
            width="100%"
            height="260"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="block"
          />
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <DisclaimerBlock />
          <p className="mt-4 text-xs text-text-light">
            &copy; {new Date().getFullYear()} {SITE.legalName}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: readonly { label: string; href: string }[];
}) {
  return (
    <div>
      <h3 className="text-sm font-semibold text-text-dark">{title}</h3>
      <ul className="mt-4 space-y-2.5">
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className="text-sm text-text-light hover:text-brand">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
