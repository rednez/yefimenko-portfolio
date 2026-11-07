import dayjs from 'dayjs';

export function FooterCopyrights() {
  return (
    <p className="font-mono text-xs text-white/50">
      © {dayjs().year()} Vasyl Yefimenko
    </p>
  );
}
