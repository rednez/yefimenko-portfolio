import dayjs from 'dayjs';

export function FooterCopyrights() {
  return (
    <p className="font-mono text-xs text-slate-400 mt-16">
      © {dayjs().year()} Vasyl Yefimenko
    </p>
  );
}
