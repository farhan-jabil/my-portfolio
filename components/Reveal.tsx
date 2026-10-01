"use client";
import { useEffect, useRef } from "react";
import type { CSSProperties, ReactNode } from "react";
import type { RevealDirection } from "@/types";

interface RevealProps {
  dir?: RevealDirection;
  delay?: number;
  repeat?: boolean; // true = play every time it enters the screen
  className?: string;
  children: ReactNode;
}

export default function Reveal({
  dir = "up",
  delay = 0,
  repeat = false,
  className = "",
  children,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.intersectionRatio >= 0.15) {
          el.classList.add("in");
          if (!repeat) io.disconnect();
        } else if (repeat && !e.isIntersecting) {
          // fully out of view: reset so it can animate again next time
          el.classList.remove("in");
        }
      },
      { threshold: [0, 0.15] }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [repeat]);

  return (
    <div
      ref={ref}
      style={{ "--d": `${delay}ms` } as CSSProperties}
      className={`rv rv-${dir} ${className}`}
    >
      {children}
    </div>
  );
}