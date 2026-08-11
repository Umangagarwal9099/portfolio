import { Reveal } from "./Reveal";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn(align === "center" && "text-center", className)}>
      <Reveal>
        <div
          className={cn(
            "flex items-center gap-3 text-xs font-medium uppercase tracking-[0.3em] text-brass",
            align === "center" && "justify-center"
          )}
        >
          <span className="h-px w-8 bg-brass/60" />
          {eyebrow}
        </div>
      </Reveal>
      <Reveal delay={0.08}>
        <h2 className="mt-5 font-display text-balance text-4xl font-medium leading-[1.05] tracking-tight text-paper sm:text-5xl lg:text-6xl">
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={0.14}>
          <p
            className={cn(
              "mt-5 max-w-2xl text-balance text-base leading-relaxed text-paper-dim sm:text-lg",
              align === "center" && "mx-auto"
            )}
          >
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
