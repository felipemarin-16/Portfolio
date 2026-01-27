const Contact = () => {
  return (
    <section id="contact" className="py-24 px-10 bg-gradient-to-b from-white to-cyan-50 relative overflow-hidden">
      <div className="absolute top-20 right-20 w-96 h-96 bg-cyan-400/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl animate-float-delayed"></div>
      <div className="max-w-3xl mx-auto relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent mb-12 tracking-tight text-center">
          Get In Touch
        </h2>
        <div className="text-center">
          <p className="text-base md:text-lg text-slate-700 mb-10 font-medium">
            Open to new opportunities and collaborations. Feel free to reach out.
          </p>
          <div className="flex gap-6 justify-center flex-wrap">
            <a
              href="mailto:felipe.marin.1697@gmail.com"
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-sm font-semibold rounded-xl transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/50 hover:-translate-y-1 hover:scale-105"
            >
              Email
            </a>
            <a
              href="https://www.linkedin.com/in/wilson-marin-107a9017b"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-white text-cyan-600 text-sm font-semibold rounded-xl border-2 border-cyan-500 transition-all duration-300 hover:bg-cyan-50 hover:shadow-2xl hover:shadow-blue-500/50 hover:-translate-y-1 hover:scale-105"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
      <footer className="mt-20 text-center relative z-10">
        <p className="text-sm text-slate-600 font-medium">© 2026 Built with Next.js & Tailwind CSS</p>
      </footer>
    </section>
  )
}

export default Contact
