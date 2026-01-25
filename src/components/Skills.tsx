import './Skills.css'

const skills = {
  'Languages': ['Python', 'C#', 'Java', 'C++', 'SQL'],
  'Data / ML': ['NumPy', 'Pandas', 'PyTorch', 'scikit-learn', 'Jupyter'],
  'Web Dev': ['HTML', 'CSS', 'JavaScript', 'Django', 'ASP.NET']
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
