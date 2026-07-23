import { useState } from "react";
import { motion } from "framer-motion";
import { getIcon } from "./icons";

export default function FlipCard({
  term,
  def,
  icon,
  index,
}: {
  term: string;
  def: string;
  icon: string;
  index: number;
}) {
  const [flipped, setFlipped] = useState(false);
  const Icon = getIcon(icon);

  return (
    <motion.button
      type="button"
      data-cursor-hover
      onClick={() => setFlipped((f) => !f)}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: (index % 4) * 0.06 }}
      className="group relative h-56 w-full text-left [perspective:1200px]"
    >
      <motion.div
        className="relative h-full w-full [transform-style:preserve-3d]"
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* front */}
        <div
          className="absolute inset-0 flex flex-col justify-between rounded-2xl border border-[var(--color-line)] bg-[var(--color-panel)] p-6 [backface-visibility:hidden] group-hover:border-[var(--color-lime)]/50"
        >
          <Icon size={26} strokeWidth={1.5} className="text-[var(--color-lime)]" />
          <div>
            <p className="font-display text-3xl font-medium">{term}</p>
            <p className="mt-2 font-mono text-xs uppercase tracking-widest text-[var(--color-ink-dim)]">
              Tap to reveal
            </p>
          </div>
        </div>
        {/* back */}
        <div
          className="absolute inset-0 flex flex-col justify-between rounded-2xl border border-[var(--color-lime)]/60 bg-[var(--color-lime)] p-6 text-[var(--color-void)] [backface-visibility:hidden] [transform:rotateY(180deg)]"
        >
          <p className="font-mono text-xs uppercase tracking-widest opacity-70">
            {term}
          </p>
          <p className="text-balance text-lg font-medium leading-snug">{def}</p>
        </div>
      </motion.div>
    </motion.button>
  );
}
