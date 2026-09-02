'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
    Briefcase,
    CheckCircle,
    Calendar,
    GraduationCap,
} from 'lucide-react';

import { timelineData } from '@/constants/portfolioData';

export function EducationInternship() {
    const [activeTab, setActiveTab] = useState('experience');

    // 1. Defensively guarantee we always have an array structure to prevent rendering crashes
    const displayTimeline = Array.isArray(timelineData) ? timelineData : [];

    // 2. Safely map dataset items to relocate the SQL Certificate with optional chaining checks
    const processedTimeline = displayTimeline.map((item) => {
        if (item && (item.id === 'cert-1' || item.id === 'cert-2')) {
            return { ...item, type: 'experience' };
        }
        return item;
    });

    // 3. Filter entries smoothly by active tab selection with lowercase sanitization
    const filteredTimeline = processedTimeline.filter((item) => {
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
            className="relative flex w-full justify-center bg-brand-bg overflow-hidden border-t border-white/5 py-20 md:py-24 lg:py-28"
        >
            <div className="absolute right-[-6rem] top-[-6rem] h-[26rem] w-[26rem] rounded-full bg-accentNeon/5 blur-[130px] pointer-events-none" />
            <div className="absolute top-12 left-12 h-20 w-20 rounded-full border border-white/5 pointer-events-none" />

            <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col overflow-visible px-6 md:px-10 lg:px-12">

                {/* Section Header */}
                <div className="mb-3 flex w-full items-baseline justify-between">
                    <span className="block text-[11px] font-semibold uppercase tracking-[0.35em] text-yellow-400">
                        Experience
                    </span>
                    <span className="hidden text-[10px] font-semibold uppercase tracking-[0.28em] text-neutral-400 sm:block">
                        Career timeline
                    </span>
                </div>

                <h2 className="mb-10 block text-3xl font-black uppercase tracking-[0.16em] text-white sm:text-4xl">
                    EDUCATION & EXPERIENCE
                </h2>

                {/* Switcher Tab Header */}
                <div
                    className="relative isolate mb-14 flex w-full max-w-xs rounded-full p-1 bg-brand-card border border-white/10"
                >
                    <button
                        suppressHydrationWarning
                        type="button"
                        onClick={() => setActiveTab('experience')}
                        className="flex-1 flex items-center justify-center gap-2 py-2.5 px-5 rounded-full text-[11px] font-sans font-bold uppercase tracking-wider transition-all duration-300 relative z-10 bg-transparent cursor-pointer"
                        style={{ color: activeTab === 'experience' ? '#FFFFFF' : '#A0A0A0' }}
                    >
                        {activeTab === 'experience' && (
                            <motion.div
                                layoutId="timelineTabBG"
                                className="absolute inset-0 rounded-full -z-10 shadow-[0_0_15px_rgba(219,46,46,0.6)]"
                                style={{ backgroundColor: 'var(--color-brand-accent)' }}
                                transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                            />
                        )}
                        <Briefcase size={13} style={{ color: 'inherit' }} />
                        INTERNSHIP
                    </button>

                    <button
                        suppressHydrationWarning
                        type="button"
                        onClick={() => setActiveTab('education')}
                        className="flex-1 flex items-center justify-center gap-2 py-2.5 px-5 rounded-full text-[11px] font-sans font-bold uppercase tracking-wider transition-all duration-300 relative z-10 bg-transparent cursor-pointer"
                        style={{ color: activeTab === 'education' ? '#FFFFFF' : '#A0A0A0' }}
                    >
                        {activeTab === 'education' && (
                            <motion.div
                                layoutId="timelineTabBG"
                                className="absolute inset-0 rounded-full -z-10 shadow-[0_0_15px_rgba(219,46,46,0.6)]"
                                style={{ backgroundColor: 'var(--color-brand-accent)' }}
                                transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                            />
                        )}
                        <GraduationCap size={13} style={{ color: 'inherit' }} />
                        EDUCATION
                    </button>
                </div>

                {/* Timeline Main Display */}
                <div className="relative ml-2 flex h-auto w-full flex-col gap-12 overflow-visible pl-12">
                    {/* Background Static Track Line */}
                    <div className="absolute left-[3px] top-4 bottom-4 w-[1px] bg-white/10" />

                    {filteredTimeline.map((item) => (
                        <div
                            key={item.id}
                            className="relative w-full flex flex-col items-start h-auto overflow-visible clear-both block"
                        >
                            {/* Concentric Node Ring */}
                            <div
                                className="absolute -left-[57px] top-1 w-6 h-6 rounded-full flex items-center justify-center bg-brand-bg border-[3px]"
                                style={{ borderColor: 'var(--color-brand-accent)' }}
                            >
                                <div className="w-2.5 h-2.5 rounded-full bg-yellow-400 shadow-[0_0_10px_#facc15]" />
                            </div>

                            {/* Info Block Wrapper split header */}
                            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 w-full mb-4">
                                <div className="text-left block">
                                    <h3 className="text-xl font-bold tracking-wide font-sans block" style={{ color: '#FFFFFF' }}>
                                        {item.title}
                                    </h3>
                                    {item.subtitle ? (
                                        <p className="text-[13px] font-sans font-semibold mt-1 block text-neutral-400">
                                            {item.subtitle}
                                        </p>
                                    ) : null}
                                    <p className="text-[14px] font-sans font-bold mt-1 block" style={{ color: '#facc15' }}>
                                        {item.organization}
                                    </p>
                                </div>

                                {/* Calendar Period Capsule */}
                                <span
                                    className="inline-flex items-center gap-2 text-[11px] font-sans px-3 py-1 rounded-md border border-white/10 bg-brand-card shrink-0 w-fit md:self-start opacity-100 shadow-[0_4px_12px_rgba(0,0,0,0.3)] text-white"
                                >
                                    <Calendar size={12} style={{ color: '#facc15' }} />
                                    {item.period}
                                </span>
                            </div>

                            {/* Descriptors Description Stack List */}
                            <ul className="flex flex-col gap-2.5 text-[14px] font-sans text-left pl-0 w-full block list-none m-0">
                                {Array.isArray(item.description) && item.description.map((desc, dIdx) => (
                                    <li
                                        key={dIdx}
                                        className="flex items-start gap-2.5 m-0 p-0 block"
                                        style={{ color: '#FFFFFF' }}
                                    >
                                        <CheckCircle
                                            size={14}
                                            className="mt-1 shrink-0 block"
                                            style={{ color: 'var(--color-brand-accent)' }}
                                        />
                                        <span className="leading-relaxed font-sans block text-left text-neutral-300">
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
