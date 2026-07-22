import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { getIcon } from "../components/icons";
import { propagation as p } from "../data/content";
import Reveal from "../components/Reveal";
import Kicker from "../components/Kicker";

const nodes = [
  { x: 20, y: 30, delay: 0 },
  { x: 78, y: 20, delay: 0.4 },
  { x: 50, y: 15, delay: 0.8 },
  { x: 15, y: 72, delay: 1.2 },
  { x: 85, y: 68, delay: 1.6 },
  { x: 55, y: 85, delay: 2.0 },
];

export default function Propagation() {
  const [tick, setTick] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setTick((t) => t + 1), 4200);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="border-t border-[var(--color-line)] px-6 py-28 sm:px-10">
      <Reveal>
        <Kicker>A common question</Kicker>
      </Reveal>
      <Reveal delay={0.05}>
        <h3 className="mt-4 max-w-2xl text-balance font-display text-3xl font-medium sm:text-4xl">
          Why does one city see it, and another doesn't?
        </h3>
      </Reveal>
      <Reveal delay={0.1}>
        <p className="mt-4 max-w-2xl text-balance text-[var(--color-ink-dim)]">
          {p.question}
        </p>
      </Reveal>

      <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:items-center">
        <div className="relative mx-auto aspect-square w-full max-w-md rounded-3xl border border-[var(--color-line)] bg-[var(--color-panel)]">
          <div className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--color-lime)]" />
          {[0, 1, 2].map((i) => (
            <motion.span
              key={`${tick}-${i}`}
              className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[var(--color-lime)]"
              initial={{ scale: 1, opacity: 0.8 }}
              animate={{ scale: 18, opacity: 0 }}
              transition={{ duration: 3, delay: i * 0.7, ease: "easeOut" }}
            />
          ))}
          {nodes.map((n, i) => (
            <motion.div
              key={i}
              className="absolute flex h-8 w-8 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[var(--color-line)] bg-[var(--color-void)]"
              style={{ left: `${n.x}%`, top: `${n.y}%` }}
              animate={{
                borderColor: ["#26282e", "#d6ff3f", "#26282e"],
              }}
              transition={{ duration: 1, delay: n.delay + (tick % 5) * 0.05, repeat: Infinity, repeatDelay: 3.2 }}
            >
              <MapPin size={13} className="text-[var(--color-ink-dim)]" />
            </motion.div>
          ))}
          <p className="absolute bottom-4 left-1/2 w-full -translate-x-1/2 text-center font-mono text-[10px] uppercase tracking-widest text-[var(--color-ink-dim)]">
            update rippling to edge nodes
          </p>
        </div>

        <div className="space-y-4">
          {p.causes.map((c) => {
            const Icon = getIcon(c.icon);
            return (
              <div
                key={c.label}
                className="rounded-2xl border border-[var(--color-line)] p-6"
              >
                <div className="flex items-center gap-3">
                  <Icon size={20} className="text-[var(--color-lime)]" />
                  <p className="font-display text-lg font-medium">{c.label}</p>
                </div>
                <ul className="mt-3 space-y-2">
                  {c.points.map((pt) => (
                    <li key={pt} className="flex gap-3 text-sm text-[var(--color-ink-dim)]">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[var(--color-ink-dim)]" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>

      <Reveal delay={0.1}>
        <p className="mt-8 max-w-2xl text-balance border-l-2 border-[var(--color-lime)] pl-5 italic text-[var(--color-ink-dim)]">
          {p.bottomLine}
        </p>
      </Reveal>
    </div>
  );
}
