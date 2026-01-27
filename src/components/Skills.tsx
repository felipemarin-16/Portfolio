const skills = {
  'Languages': ['Python', 'C#', 'Java', 'C++', 'SQL'],
  'Data / ML': ['NumPy', 'Pandas', 'PyTorch', 'scikit-learn', 'Jupyter'],
  'Web Dev': ['HTML', 'CSS', 'JavaScript', 'Django', 'ASP.NET']
}

const Skills = () => {
  const categoryColors = {
    'Languages': 'from-cyan-500 to-blue-500',
    'Data / ML': 'from-emerald-500 to-teal-500',
    'Web Dev': 'from-blue-500 to-violet-500'
  }

  return (
    <section id="skills" className="py-24 px-10 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-400/10 rounded-full blur-3xl"></div>
      <div className="max-w-5xl mx-auto relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-12 tracking-tight">
          Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="group bg-white p-6 rounded-2xl border-2 border-slate-200 hover:border-emerald-400 transition-all duration-500 hover:shadow-2xl hover:shadow-emerald-200/50 hover:-translate-y-2">
              <h3 className={`text-lg font-bold bg-gradient-to-r ${categoryColors[category as keyof typeof categoryColors]} bg-clip-text text-transparent mb-4 tracking-tight`}>
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {items.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-2 bg-gradient-to-r from-slate-50 to-slate-100 text-slate-700 text-sm font-medium rounded-lg hover:scale-110 hover:shadow-md transition-all duration-200 cursor-default border border-slate-200"
                  >
                    {skill}
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

export default Skills
