'use client';

import { skills } from '@/app/data';
import { useIntersection } from '@/app/hooks/intersections';
import { Social } from '@/app/types';
import dayjs from 'dayjs';
import { AboutSectionSkillChip } from './about-section-skill-chip';

const socials: Social[] = [
  {
    label: 'GitHub',
    href: 'https://github.com/rednez',
    icon: (
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    ),
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/vasyl-yefimenko-068a9796/',
    icon: (
      <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z M4 6a2 2 0 100-4 2 2 0 000 4z" />
    ),
  },
];

export function AboutSection() {
  const [aboutRef, aboutVisible] = useIntersection<HTMLDivElement>();
  const [skillsRef, skillsVisible] = useIntersection<HTMLDivElement>();

  const experienceYears = dayjs().diff(dayjs('2015-09-01'), 'year');

  return (
    <section id="about" className="px-10 pb-20 max-w-5xl mx-auto">
      <div
        ref={aboutRef}
        className={`grid grid-cols-1 md:grid-cols-2 gap-16 items-center transition-all duration-700 ${aboutVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      >
        <div>
          <p className="font-mono text-xs text-emerald-600 dark:text-emerald-400 tracking-widest font-semibold uppercase mb-4">
            About Me
          </p>
          <h2 className="font-serif font-bold leading-tight tracking-tight mb-6 text-4xl">
            I build things
            <br />
            for the web
          </h2>
          <p className="text-slate-500 dark:text-slate-400 leading-relaxed mb-4 text-sm">
            I&apos;m a frontend developer with {experienceYears} years of
            experience turning complex problems into clean, intuitive products.
            I care deeply about performance, accessibility, and the tiny details
            that make an interface feel alive — with solid backend experience to
            back it up.
          </p>
          <p className="text-slate-500 dark:text-slate-400 leading-relaxed text-sm mb-8">
            I have deep experience in the Fintech domain, building products for
            banking, payments, and financial data — where reliability, security,
            and precision are non-negotiable.
          </p>
          <div className="flex gap-5 flex-wrap">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 text-sm font-medium text-slate-500 dark:text-slate-400 no-underline hover:text-emerald-600 transition-colors duration-200"
              >
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  {s.icon}
                </svg>
                {s.label}
              </a>
            ))}
          </div>
        </div>

        <div ref={skillsRef} className="flex flex-wrap gap-2.5">
          {skills.map((skill, i) => (
            <AboutSectionSkillChip
              key={skill.label}
              skill={skill}
              isVisible={skillsVisible}
              appearIndex={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
