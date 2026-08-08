import Image from "next/image";
import { ArrowUpRight, Code2 } from "lucide-react";
import type { Project } from "../types/portfolio";

export default function FeaturedProject({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const isEmulator = project.slug === "chip-8-emulator";
  return (
    <article className={`featured-project ${index % 2 ? "reverse" : ""}`}>
      <div
        className={`project-visual ${!project.image ? "generated-visual" : ""}`}
      >
        {project.image ? (
          <Image
            src={project.image}
            alt={`Interface preview of ${project.title}`}
            fill
            sizes="(max-width: 900px) 100vw, 55vw"
          />
        ) : isEmulator ? (
          <div
            className="emulator-screen"
            aria-label="Abstract CHIP-8 emulator display"
          >
            <div />
            <span>CHIP—8</span>
            <small>00E0 · 6XNN · DXYN</small>
          </div>
        ) : (
          <div
            className="veriq-project-mark"
            aria-label="Veriq Digital wordmark"
          >
            <span>VERIQ</span>
            <small>DESIGN · SOFTWARE · SYSTEMS</small>
          </div>
        )}
      </div>
      <div className="project-copy">
        <p className="eyebrow">
          0{index + 1} / {project.category}
        </p>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        {project.outcome && (
          <p className="project-outcome">
            <span>Distinguishing point</span>
            {project.outcome}
          </p>
        )}
        <div className="tags">
          {project.technologies.map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>
        <div className="project-links">
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noreferrer">
              View project <ArrowUpRight size={17} />
            </a>
          )}
          {project.githubUrl && (
            <a href={project.githubUrl} target="_blank" rel="noreferrer">
              <Code2 size={17} /> Source
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
