import { ArrowUpRight, Code2 } from "lucide-react";
import type { Project } from "../types/portfolio";
import { socials } from "../data/portfolio";

export default function ProjectArchive({ projects }: { projects: Project[] }) {
  return (
    <div className="archive">
      <div className="archive-heading">
        <div>
          <h3>Project archive</h3>
          <p>Selected independent and academic engineering work.</p>
        </div>
        <a
          className="archive-github"
          href={socials[0].href}
          target="_blank"
          rel="noreferrer"
        >
          View all projects on GitHub <ArrowUpRight size={17} />
        </a>
      </div>
      <div className="archive-table">
        {projects.map((project) => (
          <article key={project.slug} className="archive-row">
            <time>{project.year}</time>
            <div>
              <h4>{project.title}</h4>
              <p>{project.description}</p>
            </div>
            <p className="archive-tech">
              {project.technologies.slice(0, 3).join(" · ")}
            </p>
            <div className="archive-links">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${project.title} source code`}
                >
                  <Code2 size={18} />
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Open ${project.title}`}
                >
                  <ArrowUpRight size={18} />
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
