"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, useReducedMotion } from "motion/react";

export function Cursor() {
  const shouldReduceMotion = useReducedMotion();
  const [hovering, setHovering] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { stiffness: 500, damping: 40, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 500, damping: 40, mass: 0.4 });

  useEffect(() => {
    if (shouldReduceMotion) return;
    const isFinePointer = window.matchMedia("(pointer: fine)").matches;
    if (!isFinePointer) return;

    function handleMove(e: MouseEvent) {
      x.set(e.clientX);
      y.set(e.clientY);
    }

    function handleOver(e: MouseEvent) {
      const target = e.target as HTMLElement;
      setHovering(!!target.closest("a, button, [data-cursor-hover]"));
    }

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseover", handleOver);
    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseover", handleOver);
    };
  }, [x, y, shouldReduceMotion]);

  if (shouldReduceMotion) return null;

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-[80] mix-blend-difference hidden [@media(pointer:fine)]:block"
      style={{ x: springX, y: springY, translateX: "-50%", translateY: "-50%" }}
      aria-hidden="true"
    >
      <motion.div
        animate={{
          width: hovering ? 44 : 10,
          height: hovering ? 44 : 10,
        }}
        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
        className="rounded-full bg-paper"
      />
    </motion.div>
  );
}
