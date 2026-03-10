export function HeroSectionBlob({ heroVisible }: { heroVisible: boolean }) {
  return (
    <div
      className={`animate-float absolute top-24 right-0 w-96 h-96 pointer-events-none 
        transition-opacity duration-700 delay-300 
        ${heroVisible ? 'opacity-60 dark:opacity-20' : 'opacity-0'}`}
      style={{
        background: 'radial-gradient(circle at 40% 40%, #a7f3d0, #d1fae5aa)',
        borderRadius: '60% 40% 55% 45% / 45% 55% 40% 60%',
      }}
    />
  );
}
