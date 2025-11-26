
import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, CheckCircle, Clock, ArrowRight } from 'lucide-react';
import { SharedProps } from '../types';

const processSteps = [
  { 
    id: 1, 
    title: "Requirements & Agreement", 
    duration: "Day 1",
    desc: "We align on business goals, timeline, and sign the contract.",
    width: "15%",
    offset: "0%",
    color: "bg-gray-600"
  },
  { 
    id: 2, 
    title: "Rapid Prototyping", 
    duration: "Days 2-4",
    desc: "Interactive mockups to visualize the final product immediately.",
    width: "20%",
    offset: "12%",
    color: "bg-cyan-500"
  },
  { 
    id: 3, 
    title: "High-Velocity Development", 
    duration: "Week 1+",
    desc: "Iterative coding sprints. You see progress every few days.",
    width: "45%",
    offset: "30%",
    color: "bg-fuchsia-500"
  },
  { 
    id: 4, 
    title: "QA & Refinement", 
    duration: "Final Days",
    desc: "Automated testing and manual polish for a bug-free experience.",
    width: "18%",
    offset: "72%",
    color: "bg-cyan-400"
  },
  { 
    id: 5, 
    title: "Launch", 
    duration: "Liftoff",
    desc: "Deployment to cloud infrastructure and handover.",
    width: "10%",
    offset: "90%",
    color: "bg-white",
    isLaunch: true
  }
];

const Process: React.FC<SharedProps> = ({ onOpenContact }) => {
  return (
    <section id="process" className="py-24 bg-neutral-900 relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:100px_100px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-white mb-4"
          >
            EXECUTION TIMELINE
          </motion.h2>
          <div className="h-1 bg-gradient-to-r from-fuchsia-500 to-cyan-500 w-24 mx-auto" />
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            Our streamlined workflow ensures we move from concept to code without friction.
          </p>
        </div>

        {/* Gantt Chart Container */}
        <div className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-10 mb-16 overflow-x-auto">
          <div className="min-w-[700px]">
            {/* Time Markers */}
            <div className="flex justify-between text-xs text-gray-500 uppercase tracking-widest mb-6 border-b border-white/5 pb-2">
              <span>Start</span>
              <span>Week 1</span>
              <span>Week 2</span>
              <span>Launch</span>
            </div>

            <div className="space-y-8">
              {processSteps.map((step, index) => (
                <motion.div 
                  key={step.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  className="relative group"
                >
                  {/* Label Row */}
                  <div className="flex items-center justify-between mb-2 px-1">
                    <h4 className="text-sm font-bold text-gray-200 group-hover:text-white transition-colors">
                      {index + 1}. {step.title}
                    </h4>
                    <span className="text-xs text-cyan-400 font-mono">{step.duration}</span>
                  </div>

                  {/* Bar Track */}
                  <div className="h-10 w-full bg-white/5 rounded-md relative overflow-hidden flex items-center">
                    {/* Animated Bar */}
                    <motion.div
                      className={`absolute top-0 bottom-0 rounded-md ${step.color} shadow-[0_0_15px_rgba(255,255,255,0.2)] flex items-center justify-end px-3`}
                      style={{ left: step.offset }}
                      initial={{ width: 0 }}
                      whileInView={{ width: step.width }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, delay: index * 0.2, ease: "circOut" }}
                    >
                      {step.isLaunch ? (
                        <Rocket className="text-black w-5 h-5 animate-pulse" />
                      ) : (
                        <div className="w-1 h-full bg-white/20 absolute right-0 top-0" />
                      )}
                    </motion.div>
                    
                    {/* Description Tooltip (visible on hover) */}
                    <div className="absolute left-[50%] md:left-[20%] opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xs text-gray-300 pointer-events-none bg-black/80 px-2 py-1 rounded border border-white/10 z-20 translate-x-10 group-hover:translate-x-0 transform transition-transform">
                      {step.desc}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-6">Ready to break the speed limit?</h3>
          <button 
            onClick={onOpenContact}
            className="group relative px-10 py-5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-xl rounded-full overflow-hidden shadow-[0_0_20px_rgba(6,182,212,0.5)] transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(6,182,212,0.7)]"
          >
            <span className="relative z-10 flex items-center gap-2">
              START PROJECT <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </button>
          <p className="mt-4 text-sm text-gray-500 flex items-center gap-2">
            <Clock className="w-4 h-4" /> Response time: Under 2 hours
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Process;
