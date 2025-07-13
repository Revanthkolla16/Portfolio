import React, { useState } from 'react'
import portfolio from '../assets/portfolio.png'
import scribz from '../assets/scribz.png'
import vaultix from '../assets/vaultix.png'

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all')

  const projects = [
    {
      id: 1,
      title: "Scribz",
      description: "A modern, beautiful notes app that helps you capture ideas, organize thoughts, and stay productive. Built with the latest technology for a seamless experience.",
      image: scribz,
      technologies: ["React", "Express.js", "MongoDB", "Tailwind"],
      category: "fullstack",
      liveUrl: "https://scribz.vercel.app/",
      githubUrl: "https://github.com/Revanthkolla16/Scribz",
      featured: false
    },
    {
      id: 2,
      title: "Vaultix",
      description: "A straightforward way to store your passwords. Sign up, add your passwords, and access them whenever you need.",
      image: vaultix,
      technologies: ["React", "Express.js", "MongoDB", "Tailwind"],
      category: "fullstack",
      liveUrl: "https://vaultix-pi.vercel.app/",
      githubUrl: "https://github.com/Revanthkolla16/Vaultix",
      featured: false
    },
    {
      id: 3,
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website with smooth animations, dark theme, and optimized performance.",
      image: portfolio,
      technologies: ["React", "Tailwind", "Nodemailer"],
      category: "frontend",
      liveUrl: "https://revanthkolla.vercel.app/",
      githubUrl: "https://github.com/Revanthkolla16/Portfolio",
      featured: false
    }
  ]

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'fullstack', label: 'Full Stack' },
    { id: 'aiml', label: 'AI/ML' }
  ]

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter)

  return (
    <div className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-4"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A showcase of my recent work, demonstrating my skills in frontend development, 
            user experience design, and problem-solving
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-3 rounded-lg font-medium cursor-pointer transition-all duration-300 ${
                activeFilter === filter.id
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-cyan-500/25 border-cyan-400 shadow-[0_0_16px_#06b6d4,0_0_32px_#3b82f6]'
                  : 'bg-gray-800/50 text-gray-300 border border-gray-700 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-600 hover:border-cyan-400 hover:text-white hover:shadow-[0_0_16px_#06b6d4,0_0_32px_#3b82f6]'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-lg overflow-hidden hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                {project.featured && (
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Featured
                  </div>
                )}
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-800/50 border border-gray-700 rounded-full text-xs text-gray-300 cursor-pointer transition-all duration-300 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-600 hover:border-cyan-400 hover:text-white hover:shadow-[0_0_16px_#06b6d4,0_0_32px_#3b82f6]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <a
                    href={project.liveUrl}
                    target='_blank'
                    className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-center py-2 px-4 rounded-lg text-sm font-medium hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    target='_blank'
                    className="flex-1 border border-gray-700 text-gray-300 text-center py-2 px-4 rounded-lg text-sm font-medium hover:border-cyan-500 hover:text-cyan-400 transition-all duration-300"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Projects 