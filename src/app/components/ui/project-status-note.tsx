export function ProjectStatusNote({ note }: { note: string }) {
  return (
    <p className="relative text-xs font-medium text-amber-700 dark:text-amber-400/90 mb-2">
      {note}
    </p>
  );
}
