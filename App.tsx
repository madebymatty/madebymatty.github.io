import React, { useState, useEffect } from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Experience } from './components/Experience';
import { Skills } from './components/Skills';
import { Achievements } from './components/Achievements';
import { Speaking } from './components/Speaking';
import { Footer } from './components/Footer';
import { ArrowUp } from 'lucide-react';

const App: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-50 relative">
      <Navigation />
      
      <main className="flex flex-col gap-0">
        <section id="home">
          <Hero />
        </section>

        <section id="experience" className="py-20 bg-white">
          <Experience />
        </section>

        <section id="skills" className="py-20 bg-slate-50">
          <Skills />
        </section>

        <section id="achievements" className="py-20 bg-slate-900 text-slate-50">
          <Achievements />
        </section>

        <section id="speaking" className="py-20 bg-white">
          <Speaking />
        </section>
      </main>

      <Footer />

      {/* Sticky Scroll to Top */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 bg-emerald-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 z-50 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 ${
          showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
        aria-label="Scroll to top"
      >
        <ArrowUp size={24} />
      </button>
    </div>
  );
};

export default App;