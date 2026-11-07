import { fadeUp } from '@/app/utils';

export function HeroSectionCtas({ heroVisible }: { heroVisible: boolean }) {
  return (
    <div
      className={`flex gap-3 flex-wrap ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
      style={fadeUp(heroVisible, '0.65s')}
    >
      <a
        href="#projects"
        className="group inline-flex items-center gap-2 h-12 px-6 bg-foreground text-background rounded-full text-sm font-medium no-underline
          hover:bg-accent hover:text-white transition-colors duration-200"
      >
        View Projects
        <svg
          className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </a>
      <a
        href="mailto:hello@yefimenko.dev"
        className="inline-flex items-center h-12 px-6 border border-line-strong bg-surface/60 backdrop-blur text-foreground rounded-full
          text-sm font-medium no-underline hover:border-foreground transition-colors duration-200"
      >
        Get in Touch
      </a>
    </div>
  );
}
