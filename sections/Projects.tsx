'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

// Fetches variables directly from your local portfolio data file
import { projectsData, profile } from '../constants/portfolioData';

export function PrototypeButton() {
  return (
    <motion.button
      whileHover={{ scale: 1.01, borderColor: '#FFFFFF', color: '#ffffff' }}
      whileTap={{ scale: 0.99 }}
      className="border bg-transparent text-[10px] tracking-[0.25em] font-mono font-bold py-3.5 px-7 uppercase flex items-center gap-2 cursor-pointer transition-all duration-300 rounded-none relative overflow-hidden"
      style={{ borderColor: 'rgba(255, 255, 255, 0.25)', color: '#A0A0A0' }}
    >
      <div className="absolute top-0 left-0 w-1.5 h-1.5 border-t border-l border-white/60" />
      <div className="absolute top-0 right-0 w-1.5 h-1.5 border-t border-r border-white/60" />
      <div className="absolute bottom-0 left-0 w-1.5 h-1.5 border-b border-l border-white/60" />
      <div className="absolute bottom-0 right-0 w-1.5 h-1.5 border-b border-r border-white/60" />
      VIEW ALL PROTOTYPES &gt;
    </motion.button>
  );
}

interface ProjectImagePlaceholderProps {
  isHovered: boolean;
  imageSrc: string | null;
  projectTitle: string;
}

export function ProjectImagePlaceholder({ isHovered, imageSrc, projectTitle }: ProjectImagePlaceholderProps) {
  return (
    /* FIXED: Changed w-screen h-screen back to w-full aspect-video so it scales properly inside the card */
    <div className="relative w-full aspect-video border bg-black/40 overflow-hidden flex flex-col items-center justify-center select-none transition-colors duration-300" style={{ borderColor: 'rgba(255, 255, 255, 0.15)' }}>
      {imageSrc ? (
        /* Removed grayscale and opacity constraints to restore full, original asset rendering color */
        <div className="absolute inset-0 w-full h-full transition-all duration-700 group-hover:scale-[1.02] p-2">
          {/* FIXED: Changed object-fill to object-cover to prevent the image from looking stretched */}
          <Image src={imageSrc} alt={projectTitle} fill sizes="(max-width: 768px) 100vw, 400px" className="object-cover" priority />
        </div>
      ) : (
        <div className="z-10 text-center px-4 font-mono">
          <p className="text-[10px] tracking-widest uppercase font-bold text-white/80 mb-0.5">IMAGE BOX</p>
          <p className="text-[8px] tracking-wider opacity-40" style={{ color: '#A0A0A0' }}>(PROJECT PREVIEW)</p>
        </div>
      )}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none" />
    </div>
  );
}

export function ProjectCard({ project, index }: { project: typeof projectsData[0]; index: number }) {
  const [isHovered, setIsHovered] = useState(false);
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsHovered(true);
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left - rect.width / 2) / rect.width) * 5;
    const y = ((e.clientY - rect.top - rect.height / 2) / rect.height) * 5;
    setCoords({ x, y });
  };

  const mkNumberDesignation = `MK - ${['I', 'II', 'III', 'IV', 'V'][index] || 'X'}`;

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={() => { setIsHovered(false); setCoords({ x: 0, y: 0 }); }}
      className="relative p-8 flex flex-col justify-between cursor-pointer select-none rounded-none transition-all duration-500 ease-out h-full w-full group"
      style={{
        background: '#141414',
        borderColor: 'rgba(255, 255, 255, 0.25)',
        borderWidth: '2px',
        boxShadow: isHovered ? '0 20px 45px rgba(255, 255, 255, 0.04)' : 'none',
        transform: isHovered ? 'translateY(-6px)' : 'none'
      }}
    >
      <div className="absolute top-0 left-0 w-3 h-3 border-t border-l" style={{ borderColor: 'rgba(255, 255, 255, 0.5)' }} />
      <div className="absolute top-0 right-0 w-3 h-3 border-t border-r" style={{ borderColor: 'rgba(255, 255, 255, 0.5)' }} />
      <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l" style={{ borderColor: 'rgba(255, 255, 255, 0.5)' }} />
      <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r" style={{ borderColor: 'rgba(255, 255, 255, 0.5)' }} />

      {/* FIXED: Removed aspect-[3/4.5] from this wrapper, as it fought against items-stretch in the parent grid layout */}
      <motion.div animate={{ x: coords.x, y: coords.y }} transition={{ type: 'spring', stiffness: 220, damping: 28 }} className="flex flex-col justify-between h-full w-full">
        <div>
          <ProjectImagePlaceholder isHovered={isHovered} imageSrc={project.image || null} projectTitle={project.title} />

          <div className="flex flex-col text-left mt-8 font-mono">
            <span className="text-xs font-bold tracking-[0.2em] block" style={{ color: '#D00000' }}>
              {mkNumberDesignation}
            </span>
            <h3 className="text-lg md:text-xl font-bold text-white uppercase tracking-wide leading-snug truncate mt-1.5">{project.title}</h3>
            <p className="text-[13px] leading-relaxed tracking-wide font-sans mt-3" style={{ color: '#A0A0A0' }}>{project.description}</p>

            {project.tags && project.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-4">
                {project.tags.map((tag) => (
                  <span key={tag} className="text-[9px] border border-white/10 px-2 py-0.5 text-white/50 tracking-wider uppercase">
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="mt-8">
          <div className="grid grid-cols-2 gap-4 mb-5 font-mono">
            <style dangerouslySetInnerHTML={{
              __html: `
              .hud-btn-action {
                position: relative;
                text-align: center;
                padding-top: 0.65rem;
                padding-bottom: 0.65rem;
                font-size: 11px;
                font-weight: 700;
                letter-spacing: 0.05em;
                text-transform: uppercase;
                border: 2px solid rgba(255, 255, 255, 0.25);
                color: #FFFFFF;
                transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
              }
              .hud-btn-action:hover {
                border-color: #FF1A1A;
                color: #FF1A1A;
                box-shadow: 0 0 12px rgba(255, 26, 26, 0.2);
              }
            `}} />

            <a href={project.liveUrl || '#'} className="hud-btn-action flex items-center justify-center gap-1.5">
              <div className="absolute top-0 left-0 w-1 h-1 border-t border-l border-white/30" />
              LIVE DEMO <span className="text-[12px] leading-none transform translate-y-[-0.5px]">↗</span>
            </a>

            <a href={project.githubUrl || '#'} className="hud-btn-action flex items-center justify-center">
              <div className="absolute top-0 left-0 w-1 h-1 border-t border-l border-white/30" />
              GITHUB
            </a>
          </div>

          <div className="w-full h-[1px]" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }} />
          <div className="text-[10px] font-bold tracking-[0.2em] mt-3 font-mono">
            <span style={{ color: isHovered ? '#FFFFFF' : '#A0A0A0' }}>
              STATUS // {project.period && project.period.includes('Present') ? 'ACTIVE_DEV' : 'DEPLOYED_SYS'}
            </span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function Projects() {
  return (
    <section
      id="projects"
      className="py-24 relative overflow-hidden select-none px-4 md:px-[50px] flex justify-center w-full"
      style={{
        backgroundColor: '#0A0A0A',
        borderTop: '2px solid rgba(255, 255, 255, 0.15)'
      }}
    >
      <div className="w-full max-w-7xl mx-auto relative z-10 flex flex-col">

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 relative">
          <div className="flex flex-col items-start text-left font-mono">
            <span className="text-[10px] tracking-[0.25em] font-bold block" style={{ color: '#D00000' }}>INNOVATION LAB</span>
            <h2 className="text-3xl font-black text-white uppercase tracking-wider mt-3 leading-tight">
              PROTOTYPE LABORATORY
            </h2>
          </div>

          <div className="flex shrink-0 self-start md:self-auto">
            <a href={profile?.github || '#'} target="_blank" rel="noopener noreferrer">
              <PrototypeButton />
            </a>
          </div>
        </div>

        <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory w-full pb-8 scrollbar-thin scroll-smooth items-stretch">
          {projectsData?.map((project, idx) => (
            <div key={project.id} className="flex-shrink-0 w-[88vw] sm:w-[450px] lg:w-[480px] snap-center h-auto">
              <ProjectCard project={project} index={idx} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}