import type { Project } from '../data/profile'

type ProjectsProps = {
  projects: Project[]
}

function Projects({ projects }: ProjectsProps) {
  return (
    <section className="projects">
      <h2>Projects</h2>
      {projects.map((project) => (
        <article key={project.title} className="card">
          <div className="card-heading">
            <h3>{project.title}</h3>
            <span className="period">{project.period}</span>
          </div>
          <p>{project.summary}</p>
          <ul className="tags">
            {project.tech.map((tech) => (
              <li key={tech}>{tech}</li>
            ))}
          </ul>
        </article>
      ))}
    </section>
  )
}

export default Projects
