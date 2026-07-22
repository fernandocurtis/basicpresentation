import { motion } from "framer-motion";
import { getIcon } from "../components/icons";
import { commonCauses } from "../data/content";
import Reveal from "../components/Reveal";
import Kicker from "../components/Kicker";

export default function CommonCauses() {
  return (
    <div className="border-t border-[var(--color-line)] px-6 py-28 sm:px-10">
      <Reveal>
        <Kicker>Common causes</Kicker>
      </Reveal>
      <Reveal delay={0.05}>
        <h3 className="mt-4 max-w-2xl text-balance font-display text-3xl font-medium sm:text-4xl">
          Why websites go down
        </h3>
      </Reveal>

      <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {commonCauses.map((c, i) => {
          const Icon = getIcon(c.icon);
          return (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              whileHover={{ y: -4 }}
              className="group rounded-2xl border border-[var(--color-line)] p-6 transition-colors hover:border-[var(--color-coral)]/50"
            >
              <Icon size={22} className="text-[var(--color-coral)]" strokeWidth={1.5} />
              <p className="mt-4 font-display text-lg font-medium">{c.title}</p>
              <p className="mt-2 text-sm text-[var(--color-ink-dim)]">{c.desc}</p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
