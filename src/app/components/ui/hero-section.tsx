'use client';

import { fadeUp } from '@/app/utils';
import { useEffect, useState } from 'react';

export function HeroSection() {
  const [heroVisible, setHeroVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setHeroVisible(true), 100);
  }, []);

  return (
    <section className="min-h-screen flex flex-col justify-center px-10 pt-32 pb-16 max-w-5xl mx-auto relative overflow-hidden">
      {/* Blob */}
      <div
        className="animate-float absolute top-24 right-0 w-96 h-96 opacity-60 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 40% 40%, #a7f3d0, #d1fae5aa)',
          borderRadius: '60% 40% 55% 45% / 45% 55% 40% 60%',
        }}
      />

      <div className="relative z-10">
        {/* Badge */}
        <div
          className={`flex items-center gap-2 mb-6 transition-all duration-500 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          style={fadeUp(heroVisible, '0.1s')}
        >
          <span className="animate-pulse-dot w-2 h-2 rounded-full bg-emerald-500 inline-block" />
          <span className="font-mono text-xs text-emerald-600 tracking-widest font-semibold uppercase">
            Available for work
          </span>
        </div>

        {/* Heading */}
        <h1
          className={`font-serif font-black leading-none tracking-tight mb-6 transition-all duration-700 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          style={{
            fontSize: 'clamp(3rem, 8vw, 5.5rem)',
            ...fadeUp(heroVisible, '0.25s'),
          }}
        >
          Hello, I&apos;m{' '}
          <span className="text-emerald-500">Vasyl Yefimenko</span>.
        </h1>

        {/* Sub */}
        <p
          className={`font-light text-slate-500 max-w-xl leading-relaxed mb-10 transition-all duration-700 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          style={{
            fontSize: 'clamp(1rem, 2vw, 1.2rem)',
            ...fadeUp(heroVisible, '0.45s'),
          }}
        >
          Full-stack web developer crafting thoughtful digital experiences —
          from pixel-perfect UIs to scalable backend architectures.
        </p>

        {/* CTAs */}
        <div
          className={`flex gap-4 flex-wrap transition-all duration-700 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          style={fadeUp(heroVisible, '0.6s')}
        >
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-slate-900 text-white rounded-full text-sm font-semibold no-underline hover:-translate-y-0.5 hover:shadow-lg hover:shadow-slate-900/20 transition-all duration-200"
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
            href="mailto:alex@example.com"
            className="inline-flex items-center gap-2 px-7 py-3.5 border border-stone-300 text-slate-700 rounded-full text-sm font-medium no-underline hover:border-emerald-400 hover:text-emerald-600 transition-all duration-200"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}
