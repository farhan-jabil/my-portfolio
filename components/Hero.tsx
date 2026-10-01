import type { CSSProperties } from "react";
import { profile } from "../data/portfolio";
import Image from "next/image";

const chipPos = [
  "left-0 top-[12%]",
  "right-0 top-[38%]",
  "left-[6%] bottom-[8%]",
];

export default function Hero() {
  const d = (ms: number) => ({ "--d": `${ms}ms` }) as CSSProperties;
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="grid-paper absolute inset-0" />
      <div className="drift absolute -left-32 top-10 h-96 w-96 rounded-full bg-blueprint/25 blur-3xl" />
      <div
        className="drift absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-signal/20 blur-3xl"
        style={d(-7000)}
      />

      <div className="relative mx-auto grid min-h-[calc(100svh-4rem)] max-w-6xl items-center gap-14 px-5 py-16 lg:grid-cols-[1.15fr_1fr]">
        <div>
          <div
            className="hero-in inline-flex items-center gap-2 rounded-full border border-blueprint/30 bg-paper/60 px-4 py-1.5 text-sm backdrop-blur"
            style={d(100)}
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500" />
            </span>
            {profile.status}
          </div>
          <h1 className="mt-6 font-display text-5xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            <span className="hero-in block" style={d(250)}>
              Hi, I&apos;m {profile.name}.
            </span>
            <span className="hero-in text-sheen block pb-2" style={d(450)}>
              {profile.role}
            </span>
          </h1>
          <p
            className="hero-in mt-6 max-w-xl text-lg leading-relaxed text-justify text-ink/70"
            style={d(650)}
          >
            {profile.tagline}
          </p>
          <div
            className="hero-in mt-9 flex flex-wrap items-center gap-4"
            style={d(850)}
          >
            <a
              href={profile.cv}
              download
              className="group inline-flex items-center gap-2 rounded-full bg-signal px-7 py-3.5 font-medium text-white shadow-lg shadow-signal/30 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-signal/40"
            >
              Download CV
              <svg
                viewBox="0 0 24 24"
                className="h-4 w-4 transition-transform group-hover:translate-y-0.5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 4v12m0 0l-5-5m5 5l5-5M5 20h14" />
              </svg>
            </a>
            <a
              href="#contact"
              className="rounded-full border border-ink/40 px-7 py-3.5 font-medium transition hover:-translate-y-1 hover:border-ink hover:bg-ink hover:text-paper"
            >
              Contact me
            </a>
          </div>
        </div>

        <div
          className="hero-in relative mx-auto aspect-square w-full max-w-sm"
          style={d(500)}
        >
          <div className="spin-slow absolute -inset-4 rounded-full border-2 border-dashed border-blueprint/40" />
          <div className="spin-rev absolute -inset-10 rounded-full border border-blueprint/20" />
          <div className="spin-slow absolute inset-0 rounded-full bg-[conic-gradient(from_0deg,var(--blueprint),var(--signal),var(--blueprint))] opacity-60 blur-2xl" />
          <div className="relative h-full w-full overflow-hidden rounded-full border-4 border-paper bg-gradient-to-br from-blueprint/30 to-signal/20 shadow-2xl">
            {profile.image ? (
              // eslint-disable-next-line @next/next/no-img-element
              <Image
                src={profile.image}
                alt={profile.name}
                className="h-full w-full object-cover object-top"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center font-display text-[10rem] font-extrabold text-blueprint">
                {profile.name[0]}
              </div>
            )}
          </div>
          {profile.chips.slice(0, 3).map((c, i) => (
            <span
              key={c}
              style={d(i * 900)}
              className={`float absolute ${chipPos[i]} rounded-full border border-blueprint/30 bg-paper/80 px-4 py-2 text-sm font-medium shadow-lg backdrop-blur`}
            >
              {c}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
