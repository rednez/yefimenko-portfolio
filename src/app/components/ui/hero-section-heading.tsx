const ease = 'cubic-bezier(.22,1,.36,1)';

function RevealLine({
  children,
  visible,
  delay,
  className = '',
}: {
  children: React.ReactNode;
  visible: boolean;
  delay: string;
  className?: string;
}) {
  return (
    <span className="block overflow-hidden pb-[0.08em] -mb-[0.08em]">
      <span
        className={`block ${className} ${visible ? 'translate-y-0' : 'translate-y-[105%]'}`}
        style={{ transition: `transform 1s ${ease} ${delay}` }}
      >
        {children}
      </span>
    </span>
  );
}

export function HeroSectionHeading({ heroVisible }: { heroVisible: boolean }) {
  return (
    <h1
      className="font-semibold leading-[0.95] tracking-[-0.045em]"
      style={{ fontSize: 'clamp(2.75rem, 7.4vw, 6rem)' }}
    >
      <RevealLine visible={heroVisible} delay="0.15s" className="text-muted">
        Hello, I&apos;m
      </RevealLine>
      <RevealLine visible={heroVisible} delay="0.28s">
        Vasyl Yefimenko
      </RevealLine>
    </h1>
  );
}
