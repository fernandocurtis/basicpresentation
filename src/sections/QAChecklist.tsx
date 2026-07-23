import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, PartyPopper } from "lucide-react";
import { qaChecklist } from "../data/content";
import Reveal from "../components/Reveal";
import Kicker from "../components/Kicker";

const STORAGE_KEY = "qa-checklist-state";

export default function QAChecklist() {
  const [checked, setChecked] = useState<boolean[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) return JSON.parse(saved);
    } catch {
      /* ignore */
    }
    return qaChecklist.map(() => false);
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(checked));
  }, [checked]);

  const total = qaChecklist.length;
  const done = checked.filter(Boolean).length;
  const pct = Math.round((done / total) * 100);

  const toggle = (i: number) =>
    setChecked((c) => c.map((v, idx) => (idx === i ? !v : v)));

  return (
    <div className="border-t border-[var(--color-line)] px-6 py-28 sm:px-10">
      <Reveal>
        <Kicker>Launch readiness</Kicker>
      </Reveal>
      <Reveal delay={0.05}>
        <h3 className="mt-4 max-w-2xl text-balance font-display text-4xl font-medium sm:text-5xl">
          The final QA checklist
        </h3>
      </Reveal>
      <Reveal delay={0.1}>
        <p className="mt-3 max-w-xl text-balance text-[var(--color-ink-dim)]">
          What the web team checks before flipping a site to “ready.” Run
          through it yourself.
        </p>
      </Reveal>

      <div className="mt-10 flex items-center gap-4">
        <div className="h-2 flex-1 overflow-hidden rounded-full bg-[var(--color-panel)]">
          <motion.div
            className="h-full rounded-full bg-[var(--color-lime)]"
            animate={{ width: `${pct}%` }}
            transition={{ duration: 0.4 }}
          />
        </div>
        <span className="w-14 shrink-0 text-right font-mono text-base text-[var(--color-ink-dim)]">
          {pct}%
        </span>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
        {qaChecklist.map((item, i) => {
          const isChecked = checked[i];
          return (
            <motion.button
              type="button"
              key={item}
              data-cursor-hover
              onClick={() => toggle(i)}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: (i % 2) * 0.05 }}
              className={`flex items-center gap-4 rounded-xl border p-4 text-left transition-colors ${
                isChecked
                  ? "border-[var(--color-lime)]/50 bg-[var(--color-lime)]/[0.06]"
                  : "border-[var(--color-line)] hover:border-[var(--color-ink-dim)]"
              }`}
            >
              <span
                className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-md border-2 transition-colors ${
                  isChecked
                    ? "border-[var(--color-lime)] bg-[var(--color-lime)] text-[var(--color-void)]"
                    : "border-[var(--color-line)] text-transparent"
                }`}
              >
                <Check size={14} strokeWidth={3} />
              </span>
              <span
                className={`text-base ${
                  isChecked ? "text-[var(--color-ink-dim)] line-through" : "text-[var(--color-ink)]"
                }`}
              >
                {item}
              </span>
            </motion.button>
          );
        })}
      </div>

      <AnimatePresence>
        {done === total && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 12 }}
            className="mt-8 flex items-center gap-3 rounded-xl border border-[var(--color-lime)] bg-[var(--color-lime)]/10 p-5"
          >
            <PartyPopper size={20} className="text-[var(--color-lime)]" />
            <p className="font-medium text-[var(--color-ink)]">
              All clear — this site is ready to go live.
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
