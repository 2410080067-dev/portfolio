import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const projects = [
  {
    id: 1,
    title: 'E-Commerce Dashboard',
    description:
      'A full-stack admin dashboard with real-time analytics, product management, order tracking, and a clean responsive UI built with modern web technologies.',
    tags: ['React', 'Node.js', 'MongoDB', 'Express'],
    github: 'https://github.com/',
    live: 'https://example.com/',
  },
  {
    id: 2,
    title: 'Weather Forecast App',
    description:
      'A sleek weather app that fetches real-time data from OpenWeatherMap API. Features city search, 5-day forecasts, and dynamic backgrounds based on weather conditions.',
    tags: ['JavaScript', 'REST API', 'CSS3'],
    github: 'https://github.com/',
    live: 'https://example.com/',
  },
  {
    id: 3,
    title: 'Task Manager Pro',
    description:
      'A full-featured productivity app with drag-and-drop task boards, due-date reminders, team collaboration, and real-time sync powered by Firebase.',
    tags: ['React', 'Firebase', 'Tailwind CSS'],
    github: 'https://github.com/',
    live: 'https://example.com/',
  },
];

function Projects() {
  const { theme } = useTheme();

  return (
    <section id="projects" className={`py-24 ${theme === 'dark' ? 'bg-[#111827]' : 'bg-gray-50'}`}>
      <div className="max-w-5xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-12 relative inline-block"
        >
          Projects
          <span className="absolute -bottom-2 left-0 w-12 h-1 bg-primary rounded"></span>
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className={`flex flex-col p-6 rounded-xl border transition-all duration-300
                ${theme === 'dark'
                  ? 'bg-[#1a2235] border-[#1e293b] hover:border-primary/50 hover:shadow-[0_12px_40px_rgba(0,0,0,0.3),0_0_20px_rgba(99,102,241,0.15)]'
                  : 'bg-white border-gray-200 hover:border-primary/40 hover:shadow-xl'}`}
            >
              {/* Card Header */}
              <div className="flex items-center justify-between mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
                  className="text-primary-light">
                  <path d="M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z"/>
                </svg>
                <div className="flex gap-3">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"
                    className={`transition-colors ${theme === 'dark' ? 'text-gray-400 hover:text-primary-light' : 'text-gray-500 hover:text-primary'}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                    </svg>
                  </a>
                  <a href={project.live} target="_blank" rel="noopener noreferrer" aria-label="Live Demo"
                    className={`transition-colors ${theme === 'dark' ? 'text-gray-400 hover:text-primary-light' : 'text-gray-500 hover:text-primary'}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/>
                      <polyline points="15 3 21 3 21 9"/>
                      <line x1="10" y1="14" x2="21" y2="3"/>
                    </svg>
                  </a>
                </div>
              </div>

              {/* Content */}
              <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
              <p className={`text-sm leading-relaxed flex-1 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-5">
                {project.tags.map((tag) => (
                  <span key={tag}
                    className={`text-xs font-mono ${theme === 'dark' ? 'text-gray-500' : 'text-gray-400'}`}>
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
