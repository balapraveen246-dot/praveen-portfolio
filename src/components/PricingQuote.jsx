import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, MessageSquare, ArrowRight, CheckCircle2, ShieldCheck } from 'lucide-react';
import { CONTACT_CONFIG } from '../data/config';

export default function PricingQuote() {
  const quoteUrl = CONTACT_CONFIG.getWhatsAppUrl(
    'Hi Praveen! I would like to get a free quote for my website project. Here are some details:'
  );

  const discussUrl = CONTACT_CONFIG.getWhatsAppUrl(
    'Hi Praveen! I have a website idea and would like to discuss what solution would fit my budget.'
  );

  const STEPS = [
    {
      num: '01',
      title: 'Click "Get a Free Quote"',
      desc: 'Opens direct WhatsApp chat with Praveen with a ready-made template.',
    },
    {
      num: '02',
      title: 'Share Your Requirements',
      desc: 'Describe what type of website you need (portfolio, business site, or redesign).',
    },
    {
      num: '03',
      title: 'Tailored Solution & Quote',
      desc: 'Praveen suggests the best design approach and provides an honest, budget-friendly quote.',
    },
  ];

  return (
    <section className="py-20 lg:py-24 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-80 h-80 bg-gold/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Banner Card */}
        <div className="relative rounded-3xl bg-gradient-to-b from-bg-card to-bg-main border border-gold/30 p-8 sm:p-12 lg:p-16 shadow-2xl overflow-hidden">
          
          {/* Subtle Ambient Gold Line */}
          <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-gold to-transparent" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Column: Heading, Supporting Text & CTAs */}
            <div className="lg:col-span-7">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-gold/10 text-gold border border-gold/30 mb-4">
                <Sparkles className="w-3.5 h-3.5" />
                TRANSPARENT & TAILORED
              </span>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-text-main tracking-tight leading-tight mb-4">
                Transparent Pricing, <span className="gold-gradient-text">Tailored to You</span>
              </h2>

              <p className="text-base sm:text-lg text-text-secondary leading-relaxed mb-8 max-w-xl">
                Every project is different. Tell me what you need, and I'll suggest a solution that fits your requirements and budget.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <a
                  href={quoteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl font-bold text-bg-main bg-gold hover:bg-gold-hover transition-all duration-200 shadow-gold-sm hover:shadow-gold-md hover:-translate-y-0.5 active:translate-y-0 text-center"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Get a Free Quote</span>
                </a>

                <a
                  href={discussUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-semibold text-text-main bg-bg-card hover:bg-bg-subtle border border-border-subtle hover:border-gold/50 transition-all duration-200 text-center"
                >
                  <span>Discuss Your Project</span>
                  <ArrowRight className="w-4 h-4 text-gold" />
                </a>
              </div>

              {/* Assurance */}
              <div className="mt-8 flex items-center gap-2 text-xs text-text-muted">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>No hidden charges • Fast turnarounds • Fair student & startup rates</span>
              </div>
            </div>

            {/* Right Column: 3-Step Simple Process */}
            <div className="lg:col-span-5 space-y-4">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-text-muted mb-2">
                How It Works:
              </h3>
              
              {STEPS.map((step, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-bg-card/70 border border-border-subtle/70 flex items-start gap-4 hover:border-gold/30 transition-colors"
                >
                  <span className="font-mono text-sm font-extrabold text-gold bg-gold/10 w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 border border-gold/20">
                    {step.num}
                  </span>
                  <div>
                    <h4 className="text-sm font-bold text-text-main">
                      {step.title}
                    </h4>
                    <p className="text-xs text-text-secondary mt-1 leading-snug">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
