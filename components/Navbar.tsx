
import React, { useState } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { Zap } from 'lucide-react';
import { SharedProps } from '../types';

const Navbar: React.FC<SharedProps> = ({ onOpenContact }) => {
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <motion.nav
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="fixed top-0 w-full z-40 bg-black/50 backdrop-blur-md border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2 cursor-pointer group">
            <Zap className="h-6 w-6 text-cyan-400 group-hover:text-fuchsia-400 transition-colors duration-300" />
            <span className="font-bold text-xl tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-white">
              NEXT PACE
            </span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {['SERVICES', 'PROCESS', 'PRICING', 'CAREERS', 'CONTACT'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-white/5 transition-all duration-300 uppercase tracking-wide"
                >
                  {item}
                </a>
              ))}
              <button 
                onClick={onOpenContact}
                className="bg-cyan-500 hover:bg-cyan-600 text-black px-4 py-2 rounded-full font-bold text-sm transition-all shadow-[0_0_15px_rgba(6,182,212,0.4)] hover:shadow-[0_0_25px_rgba(6,182,212,0.6)] uppercase"
              >
                Start Project
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
