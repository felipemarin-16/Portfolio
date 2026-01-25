import './Skills.css'

const skills = {
  'Languages': ['Python', 'Rust', 'Go', 'TypeScript', 'SQL'],
  'ML/AI': ['TensorFlow', 'PyTorch', 'scikit-learn', 'Hugging Face'],
  'Backend': ['FastAPI', 'Django', 'PostgreSQL', 'Redis', 'Docker'],
  'Tools': ['Git', 'Linux', 'AWS', 'Kubernetes', 'CI/CD']
}

const Skills = () => {
  return (
    <section id="skills" className="section skills">
      <h2 className="section-title">Skills</h2>
      <div className="skills-grid">
        {Object.entries(skills).map(([category, items]) => (
          <div key={category} className="skill-category">
            <h3 className="skill-category-title">{category}</h3>
            <div className="skill-items">
              {items.map((skill, index) => (
                <span key={index} className="skill-item">{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
