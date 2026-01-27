const skills = {
  'Languages': ['Python', 'C#', 'Java', 'C++', 'SQL'],
  'Data / ML': ['NumPy', 'Pandas', 'PyTorch', 'scikit-learn', 'Jupyter'],
  'Web Dev': ['HTML', 'CSS', 'JavaScript', 'Django', 'ASP.NET']
}

const Skills = () => {
  return (
    <section id="skills" className="py-32 px-10 bg-slate-50">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-light text-slate-900 mb-16 tracking-tight">
          Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category}>
              <h3 className="text-sm font-normal text-slate-900 mb-6 tracking-widest uppercase">
                {category}
              </h3>
              <div className="space-y-3">
                {items.map((skill, index) => (
                  <div
                    key={index}
                    className="text-base text-slate-600 font-light py-1 hover:text-slate-900 transition-colors duration-200"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
