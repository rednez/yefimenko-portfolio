'use client';

import { useEffect, useState } from 'react';
import { NavbarLogo } from './navbar-logo';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex justify-between 
        items-center px-10 py-4 transition-all duration-300 
        ${scrolled ? 'bg-stone-50/90 dark:bg-stone-900/90 backdrop-blur-md border-b border-stone-200 dark:border-stone-700' : 'bg-transparent'}`}
    >
      <NavbarLogo />

      <div className="flex gap-4 sm:gap-8">
        {['About', 'Projects', 'Contact'].map((l) => (
          <a
            key={l}
            href={`#${l.toLowerCase()}`}
            className="text-sm font-medium text-slate-500 dark:text-slate-400 no-underline hover:text-emerald-600 transition-colors duration-200"
          >
            {l}
          </a>
        ))}
      </div>
    </nav>
  );
}
