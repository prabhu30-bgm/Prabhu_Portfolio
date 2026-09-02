'use client';

import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';

import { useScrollSpy } from '@/hooks/useScrollSpy';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);

  const sectionIds = ['home', 'about', 'skills', 'projects', 'education', 'contact'];
  const activeSection = useScrollSpy(sectionIds);

  const navItems = [
    { label: 'SYSTEM INITIALIZATION', id: 'home' },
    { label: 'DOSSIER', id: 'about' },
    { label: 'SYSTEMS', id: 'skills' },
    { label: 'LABS', id: 'projects' },
    { label: 'UPGRADES', id: 'education' },
    { label: 'SECURE_LINK', id: 'contact' },
  ];

  const scrollToId = (id) => {
    setIsOpen(false);

    const el = document.getElementById(id);
    if (!el) return;

    const yOffset = -90;
    const y = el.getBoundingClientRect().top + window.scrollY + yOffset;

    window.scrollTo({ top: y, behavior: 'smooth' });
  };

  const lineVariants = {
    closed: { rotate: 0, translateY: 0 },
    open: (custom) => ({
      rotate: custom === 1 ? 45 : custom === 2 ? -45 : 0,
      translateY: custom === 1 ? 6 : custom === 2 ? -6 : 0,
      opacity: custom === 3 ? 0 : 1,
    }),
  };

  const menuContainerVariants = {
    hidden: { opacity: 0, scale: 0.95, y: -20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: [0.16, 1, 0.3, 1],
        staggerChildren: 0.06,
        delayChildren: 0.05,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.95,
      y: -20,
      transition: { duration: 0.25, ease: 'easeInOut' },
    },
  };

  const menuItemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 260, damping: 25 },
    },
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.15 }}
        className="fixed top-6 left-0 right-0 z-50 px-4 md:px-8 max-w-7xl mx-auto"
      >
        <div className="glass-nav rounded-[20px] px-6 py-4 flex items-center justify-between shadow-cardGlow max-w-5xl mx-auto">

          {/* Integrated morphing SVG drawing logo */}
          <button
            type="button"
            onClick={() => scrollToId('home')}
            className="flex items-center justify-center transition-transform active:scale-95 cursor-pointer relative w-8 h-8 group"
          >
            {/* Pulsing glow ring calibrated to the new smaller circular profile */}
            <span className="absolute inset-0 rounded-full bg-accentNeon/20 animate-ping pointer-events-none group-hover:bg-accentNeon/30 transition-colors" />

            <motion.div
              layoutId="main-logo-container"
              className="relative w-8 h-8 flex items-center justify-center z-10"
            >
              <motion.svg
                viewBox="0 0 100 100"
                className="w-5.5 h-5.5 text-white group-hover:text-accentNeon transition-colors duration-300"
              >
                <motion.path
                  layoutId="main-logo-path"
                  d="M 25 80 L 25 20 C 40 20, 40 45, 25 45 C 45 45, 45 80, 25 80 M 55 20 L 55 80 M 75 20 L 55 50 L 75 80"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </motion.svg>
            </motion.div>
          </button>

          <div
            className="hidden md:flex items-center gap-1 relative"
            onMouseLeave={() => setHoveredItem(null)}
          >
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              const isHovered = hoveredItem === item.id;

              return (
                <button
                  key={item.id}
                  type="button"
                  onMouseEnter={() => setHoveredItem(item.id)}
                  onClick={() => scrollToId(item.id)}
                  className={`text-xs font-medium tracking-wide font-mono transition-colors relative px-4 py-2.5 cursor-pointer select-none flex flex-col items-center justify-center ${isActive ? 'text-white font-bold' : 'text-secondaryText hover:text-white'
                    }`}
                >
                  {isHovered && (
                    <motion.div
                      layoutId="navHoverPill"
                      className="absolute inset-0 bg-white/5 rounded-md -z-10"
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}

                  <span>{item.label}</span>

                  {isActive && (
                    <motion.div
                      layoutId="activeUnderline"
                      className="absolute bottom-0 left-4 right-4 h-[2px] bg-yellow-400 shadow-[0_0_10px_#facc15]"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          <div className="hidden md:block">
            <motion.button
              type="button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToId('contact')}
              className="bg-yellow-400 text-black text-xs font-bold uppercase tracking-wider px-5 py-2.5 rounded-full hover:bg-white hover:text-black transition-all duration-300 shadow-[0_0_15px_rgba(250,204,21,0.5)] flex items-center gap-1.5 cursor-pointer"
            >
              Hire Me <ArrowUpRight size={14} />
            </motion.button>
          </div>

          <button
            type="button"
            onClick={() => setIsOpen((v) => !v)}
            className="md:hidden text-white p-2 hover:text-accentNeon transition-colors relative z-50 flex items-center justify-center cursor-pointer"
            aria-label="Toggle menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="stroke-current">
              <motion.line
                x1="4"
                y1="6"
                x2="20"
                y2="6"
                strokeWidth="2.5"
                strokeLinecap="round"
                custom={1}
                variants={lineVariants}
                animate={isOpen ? 'open' : 'closed'}
                transition={{ duration: 0.3 }}
                style={{ originX: '12px', originY: '6px' }}
              />
              <motion.line
                x1="4"
                y1="12"
                x2="20"
                y2="12"
                strokeWidth="2.5"
                strokeLinecap="round"
                custom={3}
                variants={lineVariants}
                animate={isOpen ? 'open' : 'closed'}
                transition={{ duration: 0.2 }}
              />
              <motion.line
                x1="4"
                y1="18"
                x2="20"
                y2="18"
                strokeWidth="2.5"
                strokeLinecap="round"
                custom={2}
                variants={lineVariants}
                animate={isOpen ? 'open' : 'closed'}
                transition={{ duration: 0.3 }}
                style={{ originX: '12px', originY: '18px' }}
              />
            </svg>
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuContainerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-x-0 top-24 z-40 mx-4 glass-nav rounded-3xl p-8 flex flex-col gap-6 md:hidden shadow-cardGlow"
          >
            <div className="flex flex-col gap-5 items-center text-center">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <motion.button
                    variants={menuItemVariants}
                    key={item.id}
                    type="button"
                    onClick={() => scrollToId(item.id)}
                    className={`text-xl font-display font-medium tracking-wide transition-colors cursor-pointer ${isActive ? 'text-accentNeon font-bold' : 'text-secondaryText hover:text-white'
                      }`}
                  >
                    {item.label}
                  </motion.button>
                );
              })}

              <motion.button
                variants={menuItemVariants}
                type="button"
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToId('contact')}
                className="w-full max-w-[200px] mt-4 bg-yellow-400 text-black text-xs font-bold uppercase tracking-wider py-3.5 rounded-full transition-all duration-300 flex items-center justify-center gap-1.5 cursor-pointer shadow-[0_0_15px_rgba(250,204,21,0.5)]"
              >
                Hire Me <ArrowUpRight size={14} />
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
