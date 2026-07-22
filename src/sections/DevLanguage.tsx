import SectionDivider from "../components/SectionDivider";
import DevConcepts from "./DevConcepts";
import BestPractices from "./BestPractices";

export default function DevLanguage() {
  return (
    <section id="dev-language">
      <SectionDivider
        id="dev-language-intro"
        number="03"
        title="Speaking Dev's Language"
        subtitle="Core WordPress and web concepts that make you more effective with the development team."
        icon="Code2"
      />
      <DevConcepts />
      <BestPractices />
    </section>
  );
}
