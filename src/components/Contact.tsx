const Contact = () => {
  return (
    <section id="contact" className="py-32 px-10 bg-slate-50">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-light text-slate-900 mb-16 tracking-tight text-center">
          Get In Touch
        </h2>
        <div className="text-center">
          <p className="text-lg md:text-xl text-slate-600 mb-12 font-light">
            Open to new opportunities and collaborations.
          </p>
          <div className="flex gap-8 justify-center flex-wrap">
            <a
              href="mailto:felipe.marin.1697@gmail.com"
              className="px-10 py-4 bg-slate-900 text-white text-sm font-normal tracking-widest hover:bg-slate-800 transition-all duration-300"
            >
              EMAIL
            </a>
            <a
              href="https://www.linkedin.com/in/wilson-marin-107a9017b"
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-4 bg-white text-slate-900 text-sm font-normal tracking-widest border border-slate-900 hover:bg-slate-900 hover:text-white transition-all duration-300"
            >
              LINKEDIN
            </a>
          </div>
        </div>
      </div>
      <footer className="mt-32 text-center">
        <p className="text-xs text-slate-500 font-light tracking-wide">© 2026 Built with Next.js & Tailwind CSS</p>
      </footer>
    </section>
  )
}

export default Contact
