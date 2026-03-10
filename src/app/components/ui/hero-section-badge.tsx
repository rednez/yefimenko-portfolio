import { fadeUp } from '@/app/utils';

export function HeroSectionBadge({ heroVisible }: { heroVisible: boolean }) {
  return (
    <div
      className={`flex items-center gap-2 mb-6 transition-all duration-500 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
      style={fadeUp(heroVisible, '0.1s')}
    >
      <span className="animate-pulse-dot w-2 h-2 rounded-full bg-emerald-500 inline-block" />
      <span className="font-mono text-xs text-emerald-600 tracking-widest font-semibold uppercase">
        Available for cool projects
      </span>
    </div>
  );
}
