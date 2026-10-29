import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { skillsData, skillsCategories } from '../data/skillsData';
import { Sparkles, Terminal } from 'lucide-react';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredSkills = activeCategory === 'all'
    ? skillsData
    : skillsData.filter((s) => s.category === activeCategory);

  return (
    <section id="skills" className="py-20 lg:py-28 relative bg-bg-card/30 border-y border-border-subtle/80">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-gold/5 rounded-full blur-[130px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-gold mb-2 block">
              TECH STACK & TOOLS
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-text-main tracking-tight">
              Skills & Technologies
            </h2>
            <div className="w-16 h-1 bg-gold/60 mt-4 rounded-full" />
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-bg-card border border-border-subtle rounded-xl self-start md:self-auto">
            {skillsCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 py-1.5 text-xs sm:text-sm font-medium rounded-lg transition-all duration-200 ${
                  activeCategory === cat.id
                    ? 'bg-gold text-bg-main font-semibold shadow-gold-sm'
                    : 'text-text-secondary hover:text-text-main hover:bg-bg-subtle'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <motion.div
          layout
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-5"
        >
          <AnimatePresence>
            {filteredSkills.map((skill, index) => (
              <motion.div
                layout
                key={skill.name}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, delay: index * 0.03 }}
                whileHover={{ y: -4 }}
                className="group relative p-5 rounded-2xl bg-bg-card border border-border-subtle hover:border-gold/50 transition-all duration-300 flex flex-col items-center text-center shadow-lg hover:shadow-gold-sm"
              >
                {/* Tech Icon Container */}
                <div
                  className="w-14 h-14 rounded-xl p-3 flex items-center justify-center bg-bg-subtle/80 border border-border-subtle group-hover:border-gold/30 transition-colors mb-3.5"
                  style={{ color: skill.color }}
                >
                  <div
                    className="w-7 h-7 flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                    dangerouslySetInnerHTML={{ __html: skill.svg }}
                  />
                </div>

                {/* Skill Name */}
                <h3 className="text-sm font-bold text-text-main group-hover:text-gold transition-colors">
                  {skill.name}
                </h3>

                {/* Subtitle / Focus Role */}
                <p className="text-[11px] text-text-muted mt-1 leading-snug">
                  {skill.role}
                </p>

                {/* Subtle Hover Accent */}
                <span className="absolute bottom-0 inset-x-8 h-[2px] bg-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Note on Authenticity */}
        <div className="mt-10 text-center">
          <p className="text-xs text-text-muted inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-bg-card/70 border border-border-subtle">
            <Sparkles className="w-3.5 h-3.5 text-gold" />
            <span>Practical, production-tested tools actively used in responsive web development projects.</span>
          </p>
        </div>

      </div>
    </section>
  );
}
