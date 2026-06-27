'use client';

import React from 'react';

// Fetches the dynamic skills collection from your central portfolio config module
import { skillsData } from '../constants/portfolioData';

export function Skills() {
  // Map and normalize category identifiers to your precise HUD system headers
  const categoryTitleMap: Record<string, string> = {
    languages: 'LANGUAGES MODULE',
    frontend: 'FRONTEND MODULE',
    backend: 'BACKEND MODULE',
    devops: 'TOOLS & CONCEPTS',
  };

  // Dynamically group the skills array by category attributes
  const groupedModules = skillsData.reduce((acc, skill) => {
    const rawCategory = skill.category || 'devops';
    const mappedTitle = categoryTitleMap[rawCategory] || 'SYSTEM CORE';
    
    let existingModule = acc.find((m) => m.title === mappedTitle);
    
    if (!existingModule) {
      existingModule = { title: mappedTitle, skills: [] };
      acc.push(existingModule);
    }
    
    existingModule.skills.push(skill.name);
    return acc;
  }, [] as { title: string; skills: string[] }[]);

  // Safely sort columns or pad default items if needed to match the grid width balance
  const displayModules = groupedModules.sort((a, b) => {
    const order = ['LANGUAGES MODULE', 'FRONTEND MODULE', 'BACKEND MODULE', 'TOOLS & CONCEPTS'];
    return order.indexOf(a.title) - order.indexOf(b.title);
  });

  return (
    <section
      id="skills"
      className="py-28 relative overflow-hidden select-none px-[50px] flex justify-center w-full"
      style={{
        backgroundColor: '#0A0A0A', 
        borderTop: '2px solid rgba(255, 255, 255, 0.12)',
      }}
    >
      <style dangerouslySetInnerHTML={{ __html: `
        .hud-panel-white-bold {
          position: relative;
          background: #141414; 
          border: 2px solid rgba(255, 255, 255, 0.22); 
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s ease;
        }
        .hud-panel-white-bold:hover {
          box-shadow: 0 20px 40px rgba(255, 255, 255, 0.04);
          transform: translateY(-6px); 
        }
        .hud-panel-white-bold::before, .hud-panel-white-bold::after {
          content: '';
          position: absolute;
          width: 8px;
          height: 8px;
          border-color: rgba(255, 255, 255, 0.4);
          border-style: solid;
          pointer-events: none;
        }
        .hud-panel-white-bold::before { top: -2px; left: -2px; border-width: 2px 0 0 2px; }
        .hud-panel-white-bold::after { bottom: -2px; right: -2px; border-width: 0 2px 2px 0; }
      `}} />

      <div className="w-full max-w-7xl mx-auto relative z-10 flex flex-col">
        
        {/* Exact Replica of Header UI */}
        <div className="w-full flex justify-between items-baseline mb-4 border-b pb-2.5" style={{ borderColor: 'rgba(255, 255, 255, 0.1)' }}>
          <span className="text-[18px] font-mono uppercase font-bold tracking-[0.35em]" style={{ color: '#A0A0A0' }}>
            CORE MODULES
          </span>
          <span className="text-[13px] font-mono uppercase font-black tracking-[0.35em]" style={{ color: '#D00000' }}>
            TECH STACK // SYS_ACTIVE
          </span>
        </div>

        {/* Scaled Up Bold Structural Header */}
        <h2 className="text-6xl md:text-5xl font-black tracking-widest text-white uppercase mb-12 font-mono">
          CORE SYSTEMS
        </h2>

        {/* Highly Spaced Dynamic Module Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full">
          {displayModules.map((module, index) => (
            <div key={index} className="hud-panel-white-bold p-7 flex flex-col justify-between min-h-[380px] rounded-none">
              <div>
                <div className="flex items-center justify-between mb-8">
                  <div className="w-5 h-5 border flex items-center justify-center" style={{ borderColor: 'rgba(255, 255, 255, 0.25)', background: 'rgba(255, 255, 255, 0.02)' }}>
                    <div className="w-1.5 h-1.5" style={{ backgroundColor: '#D00000' }} />
                  </div>
                  <span className="text-[9px] font-mono font-bold opacity-40" style={{ color: '#A0A0A0' }}>0{index + 1} // SYS</span>
                </div>

                <h3 className="text-[13px] font-mono font-bold tracking-[0.15em] text-white mb-6 pb-2.5 border-b" style={{ borderColor: 'rgba(255, 255, 255, 0.1)' }}>
                  {module.title}
                </h3>

                <ul className="space-y-4">
                  {module.skills.map((skill, sIdx) => (
                    <li key={sIdx} className="text-[14px] font-mono flex items-center gap-3 transition-colors duration-200 cursor-default" style={{ color: '#A0A0A0' }}>
                      <span className="w-1 h-1 shrink-0 rounded-full" style={{ backgroundColor: '#D00000' }} />
                      <span className="hover:text-white transition-colors truncate">{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 pt-3.5 flex justify-between items-center text-[9px] font-mono border-t" style={{ borderColor: 'rgba(255, 255, 255, 0.06)', color: 'rgba(255, 255, 255, 0.2)' }}>
                <span>SYS_VER_6.2</span>
                <span>STATUS_OK</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}