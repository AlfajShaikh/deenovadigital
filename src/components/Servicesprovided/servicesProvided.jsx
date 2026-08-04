import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Asset Imports
import snpplogo from '../../assets/images/snpp.png';
import moryalogo from '../../assets/images/logomoryaremovebg.png';

export default function ServicesProvided() {
  const [activeClientIndex, setActiveClientIndex] = useState(0);
  const [activeModuleIndex, setActiveModuleIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Multi-Client Payload Data
  const clientsData = [
    {
      id: "snpp",
      name: "SNPP Industrial Seals",
      logo: snpplogo,
      tagline: "Industrial Seal Manufacturing & Lifecycle Monitoring",
      description: "A lightweight, real-time monitoring ecosystem built for SNPP to track factory production lines, inventory metrics, and quality assurances effortlessly.",
      badgeColor: "bg-blue-50 text-blue-600 border-blue-100",
      accentGlow: "from-blue-600 to-indigo-600",
      modules: [
        { id: "BatchTracking", label: "Batch Tracking", tag: "Live Sync", title: "Live Batch Tracking", color: "text-emerald-400", desc: "Continuous pipeline visualization for ongoing seal manufacturing runs with instant lifecycle mapping." },
        { id: "PlanningStock", label: "Planning & Stock", tag: "Dynamic", title: "Monthly Planning & Stock", color: "text-blue-400", desc: "Raw material counts and finished seal inventory generated dynamically with automated monthly forecasts." },
        { id: "QualityRejection", label: "Rejection Reports", tag: "QA Logs", title: "Rejection Reporting Logs", color: "text-rose-400", desc: "Instant QA parameters logging dimension anomalies and material defects to prevent line errors." },
        { id: "InOutSystem", label: "Advanced In/Out", tag: "Android App", title: "Advanced Mobile In/Out", color: "text-amber-400", desc: "Native Android application enabling factory floor staff to execute handoffs, scanning, and dispatching on the fly." }
      ]
    },
    {
      id: "morya",
      name: "Morya Caterers",
      logo: moryalogo,
      tagline: "High-Volume Event Catering & Hospitality Management",
      description: "A custom operational management suite designed for Morya Caterers to manage event orders, inventory dispatch, menu planning, and kitchen staff workflows.",
      badgeColor: "bg-amber-50 text-amber-600 border-amber-100",
      accentGlow: "from-amber-500 to-orange-600",
      modules: [
        { id: "EventBooking", label: "Event Orders", tag: "Scheduler", title: "Event & Order Management", color: "text-amber-400", desc: "Centralized event scheduling portal tracking guest scale, event venues, dietary constraints, and contract billing." },
        { id: "KitchenInventory", label: "Raw Materials", tag: "Auto-Stock", title: "Kitchen Stock & Ingredient Forecasts", color: "text-emerald-400", desc: "Calculates precise perishable raw material requirements based on upcoming catering volumes to reduce waste." },
        { id: "MenuPlanning", label: "Recipe Engine", tag: "Costing", title: "Dynamic Menu & Recipe Costing", color: "text-indigo-400", desc: "Automated ingredient breakdown per dish, maintaining consistent taste formulas and profit margin controls." },
        { id: "StaffDispatch", label: "Staff & Logistics", tag: "Mobile Sync", title: "On-Site Catering Operations", color: "text-cyan-400", desc: "Mobile dispatch dashboard coordinating service staff deployments, equipment checklists, and venue logistics." }
      ]
    }
  ];

  const currentClient = clientsData[activeClientIndex];
  const currentModule = currentClient.modules[activeModuleIndex];

  // Auto-rotation engine
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setActiveModuleIndex((prevModuleIdx) => {
        // If we reach the last module of the current client, switch to the next client
        if (prevModuleIdx + 1 >= currentClient.modules.length) {
          setActiveClientIndex((prevClientIdx) => (prevClientIdx + 1) % clientsData.length);
          return 0;
        }
        return prevModuleIdx + 1;
      });
    }, 4500); // 4.5 Seconds rotation step

    return () => clearInterval(timer);
  }, [isPaused, currentClient.modules.length, clientsData.length]);

  return (
    <section className="relative bg-slate-50 text-slate-900 py-20 px-6 overflow-hidden border-t border-slate-200/60">
      {/* Background Glow Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none -z-10">
        <div className="absolute top-[10%] left-[-5%] w-[450px] h-[450px] rounded-full bg-blue-400/10 blur-3xl" />
        <div className="absolute bottom-[10%] right-[-5%] w-[450px] h-[450px] rounded-full bg-indigo-300/10 blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">

        {/* Section Header */}
        <div className="text-center mb-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-bold uppercase tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-ping" />
            Automated Showcase Stream
          </div>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900">
            Enterprise Platforms In Action
          </h2>
          <p className="text-sm sm:text-base text-slate-500 font-medium max-w-xl mx-auto">
            Experience our automated operational showcases driving real-time management across manufacturing and hospitality sectors.
          </p>
        </div>

        {/* Global Auto-Progress Tracker Header */}
        <div className="bg-white p-3 rounded-2xl border border-slate-200/80 shadow-sm mb-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-start">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider font-mono">
              Live Showcase Stream
            </span>
            <button
              onClick={() => setIsPaused(!isPaused)}
              className="px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-[11px] font-bold font-mono transition-colors"
            >
              {isPaused ? "▶ Resume Stream" : "❚❚ Pause Stream"}
            </button>
          </div>

          {/* Client Progress Indicators */}
          <div className="flex items-center gap-2 w-full sm:w-auto">
            {clientsData.map((client, idx) => (
              <div
                key={client.id}
                onClick={() => {
                  setActiveClientIndex(idx);
                  setActiveModuleIndex(0);
                }}
                className={`cursor-pointer flex-1 sm:flex-none px-4 py-1.5 rounded-xl text-xs font-bold transition-all ${activeClientIndex === idx
                  ? "bg-slate-900 text-black shadow-md"
                  : "bg-slate-100 text-green-500 hover:bg-green-200"
                  }`}
              >
                {client.name}
              </div>
            ))}
          </div>
        </div>

        {/* Main Showcase Container */}
        <div
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="relative grid grid-cols-1 md:grid-cols-12 gap-8 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200/70 shadow-xl shadow-slate-100/80 overflow-hidden"
        >
          {/* Animated Top Progress Bar */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-slate-100">
            <motion.div
              key={`${activeClientIndex}-${activeModuleIndex}-${isPaused}`}
              initial={{ width: "0%" }}
              animate={{ width: isPaused ? "0%" : "100%" }}
              transition={{ duration: isPaused ? 0 : 4.5, ease: "linear" }}
              className={`h-full bg-gradient-to-r ${currentClient.accentGlow}`}
            />
          </div>

          {/* Left Column: Active Client Identity & Modules Stream */}
          <div className="md:col-span-5 flex flex-col justify-between space-y-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentClient.id}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                transition={{ duration: 0.3 }}
                className="space-y-3"
              >
                <div className={`inline-flex items-center gap-1.5 py-1 px-3 rounded-full text-xs font-semibold border ${currentClient.badgeColor}`}>
                  <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
                  Active Client Deployment
                </div>

                <div className="flex items-center gap-3 pt-1">
                  <div className="h-12 max-w-[160px] flex items-center">
                    <img
                      src={currentClient.logo}
                      alt={`${currentClient.name} Logo`}
                      className="max-h-full max-w-full object-contain"
                      onError={(e) => {
                        e.target.style.display = 'none';
                      }}
                    />
                  </div>
                </div>

                <p className="text-slate-500 text-xs font-medium leading-relaxed pt-1">
                  {currentClient.description}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* Modules Auto-Advancing Progress Deck */}
            <div className="space-y-2">
              {currentClient.modules.map((mod, idx) => {
                const isActive = activeModuleIndex === idx;
                return (
                  <div
                    key={mod.id}
                    onClick={() => setActiveModuleIndex(idx)}
                    className={`cursor-pointer p-3.5 rounded-xl border transition-all duration-300 flex justify-between items-center relative overflow-hidden ${isActive
                      ? "bg-white border-blue-600 shadow-md ring-2 ring-blue-50"
                      : "bg-slate-50/50 border-slate-200/80 hover:border-slate-300"
                      }`}
                  >
                    <div className="flex items-center gap-2.5 z-10">
                      <span className={`w-2 h-2 rounded-full ${isActive ? "bg-blue-600 animate-ping" : "bg-slate-300"}`} />
                      <span className={`text-xs font-bold ${isActive ? "text-blue-600" : "text-slate-700"}`}>
                        {mod.label}
                      </span>
                    </div>
                    <span className="text-[10px] font-mono font-bold text-slate-400 z-10">
                      {mod.tag}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Simulated Live Console Interface */}
          <div className="md:col-span-7 bg-gradient-to-br from-slate-900 to-indigo-950 rounded-xl p-6 shadow-xl ring-1 ring-white/10 flex flex-col justify-between min-h-[310px] relative overflow-hidden">

            {/* Mock Dashboard Top Control Header */}
            <div className="flex justify-between items-center border-b border-white/10 pb-3 z-10">
              <div className="flex items-center space-x-2">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                <span className="text-[11px] font-mono text-slate-400 ml-2">
                  {currentClient.id}_stream_v3.0
                </span>
              </div>
              <span className="text-[10px] font-bold bg-blue-500/20 border border-blue-500/30 px-2.5 py-0.5 rounded-md text-blue-400 font-mono flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
                AUTOMATED SYNC
              </span>
            </div>

            {/* Dynamic Console Module Presentation Body */}
            <div className="py-6 flex-grow flex flex-col justify-center z-10">
              <p className="text-[10px] font-mono text-slate-400 uppercase tracking-wider mb-2">
                Live Dynamic Stream
              </p>

              <AnimatePresence mode="wait">
                <motion.div
                  key={`${currentClient.id}-${currentModule.id}`}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-2"
                >
                  <div className={`text-xl sm:text-2xl font-black ${currentModule.color}`}>
                    {currentModule.title}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-medium">
                    {currentModule.desc}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Terminal Status Footer */}
            <div className="grid grid-cols-2 gap-4 border-t border-white/10 pt-3 text-[11px] font-mono text-slate-400 z-10">
              <div>
                <span className="text-slate-500 block text-[10px]">Client Instance:</span>
                <span className="text-slate-200 font-bold">{currentClient.name}</span>
              </div>
              <div>
                <span className="text-slate-500 block text-[10px]">Active Module:</span>
                <span className="text-emerald-400 font-bold">{currentModule.label}</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}