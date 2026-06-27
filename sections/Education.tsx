'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
    Briefcase,
    CheckCircle,
    Calendar,
    GraduationCap,
} from 'lucide-react';

import { useFetch } from '@/hooks/useFetch';
import { timelineData } from '@/constants/portfolioData';
import type { ITimeline } from '@/models/Timeline';

export function EducationInternship() {
    const { data: timeline } = useFetch<ITimeline[]>('/api/timeline', timelineData);
    const [activeTab, setActiveTab] = useState<'experience' | 'education'>('experience');

    // 1. Defensively guarantee we always have an array structure to prevent rendering crashes
    const displayTimeline = Array.isArray(timeline) && timeline.length > 0 ? timeline : (timelineData || []);

    // 2. Safely map dataset items to relocate the SQL Certificate with optional chaining checks
    const processedTimeline = displayTimeline.map((item) => {
        if (item && item.id === 'cert-1') {
            return { ...item, type: 'experience' as const };
        }
        return item;
    });

    // 3. Filter entries smoothly by active tab selection with lowercase sanitization
    const filteredTimeline = processedTimeline.filter((item: ITimeline) => {
        if (!item || !item.type) return false;
        
        const itemType = item.type.toLowerCase().trim();
        const currentTab = activeTab.toLowerCase().trim();

        if (currentTab === 'experience') {
            return itemType === 'experience' || itemType === 'internship';
        }
        
        return itemType === currentTab;
    });

    return (
        <section
            id="education"
            className="py-24 relative block select-none px-[50px] w-full min-h-screen"
            style={{
                backgroundColor: '#0A0A0A',
                borderTop: '2px solid rgba(255, 255, 255, 0.08)',
            }}
        >
            <div className="w-full max-w-7xl mx-auto relative z-10 flex flex-col h-auto overflow-visible">

                {/* Section Header */}
                <div className="w-full flex justify-between items-baseline mb-4 border-b pb-2" style={{ borderColor: 'rgba(255, 255, 255, 0.08)' }}>
                    <span className="text-[10px] font-mono uppercase font-bold tracking-[0.3em] block" style={{ color: '#A0A0A0' }}>
                        JOURNEY Telemetry
                    </span>
                    <span className="text-[10px] font-mono uppercase font-bold tracking-[0.3em] block" style={{ color: '#D00000' }}>
                        TIMELINE // SYSTEM_ONLINE
                    </span>
                </div>

                <h2 className="text-3xl font-black tracking-wider uppercase mb-12 font-mono block" style={{ color: '#FFFFFF' }}>
                    EDUCATION & EXPERIENCE
                </h2>

                {/* Switcher Tab Header */}
                <div
                    className="flex p-1 rounded-full w-full max-w-xs mb-16 relative isolate"
                    style={{ backgroundColor: '#141414', border: '1px solid rgba(255, 255, 255, 0.15)' }}
                >
                    <button
                        type="button"
                        onClick={() => setActiveTab('experience')}
                        className="flex-1 flex items-center justify-center gap-2 py-2.5 px-5 rounded-full text-[11px] font-sans font-bold uppercase tracking-wider transition-all duration-300 relative z-10 bg-transparent cursor-pointer"
                        style={{ color: activeTab === 'experience' ? '#FFFFFF' : '#A0A0A0' }}
                    >
                        {activeTab === 'experience' && (
                            <motion.div
                                layoutId="timelineTabBG"
                                className="absolute inset-0 rounded-full -z-10"
                                style={{ backgroundColor: '#D00000' }}
                                transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                            />
                        )}
                        <Briefcase size={13} style={{ color: 'inherit' }} />
                        INTERNSHIP
                    </button>

                    <button
                        type="button"
                        onClick={() => setActiveTab('education')}
                        className="flex-1 flex items-center justify-center gap-2 py-2.5 px-5 rounded-full text-[11px] font-sans font-bold uppercase tracking-wider transition-all duration-300 relative z-10 bg-transparent cursor-pointer"
                        style={{ color: activeTab === 'education' ? '#FFFFFF' : '#A0A0A0' }}
                    >
                        {activeTab === 'education' && (
                            <motion.div
                                layoutId="timelineTabBG"
                                className="absolute inset-0 rounded-full -z-10"
                                style={{ backgroundColor: '#D00000' }}
                                transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                            />
                        )}
                        <GraduationCap size={13} style={{ color: 'inherit' }} />
                        EDUCATION
                    </button>
                </div>

                {/* Timeline Main Display */}
                <div className="relative pl-12 ml-2 flex flex-col gap-14 h-auto w-full overflow-visible">
                    {/* Background Static Track Line */}
                    <div className="absolute left-[3px] top-4 bottom-4 w-[1px]" style={{ backgroundColor: 'rgba(255, 255, 255, 0.15)' }} />

                    {filteredTimeline.map((item) => (
                        <div
                            key={item.id}
                            className="relative w-full flex flex-col items-start h-auto overflow-visible clear-both block"
                        >
                            {/* Concentric Node Ring */}
                            <div
                                className="absolute -left-[57px] top-1 w-6 h-6 rounded-full flex items-center justify-center bg-[#0A0A0A] border-[3px]"
                                style={{ borderColor: '#2563EB' }}
                            >
                                <div className="w-2.5 h-2.5 rounded-full bg-[#D00000]" />
                            </div>

                            {/* Info Block Wrapper split header */}
                            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 w-full mb-4">
                                <div className="text-left block">
                                    <h3 className="text-xl font-bold tracking-wide font-sans block" style={{ color: '#FFFFFF' }}>
                                        {item.title}
                                    </h3>
                                    {item.subtitle ? (
                                        <p className="text-[13px] font-sans font-semibold mt-1 block" style={{ color: '#A0A0A0' }}>
                                            {item.subtitle}
                                        </p>
                                    ) : null}
                                    <p className="text-[14px] font-sans font-semibold mt-1 block" style={{ color: '#E11D48' }}>
                                        {item.organization}
                                    </p>
                                </div>

                                {/* Calendar Period Capsule */}
                                <span
                                    className="inline-flex items-center gap-2 text-[11px] font-sans px-3 py-1 rounded-md border shrink-0 w-fit md:self-start opacity-100"
                                    style={{ backgroundColor: '#141414', borderColor: 'rgba(255, 255, 255, 0.15)', color: '#D0D0D0' }}
                                >
                                    <Calendar size={12} style={{ color: '#A0A0A0' }} />
                                    {item.period}
                                </span>
                            </div>

                            {/* Descriptors Description Stack List */}
                            <ul className="flex flex-col gap-2.5 text-[14px] font-sans text-left pl-0 w-full block list-none m-0">
                                {Array.isArray(item.description) && item.description.map((desc: string, dIdx: number) => (
                                    <li
                                        key={dIdx}
                                        className="flex items-start gap-2.5 m-0 p-0 block"
                                        style={{ color: '#D0D0D0' }}
                                    >
                                        <CheckCircle
                                            size={14}
                                            className="mt-1 shrink-0 block"
                                            style={{ color: '#E11D48' }}
                                        />
                                        <span className="leading-relaxed font-sans block text-left" style={{ color: '#CCCCCC' }}>
                                            {desc}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}