import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Check, X, User, Code2, RotateCcw } from "lucide-react";
import { ownershipItems } from "../data/content";
import Reveal from "../components/Reveal";
import Kicker from "../components/Kicker";

function shuffle<T>(arr: readonly T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

type Guess = "am" | "dev" | null;

export default function Ownership() {
  const items = useMemo(() => shuffle(ownershipItems), []);
  const [guesses, setGuesses] = useState<Guess[]>(items.map(() => null));
  const [round, setRound] = useState(0);

  const answered = guesses.filter(Boolean).length;
  const correct = guesses.filter((g, i) => g === items[i].owner).length;

  const guess = (i: number, g: Guess) => {
    setGuesses((arr) => arr.map((v, idx) => (idx === i ? v ?? g : v)));
  };

  const reset = () => {
    setGuesses(items.map(() => null));
    setRound((r) => r + 1);
  };

  return (
    <section id="ownership" className="border-t border-[var(--color-line)] px-6 py-28 sm:px-10">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div>
          <Reveal>
            <Kicker>Who handles what</Kicker>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-4 max-w-2xl text-balance font-display text-5xl font-medium sm:text-6xl">
              You, or the dev team?
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-4 max-w-xl text-balance text-[var(--color-ink-dim)]">
              Guess who owns each request, then see the answer. When in
              doubt — ask. It's faster than undoing a mistake.
            </p>
          </Reveal>
        </div>
        <div className="flex items-center gap-4">
          <p className="font-mono text-base text-[var(--color-ink-dim)]">
            <span className="text-[var(--color-lime)]">{correct}</span>
            {" / "}
            {answered} correct
          </p>
          <button
            type="button"
            data-cursor-hover
            onClick={reset}
            className="flex items-center gap-2 rounded-full border border-[var(--color-line)] px-4 py-2 font-mono text-sm uppercase tracking-widest text-[var(--color-ink-dim)] transition-colors hover:border-[var(--color-lime)] hover:text-[var(--color-lime)]"
          >
            <RotateCcw size={13} /> Reshuffle
          </button>
        </div>
      </div>

      <div key={round} className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item, i) => {
          const g = guesses[i];
          const isAnswered = g !== null;
          const isCorrect = g === item.owner;
          return (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: (i % 3) * 0.06 }}
              className={`flex flex-col justify-between gap-4 rounded-2xl border p-5 transition-colors ${
                !isAnswered
                  ? "border-[var(--color-line)]"
                  : isCorrect
                    ? "border-[var(--color-lime)]/60 bg-[var(--color-lime)]/[0.06]"
                    : "border-[var(--color-coral)]/60 bg-[var(--color-coral)]/[0.06]"
              }`}
            >
              <p className="text-[var(--color-ink)]">{item.label}</p>

              {!isAnswered ? (
                <div className="flex gap-2">
                  <button
                    type="button"
                    data-cursor-hover
                    onClick={() => guess(i, "am")}
                    className="flex flex-1 items-center justify-center gap-1.5 rounded-lg border border-[var(--color-line)] py-2 font-mono text-xs uppercase tracking-wider text-[var(--color-ink-dim)] transition-colors hover:border-[var(--color-ink)] hover:text-[var(--color-ink)]"
                  >
                    <User size={12} /> You
                  </button>
                  <button
                    type="button"
                    data-cursor-hover
                    onClick={() => guess(i, "dev")}
                    className="flex flex-1 items-center justify-center gap-1.5 rounded-lg border border-[var(--color-line)] py-2 font-mono text-xs uppercase tracking-wider text-[var(--color-ink-dim)] transition-colors hover:border-[var(--color-ink)] hover:text-[var(--color-ink)]"
                  >
                    <Code2 size={12} /> Dev team
                  </button>
                </div>
              ) : (
                <div className="flex items-center justify-between">
                  <span
                    className={`flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider ${
                      item.owner === "am" ? "text-[var(--color-ink)]" : "text-[var(--color-violet)]"
                    }`}
                  >
                    {item.owner === "am" ? <User size={12} /> : <Code2 size={12} />}
                    {item.owner === "am" ? "You handle this" : "Loop in dev"}
                  </span>
                  {isCorrect ? (
                    <Check size={16} className="text-[var(--color-lime)]" />
                  ) : (
                    <X size={16} className="text-[var(--color-coral)]" />
                  )}
                </div>
              )}
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
