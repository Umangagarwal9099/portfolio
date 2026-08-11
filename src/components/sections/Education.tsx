import { EDUCATION } from "@/data/education";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function Education() {
  return (
    <section className="scroll-mt-24 border-t border-border py-24 md:py-32">
      <div className="container-shell">
        <SectionHeading eyebrow="Education" title="The academic path." />

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-3">
          {EDUCATION.map((entry, i) => (
            <Reveal key={entry.id} delay={i * 0.08}>
              <div className="h-full bg-ink p-7">
                <p className="font-mono text-xs text-paper-dim">{entry.period}</p>
                <h3 className="mt-3 font-display text-lg font-medium leading-snug text-paper">
                  {entry.institution}
                </h3>
                <p className="mt-2 text-sm text-paper-dim">{entry.program}</p>
                <p className="mt-5 font-display text-3xl font-medium text-brass">{entry.score}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
