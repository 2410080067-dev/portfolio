import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

function About() {
  const { theme } = useTheme();

  return (
    <section id="about" className={`py-24 ${theme === 'dark' ? 'bg-[#111827]' : 'bg-gray-50'}`}>
      <div className="max-w-5xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-12 relative inline-block"
        >
          About Me
          <span className="absolute -bottom-2 left-0 w-12 h-1 bg-primary rounded"></span>
        </motion.h2>

        <div className="grid md:grid-cols-5 gap-12 items-center">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-2 flex justify-center"
          >
            <div className={`w-56 h-56 rounded-2xl overflow-hidden border-2 shadow-xl
              ${theme === 'dark' ? 'border-primary/30 shadow-primary/10' : 'border-primary/20 shadow-primary/5'}`}>
              <div className={`w-full h-full flex items-center justify-center text-6xl
                ${theme === 'dark' ? 'bg-[#1a2235]' : 'bg-gray-100'}`}>
                <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"
                  className={theme === 'dark' ? 'text-gray-600' : 'text-gray-300'}>
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/>
                  <circle cx="12" cy="7" r="4"/>
                </svg>
              </div>
            </div>
          </motion.div>

          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="md:col-span-3"
          >
            <p className={`mb-4 leading-relaxed ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
              I'm a passionate <strong className={theme === 'dark' ? 'text-primary-light' : 'text-primary'}>Full Stack Developer</strong> who
              loves building clean, efficient, and user-friendly web applications. With a strong
              foundation in both front-end and back-end development, I enjoy turning complex
              problems into simple, beautiful solutions.
            </p>
            <p className={`mb-6 leading-relaxed ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
              When I'm not coding, you'll find me solving competitive programming challenges on
              CodeChef, contributing to open-source projects on GitHub, or exploring new
              technologies to expand my skill set. I believe in writing clean code and building
              products that people love to use.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className={`px-4 py-2 rounded-lg text-sm font-medium
                ${theme === 'dark' ? 'bg-[#1a2235] text-primary-light border border-[#1e293b]' : 'bg-white text-primary border border-gray-200 shadow-sm'}`}>
                🎓 Computer Science Student
              </div>
              <div className={`px-4 py-2 rounded-lg text-sm font-medium
                ${theme === 'dark' ? 'bg-[#1a2235] text-primary-light border border-[#1e293b]' : 'bg-white text-primary border border-gray-200 shadow-sm'}`}>
                💻 Open Source Contributor
              </div>
              <div className={`px-4 py-2 rounded-lg text-sm font-medium
                ${theme === 'dark' ? 'bg-[#1a2235] text-primary-light border border-[#1e293b]' : 'bg-white text-primary border border-gray-200 shadow-sm'}`}>
                🏆 Competitive Programmer
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;
