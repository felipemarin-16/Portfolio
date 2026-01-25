import './Projects.css'

interface Project {
  title: string
  description: string
  tech: string[]
  link?: string
}

const projects: Project[] = [
  {
    title: 'ML Pipeline Framework',
    description: 'Scalable machine learning pipeline built with Python and Apache Airflow for automated model training and deployment.',
    tech: ['Python', 'TensorFlow', 'Docker'],
    link: '#'
  },
  {
    title: 'Real-time Analytics API',
    description: 'High-performance REST API built with Rust for processing and analyzing streaming data with sub-millisecond latency.',
    tech: ['Rust', 'PostgreSQL', 'Redis'],
    link: '#'
  },
  {
    title: 'Distributed Task Queue',
    description: 'Fault-tolerant distributed task processing system built with Go, handling millions of jobs per day.',
    tech: ['Go', 'RabbitMQ', 'MongoDB'],
    link: '#'
  },
  {
    title: 'NLP Classification Model',
    description: 'Production-ready text classification system using transformer models for automated content categorization.',
    tech: ['Python', 'PyTorch', 'FastAPI'],
    link: '#'
  }
]

const Projects = () => {
  return (
    <section id="projects" className="section projects">
      <h2 className="section-title">Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <div className="project-tech">
              {project.tech.map((tech, i) => (
                <span key={i} className="tech-tag">{tech}</span>
              ))}
            </div>
            {project.link && (
              <a href={project.link} className="project-link">
                View Project →
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects
