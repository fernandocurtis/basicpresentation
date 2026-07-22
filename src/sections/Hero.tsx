import { motion } from "framer-motion";
import { ArrowDown, Globe } from "lucide-react";

const title = ["Website", "Essentials", "for Account", "Managers"];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[100svh] flex-col justify-between overflow-hidden px-6 pb-10 pt-28 sm:px-10"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 left-1/2 h-[60vh] w-[60vh] -translate-x-1/2 rounded-full bg-[var(--color-lime)]/[0.08] blur-[140px]" />
        <div className="absolute bottom-0 right-0 h-[40vh] w-[40vh] rounded-full bg-[var(--color-violet)]/[0.12] blur-[120px]" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(var(--color-ink) 1px, transparent 1px), linear-gradient(90deg, var(--color-ink) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
      </div>

      <div className="flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.25em] text-[var(--color-ink-dim)]"
        >
          <Globe size={14} className="text-[var(--color-lime)]" />
          Rage Collective
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="rounded-full border border-[var(--color-line)] px-4 py-1.5 font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--color-ink-dim)]"
        >
          Client-Facing Reference
        </motion.div>
      </div>

      <div className="flex flex-1 flex-col justify-center">
        <h1 className="font-display text-[13vw] font-medium leading-[0.92] tracking-tight text-[var(--color-ink)] sm:text-[8vw]">
          {title.map((word, i) => (
            <span key={word} className="block overflow-hidden">
              <motion.span
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{
                  duration: 0.9,
                  delay: 0.15 + i * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className={`block ${
                  word === "Essentials" ? "text-[var(--color-lime)]" : ""
                }`}
              >
                {word}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="mt-8 max-w-xl text-balance text-lg text-[var(--color-ink-dim)] sm:text-xl"
        >
          Key terms, diagnosing issues, understanding QA, and knowing when to
          loop in the dev team.
        </motion.p>
      </div>

      <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
        <motion.a
          href="#glossary"
          data-cursor-hover
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.9 }}
          className="group flex items-center gap-3 font-mono text-sm uppercase tracking-[0.2em] text-[var(--color-ink)]"
        >
          <span className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--color-line)] transition-colors group-hover:border-[var(--color-lime)] group-hover:text-[var(--color-lime)]">
            <motion.span
              animate={{ y: [0, 4, 0] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            >
              <ArrowDown size={16} />
            </motion.span>
          </span>
          Start reading
        </motion.a>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 1 }}
          className="max-w-xs text-balance text-right font-mono text-xs uppercase leading-relaxed tracking-[0.15em] text-[var(--color-ink-dim)] sm:text-left"
        >
          Read it end to end once — then keep it handy for the next time a
          client asks “why is my site doing that?”
        </motion.p>
      </div>
    </section>
  );
}
