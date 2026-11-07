const fadeMask =
  'radial-gradient(ellipse 90% 75% at 50% 35%, #000 40%, transparent 100%)';
const cursorMask =
  'radial-gradient(260px circle at var(--mx) var(--my), #000, transparent 70%)';

export function HeroSectionGrid({ heroVisible }: { heroVisible: boolean }) {
  return (
    <div
      aria-hidden="true"
      className={`absolute inset-0 pointer-events-none transition-opacity duration-1000 ${heroVisible ? 'opacity-100' : 'opacity-0'}`}
      style={{ maskImage: fadeMask, WebkitMaskImage: fadeMask }}
    >
      {/* Faint base grid */}
      <div className="absolute inset-0 bg-grid" />

      {/* Highlighted grid revealed around the cursor */}
      <div
        className="absolute inset-0 bg-grid bg-grid-strong"
        style={{ maskImage: cursorMask, WebkitMaskImage: cursorMask }}
      />

      {/* Soft accent glow following the cursor */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(520px circle at var(--mx) var(--my), var(--accent-soft), transparent 65%)',
        }}
      />
    </div>
  );
}
