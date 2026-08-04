import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import pic1 from "../../assets/images/pic-1.jpeg";
import pic5 from "../../assets/images/pic-5.jpeg";
import pic6 from "../../assets/images/pic-6.jpeg";

export default function Blog() {
  const [activeTab, setActiveTab] = useState("All");
  const [currentGalleryIndex, setCurrentGalleryIndex] = useState(0);

  const officePictures = [
    {
      id: "img1",
      url: pic1,
      caption: "Deenova Architecture Sync Lab",
      tag: "Workspace"
    },
    {
      id: "img2",
      url: pic5,
      caption: "Cross-Platform Engineering Sprint",
      tag: "Developer"
    },
    {
      id: "img3",
      url: pic6,
      caption: "Cloud High-Fidelity Prototype Desk",
      tag: "Cloud"
    }
  ];

  // Rotate pictures every 5 seconds
  useEffect(() => {
    const photoInterval = setInterval(() => {
      setCurrentGalleryIndex((prevIndex) => (prevIndex + 1) % officePictures.length);
    }, 5000);
    return () => clearInterval(photoInterval);
  }, [officePictures.length]);

  const blogPosts = [
    {
      id: "blog1",
      title: "Automating Complex Enterprise Microservices into Type-Safe Environments",
      category: "Development",
      date: "June 2026",
      readTime: "5 min read",
      snippet: "Discover how our engineering desk shifts standard architectural monolith workflows into low-overhead, concurrent Rust and TypeScript systems."
    },
    {
      id: "blog2",
      title: "Designing Seamless Component Systems for Android & Kotlin Native Platforms",
      category: "Design",
      date: "May 2026",
      readTime: "4 min read",
      snippet: "How Deenova engineers structured lightning-fast offline cache systems to drive real-time factory operations without memory overhead thresholds."
    },
    {
      id: "blog3",
      title: "Declarative Cloud Orchestration: Scaling Pipelines to Kubernetes Infrastructure",
      category: "Cloud",
      date: "April 2026",
      readTime: "6 min read",
      snippet: "An evaluation of secure infrastructure blueprint mapping using continuous Terraform automations inside multi-tier AWS deployments."
    }
  ];

  const filterTabs = ["All", "Development", "Design", "Cloud"];

  const filteredBlogs = activeTab === "All"
    ? blogPosts
    : blogPosts.filter((post) => post.category === activeTab);

  // Staggered Entrance Animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0, rotateX: -10 },
    visible: { 
      y: 0, 
      opacity: 1, 
      rotateX: 0,
      transition: { type: "spring", stiffness: 80, damping: 15 } 
    }
  };

  return (
    <section id="portfolio" className="relative bg-slate-50/50 text-slate-900 py-24 px-6 overflow-hidden border-t border-slate-200/60">
      
      {/* --- Animated Ambient Background --- */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        <motion.div 
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[0%] left-[-5%] w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-blue-300/20 to-indigo-400/10 blur-[100px]" 
        />
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-[-10%] right-[-10%] w-[700px] h-[700px] rounded-full bg-gradient-to-br from-indigo-300/20 to-cyan-300/20 blur-[120px]" 
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* --- Section Header --- */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 pb-8 border-b border-slate-200/60">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl space-y-4"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-blue-100 shadow-sm shadow-blue-100/50 text-blue-600 text-xs font-bold tracking-widest uppercase">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
              </span>
              Media Hub & Insights
            </div>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Innovation <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                Briefings & Highlights
              </span>
            </h2>
            <p className="text-base text-slate-500 font-medium leading-relaxed max-w-lg">
              Explore internal workspace streams alongside the cutting-edge software engineering frameworks designed by our development fleet.
            </p>
          </motion.div>

          {/* --- Navigation Tabs --- */}
          <motion.div 
             initial={{ opacity: 0, x: 20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="flex flex-wrap items-center gap-1 bg-white/80 backdrop-blur-md p-1.5 rounded-2xl border border-slate-200 shadow-sm md:self-end"
          >
            {filterTabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`relative px-5 py-2.5 rounded-xl text-sm font-semibold tracking-wide transition-colors duration-300 ${
                  activeTab === tab ? "text-white" : "text-slate-500 hover:text-slate-900"
                }`}
              >
                {activeTab === tab && (
                  <motion.div
                    layoutId="activeTabIndicator"
                    className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl shadow-md shadow-blue-600/20"
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  />
                )}
                <span className="relative z-10">{tab}</span>
              </button>
            ))}
          </motion.div>
        </div>

        {/* --- 3-Column Asymmetrical Grid Layout --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 items-start">
          
          {/* COLUMN 1: Dynamic Workspace Stream (Takes 4 cols) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4 bg-white/60 backdrop-blur-xl rounded-3xl border border-white shadow-2xl shadow-slate-200/50 p-6 space-y-6 relative group"
          >
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold text-slate-900 tracking-tight flex items-center gap-2">
                <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                Life Inside Deenova
              </h3>
              {/* Animated Progress Indicators */}
              <div className="flex gap-1.5">
                {officePictures.map((_, idx) => (
                  <div key={idx} className="h-1.5 w-6 bg-slate-200 rounded-full overflow-hidden relative">
                    {currentGalleryIndex === idx && (
                      <motion.div 
                        key={currentGalleryIndex}
                        initial={{ width: "0%" }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 5, ease: "linear" }}
                        className="absolute top-0 left-0 h-full bg-blue-600 rounded-full"
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Simulated Glass-framed Media Player Canvas */}
            <div className="relative rounded-2xl aspect-[4/5] overflow-hidden bg-slate-900 shadow-inner group-hover:shadow-blue-900/20 transition-shadow duration-500">
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentGalleryIndex}
                  src={officePictures[currentGalleryIndex].url}
                  alt={officePictures[currentGalleryIndex].caption}
                  initial={{ opacity: 0, scale: 1.1, filter: "blur(4px)" }}
                  animate={{ opacity: 0.9, scale: 1, filter: "blur(0px)" }}
                  exit={{ opacity: 0, scale: 0.95, filter: "blur(4px)" }}
                  transition={{ duration: 0.7 }}
                  className="w-full h-full object-cover"
                />
              </AnimatePresence>

              {/* Lower Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent flex flex-col justify-end p-6">
                <motion.span 
                  key={`tag-${currentGalleryIndex}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="self-start mb-3 px-2.5 py-1 bg-white/20 backdrop-blur-md border border-white/30 text-white font-mono text-[10px] font-bold tracking-widest uppercase rounded-md shadow-sm"
                >
                  {officePictures[currentGalleryIndex].tag}
                </motion.span>
                <motion.p 
                  key={`cap-${currentGalleryIndex}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-base font-semibold text-white tracking-wide leading-snug drop-shadow-md"
                >
                  {officePictures[currentGalleryIndex].caption}
                </motion.p>
              </div>
            </div>

            <p className="text-sm text-slate-500 font-medium leading-relaxed text-center">
              A real-time snapshot window mapping active collaborative pipelines and platform validation checkpoints.
            </p>
          </motion.div>

          {/* COLUMNS 2 & 3: Staggered Insights Stream (Takes 8 cols) */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full"
          >
            <AnimatePresence mode="popLayout">
              {filteredBlogs.length > 0 ? (
                filteredBlogs.map((post, index) => {
                  const isFeatured = index === 0 && filteredBlogs.length === 3;
                  return (
                    <motion.div
                      key={post.id}
                      variants={itemVariants}
                      layout
                      exit={{ opacity: 0, scale: 0.9, y: 20 }}
                      whileHover="hover"
                      className={`relative bg-white p-8 rounded-3xl border border-slate-200/70 shadow-sm transition-all duration-300 flex flex-col justify-between min-h-[280px] group cursor-pointer overflow-hidden ${
                        isFeatured ? "sm:col-span-2 shadow-md shadow-blue-100/50" : ""
                      }`}
                    >
                      {/* Hover Animated Border Gradient */}
                      <motion.div 
                        className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        style={{ zIndex: 0 }}
                      />

                      <div className="space-y-5 relative z-10">
                        {/* Meta Node */}
                        <div className="flex items-center gap-3 text-xs font-mono font-semibold text-slate-400">
                          <span className="text-blue-700 bg-blue-50/80 px-3 py-1.5 rounded-lg font-sans tracking-wide">
                            {post.category}
                          </span>
                          <span>{post.date}</span>
                          <span className="w-1 h-1 bg-slate-300 rounded-full" />
                          <span>{post.readTime}</span>
                        </div>

                        {/* Header Content */}
                        <div className="space-y-3">
                          <h4 className={`font-extrabold text-slate-900 tracking-tight leading-snug group-hover:text-blue-700 transition-colors duration-300 ${
                            isFeatured ? "text-2xl sm:text-3xl max-w-2xl" : "text-lg"
                          }`}>
                            {post.title}
                          </h4>
                          <p className={`text-slate-500 font-medium leading-relaxed ${
                            isFeatured ? "text-base max-w-xl" : "text-sm"
                          }`}>
                            {post.snippet}
                          </p>
                        </div>
                      </div>

                      {/* Integrated Interactive Action Bar */}
                      <div className="pt-6 border-t border-slate-100 mt-6 flex items-center justify-between text-sm font-bold text-blue-600 relative z-10">
                        <span className="tracking-wide">Read Full Briefing</span>
                        <motion.div 
                          className="bg-blue-50 text-blue-600 p-2 rounded-full group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300"
                          variants={{
                            hover: { x: 5, rotate: -45 }
                          }}
                        >
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </motion.div>
                      </div>
                    </motion.div>
                  )
                })
              ) : (
                <motion.div 
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="sm:col-span-2 bg-white/40 backdrop-blur-sm border-2 border-dashed border-slate-200 rounded-3xl p-20 flex flex-col items-center justify-center text-center space-y-4"
                >
                  <div className="p-4 bg-slate-100 rounded-full text-slate-400">
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                    </svg>
                  </div>
                  <p className="text-slate-500 text-base font-semibold">
                    No publication records matched under this criteria.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

        </div>
      </div>
    </section>
  );
}