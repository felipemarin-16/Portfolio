'use client'

import { useState, useEffect } from 'react'

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-sm border-b border-slate-200' : 'bg-white'
      }`}
    >
      <div className="max-w-6xl mx-auto px-10">
        <div className="flex items-center justify-center h-20">
          <div className="flex items-center gap-12">
            <a
              href="#about"
              className="text-xs font-normal text-slate-900 no-underline tracking-widest uppercase transition-opacity duration-200 hover:opacity-50"
            >
              About
            </a>
            <a
              href="#projects"
              className="text-xs font-normal text-slate-900 no-underline tracking-widest uppercase transition-opacity duration-200 hover:opacity-50"
            >
              Projects
            </a>
            <a
              href="#skills"
              className="text-xs font-normal text-slate-900 no-underline tracking-widest uppercase transition-opacity duration-200 hover:opacity-50"
            >
              Skills
            </a>
            <a
              href="#education"
              className="text-xs font-normal text-slate-900 no-underline tracking-widest uppercase transition-opacity duration-200 hover:opacity-50"
            >
              Education
            </a>
            <a
              href="#contact"
              className="text-xs font-normal text-slate-900 no-underline tracking-widest uppercase transition-opacity duration-200 hover:opacity-50"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
