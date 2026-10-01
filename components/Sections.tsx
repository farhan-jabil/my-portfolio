import {
  about,
  experience,
  skills,
  projects,
  profile,
} from "../data/portfolio";
import type { ReactNode } from "react";
import Reveal from "./Reveal";

interface SectionProps {
  id: string;
  title: string;
  children: ReactNode;
}

function Section({ id, title, children }: SectionProps) {
  return (
    <section id={id} className="scroll-mt-16 border-t border-blueprint/15">
      <div className="mx-auto max-w-6xl px-5 py-20 md:py-28">
        <Reveal>
          <h2 className="mb-12 font-display text-4xl font-bold text-blueprint md:text-5xl">
            {title}
          </h2>
        </Reveal>
        {children}
      </div>
    </section>
  );
}

export function About() {
  return (
    <Section id="about" title="About">
      <div className="space-y-5 text-lg text-justify leading-relaxed text-ink/80">
        {about.map((p, i) => (
          <Reveal key={i} delay={i * 150}>
            <p>{p}</p>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export function Experience() {
  return (
    <Section id="experience" title="Experience">
      <div className="relative">
        <div className="absolute bottom-0 left-4 top-0 w-0.5 -translate-x-1/2 bg-gradient-to-b from-blueprint via-blueprint/40 to-transparent md:left-1/2" />

        <ol className="space-y-12">
          {experience.map((e, i) => {
            const right = i % 2 === 0;

            return (
              <li key={e.company} className="relative pl-12 md:pl-0">
                <span className="absolute left-4 top-6 z-10 h-4 w-4 -translate-x-1/2 rounded-full border-4 border-paper bg-signal shadow-[0_0_0_4px_color-mix(in_srgb,var(--signal)_25%,transparent)] md:left-1/2" />

                <Reveal
                  repeat
                  dir={right ? "right" : "left"}
                  className={`md:w-[calc(50%-3rem)] ${
                    right ? "md:ml-auto" : "md:mr-auto"
                  }`}
                >
                  <div className="rounded-2xl border border-blueprint/25 bg-paper/70 p-6 shadow-lg shadow-blueprint/5 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-signal/60">
                    <h3 className="font-display text-2xl font-semibold">
                      {e.company}
                    </h3>

                    <ol className="mt-5 space-y-4 border-l border-blueprint/30 pl-5">
                      {e.roles.map((r) => (
                        <li key={r.title + r.period} className="relative">
                          <span className="absolute -left-[25px] top-1.5 h-2.5 w-2.5 rounded-full bg-signal" />

                          <p className="text-sm font-medium text-signal">
                            {r.period}
                          </p>

                          <h4 className="font-display text-lg font-semibold">
                            {r.title}
                          </h4>
                        </li>
                      ))}
                    </ol>

                    <div className="mt-6 border-t border-blueprint/20 pt-5">
                      <p className="mb-2 text-sm font-medium text-ink/60">
                        Projects
                      </p>

                      <div className="flex flex-wrap gap-x-2 gap-y-1 text-sm text-ink/80">
                        {e.projects.map((project, index) => (
                          <span key={project.name}>
                            {project.url ? (
                              <a
                                href={project.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-signal transition hover:underline"
                              >
                                {project.name}
                              </a>
                            ) : (
                              <span>{project.name}</span>
                            )}

                            {index < e.projects.length - 1 && (
                              <span className="ml-2 text-ink/40">•</span>
                            )}
                          </span>
                        ))}
                      </div>
                    </div>

                    <ul className="mt-6 list-disc space-y-1.5 border-t border-blueprint/20 pl-5 pt-5 text-ink/80">
                      {e.points.map((p) => (
                        <li key={p}>{p}</li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              </li>
            );
          })}
        </ol>
      </div>
    </Section>
  );
}

export function Skills() {
  return (
    <Section id="skills" title="Skills">
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((s, g) => (
          <Reveal key={s.group} delay={g * 120}>
            <h3 className="mb-4 font-display text-lg font-semibold">
              {s.group}
            </h3>
            <ul className="flex flex-wrap gap-2">
              {s.items.map((i) => (
                <li
                  key={i}
                  className="rounded-full border border-blueprint/40 px-4 py-1.5 text-sm transition hover:-translate-y-0.5 hover:border-signal hover:text-signal"
                >
                  {i}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export function Projects() {
  return (
    <Section id="projects" title="Projects">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <Reveal key={p.title} delay={i * 130}>
            <a
              href={p.link}
              target="_blank"
              rel="noreferrer"
              className="group flex h-full flex-col rounded-2xl border border-blueprint/25 bg-paper/70 p-7 transition duration-300 hover:-translate-y-2 hover:border-signal/60 hover:shadow-2xl hover:shadow-signal/10"
            >
              <h3 className="font-display text-xl font-semibold transition-colors group-hover:text-signal">
                {p.title}
              </h3>
              <p className="mt-3 flex-1 text-ink/70">{p.desc}</p>
              <p className="mt-6 text-sm font-medium text-blueprint">
                {p.tags.join(", ")}
              </p>
            </a>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export function Contact() {
  return (
    <Section id="contact" title="Contact">
      <Reveal>
        <p className="max-w-xl text-lg text-ink/80">
          Have a project or a role in mind? Send me an email and I will reply
          soon.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href={`mailto:${profile.email}`}
            className="rounded-full bg-signal px-7 py-3.5 font-medium text-white shadow-lg shadow-signal/30 transition hover:-translate-y-1"
          >
            {profile.email}
          </a>
          {profile.socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-ink/40 px-7 py-3.5 font-medium transition hover:-translate-y-1 hover:bg-ink hover:text-paper"
            >
              {s.label}
            </a>
          ))}
        </div>
      </Reveal>
    </Section>
  );
}
