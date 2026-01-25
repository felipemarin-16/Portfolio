const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-10 py-10 bg-white">
      <div className="text-center max-w-3xl">
        <h1 className="text-5xl md:text-6xl font-normal text-[#1d1d1f] mb-5 tracking-tight">
          wilson.marin
        </h1>
        <p className="text-lg md:text-xl font-light text-[#6e6e73] mb-16 tracking-wide">
          Computer Science Student & ML/AI Developer
        </p>
        <div className="flex gap-10 md:gap-12 justify-center flex-wrap">
          <a
            href="#about"
            className="text-sm font-normal text-[#0071e3] no-underline px-6 py-3 border border-[#d2d2d7] rounded-lg transition-all duration-300 hover:bg-[#0071e3] hover:text-white hover:border-[#0071e3] hover:-translate-y-0.5"
          >
            About
          </a>
          <a
            href="#projects"
            className="text-sm font-normal text-[#0071e3] no-underline px-6 py-3 border border-[#d2d2d7] rounded-lg transition-all duration-300 hover:bg-[#0071e3] hover:text-white hover:border-[#0071e3] hover:-translate-y-0.5"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="text-sm font-normal text-[#0071e3] no-underline px-6 py-3 border border-[#d2d2d7] rounded-lg transition-all duration-300 hover:bg-[#0071e3] hover:text-white hover:border-[#0071e3] hover:-translate-y-0.5"
          >
            Contact
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
