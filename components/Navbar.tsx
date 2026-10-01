"use client";
import { useEffect, useState } from "react";
import { nav, profile } from "../data/portfolio";
import ThemeToggle from "./ThemeToggle";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement.scrollHeight - innerHeight;
      setProgress(h > 0 ? (scrollY / h) * 100 : 0);
    };
    onScroll();
    addEventListener("scroll", onScroll, { passive: true });
    return () => removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: any) => e.key === "Escape" && setOpen(false);
    addEventListener("keydown", onKey);
    return () => { removeEventListener("keydown", onKey); document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-blueprint/20 bg-paper/80 backdrop-blur-xl transition-colors duration-500">
      <div className="absolute bottom-0 left-0 h-0.5 bg-signal" style={{ width: `${progress}%` }} />
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <Link href="#top" className="font-display text-xl font-bold text-blueprint">{profile.name}</Link>

        <ul className="hidden items-center gap-8 md:flex">
          {nav.map((n) => (
            <li key={n.href}>
              <Link href={n.href} className="group relative text-sm font-medium">
                {n.label}
                <span className="absolute -bottom-1 left-0 h-0.5 w-full origin-left scale-x-0 bg-signal transition-transform duration-300 group-hover:scale-x-100" />
              </Link>
            </li>
          ))}
          <li><ThemeToggle /></li>
          <li><Link href={profile.cv} download className="rounded-full bg-ink px-5 py-2 text-sm font-medium text-paper transition hover:-translate-y-0.5 hover:bg-signal hover:text-white">Download CV</Link></li>
        </ul>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button onClick={() => setOpen(true)} aria-label="Open menu" aria-expanded={open} className="flex h-10 w-10 flex-col items-center justify-center gap-1.5">
            <span className="h-0.5 w-6 bg-ink" /><span className="h-0.5 w-6 bg-ink" /><span className="h-0.5 w-4 self-end bg-ink mr-2" />
          </button>
        </div>
      </nav>

      <div onClick={() => setOpen(false)} className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity duration-300 md:hidden ${open ? "opacity-100" : "pointer-events-none opacity-0"}`} />
      <aside role="dialog" aria-modal="true" aria-label="Menu" aria-hidden={!open}
        className={`fixed right-0 top-0 z-50 flex h-full w-72 max-w-[85%] flex-col bg-paper p-6 shadow-2xl transition-transform duration-500 ease-[cubic-bezier(.2,.7,.2,1)] md:hidden ${open ? "translate-x-0" : "translate-x-full"}`}>
        <button onClick={() => setOpen(false)} aria-label="Close menu" className="mb-8 self-end text-3xl leading-none">&times;</button>
        <ul className="flex flex-col">
          {nav.map((n, i) => (
            <li key={n.href} style={{ transitionDelay: open ? `${120 + i * 60}ms` : "0ms" }} className={`transition-all duration-500 ${open ? "translate-x-0 opacity-100" : "translate-x-6 opacity-0"}`}>
              <Link href={n.href} onClick={() => setOpen(false)} className="block border-b border-blueprint/15 py-4 font-display text-2xl">{n.label}</Link>
            </li>
          ))}
        </ul>
        <Link href={profile.cv} download className="mt-8 rounded-full bg-ink px-4 py-3 text-center font-medium text-paper">Download CV</Link>
      </aside>
    </header>
  );
}
