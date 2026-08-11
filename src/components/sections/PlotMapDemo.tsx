"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";

type PlotStatus = "available" | "sold" | "mortgage";

type Plot = {
  id: number;
  status: PlotStatus;
  size: number;
  facing: "North" | "South" | "East" | "West";
};

const STATUS_META: Record<PlotStatus, { label: string; className: string; dot: string }> = {
  available: { label: "Available", className: "bg-[#1c3a2a] text-[#5fd08a]", dot: "#5fd08a" },
  sold: { label: "Sold", className: "bg-surface-raised text-paper-dim", dot: "#6b6d72" },
  mortgage: { label: "Mortgage", className: "bg-[#3a2a1c] text-[#d4a15a]", dot: "#d4a15a" },
};

const FACINGS: Plot["facing"][] = ["North", "South", "East", "West"];
const ROWS = 5;
const COLS = 9;

const PLOTS: Plot[] = Array.from({ length: ROWS * COLS }, (_, i) => {
  const cycle = i % 7;
  const status: PlotStatus = cycle === 0 || cycle === 4 ? "sold" : cycle === 3 ? "mortgage" : "available";
  return {
    id: i + 1,
    status,
    size: 180 + ((i * 17) % 140),
    facing: FACINGS[i % FACINGS.length],
  };
});

export function PlotMapDemo() {
  const [active, setActive] = useState<Plot | null>(null);
  const [filter, setFilter] = useState<PlotStatus | "all">("all");

  const counts = PLOTS.reduce(
    (acc, p) => ({ ...acc, [p.status]: acc[p.status] + 1 }),
    { available: 0, sold: 0, mortgage: 0 }
  );

  return (
    <div className="rounded-2xl border border-border-strong bg-surface/50 p-5 sm:p-7">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-paper-dim">
          Interactive plot map — recreated demo
        </p>
        <div className="flex flex-wrap gap-2">
          {(["all", "available", "mortgage", "sold"] as const).map((key) => (
            <button
              key={key}
              type="button"
              data-cursor-hover
              onClick={() => setFilter(key)}
              className={cn(
                "rounded-full border px-3 py-1.5 text-[11px] font-medium capitalize transition-colors",
                filter === key
                  ? "border-brass text-brass"
                  : "border-border-strong text-paper-dim hover:text-paper"
              )}
            >
              {key === "all" ? `All (${PLOTS.length})` : `${STATUS_META[key].label} (${counts[key]})`}
            </button>
          ))}
        </div>
      </div>

      <div
        className="mt-6 grid gap-1.5"
        style={{ gridTemplateColumns: `repeat(${COLS}, minmax(0, 1fr))` }}
      >
        {PLOTS.map((plot) => {
          const dimmed = filter !== "all" && plot.status !== filter;
          return (
            <button
              key={plot.id}
              type="button"
              data-cursor-hover
              onMouseEnter={() => setActive(plot)}
              onFocus={() => setActive(plot)}
              onClick={() => setActive(plot)}
              aria-label={`Plot ${plot.id}, ${STATUS_META[plot.status].label}`}
              className={cn(
                "aspect-square rounded-[4px] transition-all duration-200",
                dimmed ? "opacity-20" : "opacity-100 hover:scale-110 hover:z-10",
                active?.id === plot.id && "ring-2 ring-paper"
              )}
              style={{ backgroundColor: STATUS_META[plot.status].dot }}
            />
          );
        })}
      </div>

      <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-4 text-xs text-paper-dim">
          {(Object.keys(STATUS_META) as PlotStatus[]).map((key) => (
            <span key={key} className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full" style={{ backgroundColor: STATUS_META[key].dot }} />
              {STATUS_META[key].label}
            </span>
          ))}
        </div>

        <AnimatePresence mode="wait">
          {active && (
            <motion.div
              key={active.id}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.2 }}
              className="flex items-center gap-4 rounded-xl border border-border px-4 py-2.5 font-mono text-xs"
            >
              <span className="text-paper">Plot #{active.id}</span>
              <span className="text-paper-dim">{active.size} sq. yd</span>
              <span className="text-paper-dim">{active.facing} facing</span>
              <span className={cn("rounded-full px-2 py-0.5", STATUS_META[active.status].className)}>
                {STATUS_META[active.status].label}
              </span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
