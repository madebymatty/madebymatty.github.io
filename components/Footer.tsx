import React from 'react';
import { Mail, Phone, Linkedin, ArrowUpRight } from 'lucide-react';
import { PROFILE } from '../constants';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-400 py-16 border-t border-slate-800">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          <div>
            <h2 className="text-2xl font-bold text-white mb-6">Let's work together</h2>
            <p className="max-w-sm mb-8 leading-relaxed">
              I'm always open to discussing new projects, creative opportunities, or speaking engagements.
            </p>
            <div className="flex flex-col gap-4">
              <a href={`mailto:${PROFILE.email}`} className="flex items-center gap-3 hover:text-emerald-400 transition-colors">
                <Mail size={20} />
                {PROFILE.email}
              </a>
              <a href={`tel:${PROFILE.phone}`} className="flex items-center gap-3 hover:text-emerald-400 transition-colors">
                <Phone size={20} />
                {PROFILE.phone}
              </a>
            </div>
          </div>

          <div className="md:text-right">
            <h3 className="text-white font-bold mb-6">Connect</h3>
            <a 
              href={PROFILE.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-emerald-500 hover:text-emerald-400 transition-colors"
            >
              <Linkedin size={20} />
              LinkedIn Profile
              <ArrowUpRight size={16} />
            </a>
            <div className="mt-8 text-sm">
              <p>Based in {PROFILE.location}</p>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p>© {currentYear} {PROFILE.name}. All rights reserved.</p>
          <p>Built with React & Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
};