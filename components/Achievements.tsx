import React from 'react';
import { Trophy, ExternalLink, Users, Code, Accessibility } from 'lucide-react';
import { ACHIEVEMENTS } from '../constants';

const getIcon = (title: string) => {
  if (title.includes('Design System')) return <Code size={24} />;
  if (title.includes('Mentorship')) return <Users size={24} />;
  if (title.includes('Accessibility')) return <Accessibility size={24} />;
  return <Trophy size={24} />;
};

export const Achievements: React.FC = () => {
  return (
    <div className="container mx-auto px-6">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Professional Achievements</h2>
          <p className="text-slate-400 max-w-xl">
            Key milestones and contributions that highlight my impact on organizations and the developer community.
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {ACHIEVEMENTS.map((item, index) => (
          <div 
            key={index} 
            className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700 hover:bg-slate-800 transition-all group"
          >
            <div className="mb-6 inline-flex p-3 rounded-lg bg-emerald-500/10 text-emerald-400 group-hover:bg-emerald-500 group-hover:text-white transition-colors">
              {getIcon(item.title)}
            </div>
            
            <h3 className="text-xl font-bold mb-3 text-white flex items-center gap-2">
              {item.title}
              {item.link && <ExternalLink size={16} className="text-slate-500 group-hover:text-emerald-400" />}
            </h3>
            
            <p className="text-slate-400 leading-relaxed">
              {item.description}
            </p>

            {item.link && (
              <a 
                href={item.link} 
                target="_blank" 
                rel="noreferrer" 
                className="inline-block mt-6 text-sm font-semibold text-emerald-400 hover:text-emerald-300"
              >
                View Project &rarr;
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};