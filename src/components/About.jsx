import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code2, Terminal, CheckCircle2, HeartHandshake } from 'lucide-react';

export default function About() {
  const handleScrollToContact = (e) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 lg:mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-gold mb-2 block">
            ABOUT PRAVEEN
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-text-main tracking-tight">
            A Little About Me
          </h2>
          <div className="w-16 h-1 bg-gold/60 mt-4 rounded-full" />
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Authentic Bio & Philosophy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6 text-base sm:text-lg text-text-secondary leading-relaxed"
          >
            <p className="text-text-main font-medium text-lg sm:text-xl">
              Hi, I'm Praveen — a MERN Stack Developer passionate about building modern, responsive, and user-friendly websites.
            </p>

            <p>
              I create professional portfolio websites for students, freelancers, and businesses at affordable prices, helping people build a strong online presence without spending too much.
            </p>

            <p>
              From personal portfolios to business websites, I focus on clean design, smooth functionality, and mobile-friendly experiences.
            </p>

            <p>
              My goal is simple: to help you bring your ideas online with quality websites at budget-friendly prices.
            </p>

            <div className="p-4 rounded-xl bg-gold/5 border border-gold/20 flex items-start gap-3 text-text-main">
              <HeartHandshake className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
              <p className="text-sm font-medium">
                Have an idea? Let's build it together.
              </p>
            </div>

            {/* Let's Work Together CTA */}
            <div className="pt-4">
              <a
                href="#contact"
                onClick={handleScrollToContact}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-bg-main bg-gold hover:bg-gold-hover transition-all duration-200 shadow-gold-sm hover:shadow-gold-md hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Let's Work Together</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          {/* Right Column: Visual Tech Card / Developer Philosophy */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-5"
          >
            <div className="rounded-2xl bg-bg-card border border-border-subtle overflow-hidden shadow-xl">
              {/* Terminal Title Bar */}
              <div className="bg-bg-subtle/80 px-4 py-3 border-b border-border-subtle flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500/80" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                <div className="flex items-center gap-1.5 text-xs text-text-muted font-mono">
                  <Terminal className="w-3.5 h-3.5 text-gold" />
                  <span>praveen.config.js</span>
                </div>
                <div className="w-10" />
              </div>

              {/* Code Snippet Content */}
              <div className="p-5 sm:p-6 font-mono text-xs sm:text-sm leading-relaxed text-text-secondary space-y-3 bg-bg-card">
                <div>
                  <span className="text-purple-400">const</span>{' '}
                  <span className="text-gold">developer</span> = &#123;
                </div>
                <div className="pl-4">
                  <span className="text-text-muted">name:</span>{' '}
                  <span className="text-emerald-400">'Praveen'</span>,
                </div>
                <div className="pl-4">
                  <span className="text-text-muted">role:</span>{' '}
                  <span className="text-emerald-400">'MERN Stack & Freelance Web Dev'</span>,
                </div>
                <div className="pl-4">
                  <span className="text-text-muted">coreFocus:</span> [
                  <span className="text-amber-300">'Clean UI'</span>,{' '}
                  <span className="text-amber-300">'Fast Performance'</span>,{' '}
                  <span className="text-amber-300">'Mobile Responsive'</span>
                  ],
                </div>
                <div className="pl-4">
                  <span className="text-text-muted">pricingPhilosophy:</span>{' '}
                  <span className="text-emerald-400">'Budget-friendly & Transparent'</span>,
                </div>
                <div className="pl-4">
                  <span className="text-text-muted">clientFocus:</span> [
                  <span className="text-amber-300">'Students'</span>,{' '}
                  <span className="text-amber-300">'Freelancers'</span>,{' '}
                  <span className="text-amber-300">'Small Businesses'</span>
                  ],
                </div>
                <div className="pl-4">
                  <span className="text-text-muted">readyToBuild:</span>{' '}
                  <span className="text-cyan-400">true</span>
                </div>
                <div>&#125;;</div>

                {/* Live Output Preview */}
                <div className="mt-4 pt-4 border-t border-border-subtle/70 text-xs">
                  <div className="flex items-center gap-2 text-text-muted mb-2">
                    <Code2 className="w-3.5 h-3.5 text-gold" />
                    <span>Values & Work Ethics</span>
                  </div>
                  <ul className="space-y-1.5 text-text-secondary">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-gold flex-shrink-0" />
                      <span>Direct developer-to-client communication</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-gold flex-shrink-0" />
                      <span>Modern React & Tailwind practices</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-gold flex-shrink-0" />
                      <span>Dedicated post-launch support</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
