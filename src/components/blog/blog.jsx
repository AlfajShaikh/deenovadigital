import React, { useState, useEffect } from "react";

import pic1 from "../../assets/images/pic-1.jpeg"
import pic2 from "../../assets/images/pic-2.jpeg"
import pic3 from "../../assets/images/pic-3.jpeg"
import pic4 from "../../assets/images/pic-4.mp4"

export default function Blog() {
  const [activeTab, setActiveTab] = useState("All");
  const [currentGalleryIndex, setCurrentGalleryIndex] = useState(0);

  // 1. Company Media/Pictures Payload (Cycle tracking through inside workspace views)
  const officePictures = [
    {
      id: "img1",
      url: pic1,
      caption: "Deenova Architecture Sync Lab",
      tag: "Workspace With Front-End"
    },
    {
      id: "img2",
      url: pic2,
      caption: "Cross-Platform Engineering Sprint",
      tag: "Developer"
    },
    {
      id: "img3",
      url: pic3,
      caption: "Cloud High-Fidelity Prototype Desk",
      tag: "Cloud"
    }
  ];

  // Automated background effect to rotate company pictures smoothly
  useEffect(() => {
    const photoInterval = setInterval(() => {
      setCurrentGalleryIndex((prevIndex) => (prevIndex + 1) % officePictures.length);
    }, 5000);
    return () => clearInterval(photoInterval);
  }, [officePictures.length]);

  // 2. High-Value Informational Blog Payload
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

  return (
    <section id="portfolio" className="relative bg-slate-50 text-slate-900 py-20 px-6 overflow-hidden border-t border-slate-200/60">
      {/* Structural Backdrop Ambient Blur Elements consistent with Deenova Design Language */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none -z-10">
        <div className="absolute top-[20%] right-[-10%] w-[450px] h-[450px] rounded-full bg-blue-400/10 blur-3xl" />
        <div className="absolute bottom-[15%] left-[-10%] w-[450px] h-[450px] rounded-full bg-indigo-300/10 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Typography Header Block */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-blue-600 text-sm font-extrabold uppercase tracking-widest block">
            Media Hub & Insights
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Company Highlights & Tech Briefings
          </h2>
          <p className="text-base text-slate-500 font-medium">
            Explore inside look operations at our development workspace alongside the latest software engineering frameworks published by our fleet.
          </p>
        </div>

        {/* Master Content Split Grid Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* LEFT COMPONENT LAYER: Animated Company Picture Frame Portfolio (5 Columns) */}
          <div className="lg:col-span-5 bg-white p-5 rounded-2xl border border-slate-200/70 shadow-xl shadow-slate-100/80 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-full text-xs font-semibold bg-blue-50 text-blue-600 border border-blue-100">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
                Workspace Dynamic Stream
              </div>
              <div>
                <h3 className="text-xl font-black text-slate-900">Life Inside Deenova</h3>
                <p className="text-xs text-slate-400 font-medium mt-1">
                  A snapshot view across our active collaborative workspaces and product research environments.
                </p>
              </div>

              {/* Smooth Transitions Animated Canvas Wrapper */}
              <div className="relative rounded-xl aspect-[4/3] overflow-hidden bg-slate-900 mt-4 group shadow-md border border-slate-100">
                <img
                  src={officePictures[currentGalleryIndex].url}
                  alt={officePictures[currentGalleryIndex].caption}
                  className="w-full h-full object-cover transition-all duration-1000 ease-in-out opacity-90 scale-100 group-hover:scale-105"
                />
                
                {/* Floating Top Tag Pill */}
                <span className="absolute top-3 left-3 bg-slate-900/70 backdrop-blur-md border border-white/20 text-white font-mono text-[10px] font-bold px-2 py-0.5 rounded-md">
                  {officePictures[currentGalleryIndex].tag}
                </span>

                {/* Lower Gradient Captions Overlay Text */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent flex flex-col justify-end p-4">
                  <p className="text-xs font-bold text-white font-sans tracking-wide">
                    {officePictures[currentGalleryIndex].caption}
                  </p>
                </div>
              </div>
            </div>

            {/* Slider Track Manual Checkpoint Indicators */}
            <div className="flex items-center gap-2 pt-6">
              {officePictures.map((_, dotIdx) => (
                <button
                  key={_.id}
                  onClick={() => setCurrentGalleryIndex(dotIdx)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    currentGalleryIndex === dotIdx ? "w-6 bg-blue-600" : "w-1.5 bg-slate-200"
                  }`}
                  aria-label={`Switch view to picture slot ${dotIdx + 1}`}
                />
              ))}
            </div>
          </div>

          {/* RIGHT COMPONENT LAYER: Filterable Blog Hub Engine (7 Columns) */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
            
            {/* Taxonomy Dynamic Action Selectors */}
            <div className="flex flex-wrap items-center gap-1.5 bg-white p-1.5 rounded-2xl border border-slate-200/70 shadow-sm self-start">
              {filterTabs.map((tab) => (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold tracking-wide transition-all duration-300 ${
                    activeTab === tab
                      ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md shadow-blue-100"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Rendered Blog Posts Stream Wrapper */}
            <div className="space-y-4 flex-grow">
              {filteredBlogs.length > 0 ? (
                filteredBlogs.map((post) => (
                  <div
                    key={post.id}
                    className="bg-white p-5 rounded-2xl border border-slate-200/70 shadow-sm hover:shadow-md hover:border-blue-500/40 transition-all duration-300 group flex flex-col justify-between min-h-[140px]"
                  >
                    <div className="space-y-1.5">
                      {/* Meta Node Data Details Row */}
                      <div className="flex items-center gap-3 text-[10px] font-mono font-bold text-slate-400">
                        <span className="text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-md font-sans">
                          {post.category}
                        </span>
                        <span>{post.date}</span>
                        <span>•</span>
                        <span>{post.readTime}</span>
                      </div>
                      
                      {/* Post Title Link */}
                      <h4 className="text-base font-black text-slate-900 tracking-tight group-hover:text-blue-600 transition-colors leading-snug">
                        {post.title}
                      </h4>
                      
                      {/* Snippet Description */}
                      <p className="text-xs text-slate-500 font-medium leading-relaxed">
                        {post.snippet}
                      </p>
                    </div>

                    {/* Action Prompt */}
                    <div className="pt-3 border-t border-slate-50 mt-3 flex justify-end">
                      <span className="text-[11px] font-bold text-blue-600 group-hover:translate-x-1 transition-transform inline-flex items-center gap-1 font-mono">
                        Read Deployment Review →
                      </span>
                    </div>
                  </div>
                ))
              ) : (
                <div className="bg-white/40 border border-dashed border-slate-200 rounded-2xl p-12 text-center text-slate-400 text-sm font-medium">
                  No publication records under this criteria yet.
                </div>
              )}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}