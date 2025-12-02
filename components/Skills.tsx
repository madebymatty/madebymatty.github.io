import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import { SKILLS } from '../constants';
import { CheckCircle2 } from 'lucide-react';

const FOCUS_DATA = [
  { name: 'Front-End', value: 45, color: '#10b981' }, // Emerald 500
  { name: 'Back-End', value: 25, color: '#3b82f6' }, // Blue 500
  { name: 'Accessibility', value: 20, color: '#6366f1' }, // Indigo 500
  { name: 'DevOps/Cloud', value: 10, color: '#64748b' }, // Slate 500
];

export const Skills: React.FC = () => {
  return (
    <div className="container mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Technical Proficiency</h2>
        <p className="text-slate-500 max-w-2xl mx-auto">
          Comprehensive toolset refined over two decades of hands-on development.
        </p>
      </div>

      <div className="grid gap-12">
        {/* Skills Grid */}
        <div className="lg:col-span-2 grid sm:grid-cols-2 gap-6">
          {SKILLS.map((skillGroup) => (
            <div key={skillGroup.category} className="bg-white p-6 rounded-xl border border-slate-200 hover:border-emerald-200 hover:shadow-md transition-all">
              <h3 className="font-bold text-slate-800 mb-4 border-b border-slate-100 pb-2">
                {skillGroup.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((skill) => (
                  <span 
                    key={skill} 
                    className="inline-flex items-center gap-1.5 px-3 py-1 bg-slate-50 text-slate-700 text-sm rounded-full border border-slate-100"
                  >
                    <CheckCircle2 size={12} className="text-emerald-500" />
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};