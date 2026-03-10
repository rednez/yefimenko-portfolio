import { fadeUp } from '@/app/utils/fade-up';

export function HeroSectionSubHeading({
  heroVisible,
}: {
  heroVisible: boolean;
}) {
  return (
    <p
      className={`font-light text-slate-500 max-w-xl leading-relaxed mb-10 transition-all duration-700 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      style={{
        fontSize: 'clamp(1rem, 2vw, 1.2rem)',
        ...fadeUp(heroVisible, '0.45s'),
      }}
    >
      Frontend web developer crafting thoughtful digital experiences — with a
      keen eye for pixel-perfect UIs and hands-on backend experience.
    </p>
  );
}
