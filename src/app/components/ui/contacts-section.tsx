export function ContactsSection() {
  return (
    <section id="contact" className="bg-slate-900 px-10 py-24 text-center">
      <p className="font-mono text-xs text-emerald-400 tracking-widest font-semibold uppercase mb-5">
        Contact
      </p>
      <h2
        className="font-serif font-black text-white leading-tight tracking-tight mb-5"
        style={{ fontSize: 'clamp(2.2rem, 5vw, 3.5rem)' }}
      >
        Let&apos;s build something
        <br />
        <span className="text-emerald-400">together.</span>
      </h2>
      <p className="text-slate-400 text-sm max-w-sm mx-auto leading-relaxed mb-10">
        Open to freelance projects, full-time roles, or just a good conversation
        about tech.
      </p>
      <a
        href="mailto:alex@example.com"
        className="inline-flex items-center gap-2 px-8 py-4 bg-emerald-500 text-white rounded-full text-base font-semibold no-underline hover:-translate-y-1 hover:shadow-2xl hover:shadow-emerald-500/30 transition-all duration-200"
      >
        Say Hello
        <svg
          className="w-4 h-4"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
        >
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </a>
      <p className="font-mono text-xs text-slate-600 mt-16">
        © 2026 Vasyl Yefimenko · Built with React
      </p>
    </section>
  );
}
