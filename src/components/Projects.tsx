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
    <section id="projects" className="py-32 px-10 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-light text-slate-900 mb-16 tracking-tight">
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group p-8 bg-white border border-slate-200 transition-all duration-500 hover:border-slate-900 hover:shadow-lg"
            >
              <h3 className="text-xl font-normal text-slate-900 mb-4 tracking-tight">
                {project.title}
              </h3>
              <p className="text-sm text-slate-600 mb-6 leading-relaxed font-light">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-slate-100 text-slate-700 text-xs font-normal tracking-wide"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
