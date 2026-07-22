import { motion } from "framer-motion";
import { getIcon } from "../components/icons";
import { bestPractices } from "../data/content";
import Reveal from "../components/Reveal";
import Kicker from "../components/Kicker";

export default function BestPractices() {
  return (
    <div className="border-t border-[var(--color-line)] px-6 py-28 sm:px-10">
      <Reveal>
        <Kicker>For everyone on the team</Kicker>
      </Reveal>
      <Reveal delay={0.05}>
        <h3 className="mt-4 max-w-2xl text-balance font-display text-3xl font-medium sm:text-4xl">
          Website best practices worth knowing
        </h3>
      </Reveal>
      <Reveal delay={0.1}>
        <p className="mt-3 max-w-xl text-balance text-[var(--color-ink-dim)]">
          Not just for developers — these help every conversation with a
          client go smoother.
        </p>
      </Reveal>

      <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {bestPractices.map((b, i) => {
          const Icon = getIcon(b.icon);
          return (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: (i % 2) * 0.1 }}
              className="flex gap-5 rounded-2xl border border-[var(--color-line)] p-6"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[var(--color-lime)]/10 text-[var(--color-lime)]">
                <Icon size={22} strokeWidth={1.5} />
              </span>
              <div>
                <p className="font-display text-lg font-medium">{b.title}</p>
                <p className="mt-2 text-sm text-[var(--color-ink-dim)]">{b.desc}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
