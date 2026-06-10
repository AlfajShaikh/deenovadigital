import { motion } from "framer-motion";

export default function Banner() {
    return (
        <section className="relative overflow-hidden min-h-screen flex items-center bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 mt-10">

            {/* Animated Background Blobs */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute w-96 h-96 bg-blue-500/20 rounded-full blur-3xl top-20 left-10 animate-pulse" />
                <div className="absolute w-96 h-96 bg-cyan-400/20 rounded-full blur-3xl bottom-10 right-10 animate-pulse" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-20">

                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Left Content */}
                    <div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="inline-block mb-6"
                        >
                            <span className="px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-300 text-sm">
                                🚀 Digital Innovation Partner
                            </span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 35 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-5xl md:text-6xl lg:text-7xl font-bold text-green-200 leading-tight"
                        >
                            Building
                            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                                Smart Software
                            </span>
                            For Growing Businesses
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 35 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="mt-8 text-lg text-gray-300 max-w-xl"
                        >
                            Deenova Digital helps companies transform ideas into
                            powerful web applications, mobile apps, ERP systems,
                            automation tools, and digital experiences.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            className="flex flex-wrap gap-4 mt-10"
                        >
                            <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold transition">
                                Start Your Project
                            </button>

                            <button className="px-8 py-4 border border-white/20 hover:bg-white/10 text-white rounded-xl font-semibold transition">
                                View Portfolio
                            </button>
                        </motion.div>

                        {/* Stats */}
                        {/* <div className="grid grid-cols-3 gap-6 mt-14">
                            <div>
                                <h3 className="text-3xl font-bold text-black">50+</h3>
                                <p className="text-gray-400">Projects</p>
                            </div>

                            <div>
                                <h3 className="text-3xl font-bold text-black">20+</h3>
                                <p className="text-gray-400">Clients</p>
                            </div>

                            <div>
                                <h3 className="text-3xl font-bold text-black">99%</h3>
                                <p className="text-gray-400">Success Rate</p>
                            </div>
                        </div> */}
                    </div>

                    {/* Right Side */}
                    <motion.div
                        animate={{
                            y: [0, -20, 0],
                        }}
                        transition={{
                            duration: 5,
                            repeat: Infinity,
                        }}
                        className="relative"
                    >

                        <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl">

                            <img
                                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3"
                                alt="Software Development"
                                className="rounded-2xl"
                            />

                        </div>

                        <div className="absolute -top-8 -left-8 bg-blue-600 text-white p-4 rounded-2xl shadow-xl">
                            ⚡ Web Development
                        </div>

                        <div className="absolute -bottom-8 -right-8 bg-cyan-500 text-white p-4 rounded-2xl shadow-xl">
                            📱 Mobile Apps
                        </div>

                    </motion.div>

                </div>
            </div>
        </section>
    );
}