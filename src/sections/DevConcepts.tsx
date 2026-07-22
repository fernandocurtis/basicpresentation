import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { getIcon } from "../components/icons";
import { devConcepts } from "../data/content";
import Reveal from "../components/Reveal";
import Kicker from "../components/Kicker";

export default function DevConcepts() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="px-6 py-28 sm:px-10">
      <Reveal>
        <Kicker>For better communication</Kicker>
      </Reveal>
      <Reveal delay={0.05}>
        <h2 className="mt-4 max-w-2xl text-balance font-display text-4xl font-medium sm:text-5xl">
          Concepts worth understanding
        </h2>
      </Reveal>
      <Reveal delay={0.1}>
        <p className="mt-4 max-w-xl text-balance text-[var(--color-ink-dim)]">
          You don't need to build a site — but these concepts help you
          translate for clients and devs alike.
        </p>
      </Reveal>

      <div className="mt-14 divide-y divide-[var(--color-line)] border-y border-[var(--color-line)]">
        {devConcepts.map((c, i) => {
          const Icon = getIcon(c.icon);
          const isOpen = open === i;
          return (
            <div key={c.title}>
              <button
                type="button"
                data-cursor-hover
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full items-center gap-5 py-6 text-left"
              >
                <span
                  className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl transition-colors ${
                    isOpen
                      ? "bg-[var(--color-lime)] text-[var(--color-void)]"
                      : "bg-[var(--color-panel)] text-[var(--color-ink-dim)]"
                  }`}
                >
                  <Icon size={18} />
                </span>
                <span className="flex-1 font-display text-xl font-medium text-[var(--color-ink)] sm:text-2xl">
                  {c.title}
                </span>
                <motion.span
                  animate={{ rotate: isOpen ? 45 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="shrink-0 text-[var(--color-ink-dim)]"
                >
                  <Plus size={20} />
                </motion.span>
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="max-w-2xl pb-6 pl-16 text-[var(--color-ink-dim)]">
                      {c.desc}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </div>
  );
}
