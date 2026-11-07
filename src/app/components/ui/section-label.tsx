export function SectionLabel({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p
      className={`inline-flex items-center gap-2 font-mono text-xs text-muted ${className}`}
    >
      <span
        aria-hidden="true"
        className="w-1.5 h-1.5 rounded-[1px] bg-accent"
      />
      {children}
    </p>
  );
}
