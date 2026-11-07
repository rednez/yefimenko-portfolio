'use client';

import { useEffect, useState } from 'react';
import { NavbarLogo } from './navbar-logo';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 border-b transition-[background-color,border-color] duration-300
        ${scrolled ? 'bg-background/75 backdrop-blur-xl border-line' : 'bg-transparent border-transparent'}`}
    >
      <div className="max-w-6xl mx-auto h-16 px-5 sm:px-10 flex justify-between items-center">
        <a href="#" className="no-underline">
          <NavbarLogo />
        </a>

        <div className="flex gap-1 sm:gap-2">
          {['About', 'Projects', 'Contact'].map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              className="px-3 py-1.5 rounded-full text-sm font-medium text-muted no-underline hover:text-foreground hover:bg-foreground/5 transition-colors duration-200"
            >
              {l}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
