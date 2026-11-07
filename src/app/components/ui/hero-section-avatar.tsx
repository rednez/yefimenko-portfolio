import Image from 'next/image';

const corners = [
  'top-0 left-0 border-t border-l',
  'top-0 right-0 border-t border-r',
  'bottom-0 left-0 border-b border-l',
  'bottom-0 right-0 border-b border-r',
];

export function HeroSectionAvatar({ heroVisible }: { heroVisible: boolean }) {
  return (
    <div
      className={`justify-self-start md:justify-self-end transition-all duration-1000 delay-300 ease-[cubic-bezier(.22,1,.36,1)]
        ${heroVisible ? 'opacity-100 scale-100 blur-0' : 'opacity-0 scale-95 blur-sm'}`}
    >
      {/* Frame with crop marks */}
      <div className="relative p-3">
        {corners.map((c) => (
          <span
            key={c}
            aria-hidden="true"
            className={`absolute w-4 h-4 border-accent ${c}`}
          />
        ))}
        <div className="relative w-44 h-44 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-2xl overflow-hidden border border-line bg-surface">
          <Image
            src="/avatar.jpg"
            alt="Vasyl Yefimenko"
            width={800}
            height={800}
            sizes="(min-width: 768px) 256px, (min-width: 640px) 224px, 176px"
            className="w-full h-full object-cover object-top grayscale-[15%] contrast-[1.03]"
            priority
          />
        </div>
      </div>
    </div>
  );
}
