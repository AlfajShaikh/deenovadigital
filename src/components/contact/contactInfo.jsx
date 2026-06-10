import React, { useState } from "react";

export default function ContactInfo() {
  const [formState, setFormState] = useState({ name: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (formState.name && formState.message) {
      setSent(true);
    }
  };

  return (
    <section id="contact" className="relative bg-slate-50 text-slate-900 py-20 px-6 overflow-hidden border-t border-slate-200/60">
      {/* Decorative background ambient glows matching your landing page architecture */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none -z-10">
        <div className="absolute top-[10%] left-[-5%] w-[400px] h-[400px] rounded-full bg-blue-400/10 blur-3xl" />
        <div className="absolute bottom-[10%] right-[-5%] w-[400px] h-[400px] rounded-full bg-indigo-300/10 blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <span className="text-blue-600 text-sm font-extrabold uppercase tracking-widest block">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900">
            Contact <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Our Desk</span>
          </h2>
          <p className="text-base text-slate-500 font-medium max-w-xl mx-auto">
            Have questions about our custom enterprise deployments or software systems? Reach out directly to our engineering desk.
          </p>
        </div>

        {/* Balanced Split Layout Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200/70 shadow-xl shadow-slate-100/80">
          
          {/* Left Column: Direct Correspondence Access Channels */}
          <div className="md:col-span-5 flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              <div>
                <div className="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-full text-xs font-semibold bg-blue-50 text-blue-600 border border-blue-100 mb-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
                  Communications Active
                </div>
                <h3 className="text-xl font-black text-slate-900">Direct Channels</h3>
                <p className="text-slate-500 text-sm mt-1 font-medium leading-relaxed">
                  Skip the queue. Use our high-priority coordination touchpoints to interface with our architectural solution desks instantly.
                </p>
              </div>

              {/* Functional Contact Cards */}
              <div className="space-y-3">
                {/* Email Node */}
                <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-50/50 border border-slate-200/60">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7 8.9a2.2 2.2 0 003.4 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 font-mono block uppercase tracking-wider">Secure Mail</span>
                    <a href="mailto:engineering@deenovadigital.com" className="text-sm font-bold text-slate-800 hover:text-blue-600 transition-colors">
                      deenovadigital@gmail.com
                    </a>
                  </div>
                </div>

                {/* Office Location Node */}
                <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-50/50 border border-slate-200/60">
                  <div className="w-10 h-10 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 font-mono block uppercase tracking-wider"> Location</span>
                    <span className="text-sm font-bold text-slate-800">
                     Sangli Maharashtra, India
                    </span>
                  </div>
                  
                </div>
              </div>
            </div>

            {/* Micro Tagline Footer */}
            <div className="text-[11px] font-mono text-slate-400 border-t border-slate-100 pt-4">
              <span className="text-emerald-500 font-bold">●</span> Encryption Standard Enabled
            </div>
          </div>

          {/* Right Column: Clean, Light Interaction Message Canvas Panel */}
          <div className="md:col-span-7 bg-gradient-to-br from-slate-900 to-indigo-950 rounded-xl p-6 shadow-xl ring-1 ring-white/10 flex flex-col justify-between min-h-[300px]">
            
            {/* Top Device Tab-Bar Layout Mockup */}
            <div className="flex justify-between items-center border-b border-white/10 pb-3">
              <div className="flex items-center space-x-2">
                <div className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                <div className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                <span className="text-[11px] font-mono text-slate-400 ml-2">secure_message_router</span>
              </div>
              <span className="text-[10px] font-bold bg-blue-500/20 border border-blue-500/30 px-2 py-0.5 rounded-md text-blue-400">
                Ready
              </span>
            </div>

            {/* Dynamic Card Interaction Window */}
            <div className="py-6 flex-grow flex flex-col justify-center">
              {!sent ? (
                <form onSubmit={handleSendMessage} className="space-y-4">
                  <div>
                    <label className="block text-[10px] font-mono text-slate-400 uppercase tracking-wider mb-1.5">Your Identity / Name</label>
                    <input 
                      type="text" 
                      placeholder="e.g., Lead Engineer" 
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full text-xs p-3 bg-slate-950/60 border border-white/10 rounded-lg text-black placeholder-slate-600 focus:outline-none focus:border-blue-500 transition-colors"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-mono text-slate-400 uppercase tracking-wider mb-1.5">Message / Inquiry Scope</label>
                    <textarea 
                      rows="3" 
                      placeholder="Type your core question here..." 
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      className="w-full text-xs p-3 bg-slate-950/60 border border-white/10 rounded-lg text-black placeholder-slate-600 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                      required
                    />
                  </div>
                  <button 
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold text-xs py-3 px-4 rounded-lg transition-all hover:opacity-95 shadow-lg shadow-blue-950/50"
                  >
                    Dispatch Message →
                  </button>
                </form>
              ) : (
                <div className="text-center py-6 space-y-3 animate-fadeIn">
                  <div className="w-12 h-12 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded-full flex items-center justify-center mx-auto shadow-inner">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-sm font-bold text-white">Transmission Complete</h4>
                    <p className="text-[11px] text-slate-400 max-w-xs mx-auto leading-relaxed">
                      Thank you, <span className="text-slate-200 font-semibold">{formState.name}</span>. Your correspondence has successfully bypassed external relays and cleared our routing matrix.
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Quick System Focus Micro-Footer */}
            <div className="border-t border-white/10 pt-3 flex justify-between text-[11px] font-mono text-slate-400">
              <span className="text-slate-500">Routing Node:</span>
              <span className="text-slate-200 font-bold">Inbound_Gateway_Primary</span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}