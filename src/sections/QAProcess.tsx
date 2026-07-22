import { motion } from "framer-motion";
import { getIcon } from "../components/icons";
import { qaProcess } from "../data/content";
import Reveal from "../components/Reveal";
import Kicker from "../components/Kicker";

export default function QAProcess() {
  return (
    <div className="border-t border-[var(--color-line)] px-6 py-28 sm:px-10">
      <Reveal>
        <Kicker>Launch readiness</Kicker>
      </Reveal>
      <Reveal delay={0.05}>
        <h3 className="mt-4 max-w-2xl text-balance font-display text-3xl font-medium sm:text-4xl">
          The QA process before “ready”
        </h3>
      </Reveal>
      <Reveal delay={0.1}>
        <p className="mt-3 max-w-xl text-balance text-[var(--color-ink-dim)]">
          Every site moves through the same four gates before it's marked
          ready to launch.
        </p>
      </Reveal>

      <div className="relative mt-16">
        <div className="absolute left-0 right-0 top-7 hidden h-px bg-[var(--color-line)] lg:block" />
        <motion.div
          className="absolute left-0 top-7 hidden h-px origin-left bg-[var(--color-lime)] lg:block"
          style={{ right: 0 }}
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        />
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4 lg:gap-6">
          {qaProcess.map((step, i) => {
            const Icon = getIcon(step.icon);
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="relative"
              >
                <span className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full border border-[var(--color-lime)] bg-[var(--color-void)] font-mono text-lg text-[var(--color-lime)]">
                  {i + 1}
                </span>
                <div className="mt-5">
                  <Icon size={18} className="text-[var(--color-lime)]" />
                  <p className="mt-3 font-display text-xl font-medium">{step.title}</p>
                  <p className="mt-2 text-sm text-[var(--color-ink-dim)]">{step.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
