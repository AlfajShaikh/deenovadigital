import React, { useState } from "react";

import snpplogo from '../../assets/images/snpp.png'
export default function ServicesProvided() {
  // Updated initial active tab state to match your new features
  const [activeTab, setActiveTab] = useState("BatchTracking");

  // New modules mapping out your custom developer software features
  const modules = [
    { id: "BatchTracking", label: "Batch Tracking", tag: "Live Sync" },
    { id: "PlanningStock", label: "Planning & Stock", tag: "Dynamic" },
    { id: "QualityRejection", label: "Rejection Reports", tag: "QA Logs" },
    { id: "InOutSystem", label: "Advanced In/Out", tag: "Android App" },
  ];

  return (
    <section className="relative bg-slate-50 text-slate-900 py-20 px-6 overflow-hidden border-t border-slate-200/60">
      {/* Decorative background glow to match the Landing Page style */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none -z-10">
        <div className="absolute top-[10%] left-[-5%] w-[400px] h-[400px] rounded-full bg-blue-400/10 blur-3xl" />
        <div className="absolute bottom-[10%] right-[-5%] w-[400px] h-[400px] rounded-full bg-indigo-300/10 blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <span className="text-blue-600 text-sm font-extrabold uppercase tracking-widest block">
            Software Deployment Case
          </span>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900">
            Our Clients
          </h2>
          <p className="text-base text-slate-500 font-medium max-w-xl mx-auto">
            See how SNPP, a premier industrial seal manufacturer, uses our custom tracking software to monitor operations.
          </p>
        </div>

        {/* Simplified Dashboard Card Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200/70 shadow-xl shadow-slate-100/80">
          
          {/* Left Column: Brief Client Info & Interactive Buttons */}
          <div className="md:col-span-5 flex flex-col justify-between space-y-6">
            <div>
              <div className="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-full text-xs font-semibold bg-blue-50 text-blue-600 border border-blue-100 mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
                Live Implementation
              </div>
              <img src={snpplogo} alt=""  className=""/>
              <p className="text-slate-500 text-sm mt-3 font-medium leading-relaxed">
                We built a lightweight monitoring ecosystem for SNPP. Click the modules below to see how our software displays live metrics for their engineering teams.
              </p>
            </div>

            {/* Simple Navigation Nodes */}
            <div className="space-y-2">
              {modules.map((mod) => (
                <button
                  key={mod.id}
                  onClick={() => setActiveTab(mod.id)}
                  className={`w-full text-left p-4 rounded-xl border transition-all duration-300 flex justify-between items-center group ${
                    activeTab === mod.id
                      ? "bg-white border-blue-600 shadow-md ring-4 ring-blue-50"
                      : "bg-slate-50/50 border-slate-200 hover:border-slate-300"
                  }`}
                >
                  <div className="flex flex-col">
                    <span className={`text-sm font-bold transition-colors ${
                      activeTab === mod.id ? "text-blue-600" : "text-slate-800 group-hover:text-blue-600"
                    }`}>
                      {mod.label}
                    </span>
                  </div>
                  <span className="text-xs font-bold text-blue-600 font-mono opacity-60 group-hover:opacity-100 transition-opacity">
                    {mod.tag} →
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Right Column: Simulated Software Interface Blueprint (No Complex Graphs) */}
          <div className="md:col-span-7 bg-gradient-to-br from-slate-900 to-indigo-950 rounded-xl p-6 shadow-xl ring-1 ring-white/10 flex flex-col justify-between min-h-[260px]">
            {/* Mock Dashboard Top Bar */}
            <div className="flex justify-between items-center border-b border-white/10 pb-3">
              <div className="flex items-center space-x-2">
                <div className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                <div className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                <span className="text-[11px] font-mono text-slate-400 ml-2">snpp_core_v1.0</span>
              </div>
              <span className="text-[10px] font-bold bg-blue-500/20 border border-blue-500/30 px-2 py-0.5 rounded-md text-blue-400">
                Connected
              </span>
            </div>

            {/* Dynamic Simulated Display Readout */}
            <div className="py-6 flex-grow flex flex-col justify-center">
              <p className="text-[10px] font-mono text-slate-400 uppercase tracking-wider mb-2">Active Module Display</p>
              
              {activeTab === "BatchTracking" && (
                <div className="space-y-1.5 animate-fadeIn">
                  <div className="text-xl font-bold text-emerald-400">Live Batch Tracking</div>
                  <p className="text-xs text-slate-300 leading-relaxed font-medium">
                    Continuous pipeline visualization for all ongoing seal manufacturing runs. Real-time updates map the precise lifecycle status of active batches instantly.
                  </p>
                </div>
              )}

              {activeTab === "PlanningStock" && (
                <div className="space-y-1.5 animate-fadeIn">
                  <div className="text-xl font-bold text-blue-400">Monthly Planning & Stock</div>
                  <p className="text-xs text-slate-300 leading-relaxed font-medium">
                    Raw material counts and finished seal inventory totals are generated dynamically. Eliminates resource shortages with automated monthly forecasts.
                  </p>
                </div>
              )}

              {activeTab === "QualityRejection" && (
                <div className="space-y-1.5 animate-fadeIn">
                  <div className="text-xl font-bold text-rose-400">Rejection Reporting Logs</div>
                  <p className="text-xs text-slate-300 leading-relaxed font-medium">
                    Instant tracking parameters capturing dimension anomalies or material defects. Displays immediate logs to prevent production line errors.
                  </p>
                </div>
              )}

              {activeTab === "InOutSystem" && (
                <div className="space-y-1.5 animate-fadeIn">
                  <div className="text-xl font-bold text-amber-400">Advanced In/Out System</div>
                  <p className="text-xs text-slate-300 leading-relaxed font-medium">
                    Powered natively by our custom integrated Android tracking layout. Factory floor staff handle handoffs, dispatch, and scanning effortlessly on mobile devices.
                  </p>
                </div>
              )}
            </div>

            {/* Quick Micro-Metrics Status Footer */}
            <div className="grid grid-cols-2 gap-4 border-t border-white/10 pt-3 text-[11px] font-mono text-slate-400">
              <div>
                <span className="text-slate-500 block text-[10px]">System Status:</span>
                <span className="text-emerald-400 font-bold">● Live Monitoring</span>
              </div>
              <div>
                <span className="text-slate-500 block text-[10px]">Active Node:</span>
                <span className="text-slate-200 font-bold">
                  {modules.find((m) => m.id === activeTab)?.label}
                </span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}