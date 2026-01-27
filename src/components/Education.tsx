import Image from 'next/image'

const Education = () => {
  return (
    <section id="education" className="py-32 px-10 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-light text-slate-900 mb-16 tracking-tight">
          Education
        </h2>
        <div className="border border-slate-200 p-10 hover:border-slate-900 transition-all duration-300">
          <div className="flex flex-col gap-8">
            <div>
              <h3 className="text-2xl font-light text-slate-900 mb-2 tracking-tight">
                Bachelor of Science in Computer Science
              </h3>
              <p className="text-base text-slate-600 font-light">University of Utah</p>
            </div>
            <div className="space-y-3">
              <p className="text-sm text-slate-600 font-light">Expected Graduation: December 2026</p>
              <p className="text-sm text-slate-600 font-light">Minor in Management</p>
              <p className="text-sm text-slate-900 font-normal tracking-wide">DEAN'S LIST FALL 2025</p>
            </div>
            <p className="text-sm text-slate-600 font-light leading-relaxed">
              Focus: Machine Learning, Artificial Intelligence, Algorithms, Web Development
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education
