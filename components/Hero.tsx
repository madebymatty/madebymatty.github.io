import React from 'react';
import { Mail, MapPin, Linkedin, Terminal, Cpu, Globe, Code2 } from 'lucide-react';
import { PROFILE } from '../constants';

export const Hero: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-slate-900 text-white">
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float 7s ease-in-out infinite;
          animation-delay: 2s;
        }
        .animate-float-slow {
          animation: float 8s ease-in-out infinite;
          animation-delay: 1s;
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
          opacity: 0;
        }
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-400 { animation-delay: 0.4s; }
        .delay-500 { animation-delay: 0.5s; }
      `}</style>

      {/* Background decoration */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-emerald-500/20 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-blue-500/10 blur-3xl"></div>

      <div className="container mx-auto px-6 py-20 md:py-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column: Content */}
          <div className="max-w-3xl text-center lg:text-left mx-auto lg:mx-0">
            <div className="animate-fade-in-up delay-100 inline-flex items-center gap-2 px-4 py-2 mb-8 text-sm font-semibold tracking-wider text-emerald-400 uppercase bg-emerald-500/10 rounded-full border border-emerald-500/20">
              <Terminal size={14} />
              <span>Senior Full Stack Developer</span>
            </div>
            
            <h1 className="animate-fade-in-up delay-200 text-4xl md:text-6xl font-bold mb-6 tracking-tight leading-tight">
              Building Inclusive <br />
              <span className="text-emerald-400">Digital Experiences</span>
            </h1>
            
            <p className="animate-fade-in-up delay-300 text-lg text-slate-300 mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              {PROFILE.summary}
            </p>

            <div className="animate-fade-in-up delay-400 flex flex-col sm:flex-row items-center lg:justify-start justify-center gap-4 mb-12">
              <a 
                href={`mailto:${PROFILE.email}`}
                className="px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl transition-all flex items-center gap-2 shadow-lg shadow-emerald-900/20 w-full sm:w-auto justify-center hover:scale-105 transform duration-200"
              >
                <Mail size={20} />
                Contact Me
              </a>
              <a 
                href={PROFILE.linkedin}
                target="_blank"
                rel="noreferrer"
                className="px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-xl transition-all flex items-center gap-2 border border-slate-700 w-full sm:w-auto justify-center hover:scale-105 transform duration-200"
              >
                <Linkedin size={20} />
                LinkedIn
              </a>
            </div>

            <div className="animate-fade-in-up delay-500 flex flex-wrap justify-center lg:justify-start gap-6 text-sm text-slate-400 font-medium">
              <div className="flex items-center gap-2">
                <MapPin size={18} className="text-emerald-500" />
                <span>{PROFILE.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Code2 size={18} className="text-emerald-500" />
                <span>20+ Years Exp.</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Graphic */}
          <div className="hidden lg:block relative">
            {/* Main Code Window Card Wrapper for Float Animation */}
            <div className="animate-float-slow">
              <div className="relative z-10 bg-slate-950 rounded-2xl border border-slate-800 shadow-2xl overflow-hidden transform rotate-1 hover:rotate-0 transition-transform duration-500">
                {/* Window Header */}
                <div className="bg-slate-900 px-4 py-3 border-b border-slate-800 flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <div className="ml-4 text-xs text-slate-500 font-mono">portfolio.tsx</div>
                </div>
                
                {/* Code Content */}
                <div className="p-6 font-mono text-sm leading-relaxed overflow-hidden">
                  <div className="flex gap-4">
                    <div className="text-slate-700 select-none text-right">
                      1<br/>2<br/>3<br/>4<br/>5<br/>6<br/>7<br/>8<br/>9<br/>10<br/>11
                    </div>
                    <div className="text-slate-300">
                      <span className="text-purple-400">import</span> <span className="text-yellow-200">{`{ Developer }`}</span> <span className="text-purple-400">from</span> <span className="text-green-400">'@universe/earth'</span>;<br/><br/>
                      
                      <span className="text-purple-400">const</span> <span className="text-blue-400">MattWoods</span> = () <span className="text-purple-400">=&gt;</span> {'{'}<br/>
                      &nbsp;&nbsp;<span className="text-purple-400">return</span> (<br/>
                      &nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className="text-yellow-200">Developer</span><br/>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-300">name</span>=<span className="text-green-400">"Matt Woods"</span><br/>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-300">role</span>=<span className="text-green-400">"Senior Founder"</span><br/>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-300">experience</span>={'{'}<span className="text-orange-400">20</span>{'}'}<br/>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-300">focus</span>={'{['}<span className="text-green-400">"Accessibility"</span>, <span className="text-green-400">"React"</span>{']}'}<br/>
                      &nbsp;&nbsp;&nbsp;&nbsp;/&gt;<br/>
                      &nbsp;&nbsp;);<br/>
                      {'}'};<br/><br/>
                      <span className="text-purple-400">export default</span> <span className="text-blue-400">MattWoods</span>;
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-6 -right-6 animate-float">
              <div className="p-4 bg-slate-800 rounded-xl border border-slate-700 shadow-xl">
                <Cpu className="text-emerald-400" size={32} />
              </div>
            </div>
            
            <div className="absolute -bottom-8 -left-8 animate-float-delayed">
              <div className="p-4 bg-emerald-600 rounded-xl shadow-xl">
                <Globe className="text-white" size={32} />
              </div>
            </div>

            {/* Background Glow behind graphic */}
            <div className="absolute inset-0 bg-emerald-500/20 blur-3xl -z-10 rounded-full transform scale-90 animate-pulse"></div>
          </div>

        </div>
      </div>
    </div>
  );
};