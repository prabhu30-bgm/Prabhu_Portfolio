'use client';

import React, { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

import { profile } from '@/constants/portfolioData';
import ironman3 from '@/assets/ironman3.png';

export function PageLoader({ onComplete }) {
  const [count, setCount] = useState(0);

  const steps = useMemo(() => {
    const duration = 1200;
    const intervalTime = 15;
    const tickCount = duration / intervalTime;
    const increment = 100 / tickCount;
    return { duration, intervalTime, tickCount, increment };
  }, []);

  useEffect(() => {
    let current = 0;
    const timer = setInterval(() => {
      current += steps.increment;

      if (current >= 100) {
        setCount(100);
        clearInterval(timer);
        setTimeout(() => {
          onComplete();
        }, 400);
        return;
      }

      setCount(Math.floor(current));
    }, steps.intervalTime);

    return () => clearInterval(timer);
  }, [onComplete, steps.intervalTime, steps.increment]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{
        y: '-100vh',
        transition: { duration: 1.0, ease: [0.76, 0, 0.24, 1] },
      }}
      className="fixed inset-0 bg-darkBg flex flex-col justify-between p-6 md:p-16 z-[99999] overflow-hidden"
    >
      {/* Background Animated Ironman Visual - UPDATED for better mobile positioning and text legibility */}
      <div className="absolute right-0 md:right-16 left-0 md:left-auto top-1/2 md:top-1/2 -translate-y-[45%] md:translate-y-[-50%] w-full md:w-auto h-[70vh] md:h-[85vh] max-h-[700px] pointer-events-none z-0 flex items-center justify-center md:justify-end px-4">
        <motion.div
          style={{
            scale: count / 100,
            // Lowers visibility slightly on mobile screens to ensure sharp text contrast
            opacity: count / 100 * (typeof window !== 'undefined' && window.innerWidth < 768 ? 0.45 : 0.8),
          }}
          className="relative w-[280px] sm:w-[320px] md:w-[450px] h-full"
        >
          <Image
            src={ironman3}
            alt="Ironman Loader Visual"
            fill
            sizes="(max-width: 768px) 280px, 450px"
            priority
            className="object-contain filter drop-shadow-[0_0_40px_rgba(208,0,0,0.3)]"
          />
          {/* Subtle vignette layer to ensure your text pops over the graphic on small layouts */}
          <div className="absolute inset-0 bg-gradient-to-r from-darkBg/80 via-transparent to-transparent md:hidden" />
        </motion.div>
      </div>

      <div className="relative z-10 flex justify-between items-center text-xs md:text-sm font-semibold uppercase tracking-wider text-secondaryText">
        <span>{profile.fullName}</span>
      </div>

      {/* Main Text Content Block */}
      <div className="relative z-10 flex flex-col mt-auto mb-auto md:my-0">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight font-display text-white mb-3 uppercase leading-[1.15] md:leading-tight">
          Full Stack <br />
          <span className="text-accentNeon text-glow">MERN Developer</span>
        </h1>
        <p className="text-secondaryText text-xs sm:text-sm md:text-base font-light max-w-xs md:max-w-md leading-relaxed">
          {profile.shortIntro}
        </p>
      </div>

      {/* Loading Progress Bar */}
      <div className="relative z-10 flex flex-col w-full gap-2">
        <div className="w-full md:w-1/2 bg-white/5 h-[2px] relative overflow-hidden rounded-full">
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: count / 100 }}
            style={{ originX: 0 }}
            className="absolute inset-0 bg-accentNeon"
          />
        </div>
        {/* Optional HUD percentage read-out to fill the gap */}
        <span className="text-[10px] font-mono text-accentNeon tracking-widest">
          SYS_LOAD // {count}%
        </span>
      </div>
    </motion.div>
  );
}
