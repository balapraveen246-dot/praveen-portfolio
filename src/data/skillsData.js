/**
 * Skills & Technologies Data
 * Exactly the 12 requested skills with authentic brand vectors and clean categorizations.
 * No fabricated percentages or progress bars.
 */

export const skillsCategories = [
  { id: 'all', label: 'All Technologies' },
  { id: 'frontend', label: 'Frontend & UI' },
  { id: 'backend', label: 'Backend & Database' },
  { id: 'tools', label: 'Tools & DevOps' },
];

export const skillsData = [
  {
    name: 'React',
    category: 'frontend',
    role: 'Component Architecture & SPAs',
    color: '#61DAFB',
    svg: `<svg viewBox="0 0 115.3 100" fill="currentColor"><path d="M57.65 0C25.79 0 0 22.39 0 50s25.79 50 57.65 50 57.65-22.39 57.65-50-25.79-50-57.65-50zm0 90.63C31.5 90.63 10.3 72.44 10.3 50S31.5 9.38 57.65 9.38 105 27.56 105 50s-21.2 40.63-47.35 40.63z"/><ellipse cx="57.65" cy="50" rx="15.8" ry="15.8"/><path d="M57.65 24.97c-21.84 0-39.75 11.21-39.75 25.03s17.91 25.03 39.75 25.03 39.75-11.21 39.75-25.03-17.91-25.03-39.75-25.03zm0 43.15c-18.15 0-32.84-8.11-32.84-18.12s14.69-18.12 32.84-18.12 32.84 8.11 32.84 18.12-14.69 18.12-32.84 18.12z"/></svg>`
  },
  {
    name: 'JavaScript',
    category: 'frontend',
    role: 'Modern ES6+, DOM & Async',
    color: '#F7DF1E',
    svg: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M3 3h18v18H3V3zm13.7 13.9c-.8.8-1.9 1.3-3.2 1.3-2.6 0-4.3-1.6-4.3-4.3 0-2.8 1.8-4.4 4.5-4.4 1.3 0 2.2.4 2.9 1.1l-1.3 1.3c-.5-.5-1-.7-1.7-.7-1.5 0-2.5 1-2.5 2.5 0 1.5 1 2.5 2.5 2.5.8 0 1.3-.2 1.8-.7v-1.6h-2v-1.8h3.8v4.6z"/></svg>`
  },
  {
    name: 'Tailwind CSS',
    category: 'frontend',
    role: 'Utility-First Modern Styling',
    color: '#38BDF8',
    svg: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.336 6.182 14.975 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.336 13.382 8.975 12 6.001 12z"/></svg>`
  },
  {
    name: 'HTML5',
    category: 'frontend',
    role: 'Semantic Web & Accessibility',
    color: '#E34F26',
    svg: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059-.001.234-2.72H5.568l.697 8.156h8.896l-.32 3.52-2.864.773-2.862-.773-.184-2.062H6.307l.354 4.394 5.316 1.474 5.321-1.474.729-8.093H8.531z"/></svg>`
  },
  {
    name: 'CSS3',
    category: 'frontend',
    role: 'Animations, Grid & Flexbox',
    color: '#1572B6',
    svg: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm15.75 4.312H6.75l.234 2.719h8.282l-.234 2.719H7.218l.234 2.719h7.375l-.47 5.156-2.38.643-2.38-.643-.153-1.72H6.71l.307 3.784 4.96 1.378 4.96-1.378.713-7.875H12l.156-1.719h4.844l.25-2.75z"/></svg>`
  },
  {
    name: 'Redux',
    category: 'frontend',
    role: 'Global State Management',
    color: '#764ABC',
    svg: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M15.7 3.3a5.5 5.5 0 0 0-4.6 1.8 5.5 5.5 0 0 0-4.6-1.8 5.6 5.6 0 0 0-5.6 5.6c0 4.1 5 8.7 10.2 13.5 5.2-4.8 10.2-9.4 10.2-13.5a5.6 5.6 0 0 0-5.6-5.6zm-4.6 17.1C6.9 16.3 3.1 12.6 3.1 8.9a3.4 3.4 0 0 1 3.4-3.4c1.3 0 2.5.7 3.1 1.7h3a3.4 3.4 0 0 1 3.1-1.7 3.4 3.4 0 0 1 3.4 3.4c0 3.7-3.8 7.4-8 11.5z"/></svg>`
  },
  {
    name: 'Node.js',
    category: 'backend',
    role: 'Server-Side Runtime & APIs',
    color: '#339933',
    svg: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm1 14.5h-2v-5h2zm0-7h-2V7h2z"/></svg>`
  },
  {
    name: 'Express.js',
    category: 'backend',
    role: 'RESTful API Routing & Middleware',
    color: '#F5F5F5',
    svg: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L2 7l10 5 10-5-10-5zm0 9l2.5-1.25L12 8.5 9.5 9.75 12 11zm0 2.5L4.5 9.75 2 11l10 5 10-5-2.5-1.25L12 13.5zM2 15l10 5 10-5-2.5-1.25L12 17.5 4.5 13.75 2 15z"/></svg>`
  },
  {
    name: 'MongoDB',
    category: 'backend',
    role: 'NoSQL Schema & Aggregations',
    color: '#47A248',
    svg: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.193 9.555c-1.232-4.99-4.87-8.125-4.87-8.125s-.354.343-.728.815c-3.17 4.02-4.227 7.91-3.666 11.198.636 3.73 3.633 6.302 4.062 6.643.085.068.187.106.29.106.027 0 .054-.003.082-.01.134-.033.242-.128.29-.258.077-.208.38-1.077.584-1.928 1.472-6.141 3.956-8.441 3.956-8.441zm-5.064 12.02c-.896-.79-3.235-3.085-3.755-6.136-.46-2.705.418-5.932 3.08-9.336.216-.276.43-.541.637-.791.01.408.038.835.087 1.28.374 3.42 2.215 5.86 2.457 6.18-1.127 3.328-2.222 7.747-2.506 8.803z"/></svg>`
  },
  {
    name: 'Firebase',
    category: 'backend',
    role: 'Auth, Firestore & Hosting',
    color: '#FFCA28',
    svg: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M4.1 14.8l2.7-12.8a.7.7 0 0 1 1.3-.2l3.4 6.4-7.4 6.6zm15.4 0l-3.2-10.2a.7.7 0 0 0-1.3-.1L2.4 17.6l8.8 5a1.6 1.6 0 0 0 1.6 0l6.7-7.8z"/></svg>`
  },
  {
    name: 'Git',
    category: 'tools',
    role: 'Version Control & Branching',
    color: '#F05032',
    svg: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M2.6 10.6l8.8-8.8a2.5 2.5 0 0 1 3.5 0l6.5 6.5a2.5 2.5 0 0 1 0 3.5l-8.8 8.8a2.5 2.5 0 0 1-3.5 0l-6.5-6.5a2.5 2.5 0 0 1 0-3.5zm11.2-4.4a1.5 1.5 0 1 0 1.5 1.5 1.5 1.5 0 0 0-1.5-1.5zm-4.7 7.2a1.5 1.5 0 0 0-1.2.6l-2-2a1.5 1.5 0 1 0-1.1 1.1l2 2a1.5 1.5 0 1 0 2.3-1.7zm4.7-.5a1.5 1.5 0 0 0-1.5 1.5v1.8a1.5 1.5 0 1 0 1.5 0v-1.8a1.5 1.5 0 0 0 0-1.5z"/></svg>`
  },
  {
    name: 'GitHub',
    category: 'tools',
    role: 'Collaboration & Repositories',
    color: '#F5F5F5',
    svg: `<svg viewBox="0 0 24 24" fill="currentColor"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>`
  }
];
