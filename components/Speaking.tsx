import React from 'react';
import { Mic2, MapPin, Globe } from 'lucide-react';
import { SPEAKING } from '../constants';

export const Speaking: React.FC = () => {
  return (
    <div className="container mx-auto px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-3 bg-emerald-50 text-emerald-600 rounded-full mb-6">
            <Mic2 size={24} />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Speaking Engagements</h2>
          <p className="text-slate-500">
            Sharing knowledge on accessibility, agile development, and modern frameworks.
          </p>
        </div>

        <div className="grid gap-6">
          {SPEAKING.map((talk, index) => (
            <div key={index} className="flex flex-col md:flex-row md:items-center gap-6 bg-white p-6 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex-shrink-0 flex flex-col items-center justify-center w-16 h-16 bg-slate-900 text-white rounded-lg font-bold text-center leading-tight">
                <span className="text-xs font-normal opacity-70">Event</span>
                <Globe size={20} className="mt-1" />
              </div>
              
              <div className="flex-grow">
                <h3 className="text-lg font-bold text-slate-900 mb-1">{talk.event}</h3>
                <p className="text-emerald-600 font-medium mb-2">{talk.topic}</p>
                <div className="flex items-center text-sm text-slate-500">
                  <MapPin size={14} className="mr-1" />
                  {talk.location}
                </div>
              </div>

              {talk.link && (
                <div className="flex-shrink-0 mt-4 md:mt-0">
                  <a 
                    href={talk.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center px-4 py-2 border border-slate-200 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-50 hover:border-slate-300 transition-colors"
                  >
                    Watch / Read
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};