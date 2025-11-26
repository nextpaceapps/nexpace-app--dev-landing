import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Github, Code, Zap } from 'lucide-react';
import LoadingScreen from './components/LoadingScreen';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Services from './components/Services';
import Process from './components/Process';
import Pricing from './components/Pricing';
import ContactModal from './components/ContactModal';

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isContactOpen, setIsContactOpen] = useState(false);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  const handleOpenContact = () => {
    setIsContactOpen(true);
  };

  const handleCloseContact = () => {
    setIsContactOpen(false);
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden selection:bg-cyan-500 selection:text-black">
      <AnimatePresence mode='wait'>
        {isLoading ? (
          <LoadingScreen key="loader" onComplete={handleLoadingComplete} />
        ) : (
          <motion.main
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Navbar onOpenContact={handleOpenContact} />
            <Hero onOpenContact={handleOpenContact} />
            <Services />
            <Process onOpenContact={handleOpenContact} />
            <Pricing onOpenContact={handleOpenContact} />
            
            <footer className="py-12 bg-neutral-900 border-t border-white/10 text-center relative z-10">
              <div className="max-w-3xl mx-auto px-6">
                 <div className="mb-10 p-6 bg-white/5 rounded-xl border border-white/5 backdrop-blur-sm shadow-inner">
                    <div className="flex items-center justify-center gap-2 mb-3 text-cyan-400">
                       <Zap size={16} fill="currentColor" />
                       <span className="text-xs font-bold uppercase tracking-widest">Demo Project</span>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed mb-6">
                      This website serves as a live demonstration of our speed. It was designed, developed, and deployed in <span className="text-white font-bold">under 24 hours</span>.
                      <br /><br />
                      <span className="text-gray-500 text-xs">
                        Built with <span className="text-gray-300">React</span> • Hosted on <span className="text-gray-300">Firebase</span> • Emails via <span className="text-gray-300">AWS SES</span> • Powered by Custom CRM
                      </span>
                    </p>
                    
                    <a 
                      href="https://github.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-black hover:bg-white hover:text-black border border-white/20 rounded-full transition-all duration-300 group"
                    >
                      <Github size={18} />
                      <span className="text-sm font-bold">View Source on GitHub</span>
                    </a>
                 </div>

                <p className="text-gray-600 text-xs">
                  © {new Date().getFullYear()} Next Pace Development. All systems operational.
                </p>
              </div>
            </footer>

            <ContactModal isOpen={isContactOpen} onClose={handleCloseContact} />
          </motion.main>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;
