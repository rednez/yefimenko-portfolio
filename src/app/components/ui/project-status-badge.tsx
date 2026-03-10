import { Project } from '@/app/types';

export function ProjectStatusBadge({ project }: { project: Project }) {
  return (
    <div>
      <h3 className="font-serif text-lg font-bold text-slate-900 leading-snug">
        {project.title}
      </h3>
      {project.status && (
        <span className="inline-flex items-center mt-2 font-mono text-[10px] uppercase tracking-wide px-2 py-0.5 rounded-full bg-amber-100 text-amber-800">
          {project.status}
        </span>
      )}
    </div>
  );
}
