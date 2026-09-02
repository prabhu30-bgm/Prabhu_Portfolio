'use client';

import React, { useEffect } from 'react';
import Lenis from 'lenis';

import { CursorGlow } from '@/components/CursorGlow';
import { Navbar } from '@/components/Navbar';

import { Hero } from '@/sections/Hero';
import { About } from '@/sections/About';
import { EducationInternship } from '@/sections/Education';
import { Skills } from '@/sections/Skills';
import { Projects } from '@/sections/Projects';
import { Contact } from '@/sections/Contact';

export default function Home() {
    useEffect(() => {
        // Initialize Lenis Smooth Scroll
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            orientation: 'vertical',
            gestureOrientation: 'vertical',
            smoothWheel: true,
            wheelMultiplier: 1,
            touchMultiplier: 1.8,
        });

        let rafId;
        function raf(time) {
            lenis.raf(time);
            rafId = requestAnimationFrame(raf);
        }
        rafId = requestAnimationFrame(raf);

        // Update Scroll Progress Bar
        const updateProgress = () => {
            const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
            const progress = totalHeight > 0 ? window.scrollY / totalHeight : 0;

            const bar = document.getElementById('scroll-progress-bar');
            if (bar) bar.style.transform = `scaleX(${progress})`;
        };

        window.addEventListener('scroll', updateProgress, { passive: true });
        updateProgress();

        return () => {
            cancelAnimationFrame(rafId);
            lenis.destroy();
            window.removeEventListener('scroll', updateProgress);
        };
    }, []);

    return (
        <div className="relative min-h-screen bg-darkBg text-white overflow-x-hidden selection:bg-accentNeon/30 selection:text-white">
            <div
                id="scroll-progress-bar"
                className="scroll-progress"
                style={{ transform: 'scaleX(0)' }}
            />

            <CursorGlow />
            <Navbar />

            <main>
                <Hero />
                <About />
                <Skills />
                <Projects />
                <EducationInternship />
                <Contact />
            </main>
        </div>
    );
}
