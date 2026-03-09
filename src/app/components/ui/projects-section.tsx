import { projects } from '@/app/data';
import { ProjectCard } from './project-card';

export function ProjectsSection() {
  return (
    <section id="projects" className="px-10 py-16 pb-24 max-w-5xl mx-auto">
      <p className="font-mono text-xs text-emerald-600 tracking-widest font-semibold uppercase mb-3">
        Public Work
      </p>
      <h2 className="font-serif font-bold text-4xl tracking-tight mb-3">
        Featured Projects
      </h2>
      <p className="text-slate-400 text-sm mb-12 max-w-md">
        A selection of things I&apos;ve built and shipped. Each links to the
        public repo.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {projects.map((p, i) => (
          <ProjectCard key={p.title} p={p} i={i} />
        ))}
      </div>

      <div className="text-center mt-12">
        <a
          href="https://github.com"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-400 no-underline border-b border-slate-300 pb-0.5 hover:text-emerald-600 hover:border-emerald-400 transition-all duration-200"
        >
          See all projects on GitHub →
        </a>
      </div>
    </section>
  );
}
