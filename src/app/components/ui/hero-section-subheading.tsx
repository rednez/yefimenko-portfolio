import { fadeUp } from '@/app/utils/fade-up';

export function HeroSectionSubHeading({
  heroVisible,
}: {
  heroVisible: boolean;
}) {
  return (
    <p
      className={`text-muted max-w-xl leading-relaxed tracking-[-0.01em] ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
      style={{
        fontSize: 'clamp(1.0625rem, 1.6vw, 1.25rem)',
        ...fadeUp(heroVisible, '0.55s'),
      }}
    >
      Frontend web developer crafting thoughtful digital experiences — with a
      keen eye for pixel-perfect UIs and hands-on backend experience.
    </p>
  );
}
