const paths = {
  right: 'M5 12h14M12 5l7 7-7 7',
  'up-right': 'M7 17L17 7M7 7h10v10',
};

export function ArrowIcon({
  direction = 'right',
  className = '',
}: {
  direction?: keyof typeof paths;
  className?: string;
}) {
  return (
    <svg
      aria-hidden="true"
      className={`w-4 h-4 ${className}`}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d={paths[direction]} />
    </svg>
  );
}
