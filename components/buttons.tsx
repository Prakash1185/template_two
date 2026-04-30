export function PrimaryButton({ children }: { children: React.ReactNode }) {
  return (
    <button
      className="group h-10 rounded-md border border-transparent 
      bg-[var(--primary)] px-5 text-white text-sm font-medium
      shadow-[inset_0_1px_0_rgba(255,255,255,0.2),0_8px_20px_-8px_rgba(0,0,0,0.25)]
      transition-all duration-300
      hover:bg-[var(--primary-dark)]
      hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.3),0_12px_25px_-10px_rgba(0,0,0,0.35)]
      cursor-pointer
      "
    >
      <span className="flex items-center gap-2">
        {children}
        <span className="inline-flex size-5 items-center justify-center rounded-full bg-white/20 ring-1 ring-white/30 transition group-hover:bg-white/30">
          →
        </span>
      </span>
    </button>
  );
}

export function GhostButton({ children }: { children: React.ReactNode }) {
  return (
    <button
      className="h-10 px-4 text-sm text-[var(--primary)] border border-[var(--primary)] rounded-md
      hover:bg-[var(--primary)]/5 cursor-pointer transition"
    >
      {children}
    </button>
  );
}
