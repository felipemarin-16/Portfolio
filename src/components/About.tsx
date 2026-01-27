const About = () => {
  return (
    <section id="about" className="py-24 px-10 bg-gradient-to-b from-slate-50 to-white relative">
      <div className="absolute top-10 left-20 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl"></div>
      <div className="max-w-4xl mx-auto relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-12 tracking-tight">
          About
        </h2>
        <div className="space-y-6 p-8 bg-white/80 backdrop-blur-sm rounded-2xl border-2 border-slate-200 shadow-xl hover:shadow-2xl transition-shadow duration-500">
          <p className="text-base md:text-lg text-slate-700 leading-relaxed">
            Computer Science senior at the University of Utah with a Management minor, expected to graduate
            December 2026. Specialized in <span className="font-semibold text-cyan-600">machine learning and artificial intelligence</span> with hands-on experience
            in deep learning, computer vision, and natural language processing.
          </p>
          <p className="text-base md:text-lg text-slate-700 leading-relaxed">
            Passionate about building practical ML solutions using <span className="font-semibold text-blue-600">PyTorch and scikit-learn</span>. Strong foundation
            in algorithms, software development, and web technologies. Bilingual in English and Spanish.
            <span className="inline-block ml-2 px-3 py-1 bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-sm font-semibold rounded-full">Dean's List Fall 2025</span>
          </p>
        </div>
      </div>
    </section>
  )
}

export default About
