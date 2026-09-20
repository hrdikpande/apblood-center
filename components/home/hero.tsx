import Image from "next/image";
import Link from "next/link";
import { CalendarCheck, Phone, Award } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { CellFlowBackground } from "@/components/motion/cell-flow-background";
import { CountUp } from "@/components/motion/count-up";
import { NAP, STATS, DOCTOR, telLink } from "@/content/site";
import { cn } from "@/lib/utils";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <CellFlowBackground />
      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10 lg:py-20 lg:px-8">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-brand/20 bg-white/70 px-3.5 py-1.5 text-xs font-semibold tracking-wide text-brand backdrop-blur-sm">
            Hematology &amp; Blood Cancer Specialty Centre
          </span>

          <h1 className="mt-5 max-w-2xl text-balance font-display text-4xl font-bold leading-[1.1] text-text-dark sm:text-5xl lg:text-6xl">
            Andhra Pradesh&rsquo;s dedicated centre for blood disorders &amp; blood cancer care
          </h1>

          <p className="mt-3 max-w-xl text-base font-medium text-text-light">
            రక్త రుగ్మతలు మరియు రక్త క్యాన్సర్ చికిత్స కోసం ఆంధ్రప్రదేశ్ యొక్క ప్రత్యేక కేంద్రం
          </p>

          <p className="prose-medical mt-5 max-w-xl text-lg text-text-light">
            Led by Dr. Amarnadh Polisetty, a clinical haematologist and haemato-oncologist whose
            practice is focused entirely on blood disorders, bone marrow conditions and blood
            cancer — not general medicine.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              href="/book-appointment"
              className={cn(buttonVariants({ size: "lg" }), "h-12 gap-2 rounded-full px-6 text-base")}
            >
              <CalendarCheck className="size-5" aria-hidden="true" />
              Book an Appointment
            </Link>
            <a
              href={telLink()}
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "h-12 gap-2 rounded-full bg-white/70 px-6 text-base backdrop-blur-sm"
              )}
            >
              <Phone className="size-5" aria-hidden="true" />
              Call {NAP.phoneDisplay}
            </a>
          </div>

          <dl className="mt-12 grid max-w-xl grid-cols-3 gap-4 border-t border-border/70 pt-6">
            {STATS.slice(0, 3).map((stat) => (
              <div key={stat.label}>
                <dt className="sr-only">{stat.label}</dt>
                <dd className="font-display text-2xl font-semibold text-brand sm:text-3xl">
                  <CountUp value={stat.value} suffix={stat.suffix} />
                </dd>
                <p className="mt-1 text-xs text-text-light">{stat.label}</p>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative hidden self-stretch lg:flex lg:items-center lg:justify-center">
          <div className="relative aspect-[4/5] w-full max-w-sm overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-rose/60 via-white to-rose/20 shadow-sm">
            <div aria-hidden="true" className="animate-cell-a absolute -top-14 -right-10 size-52 rounded-full bg-rose/70 blur-3xl" />
            <div aria-hidden="true" className="animate-cell-b absolute -bottom-16 -left-12 size-56 rounded-full bg-brand/10 blur-3xl" />
            <Image
              src={DOCTOR.photo.src}
              alt={DOCTOR.photo.alt}
              fill
              priority
              sizes="384px"
              className="object-cover object-top"
            />
            <div
              aria-hidden="true"
              className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-text-dark/80 via-text-dark/25 to-transparent"
            />
            <div className="absolute inset-x-0 bottom-0 p-6">
              <p className="font-display text-lg font-semibold text-white">{DOCTOR.name}</p>
              <p className="mt-0.5 text-xs text-white/80">{DOCTOR.credentialsShort}</p>
            </div>
          </div>
          <div className="absolute -left-6 bottom-8 flex items-center gap-2.5 rounded-2xl border border-border bg-white p-4 shadow-md">
            <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-rose text-brand">
              <Award className="size-4" aria-hidden="true" />
            </span>
            <div className="pr-1">
              <p className="font-display text-sm font-bold text-text-dark">
                {DOCTOR.experienceYears}+ years
              </p>
              <p className="text-xs text-text-light">Focused hematology practice</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
