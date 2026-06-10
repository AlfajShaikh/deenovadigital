import React from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-50 border-t border-slate-200/60 text-slate-600 py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Subtle bottom accent glow matching the landing page theme */}
      <div className="absolute bottom-0 left-1/4 w-96 h-32 bg-blue-400/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Left Side: Brand Identity */}
        <div className="text-center md:text-left space-y-1.5">
          <div className="text-lg font-black tracking-tight text-slate-900">
            Deenova<span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"> Digital</span>
          </div>
          <p className="text-xs text-slate-400 font-medium">
            Automating architectures into seamless engineering ecosystems.
          </p>
        </div>

        {/* Center: Clean Anchor Micro-Links */}
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-xs font-bold text-slate-500">
          <a href="#home" className="hover:text-blue-600 transition-colors">Home</a>
          <a href="#services" className="hover:text-blue-600 transition-colors">Services</a>
          <a href="#consultation" className="hover:text-blue-600 transition-colors">Consultation</a>
        </div>

        {/* Right Side: Copyright Compliance */}
        <div className="text-center md:text-right font-mono text-[11px] text-slate-400">
          <p>&copy; {currentYear} Deenova Digital. All rights reserved.</p>
          <p className="text-[10px] text-slate-400/70 mt-0.5">Engineered for Scale.</p>
        </div>

      </div>
    </footer>
  );
}