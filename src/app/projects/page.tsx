import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  return <section className="wrap page-section"><p className="eyebrow">SELECTED WORK</p><h1 className="page-title">Projects that ask better questions of data.</h1><p className="page-description">Each project is a compact story: the problem, the system, and my role in making it meaningful.</p><div className="project-grid project-grid-full">{projects.map((project, index) => <ProjectCard key={project.slug} project={project} index={index} />)}</div></section>;
}
