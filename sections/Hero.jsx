'use client';

import React from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import Image from 'next/image';
import ironman from '@/assets/ironman.png';

export function Hero() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, {
    stiffness: 120,
    damping: 25,
  });

  const mouseYSpring = useSpring(y, {
    stiffness: 120,
    damping: 25,
  });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], [10, -10]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], [-10, 10]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();

    const mouseX = e.clientX - rect.left - rect.width / 2;
    const mouseY = e.clientY - rect.top - rect.height / 2;

    x.set(mouseX / rect.width);
    y.set(mouseY / rect.height);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <section
      id="home"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative flex min-h-screen w-full items-center justify-center bg-brand-bg overflow-hidden py-20 md:py-24 lg:py-0"
    >
      {/* =========================================================
          BACKGROUND IRONMAN IMAGE
      ========================================================= */}
      <motion.div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          rotateX,
          rotateY,
          transformPerspective: 1000,
        }}
      >
        <Image
          src={ironman}
          alt="Ironman Background"
          fill
          priority
          className="object-cover object-center opacity-100 mix-blend-luminosity scale-105"
        />
        {/* Dark overlay gradient for readable text contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-bg via-brand-bg/85 to-transparent" />
      </motion.div>

      {/* =========================================================
          BACKGROUND DECORATION
      ========================================================= */}

      <div className="absolute right-[-6rem] top-1/4 h-[28rem] w-[28rem] rounded-full bg-accentNeon/5 blur-[150px] pointer-events-none z-0" />
      <div className="absolute bottom-8 left-8 h-24 w-24 rounded-full border border-white/5 pointer-events-none z-0" />
      <div className="absolute right-12 top-12 h-16 w-16 rounded-full border border-white/5 pointer-events-none z-0" />

      {/* =========================================================
          MAIN HERO CONTAINER
      ========================================================= */}

      <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 gap-12 px-6 md:px-10 lg:grid-cols-12 lg:gap-20 lg:px-12">

        {/* =======================================================
            LEFT CONTENT
        ======================================================= */}

        <div className="flex flex-col justify-center text-left lg:col-span-8 space-y-4">

          {/* INTRO SYSTEM HEADER */}
          <div className="mb-2 flex flex-col font-display text-4xl sm:text-[56px] lg:text-[72px] font-black leading-[0.95] tracking-[0.05em] uppercase">
            <div className="overflow-hidden py-0.5">
              <motion.span
                initial={{ y: '100%', opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  delay: 0.05,
                  duration: 0.9,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="block text-red-200/70"
              >
                SYSTEM
              </motion.span>
            </div>

            <div className="overflow-hidden py-0.5">
              <motion.span
                initial={{ y: '100%', opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  delay: 0.12,
                  duration: 0.9,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="block text-white"
              >
                INITIALIZATION
              </motion.span>
            </div>
          </div>

          {/* GREETING */}
          <div className="overflow-hidden py-0.5">
            <motion.span
              initial={{ y: '100%', opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                delay: 0.1,
                duration: 0.9,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="block font-mono text-xs md:text-sm font-bold tracking-[0.2em] text-red-200/90 uppercase"
            >
              HELLO, I'M
            </motion.span>
          </div>

          {/* MAIN NAME */}
          <div className="overflow-hidden py-1">
            <motion.h1
              initial={{ y: '100%', opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                delay: 0.22,
                duration: 0.9,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="font-display font-black text-2xl sm:text-4xl lg:text-5xl tracking-wide uppercase text-white select-none leading-tight"
            >
              BASAVAPRABHU S K
            </motion.h1>
          </div>

          {/* ROLE / SUBTITLE */}
          <div className="overflow-hidden py-0.5 mt-0">
            <motion.span
              initial={{ y: '100%', opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                delay: 0.34,
                duration: 0.9,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="block font-mono text-xs md:text-sm font-bold tracking-[0.15em] text-yellow-300 uppercase"
            >
              MCA STUDENT &nbsp;|&nbsp; FULL STACK DEVELOPER
            </motion.span>
          </div>

          {/* DESCRIPTION */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.55,
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="mt-4 text-red-100/85 text-xs md:text-sm max-w-lg font-sans font-medium tracking-wide leading-relaxed"
          >
            Building innovative digital solutions with edge technologies and a passion for perfection
          </motion.p>

          {/* ACTION BUTTONS */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.7,
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="mt-6 flex flex-wrap gap-4"
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-[#e6000c] hover:bg-[#ff1e27] text-white text-[11px] font-bold tracking-widest px-6 py-3.5 rounded-sm transition-all duration-300 shadow-[0_4px_25px_rgba(230,0,12,0.5)] border border-red-500 uppercase flex items-center justify-center cursor-pointer"
            >
              ACCESS SYSTEM
            </motion.a>

            <motion.a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-black/30 hover:bg-white/10 text-white text-[11px] font-bold tracking-widest px-6 py-3.5 rounded-sm border border-red-300/40 hover:border-white transition-all duration-300 uppercase cursor-pointer flex items-center justify-center backdrop-blur-sm"
            >
              EXPLORE INTERFACE
            </motion.a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}