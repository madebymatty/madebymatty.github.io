import React, { useState, useEffect } from 'react';
import { Menu, X, Code2 } from 'lucide-react';
import { NAV_ITEMS, PROFILE } from '../constants';

export const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Floating Nav Wrapper */}
      <div 
        className={`fixed top-0 left-0 right-0 z-50 flex justify-center transition-all duration-300 pointer-events-none ${
          scrolled ? 'pt-4' : 'pt-6'
        }`}
      >
        <nav 
          className={`
            pointer-events-auto
            relative flex items-center justify-between
            bg-slate-900/85 backdrop-blur-xl border border-white/10 shadow-2xl shadow-black/20
            rounded-full transition-all duration-300 ease-out
            ${scrolled 
              ? 'py-2 px-4 w-[90%] md:w-auto md:min-w-[500px]' 
              : 'py-3 px-6 w-[92%] md:w-auto md:min-w-[650px]'}
          `}
        >
          {/* Logo */}
          <a 
            href="#home" 
            className="flex items-center gap-2 group"
            onClick={() => setIsOpen(false)}
          >
            <div className="bg-emerald-500/10 text-emerald-400 p-1.5 rounded-full border border-emerald-500/20 group-hover:bg-emerald-500 group-hover:text-white transition-colors">
              <Code2 size={20} />
            </div>
            <span className="font-bold text-slate-100 tracking-tight group-hover:text-emerald-400 transition-colors">
              {PROFILE.name}
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="
                  px-4 py-2 text-sm font-medium text-slate-300 
                  rounded-full hover:bg-white/10 hover:text-white transition-all
                "
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-slate-300 hover:text-white focus:outline-none p-1"
            onClick={toggleMenu}
            aria-label="Toggle navigation"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </div>

      {/* Mobile Menu Dropdown */}
      <div 
        className={`
          fixed top-28 left-4 right-4 z-40 
          bg-slate-900/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl
          transform transition-all duration-300 origin-top
          ${isOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 -translate-y-4 pointer-events-none'}
        `}
      >
        <nav className="flex flex-col p-2">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="
                p-4 text-center font-medium text-slate-300 
                hover:text-white hover:bg-white/5 rounded-xl transition-colors
              "
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </>
  );
};