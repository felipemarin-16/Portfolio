'use client'

import { useState, useEffect } from 'react'

const Hero = () => {
  const [nameText, setNameText] = useState('')
  const [titleText, setTitleText] = useState('')
  const [showCursor1, setShowCursor1] = useState(true)
  const [showCursor2, setShowCursor2] = useState(false)

  const fullName = 'Wilson Marin'
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
    }, 55)

    return () => clearInterval(typeInterval)
  }, [])

  return (
    <section className="min-h-screen flex items-center justify-center px-10 py-20 bg-white relative overflow-hidden">
      <div className="absolute top-20 left-10 w-96 h-96 bg-slate-100 rounded-full blur-3xl opacity-30 animate-float"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-slate-100 rounded-full blur-3xl opacity-20 animate-float-delayed"></div>
      <div className="text-center max-w-4xl relative z-10">
        <h1 className="text-6xl md:text-8xl font-light text-slate-900 mb-6 tracking-tight min-h-[4rem] leading-tight">
          {nameText}
          {showCursor1 && (
            <span className="inline-block w-0.5 h-16 bg-slate-900 ml-2 animate-blink" />
          )}
        </h1>
        <p className="text-xl md:text-2xl font-light text-slate-600 mb-16 tracking-wide min-h-[2rem]">
          {titleText}
          {showCursor2 && (
            <span className="inline-block w-0.5 h-6 bg-slate-600 ml-1 animate-blink" />
          )}
        </p>
      </div>
    </section>
  )
}

export default Hero
