import { ThemeSwitcher } from '../layout/theme-switcher';
import { BuiltInUkraine } from './build-in-ukraine';
import { FooterCopyrights } from './footer-copyrights';
import { SectionLabel } from './section-label';

const fadeMask =
  'radial-gradient(ellipse 70% 80% at 50% 0%, #000 30%, transparent 100%)';

export function ContactsSection() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#0a0f1c] dark:bg-[#0c111d] dark:border-t dark:border-line text-white [--grid:rgba(255,255,255,0.05)]"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-grid pointer-events-none"
        style={{ maskImage: fadeMask, WebkitMaskImage: fadeMask }}
      />
      <div
        aria-hidden="true"
        className="absolute -top-64 left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full bg-[#2a4bf0] opacity-25 blur-[140px] pointer-events-none"
      />

      <div className="relative max-w-6xl mx-auto px-5 sm:px-10 pt-28 md:pt-36 pb-12">
        <div className="text-center">
          <SectionLabel tone="inverse" className="mb-8">
            Contact
          </SectionLabel>
          <h2
            className="font-semibold leading-[0.98] tracking-[-0.045em] mb-6"
            style={{ fontSize: 'clamp(2.5rem, 6.5vw, 5rem)' }}
          >
            Let&apos;s build something
            <br />
            <span className="text-white/45">together.</span>
          </h2>
          <p className="text-white/60 text-base max-w-sm mx-auto leading-relaxed mb-10">
            Always open to collaboration, shared ideas, and thoughtful
            conversations about tech.
          </p>
          <a
            href="mailto:hello@yefimenko.dev"
            className="group inline-flex items-center gap-2.5 h-14 px-8 bg-white text-[#0a0f1c] rounded-full text-base font-semibold no-underline
              shadow-[0_0_0_1px_rgba(255,255,255,0.1),0_20px_60px_-15px_rgba(42,75,240,0.7)]
              hover:bg-[#2a4bf0] hover:text-white transition-colors duration-200"
          >
            Say Hello
            <svg
              className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.25"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>

        <div className="mt-28 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
            <FooterCopyrights />
            <BuiltInUkraine />
          </div>
          <ThemeSwitcher />
        </div>
      </div>
    </section>
  );
}
