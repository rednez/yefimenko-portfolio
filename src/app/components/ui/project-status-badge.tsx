import { Project } from '@/app/types';

export function ProjectStatusBadge({ project }: { project: Project }) {
  return (
    <div>
      <h3 className="text-xl sm:text-2xl font-semibold tracking-[-0.03em] text-foreground leading-snug">
        {project.title}
      </h3>
      {project.status && (
        <span className="inline-flex items-center gap-1.5 mt-2.5 font-mono text-[11px] px-2 py-0.5 rounded-md border border-line text-muted">
          <span
            aria-hidden="true"
            className="w-1.5 h-1.5 rounded-full bg-amber-500"
          />
          {project.status}
        </span>
      )}
    </div>
  );
}
