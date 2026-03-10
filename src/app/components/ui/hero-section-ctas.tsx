import { fadeUp } from '@/app/utils';

export function HeroSectionCtas({ heroVisible }: { heroVisible: boolean }) {
  return (
    <div
      className={`flex gap-4 flex-wrap transition-all duration-700 
        ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      style={fadeUp(heroVisible, '0.6s')}
    >
      <a
        href="#projects"
        className="inline-flex items-center gap-2 px-7 py-3.5 bg-slate-900 dark:bg-white
                 text-white dark:text-slate-900 rounded-full text-sm font-semibold no-underline 
                  hover:-translate-y-0.5 
                  hover:shadow-lg hover:shadow-slate-900/20 dark:hover:shadow-white/15 transition-all 
                  duration-200"
      >
        View Projects
        <svg
          className="w-4 h-4"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
        >
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </a>
      <a
        href="mailto:vasyl@yefimenko.dev"
        className="inline-flex items-center gap-2 px-7 py-3.5 
              border border-stone-300 dark:border-stone-600 text-slate-700 dark:text-slate-300 rounded-full 
              text-sm font-medium no-underline hover:border-emerald-400 
              hover:text-emerald-600 transition-all duration-200"
      >
        Get in Touch
      </a>
    </div>
  );
}
