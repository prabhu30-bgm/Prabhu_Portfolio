'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import ironman2 from '@/assets/ironman2.png';
import prabhu from '@/assets/prabhu.jpg';

export function About() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { scrollYProgress } = useScroll();
  const yParallax = useTransform(scrollYProgress, [0, 1], [-30, 30]);

  useEffect(() => {
    if (!isModalOpen) return undefined;

    const previousBodyOverflow = document.body.style.overflow;
    const previousHtmlOverflow = document.documentElement.style.overflow;

    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = previousBodyOverflow;
      document.documentElement.style.overflow = previousHtmlOverflow;
    };
  }, [isModalOpen]);

  const strengths = [
    { name: 'SOFTWARE DEVELOPER', value: '90%' },
    { name: 'FULL STACK DEVELOPER', value: '80%' },
    { name: 'AI ENTHUSIAST', value: '92%' },
    { name: 'TECH EXPLORER', value: '85%' },
  ];

  return (
    <>
      <section
        id="about"
        className="relative flex min-h-screen w-full items-center bg-brand-bg overflow-hidden py-20 md:py-24 lg:py-0"
      >
        <div className="absolute left-[-6rem] top-1/4 h-[28rem] w-[28rem] rounded-full bg-accentNeon/5 blur-[150px] pointer-events-none" />
        <div className="absolute bottom-8 right-8 h-24 w-24 rounded-full border border-white/5 pointer-events-none" />
        <div className="absolute left-12 top-12 h-16 w-16 rounded-full border border-white/5 pointer-events-none" />

        <div className="mx-auto w-full max-w-7xl px-6 md:px-10 lg:px-12 relative z-10">
          <div className="mb-16 text-left">
            <h2 className="text-3xl font-black uppercase tracking-[0.2em] text-yellow-400 sm:text-4xl">OPERATOR</h2>
          </div>

          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-20">
            <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="group relative h-[320px] overflow-hidden rounded-[32px] border border-white/10 bg-brand-card shadow-[0_24px_70px_rgba(0,0,0,0.6)] lg:col-span-5 lg:h-[460px]">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10 pointer-events-none" />

              <motion.div
                style={{ y: yParallax }}
                className="w-full h-[125%] -top-[12.5%] absolute"
              >
                {/* Default Image: Real Portrait */}
                <Image
                  src={ironman2}
                  alt="Basavaprabhu Kudenatti Portrait"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover object-[center_85%] transition-all duration-700 ease-in-out opacity-100 group-hover:opacity-0 group-hover:scale-105"
                />
                {/* Hover Image: Ironman Art */}
                <Image
                  src={prabhu}
                  alt="Ironman Art"
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover object-center transition-all duration-700 ease-in-out opacity-0 group-hover:opacity-100 group-hover:scale-105"
                />
              </motion.div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1 }} className="grid gap-6 lg:col-span-7 lg:grid-cols-[minmax(0,1.35fr)_minmax(260px,0.65fr)]">
              <div className="space-y-5">
                <div className="mb-2">
                  <span className="inline-block text-[11px] font-mono font-bold uppercase tracking-[0.25em] text-white border-b-2 border-yellow-400 pb-1">
                    ABOUT AN OPERATOR
                  </span>
                </div>

                <p className="text-[13px] leading-6 text-neutral-300 font-medium">
                  I'm Basavaprabhu Kudenatti, a Computer Science student at BMS institute of technology & management.
                </p>
                <p className="text-[13px] leading-6 text-neutral-300 font-medium">
                  Interested in building real-world web applications. I build modern, scalable and user-friendly applications with clean code.
                </p>
                <p className="text-[13px] leading-6 text-neutral-300 font-medium">
                  Currently exploring AI and its applications in web development while continuously strengthening my programming skills through hands-on projects.
                </p>

                <motion.button
                  suppressHydrationWarning
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setIsModalOpen(true)}
                  className="border border-white/10 bg-white/5 px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.3em] text-white transition hover:border-yellow-400 hover:bg-accentNeon hover:text-black rounded-sm cursor-pointer shadow-[0_4px_20px_rgba(0,0,0,0.3)]"
                >
                  KNOW MORE
                </motion.button>
              </div>

              <div className="h-fit self-start rounded-md border border-white/5 bg-brand-card/80 p-6 backdrop-blur-md lg:translate-x-10 shadow-[0_12px_40px_rgba(0,0,0,0.3)]">
                <div className="space-y-6">
                  {strengths.map((item) => (
                    <div key={item.name} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-mono font-bold tracking-wider text-neutral-300">{item.name}</span>
                      </div>
                      <div className="h-1.5 overflow-hidden bg-white/5 rounded-none border border-white/5">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: item.value }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.9 }}
                          className="h-full bg-gradient-to-r from-red-600 via-red-500 to-yellow-400 shadow-[0_0_10px_rgba(255,30,40,0.5)]"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setIsModalOpen(false)} className="absolute inset-0 bg-black/85 backdrop-blur-md" />

            <motion.div
              data-lenis-prevent
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-10 flex max-h-[70vh] w-full max-w-2xl flex-col overflow-hidden rounded-[28px] border border-white/10 bg-brand-card p-8 text-left shadow-[0_25px_80px_rgba(0,0,0,0.8)] sm:p-10"
            >
              <button onClick={() => setIsModalOpen(false)} className="absolute right-6 top-6 z-20 flex h-8 w-8 items-center justify-center rounded-full bg-white/10 transition hover:bg-[#ff1e27] hover:text-white text-white" aria-label="Close details modal">
                <svg className="h-4 w-4 stroke-current" viewBox="0 0 24 24" fill="none">
                  <path d="M18 6L6 18M6 6l12 12" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>

              <div className="mb-6 z-20">
                <h3 className="font-display text-xl font-black text-white">My Profile</h3>
                <p className="mt-0.5 text-[10px] font-bold uppercase tracking-[0.3em] text-yellow-400">Basavaprabhu Kudenatti</p>
              </div>

              <div className="relative z-10 flex-1 overflow-hidden pr-2 isolate">
                <div data-lenis-prevent className="max-h-[38vh] overscroll-contain overflow-y-auto pr-6 pb-4">
                  <div className="space-y-5 font-sans text-xs leading-relaxed text-red-100/90 sm:text-sm">
                    <p>I am an MCA student with a strong interest in Java development, database systems, and full stack web development.</p>
                    <p>I enjoy building projects that solve real-world problems and improve the broader user experience. My current technical skills include Java, MySQL, MongoDB, JavaScript, React, HTML, CSS, and basic MERN stack development.</p>
                    <div className="space-y-2">
                      <p className="font-semibold text-white">Projects I've worked on include:</p>
                      <ul className="list-disc space-y-2 pl-5 text-red-100/90">
                        <li><strong className="font-semibold text-white">Bus Management System</strong> – a system for simplifying bus-related access for students.</li>
                        <li><strong className="font-semibold text-white">Pixabay Image Gallery</strong> – a MERN-style API integration app.</li>
                        <li><strong className="font-semibold text-white">TheSaviour</strong> – an ongoing community-based disaster support platform.</li>
                      </ul>
                    </div>
                    <p>Outside of technical work, I've also taken part in organizing coding events and college initiatives, which strengthened my communication and leadership skills.</p>
                    <p>I'm currently growing through LeetCode practice, DSA, backend fundamentals, and hands-on project building.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
