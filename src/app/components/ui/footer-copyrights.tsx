import dayjs from 'dayjs';

export function FooterCopyrights() {
  return (
    <p className="font-mono text-xs text-subtle">
      © {dayjs().year()} Vasyl Yefimenko
    </p>
  );
}
