import Link from "next/link";
import { CalendarCheck } from "lucide-react";
import { WhatsAppIcon } from "@/components/icons/whatsapp";
import { whatsappLink } from "@/content/site";

const WA_MESSAGE =
  "Hello, I would like to book an appointment at AP Blood & Blood Cancer Centre.";

/** Desktop-only floating appointment + WhatsApp buttons. */
export function FloatingButtons() {
  return (
    <div className="fixed bottom-6 right-6 z-40 hidden flex-col items-end gap-3 lg:flex">
      <a
        href={whatsappLink(WA_MESSAGE)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="flex size-12 items-center justify-center rounded-full bg-success text-white shadow-lg transition-transform hover:scale-105"
      >
        <WhatsAppIcon className="size-6" />
      </a>
      <Link
        href="/book-appointment"
        aria-label="Book an appointment"
        className="flex h-12 items-center gap-2 rounded-full bg-brand px-5 text-sm font-semibold text-white shadow-lg transition-transform hover:scale-105"
      >
        <CalendarCheck className="size-5" aria-hidden="true" />
        Book Appointment
      </Link>
    </div>
  );
}
