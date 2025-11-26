
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, CheckCircle } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState<'form' | 'success'>('form');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setTimeout(() => {
      setStep('success');
    }, 1000);
  };

  const handleClose = () => {
    onClose();
    // Reset after animation finishes
    setTimeout(() => {
      setStep('form');
    }, 500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none"
          >
            <div className="bg-neutral-900 border border-white/10 w-full max-w-lg rounded-2xl shadow-[0_0_50px_rgba(6,182,212,0.15)] overflow-hidden pointer-events-auto relative">
              
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-white/10 bg-black/50">
                <h3 className="text-xl font-bold text-white tracking-tight">
                  {step === 'form' ? 'START YOUR PROJECT' : 'MESSAGE SENT'}
                </h3>
                <button 
                  onClick={handleClose}
                  className="p-2 hover:bg-white/10 rounded-full transition-colors text-gray-400 hover:text-white"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Content */}
              <div className="p-6">
                {step === 'form' ? (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">
                        Email Address
                      </label>
                      <input 
                        type="email" 
                        required
                        placeholder="you@company.com"
                        className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">
                        Project Idea / Requirements
                      </label>
                      <textarea 
                        required
                        rows={5}
                        placeholder="Tell us about what you want to build..."
                        className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors resize-none"
                      />
                    </div>

                    <div className="pt-2">
                      <button 
                        type="submit"
                        className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold py-4 rounded-lg hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all flex items-center justify-center gap-2"
                      >
                        <Send size={18} /> SEND REQUEST
                      </button>
                      <p className="text-center text-xs text-gray-500 mt-3">
                        We usually respond within 2 hours.
                      </p>
                    </div>
                  </form>
                ) : (
                  <div className="py-10 flex flex-col items-center text-center">
                    <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mb-6 text-green-500">
                      <CheckCircle size={40} />
                    </div>
                    <h4 className="text-2xl font-bold text-white mb-2">Received!</h4>
                    <p className="text-gray-400 mb-8 max-w-xs">
                      Our team is already reviewing your request. Expect an email from us shortly.
                    </p>
                    <button 
                      onClick={handleClose}
                      className="px-8 py-3 bg-white/10 hover:bg-white/20 text-white font-bold rounded-lg transition-colors"
                    >
                      CLOSE
                    </button>
                  </div>
                )}
              </div>

              {/* Decorative bottom line */}
              <div className="h-1 w-full bg-gradient-to-r from-cyan-500 to-fuchsia-500" />
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ContactModal;
