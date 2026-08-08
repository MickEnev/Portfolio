import { projects } from "../data/portfolio";
import FeaturedProject from "./FeaturedProject";
import ProjectArchive from "./ProjectArchive";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
export default function Projects() {
  const featured = projects.filter((p) => p.featured);
  const archive = projects.filter((p) => !p.featured);
  return (
    <Reveal>
      <section id="projects" className="section container">
        <SectionHeading
          index="03"
          eyebrow="Selected work"
          title="Built for use, not just display"
          intro="A selection of product, data, and systems work with a clear problem at the center."
        />
        <div className="featured-list">
          {featured.map((project, index) => (
            <FeaturedProject
              key={project.slug}
              project={project}
              index={index}
            />
          ))}
        </div>
        <ProjectArchive projects={archive} />
      </section>
    </Reveal>
  );
}
