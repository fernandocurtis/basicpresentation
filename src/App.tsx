import Cursor from "./components/Cursor";
import ProgressRail from "./components/ProgressRail";
import Hero from "./sections/Hero";
import Agenda from "./sections/Agenda";
import Glossary from "./sections/Glossary";
import Diagnosing from "./sections/Diagnosing";
import DevLanguage from "./sections/DevLanguage";
import Ownership from "./sections/Ownership";
import Closing from "./sections/Closing";

export default function App() {
  return (
    <div className="relative">
      <div className="grain" />
      <Cursor />
      <ProgressRail />
      <main className="lg:pr-36 xl:pr-44">
        <Hero />
        <Agenda />
        <Glossary />
        <Diagnosing />
        <DevLanguage />
        <Ownership />
        <Closing />
      </main>
    </div>
  );
}
