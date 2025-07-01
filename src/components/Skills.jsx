import React from 'react'
import useScrollAnimation from './useScrollAnimation'

const languages = [
  "HTML", "CSS", "JavaScript", "Python", "C", "C++"
]

const frameworksAndLibraries = [
  "React", "Node.js", "Express.js","Tailwind","Numpy","Pandas","Matplotlib","Scikit-learn"
]

const databases = [
  "MongoDB", "MySQL", "Git", "Github", "VS Code", "Jupyter Notebook", "Postman"
]

const coreSubjects = [
  "Data Structures & Algorithms", "Database Management System", "Computer Networks", "Object Oriented Programming"
]

const Skills = () => {
  const [skillsRef, skillsClass] = useScrollAnimation('fade-in')
  return (
    <div ref={skillsRef} className={skillsClass + " py-20 px-4 relative"}>
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-2">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              My Skills
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mt-4"></div>
        </div>

        {/* Languages */}
        <div className="mb-12 text-center">
          <h3 className="text-2xl font-semibold text-white mb-6">Languages</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {languages.map((lang, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-full text-gray-300 cursor-pointer transition-all duration-300 text-base font-medium hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-600 hover:border-cyan-400 hover:text-white hover:shadow-[0_0_16px_#06b6d4,0_0_32px_#3b82f6]"
              >
                {lang}
              </span>
            ))}
          </div>
        </div>

        {/* Frameworks & Libraries */}
        <div className="mb-12 text-center">
          <h3 className="text-2xl font-semibold text-white mb-6">Frameworks & Libraries</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {frameworksAndLibraries.map((item, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-full text-gray-300 cursor-pointer transition-all duration-300 text-base font-medium hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-600 hover:border-cyan-400 hover:text-white hover:shadow-[0_0_16px_#06b6d4,0_0_32px_#3b82f6]"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Databases & Tools */}
        <div className="mb-12 text-center">
          <h3 className="text-2xl font-semibold text-white mb-6">Databases & Tools</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {databases.map((item, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-full text-gray-300 cursor-pointer transition-all duration-300 text-base font-medium hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-600 hover:border-cyan-400 hover:text-white hover:shadow-[0_0_16px_#06b6d4,0_0_32px_#3b82f6]"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Core Subjects */}
        <div className="text-center">
          <h3 className="text-2xl font-semibold text-white mb-6">Core Subjects</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {coreSubjects.map((item, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-full text-gray-300 cursor-pointer transition-all duration-300 text-base font-medium hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-600 hover:border-cyan-400 hover:text-white hover:shadow-[0_0_16px_#06b6d4,0_0_32px_#3b82f6]"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills 