import React from 'react';
import { motion } from 'framer-motion';
import { servicesData } from '../data/servicesData';
import { CONTACT_CONFIG } from '../data/config';
import {
  UserCheck,
  Briefcase,
  Flame,
  Smartphone,
  ArrowRight,
  MessageCircle,
  Check
} from 'lucide-react';

const ICON_MAP = {
  UserCheck,
  Briefcase,
  Flame,
  Smartphone,
};

export default function Services() {
  const handleDiscussClick = (e, topic) => {
    e.preventDefault();
    // Smooth scroll to contact or open WhatsApp with prefilled message
    const message = `Hi Praveen! I would like to discuss a project regarding ${topic}.`;
    const whatsappUrl = CONTACT_CONFIG.getWhatsAppUrl(message);
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="services" className="py-20 lg:py-28 relative bg-bg-card/40 border-y border-border-subtle/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 lg:mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-gold mb-2 block">
            WHAT I OFFER
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-text-main tracking-tight">
            How I Can Help You
          </h2>
          <p className="text-base sm:text-lg text-text-secondary mt-3">
            Affordable, high-quality website development tailored to individual and small business requirements.
          </p>
          <div className="w-16 h-1 bg-gold/60 mt-4 rounded-full" />
        </div>

        {/* Services 4-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {servicesData.map((service, index) => {
            const Icon = ICON_MAP[service.icon] || Briefcase;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group relative p-7 sm:p-8 rounded-2xl bg-bg-card border border-border-subtle hover:border-gold/50 transition-all duration-300 flex flex-col justify-between shadow-xl hover:shadow-gold-sm"
              >
                <div>
                  {/* Top Bar with Icon & Badge */}
                  <div className="flex items-start justify-between gap-4 mb-6">
                    <div className="w-14 h-14 rounded-xl bg-gold/10 border border-gold/30 flex items-center justify-center text-gold group-hover:scale-105 group-hover:bg-gold group-hover:text-bg-main transition-all duration-300 shadow-sm">
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className="text-[11px] font-semibold px-3 py-1 rounded-full bg-bg-subtle text-text-muted border border-border-subtle">
                      {service.badge}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl sm:text-2xl font-bold text-text-main group-hover:text-gold transition-colors mb-3">
                    {service.title}
                  </h3>
                  <p className="text-sm sm:text-base text-text-secondary leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Highlights */}
                  <ul className="space-y-2 mb-8">
                    {service.highlights.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-text-muted">
                        <span className="w-4 h-4 rounded-full bg-gold/15 flex items-center justify-center text-gold flex-shrink-0">
                          <Check className="w-2.5 h-2.5" />
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom CTA Link */}
                <div className="pt-4 border-t border-border-subtle/80 flex items-center justify-between">
                  <button
                    onClick={(e) => handleDiscussClick(e, service.inquiryTopic)}
                    className="inline-flex items-center gap-2 text-sm font-bold text-gold hover:text-gold-hover transition-colors group/btn"
                  >
                    <span>Discuss Your Project</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>

                  <span className="text-xs text-text-muted font-mono flex items-center gap-1">
                    <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                    <span>WhatsApp Ready</span>
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
