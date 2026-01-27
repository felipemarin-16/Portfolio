const About = () => {
  return (
    <section id="about" className="py-32 px-10 bg-slate-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-light text-slate-900 mb-16 tracking-tight">
          About
        </h2>
        <div className="space-y-8">
          <p className="text-lg md:text-xl text-slate-700 leading-relaxed font-light">
            Computer Science senior at the University of Utah with a Management minor, expected to graduate
            December 2026. Specialized in <span className="font-normal text-slate-900">machine learning and artificial intelligence</span> with hands-on experience
            in deep learning, computer vision, and natural language processing.
          </p>
          <p className="text-lg md:text-xl text-slate-700 leading-relaxed font-light">
            Passionate about building practical ML solutions using <span className="font-normal text-slate-900">PyTorch and scikit-learn</span>. Strong foundation
            in algorithms, software development, and web technologies. Bilingual in English and Spanish.
            <span className="inline-block ml-3 px-4 py-1.5 bg-slate-900 text-white text-sm font-normal tracking-wide">DEAN'S LIST FALL 2025</span>
          </p>
        </div>
      </div>
    </section>
  )
}

export default About
