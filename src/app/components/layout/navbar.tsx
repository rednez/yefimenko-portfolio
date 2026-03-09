'use client';

import { useEffect, useState } from 'react';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-10 py-4 transition-all duration-300 ${scrolled ? 'bg-stone-50/90 backdrop-blur-md border-b border-stone-200' : 'bg-transparent'}`}
    >
      <span className="font-serif font-black text-lg tracking-tight">
        V.Yefimenko<span className="text-emerald-500">.</span>
      </span>
      <div className="flex gap-8">
        {['About', 'Projects', 'Contact'].map((l) => (
          <a
            key={l}
            href={`#${l.toLowerCase()}`}
            className="text-sm font-medium text-slate-500 no-underline hover:text-emerald-600 transition-colors duration-200"
          >
            {l}
          </a>
        ))}
      </div>
    </nav>
  );
}
