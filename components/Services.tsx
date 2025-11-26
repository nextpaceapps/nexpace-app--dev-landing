import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Database, Globe, Smartphone, Cloud, Server, Box } from 'lucide-react';

const services = [
  {
    icon: Zap,
    title: "High-Speed Dev",
    desc: "Rapid MVP development and scalable solutions.",
    color: "text-cyan-400"
  },
  {
    icon: Database,
    title: "Backend Systems",
    desc: "High-load architecture and distributed microservices.",
    color: "text-fuchsia-400"
  },
  {
    icon: Globe,
    title: "Web Applications",
    desc: "React, Next.js, WebGL. Immersive interactive experiences.",
    color: "text-cyan-400"
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    desc: "Cross-platform apps with React Native and modern frameworks.",
    color: "text-fuchsia-400"
  },
  {
    icon: Box,
    title: ".NET Ecosystem",
    desc: "Enterprise-grade solutions using C# and .NET Core.",
    color: "text-cyan-400"
  },
  {
    icon: Cloud,
    title: "Cloud Infrastructure",
    desc: "Rapid setup in Azure, Google Cloud, and AWS.",
    color: "text-fuchsia-400"
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-white mb-4"
          >
            TECHNOLOGY STACK
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "100px" }}
            viewport={{ once: true }}
            className="h-1 bg-gradient-to-r from-cyan-500 to-fuchsia-500 mx-auto"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="p-8 border border-white/10 bg-white/5 backdrop-blur-sm rounded-xl hover:border-cyan-500/50 transition-colors group cursor-pointer"
            >
              <div className={`mb-6 p-4 rounded-full bg-black/50 w-fit border border-white/10 group-hover:border-${service.color.split('-')[1]}`}>
                <service.icon className={`w-8 h-8 ${service.color}`} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Tech Octagons */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 items-center opacity-80">
           <TechOctagon label="C#" color="cyan">
             <span className="text-2xl font-bold tracking-tighter">C#</span>
           </TechOctagon>
           
           <TechOctagon label=".NET" color="fuchsia">
             <span className="text-xl font-bold tracking-tighter">.NET</span>
           </TechOctagon>

           <TechOctagon label="Google Cloud" color="cyan">
             <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
               <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" fillOpacity="0" /> 
               {/* Simplified GCloud representation as generic shapes since full logo is complex */}
               <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.22.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1v-5.41l2 3V21h10v-4.41l2-3V21h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16h-1v-2l2.62-3.89L9.5 10l-3 6zm11 0h-1l-3-6 1.38-.11L17.5 14v2z"/> 
             </svg>
           </TechOctagon>

           <TechOctagon label="Firebase" color="fuchsia">
             <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
                <path d="M3.89 15.67L6.5 1.86a.54.54 0 01.95-.23l3.24 6.22L3.89 15.67z"/>
                <path d="M12.9 6.27L10.79 2.14a.54.54 0 00-.97 0L7.76 6.27l5.14 5.38V6.27z"/>
                <path d="M13.2 6.88l1.37-2.67a.54.54 0 01.97 0l5.16 10.35L13.2 6.88z"/>
                <path d="M11.95 13.24l-8.06 8.35c-.86.89-.23 2.41 1.01 2.41h14.2c1.24 0 1.87-1.52 1.01-2.41l-8.16-8.35z"/>
             </svg>
           </TechOctagon>

           <TechOctagon label="AWS" color="cyan">
             <svg viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10">
                <path d="M17.4 12.6c-.3.8-.9 1.4-1.7 1.8-.7.4-1.6.6-2.5.6-1.4 0-2.4-.4-3.2-1.1-.7-.8-1.1-1.8-1.1-3.1 0-1.4.4-2.5 1.1-3.3.8-.8 1.8-1.1 3-1.1.9 0 1.6.2 2.2.6.6.4 1 .9 1.2 1.6h1.7c-.3-1.2-1-2.2-2-2.8-1-.7-2.1-1-3.4-1-1.7 0-3 .5-4.1 1.6-1 1-1.6 2.5-1.6 4.3 0 1.9.5 3.3 1.6 4.4 1.1 1.1 2.5 1.6 4.3 1.6 1.4 0 2.5-.3 3.5-.9 1-.6 1.7-1.5 2-2.7h-1.6l.6.5z"/>
                <path d="M18.7 15.9c-.8 1.1-2.1 1.8-3.8 2-2.1.3-4-.4-5.2-1.6-.2-.2-.2-.5 0-.7.2-.2.5-.2.7 0 1.1 1 2.6 1.5 4.3 1.3 1.4-.2 2.4-.8 3.1-1.6.2-.2.5-.2.7 0 .2.2.2.5 0 .7.1 0 .2 0 .2-.1z"/>
             </svg>
           </TechOctagon>
        </div>
      </div>
    </section>
  );
};

const TechOctagon: React.FC<{ children: React.ReactNode; color: string; label: string }> = ({ children, color, label }) => {
  const borderColor = color === 'cyan' ? '#06b6d4' : '#e879f9';
  
  return (
    <motion.div 
      whileHover={{ scale: 1.1 }}
      className="flex flex-col items-center gap-4"
    >
      <div className="relative w-24 h-24 flex items-center justify-center">
        {/* SVG Octagon Border */}
        <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
          <polygon 
            points="30,5 70,5 95,30 95,70 70,95 30,95 5,70 5,30" 
            fill="none" 
            stroke={borderColor} 
            strokeWidth="2"
            vectorEffect="non-scaling-stroke"
          />
          <polygon 
             points="30,5 70,5 95,30 95,70 70,95 30,95 5,70 5,30" 
             fill={borderColor}
             fillOpacity="0.1"
          />
        </svg>
        
        {/* Icon Container */}
        <div className={`text-${color}-400 z-10`}>
          {children}
        </div>
      </div>
      <span className="text-gray-400 text-sm font-medium tracking-wide">{label}</span>
    </motion.div>
  );
}

export default Services;