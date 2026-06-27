'use client';

import React, { useState } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import ironman2 from "@/assets/ironman2.png";

export function About() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { scrollYProgress } = useScroll();
  const yParallax = useTransform(scrollYProgress, [0, 1], [-30, 30]);

  const skills = [
    { name: "SOFTWARE DEVELOPER", level: "80%" },
    { name: "FULL STACK DEVELOPER", level: "65%" },
    { name: "AI ENTHUSIAST", level: "85%" },
    { name: "TECH EXPLORER", level: "75%" },

  ];
  return (
    <>
      <section id="about" className="pt-[120px] pb-[120px] bg-brand-sec-bg border-t border-brand-border/10">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 w-full">

          {/* Section Header */}
          <div className="flex flex-col text-left mb-10">
            <span className="section-label text-brand-accent text-[50px]">OPERATOR</span>
          </div>

          {/* Content Area */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center mt-[40px]">

            {/* Left Column: Portrait Image */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-5 relative group h-[480px] overflow-hidden border border-brand-border/20 rounded-sm shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
            >
              <div className="absolute inset-0 bg-brand-accent/25 z-10 pointer-events-none mix-blend-color" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10" />

              <motion.div
                style={{ y: yParallax }}
                className="w-full h-[125%] -top-[12.5%] absolute"
              >
                <Image
                  src={ironman2}
                  alt="Basavaprabhu Kudenatti Portrait"
                  fill
                  sizes="(max-w-768px) 100vw, 40vw"
                  className="object-cover object-[center_85%] transition-transform duration-300 hover:scale-105"
                />
              </motion.div>
            </motion.div>

            {/* Right Column: Content Column */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-8 items-center text-left"
            >
              {/* Bio Narrative */}
              <div className="flex flex-col gap-4 justify-between h-full">
                <div className="space-y-4">
                  <motion.h3
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="font-display font-extrabold text-1xl text-white underline decoration-red-600 decoration-2 underline-offset-4"
                  >
                    ABOUT OPERATOR
                  </motion.h3>
                  <motion.p
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="text-brand-text-sec text-xs sm:text-sm leading-relaxed font-semibold"
                  >
                    I'm Basavaprabhu Kudenatti, a Computer Science student at BMS institute of tachnology & management.
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="text-brand-text-sec text-xs sm:text-sm leading-relaxed font-semibold"
                  >
                    Interested in building real-world web applications.
                    I build modern, scalable and user-friendly applications with clean code.
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="text-brand-text-sec text-xs sm:text-sm leading-relaxed font-semibold"
                  >
                    Currently exploring AI and its applications in web development while continuously strengthening my programming skills through hands-on projects.
                  </motion.p>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="mt-6"
                >
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="inline-block text-xs font-bold tracking-widest text-white px-8 py-4 border border-brand-border hover:border-brand-accent hover:shadow-[0_0_15px_rgba(208,0,0,0.25)] transition-all duration-300 rounded-sm uppercase cursor-pointer bg-transparent"
                  >
                    KNOW MORE
                  </button>
                </motion.div>
              </div>

              {/* Skill Bars */}
              <div className="flex flex-col gap-6 bg-black/20 p-6 border border-brand-border/5 rounded-sm justify-center">
                {skills.map((skill) => (
                  <div key={skill.name} className="flex flex-col gap-2">
                    <span className="text-[9px] font-bold tracking-[0.15em] text-brand-text-sec uppercase">
                      {skill.name}
                    </span>
                    <div className="w-full h-[3px] bg-white/10 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: skill.level }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, delay: 0.4 }}
                        className="h-full bg-brand-accent shadow-[0_0_4px_#D00000]"
                      />
                    </div>
                  </div>
                ))}
              </div>

            </motion.div>

          </div>

        </div>
      </section>

      {/* Philosophy Modal Overlay */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-black/85 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="bg-[#000000] border border-brand-border/20 w-full max-w-2xl rounded-3xl shadow-2xl relative z-10 max-h-[70vh] p-8 sm:p-10 flex flex-col text-left overflow-hidden"
            >
              {/* Absolute Close Button */}
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-6 right-6 w-8 h-8 rounded-full bg-white/5 hover:bg-brand-accent hover:text-white flex items-center justify-center transition-all duration-300 cursor-pointer z-20"
                aria-label="Close details modal"
              >
                <svg className="w-4 h-4 stroke-current" viewBox="0 0 24 24" fill="none">
                  <path d="M18 6L6 18M6 6l12 12" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>

              {/* Title Header (Outside of blending overlay) */}
              <div className="mb-6 z-20">
                <h3 className="font-display font-black text-xl text-white">MY PROFILE</h3>
                <p className="text-[10px] font-bold text-brand-accent tracking-widest uppercase mt-0.5">Basavaprabhu Kudenatti</p>
              </div>

              {/* Scrollable Text Wrapper with Blend Overlay */}
              <div className="relative overflow-hidden flex-1 z-10 pr-2 bg-[#000000] isolate">

                {/* Scrollable Container */}
                <div className="overflow-y-auto max-h-[38vh] pr-6 scrollbar-thin relative pb-4">
                  {/* Content Text (White) */}
                  <div className="space-y-5 font-mono text-xs sm:text-sm leading-relaxed text-white">
                    <p>
                      I am an MCA student at BMS Institute of Technology & Management with a strong interest in Java Development, Database Management, and Full Stack Web Development.
                    </p>
                    <p>
                      I enjoy building projects that solve real-world problems and help improve user experience. My current technical skills include Java, MySQL, MongoDB, JavaScript, React, HTML, CSS, and basic MERN stack development.
                    </p>
                    <div className="space-y-2">
                      <p className="text-bold">I have worked on projects such as:</p>
                      <ul className="list-disc pl-5 space-y-2 text-white">
                        <li>
                          <strong className="text-white font-normal">Bus Management System</strong> – designed to help students access bus-related information efficiently
                        </li>
                        <li>
                          <strong className="text-white font-normal">Pixabay Image Gallery</strong> – a MERN-based API integration project
                        </li>
                        <li>
                          <strong className="text-white font-normal">TheSaviour (ongoing)</strong> – a community-based disaster support platform focused on quick help and essential services
                        </li>
                      </ul>
                    </div>
                    <p>
                      Apart from technical development, I have also taken leadership responsibilities during my BCA by organizing NeoCodex, a coding event, and contributing as an organizer in multiple college events.
                    </p>
                    <p>
                      Currently, I am improving my problem-solving skills through LeetCode and strengthening my understanding of DSA, databases, and backend development.
                    </p>
                    <p>
                      I am open to internship and full-time opportunities where I can learn, contribute, and grow as a software developer.
                    </p>
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
