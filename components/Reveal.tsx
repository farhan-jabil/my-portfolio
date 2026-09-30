"use client";
import { useEffect, useRef } from "react";
import type { CSSProperties, ReactNode } from "react";
import type { RevealDirection } from "../types";

interface RevealProps {
  dir?: RevealDirection;
  delay?: number;
  className?: string;
  children: ReactNode;
}

export default function Reveal({ dir = "up", delay = 0, className = "", children }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { el.classList.add("in"); io.disconnect(); } },
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div ref={ref} style={{ "--d": `${delay}ms` } as CSSProperties} className={`rv rv-${dir} ${className}`}>
      {children}
    </div>
  );
}
