import React, { useState, useEffect } from 'react'

const animatedLines = [
  "A Student at IIITDM Kancheepuram",
  "An aspiring Software engineer",
  "Scroll down to see more about me"
]

const TYPING_SPEED = 60;
const ERASING_SPEED = 60;

const Hero = () => {
  const [text, setText] = useState('')
  const [currentLine, setCurrentLine] = useState(0)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isErasing, setIsErasing] = useState(false)
  const [showScrollIndicator, setShowScrollIndicator] = useState(false)

  useEffect(() => {
    if (currentLine < animatedLines.length) {
      if (!isErasing) {
        // Typing
        if (currentIndex < animatedLines[currentLine].length) {
          const timeout = setTimeout(() => {
            setText(animatedLines[currentLine].slice(0, currentIndex + 1))
            setCurrentIndex(currentIndex + 1)
          }, TYPING_SPEED)
          return () => clearTimeout(timeout)
        } else {
          // Pause before erasing (unless it's the last line)
          if (currentLine < animatedLines.length - 1) {
            const pause = setTimeout(() => {
              setIsErasing(true)
            }, 900)
            return () => clearTimeout(pause)
          } else {
            // Last line, show scroll indicator after a pause
            const pause = setTimeout(() => {
              setShowScrollIndicator(true)
            }, 900)
            return () => clearTimeout(pause)
          }
        }
      } else {
        // Erasing
        if (currentIndex > 0) {
          const timeout = setTimeout(() => {
            setText(animatedLines[currentLine].slice(0, currentIndex - 1))
            setCurrentIndex(currentIndex - 1)
          }, ERASING_SPEED)
          return () => clearTimeout(timeout)
        } else {
          // Move to next line
          setIsErasing(false)
          setCurrentLine(currentLine + 1)
          setCurrentIndex(0)
        }
      }
    }
  }, [currentIndex, currentLine, isErasing])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="text-center z-10 px-4">
        {/* Greeting */}
        <div>
          <span className="text-cyan-400 text-2xl sm:text-3xl md:text-2xl font-medium drop-shadow-lg">Hello, I'm</span>
        </div>

        {/* Name */}
        <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold mb-6">
          <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
            Revanth
          </span>
        </h1>

        {/* Animated lines */}
        <div className="mb-8 min-h-[2.5rem] md:min-h-[3rem]">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-300">
            <span className="text-cyan-400 relative">
              {text}
              <span className="ml-1 animate-blink">|</span>
            </span>
          </h2>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={() => scrollToSection('projects')}
            className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25 cursor-pointer"
          >
            View My Work
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg relative overflow-hidden 
            scale-95
            transition-all duration-300 transform hover:scale-100 shadow-lg shadow-cyan-500/20 group cursor-pointer"
          >
            <span className="relative z-10">Get In Touch</span>
            {/* Glowing border and background flash on hover */}
            <span className="absolute inset-0 rounded-lg pointer-events-none group-hover:shadow-[0_0_24px_6px_#06b6d4,0_0_60px_12px_#3b82f6] group-hover:bg-gradient-to-r group-hover:from-cyan-500/20 group-hover:to-blue-500/20 transition-all duration-300"></span>
            {/* Animated border effect */}
            <span className="absolute left-0 top-0 w-full h-full rounded-lg border-transparent group-hover:border-cyan-400 animate-glow pointer-events-none"></span>
          </button>
        </div>

        {/* Scroll indicator */}
        {showScrollIndicator && (
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-cyan-400 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-cyan-400 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        )}
      </div>
      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        .animate-blink {
          animation: blink 1s steps(1) infinite;
        }
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 8px 0 #06b6d4; }
          50% { box-shadow: 0 0 24px 6px #06b6d4, 0 0 60px 12px #3b82f6; }
        }
        .animate-glow {
          animation: glow 1.5s infinite alternate;
        }
      `}</style>
    </div>
  )
}

export default Hero 