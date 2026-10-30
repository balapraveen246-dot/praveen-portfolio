import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CONTACT_CONFIG } from '../data/config';
import {
  MessageSquare,
  Mail,
  Send,
  Sparkles,
  Copy,
  Check,
  ExternalLink,
  ShieldAlert
} from 'lucide-react';

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    contactInfo: '',
    projectType: 'Personal Portfolio Website',
    requirements: '',
  });

  const handleCopyEmail = () => {
    if (CONTACT_CONFIG.email) {
      navigator.clipboard.writeText(CONTACT_CONFIG.email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    }
  };

  const handleSendViaWhatsApp = (e) => {
    e.preventDefault();
    const customMessage = `Hi Praveen! I found your portfolio.
Name: ${formData.name || 'Anonymous'}
Contact: ${formData.contactInfo || 'N/A'}
Project Type: ${formData.projectType}
Requirements: ${formData.requirements || 'I would like to discuss website options and pricing.'}`;

    const url = CONTACT_CONFIG.getWhatsAppUrl(customMessage);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleSendViaEmail = (e) => {
    e.preventDefault();
    const subject = `Website Project Inquiry: ${formData.projectType} - ${formData.name || 'Client'}`;
    const body = `Hi Praveen,

Name: ${formData.name || 'N/A'}
Contact Details: ${formData.contactInfo || 'N/A'}
Project Type: ${formData.projectType}

Project Requirements:
${formData.requirements || 'Looking forward to discussing project details.'}`;

    const mailto = CONTACT_CONFIG.getMailtoUrl(subject, body);
    window.location.href = mailto;
  };

  const directQuoteUrl = CONTACT_CONFIG.getWhatsAppUrl(
    'Hi Praveen! I found your portfolio and would like to get a free quote for a website project. My requirements are:'
  );

  const directChatUrl = CONTACT_CONFIG.getWhatsAppUrl(
    'Hi Praveen! I found your portfolio and would like to chat about a potential website project.'
  );

  return (
    <section id="contact" className="py-20 lg:py-28 relative overflow-hidden w-full">
      {/* Background Ambient Glow */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-full max-w-[500px] h-[350px] bg-gold/5 rounded-full blur-[150px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 lg:mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-gold mb-2 block">
            GET IN TOUCH
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-text-main tracking-tight">
            Have a Website Idea?
          </h2>
          <p className="text-base sm:text-lg text-text-secondary mt-3">
            Let's turn your idea into a beautiful, responsive website that fits your needs and budget.
          </p>
          <div className="w-16 h-1 bg-gold/60 mx-auto mt-4 rounded-full" />
        </div>

        {/* Top Quick Actions Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 max-w-2xl mx-auto">
          {/* Prominent Gold Button */}
          <a
            href={directQuoteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-bg-main bg-gold hover:bg-gold-hover transition-all duration-200 shadow-gold-md hover:-translate-y-0.5 active:translate-y-0 text-center text-base"
          >
            <Sparkles className="w-4 h-4" />
            <span>Get a Free Quote</span>
          </a>

          {/* Secondary Chat on WhatsApp */}
          <a
            href={directChatUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl font-semibold text-text-main bg-bg-card hover:bg-bg-subtle border border-border-subtle hover:border-gold/50 transition-all duration-200 text-center text-base"
          >
            <MessageSquare className="w-4 h-4 text-gold" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>

        {/* Contact Grid: Direct Info + Honest Inquiry Composer */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start max-w-5xl mx-auto">
          
          {/* Left Column: Direct Contact Details & Config Warning */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 space-y-6 w-full min-w-0"
          >
            <div className="p-5 sm:p-6 rounded-2xl bg-bg-card border border-border-subtle space-y-5">
              <h3 className="text-lg font-bold text-text-main flex items-center gap-2">
                <Mail className="w-5 h-5 text-gold" />
                <span>Direct Contact Options</span>
              </h3>

              {/* Email Card */}
              <div className="p-3.5 sm:p-4 rounded-xl bg-bg-subtle/70 border border-border-subtle min-w-0">
                <p className="text-xs uppercase tracking-wider text-text-muted mb-1 font-semibold">
                  Email Address
                </p>
                <div className="flex items-center justify-between gap-2 min-w-0">
                  <a
                    href={`mailto:${CONTACT_CONFIG.email}`}
                    className="text-xs sm:text-sm font-mono text-gold hover:underline truncate min-w-0 flex-1"
                  >
                    {CONTACT_CONFIG.email}
                  </a>
                  <button
                    onClick={handleCopyEmail}
                    className="p-1.5 rounded-lg bg-bg-card border border-border-subtle hover:border-gold/40 text-text-secondary hover:text-text-main transition-colors flex-shrink-0"
                    title="Copy Email"
                    aria-label="Copy Email"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
                {copiedEmail && (
                  <p className="text-[11px] text-emerald-400 mt-1.5">
                    ✓ Email address copied to clipboard!
                  </p>
                )}
              </div>

              {/* WhatsApp Card */}
              <div className="p-4 rounded-xl bg-bg-subtle/70 border border-border-subtle">
                <p className="text-xs uppercase tracking-wider text-text-muted mb-1 font-semibold">
                  WhatsApp Direct
                </p>
                <div className="flex items-center justify-between gap-2 mb-1.5">
                  <span className="text-sm font-mono text-emerald-400 font-bold">
                    {CONTACT_CONFIG.displayPhone || '+91 86108 08937'}
                  </span>
                </div>
                <p className="text-xs text-text-secondary mb-2">
                  Quickest way to get quotes and discuss requirements.
                </p>
                <a
                  href={directChatUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-400 hover:text-emerald-300"
                >
                  <span>Chat on WhatsApp</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* LinkedIn & GitHub Card */}
              <div className="p-4 rounded-xl bg-bg-subtle/70 border border-border-subtle">
                <p className="text-xs uppercase tracking-wider text-text-muted mb-2 font-semibold">
                  Professional Profiles
                </p>
                <div className="flex flex-col gap-2">
                  {CONTACT_CONFIG.socials.linkedin && (
                    <a
                      href={CONTACT_CONFIG.socials.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-between text-xs text-text-secondary hover:text-[#0A66C2] transition-colors p-2 rounded-lg bg-bg-card border border-border-subtle/70"
                    >
                      <span className="font-medium">LinkedIn Profile</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}

                  {CONTACT_CONFIG.socials.github && (
                    <a
                      href={CONTACT_CONFIG.socials.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-between text-xs text-text-secondary hover:text-text-main transition-colors p-2 rounded-lg bg-bg-card border border-border-subtle/70"
                    >
                      <span className="font-medium">GitHub Repository</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Honest Direct Inquiry Composer */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 w-full min-w-0"
          >
            <div className="p-5 sm:p-8 rounded-2xl bg-bg-card border border-border-subtle shadow-xl w-full min-w-0">
              <div className="mb-6">
                <h3 className="text-xl font-bold text-text-main">
                  Describe Your Project
                </h3>
                <p className="text-xs text-text-muted mt-1">
                  Fill in your details below to dispatch your message via WhatsApp or standard email.
                </p>
              </div>

              <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-text-secondary uppercase tracking-wider mb-1.5">
                      Your Name
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-bg-subtle border border-border-subtle text-text-main placeholder-text-muted text-sm focus:outline-none focus:border-gold transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-text-secondary uppercase tracking-wider mb-1.5">
                      Email or Phone
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. client@email.com"
                      value={formData.contactInfo}
                      onChange={(e) => setFormData({ ...formData, contactInfo: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-bg-subtle border border-border-subtle text-text-main placeholder-text-muted text-sm focus:outline-none focus:border-gold transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-text-secondary uppercase tracking-wider mb-1.5">
                    Project Type
                  </label>
                  <select
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-bg-subtle border border-border-subtle text-text-main text-sm focus:outline-none focus:border-gold transition-colors cursor-pointer"
                  >
                    <option value="Personal Portfolio Website">Personal Portfolio Website</option>
                    <option value="Business Website">Business Website</option>
                    <option value="Landing Page">Landing Page</option>
                    <option value="Website Redesign and Responsiveness">Website Redesign & Responsiveness</option>
                    <option value="Custom MERN Web Application">Custom MERN Web Application</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-text-secondary uppercase tracking-wider mb-1.5">
                    Requirements & Idea
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell me a bit about what you want to build, pages needed, or deadline..."
                    value={formData.requirements}
                    onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-bg-subtle border border-border-subtle text-text-main placeholder-text-muted text-sm focus:outline-none focus:border-gold transition-colors resize-none"
                  />
                </div>

                {/* Dispatch Buttons */}
                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <button
                    type="button"
                    onClick={handleSendViaWhatsApp}
                    className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-bold text-sm text-bg-main bg-gold hover:bg-gold-hover transition-colors shadow-gold-sm"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Send via WhatsApp</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleSendViaEmail}
                    className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm text-text-main bg-bg-subtle hover:bg-bg-subtle/80 border border-border-subtle hover:border-gold/40 transition-colors"
                  >
                    <Mail className="w-4 h-4 text-gold" />
                    <span>Send via Email Client</span>
                  </button>
                </div>

                {/* Honest Transparency Notice */}
                <p className="text-[11px] text-text-muted text-center pt-2">
                  ℹ️ This inquiry form cleanly formats your specifications and opens WhatsApp or your email client directly. No phantom server submissions.
                </p>
              </form>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
