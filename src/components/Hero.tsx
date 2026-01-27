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
    }, 40)

    return () => clearInterval(typeInterval)
  }, [])

  return (
    <section className="min-h-screen flex items-center justify-center px-10 py-20 bg-gradient-to-br from-cyan-50 via-blue-50 to-emerald-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-400/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-400/20 rounded-full blur-3xl animate-float-delayed"></div>
      <div className="text-center max-w-3xl relative z-10">
        <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-600 via-blue-600 to-emerald-600 bg-clip-text text-transparent mb-5 tracking-tight min-h-[4rem] animate-gradient">
          {nameText}
          {showCursor1 && (
            <span className="inline-block w-0.5 h-12 bg-gradient-to-b from-cyan-600 to-blue-600 ml-1 animate-blink" />
          )}
        </h1>
        <p className="text-lg md:text-2xl font-light text-slate-700 mb-16 tracking-wide min-h-[2rem]">
          {titleText}
          {showCursor2 && (
            <span className="inline-block w-0.5 h-6 bg-slate-700 ml-1 animate-blink" />
          )}
        </p>
      </div>
    </section>
  )
}

export default Hero
