'use client';

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap, Code2, Laptop, Wrench, Lightbulb } from 'lucide-react';

// Tech Brand SVG Icons
function TechIcon({ id, className = "w-5 h-5" }) {
  switch (id) {
    case 'react':
      return (
        <svg viewBox="-11.5 -10.23174 23 20.46348" className={className}>
          <circle cx="0" cy="0" r="2.05" fill="#61DAFB" />
          <g stroke="#61DAFB" strokeWidth="1" fill="none">
            <ellipse rx="11" ry="4.2" />
            <ellipse rx="11" ry="4.2" transform="rotate(60)" />
            <ellipse rx="11" ry="4.2" transform="rotate(120)" />
          </g>
        </svg>
      );
    case 'js':
    case 'javascript':
      return (
        <svg viewBox="0 0 24 24" className={className}>
          <rect width="24" height="24" rx="4" fill="#F7DF1E" />
          <path d="M7.5 18c0 .8.6 1.5 1.5 1.5s1.5-.7 1.5-1.5v-6h-1.5v6c0 .1-.1.2-.2.2s-.2-.1-.2-.2v-3.5H7.5V18zm6.3-1.8c.4.6 1 1 1.7 1 .8 0 1.3-.4 1.3-1 0-.7-.5-1-1.4-1.4l-.5-.2c-1.3-.6-2.2-1.3-2.2-2.7 0-1.4 1.1-2.4 2.7-2.4 1.1 0 2 .5 2.6 1.4l-1.1.9c-.3-.5-.7-.8-1.5-.8-.7 0-1.2.4-1.2.9 0 .6.5.9 1.3 1.2l.5.2c1.5.6 2.3 1.4 2.3 2.9 0 1.6-1.3 2.6-3 2.6-1.4 0-2.5-.6-3.1-1.7l1.2-.9z" fill="#000000" />
        </svg>
      );
    case 'ts':
    case 'typescript':
      return (
        <svg viewBox="0 0 24 24" className={className}>
          <rect width="24" height="24" rx="4" fill="#3178C6" />
          <path d="M12.5 10.5h-4V12h1.2v6H11v-6h1.5v-1.5zm2.8 5.7c.4.6 1 1 1.7 1 .8 0 1.3-.4 1.3-1 0-.7-.5-1-1.4-1.4l-.5-.2c-1.3-.6-2.2-1.3-2.2-2.7 0-1.4 1.1-2.4 2.7-2.4 1.1 0 2 .5 2.6 1.4l-1.1.9c-.3-.5-.7-.8-1.5-.8-.7 0-1.2.4-1.2.9 0 .6.5.9 1.3 1.2l.5.2c1.5.6 2.3 1.4 2.3 2.9 0 1.6-1.3 2.6-3 2.6-1.4 0-2.5-.6-3.1-1.7l1.2-.9z" fill="#FFFFFF" />
        </svg>
      );
    case 'node':
    case 'nodejs':
      return (
        <svg viewBox="0 0 24 24" className={className}>
          <path fill="#68A063" d="M12 2l8.7 5v10L12 22l-8.7-5V7L12 2z" />
          <path fill="#FFFFFF" d="M12 6.5l5 2.9v5.8l-5 2.9-5-2.9V9.4l5-2.9zm0 2.2L9.2 10.3v3.4L12 15.3l2.8-1.6v-3.4L12 8.7z" />
        </svg>
      );
    case 'express':
      return (
        <svg viewBox="0 0 24 24" className={className}>
          <rect width="24" height="24" rx="4" fill="#222222" />
          <text x="5" y="16" fill="#FFFFFF" fontSize="11" fontWeight="bold" fontFamily="sans-serif">ex</text>
        </svg>
      );
    case 'mongodb':
      return (
        <svg viewBox="0 0 24 24" className={className}>
          <path fill="#47A248" d="M12 2s-5.5 5.5-5.5 11.2c0 4.1 3 7.3 5.5 8.8 2.5-1.5 5.5-4.7 5.5-8.8C17.5 7.5 12 2 12 2z" />
          <path fill="#FFFFFF" opacity="0.3" d="M12 2v20c.3-.2.6-.4.9-.6 2.1-1.4 4.6-4.3 4.6-8.2 0-5.7-5.5-11.2-5.5-11.2z" />
        </svg>
      );
    case 'mysql':
      return (
        <svg viewBox="0 0 24 24" className={className}>
          <rect width="24" height="24" rx="4" fill="#00758F" />
          <path fill="#F29111" d="M7 17.5c2.5-3 5-3 6.5-2 1.5 1 3.5.5 4.5-.5M6 14c1.5-1.5 3-1.5 4.5-1 1.5.5 3 .5 4-.5" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" />
          <circle cx="15.5" cy="8.5" r="1.2" fill="#FFFFFF" />
        </svg>
      );
    case 'java':
      return (
        <svg viewBox="0 0 24 24" className={className}>
          <path fill="#EA2D2E" d="M8.5 18.5c2.5.5 5.5.5 8-.5-1-.5-2.5-.8-4-.8s-3 .3-4 1.3zM7.5 16c3.5.8 8 .8 10.5-.5-1.5-.6-4.5-.8-6.5-.8s-3 .3-4 1.3z" />
          <path fill="#5382A1" d="M10 2c-.5 1.5.5 3 1.5 4-1-1.5-1.5-2.5-1.5-4zm3 2c-.5 1.5.5 3 1.5 4-1-1.5-1.5-2.5-1.5-4zM8 8.5c1.5.5 3 .5 4 0-1-.5-2.5-.8-4 0z" />
          <path fill="#EA2D2E" d="M5.5 20c4.5 1.2 10.5 1.2 14.5 0-.5.8-2.5 1.5-5.5 1.5-4 0-7.5-.7-9-1.5z" />
        </svg>
      );
    case 'html5':
    case 'html':
      return (
        <svg viewBox="0 0 24 24" className={className}>
          <path fill="#E34F26" d="M3 2l1.6 18.4 7.4 2.1 7.4-2.1L21 2H3z" />
          <path fill="#EF652A" d="M12 3.6v17.2l6-1.7 1.3-15.5H12z" />
          <path fill="#FFFFFF" d="M12 7.7H7.7l.3 3.6h4V7.7zm0 5.4H9.5l.2 2.3 2.3.6v-2.9zM16.3 7.7h-4.3v3.6h3.9l-.4 4.2-3.5 1v-2.9l1.6-.4.2-2.1H12v-3.4h4.6l-.3 3.4z" />
        </svg>
      );
    case 'css3':
    case 'css':
      return (
        <svg viewBox="0 0 24 24" className={className}>
          <path fill="#1572B6" d="M3 2l1.6 18.4 7.4 2.1 7.4-2.1L21 2H3z" />
          <path fill="#33A9DC" d="M12 3.6v17.2l6-1.7 1.3-15.5H12z" />
          <path fill="#FFFFFF" d="M12 7.7H7.7l.2 2.2h4.1V7.7zm0 3.8H8.1l.3 3.6h3.6v-3.6zm0 5.2l-2.3-.6-.1-1.5H7.8l.3 3 3.9 1.1v-2zM16.3 7.7H12v2.2h3.9l-.3 3.6H12v2.2h3.3l-.3 3.4-3 1v2.1l5.2-1.7.8-9.2z" />
        </svg>
      );
    case 'bootstrap':
      return (
        <svg viewBox="0 0 24 24" className={className}>
          <rect width="24" height="24" rx="5" fill="#7952B3" />
          <path fill="#FFFFFF" d="M8 6h4.5c2 0 3.5 1.1 3.5 2.7 0 1.1-.7 2-1.7 2.4 1.3.4 2.2 1.4 2.2 2.8 0 1.8-1.5 3.1-3.8 3.1H8V6zm2.4 4.1h2c.8 0 1.4-.4 1.4-1.1 0-.7-.6-1.1-1.4-1.1h-2v2.2zm0 4.8h2.3c.9 0 1.6-.5 1.6-1.3 0-.8-.7-1.3-1.6-1.3h-2.3v2.6z" />
        </svg>
      );
    case 'github':
      return (
        <svg viewBox="0 0 24 24" className={className}>
          <rect width="24" height="24" rx="5" fill="#181717" />
          <path fill="#FFFFFF" d="M12 4C7.6 4 4 7.6 4 12c0 3.5 2.3 6.5 5.5 7.6.4.1.6-.2.6-.4v-1.5c-2.2.5-2.7-1.1-2.7-1.1-.4-.9-.9-1.2-.9-1.2-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.2 1.9.9 2.4.7.1-.5.3-.9.5-1.1-1.8-.2-3.6-.9-3.6-4 0-.9.3-1.6.8-2.2-.1-.2-.4-1 .1-2.2 0 0 .7-.2 2.3.9.7-.2 1.4-.3 2.1-.3s1.4.1 2.1.3c1.6-1.1 2.3-.9 2.3-.9.5 1.2.2 2 .1 2.2.5.6.8 1.3.8 2.2 0 3.1-1.9 3.8-3.7 4 .3.3.6.8.6 1.6V19.2c0 .2.2.5.6.4C17.7 18.5 20 15.5 20 12c0-4.4-3.6-8-8-8z" />
        </svg>
      );
    case 'c':
    case 'cpp':
      return (
        <svg viewBox="0 0 24 24" className={className}>
          <rect width="24" height="24" rx="5" fill="#00599C" />
          <path fill="#FFFFFF" d="M11 8c-2.2 0-3.5 1.6-3.5 4s1.3 4 3.5 4c1.4 0 2.4-.7 2.9-1.6l-1.4-.9c-.3.5-.8.9-1.5.9-1.2 0-1.8-.9-1.8-2.4s.6-2.4 1.8-2.4c.7 0 1.2.4 1.5.9l1.4-.9C13.4 8.7 12.4 8 11 8zm4 3h1v-1h1v1h1v1h-1v1h-1v-1h-1v-1zm4 0h1v-1h1v1h1v1h-1v1h-1v-1h-1v-1z" />
        </svg>
      );
    case 'springboot':
      return (
        <svg viewBox="0 0 24 24" className={className}>
          <rect width="24" height="24" rx="5" fill="#1e293b" />
          <path fill="#6DB33F" d="M12 4.5l6.5 3.8v7.4L12 19.5l-6.5-3.8V8.3L12 4.5z" />
          <path fill="#FFFFFF" d="M12 7.5L7.5 10v4l4.5 2.5 4.5-2.5v-4L12 7.5zm0 2.2l2.5 1.4v2.8L12 15.3l-2.5-1.4v-2.8l2.5-1.4z" />
        </svg>
      );
    case 'dsa':
      return (
        <svg viewBox="0 0 24 24" className={className}>
          <rect width="24" height="24" rx="5" fill="#3b070e" />
          <circle cx="12" cy="7" r="2.5" fill="#facc15" />
          <circle cx="7" cy="16" r="2" fill="#ef4444" />
          <circle cx="17" cy="16" r="2" fill="#ef4444" />
          <path d="M10.5 9L8 14M13.5 9L16 14" stroke="#facc15" strokeWidth="1.5" />
        </svg>
      );
    default:
      return <Code2 className={`${className} text-yellow-400`} />;
  }
}

// Re-grouped Tech Stack Data
const techStackData = [
  // Programming
  {
    id: 'javascript',
    name: 'Javascript',
    category: 'programming',
    description: 'Web development, core scripting',
    icon: 'js',
  },
  {
    id: 'java',
    name: 'Java',
    category: 'programming',
    description: 'Core OOP, enterprise development',
    icon: 'java',
  },
  {
    id: 'cpp',
    name: 'C / C++',
    category: 'programming',
    description: 'Systems programming, memory management',
    icon: 'cpp',
  },

  // Web Development
  {
    id: 'react',
    name: 'React',
    category: 'web_dev',
    description: 'Frontend library, UI components',
    icon: 'react',
  },
  {
    id: 'nodejs',
    name: 'Node.js',
    category: 'web_dev',
    description: 'Backend runtime, REST APIs',
    icon: 'node',
  },
  {
    id: 'express',
    name: 'Express.js',
    category: 'web_dev',
    description: 'Web framework, middleware & routing',
    icon: 'express',
  },
  {
    id: 'springboot',
    name: 'Spring Boot',
    category: 'web_dev',
    description: 'Java enterprise backend framework',
    icon: 'springboot',
  },
  {
    id: 'html5',
    name: 'Html5',
    category: 'web_dev',
    description: 'Web layouts & semantic markup',
    icon: 'html5',
  },
  {
    id: 'css3',
    name: 'Css3',
    category: 'web_dev',
    description: 'Web styling, responsive design',
    icon: 'css3',
  },
  {
    id: 'bootstrap',
    name: 'Bootstrap',
    category: 'web_dev',
    description: 'Responsive UI components & grid',
    icon: 'bootstrap',
  },

  // Tools
  {
    id: 'mongodb',
    name: 'MongoDB',
    category: 'tools',
    description: 'NoSQL database, document store',
    icon: 'mongodb',
  },
  {
    id: 'mysql',
    name: 'MySQL',
    category: 'tools',
    description: 'Relational database, SQL queries',
    icon: 'mysql',
  },
  {
    id: 'github',
    name: 'GitHub',
    category: 'tools',
    description: 'Version control, Git repository workflows',
    icon: 'github',
  },

  // Concepts
  {
    id: 'dsa',
    name: 'DSA & Algorithms',
    category: 'concepts',
    description: 'Problem solving, logic & complexity',
    icon: 'dsa',
  },
];

// Updated category tabs matching your request
const categoryTabs = [
  { id: 'all', label: 'All', icon: Zap },
  { id: 'programming', label: 'Programming', icon: Code2 },
  { id: 'web_dev', label: 'Web Development', icon: Laptop },
  { id: 'tools', label: 'Tools', icon: Wrench },
  { id: 'concepts', label: 'Concepts', icon: Lightbulb },
];

export function Skills() {
  const [activeTab, setActiveTab] = useState('all');

  const filteredItems = useMemo(() => {
    if (activeTab === 'all') return techStackData;
    return techStackData.filter((item) => item.category === activeTab);
  }, [activeTab]);

  return (
    <section
      id="skills"
      className="relative flex w-full justify-center bg-brand-bg overflow-hidden border-t border-white/5 px-4 py-20 md:px-8 md:py-24"
    >
      {/* Background ambient lighting */}
      <div className="absolute left-[-6rem] top-1/3 h-[26rem] w-[26rem] rounded-full bg-accentNeon/5 blur-[140px] pointer-events-none" />
      <div className="absolute right-[-6rem] bottom-10 h-[26rem] w-[26rem] rounded-full bg-accentNeon/5 blur-[140px] pointer-events-none" />

      <div className="relative z-10 flex w-full max-w-6xl flex-col items-center">
        {/* Main Section Header */}
        <div className="text-center mb-8">
          <div className="inline-block relative">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
              Core Systems
            </h2>
            <div className="w-12 h-1 bg-yellow-400 mx-auto mt-2 rounded-full shadow-[0_0_10px_#facc15]" />
          </div>
          <p className="mt-4 text-xs sm:text-sm text-neutral-400 max-w-md mx-auto font-medium">
            A list of my favorite tools and technologies that I use on a regular basis.
          </p>
        </div>

        {/* Filter Category Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8 w-full">
          {categoryTabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;

            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-1.5 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs font-semibold tracking-wide transition-all duration-300 cursor-pointer ${isActive
                  ? 'bg-yellow-400 text-black shadow-[0_0_16px_rgba(250,204,21,0.6)] font-bold scale-105'
                  : 'bg-white/5 text-neutral-300 border border-white/10 hover:border-yellow-400 hover:text-white hover:bg-white/10'
                  }`}
              >
                <Icon size={13} className={isActive ? 'text-black' : 'text-yellow-400'} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* 3-Column Grid of Tech Stack Cards */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 w-full"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((tech) => (
              <motion.div
                layout
                key={tech.id}
                initial={{ opacity: 0, y: 15, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.25 }}
                className="group relative flex items-center gap-3 p-3 rounded-xl border border-white/10 bg-brand-card/80 backdrop-blur-md hover:bg-brand-card hover:border-yellow-400/70 hover:shadow-[0_8px_20px_rgba(0,0,0,0.5),0_0_15px_rgba(219,46,46,0.15)] transition-all duration-300 cursor-default hover:-translate-y-0.5"
              >
                {/* Tech Icon Tile */}
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center bg-white/5 border border-white/10 group-hover:border-yellow-400/50 group-hover:scale-105 transition-all duration-300 shrink-0 p-2 shadow-inner">
                  <TechIcon id={tech.icon} className="w-5 h-5" />
                </div>

                {/* Tech Text Information */}
                <div className="flex flex-col text-left overflow-hidden">
                  <h3 className="text-sm font-bold text-white tracking-wide group-hover:text-yellow-300 transition-colors leading-snug">
                    {tech.name}
                  </h3>
                  <p className="text-[11px] text-red-200/75 leading-tight font-normal mt-0.5 truncate">
                    {tech.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Bottom indicator */}
        <div className="mt-8 text-center text-xs font-mono text-red-200/50">
          Showing {filteredItems.length} technologies
        </div>
      </div>
    </section>
  );
}