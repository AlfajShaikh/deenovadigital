import { motion } from "framer-motion";

export default function Banner() {
  // Animation variants for staggered text entry
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } },
  };

  return (
    <section className="relative overflow-hidden min-h-screen flex items-center bg-slate-50 pt-16">
      
      {/* Background Dot-Matrix Mesh Grid Pattern */}
      <div className="absolute inset-0 z-0 opacity-40">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="dot-grid" width="24" height="24" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1" fill="#475569" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dot-grid)" />
        </svg>
      </div>

      {/* Modern Light Gradient Ambient Blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-[500px] h-[500px] bg-gradient-to-tr from-blue-300/20 to-indigo-300/20 rounded-full blur-3xl -top-40 -left-20 animate-pulse duration-[8s]" />
        <div className="absolute w-[600px] h-[600px] bg-gradient-to-bl from-cyan-200/30 to-blue-200/20 rounded-full blur-3xl bottom-0 right-0 animate-pulse duration-[10s]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-20 w-full">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Content Side (Takes 7 cols on wide screens) */}
          <motion.div 
            className="lg:col-span-7 space-y-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200/60 shadow-sm">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
              </span>
              <span className="text-blue-700 text-sm font-medium tracking-wide">
                🚀 Digital Innovation Partner
              </span>
            </motion.div>

            <motion.h1 
              variants={itemVariants}
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.1]"
            >
              Building{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                Smart Software
              </span>{" "}
              For Growing Businesses
            </motion.h1>

            <motion.p 
              variants={itemVariants}
              className="text-lg text-slate-600 max-w-xl leading-relaxed font-normal"
            >
              Deenova Digital helps companies transform ideas into powerful web applications, 
              mobile apps, ERP systems, automation tools, and elite digital experiences.
            </motion.p>

            {/* Interactive Call To Action Buttons */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 pt-4">
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-xl font-semibold shadow-lg shadow-blue-600/20 transition-all duration-200"
              >
                Start Your Project
              </motion.button>

              <motion.button 
                whileHover={{ scale: 1.02, backgroundColor: "#f1f5f9" }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 border border-slate-300 bg-white text-slate-700 rounded-xl font-semibold shadow-sm transition-all duration-200"
              >
                View Portfolio
              </motion.button>
            </motion.div>

            {/* Premium, Redesigned Light Stats Grid */}
            {/* <motion.div 
              variants={itemVariants}
              className="grid grid-cols-3 gap-4 max-w-md pt-8 border-t border-slate-200"
            >
              <div>
                <h3 className="text-3xl font-bold bg-gradient-to-r from-slate-900 to-slate-800 bg-clip-text text-transparent">50+</h3>
                <p className="text-sm font-medium text-slate-500">Projects Delivered</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold bg-gradient-to-r from-slate-900 to-slate-800 bg-clip-text text-transparent">20+</h3>
                <p className="text-sm font-medium text-slate-500">Happy Clients</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold bg-gradient-to-r from-slate-900 to-slate-800 bg-clip-text text-transparent">99%</h3>
                <p className="text-sm font-medium text-slate-500">Success Rate</p>
              </div>
            </motion.div> */}
          </motion.div>

          {/* Right Asymmetric Interactive Graphic Side (Takes 5 cols) */}
          <div className="lg:col-span-5 relative mt-12 lg:mt-0 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative w-full max-w-[420px] aspect-[4/5] flex items-center justify-center"
            >
              {/* Main Background Structural Graphic */}
              <div className="absolute inset-4 rounded-[2.5rem] bg-gradient-to-tr from-blue-100 to-indigo-50/50 border border-white shadow-inner transform -rotate-3" />

              {/* Floating Element 1: Main Platform Preview */}
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 m-auto w-[85%] h-[65%] bg-white rounded-2xl shadow-xl shadow-slate-200/80 border border-slate-100 overflow-hidden p-3 z-10"
              >
                <div className="w-full h-full bg-slate-50 rounded-lg border border-slate-100 overflow-hidden relative">
                  <div className="h-6 bg-white border-b border-slate-100 flex items-center gap-1.5 px-3">
                    <span className="w-2 h-2 rounded-full bg-rose-400" />
                    <span className="w-2 h-2 rounded-full bg-amber-400" />
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  </div>
                  <img
                    src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3"
                    alt="Deenova Digital Software Interface"
                    className="w-full h-full object-cover filter grayscale-[10%] contrast-[105%]"
                  />
                </div>
              </motion.div>

              {/* Floating Element 2: Software Development Tag */}
              <motion.div
                animate={{ y: [-10, 8, -10] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-8 -left-4 z-20 bg-white/95 backdrop-blur-md px-5 py-3.5 rounded-2xl shadow-lg border border-slate-100 flex items-center gap-3"
              >
                <div className="p-2 bg-blue-50 text-blue-600 rounded-lg font-bold text-sm">⚡</div>
                <div className="text-sm font-semibold text-slate-800">Software Dev</div>
              </motion.div>

              {/* Floating Element 3: Mobile Apps Tag */}
              <motion.div
                animate={{ y: [12, -10, 12] }}
                transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-12 -right-4 z-20 bg-gradient-to-r from-blue-600 to-indigo-600 px-5 py-3.5 rounded-2xl shadow-lg shadow-blue-600/10 flex items-center gap-3 text-white"
              >
                <div className="p-1 bg-white/20 rounded-lg text-sm">📱</div>
                <div className="text-sm font-semibold tracking-wide">Mobile Apps</div>
              </motion.div>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}