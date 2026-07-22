import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { agenda } from "../data/content";
import Reveal from "../components/Reveal";
import Kicker from "../components/Kicker";

export default function Agenda() {
  return (
    <section className="relative px-6 py-28 sm:px-10">
      <Reveal>
        <Kicker>What we'll cover</Kicker>
      </Reveal>
      <Reveal delay={0.05}>
        <h2 className="mt-4 max-w-2xl text-balance font-display text-4xl font-medium sm:text-5xl">
          Four stops, one reference guide.
        </h2>
      </Reveal>

      <div className="mt-14 flex flex-col divide-y divide-[var(--color-line)] border-y border-[var(--color-line)]">
        {agenda.map((item, i) => (
          <motion.a
            key={item.id}
            href={`#${item.id}`}
            data-cursor-hover
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, delay: i * 0.08 }}
            className="group relative flex flex-col gap-3 overflow-hidden py-8 sm:flex-row sm:items-center sm:gap-8 sm:py-10"
          >
            <div className="absolute inset-0 -z-10 origin-left scale-x-0 bg-[var(--color-panel)] transition-transform duration-500 ease-out group-hover:scale-x-100" />
            <span className="font-mono text-sm text-[var(--color-lime)] sm:w-14">
              {item.number}
            </span>
            <h3 className="font-display text-2xl font-medium text-[var(--color-ink)] transition-colors sm:w-96 sm:text-3xl">
              {item.title}
            </h3>
            <p className="max-w-lg text-balance text-[var(--color-ink-dim)] sm:flex-1">
              {item.dek}
            </p>
            <ArrowUpRight
              size={22}
              className="ml-auto shrink-0 text-[var(--color-ink-dim)] transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-[var(--color-lime)]"
            />
          </motion.a>
        ))}
      </div>
    </section>
  );
}
