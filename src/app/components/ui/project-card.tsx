'use client';

import { useIntersection } from '@/app/hooks/intersections';
import { Project } from '@/app/types';
import { ProjectStatusBadge } from './project-status-badge';
import { ProjectStatusNote } from './project-status-note';

interface ProjectCardProps {
  p: Project;
  i: number;
}

export function ProjectCard({ p, i }: ProjectCardProps) {
  const [ref, visible] = useIntersection<HTMLAnchorElement>();

  return (
    <a
      href={p.link}
      target="_blank"
      rel="noreferrer"
      ref={ref}
      className={`
        block no-underline rounded-2xl p-7 border-2 border-transparent dark:border-stone-800
        ${p.bg} ${p.border} ${p.shadow}
        hover:shadow-xl hover:-translate-y-1
        transition-all duration-300
        ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
      `}
      style={{ transitionDelay: `${i * 70}ms` }}
    >
      <div className="flex justify-between items-start mb-3">
        <ProjectStatusBadge project={p} />
        <svg
          className={`shrink-0 ml-2 mt-0.5 w-4 h-4 ${p.arrow} transition-transform duration-200`}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M7 17L17 7M7 7h10v10" />
        </svg>
      </div>
      <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-5">
        {p.description}
      </p>
      {p.statusNote && <ProjectStatusNote note={p.statusNote} />}
      <div className="flex flex-wrap gap-1.5">
        {p.tags.map((t) => (
          <span
            key={t}
            className={`font-mono text-xs font-semibold px-2.5 py-1 rounded-full ${p.tag}`}
          >
            {t}
          </span>
        ))}
      </div>
    </a>
  );
}
