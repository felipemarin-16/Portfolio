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
  const gradients = [
    'from-cyan-500 to-blue-500',
    'from-emerald-500 to-teal-500',
    'from-blue-500 to-violet-500',
  ]

  return (
    <section id="projects" className="py-24 px-10 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent mb-12 tracking-tight">
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group p-6 bg-white rounded-2xl border-2 border-slate-200 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-200/50 hover:-translate-y-2 hover:border-cyan-400 relative overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${gradients[index % gradients.length]} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
              <div className="relative z-10">
                <h3 className="text-xl font-semibold text-slate-800 mb-3 tracking-tight group-hover:text-cyan-600 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-sm text-slate-600 mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 bg-gradient-to-r from-cyan-50 to-blue-50 text-cyan-700 text-xs font-medium rounded-full border border-cyan-200 hover:scale-110 transition-transform duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
