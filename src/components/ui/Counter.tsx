"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion, animate } from "motion/react";

type CounterProps = {
  value: string;
  className?: string;
};

/** Animates the numeric portion of a stat string (e.g. "100K+", "95%") while preserving its prefix/suffix. */
export function Counter({ value, className }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const shouldReduceMotion = useReducedMotion();
  const [display, setDisplay] = useState("0");

  const match = value.match(/(\d+(?:\.\d+)?)/);
  const numeric = match ? parseFloat(match[1]) : null;
  const prefix = numeric !== null ? value.slice(0, match!.index) : "";
  const suffix = numeric !== null ? value.slice((match!.index ?? 0) + match![0].length) : "";
  const decimals = match && match[1].includes(".") ? match[1].split(".")[1].length : 0;

  useEffect(() => {
    if (!isInView || numeric === null || shouldReduceMotion) return;
    const controls = animate(0, numeric, {
      duration: 1.4,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (latest) => setDisplay(latest.toFixed(decimals)),
    });
    return () => controls.stop();
  }, [isInView, numeric, decimals, shouldReduceMotion]);

  if (numeric === null) {
    return (
      <span ref={ref} className={className}>
        {value}
      </span>
    );
  }

  if (shouldReduceMotion) {
    return (
      <span ref={ref} className={className}>
        {value}
      </span>
    );
  }

  return (
    <span ref={ref} className={className}>
      {prefix}
      {display}
      {suffix}
    </span>
  );
}
