import React from 'react'
import useScrollAnimation from './useScrollAnimation'

const About = () => {
  const [leftRef, leftClass] = useScrollAnimation('fade-in-left')
  const [rightRef, rightClass] = useScrollAnimation('fade-in-right')
  return (
    <div className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image */}
          <div ref={leftRef} className={leftClass + " relative"}>
            <div className="relative z-10">
              <div className="w-80 h-80 mx-auto relative">
                {/* Glowing border */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur-lg opacity-30 animate-pulse"></div>
                
                {/* Profile image placeholder */}
                <div className="relative w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 rounded-full border-4 border-cyan-500/30 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-32 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-4xl font-bold text-black">RN</span>
                    </div>
                    <p className="text-cyan-400 font-semibold">Revanth</p>
                    <p className="text-gray-400 text-sm">Frontend Developer</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating elements with new animations */}
            <div className="absolute top-10 -left-4 w-8 h-8 bg-cyan-400/20 rounded-full animate-float"></div>
            <div className="absolute bottom-20 -right-4 w-6 h-6 bg-blue-400/20 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
            <div className="absolute top-1/2 -right-8 w-4 h-4 bg-purple-400/20 rounded-full animate-float" style={{ animationDelay: '4s' }}></div>
          </div>

          {/* Right Column - Content */}
          <div ref={rightRef} className={rightClass + " space-y-6"}>
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-white">
              CS student | Web Development & AI
              </h3>
              
              <p className="text-gray-300 leading-relaxed">
              I'm Revanth Kolla, a Computer Science undergraduate at IIITDM Kancheepuram. I'm interested in software development, web technologies, and AI. I enjoy applying my problem-solving skills to develop efficient, real-world applications, whether it's through crafting dynamic websites or exploring the potential of AI systems.
              </p>

              <p className="text-gray-300 leading-relaxed">
              I'm particularly interested in full-stack web development and exploring how AI can be applied to solve real-world challenges. I prefer working on projects where I can apply clear thinking, break down problems, and build reliable solutions.
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default About 