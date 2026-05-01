import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const skills = [
  { name: 'React', level: 90, icon: '⚛️' },
  { name: 'JavaScript', level: 85, icon: '🟨' },
  { name: 'Java', level: 80, icon: '☕' },
  { name: 'Spring Boot', level: 75, icon: '🍃' },
  { name: 'Node.js', level: 80, icon: '🟢' },
  { name: 'MySQL', level: 75, icon: '🐬' },
  { name: 'MongoDB', level: 70, icon: '🍀' },
  { name: 'Python', level: 75, icon: '🐍' },
  { name: 'HTML/CSS', level: 90, icon: '🎨' },
  { name: 'Git', level: 85, icon: '📦' },
  { name: 'Tailwind CSS', level: 80, icon: '💨' },
  { name: 'TypeScript', level: 70, icon: '🔷' },
];

function Skills() {
  const { theme } = useTheme();

  return (
    <section id="skills" className="py-24">
      <div className="max-w-5xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-12 relative inline-block"
        >
          Skills
          <span className="absolute -bottom-2 left-0 w-12 h-1 bg-primary rounded"></span>
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ scale: 1.03, y: -4 }}
              className={`p-5 rounded-xl border transition-all duration-300 cursor-default
                ${theme === 'dark'
                  ? 'bg-[#1a2235] border-[#1e293b] hover:border-primary/50 hover:shadow-[0_0_20px_rgba(99,102,241,0.15)]'
                  : 'bg-white border-gray-200 hover:border-primary/40 hover:shadow-lg'}`}
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{skill.icon}</span>
                  <span className="font-semibold text-sm">{skill.name}</span>
                </div>
                <span className={`text-xs font-medium ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                  {skill.level}%
                </span>
              </div>
              <div className={`w-full h-2 rounded-full overflow-hidden ${theme === 'dark' ? 'bg-[#0a0f1c]' : 'bg-gray-100'}`}>
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: index * 0.05 + 0.3 }}
                  className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
                ></motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
