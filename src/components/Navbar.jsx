import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-ivory/90 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-6'}`}
      initial={{ y: -100 }} animate={{ y: 0 }} transition={{ duration: 1 }}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="text-xl font-serif font-semibold tracking-wide text-ink">PHARMA</div>
        <div className="hidden md:flex space-x-8 text-sm font-medium text-ink/70">
          <a href="#science" className="hover:text-burgundy transition-colors">Science</a>
          <a href="#research" className="hover:text-burgundy transition-colors">Research</a>
          <a href="#capabilities" className="hover:text-burgundy transition-colors">Capabilities</a>
          <a href="#quality" className="hover:text-burgundy transition-colors">Quality</a>
          <a href="#impact" className="hover:text-burgundy transition-colors">Impact</a>
        </div>
        <button className="hidden md:block text-xs font-medium uppercase tracking-widest text-ink hover:text-burgundy transition-colors">
          Explore Research
        </button>
      </div>
    </motion.nav>
  );
}
