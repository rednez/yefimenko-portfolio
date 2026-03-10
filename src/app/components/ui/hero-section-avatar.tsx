import Image from 'next/image';

export function HeroSectionAvatar({ heroVisible }: { heroVisible: boolean }) {
  return (
    <div
      className={`flex justify-center md:justify-end transition-all duration-700 delay-500
        ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
    >
      <div className="relative w-52 h-52 md:w-64 md:h-64">
        {/* Soft emerald glow behind the photo */}
        <div className="absolute inset-0 rounded-full bg-emerald-300 blur-3xl opacity-30 scale-110" />
        <Image
          src="/avatar.jpg"
          alt="Vasyl Yefimenko"
          width={800}
          height={800}
          sizes="(min-width: 768px) 256px, 208px"
          className="relative rounded-full object-cover object-top ring-4 ring-emerald-400/50"
          priority
        />
      </div>
    </div>
  );
}
