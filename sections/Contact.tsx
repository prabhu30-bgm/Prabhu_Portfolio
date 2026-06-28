'use client';

import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { AlertCircle, CheckCircle2, Mail, MapPin, Phone, Send } from 'lucide-react';
import confetti from 'canvas-confetti';
import { useForm } from '@/hooks/useForm';
import { profile } from '@/constants/portfolioData';

export function Contact() {
    const [submitSuccess, setSubmitSuccess] = useState(false);
    const initialFormState = { name: '', email: '', message: '' };

    const {
        values,
        errors,
        isSubmitting,
        handleChange,
        handleSubmit,
        resetForm,
        setIsSubmitting,
    } = useForm(initialFormState, handleFormSubmit);

    async function handleFormSubmit(data: typeof initialFormState) {
        try {
            const apiResponse = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });

            const responseData = await apiResponse.json();

            if (!apiResponse.ok) {
                // Updated error message string to match Resend API setup
                throw new Error(responseData.error || 'Server failed to transmit message over the email routing pipeline.');
            }

            // Fire celebration effects upon secure direct email transmission success
            confetti({
                particleCount: 150,
                spread: 80,
                origin: { y: 0.6 },
                colors: ['#8b2626ff', '#ffffff', '#141414'],
            });

            setSubmitSuccess(true);
            resetForm();

            setTimeout(() => setSubmitSuccess(false), 6000);
        } catch (err: any) {
            console.error('Submission pipeline crash:', err);
            alert(err.message || 'An error occurred while sending your message. Please try again.');
            setIsSubmitting(false);
        }
    }

    return (
        <section id="contact" className="relative w-screen min-h-screen bg-brand-bg flex items-center py-20 lg:py-0 overflow-x-hidden">
            <div className="absolute right-0 bottom-0 w-[400px] h-[400px] bg-accentNeon/3 rounded-full blur-[130px] pointer-events-none" />
            <div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10">
                <div className="max-w-3xl mb-20">
                    <span className="text-accentNeon text-xs font-semibold uppercase tracking-widest">Connect</span>
                    <h2 className="text-3xl md:text-5xl font-bold font-display text-white mt-3 uppercase">Start A Conversation</h2>
                    <div className="w-16 h-[2px] bg-accentNeon mt-6" />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-stretch">
                    {/* Sidebar Details Block */}
                    <div className="lg:col-span-5 flex flex-col gap-10 justify-between">
                        <div>
                            <h3 className="text-2xl font-bold font-display text-white uppercase tracking-tight">Contact Details</h3>
                            <p className="text-secondaryText text-sm font-light leading-relaxed mt-4 max-w-sm">
                                I am open to internship and full-time opportunities where I can learn, contribute, and grow as a software developer.
                            </p>
                            <div className="mt-8 flex flex-col gap-6">
                                <motion.div whileHover={{ x: 8 }} className="flex items-center gap-4 group cursor-pointer w-fit">
                                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-accentNeon group-hover:bg-accentNeon group-hover:text-black transition-all">
                                        <Mail size={18} />
                                    </div>
                                    <div>
                                        <span className="text-[10px] text-secondaryText uppercase font-semibold block tracking-wider">Email</span>
                                        <a href={`mailto:${profile.email}`} className="text-sm text-white hover:text-accentNeon transition-colors font-medium">{profile.email}</a>
                                    </div>
                                </motion.div>
                                <motion.div whileHover={{ x: 8 }} className="flex items-center gap-4 group cursor-pointer w-fit">
                                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-accentNeon group-hover:bg-accentNeon group-hover:text-black transition-all">
                                        <Phone size={18} />
                                    </div>
                                    <div>
                                        <span className="text-[10px] text-secondaryText uppercase font-semibold block tracking-wider">Phone</span>
                                        <a href={profile.phoneHref} className="text-sm text-white hover:text-accentNeon transition-colors font-medium">{profile.phone}</a>
                                    </div>
                                </motion.div>
                                <motion.div whileHover={{ x: 8 }} className="flex items-center gap-4 group cursor-pointer w-fit">
                                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-accentNeon group-hover:bg-accentNeon group-hover:text-black transition-all">
                                        <MapPin size={18} />
                                    </div>
                                    <div>
                                        <span className="text-[10px] text-secondaryText uppercase font-semibold block tracking-wider">Location</span>
                                        <span className="text-sm text-white font-medium">{profile.location}</span>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </div>

                    {/* Interactive Form Display */}
                    <div className="lg:col-span-7">
                        <div className="glass-card border border-white/5 rounded-3xl p-8 md:p-12 shadow-cardGlow">
                            <AnimatePresence mode="wait">
                                {submitSuccess ? (
                                    <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} className="py-12 flex flex-col items-center justify-center text-center gap-4">
                                        <div className="w-16 h-16 rounded-full bg-accentNeon/10 flex items-center justify-center text-accentNeon shadow-glow mb-4">
                                            <CheckCircle2 size={36} />
                                        </div>
                                        <h3 className="text-2xl font-bold font-display text-white uppercase tracking-tight">Message Sent!</h3>
                                        <p className="text-secondaryText text-sm font-light leading-relaxed max-w-sm">
                                            Thank you for reaching out. Your transmission went straight to my email inbox!
                                        </p>
                                    </motion.div>
                                ) : (
                                    <motion.form initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onSubmit={handleSubmit} className="flex flex-col gap-6" noValidate>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                            <div className="flex flex-col gap-2">
                                                <label htmlFor="name" className="text-[10px] text-secondaryText font-bold uppercase tracking-widest">Your Name</label>
                                                <input type="text" id="name" name="name" value={values.name} onChange={handleChange} className={`w-full bg-white/5 border rounded-xl px-5 py-4 text-sm text-white focus:outline-none transition-all focus:ring-2 focus:ring-accentNeon/20 focus:shadow-[0_0_20px_rgba(219,46,46,0.15)] ${errors.name ? 'border-red-500/50 focus:border-red-500' : 'border-white/10 focus:border-accentNeon'}`} disabled={isSubmitting} />
                                                {errors.name && <span className="text-xs text-red-400 flex items-center gap-1.5 mt-1 font-light"><AlertCircle size={12} />{errors.name}</span>}
                                            </div>
                                            <div className="flex flex-col gap-2">
                                                <label htmlFor="email" className="text-[10px] text-secondaryText font-bold uppercase tracking-widest">Your Email</label>
                                                <input type="email" id="email" name="email" value={values.email} onChange={handleChange} className={`w-full bg-white/5 border rounded-xl px-5 py-4 text-sm text-white focus:outline-none transition-all focus:ring-2 focus:ring-accentNeon/20 focus:shadow-[0_0_20px_rgba(219,46,46,0.15)] ${errors.email ? 'border-red-500/50 focus:border-red-500' : 'border-white/10 focus:border-accentNeon'}`} disabled={isSubmitting} />
                                                {errors.email && <span className="text-xs text-red-400 flex items-center gap-1.5 mt-1 font-light"><AlertCircle size={12} />{errors.email}</span>}
                                            </div>
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <label htmlFor="message" className="text-[10px] text-secondaryText font-bold uppercase tracking-widest">Your Message</label>
                                            <textarea id="message" name="message" value={values.message} onChange={handleChange} rows={6} className={`w-full bg-white/5 border rounded-xl px-5 py-4 text-sm text-white focus:outline-none transition-all resize-none focus:ring-2 focus:ring-accentNeon/20 focus:shadow-[0_0_20px_rgba(219,46,46,0.15)] ${errors.message ? 'border-red-500/50 focus:border-red-500' : 'border-white/10 focus:border-accentNeon'}`} disabled={isSubmitting} />
                                            {errors.message && <span className="text-xs text-red-400 flex items-center gap-1.5 mt-1 font-light"><AlertCircle size={12} />{errors.message}</span>}
                                        </div>
                                        <motion.button type="submit" disabled={isSubmitting} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="mt-4 w-full bg-accentNeon text-black text-sm font-semibold uppercase tracking-wider py-4 rounded-xl hover:bg-white hover:text-black transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-glow group cursor-pointer">
                                            {isSubmitting ? (
                                                <><span className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />Sending...</>
                                            ) : (
                                                <>Send Message <Send size={14} className="group-hover:translate-x-1 transition-transform" /></>
                                            )}
                                        </motion.button>
                                    </motion.form>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}