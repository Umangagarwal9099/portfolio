"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { SKILL_GROUPS, SKILL_ALIASES, SOFT_SKILLS } from "@/data/skills";
import { PROJECTS } from "@/data/projects";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";

function projectsForSkill(skill: string) {
  const aliases = SKILL_ALIASES[skill];
  if (!aliases) return [];
  return PROJECTS.filter((p) => p.stack.some((s) => aliases.some((a) => s.includes(a))));
}

export function TechEcosystem() {
  const [selected, setSelected] = useState<string | null>("Go / Golang");
  const relatedProjects = useMemo(
    () => (selected ? projectsForSkill(selected) : []),
    [selected]
  );
  const isInteractive = (skill: string) => !!SKILL_ALIASES[skill];

  return (
    <section id="skills" className="scroll-mt-24 py-24 md:py-32">
      <div className="container-shell">
        <SectionHeading
          eyebrow="Technology Ecosystem"
          title="Not a skill list — a map of where each tool actually shipped."
          description="Click a technology to see the real products it was used to build."
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
          <div className="space-y-9">
            {SKILL_GROUPS.map((group) => (
              <div key={group.id}>
                <h3 className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-paper-dim">
                  {group.label}
                </h3>
                <div className="mt-4 flex flex-wrap gap-2.5">
                  {group.skills.map((skill) => {
                    const interactive = isInteractive(skill);
                    const isSelected = selected === skill;
                    return (
                      <button
                        key={skill}
                        type="button"
                        disabled={!interactive}
                        data-cursor-hover={interactive ? "" : undefined}
                        onClick={() => interactive && setSelected(isSelected ? null : skill)}
                        className={cn(
                          "rounded-full border px-4 py-2 text-sm transition-all",
                          isSelected
                            ? "border-brass bg-brass text-ink font-semibold"
                            : interactive
                              ? "border-border-strong text-paper hover:border-brass/60 hover:text-brass"
                              : "border-border text-paper-dim/70 cursor-default"
                        )}
                      >
                        {skill}
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          <div className="lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-2xl border border-border-strong bg-surface/50 p-6 backdrop-blur-sm">
              <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-paper-dim">
                Used in
              </p>
              <AnimatePresence mode="wait">
                <motion.div
                  key={selected ?? "empty"}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className="mt-4"
                >
                  {selected ? (
                    <>
                      <p className="font-display text-2xl font-medium text-paper">{selected}</p>
                      <ul className="mt-5 space-y-2.5">
                        {relatedProjects.map((project) => (
                          <li key={project.id}>
                            <a
                              href={`#project-${project.id}`}
                              data-cursor-hover
                              className="group flex items-center gap-3 rounded-xl border border-border px-3.5 py-2.5 transition-colors hover:border-border-strong hover:bg-surface-raised"
                            >
                              <span
                                className="h-2 w-2 shrink-0 rounded-full"
                                style={{ backgroundColor: project.accent }}
                              />
                              <span className="text-sm text-paper">{project.displayName}</span>
                              <span className="ml-auto text-xs text-paper-dim opacity-0 transition-opacity group-hover:opacity-100">
                                view →
                              </span>
                            </a>
                          </li>
                        ))}
                        {relatedProjects.length === 0 && (
                          <li className="text-sm text-paper-dim">No linked case study yet.</li>
                        )}
                      </ul>
                    </>
                  ) : (
                    <p className="text-sm leading-relaxed text-paper-dim">
                      Select any highlighted technology to see the products it shipped in.
                    </p>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-border pt-8">
          <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-paper-dim">
            Also
          </p>
          {SOFT_SKILLS.map((skill) => (
            <span key={skill} className="text-sm text-paper-dim">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
