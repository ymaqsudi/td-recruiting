"use client";

import { useEffect, useRef, useState } from "react";

type CountUpProps = {
  /** e.g. "20+", "100%", "6": leading digits are animated, the rest is kept as a suffix. */
  value: string;
  duration?: number;
};

/**
 * Counts up to the numeric part of `value` once it scrolls into view.
 * Pure requestAnimationFrame, no dependency, runs once via
 * IntersectionObserver. Falls back to the final value immediately for
 * prefers-reduced-motion.
 */
const CountUp = ({ value, duration = 1400 }: CountUpProps) => {
  const match = value.match(/^(\d+)(.*)$/);
  const target = match ? parseInt(match[1], 10) : 0;
  const suffix = match ? match[2] : value;

  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setDisplay(target);
      return;
    }

    let started = false;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          started = true;
          const startTime = performance.now();
          const tick = (now: number) => {
            const progress = Math.min((now - startTime) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setDisplay(Math.round(eased * target));
            if (progress < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [target, duration]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
};

export default CountUp;
