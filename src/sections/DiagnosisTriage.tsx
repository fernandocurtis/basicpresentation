import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { getIcon } from "../components/icons";
import { triageLayers } from "../data/content";
import Reveal from "../components/Reveal";
import Kicker from "../components/Kicker";

export default function DiagnosisTriage() {
  const [active, setActive] = useState(0);
  const layer = triageLayers[active];
  const Icon = getIcon(layer.icon);

  return (
    <div className="px-6 py-28 sm:px-10">
      <Reveal>
        <Kicker>Quick diagnosis</Kicker>
      </Reveal>
      <Reveal delay={0.05}>
        <h2 className="mt-4 max-w-2xl text-balance font-display text-5xl font-medium sm:text-6xl">
          Hosting, DNS, or the website itself?
        </h2>
      </Reveal>
      <Reveal delay={0.1}>
        <p className="mt-4 max-w-xl text-balance text-[var(--color-ink-dim)]">
          Three layers, three different fixes — narrow it down before
          assigning the ticket.
        </p>
      </Reveal>

      <div className="mt-14 grid gap-10 lg:grid-cols-[320px_1fr]">
        {/* stacked layer selector */}
        <div className="flex flex-row gap-3 lg:flex-col">
          {triageLayers.map((l, i) => {
            const LIcon = getIcon(l.icon);
            return (
              <button
                key={l.label}
                data-cursor-hover
                onClick={() => setActive(i)}
                className={`group relative flex flex-1 items-center gap-3 overflow-hidden rounded-2xl border p-5 text-left transition-colors lg:flex-none ${
                  active === i
                    ? "border-[var(--color-lime)] bg-[var(--color-panel)]"
                    : "border-[var(--color-line)] hover:border-[var(--color-ink-dim)]"
                }`}
              >
                <span
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${
                    active === i
                      ? "bg-[var(--color-lime)] text-[var(--color-void)]"
                      : "bg-[var(--color-void)] text-[var(--color-ink-dim)]"
                  }`}
                >
                  <LIcon size={18} />
                </span>
                <div className="hidden sm:block">
                  <p className="font-display text-lg font-medium">{l.label}</p>
                  <p className="text-sm text-[var(--color-ink-dim)]">Layer {i + 1}</p>
                </div>
              </button>
            );
          })}
        </div>

        {/* detail panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-3xl border border-[var(--color-line)] bg-[var(--color-panel)] p-8 sm:p-10"
          >
            <div className="flex items-center gap-4">
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--color-lime)] text-[var(--color-void)]">
                <Icon size={26} />
              </span>
              <div>
                <p className="font-mono text-sm uppercase tracking-widest text-[var(--color-lime)]">
                  {layer.label}
                </p>
                <p className="font-display text-3xl font-medium">{layer.question}</p>
              </div>
            </div>

            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              <div>
                <p className="font-mono text-xs uppercase tracking-widest text-[var(--color-ink-dim)]">
                  Signature
                </p>
                <p className="mt-2 text-[var(--color-ink)]">{layer.signature}</p>
              </div>
              <div>
                <p className="font-mono text-xs uppercase tracking-widest text-[var(--color-ink-dim)]">
                  Signs
                </p>
                <ul className="mt-2 space-y-1.5">
                  {layer.signs.map((s) => (
                    <li key={s} className="flex gap-2 text-[var(--color-ink-dim)]">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[var(--color-ink-dim)]" />
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-8 flex items-center gap-3 rounded-xl border border-[var(--color-lime)]/40 bg-[var(--color-lime)]/10 p-4">
              <CheckCircle2 size={18} className="shrink-0 text-[var(--color-lime)]" />
              <p className="text-base text-[var(--color-ink)]">{layer.check}</p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
