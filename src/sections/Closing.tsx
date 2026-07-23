import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import logo from "../assets/rage-collective-logo.png";

export default function Closing() {
  return (
    <section
      id="closing"
      className="relative flex min-h-[90vh] flex-col justify-between overflow-hidden border-t border-[var(--color-line)] bg-[var(--color-panel)] px-6 py-20 sm:px-10"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute bottom-0 left-1/2 h-[50vh] w-[50vh] -translate-x-1/2 rounded-full bg-[var(--color-lime)]/[0.1] blur-[140px]" />
      </div>

      <img
        src={logo}
        alt="Rage Collective"
        className="h-6 w-auto shrink-0 self-start sm:h-7"
      />

      <div className="flex flex-1 flex-col items-center justify-center gap-8 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-balance font-display text-6xl font-medium leading-[1.05] sm:text-8xl"
        >
          When in doubt,
          <br />
          <span className="text-[var(--color-lime)]">ask the dev team.</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="max-w-md text-balance text-xl text-[var(--color-ink-dim)]"
        >
          A quick question beats an undone mistake, every time. Thanks for
          reading.
        </motion.p>
      </div>

      <div className="flex items-center justify-between font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-ink-dim)]">
        <span>Website Essentials for Account Managers</span>
        <a
          href="#hero"
          data-cursor-hover
          className="group flex items-center gap-2 transition-colors hover:text-[var(--color-lime)]"
        >
          Back to top
          <ArrowUp size={14} className="transition-transform group-hover:-translate-y-0.5" />
        </a>
      </div>
    </section>
  );
}
