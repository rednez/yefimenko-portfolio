'use client';

import { useEffect, useState } from 'react';
import { HeroSectionBadge } from './hero-section-badge';
import { HeroSectionBlob } from './hero-section-blob';
import { HeroSectionCtas } from './hero-section-ctas';
import { HeroSectionHeading } from './hero-section-heading';
import { HeroSectionSubHeading } from './hero-section-subheading';

export function HeroSection() {
  const [heroVisible, setHeroVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setHeroVisible(true), 100);
  }, []);

  return (
    <section className="min-h-screen flex flex-col justify-center px-10 pt-32 pb-16 max-w-5xl mx-auto relative overflow-hidden">
      <HeroSectionBlob heroVisible={heroVisible} />

      <div className="relative z-10">
        <HeroSectionBadge heroVisible={heroVisible} />
        <HeroSectionHeading heroVisible={heroVisible} />
        <HeroSectionSubHeading heroVisible={heroVisible} />
        <HeroSectionCtas heroVisible={heroVisible} />
      </div>
    </section>
  );
}
