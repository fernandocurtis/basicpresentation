import { motion } from "framer-motion";
import { getIcon } from "./icons";

export default function SectionDivider({
  id,
  number,
  title,
  subtitle,
  icon,
}: {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  icon: string;
}) {
  const Icon = getIcon(icon);

  return (
    <section
      id={id}
      className="relative flex min-h-[70vh] items-center justify-center overflow-hidden border-y border-[var(--color-line)] bg-[var(--color-panel)] px-6 py-32"
    >
      <motion.span
        aria-hidden
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="pointer-events-none absolute -left-4 top-1/2 -translate-y-1/2 select-none font-display text-[38vw] font-bold leading-none text-white/[0.03] sm:text-[28vw]"
      >
        {number}
      </motion.span>

      <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center gap-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.6, rotate: -8 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex h-16 w-16 items-center justify-center rounded-2xl border border-[var(--color-line)] bg-[var(--color-void)] text-[var(--color-lime)]"
        >
          <Icon size={28} strokeWidth={1.5} />
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-mono text-base uppercase tracking-[0.3em] text-[var(--color-lime)]"
        >
          Section {number}
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="text-balance font-display text-5xl font-medium text-[var(--color-ink)] sm:text-7xl"
        >
          {title}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="max-w-xl text-balance text-xl text-[var(--color-ink-dim)]"
        >
          {subtitle}
        </motion.p>
      </div>
    </section>
  );
}
