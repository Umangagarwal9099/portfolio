"use client";

import { motion } from "motion/react";
import { PROJECTS } from "@/data/projects";

export function HeroConsole() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
      className="w-full max-w-md rounded-2xl border border-border-strong bg-surface/70 shadow-[0_30px_80px_rgba(0,0,0,0.5)] backdrop-blur-xl"
    >
      <div className="flex items-center gap-2 border-b border-border px-5 py-3.5">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        <span className="ml-3 font-mono text-[11px] text-paper-dim">
          umang@production — systems
        </span>
      </div>

      <ul className="divide-y divide-border">
        {PROJECTS.map((project, i) => (
          <motion.li
            key={project.id}
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.5 + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
          >
            <a
              href={`#project-${project.id}`}
              data-cursor-hover
              className="group flex items-center justify-between gap-3 px-5 py-3 transition-colors hover:bg-surface-raised"
            >
              <span className="flex items-center gap-3 min-w-0">
                <span className="relative flex h-2 w-2 shrink-0">
                  <span
                    className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-60"
                    style={{ backgroundColor: project.accent }}
                  />
                  <span
                    className="relative inline-flex h-2 w-2 rounded-full"
                    style={{ backgroundColor: project.accent }}
                  />
                </span>
                <span className="truncate font-mono text-[13px] text-paper">
                  {project.displayName}
                </span>
              </span>
              <span className="shrink-0 font-mono text-[11px] text-paper-dim transition-colors group-hover:text-paper">
                {project.category === "freelance" ? "freelance" : "live"}
              </span>
            </a>
          </motion.li>
        ))}
      </ul>

      <div className="flex items-center justify-between border-t border-border px-5 py-3.5 font-mono text-[11px] text-paper-dim">
        <span>6 systems · production</span>
        <span className="flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-[#28c840]" />
          all operational
        </span>
      </div>
    </motion.div>
  );
}
