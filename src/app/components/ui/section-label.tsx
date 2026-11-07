export function SectionLabel({
  children,
  className = '',
  tone = 'default',
}: {
  children: React.ReactNode;
  className?: string;
  tone?: 'default' | 'inverse';
}) {
  return (
    <p
      className={`inline-flex items-center gap-2 font-mono text-xs ${
        tone === 'inverse' ? 'text-white/60' : 'text-muted'
      } ${className}`}
    >
      <span
        aria-hidden="true"
        className={`w-1.5 h-1.5 rounded-[1px] ${tone === 'inverse' ? 'bg-[#7b93ff]' : 'bg-accent'}`}
      />
      {children}
    </p>
  );
}
