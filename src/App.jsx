import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustStrip from './components/TrustStrip';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Services from './components/Services';
import PricingQuote from './components/PricingQuote';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen w-full bg-bg-main text-text-main flex flex-col selection:bg-gold selection:text-black overflow-x-hidden">
      {/* Sticky Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1 w-full overflow-x-hidden">
        <Hero />
        <TrustStrip />
        <About />
        <Skills />
        <Projects />
        <Services />
        <PricingQuote />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
