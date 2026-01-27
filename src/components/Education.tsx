import Image from 'next/image'

const Education = () => {
  return (
    <section id="education" className="py-24 px-10 bg-gradient-to-b from-slate-50 to-white relative">
      <div className="absolute bottom-0 right-20 w-72 h-72 bg-emerald-400/10 rounded-full blur-3xl"></div>
      <div className="max-w-4xl mx-auto relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent mb-12 tracking-tight">
          Education
        </h2>
        <div className="group bg-white p-8 rounded-2xl border-2 border-slate-200 hover:border-blue-400 flex flex-col md:flex-row gap-6 items-start transition-all duration-500 hover:shadow-2xl hover:shadow-blue-200/50 hover:-translate-y-2">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/3/30/University_of_Utah_horizontal_logo.svg"
            alt="University of Utah"
            className="w-32 h-24 rounded-lg object-contain transition-transform duration-500 group-hover:scale-110"
          />
          <div className="flex-1">
            <h3 className="text-xl font-bold text-slate-800 mb-2 tracking-tight group-hover:text-blue-600 transition-colors duration-300">
              Bachelor of Science in Computer Science
            </h3>
            <p className="text-base text-slate-600 mb-2 font-medium">University of Utah</p>
            <p className="text-sm text-slate-500 mb-3 font-medium">Expected Graduation: December 2026</p>
            <div className="flex flex-wrap gap-2 mb-3">
              <span className="px-3 py-1 bg-gradient-to-r from-blue-500 to-violet-500 text-white text-xs font-semibold rounded-full">
                Minor in Management
              </span>
              <span className="px-3 py-1 bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-xs font-semibold rounded-full">
                Dean's List Fall 2025
              </span>
            </div>
            <p className="text-sm text-slate-700 font-medium">
              Focus: <span className="text-blue-600">Machine Learning</span>, <span className="text-violet-600">Artificial Intelligence</span>, <span className="text-cyan-600">Algorithms</span>, <span className="text-emerald-600">Web Development</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education
