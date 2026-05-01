import React from 'react';
import { useTheme } from '../context/ThemeContext';

function Footer() {
  const { theme } = useTheme();

  return (
    <footer className={`py-8 border-t ${theme === 'dark' ? 'border-[#1e293b] bg-[#111827]' : 'border-gray-200 bg-gray-50'}`}>
      <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className={`text-sm ${theme === 'dark' ? 'text-gray-500' : 'text-gray-400'}`}>
          Designed & Built with ❤️ using React
        </p>

        <div className="flex items-center gap-5">
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer"
            className={`text-sm font-medium transition-colors ${theme === 'dark' ? 'text-gray-400 hover:text-primary-light' : 'text-gray-500 hover:text-primary'}`}>
            GitHub
          </a>
          <span className={theme === 'dark' ? 'text-gray-700' : 'text-gray-300'}>•</span>
          <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer"
            className={`text-sm font-medium transition-colors ${theme === 'dark' ? 'text-gray-400 hover:text-primary-light' : 'text-gray-500 hover:text-primary'}`}>
            LinkedIn
          </a>
          <span className={theme === 'dark' ? 'text-gray-700' : 'text-gray-300'}>•</span>
          <a href="https://www.codechef.com/" target="_blank" rel="noopener noreferrer"
            className={`text-sm font-medium transition-colors ${theme === 'dark' ? 'text-gray-400 hover:text-primary-light' : 'text-gray-500 hover:text-primary'}`}>
            CodeChef
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
