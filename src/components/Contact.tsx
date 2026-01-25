const Contact = () => {
  return (
    <section id="contact" className="py-24 px-10 bg-[#f5f5f7]">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-normal text-[#1d1d1f] mb-12 tracking-tight text-center">
          Get In Touch
        </h2>
        <div className="text-center">
          <p className="text-base md:text-lg text-[#6e6e73] mb-10">
            Open to new opportunities and collaborations. Feel free to reach out.
          </p>
          <div className="flex gap-6 justify-center flex-wrap">
            <a
              href="mailto:felipe.marin.1697@gmail.com"
              className="px-8 py-3 bg-[#0071e3] text-white text-sm rounded-lg transition-all duration-300 hover:bg-[#0077ed] hover:shadow-lg hover:-translate-y-0.5"
            >
              Email
            </a>
            <a
              href="https://www.linkedin.com/in/wilson-marin-107a9017b"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-white text-[#0071e3] text-sm rounded-lg border border-[#d2d2d7] transition-all duration-300 hover:bg-[#f5f5f7] hover:shadow-lg hover:-translate-y-0.5"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
      <footer className="mt-20 text-center">
        <p className="text-sm text-[#6e6e73]">© 2026 Built with Next.js & Tailwind CSS</p>
      </footer>
    </section>
  )
}

export default Contact
