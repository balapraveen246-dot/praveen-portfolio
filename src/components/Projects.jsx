import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projectsData } from '../data/projectsData';
import {
  ExternalLink,
  Clock,
  AlertCircle,
  Sparkles,
  GraduationCap,
  Leaf,
  ShoppingBag,
  CloudSun,
  Mail,
  Building2,
  Activity
} from 'lucide-react';

const GithubIcon = ({ className = "w-3.5 h-3.5" }) => (
  <svg className={`${className} fill-current`} viewBox="0 0 24 24">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
  </svg>
);

const ICON_MAP = {
  graduation: GraduationCap,
  leaf: Leaf,
  'shopping-bag': ShoppingBag,
  'cloud-sun': CloudSun,
  mail: Mail,
  building: Building2,
  activity: Activity,
};

export default function Projects() {
  const [filter, setFilter] = useState('all');

  const liveCount = projectsData.filter((p) => p.status === 'Live').length;
  const inProgressCount = projectsData.filter((p) => p.status !== 'Live').length;

  const filteredProjects = projectsData.filter((project) => {
    if (filter === 'live') return project.status === 'Live';
    if (filter === 'progress') return project.status !== 'Live';
    return true;
  });

  return (
    <section id="projects" className="py-20 lg:py-28 relative overflow-hidden w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-gold mb-2 block">
              PORTFOLIO SHOWCASE
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-text-main tracking-tight">
              Selected Projects
            </h2>
            <p className="text-base sm:text-lg text-text-secondary mt-3 max-w-xl">
              A selection of projects showcasing my web development skills.
            </p>
            <div className="w-16 h-1 bg-gold/60 mt-4 rounded-full" />
          </div>

          {/* Quick Filter Controls */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-bg-card border border-border-subtle rounded-xl self-start md:self-auto max-w-full">
            <button
              onClick={() => setFilter('all')}
              className={`px-3 sm:px-3.5 py-1.5 text-xs sm:text-sm font-medium rounded-lg transition-colors ${
                filter === 'all'
                  ? 'bg-gold text-bg-main font-semibold'
                  : 'text-text-secondary hover:text-text-main'
              }`}
            >
              All Projects ({projectsData.length})
            </button>
            <button
              onClick={() => setFilter('live')}
              className={`px-3 sm:px-3.5 py-1.5 text-xs sm:text-sm font-medium rounded-lg transition-colors ${
                filter === 'live'
                  ? 'bg-gold text-bg-main font-semibold'
                  : 'text-text-secondary hover:text-text-main'
              }`}
            >
              Live Demos ({liveCount})
            </button>
            <button
              onClick={() => setFilter('progress')}
              className={`px-3 sm:px-3.5 py-1.5 text-xs sm:text-sm font-medium rounded-lg transition-colors ${
                filter === 'progress'
                  ? 'bg-gold text-bg-main font-semibold'
                  : 'text-text-secondary hover:text-text-main'
              }`}
            >
              In Progress ({inProgressCount})
            </button>
          </div>
        </div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 w-full"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => {
              const IconComponent = ICON_MAP[project.iconType] || Sparkles;
              const isLive = project.status === 'Live';
              const isInProgress = project.status === 'In Progress';
              const isUnavailable = project.status === 'Unavailable';

              return (
                <motion.article
                  layout
                  key={project.id}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.5 }}
                  whileHover={{ y: -6 }}
                  className="group relative rounded-2xl bg-bg-card border border-border-subtle hover:border-gold/50 transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-xl hover:shadow-gold-sm w-full min-w-0"
                >
                  {/* Card Visual Header Mockup */}
                  <div className={`relative h-48 bg-gradient-to-br ${project.gradient} p-4 sm:p-5 border-b border-border-subtle flex flex-col justify-between overflow-hidden`}>
                    
                    {/* Mock Browser Header Dots */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-neutral-700" />
                        <span className="w-2.5 h-2.5 rounded-full bg-neutral-700" />
                        <span className="w-2.5 h-2.5 rounded-full bg-neutral-700" />
                      </div>
                      <span className="text-xs font-mono font-bold text-text-muted">
                        PROJECT #{project.number}
                      </span>
                    </div>

                    {/* Visual Centerpiece */}
                    <div className="flex items-center gap-3 min-w-0">
                      <div
                        className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center bg-bg-card/90 border border-border-subtle shadow-md flex-shrink-0"
                        style={{ color: project.accentColor }}
                      >
                        <IconComponent className="w-5 h-5 sm:w-6 sm:h-6" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <span className="text-xs uppercase tracking-wider text-text-muted font-mono block truncate">
                          {project.category}
                        </span>
                        <h3 className="text-base sm:text-lg font-bold text-text-main group-hover:text-gold transition-colors truncate">
                          {project.name}
                        </h3>
                      </div>
                    </div>

                    {/* Status Badge */}
                    <div className="flex items-center justify-between pt-2">
                      {isLive && (
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-950/80 text-emerald-400 border border-emerald-800/60">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                          Live Demo Available
                        </span>
                      )}

                      {isInProgress && (
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-amber-950/80 text-amber-300 border border-amber-800/60">
                          <Clock className="w-3 h-3" />
                          In Progress / Coming Soon
                        </span>
                      )}

                      {isUnavailable && (
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-rose-950/80 text-rose-300 border border-rose-800/60">
                          <AlertCircle className="w-3 h-3" />
                          Demo Unavailable
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      {/* Description */}
                      <p className="text-sm text-text-secondary leading-relaxed mb-4">
                        {project.description}
                      </p>

                      {/* Key Highlights / Features */}
                      {project.features && (
                        <div className="mb-5 space-y-1">
                          {project.features.map((feature, idx) => (
                            <p key={idx} className="text-xs text-text-muted flex items-center gap-2">
                              <span className="w-1 h-1 rounded-full bg-gold/70" />
                              <span>{feature}</span>
                            </p>
                          ))}
                        </div>
                      )}

                      {/* Technology Tags */}
                      <div className="flex flex-wrap gap-1.5 mb-6">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2.5 py-1 rounded-md text-xs font-medium bg-bg-subtle text-text-secondary border border-border-subtle"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Links */}
                    <div className="pt-4 border-t border-border-subtle flex items-center gap-3">
                      {isLive && project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm text-bg-main bg-gold hover:bg-gold-hover transition-colors shadow-gold-sm"
                        >
                          <span>Live Demo</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      )}

                      {isInProgress && (
                        <div className="flex-1 text-center py-2 px-3 rounded-xl bg-bg-subtle border border-border-subtle text-xs text-text-muted font-medium">
                          Active Development
                        </div>
                      )}

                      {isUnavailable && (
                        <div
                          className="flex-1 text-center py-2 px-3 rounded-xl bg-bg-subtle border border-rose-900/40 text-xs text-text-muted font-medium"
                          title="Verified: The provided URL returned 404. Will be re-enabled once updated."
                        >
                          Demo Link Pending
                        </div>
                      )}

                      {/* View Code Link only when valid public source is supplied */}
                      {project.codeUrl ? (
                        <a
                          href={project.codeUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl text-xs font-semibold text-text-secondary hover:text-text-main bg-bg-subtle border border-border-subtle hover:border-gold/40 transition-colors"
                        >
                          <GithubIcon className="w-3.5 h-3.5" />
                          <span>Code</span>
                        </a>
                      ) : null}
                    </div>

                  </div>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
