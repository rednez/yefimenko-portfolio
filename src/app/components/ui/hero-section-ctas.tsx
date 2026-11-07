import { fadeUp } from '@/app/utils';
import { ArrowIcon } from './arrow-icon';

export function HeroSectionCtas({ heroVisible }: { heroVisible: boolean }) {
  return (
    <div
      className={`flex gap-3 flex-wrap ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
      style={fadeUp('0.65s')}
    >
      <a
        href="#projects"
        className="group inline-flex items-center gap-2 h-12 px-6 bg-foreground text-background rounded-full text-sm font-medium no-underline
          hover:bg-accent hover:text-white transition-colors duration-200"
      >
        View Projects
        <ArrowIcon className="transition-transform duration-200 group-hover:translate-x-0.5" />
      </a>
      <a
        href="mailto:hello@yefimenko.dev"
        className="inline-flex items-center h-12 px-6 border border-line-strong bg-surface/80 text-foreground rounded-full
          text-sm font-medium no-underline hover:border-foreground transition-colors duration-200"
      >
        Get in Touch
      </a>
    </div>
  );
}
