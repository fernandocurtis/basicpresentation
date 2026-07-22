import { useState } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { getIcon } from "../components/icons";
import { firstResponse } from "../data/content";
import Reveal from "../components/Reveal";
import Kicker from "../components/Kicker";

export default function FirstResponse() {
  const [done, setDone] = useState<boolean[]>(firstResponse.map(() => false));
  const completed = done.filter(Boolean).length;

  const toggle = (i: number) =>
    setDone((d) => d.map((v, idx) => (idx === i ? !v : v)));

  return (
    <div className="border-t border-[var(--color-line)] px-6 py-28 sm:px-10">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div>
          <Reveal>
            <Kicker>First response</Kicker>
          </Reveal>
          <Reveal delay={0.05}>
            <h3 className="mt-4 max-w-xl text-balance font-display text-3xl font-medium sm:text-4xl">
              Site's down. What do you check first?
            </h3>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-3 max-w-md text-balance text-[var(--color-ink-dim)]">
              A five-minute triage before you escalate. Check off each step
              as you go.
            </p>
          </Reveal>
        </div>
        <p className="font-mono text-sm text-[var(--color-ink-dim)]">
          <span className="text-[var(--color-lime)]">{completed}</span>
          {" / "}
          {firstResponse.length} checked
        </p>
      </div>

      <div className="relative mt-14 ml-3 border-l border-[var(--color-line)] sm:ml-5">
        <motion.div
          className="absolute -left-px top-0 w-px origin-top bg-[var(--color-lime)]"
          style={{ height: "100%" }}
          initial={{ scaleY: 0 }}
          animate={{ scaleY: completed / firstResponse.length }}
          transition={{ duration: 0.4 }}
        />
        {firstResponse.map((step, i) => {
          const Icon = getIcon(step.icon);
          const checked = done[i];
          return (
            <motion.button
              type="button"
              data-cursor-hover
              key={step.title}
              onClick={() => toggle(i)}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="group relative flex w-full gap-5 py-6 pl-8 text-left sm:pl-10"
            >
              <span
                className={`absolute -left-[13px] top-6 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 transition-colors sm:-left-[21px] ${
                  checked
                    ? "border-[var(--color-lime)] bg-[var(--color-lime)] text-[var(--color-void)]"
                    : "border-[var(--color-line)] bg-[var(--color-void)] text-transparent group-hover:border-[var(--color-ink-dim)]"
                }`}
              >
                <Check size={14} strokeWidth={3} />
              </span>
              <Icon
                size={20}
                className={`mt-0.5 shrink-0 ${checked ? "text-[var(--color-lime)]" : "text-[var(--color-ink-dim)]"}`}
              />
              <div>
                <p
                  className={`font-display text-lg font-medium transition-colors ${
                    checked ? "text-[var(--color-ink-dim)] line-through decoration-[var(--color-lime)]/60" : "text-[var(--color-ink)]"
                  }`}
                >
                  {step.title}
                </p>
                <p className="mt-1 text-sm text-[var(--color-ink-dim)]">{step.desc}</p>
              </div>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}
