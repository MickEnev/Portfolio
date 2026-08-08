import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const facts = [
  ["Based in", "Des Moines, Iowa"],
  ["Current focus", "Full-stack applications & custom software"],
  ["Education", "MCS · University of Illinois Urbana-Champaign"],
  ["Foundation", "BA Economics · University of Illinois Urbana-Champaign"],
];

export default function About() {
  return (
    <Reveal>
      <section id="about" className="section container">
        <SectionHeading
          index="01"
          eyebrow="About"
          title="Software should make the work feel simpler."
        />
        <div className="about-layout">
          <p className="about-lead">
            I like to build stuff, solve problems, and help people do things
            they wouldn't be able to do on their own.
          </p>
          <div className="about-support">
            <p>
              My background spans software engineering, economics, research, and
              teaching. It helps me think across the product: from the data
              model and interface to the person trying to get something done.
            </p>
            <p>
              I build production software at QCI and founded Veriq Digital to
              take focused web products and digital systems from idea through
              implementation.
            </p>
            <p>I also workout too much.</p>
          </div>
        </div>
        <dl className="facts-grid">
          {facts.map(([term, value]) => (
            <div key={term}>
              <dt>{term}</dt>
              <dd>{value}</dd>
            </div>
          ))}
        </dl>
      </section>
    </Reveal>
  );
}
