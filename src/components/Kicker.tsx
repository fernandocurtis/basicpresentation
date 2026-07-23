import type { ReactNode } from "react";

export default function Kicker({ children }: { children: ReactNode }) {
  return (
    <div className="flex items-center gap-3 font-mono text-sm uppercase tracking-[0.25em] text-[var(--color-lime)]">
      <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-lime)]" />
      {children}
    </div>
  );
}
