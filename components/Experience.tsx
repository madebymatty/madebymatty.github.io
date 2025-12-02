import React from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { EXPERIENCE, PREVIOUS_ROLES } from '../constants';

export const Experience: React.FC = () => {
  return (
    <div className="container mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Professional Experience</h2>
        <p className="text-slate-500 max-w-2xl mx-auto">
          A track record of leadership and technical excellence across global brands, startups, and agencies.
        </p>
      </div>

      <div className="space-y-12 max-w-4xl mx-auto">
        {EXPERIENCE.map((job) => (
          <div key={job.id} className="relative pl-8 md:pl-0">
            {/* Timeline Line (Desktop) */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-slate-200 -ml-px"></div>
            
            <div className={`md:flex items-start justify-between gap-8 ${
              // Alternating layout logic purely visual here, simplified to a clean list for readability
              '' 
            }`}>
              
              {/* Desktop: Left side content (Date/Location) or Spacer */}
              <div className="hidden md:block w-1/2 text-right pr-12 pt-1">
                 <h3 className="text-xl font-bold text-slate-900">{job.company}</h3>
                 <div className="flex items-center justify-end gap-2 text-slate-500 mt-1 text-sm font-medium">
                    <Calendar size={14} />
                    <span>{job.period}</span>
                 </div>
                 <div className="flex items-center justify-end gap-2 text-slate-400 mt-1 text-sm">
                    <MapPin size={14} />
                    <span>{job.location}</span>
                 </div>
              </div>

              {/* Timeline Dot */}
              <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-emerald-500 border-4 border-white shadow-sm -ml-2 md:-ml-2 mt-2 z-10"></div>

              {/* Right Side / Mobile Content */}
              <div className="md:w-1/2 md:pl-12">
                {/* Mobile Header (Hidden on Desktop) */}
                <div className="md:hidden mb-2">
                  <h3 className="text-xl font-bold text-slate-900">{job.company}</h3>
                  <div className="text-emerald-600 font-semibold mb-1">{job.role}</div>
                  <div className="text-sm text-slate-500 mb-4 flex flex-wrap gap-3">
                    <span className="flex items-center gap-1"><Calendar size={12} /> {job.period}</span>
                    <span className="flex items-center gap-1"><MapPin size={12} /> {job.location}</span>
                  </div>
                </div>

                {/* Desktop Role Title */}
                <div className="hidden md:block text-emerald-600 font-bold mb-3 text-lg">{job.role}</div>

                <ul className="space-y-3">
                  {job.description.map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-slate-600 leading-relaxed">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-20 max-w-4xl mx-auto bg-slate-50 rounded-2xl p-8 border border-slate-100">
        <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
          <Briefcase className="text-emerald-500" size={20} />
          Previous Roles
        </h3>
        <div className="grid sm:grid-cols-2 gap-4">
          {PREVIOUS_ROLES.map((role, idx) => (
            <div key={idx} className="flex items-center gap-3 text-slate-600 text-sm">
              <div className="w-1.5 h-1.5 rounded-full bg-slate-300"></div>
              {role}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};