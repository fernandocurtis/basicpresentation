import { glossaryTerms } from "../data/content";
import Reveal from "../components/Reveal";
import Kicker from "../components/Kicker";
import FlipCard from "../components/FlipCard";
import HostingVsDomain from "./HostingVsDomain";
import Propagation from "./Propagation";
import SectionDivider from "../components/SectionDivider";

export default function Glossary() {
  return (
    <section id="glossary">
      <SectionDivider
        id="glossary-intro"
        number="01"
        title="A Quick Glossary"
        subtitle="The terms that come up in almost every website conversation — defined in plain language."
        icon="BookOpen"
      />
      <div className="px-6 py-28 sm:px-10">
        <Reveal>
          <Kicker>Terms worth knowing</Kicker>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-4 max-w-2xl text-balance font-display text-4xl font-medium sm:text-5xl">
            A quick glossary
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-4 max-w-xl text-balance text-[var(--color-ink-dim)]">
            The terms that come up in almost every website conversation —
            defined in plain language. Tap a card to flip it.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {glossaryTerms.map((t, i) => (
            <FlipCard
              key={t.term}
              term={t.term}
              def={t.def}
              icon={t.icon}
              index={i}
            />
          ))}
        </div>
      </div>

      <HostingVsDomain />
      <Propagation />
    </section>
  );
}
