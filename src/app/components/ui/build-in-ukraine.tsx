export function BuiltInUkraine() {
  return (
    <div className="max-w-xl mx-auto mb-10 rounded-2xl border border-emerald-500/30 bg-slate-800/70 px-5 py-4">
      <p className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-emerald-300">
        <span
          aria-hidden="true"
          className="inline-flex overflow-hidden rounded-sm border border-white/20"
        >
          <svg width="18" height="12" viewBox="0 0 18 12" fill="none">
            <rect width="18" height="6" fill="#1D70B8" />
            <rect y="6" width="18" height="6" fill="#FFD700" />
          </svg>
        </span>
        Built in Ukraine
      </p>
    </div>
  );
}
