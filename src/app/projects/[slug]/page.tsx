import Link from "next/link";
import { notFound } from "next/navigation";
import { getProject, projects } from "@/data/projects";

export function generateStaticParams() { return projects.map((project) => ({ slug: project.slug })); }

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();
  return <section className="wrap project-page">
    <Link href="/projects" className="back-link">← All projects</Link>
    <div className={`project-hero ${project.accent}`}><p className="project-kicker">{project.number} / {project.category}</p><h1>{project.title}</h1><p>{project.shortDescription}</p><span className="corner-shape" /></div>
    <div className="project-details">
      <section><p className="eyebrow">OVERVIEW</p><p>{project.overview}</p></section>
      <section><p className="eyebrow">MY CONTRIBUTION</p><p>{project.role}</p></section>
      <section><p className="eyebrow">TOOLS & METHODS</p><div className="tag-list">{project.tools.map((tool) => <span key={tool}>{tool}</span>)}</div></section>
      {project.metrics && <section><p className="eyebrow">EVALUATION</p><div className="metric-row">{project.metrics.map((metric) => <div key={metric.label}><strong>{metric.value}</strong><span>{metric.label}</span></div>)}</div></section>}
    </div>
    <div className="project-actions">
      {project.repositoryUrl && project.repositoryUrl !== "#" ? <a className="button" href={project.repositoryUrl} target="_blank" rel="noreferrer">View repository ↗</a> : <span className="project-link muted-link">Repository link coming soon</span>}
      {project.demoUrl && <a className="arrow-link" href={project.demoUrl} target="_blank" rel="noreferrer">Open live demo ↗</a>}
    </div>
  </section>;
}
