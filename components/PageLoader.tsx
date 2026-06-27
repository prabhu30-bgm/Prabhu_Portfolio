'use client';

import React, { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

import { profile } from '@/constants/portfolioData';
import ironman3 from '@/assets/ironman3.png';

interface PageLoaderProps {
  onComplete: () => void;
}

export function PageLoader({ onComplete }: PageLoaderProps) {
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
      className="fixed inset-0 bg-darkBg flex flex-col justify-between p-8 md:p-16 z-[99999] overflow-hidden"
    >
      {/* Background Animated Ironman Visual */}
      <div className="absolute right-4 md:right-16 top-1/2 -translate-y-1/2 w-auto h-[85vh] max-h-[700px] pointer-events-none z-0 flex items-center">
        <motion.div
          style={{
            scale: count / 100,
            opacity: (count / 100) * 0.8,
          }}
          className="relative w-[300px] md:w-[450px] h-[85vh] max-h-[700px]"
        >
          <Image
            src={ironman3}
            alt="Ironman Loader Visual"
            fill
            sizes="(max-w-768px) 300px, 450px"
            priority
            className="object-contain filter drop-shadow-[0_0_40px_rgba(208,0,0,0.3)]"
          />
        </motion.div>
      </div>

      <div className="relative z-10 flex justify-between items-center text-sm font-semibold uppercase tracking-wider text-secondaryText">
        <span>{profile.fullName}</span>
      </div>

      <div className="relative z-10 flex flex-col">
        <h1 className="text-4xl md:text-7xl font-bold tracking-tight font-display text-white mb-2 uppercase leading-tight">
          Full Stack <br />
          <span className="text-accentNeon text-glow">MERN Developer</span>
        </h1>
        <p className="text-secondaryText text-sm md:text-base font-light max-w-md">
          {profile.shortIntro}
        </p>
      </div>

      <div className="relative z-10 flex items-center justify-start w-full">
        <div className="w-full md:w-1/2 bg-white/5 h-[2px] relative overflow-hidden rounded-full mb-4">
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: count / 100 }}
            style={{ originX: 0 }}
            className="absolute inset-0 bg-accentNeon"
          />
        </div>
      </div>
    </motion.div>
  );
}
