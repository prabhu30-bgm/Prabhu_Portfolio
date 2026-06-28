'use client';

import React from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import Image from 'next/image';
import ironman from '@/assets/ironman.png';

export function Hero() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 120, damping: 25 });
  const mouseYSpring = useSpring(y, { stiffness: 120, damping: 25 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], [10, -10]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], [-10, 10]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
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
    <>
      <section id="home" className="relative w-screen h-screen bg-brand-bg flex items-center overflow-hidden">
        {/* Background glow and geometric overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent z-10" />

        {/* Red angular glow behind layout visualization */}
        <div className="absolute right-0 top-1/4 w-[600px] h-[600px] bg-brand-accent/15 blur-[180px] rounded-full z-0 pointer-events-none" />

        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 w-full grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-20">

          {/* Left Side Content Matrix */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">

            {/* 1. TWO-LINE HUGE SYSTEM INITIALIZATION HEADER */}
            <div className="flex flex-col font-display font-black text-5xl md:text-7xl tracking-wide uppercase text-white select-none leading-[0.95] mb-8">
              <div className="overflow-hidden py-0.5">
                <motion.span
                  initial={{ y: "100%", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.05, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                  className="block"
                >
                  SYSTEM
                </motion.span>
              </div>
              <div className="overflow-hidden py-0.5">
                <motion.span
                  initial={{ y: "100%", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.12, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                  className="block text-white/90"
                >
                  INITIALIZATION
                </motion.span>
              </div>
            </div>

            {/* 2. GREETING LINE - Sized perfectly as a compact tag identifier */}
            <div className="overflow-hidden py-0.5">
              <motion.span
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                className="block font-mono text-xs md:text-sm font-bold tracking-[0.2em] text-white/70 uppercase"
              >
                HELLO, I'M
              </motion.span>
            </div>

            {/* 2. MAIN NAME HEADLINE - Matches structural weight scaling */}
            <div className="overflow-hidden py-1">
              <motion.h1
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.22, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                className="font-display font-black text-4xl md:text-3xl lg:text-5xl tracking-wide uppercase text-white select-none leading-tight"
              >
                BASAVAPRABHU S K
              </motion.h1>
            </div>

            {/* 3. SUBTITLE LINE - Uniform scaling calibrated with Intro Header */}
            <div className="overflow-hidden py-0.5 mt-2">
              <motion.span
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.34, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                className="block font-mono text-xs md:text-sm font-bold tracking-[0.15em] text-white uppercase"
              >
                MCA STUDENT &nbsp;|&nbsp; FULL STACK DEVELOPER
              </motion.span>
            </div>

            {/* 4. DESCRIPTION PARAGRAPH - Compact typography block */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="mt-6 text-brand-text-sec text-xs md:text-sm max-w-lg font-sans font-medium tracking-wide leading-relaxed opacity-60"
            >
              Building innovative digital solutions with edge technologies and a passion for perfection
            </motion.p>

            {/* 5. ACTION BUTTON MATRIX */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-brand-accent hover:bg-brand-hover text-white text-[11px] font-bold tracking-widest px-6 py-3.5 rounded-sm transition-all duration-300 shadow-[0_4px_20px_rgba(208,0,0,0.2)] border border-brand-accent uppercase flex items-center justify-center cursor-pointer"
              >
                ACCESS SYSTEM
              </motion.a>
              <motion.a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-transparent hover:bg-white/5 text-white text-[11px] font-bold tracking-widest px-6 py-3.5 rounded-sm border border-white/20 hover:border-white/40 transition-all duration-300 uppercase cursor-pointer flex items-center justify-center"
              >
                EXPLORE INTERFACE
              </motion.a>
            </motion.div>
          </div>

          {/* Right Side Visual Grid */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="lg:col-span-5 relative flex justify-center items-center h-full min-h-[350px] lg:min-h-[500px]"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            {/* Background Branding Matrix */}
            <div className="absolute select-none pointer-events-none z-0 flex flex-col items-center justify-center text-center opacity-15 -translate-y-24">
              <h2 className="font-display font-black text-7xl md:text-8xl tracking-widest text-white leading-none">
                IRONMAN
              </h2>
              <h3 className="font-tech font-bold text-3xl md:text-5xl tracking-[1.5em] text-brand-accent mr-[-1.5em] mt-2">
                AVENGER
              </h3>
            </div>

            {/* Graphic Asset Framework with Dynamic 3D Tilt */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="relative z-10 flex justify-center items-center w-full"
            >
              <motion.div
                className="w-full max-w-[550px] aspect-[3/4] relative accent-glow drop-shadow-[0_15px_50px_rgba(208,0,0,0.25)]"
                style={{
                  rotateX,
                  rotateY,
                  transformPerspective: 1000,
                }}
              >
                <Image
                  src={ironman}
                  alt="Ironman Character Graphic"
                  fill
                  sizes="400px"
                  priority
                  className="object-contain"
                />
              </motion.div>
            </motion.div>
          </motion.div>

        </div>
      </section>
    </>
  );
}