import { ThemeSwitcher } from '../layout/theme-switcher';
import { ArrowIcon } from './arrow-icon';
import { BuiltInUkraine } from './build-in-ukraine';
import { FooterCopyrights } from './footer-copyrights';
import { SectionLabel } from './section-label';

const glow =
  'radial-gradient(closest-side, color-mix(in srgb, var(--accent) 35%, transparent), transparent)';
const fadeMask =
  'radial-gradient(ellipse 70% 80% at 50% 0%, #000 30%, transparent 100%)';

export function ContactsSection() {
  return (
    <section
      id="contact"
      className="surface-inverse relative overflow-hidden bg-background text-foreground dark:border-t dark:border-line"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-grid pointer-events-none"
        style={{ maskImage: fadeMask, WebkitMaskImage: fadeMask }}
      />
      <div
        aria-hidden="true"
        className="absolute -top-64 left-1/2 -translate-x-1/2 w-[1200px] h-[700px] pointer-events-none"
        style={{ background: glow }}
      />

      <div className="relative max-w-6xl mx-auto px-5 sm:px-10 pt-28 md:pt-36 pb-12">
        <div className="text-center">
          <SectionLabel className="mb-8">Contact</SectionLabel>
          <h2
            className="font-semibold leading-[0.98] tracking-[-0.045em] mb-6"
            style={{ fontSize: 'clamp(2.5rem, 6.5vw, 5rem)' }}
          >
            Let&apos;s build something
            <br />
            <span className="text-subtle">together.</span>
          </h2>
          <p className="text-muted text-base max-w-sm mx-auto leading-relaxed mb-10">
            Always open to collaboration, shared ideas, and thoughtful
            conversations about tech.
          </p>
          <a
            href="mailto:hello@yefimenko.dev"
            className="group inline-flex items-center gap-2.5 h-14 px-8 bg-foreground text-background rounded-full text-base font-semibold no-underline
              shadow-[0_20px_60px_-15px_color-mix(in_srgb,var(--accent)_70%,transparent)]
              hover:bg-accent transition-colors duration-200"
          >
            Say Hello
            <ArrowIcon className="transition-transform duration-200 group-hover:translate-x-0.5" />
          </a>
        </div>

        <div className="mt-28 pt-8 border-t border-line flex flex-col md:flex-row items-center justify-between gap-6">
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
