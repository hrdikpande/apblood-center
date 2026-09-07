import { cn } from "@/lib/utils";
import { Reveal } from "@/components/motion/reveal";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <Reveal
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && (
        <span className="mb-3 inline-block text-sm font-semibold tracking-wide text-brand uppercase">
          {eyebrow}
        </span>
      )}
      <h2 className="text-balance font-display text-3xl font-semibold text-text-dark sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-lg text-text-light">{description}</p>
      )}
    </Reveal>
  );
}
