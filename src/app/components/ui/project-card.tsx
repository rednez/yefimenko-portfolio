'use client';

import { useCursorVars } from '@/app/hooks/cursor-vars';
import { useIntersection } from '@/app/hooks/intersections';
import { Project } from '@/app/types';
import { ArrowIcon } from './arrow-icon';
import { ProjectStatusBadge } from './project-status-badge';
import { ProjectStatusNote } from './project-status-note';

interface ProjectCardProps {
  p: Project;
  i: number;
}

export function ProjectCard({ p, i }: ProjectCardProps) {
  const [ref, visible] = useIntersection<HTMLAnchorElement>();

  const onPointerMove = useCursorVars<HTMLAnchorElement>();

  return (
    <a
      href={p.link}
      target="_blank"
      rel="noreferrer"
      ref={ref}
      onPointerMove={onPointerMove}
      className={`group relative flex flex-col no-underline bg-surface p-7 sm:p-9 md:min-h-72 overflow-hidden
        transition-opacity duration-700 focus-visible:outline-offset-[-2px]
        ${visible ? 'opacity-100' : 'opacity-0'}`}
      style={{ transitionDelay: `${i * 80}ms` }}
    >
      {/* Cursor spotlight */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background:
            'radial-gradient(380px circle at var(--mx) var(--my), var(--accent-soft), transparent 70%)',
        }}
      />

      <div className="relative flex justify-between items-start gap-4 mb-5">
        <ProjectStatusBadge project={p} />
        <span className="shrink-0 grid place-items-center w-9 h-9 rounded-full border border-line text-muted transition-colors duration-200 group-hover:bg-foreground group-hover:border-foreground group-hover:text-background">
          <ArrowIcon
            direction="up-right"
            className="transition-transform duration-300 group-hover:rotate-45"
          />
        </span>
      </div>

      <p className="relative text-[15px] text-muted leading-relaxed mb-5 max-w-[52ch]">
        {p.description}
      </p>
      {p.statusNote && <ProjectStatusNote note={p.statusNote} />}

      <div className="relative mt-auto pt-6 flex flex-wrap gap-1.5">
        {p.tags.map((t) => (
          <span
            key={t}
            className="font-mono text-xs font-medium px-2.5 py-1 rounded-full bg-accent-soft text-accent ring-1 ring-inset ring-accent/20"
          >
            {t}
          </span>
        ))}
      </div>
    </a>
  );
}
