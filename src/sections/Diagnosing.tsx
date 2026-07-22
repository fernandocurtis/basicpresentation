import DiagnosisTriage from "./DiagnosisTriage";
import CommonCauses from "./CommonCauses";
import FirstResponse from "./FirstResponse";
import QAProcess from "./QAProcess";
import QAChecklist from "./QAChecklist";
import ReviewRedFlags from "./ReviewRedFlags";
import SectionDivider from "../components/SectionDivider";

export default function Diagnosing() {
  return (
    <section id="diagnosing">
      <SectionDivider
        id="diagnosing-intro"
        number="02"
        title="Diagnosing Website Issues"
        subtitle="Hosting, DNS, or the website itself? And what to check the moment something breaks."
        icon="Search"
      />
      <DiagnosisTriage />
      <CommonCauses />
      <FirstResponse />
      <QAProcess />
      <QAChecklist />
      <ReviewRedFlags />
    </section>
  );
}
