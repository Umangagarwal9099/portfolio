import { ACADEMIC_PROJECTS } from "@/data/projects";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

const PIPELINE = ["Research", "Architecture", "Security", "Implementation", "Results"];

export function Academic() {
  const [major, minor] = ACADEMIC_PROJECTS;

  return (
    <section className="scroll-mt-24 border-t border-border py-24 md:py-32">
      <div className="container-shell">
        <SectionHeading
          eyebrow="Engineering Archive"
          title="Before production, there was research."
          description="Two academic projects — a security-focused research build and a systems major project — kept here as an archive, not a résumé line."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {/* Major project — pending source */}
          <Reveal>
            <div className="flex h-full flex-col rounded-2xl border border-dashed border-border-strong bg-surface/30 p-7">
              <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-paper-dim">
                Major Project · {major.period}
              </p>
              <h3 className="mt-3 font-display text-2xl font-medium leading-tight text-paper">
                {major.displayName}
              </h3>

              <div className="mt-6 flex flex-wrap items-center gap-2">
                {PIPELINE.map((step, i) => (
                  <span key={step} className="flex items-center gap-2">
                    <span className="rounded-full border border-border-strong px-3 py-1 font-mono text-[11px] text-paper-dim/70">
                      {step}
                    </span>
                    {i < PIPELINE.length - 1 && <span className="text-paper-dim/40">→</span>}
                  </span>
                ))}
              </div>

              <p className="mt-6 text-sm leading-relaxed text-paper-dim">
                {major.description[0]}
              </p>

              <div className="mt-auto pt-6">
                <span className="inline-flex items-center gap-2 rounded-full border border-border-strong px-3.5 py-1.5 font-mono text-[11px] text-paper-dim">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#d4a15a]" />
                  awaiting source PDF
                </span>
              </div>
            </div>
          </Reveal>

          {/* Minor project — Email Security */}
          <Reveal delay={0.1}>
            <div className="flex h-full flex-col rounded-2xl border border-border-strong bg-surface/40 p-7">
              <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-paper-dim">
                Minor Project · {minor.period}
              </p>
              <h3 className="mt-3 font-display text-2xl font-medium leading-tight text-paper">
                {minor.displayName}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-paper-dim">{minor.description[0]}</p>

              <div className="mt-6 flex flex-wrap gap-2">
                {minor.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-border px-3 py-1 text-xs text-paper-dim"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <ul className="mt-6 space-y-2.5">
                {minor.contributions.map((item, i) => (
                  <li key={i} className="flex gap-3 text-sm leading-relaxed text-paper-dim">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-brass" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
