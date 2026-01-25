import Image from 'next/image'

const Education = () => {
  return (
    <section id="education" className="py-24 px-10 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-normal text-[#1d1d1f] mb-12 tracking-tight">
          Education
        </h2>
        <div className="bg-[#f5f5f7] p-8 rounded-xl border border-[#d2d2d7] flex flex-col md:flex-row gap-6 items-start">
          <img
            src="https://brand.utah.edu/_images/opengraph/default_og.jpg"
            alt="University of Utah"
            className="w-24 h-24 rounded-lg object-cover"
          />
          <div className="flex-1">
            <h3 className="text-xl font-normal text-[#1d1d1f] mb-2 tracking-tight">
              Bachelor of Science in Computer Science
            </h3>
            <p className="text-base text-[#6e6e73] mb-2">University of Utah</p>
            <p className="text-sm text-[#6e6e73] mb-3">Expected Graduation: December 2026</p>
            <p className="text-sm text-[#1d1d1f] mb-2">
              Minor in Management • Dean's List (Fall 2025)
            </p>
            <p className="text-sm text-[#6e6e73]">
              Focus: Machine Learning, Artificial Intelligence, Algorithms, Web Development
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education
