import { technologyGroups } from "../data/portfolio";
import Reveal from "./Reveal";
export default function TechStack() {
  return (
    <Reveal>
      <section className="section container tools-section">
        <div className="tools-intro">
          <p className="eyebrow">Toolkit / Current</p>
          <h2>Tools I work with</h2>
          <p>
            A practical stack chosen around the product, the team, and the
            problem—not novelty.
          </p>
        </div>
        <div className="tool-groups">
          {technologyGroups.map((group) => (
            <div
              className={
                group.primary ? "tool-group primary-tools" : "tool-group"
              }
              key={group.label}
            >
              <h3>{group.label}</h3>
              <div>
                {group.items.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </Reveal>
  );
}
