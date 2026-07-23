import { motion } from "framer-motion";
import { getIcon } from "../components/icons";
import { reviewRedFlags } from "../data/content";
import Reveal from "../components/Reveal";
import Kicker from "../components/Kicker";

export default function ReviewRedFlags() {
  return (
    <div className="border-t border-[var(--color-line)] px-6 py-28 sm:px-10">
      <Reveal>
        <Kicker>Reviewing a site</Kicker>
      </Reveal>
      <Reveal delay={0.05}>
        <h3 className="mt-4 max-w-2xl text-balance font-display text-4xl font-medium sm:text-5xl">
          What to look for when reviewing a site
        </h3>
      </Reveal>
      <Reveal delay={0.1}>
        <p className="mt-3 max-w-xl text-balance text-[var(--color-ink-dim)]">
          You don't need to be a developer to catch these before a client
          does.
        </p>
      </Reveal>

      <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {reviewRedFlags.map((r, i) => {
          const Icon = getIcon(r.icon);
          return (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              whileHover={{ y: -4 }}
              className="rounded-2xl border border-[var(--color-line)] bg-[var(--color-panel)] p-6 transition-colors hover:border-[var(--color-ink-dim)]"
            >
              <Icon size={22} className="text-[var(--color-violet)]" strokeWidth={1.5} />
              <p className="mt-4 font-display text-xl font-medium">{r.title}</p>
              <p className="mt-2 text-base text-[var(--color-ink-dim)]">{r.desc}</p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
