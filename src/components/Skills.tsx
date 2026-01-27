const skills = {
  'Languages': ['Python', 'C#', 'Java', 'C++', 'SQL'],
  'Data / ML': ['NumPy', 'Pandas', 'PyTorch', 'scikit-learn', 'Jupyter'],
  'Web Dev': ['HTML', 'CSS', 'JavaScript', 'Django', 'ASP.NET']
}

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-10 bg-[#f5f5f7]">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-normal text-[#1d1d1f] mb-12 tracking-tight">
          Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="bg-white p-6 rounded-xl border border-[#d2d2d7]">
              <h3 className="text-lg font-normal text-[#1d1d1f] mb-4 tracking-tight">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {items.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1.5 bg-[#f5f5f7] text-[#1d1d1f] text-sm rounded-lg"
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
