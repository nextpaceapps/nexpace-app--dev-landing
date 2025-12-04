import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ThemeProvider } from '../theme';
import LoadingScreen from './components/LoadingScreen';
import Hero from './pages/Hero';
import Navbar from './components/Navbar';
import Services from './pages/Services';
import Process from './pages/Process';
import Pricing from './pages/Pricing';
import Footer from './components/Footer';
import ContactModal from './components/ContactModal';
import styles from './App.module.scss';

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
    <ThemeProvider initialTheme="neonic">
      <div className={styles.app}>
        <AnimatePresence mode='wait'>
        {isLoading ? (
          <LoadingScreen key="loader" onComplete={handleLoadingComplete} />
        ) : (
          <motion.main
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className={styles.main}
          >
            <Navbar onOpenContact={handleOpenContact} />
            <Hero onOpenContact={handleOpenContact} />
            <Services />
            <Process onOpenContact={handleOpenContact} />
            <Pricing onOpenContact={handleOpenContact} />
            
            <Footer />

            <ContactModal isOpen={isContactOpen} onClose={handleCloseContact} />
          </motion.main>
        )}
        </AnimatePresence>
      </div>
    </ThemeProvider>
  );
};

export default App;
