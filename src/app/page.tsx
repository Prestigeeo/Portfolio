import Link from "next/link";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export default function Home() {
  return (
    <>
      <section className="hero wrap">
        <div className="hero-copy">
          <p className="eyebrow">AI ENGINEERING · DATA SCIENCE</p>
          
          <h1>I build systems where data, curiosity, and impact meet.</h1>
          <p className="hero-description">I’m Prestige—an emerging AI engineer and data professional exploring practical machine learning, research tools, and responsible intelligent systems.</p>
          <div className="hero-actions"><Link className="button" href="/projects">See selected work</Link><a className="arrow-link" href="/assets/Owoeye%20Olajumoke%E2%80%99s%20CV.docx" target="_blank">View CV <span>↗</span></a></div>
        </div>
        <div className="hero-statement" aria-label="Data with purpose"><span className="star">✦</span><p>data<br /><i>with</i><br />purpose</p><span className="orbit orbit-one" /><span className="orbit orbit-two" /></div>
      </section>

      <section className="wrap intro-band"><p className="eyebrow">THE PRACTICE</p><p>I enjoy the space between <em>research and real use</em>: creating work that is technically grounded, clearly communicated, and designed around people.</p></section>

      <section className="wrap work-section">
        <div className="section-heading"><div><p className="eyebrow">SELECTED WORK</p><h2>Three ways I have explored applied AI.</h2></div><Link className="arrow-link" href="/projects">All projects <span>→</span></Link></div>
        <div className="project-grid">{projects.map((project, index) => <ProjectCard key={project.slug} project={project} index={index} />)}</div>
      </section>

      <section className="wrap future-note"><div><p className="eyebrow">ON THE HORIZON</p><h2>There is always another question worth building for.</h2></div><p>This space is intentionally reserved for my next substantial project—coming soon.</p></section>
    </>
  );
}
