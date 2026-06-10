import { useState } from "react";
import mulik from '../../assets/images/mulik.jpeg'
import swapnil from "../../assets/images/swapnil.jpeg"
import alfaj from '../../assets/images/alfaj.jpeg'

export default function TeamInfo() {
  const [activeFilter, setActiveFilter] = useState("All");

  const teamMembers = [
    {
      id: 1,
      name: "Alfaj Shaikh",
      role: "CEO, Founder & Front-End Developer",
      category: "Development",
      image: alfaj,
      description: "Leading Deenova Digital with expertise in React, UI development, and business growth.",
      socials: { linkedin: "#", github: "#" }
    },
    {
      id: 2,
      name: "Vyankatesh Bargale",
      role: "Android Developer",
      category: "Development",
      image: "https://media.licdn.com/dms/image/v2/D5603AQEBG2PM-9Abcg/profile-displayphoto-shrink_800_800/B56Zaho6RVGoAc-/0/1746468579164?e=1782950400&v=beta&t=LwMpM95A8LaYvS9TMbIvH6Q__isgnsze6S5QfiaD7nI",
      description: "Developing high-performance Android applications with modern technologies.",
      socials: { linkedin: "#", github: "#" }
    },
    {
      id: 3,
      name: "Abhijeet Kudche",
      role: "Backend Developer",
      category: "Development",
      image: "https://media.licdn.com/dms/image/v2/D4D03AQHrP23LfhTKpg/profile-displayphoto-crop_800_800/B4DZeqkZd6G8AI-/0/1750913359356?e=1782950400&v=beta&t=M6kincu25Mhe05k5SXujnXP1yXgGP_8A70JqgJlOFRQ",
      description: "Building secure APIs, databases, and scalable backend architectures.",
      socials: { linkedin: "#", github: "#" }
    },
    {
      id: 4,
      name: "Chaitanya Mulik",
      role: "Cloud Engineer",
      category: "Cloud",
      image: mulik,
      description: "Managing cloud infrastructure, deployment, monitoring, and DevOps workflows.",
      socials: { linkedin: "#", github: "#" }
    },
    {
      id: 5,
      name: "Swapnil Nalawade",
      role: "UI/UX Designer",
      category: "Design",
      image: swapnil,
      description: "Creating beautiful interfaces and seamless user experiences.",
      socials: { linkedin: "#", dribbble: "#" }
    },
    {
      id: 6,
      name: "Sneha Joshi",
      role: "UI/UX Designer",
      category: "Design",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
      description: "Designing user-focused products with strong visual identity.",
      socials: { linkedin: "#", dribbble: "#" }
    },
  ];

  const categories = ["All", "Development", "Design", "Cloud"];

  const baseFiltered = activeFilter === "All" 
    ? teamMembers 
    : teamMembers.filter(member => member.category === activeFilter);

  // Duplicate items array contextually so the loop never breaks or creates blank gaps
  const marqueeMembers = [...baseFiltered, ...baseFiltered, ...baseFiltered];

  return (
    <section id="about" className="py-24 bg-slate-50 relative overflow-hidden border-t border-slate-200/60 m-7">
      {/* Inject custom infinite marquee keyframes */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-33.3333%); }
        }
        .animate-marquee {
          animation: marquee 35s linear infinite;
        }
      `}</style>

      {/* Decorative Blur Ambient Backgrounds */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-blue-400/5 blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-indigo-400/5 blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <span className="text-blue-600 text-sm font-extrabold uppercase tracking-widest block">
            Our Talent Fleet
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Meet The Experts Behind Deenova Digital
          </h2>
          <p className="text-base text-slate-500 font-medium">
            A passionate, cross-functional collective of engineers and designers turning complex project scopes into polished production deployments.
          </p>
        </div>

        {/* Dynamic Category Filtering Buttons */}
        <div className="flex flex-wrap justify-center items-center gap-2 mb-16">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-5 py-2 rounded-xl text-xs font-bold tracking-wide transition-all duration-300 border ${
                activeFilter === category
                  ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white border-transparent shadow-md shadow-blue-200"
                  : "bg-white text-slate-600 border-slate-200/80 hover:border-slate-300 hover:bg-slate-100/50"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Marquee Viewport Container with Elegant Edge Fades */}
      <div className="relative w-full overflow-hidden before:absolute before:left-0 before:top-0 before:bottom-0 before:w-20 sm:before:w-40 before:bg-gradient-to-r before:from-slate-50 before:to-transparent before:z-10 after:absolute after:right-0 after:top-0 after:bottom-0 after:w-20 sm:after:w-40 after:bg-gradient-to-l after:from-slate-50 after:to-transparent after:z-10">
        
        {/* Horizontal Moving Ribbon Container (Pauses smoothly on Hover) */}
        <div className="flex w-max gap-6 px-3 animate-marquee hover:[animation-play-state:paused]">
          {marqueeMembers.map((member, index) => (
            <div
              key={`${member.id}-${index}`}
              className="w-[290px] sm:w-[340px] flex-shrink-0 bg-white rounded-2xl border border-slate-200/70 p-4 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col justify-between my-4"
            >
              <div className="space-y-5">
                {/* Image Wrap Wrapper with Hover Overlay */}
                <div className="relative rounded-xl aspect-[4/3] overflow-hidden bg-slate-100 shadow-inner">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent opacity-60 mix-blend-multiply" />
                </div>

                {/* Profile Typography Details */}
                <div className="px-2 space-y-1.5">
                  <h3 className="text-xl font-extrabold text-slate-900 tracking-tight group-hover:text-blue-600 transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-xs font-bold text-indigo-600 bg-indigo-50 inline-block px-2.5 py-1 rounded-md">
                    {member.role}
                  </p>
                  <p className="text-sm text-slate-500 leading-relaxed font-medium pt-2 line-clamp-2">
                    {member.description}
                  </p>
                </div>
              </div>

              {/* Card Footer Social Connection Channels */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between px-2">
                <span className="text-[11px] font-bold tracking-wider text-slate-400 uppercase">
                  Connect Vector
                </span>
                <div className="flex items-center gap-3 text-slate-400">
                  {member.socials.linkedin && (
                    <a href={member.socials.linkedin} className="hover:text-blue-600 transition-colors" aria-label="LinkedIn Profile">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    </a>
                  )}
                  {member.socials.github && (
                    <a href={member.socials.github} className="hover:text-slate-900 transition-colors" aria-label="GitHub Profile">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.0.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                      </svg>
                    </a>
                  )}
                  {member.socials.dribbble && (
                    <a href={member.socials.dribbble} className="hover:text-pink-500 transition-colors" aria-label="Dribbble Portfolio">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm6.65 4.8c.85.98 1.35 2.26 1.35 3.66-.02-.03-.54-.2-1.1-.33-1.38-.32-3.32-.47-5.32-.38-.08-.2-.17-.4-.26-.61-.3-.69-.64-1.42-1.01-2.12 1.94-.43 4.2-.41 6.34.78zM12 4c1.78 0 3.4.52 4.77 1.41-1.92-.94-3.95-.94-5.7-.55-.32.07-.63.16-.94.27C10.74 6.2 11.4 7.4 12 8.65c2.14-.14 4.24-.03 5.72.33.64.15 1.15.31 1.45.45.31.86.48 1.79.48 2.76 0 .5-.05 1-.14 1.48-.28-.08-.73-.24-1.3-.41-1.45-.44-3.66-.75-6-.75-.43 0-.85.01-1.27.04-.1.29-.2.58-.29.87-.27.87-.51 1.76-.7 2.62 2.79.82 5.06 2.37 6.44 4.31-.96.7-2.11 1.13-3.37 1.17-.11-.03-.22-.05-.33-.08-1.2-.42-2.39-1.25-3.41-2.34-1.02-1.1-1.8-2.45-2.29-3.8-.06.01-.11.01-.17.02-2.33.34-4.8.44-6.27.18-.11-.33-.18-.69-.18-1.06 0-1.63.54-3.13 1.45-4.34 1.25.32 3.32.41 5.48.01.48-.09.96-.22 1.43-.38-.45-.98-.94-1.97-1.47-2.91-1.6.59-3.39.73-5 .29-.12-.03-.24-.07-.35-.1C4.34 7.6 7.89 4 12 4zm-7.6 7.4c1.23.2 3.25.1 5.3-.22-.38-.13-.76-.23-1.12-.32-1.74-.42-3.41-.42-4.52-.14-.04.22-.06.44-.06.68zm.5 2.1c1.26.16 3.4-.01 5.56-.37-.03.11-.06.22-.09.33-.21.84-.46 1.68-.74 2.5-1.93-.84-3.67-1.47-5.06-1.72.07-.25.18-.5.33-.74zm3.93 5.03c1.19.26 2.65.79 3.73 1.48-2.94-.03-5.5-1.57-6.52-3.9 1.15.26 2.45.69 2.79 2.42z" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}