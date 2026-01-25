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
    <section id="projects" className="py-24 px-10 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-normal text-[#1d1d1f] mb-12 tracking-tight">
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="p-6 bg-[#f5f5f7] rounded-xl border border-[#d2d2d7] transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <h3 className="text-xl font-normal text-[#1d1d1f] mb-3 tracking-tight">
                {project.title}
              </h3>
              <p className="text-sm text-[#6e6e73] mb-4 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-white text-[#0071e3] text-xs rounded-full border border-[#d2d2d7]"
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
