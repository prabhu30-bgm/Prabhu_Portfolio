'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import ironman from '@/assets/ironman.png';

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex w-full justify-center bg-brand-bg overflow-hidden py-16 md:py-20 lg:py-24"
    >
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 md:px-10 lg:px-12 min-h-[520px] md:min-h-[580px] lg:min-h-[640px] flex items-center">
        {/* =========================================================
            BACKGROUND IRONMAN IMAGE (ENLARGED & POSITIONED LEFT)
        ========================================================= */}
        <div
          className="absolute inset-0 z-0 pointer-events-none overflow-hidden"
          style={{
            maskImage: 'radial-gradient(ellipse 95% 95% at 72% 45%, black 50%, transparent 98%)',
            WebkitMaskImage: 'radial-gradient(ellipse 95% 95% at 72% 45%, black 50%, transparent 98%)'
          }}
        >
          <Image
            src={ironman}
            alt="Basavaprabhu S K"
            fill
            priority
            className="object-cover object-[75%_20%] md:object-[72%_22%] lg:object-[70%_25%] opacity-95 scale-110 md:scale-120 lg:scale-125 transition-transform duration-500"
          />
          {/* Multi-directional soft blend gradients for readable text contrast on left */}
          <div className="absolute inset-0 bg-gradient-to-r from-brand-bg via-brand-bg/70 to-transparent w-full lg:w-2/3" />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-bg via-transparent to-brand-bg/40" />
        </div>

        {/* Ambient background glow */}
        <div className="absolute right-[5%] top-1/3 h-[26rem] w-[26rem] rounded-full bg-accentNeon/8 blur-[150px] pointer-events-none z-0" />

        {/* =========================================================
            MAIN HERO GRID
        ========================================================= */}
        <div className="relative z-10 grid w-full grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-20 py-6 md:py-10">
          <div className="flex flex-col justify-center text-left lg:col-span-7 space-y-4">

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
                  HELLO I'M
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
                  BASAVAPRABHU
                </motion.span>
              </div>
            </div>

            {/* GREETING
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
              MCA STUDENT
            </motion.span>
          </div> */}

            {/* MAIN NAME */}
            {/* <div className="overflow-hidden py-1">
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
          </div> */}

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
                MCA STUDENT &nbsp;|&nbsp; SOFTWARE DEVELOPER
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
      </div>
    </section>
  );
}