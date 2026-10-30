import React from 'react';
import { ArrowUp } from 'lucide-react';
import { CONTACT_CONFIG } from '../data/config';

const GithubIcon = ({ className = "w-5 h-5" }) => (
  <svg className={`${className} fill-current`} viewBox="0 0 24 24">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
  </svg>
);

const LinkedInIcon = ({ className = "w-5 h-5" }) => (
  <svg className={`${className} fill-current`} viewBox="0 0 24 24">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9h2.79v8.37H6.46v-8.37M7.86 6.7a1.63 1.63 0 1 0 1.63 1.63A1.63 1.63 0 0 0 7.86 6.7z" />
  </svg>
);

const NAV_LINKS = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Services', href: '#services' },
  { name: 'Contact', href: '#contact' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="border-t border-border-subtle bg-bg-card/80 pt-12 pb-8 w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-10 border-b border-border-subtle/60">
          
          {/* Logo & Tagline */}
          <div className="text-center md:text-left">
            <a
              href="#home"
              onClick={(e) => handleLinkClick(e, '#home')}
              className="inline-flex items-center gap-2 text-text-main font-extrabold tracking-wider text-xl group"
            >
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-bg-card border border-gold/40 text-gold group-hover:border-gold transition-colors">
                <span className="text-sm font-black">P</span>
              </span>
              <span className="tracking-tight">
                PRAVEEN<span className="text-gold">.DEV</span>
              </span>
            </a>
            <p className="text-xs sm:text-sm text-text-secondary mt-2">
              Building modern digital experiences.
            </p>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-wrap justify-center gap-6 text-sm text-text-secondary">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="hover:text-gold transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Socials & Back to Top */}
          <div className="flex items-center gap-3">
            {CONTACT_CONFIG.socials.github && (
              <a
                href={CONTACT_CONFIG.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-bg-subtle border border-border-subtle hover:border-gold/40 flex items-center justify-center text-text-secondary hover:text-text-main transition-colors"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-5 h-5" />
              </a>
            )}

            {CONTACT_CONFIG.socials.linkedin && (
              <a
                href={CONTACT_CONFIG.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-bg-subtle border border-border-subtle hover:border-gold/40 flex items-center justify-center text-text-secondary hover:text-[#0A66C2] transition-colors"
                aria-label="LinkedIn Profile"
              >
                <LinkedInIcon className="w-5 h-5" />
              </a>
            )}

            {/* Subtle Gold Back to Top Button */}
            <button
              onClick={scrollToTop}
              className="w-10 h-10 rounded-xl bg-gold/10 border border-gold/30 hover:bg-gold hover:text-bg-main text-gold flex items-center justify-center transition-all duration-200 shadow-sm"
              aria-label="Back to top"
              title="Back to top"
            >
              <ArrowUp className="w-5 h-5" />
            </button>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-text-muted">
          <p>© {currentYear} Praveen. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            <span>Crafted with React, Tailwind & Motion</span>
          </p>
        </div>

      </div>
    </footer>
  );
}
