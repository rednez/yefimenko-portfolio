import { fadeUp } from '@/app/utils';

export function HeroSectionHeading({ heroVisible }: { heroVisible: boolean }) {
  return (
    <h1
      className={`font-serif font-black leading-none mb-6 transition-all 
        duration-700 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      style={{
        fontSize: 'clamp(3rem, 8vw, 5.5rem)',
        ...fadeUp(heroVisible, '0.25s'),
      }}
    >
      Hello, I&apos;m <span className="text-emerald-500">Vasyl Yefimenko</span>
    </h1>
  );
}
