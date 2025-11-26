
import React from 'react';
import { motion } from 'framer-motion';
import { Check, Zap, Code, Layers, Rocket, Clock, Ban } from 'lucide-react';
import { SharedProps } from '../types';

const tiers = [
  {
    id: 1,
    name: "Micro Tasks",
    price: "€75 – €150",
    time: "15 – 60 min",
    icon: Zap,
    desc: "Instant fixes and adjustments.",
    features: [
      "Fix bug in Node API",
      "Add one endpoint",
      "Adjust CORS configuration",
      "Update CI/CD pipeline step",
      "Add environment variable",
      "Azure Function hotfix",
      "Small cloud IAM change"
    ],
    color: "from-cyan-400 to-cyan-600",
    borderColor: "group-hover:border-cyan-400/50",
    shadow: "group-hover:shadow-[0_0_30px_rgba(34,211,238,0.2)]",
    iconColor: "text-cyan-400"
  },
  {
    id: 2,
    name: "Small Features",
    price: "€250 – €450",
    time: "1 – 3 hours",
    icon: Code,
    desc: "Specific functionality implementation.",
    features: [
      "New endpoint + validation",
      "Add OAuth to backend",
      "Add Redis caching",
      "Logging & Alerts in Azure",
      "Cloud Run / Lambda deploy",
      "Basic GitHub pipeline"
    ],
    color: "from-fuchsia-400 to-fuchsia-600",
    borderColor: "group-hover:border-fuchsia-400/50",
    shadow: "group-hover:shadow-[0_0_30px_rgba(232,121,249,0.2)]",
    iconColor: "text-fuchsia-400"
  },
  {
    id: 3,
    name: "Medium Project",
    price: "€600 – €1,200",
    time: "0.5 – 1 day",
    icon: Layers,
    desc: "Substantial integrations & migrations.",
    features: [
      "CRUD Microservice (Node/.NET)",
      "External API Integration",
      "Containerize App + Cloud Deploy",
      "GitHub Actions CI/CD + IaC",
      "Mongo to Postgres Migration",
      "Stripe Billing Integration"
    ],
    color: "from-violet-400 to-violet-600",
    borderColor: "group-hover:border-violet-400/50",
    shadow: "group-hover:shadow-[0_0_30px_rgba(167,139,250,0.2)]",
    iconColor: "text-violet-400"
  },
  {
    id: 4,
    name: "Full System",
    price: "€1,500 – €3,000",
    time: "2 – 5 days",
    icon: Rocket,
    desc: "Production-ready architecture.",
    features: [
      "Full Microservice (DB+IAM+CI/CD)",
      "Production Kubernetes Setup",
      "Cloud Infrastructure (Azure/AWS)",
      "Serverless Architecture",
      "Multi-env Deployment",
      "Logging + Monitoring Stack"
    ],
    color: "from-blue-400 to-blue-600",
    borderColor: "group-hover:border-blue-400/50",
    shadow: "group-hover:shadow-[0_0_30px_rgba(96,165,250,0.2)]",
    iconColor: "text-blue-400"
  }
];

const Pricing: React.FC<SharedProps> = ({ onOpenContact }) => {
  return (
    <section id="pricing" className="py-24 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,_rgba(6,182,212,0.1),_rgba(0,0,0,0)_50%)]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-2 mb-4"
          >
            <span className="px-4 py-1 rounded-full border border-red-500/30 bg-red-500/10 text-red-400 text-sm font-bold flex items-center gap-2">
              <Ban size={16} /> NO HOURLY RATES
            </span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tighter"
          >
            FIXED PRICE. <br className="md:hidden" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-500">
              EXTREME SPEED.
            </span>
          </motion.h2>
          
          <motion.p
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             viewport={{ once: true }}
             transition={{ delay: 0.2 }}
             className="text-xl text-gray-400 max-w-2xl mx-auto"
          >
            You pay for outcomes, not time. We leverage our speed to give you better prices while delivering faster than anyone else.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`group relative p-6 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-300 ${tier.borderColor} ${tier.shadow}`}
            >
              {/* Header */}
              <div className="mb-6">
                <div className={`w-12 h-12 rounded-lg bg-black border border-white/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <tier.icon className={`w-6 h-6 ${tier.iconColor}`} />
                </div>
                <h3 className="text-xl font-bold text-white mb-1">{tier.name}</h3>
                <p className="text-xs text-gray-400 h-8">{tier.desc}</p>
              </div>

              {/* Price & Time */}
              <div className="mb-6 pb-6 border-b border-white/10">
                <div className={`text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r ${tier.color}`}>
                  {tier.price}
                </div>
                <div className="flex items-center gap-2 mt-2 text-sm text-gray-300 font-mono">
                  <Clock size={14} className={tier.iconColor} />
                  {tier.time}
                </div>
              </div>

              {/* Features List */}
              <ul className="space-y-3 mb-8">
                {tier.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-gray-400 group-hover:text-gray-200 transition-colors">
                    <Check size={16} className={`mt-0.5 shrink-0 ${tier.iconColor}`} />
                    <span className="leading-tight">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Hover Glow Effect */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${tier.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`} />
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-16 text-center"
        >
          <button 
            onClick={onOpenContact}
            className="px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-cyan-400 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.3)]"
          >
            Start a Micro-Project
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
