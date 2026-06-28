'use client';

import React from 'react';
import { ArrowUp, Mail, MapPin, Phone } from 'lucide-react';

import { GithubIcon, LinkedinIcon } from '@/components/BrandIcons';
import { profile } from '@/constants/portfolioData';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;

    const yOffset = -90;
    const y = el.getBoundingClientRect().top + window.scrollY + yOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });
  };

  return (
    // Change this line inside your contact.jsx:
    <footer id="contact" className="relative w-screen min-h-screen bg-brand-bg flex items-center py-20 lg:py-0 overflow-x-hidden">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-12 border-b border-white/5">
          <div className="flex flex-col gap-4">
            <button
              type="button"
              onClick={() => scrollToSection('home')}
              className="font-display font-bold text-2xl tracking-tight text-white flex items-center gap-2 w-fit"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-accentNeon animate-pulse" />
              BASAVA
              <span className="text-secondaryText font-light">PRABHU</span>
            </button>

            <p className="text-secondaryText text-sm font-light leading-relaxed max-w-xs mt-2">
              {profile.shortIntro}
            </p>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-6">
              Navigation
            </h4>

            <div className="grid grid-cols-2 gap-3 text-sm font-light">
              <button
                type="button"
                onClick={() => scrollToSection('home')}
                className="text-secondaryText hover:text-accentNeon transition-colors text-left"
              >
                Home
              </button>

              <button
                type="button"
                onClick={() => scrollToSection('about')}
                className="text-secondaryText hover:text-accentNeon transition-colors text-left"
              >
                About
              </button>

              <button
                type="button"
                onClick={() => scrollToSection('skills')}
                className="text-secondaryText hover:text-accentNeon transition-colors text-left"
              >
                Skills
              </button>

              <button
                type="button"
                onClick={() => scrollToSection('projects')}
                className="text-secondaryText hover:text-accentNeon transition-colors text-left"
              >
                Projects
              </button>

              <button
                type="button"
                onClick={() => scrollToSection('contact')}
                className="text-secondaryText hover:text-accentNeon transition-colors text-left col-span-2"
              >
                Contact
              </button>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-6">
              Basavaprabhu
            </h4>

            <div className="flex flex-col gap-3 text-sm font-light text-secondaryText">
              <div className="flex items-center gap-2.5">
                <Mail size={14} className="text-accentNeon" />
                <a
                  href={`mailto:${profile.email}`}
                  className="hover:text-accentNeon transition-colors"
                >
                  {profile.email}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone size={14} className="text-accentNeon" />
                <a
                  href={profile.phoneHref}
                  className="hover:text-accentNeon transition-colors"
                >
                  {profile.phone}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <MapPin size={14} className="text-accentNeon" />
                <span>{profile.location}</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-6">
              Socials
            </h4>

            <div className="flex gap-3">
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-secondaryText hover:text-black hover:bg-accentNeon hover:border-accentNeon transition-all"
                aria-label="GitHub Profile Redirect"
              >
                <GithubIcon size={16} />
              </a>

              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-secondaryText hover:text-black hover:bg-accentNeon hover:border-accentNeon transition-all"
                aria-label="LinkedIn Profile Redirect"
              >
                <LinkedinIcon size={16} />
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mt-12 text-xs font-semibold text-secondaryText uppercase tracking-wider">
          <span>{profile.fullName} © 2026. All rights reserved.</span>

          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-1.5 hover:text-accentNeon transition-colors group"
          >
            Back to top
            <ArrowUp
              size={14}
              className="group-hover:-translate-y-0.5 transition-transform"
            />
          </button>
        </div>
      </div>
    </footer >
  );
}
