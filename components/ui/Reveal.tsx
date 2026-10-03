"use client";

import { useEffect, useRef, useState, type ReactNode, type RefObject } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** Stagger delay in milliseconds, applied once the element enters view. */
  delay?: number;
  /** Rendered element tag. Use "li" when the wrapper must be a direct <ul>/<ol> child. */
  as?: "div" | "li";
};

/**
 * Fades and slides content into place the first time it scrolls into
 * view, using a native IntersectionObserver so there is no scroll
 * listener and no animation library in the bundle. Disconnects after
 * the first trigger (no repeat replay) and renders content immediately
 * visible for anyone with prefers-reduced-motion set.
 */
const Reveal = ({ children, className = "", delay = 0, as = "div" }: RevealProps) => {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const combinedClassName = `transition-all duration-700 ease-out ${
    visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
  } ${className}`;
  const style = { transitionDelay: visible ? `${delay}ms` : "0ms" };

  if (as === "li") {
    return (
      <li
        ref={ref as unknown as RefObject<HTMLLIElement>}
        className={combinedClassName}
        style={style}
      >
        {children}
      </li>
    );
  }

  return (
    <div
      ref={ref as unknown as RefObject<HTMLDivElement>}
      className={combinedClassName}
      style={style}
    >
      {children}
    </div>
  );
};

export default Reveal;
