import React from "react";
import alfaj from '../../assets/images/alfaj.jpeg';

export default function TeamInfo() {
  const leader = {
    name: "Alfaj Shaikh",
    role: "CEO, Founder & Front-End Developer",
    image: alfaj,
    description: "Leading Deenova Digital with a core vision of transforming complex business workflows into high-performance web and software architectures. Specializing in advanced React ecosystems, type-safe development environments, and scalable growth strategies.",
    stats: [
      { label: "Core Focus", value: "React & Architecture" },
      { label: "Ecosystems Built", value: "Production-Grade" }
    ],
    socials: { linkedin: "#", github: "#" }
  };

  return (
    <section id="about" className="py-28 bg-slate-50 relative overflow-hidden border-t border-slate-200/60">
      {/* Expanded Luxury Blur Background Orbs to catch the eye on scroll */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-blue-400/10 to-indigo-400/5 blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full bg-indigo-300/10 blur-3xl pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Micro-Header */}
        <div className="mb-16 text-center lg:text-left">
          <span className="text-blue-600 text-xs font-extrabold uppercase tracking-widest bg-blue-50 px-3 py-1.5 rounded-full border border-blue-100 inline-block">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600 inline-block mr-1.5 animate-pulse" />
            Executive Leadership
          </span>
        </div>

        {/* Big Size Split-Screen Presentation Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-white p-6 sm:p-12 rounded-3xl border border-slate-200/80 shadow-2xl shadow-slate-100/60">
          
          {/* LEFT CONTAINER: High-Impact Animated Image Shield (5 Columns) */}
          <div className="lg:col-span-5 relative group flex justify-center">
            {/* Background design accents that shift on hover */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-indigo-600 rounded-2xl transform rotate-3 scale-102 group-hover:rotate-1 group-hover:scale-105 transition-all duration-500 ease-out opacity-10 blur-xl" />
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl opacity-5 group-hover:opacity-10 transition duration-500 blur-sm" />
            
            {/* The Main Portrait Frame */}
            <div className="relative w-full max-w-[380px] aspect-[4/5] rounded-2xl overflow-hidden bg-slate-100 shadow-xl border border-slate-200/60 ring-4 ring-white">
              <img
                src={leader.image}
                alt={leader.name}
                className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition duration-700 ease-out"
                loading="lazy"
              />
              {/* Deep Cinematic Vignette Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-slate-950/10 to-transparent mix-blend-multiply" />
              
              {/* Micro-System status tag nested right on the picture */}
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-lg border border-slate-200/40 shadow-sm flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[10px] font-mono font-bold text-slate-800 uppercase tracking-wide">Workspace Sync Active</span>
              </div>
            </div>
          </div>

          {/* RIGHT CONTAINER: Premium Structural Typography and Statistics (7 Columns) */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left flex flex-col justify-center">
            
            {/* Name and Floating Badge Matrix */}
            <div className="space-y-4">
              <div className="inline-flex items-center justify-center lg:justify-start">
                <span className="text-xs font-black uppercase tracking-wider text-indigo-600 bg-indigo-50 px-3 py-1 rounded-md border border-indigo-100">
                  {leader.role}
                </span>
              </div>
              <h2 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight leading-none">
                Meet <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">{leader.name}</span>
              </h2>
            </div>

            {/* Clean Extended Narrative Text Block */}
            <p className="text-base sm:text-lg text-slate-500 font-medium leading-relaxed max-w-2xl mx-auto lg:mx-0">
              {leader.description}
            </p>

            {/* Premium Micro-Metrics Grid (Instead of small footer notes) */}
            <div className="grid grid-cols-2 gap-4 max-w-md mx-auto lg:mx-0 pt-2">
              {leader.stats.map((stat, idx) => (
                <div key={idx} className="bg-slate-50/80 border border-slate-200/60 p-4 rounded-xl text-left shadow-inner">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block mb-1">{stat.label}</span>
                  <span className="text-sm font-extrabold text-slate-800 bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text">{stat.value}</span>
                </div>
              ))}
            </div>

            {/* Custom Interactive Action Footer Link */}
            <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-slate-400">
                <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-slate-400">Direct Connect Matrix:</span>
                
                {leader.socials.linkedin && (
                  <a href={leader.socials.linkedin} className="w-8 h-8 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-400 hover:text-blue-600 hover:bg-blue-50 hover:border-blue-200 transition-all shadow-sm" aria-label="LinkedIn Profile">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                )}
                {leader.socials.github && (
                  <a href={leader.socials.github} className="w-8 h-8 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-400 hover:text-slate-900 hover:bg-slate-100 hover:border-slate-300 transition-all shadow-sm" aria-label="GitHub Profile">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.0.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                    </svg>
                  </a>
                )}
              </div>
              
              <a href="#consultation" className="text-xs font-mono font-bold text-blue-600 hover:text-indigo-600 transition-colors inline-flex items-center gap-1 group-hover:translate-x-0.5 transform duration-200">
                Initiate Project Consultation Framework &rarr;
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}