'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { projectsData, profile } from '../constants/portfolioData';

function ProjectCard({ project, index }) {
  const [isHovered, setIsHovered] = useState(false);

  const getStatus = () => {
    if (index === 0) return 'ACTIVE_DEV';
    return 'DEPLOYED_SYS';
  };

  const getMark = () => {
    if (index === 0) return 'MK - I';
    if (index === 1) return 'MK - II';
    return 'MK - III';
  };

  return (
    <motion.div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      className="group relative hud-panel-white-bold p-7 flex flex-col justify-between min-h-[580px] h-full rounded-none"
    >
      {/* Corner L-Ticks for Sci-fi/Cyber design */}
      <div className="absolute top-0 left-0 w-2.5 h-2.5 border-t border-l border-red-400/50 transition-colors duration-300 group-hover:border-yellow-400" />
      <div className="absolute top-0 right-0 w-2.5 h-2.5 border-t border-r border-red-400/50 transition-colors duration-300 group-hover:border-yellow-400" />
      <div className="absolute bottom-0 left-0 w-2.5 h-2.5 border-b border-l border-red-400/50 transition-colors duration-300 group-hover:border-yellow-400" />
      <div className="absolute bottom-0 right-0 w-2.5 h-2.5 border-b border-r border-red-400/50 transition-colors duration-300 group-hover:border-yellow-400" />

      <div className="space-y-6">
        {/* Project Image */}
        <div className="relative w-full aspect-video overflow-hidden rounded-none border border-white/10 bg-brand-card">
          {project.image && (
            <div className="absolute inset-0 w-full h-full transition-all duration-700 group-hover:scale-[1.02]">
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 768px) 100vw, 400px"
                className="object-cover"
                priority={index === 0}
              />
            </div>
          )}
        </div>

        <div className="space-y-4">
          {/* MK identifier */}
          <span className="block text-[10px] font-mono font-bold tracking-[0.2em] text-yellow-400">
            {getMark()}
          </span>

          <h3 className="text-[16px] font-mono font-bold tracking-wide text-white uppercase">{project.title}</h3>

          <p className="text-[13px] leading-relaxed text-neutral-300 min-h-[80px]">{project.description}</p>

          {/* Tech Stack tags */}
          {project.tags && project.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 pt-2">
              {project.tags.map((tag) => (
                <span key={tag} className="border border-white/10 px-2.5 py-1 text-[9px] font-mono uppercase text-neutral-300 bg-white/5 rounded-none">
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Action Buttons & Status */}
      <div className="space-y-6 mt-8">
        <div className="flex gap-4">
          <motion.a
            href={project.liveUrl || '#'}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="border border-white/10 bg-white/5 px-4 py-2.5 text-[11px] font-mono font-bold uppercase tracking-wider text-white hover:bg-accentNeon hover:text-black hover:border-yellow-400 transition-all duration-300 rounded-none cursor-pointer flex-1 text-center shadow-[0_4px_12px_rgba(0,0,0,0.3)]"
          >
            LIVE DEMO ↗
          </motion.a>
          <motion.a
            href={project.githubUrl || '#'}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="border border-white/10 bg-white/5 px-4 py-2.5 text-[11px] font-mono font-bold uppercase tracking-wider text-white hover:bg-accentNeon hover:text-black hover:border-yellow-400 transition-all duration-300 rounded-none cursor-pointer flex-1 text-center shadow-[0_4px_12px_rgba(0,0,0,0.3)]"
          >
            GITHUB
          </motion.a>
        </div>

        <div className="flex items-center justify-between border-t border-white/10 pt-4 text-[9px] font-mono tracking-wider text-neutral-500 uppercase">
          <span>STATUS // {getStatus()}</span>
        </div>
      </div>
    </motion.div>
  );
}

export function Projects() {
  return (
    <section
      id="projects"
      className="relative flex w-full justify-center bg-brand-bg overflow-hidden border-t border-white/5 py-20 md:py-24 lg:py-28"
    >
      <div className="absolute left-[-6rem] top-[-6rem] h-[26rem] w-[26rem] rounded-full bg-accentNeon/5 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-12 left-12 h-20 w-20 rounded-full border border-white/5 pointer-events-none" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 md:px-10 lg:px-12 flex flex-col">
        {/* Section Header */}
        <div className="mb-3 flex w-full items-baseline justify-between">
          <span className="block text-[11px] font-semibold uppercase tracking-[0.35em] text-yellow-400">
            Innovation Lab
          </span>
          <motion.a
            href={profile?.github || '#'}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="text-[10px] font-semibold tracking-[0.25em] text-neutral-400 hover:text-yellow-400 uppercase transition-colors"
          >
            VIEW ALL PROTOTYPES &gt;
          </motion.a>
        </div>

        <h2 className="mb-10 block text-3xl font-black uppercase tracking-[0.16em] text-white sm:text-4xl">
          PROTOTYPE LABORATORY
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projectsData?.map((project, idx) => (
            <div key={project.id} className="h-full">
              <ProjectCard project={project} index={idx} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
