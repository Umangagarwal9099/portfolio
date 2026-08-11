"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "motion/react";
import { PROJECTS } from "@/data/projects";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function Experience() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.75", "end 0.4"],
  });
  const lineProgress = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  return (
    <section id="experience" className="scroll-mt-24 border-t border-border py-24 md:py-32">
      <div className="container-shell">
        <SectionHeading
          eyebrow="Experience"
          title="July 2024 — Present, one role, six chapters."
          description="Software Developer → Software Development Engineer I at Cryptoforce, plus an ongoing freelance engagement — told through what shipped, not a job description."
        />

        <div ref={ref} className="relative mt-16 max-w-3xl">
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-border" aria-hidden="true" />
          <motion.div
            className="absolute left-[7px] top-2 w-px origin-top bg-brass"
            style={{ scaleY: lineProgress, height: "calc(100% - 1rem)" }}
            aria-hidden="true"
          />

          <ol className="space-y-12">
            {PROJECTS.map((project) => (
              <li key={project.id} className="relative pl-10">
                <span
                  className="absolute left-0 top-1.5 flex h-4 w-4 items-center justify-center rounded-full border-2 border-ink"
                  style={{ backgroundColor: "var(--color-ink)" }}
                >
                  <span
                    className="h-2 w-2 rounded-full"
                    style={{ backgroundColor: project.accent }}
                  />
                </span>

                <Reveal>
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                    <a
                      href={`#project-${project.id}`}
                      data-cursor-hover
                      className="font-display text-xl font-medium text-paper transition-colors hover:text-brass sm:text-2xl"
                    >
                      {project.displayName}
                    </a>
                    <span className="font-mono text-xs text-paper-dim">{project.period}</span>
                  </div>
                  <p className="mt-1.5 text-sm text-paper-dim sm:text-base">
                    {project.role}
                    {project.employer ? ` · ${project.employer}` : ""}
                  </p>
                  <p className="mt-2 max-w-xl text-sm leading-relaxed text-paper-dim/90">
                    {project.summary}
                  </p>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
