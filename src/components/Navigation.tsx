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
        scrolled ? 'bg-white/80 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex items-center justify-center h-16">
          <div className="flex items-center gap-8">
            <a
              href="#about"
              className="text-sm font-normal text-[#1d1d1f] no-underline transition-opacity duration-200 hover:opacity-60"
            >
              About
            </a>
            <a
              href="#projects"
              className="text-sm font-normal text-[#1d1d1f] no-underline transition-opacity duration-200 hover:opacity-60"
            >
              Projects
            </a>
            <a
              href="#skills"
              className="text-sm font-normal text-[#1d1d1f] no-underline transition-opacity duration-200 hover:opacity-60"
            >
              Skills
            </a>
            <a
              href="#education"
              className="text-sm font-normal text-[#1d1d1f] no-underline transition-opacity duration-200 hover:opacity-60"
            >
              Education
            </a>
            <a
              href="#contact"
              className="text-sm font-normal text-[#1d1d1f] no-underline transition-opacity duration-200 hover:opacity-60"
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
