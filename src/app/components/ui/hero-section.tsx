'use client';

import { useCursorVars } from '@/app/hooks/cursor-vars';
import { useEffect, useState } from 'react';
import { HeroSectionAvatar } from './hero-section-avatar';
import { HeroSectionCtas } from './hero-section-ctas';
import { HeroSectionGrid } from './hero-section-grid';
import { HeroSectionHeading } from './hero-section-heading';
import { HeroSectionSubHeading } from './hero-section-subheading';

export function HeroSection() {
  const [heroVisible, setHeroVisible] = useState(false);
  const onPointerMove = useCursorVars<HTMLElement>();

  useEffect(() => {
    const t = setTimeout(() => setHeroVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      onPointerMove={onPointerMove}
      className="relative overflow-hidden [--mx:72%] [--my:42%]"
    >
      <HeroSectionGrid heroVisible={heroVisible} />

      <div className="relative z-10 flex flex-col justify-center max-w-6xl mx-auto px-5 sm:px-10 pt-30 pb-8 sm:pt-30">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-12 md:gap-16 items-end">
          <HeroSectionHeading heroVisible={heroVisible} />
          <HeroSectionAvatar heroVisible={heroVisible} />
        </div>

        <div className="mt-12 md:mt-16 pt-8 border-t border-line grid grid-cols-1 md:grid-cols-[1fr_auto] gap-8 md:gap-16 items-start">
          <HeroSectionSubHeading heroVisible={heroVisible} />
          <HeroSectionCtas heroVisible={heroVisible} />
        </div>
      </div>
    </section>
  );
}
