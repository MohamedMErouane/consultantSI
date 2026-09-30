"use client";

import { useEffect, useRef } from "react";
import { animate, useInView, useReducedMotion } from "framer-motion";

// The final value is rendered on the server, so crawlers, link previews and
// no-JS visitors see the real number; the count-up only runs client-side.
export default function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const el = ref.current;
    if (!inView || !el || reduceMotion) return;
    const controls = animate(0, to, {
      duration: 1.2,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => {
        el.textContent = `${Math.round(v)}${suffix}`;
      },
    });
    return () => controls.stop();
  }, [inView, to, suffix, reduceMotion]);

  return (
    <span ref={ref}>
      {to}
      {suffix}
    </span>
  );
}
