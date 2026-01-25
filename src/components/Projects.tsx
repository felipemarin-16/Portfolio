import './Projects.css'

interface Project {
  title: string
  description: string
  tech: string[]
  link?: string
}

const projects: Project[] = [
  {
    title: 'Toxicity Detection Classifier',
    description: 'Built a Transformer-encoder text classifier to detect toxicity in real user-LLM conversations using the ToxicChat dataset (~10,165 prompts). Implemented full training pipeline with tokenization, batching/masking, and improved minority class learning with class weighted cross-entropy.',
    tech: ['PyTorch', 'Python', 'Transformers'],
  },
  {
    title: 'Scalable Malaria Cell Detection',
    description: 'Classified 27,558 microscope images as infected or healthy using ML models (Logistic Regression, SVM, Random Forest) and CNNs. Achieved ~95% accuracy and 0.95 F1-score with CNN, demonstrating deep learning\'s advantage in image feature extraction.',
    tech: ['Python', 'NumPy', 'Pandas', 'CNN'],
  },
  {
    title: 'Assignment Management Website',
    description: 'Developed a web platform for assignment uploads and grading, with student profiles and secure user authentication, ensuring seamless back-end and front-end integration.',
    tech: ['Python', 'Django', 'HTML', 'CSS'],
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
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects
