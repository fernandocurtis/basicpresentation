import { useEffect, useState } from "react";
import { motion, useScroll } from "framer-motion";

const navItems = [
  { id: "hero", label: "Intro" },
  { id: "glossary", label: "01 · Glossary" },
  { id: "diagnosing", label: "02 · Diagnosing" },
  { id: "dev-language", label: "03 · Dev Language" },
  { id: "ownership", label: "04 · Ownership" },
  { id: "closing", label: "Wrap Up" },
];

export default function ProgressRail() {
  const { scrollYProgress } = useScroll();
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const sections = navItems
      .map((n) => document.getElementById(n.id))
      .filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <motion.div
        className="fixed left-0 top-0 z-[60] h-[2px] w-full origin-left bg-[var(--color-lime)]"
        style={{ scaleX: scrollYProgress }}
      />
      <nav className="fixed right-6 top-1/2 z-50 hidden -translate-y-1/2 flex-col items-end gap-4 lg:flex">
        {navItems.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            data-cursor-hover
            className="group flex items-center gap-3"
          >
            <span
              className={`font-mono text-xs uppercase tracking-widest transition-all duration-300 ${
                active === item.id
                  ? "translate-x-0 text-[var(--color-lime)] opacity-100"
                  : "translate-x-2 text-[var(--color-ink-dim)] opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
              }`}
            >
              {item.label}
            </span>
            <span
              className={`h-[6px] w-[6px] rounded-full transition-all duration-300 ${
                active === item.id
                  ? "scale-150 bg-[var(--color-lime)]"
                  : "bg-[var(--color-line)] group-hover:bg-[var(--color-ink-dim)]"
              }`}
            />
          </a>
        ))}
      </nav>
    </>
  );
}
