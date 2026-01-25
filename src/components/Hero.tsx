'use client'

import { useState, useEffect } from 'react'

const Hero = () => {
  const [nameText, setNameText] = useState('')
  const [titleText, setTitleText] = useState('')
  const [showCursor1, setShowCursor1] = useState(true)
  const [showCursor2, setShowCursor2] = useState(false)

  const fullName = 'wilson.marin'
  const fullTitle = 'Computer Science Student & ML/AI Developer'

  useEffect(() => {
    let nameIndex = 0
    let titleIndex = 0
    let nameComplete = false

    const typeInterval = setInterval(() => {
      if (!nameComplete && nameIndex < fullName.length) {
        setNameText(fullName.slice(0, nameIndex + 1))
        nameIndex++
      } else if (!nameComplete) {
        nameComplete = true
        setShowCursor1(false)
        setShowCursor2(true)
      } else if (titleIndex < fullTitle.length) {
        setTitleText(fullTitle.slice(0, titleIndex + 1))
        titleIndex++
      } else {
        setShowCursor2(false)
        clearInterval(typeInterval)
      }
    }, 300)

    return () => clearInterval(typeInterval)
  }, [])

  return (
    <section className="min-h-screen flex items-center justify-center px-10 py-20 bg-white">
      <div className="text-center max-w-3xl">
        <h1 className="text-5xl md:text-6xl font-normal text-[#1d1d1f] mb-5 tracking-tight min-h-[4rem]">
          {nameText}
          {showCursor1 && (
            <span className="inline-block w-0.5 h-12 bg-[#1d1d1f] ml-1 animate-blink" />
          )}
        </h1>
        <p className="text-lg md:text-xl font-light text-[#6e6e73] mb-16 tracking-wide min-h-[2rem]">
          {titleText}
          {showCursor2 && (
            <span className="inline-block w-0.5 h-6 bg-[#6e6e73] ml-1 animate-blink" />
          )}
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
