import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const roles = ['Full Stack Developer', 'React Enthusiast', 'Problem Solver', 'Open Source Contributor'];

function Hero() {
  const { theme } = useTheme();
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  // Dynamic name with localStorage persistence
  const [name, setName] = useState(() => {
    return localStorage.getItem('portfolio-name') || '';
  });

  const handleNameChange = (e) => {
    const value = e.target.value;
    setName(value);
    localStorage.setItem('portfolio-name', value);
  };

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timeout;

    if (!isDeleting && text === currentRole) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && text === '') {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    } else {
      timeout = setTimeout(() => {
        setText(currentRole.substring(0, isDeleting ? text.length - 1 : text.length + 1));
      }, isDeleting ? 40 : 80);
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, roleIndex]);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className={`absolute w-[500px] h-[500px] rounded-full -top-32 -right-24 ${theme === 'dark' ? 'bg-primary/[0.07]' : 'bg-primary/[0.05]'}`}></div>
        <div className={`absolute w-[350px] h-[350px] rounded-full -bottom-20 -left-16 ${theme === 'dark' ? 'bg-accent/[0.07]' : 'bg-accent/[0.05]'}`}></div>
        <div className={`absolute w-[200px] h-[200px] rounded-full top-1/2 left-[10%] ${theme === 'dark' ? 'bg-primary/[0.05]' : 'bg-primary/[0.03]'}`}></div>
      </div>

      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-primary-light font-medium tracking-wider mb-4 text-sm uppercase"
        >
          Hello, I'm
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className={`text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight mb-2
            ${theme === 'dark'
              ? 'bg-gradient-to-r from-gray-100 to-primary-light bg-clip-text text-transparent'
              : 'bg-gradient-to-r from-gray-800 to-primary bg-clip-text text-transparent'}`}
        >
          {name || 'Your Name'}
        </motion.h1>

        {/* Name Input */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-4 flex justify-center"
        >
          <input
            type="text"
            value={name}
            onChange={handleNameChange}
            placeholder="Enter your name"
            className={`w-64 sm:w-72 px-4 py-2 rounded-full text-center text-sm font-medium outline-none transition-all duration-300
              ${theme === 'dark'
                ? 'bg-[#1a2235]/80 border border-[#1e293b] text-gray-200 placeholder-gray-500 focus:border-primary focus:shadow-[0_0_16px_rgba(99,102,241,0.2)]'
                : 'bg-white/80 border border-gray-200 text-gray-700 placeholder-gray-400 focus:border-primary focus:shadow-[0_0_16px_rgba(99,102,241,0.12)]'}
              backdrop-blur-sm`}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className={`text-xl sm:text-2xl font-semibold mb-6 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}
        >
          <span>{text}</span>
          <span className="typing-cursor"></span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className={`max-w-lg mx-auto mb-8 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}
        >
          I build modern web experiences with clean code and creative design.
          Passionate about creating applications that make a difference.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <button onClick={() => scrollTo('projects')}
            className="px-7 py-3 bg-primary text-white font-semibold rounded-lg
              hover:bg-primary-dark transition-all duration-300
              hover:shadow-[0_0_25px_rgba(99,102,241,0.4)]">
            View Projects
          </button>
          <a href="/resume.pdf" download="Resume.pdf"
            className={`px-7 py-3 font-semibold rounded-lg border-2 border-primary transition-all duration-300
              ${theme === 'dark'
                ? 'text-primary-light hover:bg-primary hover:text-white'
                : 'text-primary hover:bg-primary hover:text-white'}`}>
            Download Resume
          </a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex justify-center gap-5 mt-10"
        >
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer" aria-label="GitHub"
            className={`transition-all duration-300 hover:-translate-y-1 ${theme === 'dark' ? 'text-gray-400 hover:text-primary-light' : 'text-gray-500 hover:text-primary'}`}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
            </svg>
          </a>
          <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
            className={`transition-all duration-300 hover:-translate-y-1 ${theme === 'dark' ? 'text-gray-400 hover:text-primary-light' : 'text-gray-500 hover:text-primary'}`}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
          <a href="https://www.codechef.com/" target="_blank" rel="noopener noreferrer" aria-label="CodeChef"
            className={`transition-all duration-300 hover:-translate-y-1 ${theme === 'dark' ? 'text-gray-400 hover:text-primary-light' : 'text-gray-500 hover:text-primary'}`}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="16 18 22 12 16 6"/>
              <polyline points="8 6 2 12 8 18"/>
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
