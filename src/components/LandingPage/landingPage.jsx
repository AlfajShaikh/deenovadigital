import React, { useState, useEffect } from "react";
// Replace this with your exact asset directory path if needed
import logo from '../../assets/images/logo.png';
import TeamInfo from "../TeamInfo/teamInfo";
import ServicesProvided from "../Servicesprovided/servicesProvided";
import ContactInfo from "../contact/contactInfo";
import Footer from "../footer/footer";

export default function LandingPage() {
  // Navigation & UI Layout States
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  // Client Showcase Switcher State
  const [activeClientTab, setActiveClientTab] = useState("BatchTracking");

  // Interactive Lead Form Presentation Stepper States
  const [formStep, setFormStep] = useState(1);
  const [formData, setFormData] = useState({
    serviceType: "",
    projectName: "",
    budget: "",
    email: ""
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Global Scroll Event Listener for Shared Glassmorphic Header Integration
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleServiceSelect = (service) => {
    setFormData({ ...formData, serviceType: service });
    setTimeout(() => setFormStep(2), 300); // Smooth automated transition delay
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (formData.email) {
      setFormSubmitted(true);
    }
  };

  // Client Dashboard Dynamic Data Payload
  const clientModules = [
    { id: "BatchTracking", label: "Batch Tracking", tag: "Live Sync" },
    { id: "PlanningStock", label: "Planning & Stock", tag: "Dynamic" },
    { id: "QualityRejection", label: "Rejection Reports", tag: "QA Logs" },
    { id: "InOutSystem", label: "Advanced In/Out", tag: "Android App" },
  ];

  return (
    <div className="bg-slate-50 min-h-screen text-slate-900 antialiased selection:bg-blue-500 selection:text-white scroll-smooth pt-24">
      
      {/* 1. DYNAMIC ACCENT HEADER SECTION */}
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/80 backdrop-blur-md shadow-lg shadow-gray-100/40 border-b border-gray-100 py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            
            {/* Brand Logo Configuration */}
            <a href="/" className="flex items-center gap-3 group">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-tr flex items-center justify-center text-white font-bold text-xl shadow-md shadow-blue-200 group-hover:scale-105 transition-transform duration-200">
                <img src={logo} alt="Deenova Logo" className="w-full h-full object-contain rounded-xl" />
              </div>
              <div>
                <h1 className="text-xl font-extrabold tracking-tight text-gray-900 group-hover:text-blue-600 transition-colors">
                  Deenova <span className="text-blue-600">Digital</span>
                </h1>
                <p className="text-[11px] font-medium text-gray-400 tracking-wider uppercase">
                  Smart Business Solutions
                </p>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-10">
              {["Home", "Services", "Consultation", "Clients"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-sm font-semibold text-gray-600 hover:text-blue-600 relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-blue-600 after:transition-all hover:after:w-full transition-colors"
                >
                  {item}
                </a>
              ))}
            </nav>

            {/* Premium CTA Micro-Interactive Element */}
            <div className="hidden md:block">
              <a
                href="#consultation"
                className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-xl group bg-gradient-to-br from-purple-600 to-blue-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 transition-all"
              >
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white rounded-xl group-hover:bg-opacity-0 group-hover:text-white text-gray-900 font-semibold">
                  Get Started
                </span>
              </a>
            </div>

            {/* Mobile Adaptive Hamburger Controller */}
            <button
              className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100 focus:outline-none transition"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle Menu"
            >
              {menuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>

          {/* Mobile Draw Dropdown Overlay */}
          <div
            className={`md:hidden absolute left-0 w-full bg-white border-b border-gray-100 shadow-xl transition-all duration-300 ease-in-out ${
              menuOpen ? "top-full opacity-100 visible" : "top-[-200px] opacity-0 invisible"
            }`}
          >
            <div className="px-6 py-6 flex flex-col gap-4 bg-white">
              {["Home", "Services", "Consultation", "Clients"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setMenuOpen(false)}
                  className="text-base font-semibold text-gray-700 hover:text-blue-600 py-1 transition-colors"
                >
                  {item}
                </a>
              ))}
              <hr className="border-gray-100 my-2" />
              <a
                href="#consultation"
                onClick={() => setMenuOpen(false)}
                className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-center py-3 rounded-xl font-semibold shadow-md shadow-blue-200 hover:opacity-95 transition"
              >
                Get Started
              </a>
            </div>
          </div>
          
        </div>
      </header>

      {/* 2. HERO BANNER SECTION */}
      <section id="home" className="relative overflow-hidden bg-white py-12 lg:py-20">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none -z-10">
          <div className="absolute top-[-10%] left-[-10%] w-[400px] h-[400px] rounded-full bg-blue-400/10 blur-3xl" />
          <div className="absolute top-[20%] right-[-5%] w-[500px] h-[500px] rounded-full bg-indigo-300/10 blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            <div className="lg:col-span-6 text-center lg:text-left space-y-6">
              <span className="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-full text-xs font-semibold bg-blue-50 text-blue-600 border border-blue-100">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
                Next-Gen Digital Transformation
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 leading-[1.15]">
                Scale Your Business With <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Smart Engineering</span>
              </h1>
              <p className="text-lg text-slate-500 max-w-2xl mx-auto lg:mx-0 font-medium leading-relaxed">
                Deenova Digital builds high-performance software ecosystems, automating complex web architectures into seamless application architectures.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <a href="#consultation" className="w-full sm:w-auto text-center bg-blue-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-700 shadow-lg shadow-blue-600/20 transition-all hover:-translate-y-0.5">
                  Launch Project
                </a>
                <a href="#services" className="w-full sm:w-auto text-center inline-flex items-center justify-center gap-2 bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-700 px-8 py-4 rounded-xl font-bold transition-all">
                  Explore Services
                </a>
              </div>
            </div>

            {/* Simulated Live Analytics Graphic */}
            <div className="lg:col-span-6 relative flex justify-center">
              <div className="relative w-full max-w-[540px] aspect-[4/3] rounded-2xl bg-gradient-to-br from-slate-900 to-indigo-950 p-3 shadow-2xl shadow-indigo-950/20 ring-1 ring-white/10">
                <div className="flex items-center gap-1.5 pb-3 px-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500" />
                  <div className="w-3 h-3 rounded-full bg-amber-500" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500" />
                </div>
                <div className="w-full h-[calc(100%-24px)] rounded-lg bg-slate-900/40 backdrop-blur border border-white/5 p-4 flex flex-col justify-between">
                  <div className="flex justify-between items-center">
                    <div className="space-y-1">
                      <div className="h-2.5 w-24 bg-slate-700 rounded" />
                      <div className="h-4 w-36 bg-white rounded-md font-bold text-xs text-white flex items-center px-1">Analytics Dashboard</div>
                    </div>
                    <div className="h-7 w-20 bg-blue-500/20 border border-blue-500/30 rounded-lg text-[10px] text-blue-400 font-bold flex items-center justify-center">Active Node</div>
                  </div>
                  <div className="h-32 w-full bg-slate-800/40 rounded-xl border border-white/5 flex items-end p-3 gap-2">
                    <div className="w-full bg-indigo-500/30 h-1/3 rounded-t" />
                    <div className="w-full bg-blue-500/50 h-2/3 rounded-t" />
                    <div className="w-full bg-indigo-500/40 h-1/2 rounded-t" />
                    <div className="w-full bg-blue-600 h-5/6 rounded-t animate-pulse" />
                  </div>
                  <div className="grid grid-cols-3 gap-3">
                    <div className="bg-slate-800/60 p-2 rounded-lg border border-white/5"><div className="h-1.5 w-8 bg-slate-500 rounded mb-1"/><div className="h-3 w-12 bg-white rounded"/></div>
                    <div className="bg-slate-800/60 p-2 rounded-lg border border-white/5"><div className="h-1.5 w-8 bg-slate-500 rounded mb-1"/><div className="h-3 w-12 bg-white rounded"/></div>
                    <div className="bg-slate-800/60 p-2 rounded-lg border border-white/5"><div className="h-1.5 w-8 bg-slate-500 rounded mb-1"/><div className="h-3 w-12 bg-white rounded"/></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CORE SERVICES SECTION */}
      <section id="services" className="py-20 lg:py-28 bg-slate-50 border-t border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
            <span className="text-blue-600 text-sm font-extrabold uppercase tracking-widest block">Capabilities</span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Production-Grade Development Tailored for Scale
            </h2>
            <p className="text-base text-slate-500 font-medium">
              We leverage modern architectures, type-safe development environments, and automated pipelines to bring robust products to life.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Service 1: Software Development */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200/60 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 002-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Software Dev</h3>
              <p className="text-sm text-slate-500 leading-relaxed mb-4">
                Monolith transitions, scalable API frameworks, and optimized database systems built using Rust, Go, and TypeScript.
              </p>
              <span className="text-xs font-bold text-blue-600 group-hover:underline inline-flex items-center gap-1">
                Explore Tech Stack →
              </span>
            </div>

            {/* Service 2: Web Development */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200/60 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9h18" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Web Dev</h3>
              <p className="text-sm text-slate-500 leading-relaxed mb-4">
                Ultra-fast Next.js interfaces paired with headless content platforms yielding high SEO performance scores.
              </p>
              <span className="text-xs font-bold text-indigo-600 group-hover:underline inline-flex items-center gap-1">
                Explore Tech Stack →
              </span>
            </div>

            {/* Service 3: Android Development */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200/60 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Android Dev</h3>
              <p className="text-sm text-slate-500 leading-relaxed mb-4">
                Native Kotlin and cross-platform architecture deployment optimizing memory overhead and seamless offline operations.
              </p>
              <span className="text-xs font-bold text-emerald-600 group-hover:underline inline-flex items-center gap-1">
                Explore Tech Stack →
              </span>
            </div>

            {/* Service 4: Cloud Services */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200/60 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center font-bold mb-6 group-hover:bg-purple-600 group-hover:text-white transition-colors duration-300">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Cloud Services</h3>
              <p className="text-sm text-slate-500 leading-relaxed mb-4">
                Infrastructure as Code via Terraform, Kubernetes orchestration clusters, and secure AWS/GCP pipelines.
              </p>
              <span className="text-xs font-bold text-purple-600 group-hover:underline inline-flex items-center gap-1">
                Explore Tech Stack →
              </span>
            </div>

          </div>
        </div>
      </section>

      {/* 4. ANIMATED CONSULTATION ENGINE (STEPPER FORM) */}
      <section id="consultation" className="py-20 lg:py-28 bg-white overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center space-y-4 mb-12">
            <span className="text-blue-600 text-sm font-extrabold uppercase tracking-widest block">Direct Portal</span>
            <h2 className="text-3xl font-black text-slate-900 tracking-tight">Configure Your Project Workspace</h2>
            <p className="text-slate-500 text-sm max-w-md mx-auto">
              Select your required technical domains to initialize direct architectural scope evaluations.
            </p>
          </div>

          {/* Stepper Progress Architecture */}
          <div className="flex items-center justify-center gap-4 mb-12">
            {[1, 2, 3].map((step) => (
              <div key={step} className="flex items-center gap-4">
                <div className={`w-8 h-8 rounded-full font-bold text-xs flex items-center justify-center transition-all duration-300 ${
                  formStep >= step 
                    ? "bg-blue-600 text-white shadow-md shadow-blue-200 ring-4 ring-blue-50" 
                    : "bg-slate-100 text-slate-400"
                }`}>
                  {step}
                </div>
                {step < 3 && (
                  <div className={`h-1 w-12 rounded transition-colors duration-300 ${
                    formStep > step ? "bg-blue-600" : "bg-slate-100"
                  }`} />
                )}
              </div>
            ))}
          </div>

          {/* Stepper Form Multi-Tier Processing Wrapper */}
          <div className="bg-slate-50 rounded-2xl border border-slate-200/70 p-6 sm:p-10 shadow-xl shadow-slate-100 relative min-h-[340px] transition-all duration-500">
            
            {!formSubmitted ? (
              <form onSubmit={handleFormSubmit} className="space-y-6">
                
                {/* STEP 1: Select Scope Domain Area */}
                {formStep === 1 && (
                  <div className="space-y-4">
                    <label className="block text-sm font-bold text-slate-800 mb-2">
                      Which engineering stack does your ecosystem require?
                    </label>
                    <div className="grid sm:grid-cols-2 gap-4">
                      {[
                        { id: "software", label: "Core Software Architecture", desc: "APIs, Microservices, Scale Strategy" },
                        { id: "web", label: "Web Applications", desc: "Next.js, UI/UX, Component Infrastructures" },
                        { id: "android", label: "Android Mobile Platforms", desc: "Kotlin Native, Distributed Deployment" },
                        { id: "cloud", label: "Cloud Infrastructure / Devops", desc: "AWS, Kubernetes, Terraform Automations" }
                      ].map((srv) => (
                        <button
                          key={srv.id}
                          type="button"
                          onClick={() => handleServiceSelect(srv.label)}
                          className={`p-4 text-left rounded-xl border-2 transition-all group ${
                            formData.serviceType === srv.label
                              ? "bg-white border-blue-600 shadow-md ring-4 ring-blue-50"
                              : "bg-white border-slate-200/80 hover:border-slate-300"
                          }`}
                        >
                          <p className="font-bold text-slate-900 group-hover:text-blue-600 transition-colors">{srv.label}</p>
                          <p className="text-xs text-slate-400 mt-1">{srv.desc}</p>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* STEP 2: Project Specifications Target Config */}
                {formStep === 2 && (
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-bold text-slate-800 mb-2">Project or Company Identity</label>
                      <input
                        type="text"
                        placeholder="e.g., Enterprise Core V2"
                        value={formData.projectName}
                        onChange={(e) => setFormData({ ...formData, projectName: e.target.value })}
                        className="w-full p-4 rounded-xl border border-slate-200 focus:outline-none focus:ring-4 focus:ring-blue-50 focus:border-blue-600 transition-all bg-white"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-slate-800 mb-2">Estimated Allocation Window</label>
                      <select
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full p-4 rounded-xl border border-slate-200 focus:outline-none focus:ring-4 focus:ring-blue-50 focus:border-blue-600 transition-all bg-white font-medium text-slate-700"
                        required
                      >
                        <option value="">Select Estimated Target Scope...</option>
                        <option value="mvp">MVP Construction (&lt; $15k)</option>
                        <option value="scale">Scale Integration ($15k - $50k)</option>
                        <option value="enterprise">Full Enterprise Fleet Suite ($50k+)</option>
                      </select>
                    </div>
                    
                    <div className="flex justify-between items-center pt-4">
                      <button type="button" onClick={() => setFormStep(1)} className="text-sm font-bold text-slate-500 hover:text-slate-900 transition-colors">
                        ← Back
                      </button>
                      <button
                        type="button"
                        disabled={!formData.projectName || !formData.budget}
                        onClick={() => setFormStep(3)}
                        className="bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white font-bold py-3 px-6 rounded-xl transition-all shadow-md shadow-blue-100"
                      >
                        Continue Setup
                      </button>
                    </div>
                  </div>
                )}

                {/* STEP 3: Correspondence Routing Target Destination */}
                {formStep === 3 && (
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-bold text-slate-800 mb-2">Secure Correspondence Email</label>
                      <input
                        type="email"
                        placeholder="engineering@yourcorporation.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full p-4 rounded-xl border border-slate-200 focus:outline-none focus:ring-4 focus:ring-blue-50 focus:border-blue-600 transition-all bg-white"
                        required
                      />
                    </div>
                    <div className="bg-blue-50/50 p-4 rounded-xl border border-blue-100/50 space-y-1">
                      <p className="text-xs font-bold text-blue-800 flex items-center gap-1.5">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944a11.954 11.954 0 007.834 3.056A11.982 11.982 0 0118 10c0 5.223-3.338 9.665-8 11.18A11.982 11.982 0 012 10c0-1.74.373-3.4 1.041-4.897zM10 13a1 1 0 100-2 1 1 0 000 2zm0-4a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"/></svg>
                        Initialization Summary
                      </p>
                      <p className="text-[11px] text-slate-500 font-medium leading-relaxed">
                        Setting up structural profile workspace for <span className="text-slate-800 font-bold">{formData.projectName || "Identity pending"}</span> under our <span className="text-slate-800 font-bold">{formData.serviceType}</span> protocols.
                      </p>
                    </div>

                    <div className="flex justify-between items-center pt-4">
                      <button type="button" onClick={() => setFormStep(2)} className="text-sm font-bold text-slate-500 hover:text-slate-900 transition-colors">
                        ← Back
                      </button>
                      <button
                        type="submit"
                        className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:opacity-95 text-white font-bold py-3.5 px-8 rounded-xl transition-all shadow-md shadow-blue-200"
                      >
                        Submit Pipeline Request
                      </button>
                    </div>
                  </div>
                )}

              </form>
            ) : (
              /* Success Presentation Pipeline Created State */
              <div className="py-8 text-center space-y-4">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-2 shadow-inner">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-black text-slate-900">Ecosystem Channel Created</h3>
                <p className="text-sm text-slate-500 max-w-md mx-auto leading-relaxed">
                  An automated secure workspace confirmation has been dispatched to <span className="font-bold text-slate-800">{formData.email}</span>. Our solution engineering desk will contact you within 6 business hours.
                </p>
              </div>
            )}

          </div>

        </div>
      </section>

      {/* 5. CLIENT INFORMATION SHIELD (SERVICES PROVIDED TO SNPP) */}
      <section id="clients" className="relative bg-slate-50 text-slate-900 py-20 px-6 overflow-hidden border-t border-slate-200/60">
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
            
            {/* Left Column: Brief Client Info & Interactive Feature Navigation */}
            <div className="md:col-span-5 flex flex-col justify-between space-y-6">
              <div>
                <div className="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-full text-xs font-semibold bg-blue-50 text-blue-600 border border-blue-100 mb-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
                  Live Implementation
                </div>
                <h3 className="text-xl font-black text-slate-900">SNPP Pvt Ltd Seal Manufacturing</h3>
                <p className="text-slate-500 text-sm mt-2 font-medium leading-relaxed">
                  We built a lightweight monitoring ecosystem for SNPP. Click the modules below to see how our software displays live metrics for their engineering teams.
                </p>
              </div>

              {/* Functional Dashboard Navigation Nodes */}
              <div className="space-y-2">
                {clientModules.map((mod) => (
                  <button
                    key={mod.id}
                    type="button"
                    onClick={() => setActiveClientTab(mod.id)}
                    className={`w-full text-left p-4 rounded-xl border transition-all duration-300 flex justify-between items-center group ${
                      activeClientTab === mod.id
                        ? "bg-white border-blue-600 shadow-md ring-4 ring-blue-50"
                        : "bg-slate-50/50 border-slate-200 hover:border-slate-300"
                    }`}
                  >
                    <span className={`text-sm font-bold transition-colors ${
                      activeClientTab === mod.id ? "text-blue-600" : "text-slate-800 group-hover:text-blue-600"
                    }`}>
                      {mod.label}
                    </span>
                    <span className="text-xs font-bold text-blue-600 font-mono opacity-60 group-hover:opacity-100 transition-opacity">
                      {mod.tag} →
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Right Column: Simulated Software Interface Blueprint Window (No Graphs) */}
            <div className="md:col-span-7 bg-gradient-to-br from-slate-900 to-indigo-950 rounded-xl p-6 shadow-xl ring-1 ring-white/10 flex flex-col justify-between min-h-[260px]">
              
              {/* Terminal Frame Controls */}
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

              {/* Dynamic Real-Time Micro-State Content Swapping */}
              <div className="py-6 flex-grow flex flex-col justify-center">
                <p className="text-[10px] font-mono text-slate-400 uppercase tracking-wider mb-2">Active Module Display</p>
                
                {activeClientTab === "BatchTracking" && (
                  <div className="space-y-1.5">
                    <div className="text-xl font-bold text-emerald-400">Live Batch Tracking</div>
                    <p className="text-xs text-slate-300 leading-relaxed font-medium">
                      Continuous pipeline visualization for all ongoing seal manufacturing runs. Real-time updates map the precise lifecycle status of active automotive and rotary batches instantly.
                    </p>
                  </div>
                )}

                {activeClientTab === "PlanningStock" && (
                  <div className="space-y-1.5">
                    <div className="text-xl font-bold text-blue-400">Monthly Planning & Stock</div>
                    <p className="text-xs text-slate-300 leading-relaxed font-medium">
                      Raw material counts and finished inventory profiles are generated dynamically. Streamlines procurement timelines with auto-refresh stock counters.
                  </p>
                  </div>
                )}

                {activeClientTab === "QualityRejection" && (
                  <div className="space-y-1.5">
                    <div className="text-xl font-bold text-rose-400">Rejection Reporting Logs</div>
                    <p className="text-xs text-slate-300 leading-relaxed font-medium">
                      Instant defect tracking parameters logging dimensional variances or material structural faults. Provides error tracking readouts to the QA lines immediately.
                    </p>
                  </div>
                )}

                {activeClientTab === "InOutSystem" && (
                  <div className="space-y-1.5">
                    <div className="text-xl font-bold text-amber-400">Advanced In/Out System</div>
                    <p className="text-xs text-slate-300 leading-relaxed font-medium">
                      Powered natively by our integrated Android application architecture. Factory warehouse teams handle dispatch manifests and raw material inputs smoothly on handheld devices.
                    </p>
                  </div>
                )}
              </div>

              {/* Micro-Metrics Status Footer */}
              <div className="grid grid-cols-2 gap-4 border-t border-white/10 pt-3 text-[11px] font-mono text-slate-400">
                <div>
                  <span className="text-slate-500 block text-[10px]">System Status:</span>
                  <span className="text-emerald-400 font-bold">● Live Monitoring</span>
                </div>
                <div>
                  <span className="text-slate-500 block text-[10px]">Active Node:</span>
                  <span className="text-slate-200 font-bold">
                    {clientModules.find((m) => m.id === activeClientTab)?.label}
                  </span>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

 <TeamInfo/>
 <ServicesProvided/>
  <ContactInfo/>

      {/* 6. CONVERSATION CLOSURE FOOTER */}
      <footer className="bg-slate-50 border-t border-slate-200/60 text-slate-600 py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute bottom-0 left-1/4 w-96 h-32 bg-blue-400/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          
          <div className="text-center md:text-left space-y-1.5">
            <div className="text-lg font-black tracking-tight text-slate-900">
              Deenova<span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"> Digital</span>
            </div>
            <p className="text-xs text-slate-400 font-medium">
              Automating architectures into seamless engineering ecosystems.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-xs font-bold text-slate-500">
            <a href="#home" className="hover:text-blue-600 transition-colors">Home</a>
            <a href="#services" className="hover:text-blue-600 transition-colors">Services</a>
            <a href="#consultation" className="hover:text-blue-600 transition-colors">Consultation</a>
            <a href="#clients" className="hover:text-blue-600 transition-colors">Clients</a>
          </div>

          <div className="text-center md:text-right font-mono text-[11px] text-slate-400">
            <p>&copy; {new Date().getFullYear()} Deenova Digital. All rights reserved.</p>
            <p className="text-[10px] text-slate-400/70 mt-0.5">Engineered for Scale.</p>
          </div>

        </div>
      </footer>

    </div>
  );
}