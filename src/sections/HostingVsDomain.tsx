import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Globe, Server, ArrowLeftRight } from "lucide-react";
import { hostingVsDomain as d } from "../data/content";
import Reveal from "../components/Reveal";
import Kicker from "../components/Kicker";

export default function HostingVsDomain() {
  const [side, setSide] = useState<"domain" | "hosting">("domain");
  const active = d[side];

  return (
    <div className="border-t border-[var(--color-line)] px-6 py-28 sm:px-10">
      <Reveal>
        <Kicker>A common mix-up</Kicker>
      </Reveal>
      <Reveal delay={0.05}>
        <h3 className="mt-4 max-w-2xl text-balance font-display text-4xl font-medium sm:text-5xl">
          Hosting vs. domain: what's the difference?
        </h3>
      </Reveal>
      <Reveal delay={0.1}>
        <p className="mt-4 max-w-xl text-balance text-[var(--color-ink-dim)]">
          Two different things, often bought from two different companies —
          and both required for a site to work.
        </p>
      </Reveal>

      <div className="mt-12 grid gap-3 sm:grid-cols-[1fr_auto_1fr] sm:items-center">
        <button
          data-cursor-hover
          onClick={() => setSide("domain")}
          className={`rounded-2xl border p-6 text-left transition-colors ${
            side === "domain"
              ? "border-[var(--color-lime)] bg-[var(--color-panel)]"
              : "border-[var(--color-line)] hover:border-[var(--color-ink-dim)]"
          }`}
        >
          <Globe
            size={24}
            className={side === "domain" ? "text-[var(--color-lime)]" : "text-[var(--color-ink-dim)]"}
          />
          <p className="mt-4 font-display text-2xl font-medium">Domain</p>
          <p className="text-base text-[var(--color-ink-dim)]">The name people type</p>
        </button>

        <div className="hidden justify-center sm:flex">
          <ArrowLeftRight size={20} className="text-[var(--color-ink-dim)]" />
        </div>

        <button
          data-cursor-hover
          onClick={() => setSide("hosting")}
          className={`rounded-2xl border p-6 text-left transition-colors ${
            side === "hosting"
              ? "border-[var(--color-lime)] bg-[var(--color-panel)]"
              : "border-[var(--color-line)] hover:border-[var(--color-ink-dim)]"
          }`}
        >
          <Server
            size={24}
            className={side === "hosting" ? "text-[var(--color-lime)]" : "text-[var(--color-ink-dim)]"}
          />
          <p className="mt-4 font-display text-2xl font-medium">Hosting</p>
          <p className="text-base text-[var(--color-ink-dim)]">Where the site actually lives</p>
        </button>
      </div>

      <AnimatePresence mode="wait">
        <motion.ul
          key={side}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.35 }}
          className="mt-8 space-y-3 rounded-2xl border border-[var(--color-line)] bg-[var(--color-panel)] p-6 sm:p-8"
        >
          <p className="font-mono text-sm uppercase tracking-widest text-[var(--color-lime)]">
            {active.tagline}
          </p>
          {active.points.map((p) => (
            <li key={p} className="flex gap-3 text-[var(--color-ink-dim)]">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[var(--color-ink-dim)]" />
              <span>{p}</span>
            </li>
          ))}
        </motion.ul>
      </AnimatePresence>

      <Reveal delay={0.1}>
        <p className="mt-8 max-w-2xl text-balance border-l-2 border-[var(--color-lime)] pl-5 italic text-[var(--color-ink-dim)]">
          {d.analogy}
        </p>
      </Reveal>
    </div>
  );
}
