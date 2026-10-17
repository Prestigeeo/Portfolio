import Link from "next/link";
import { Project } from "@/types/project";

export function ProjectCard({ project, index }: { project: Project; index?: number }) {
  return (
    <article className={`project-card ${project.accent}`}>
      <div className="project-card-top">
        <p className="project-kicker">{project.number} / {project.category}</p>
        {index !== undefined && <span className="project-index">0{index + 1}</span>}
      </div>
      <h3>{project.title}</h3>
      <p>{project.shortDescription}</p>
      <div className="tag-list">{project.tools.slice(0, 3).map((tool) => <span key={tool}>{tool}</span>)}</div>
      <Link href={`/projects/${project.slug}`} className="project-link">Explore the project <span>↗</span></Link>
    </article>
  );
}
