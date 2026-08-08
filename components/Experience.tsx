import { experience } from "../data/portfolio";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
export default function Experience() {
  return (
    <Reveal>
      <section id="experience" className="section container">
        <SectionHeading
          index="02"
          eyebrow="Experience"
          title="Where I’ve worked"
          intro="Production engineering, applied AI, and technical mentorship."
        />
        <div className="experience-list">
          {experience.map((item, index) => (
            <article
              className="experience-row"
              key={`${item.company}-${item.role}`}
            >
              <div className="experience-meta">
                <span>0{index + 1}</span>
                <time>{item.dates}</time>
              </div>
              <div className="experience-role">
                <h3>{item.role}</h3>
                <p>
                  {item.company}
                  {item.location && <> · {item.location}</>}
                </p>
              </div>
              <div className="experience-detail">
                <ul>
                  {item.summary.map((line) => (
                    <li key={line}>{line}</li>
                  ))}
                </ul>
                <div className="tags">
                  {item.technologies.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </Reveal>
  );
}
