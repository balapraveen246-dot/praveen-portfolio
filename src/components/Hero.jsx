import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, MessageSquare, Briefcase, Sparkles, CheckCircle2 } from 'lucide-react';
import { CONTACT_CONFIG } from '../data/config';

export default function Hero() {
  const whatsappQuoteUrl = CONTACT_CONFIG.getWhatsAppUrl(
    'Hi Praveen! I found your portfolio and would like to get a free quote for a website project. My requirements are:'
  );

  const handleScrollToProjects = (e) => {
    e.preventDefault();
    const target = document.getElementById('projects');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-24 pb-16 lg:pt-28 lg:pb-20 overflow-hidden"
    >
      {/* Subtle Background Glows (Restrained, not overpowering) */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full max-w-[500px] h-[500px] bg-gold/5 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-20 right-0 sm:right-10 w-64 sm:w-72 h-64 sm:h-72 bg-gold/8 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center w-full">
          
          {/* Left Column: Text & CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 flex flex-col justify-center text-left w-full min-w-0"
          >
            {/* Introductory Label & Status Badge */}
            <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 mb-6">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-gold/10 text-gold border border-gold/30">
                <Sparkles className="w-3.5 h-3.5" />
                HELLO, I'M PRAVEEN
              </span>

              {CONTACT_CONFIG.isAvailableForWork && (
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-bg-card border border-border-subtle text-text-secondary">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  {CONTACT_CONFIG.statusText}
                </span>
              )}
            </div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-text-main leading-[1.15] mb-6 break-words"
            >
              Building Digital Experiences That{' '}
              <span className="gold-gradient-text inline-block">Make an Impact.</span>
            </motion.h1>

            {/* Supporting Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="text-base sm:text-lg text-text-secondary max-w-2xl leading-relaxed mb-8"
            >
              I'm a MERN Stack Developer who builds modern, responsive, and user-friendly websites. I help students, freelancers, and businesses bring their ideas online with clean design and reliable functionality.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10"
            >
              {/* Primary CTA: Scroll to Projects */}
              <a
                href="#projects"
                onClick={handleScrollToProjects}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-bg-main bg-gold hover:bg-gold-hover transition-all duration-200 shadow-gold-sm hover:shadow-gold-md hover:-translate-y-0.5 active:translate-y-0 text-center"
              >
                <Briefcase className="w-4 h-4" />
                <span>View My Projects</span>
              </a>

              {/* Secondary CTA: WhatsApp Free Quote */}
              <a
                href={whatsappQuoteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-text-main bg-bg-card hover:bg-bg-subtle border border-border-subtle hover:border-gold/50 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 text-center group"
              >
                <MessageSquare className="w-4 h-4 text-gold group-hover:scale-110 transition-transform" />
                <span>Get a Free Quote</span>
              </a>
            </motion.div>

            {/* Compact Technology Summary */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="pt-6 border-t border-border-subtle/80 flex flex-wrap items-center gap-2 text-xs sm:text-sm text-text-muted"
            >
              <span className="text-text-secondary font-semibold">Core Stack:</span>
              <span className="inline-flex items-center px-2.5 py-1 rounded-md bg-bg-card border border-border-subtle text-text-main font-medium">React</span>
              <span className="text-gold">•</span>
              <span className="inline-flex items-center px-2.5 py-1 rounded-md bg-bg-card border border-border-subtle text-text-main font-medium">Node.js</span>
              <span className="text-gold">•</span>
              <span className="inline-flex items-center px-2.5 py-1 rounded-md bg-bg-card border border-border-subtle text-text-main font-medium">Express</span>
              <span className="text-gold">•</span>
              <span className="inline-flex items-center px-2.5 py-1 rounded-md bg-bg-card border border-border-subtle text-text-main font-medium">MongoDB</span>
            </motion.div>
          </motion.div>

          {/* Right Column: Prominent Portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 flex justify-center lg:justify-end w-full min-w-0"
          >
            <div className="relative w-full max-w-[300px] sm:max-w-[360px] lg:max-w-[400px]">
              
              {/* Subtle Gold Ambient Glow behind Portrait */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-gold/25 via-gold/10 to-transparent rounded-2xl blur-xl -z-10" />

              {/* Decorative Subtle Corner Accent Lines */}
              <div className="hidden sm:block absolute -top-3 -right-3 w-8 h-8 border-t-2 border-r-2 border-gold/60 rounded-tr-lg pointer-events-none" />
              <div className="hidden sm:block absolute -bottom-3 -left-3 w-8 h-8 border-b-2 border-l-2 border-gold/60 rounded-bl-lg pointer-events-none" />

              {/* Portrait Container */}
              <div className="relative rounded-2xl overflow-hidden bg-bg-card border-2 border-gold/30 shadow-2xl p-2 group w-full">
                <div className="relative rounded-xl overflow-hidden aspect-[4/5] bg-neutral-900 w-full">
                  <img
                    src="/images/praveen.jpg"
                    alt="Praveen, MERN Stack Developer"
                    loading="eager"
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                    onError={(e) => {
                      // Graceful fallback to SVG placeholder if image is missing
                      e.target.style.display = 'none';
                      e.target.nextElementSibling.style.display = 'flex';
                    }}
                  />

                  {/* Fallback Display if image is still loading or absent */}
                  <div className="hidden absolute inset-0 flex-col items-center justify-center p-6 text-center bg-bg-card">
                    <div className="w-16 h-16 rounded-full bg-gold/10 border border-gold/40 flex items-center justify-center text-gold mb-3">
                      <span className="text-2xl font-bold">P</span>
                    </div>
                    <p className="text-sm font-semibold text-text-main">Praveen</p>
                    <p className="text-xs text-text-secondary mt-1">MERN Stack Developer</p>
                    <p className="text-[11px] text-text-muted mt-2 border border-border-subtle p-2 rounded bg-bg-main">
                      Place your photo at <code>public/images/praveen.jpg</code>
                    </p>
                  </div>

                  {/* Refined gradient overlay at bottom edge for integration */}
                  <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-bg-card/90 via-bg-card/30 to-transparent pointer-events-none" />
                </div>

                {/* Floating Bottom Badge */}
                <div className="absolute bottom-3 left-2.5 right-2.5 sm:bottom-4 sm:left-4 sm:right-4 bg-bg-main/90 backdrop-blur-md border border-border-subtle/80 rounded-xl p-2.5 sm:p-3 shadow-lg flex items-center justify-between gap-2 min-w-0">
                  <div className="flex items-center gap-2 sm:gap-2.5 min-w-0">
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-gold/15 border border-gold/30 flex items-center justify-center text-gold flex-shrink-0">
                      <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[11px] sm:text-xs font-bold text-text-main leading-tight truncate">MERN Stack Developer</p>
                      <p className="text-[10px] sm:text-[11px] text-text-secondary truncate">Freelance Website Creator</p>
                    </div>
                  </div>
                  <span className="text-[9px] sm:text-[10px] font-semibold text-gold bg-gold/10 border border-gold/20 px-1.5 sm:px-2 py-0.5 rounded flex-shrink-0">
                    Direct Hire
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Scroll Indicator */}
        <div className="mt-12 sm:mt-16 flex justify-center">
          <a
            href="#trust"
            className="group flex flex-col items-center text-xs text-text-muted hover:text-gold transition-colors"
            aria-label="Scroll to learn more"
          >
            <span className="mb-2 tracking-widest uppercase text-[10px] font-semibold">Scroll Down</span>
            <div className="w-5 h-9 rounded-full border border-border-subtle group-hover:border-gold/50 flex justify-center pt-1.5 transition-colors">
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
                className="w-1.5 h-1.5 rounded-full bg-gold"
              />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
