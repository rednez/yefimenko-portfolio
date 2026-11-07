import { fadeUp } from '@/app/utils';

export function HeroSectionBadge({ heroVisible }: { heroVisible: boolean }) {
  return (
    <div
      className={`inline-flex items-center gap-2.5 mb-8 pl-2.5 pr-3.5 py-1.5 rounded-full border border-line bg-surface/80
        ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}
      style={fadeUp('0.05s')}
    >
      <span className="animate-pulse-dot w-2 h-2 rounded-full bg-accent inline-block" />
      <span className="font-mono text-xs text-muted">
        Available for cool projects
      </span>
    </div>
  );
}
