import { projects } from '@/app/data';
import { ProjectCard } from './project-card';
import { SectionLabel } from './section-label';

export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="max-w-6xl mx-auto px-5 sm:px-10 pt-8 pb-24 md:pb-32 scroll-mt-16"
    >
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
        <div>
          <SectionLabel className="mb-6">Public Work</SectionLabel>
          <h2 className="font-semibold text-4xl sm:text-5xl tracking-[-0.04em] leading-[1.02]">
            Featured Projects
          </h2>
        </div>
        <p className="text-muted text-[15px] max-w-xs md:text-right">
          A selection of my open-source projects and public work
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-line border border-line rounded-2xl overflow-hidden">
        {projects.map((p, i) => (
          <ProjectCard key={p.title} p={p} i={i} />
        ))}
      </div>

      <div className="mt-10">
        <a
          href="https://github.com/rednez"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-muted no-underline
            underline-offset-4 decoration-line-strong hover:text-foreground hover:underline transition-colors duration-200"
        >
          See all public projects on GitHub →
        </a>
      </div>
    </section>
  );
}
