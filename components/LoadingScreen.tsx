import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { LoadingProps } from '../types';

const LoadingScreen: React.FC<LoadingProps> = ({ onComplete }) => {
  useEffect(() => {
    // Duration for the text to appear and sit for a moment before transitioning
    const timer = setTimeout(() => {
      onComplete();
    }, 3500);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 bg-black flex items-center justify-center overflow-hidden">
      <motion.div
        className="relative z-10 flex flex-col items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ 
          opacity: 0, 
          scale: 1.1, 
          filter: 'blur(10px)',
          transition: { duration: 0.8, ease: "easeInOut" } 
        }}
      >
         <motion.h1 
            initial={{ scale: 0.8, filter: 'blur(10px)', opacity: 0 }}
            animate={{ scale: 1, filter: 'blur(0px)', opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="text-5xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white via-cyan-200 to-cyan-500 drop-shadow-[0_0_30px_rgba(34,211,238,0.5)] text-center tracking-tighter"
         >
           NEXT PACE
         </motion.h1>
         
         <motion.div
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: "100%", opacity: 1 }}
          transition={{ delay: 1, duration: 0.8, ease: "easeOut" }}
          className="h-[2px] bg-fuchsia-500 my-6 shadow-[0_0_15px_magenta]"
         />

         <motion.p
           initial={{ opacity: 0, y: 20, letterSpacing: '0.2em' }}
           animate={{ opacity: 1, y: 0, letterSpacing: '0.8em' }}
           transition={{ delay: 1.5, duration: 1, ease: "easeOut" }}
           className="text-lg md:text-3xl text-white font-bold uppercase"
         >
           Development
         </motion.p>
      </motion.div>
    </div>
  );
};

export default LoadingScreen;