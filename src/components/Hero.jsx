import React from 'react';
import { motion } from 'framer-motion';
import { images } from '../data/images';
import ImageFallback from './ImageFallback';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-24 pb-12 bg-ivory overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="relative z-10">
          <motion.h1 
            className="text-6xl md:text-8xl font-serif text-ink leading-[1.1] mb-8"
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2, delay: 0.1 }}
          >
            Advancing <br />
            medicine through <br />
            <span className="italic text-burgundy">precision.</span>
          </motion.h1>
          <motion.p 
            className="text-lg text-ink/70 font-light max-w-md mb-12 leading-relaxed"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.4 }}
          >
            From discovery to delivery, we develop pharmaceutical solutions designed around science, quality, and human wellbeing.
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-6"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.6 }}
          >
            <button className="bg-scientific-green text-white px-8 py-4 text-sm font-medium hover:bg-ink transition-colors">
              Explore our science
            </button>
            <button className="text-ink border border-ink/20 px-8 py-4 text-sm font-medium hover:bg-ink/5 transition-colors">
              Discover capabilities
            </button>
          </motion.div>
        </div>
        
        <motion.div 
          className="relative h-[60vh] lg:h-[75vh] w-full"
          initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <ImageFallback src={images.hero} alt="Pharmaceutical laboratory" priority={true} className="w-full h-full object-cover" />
          
          <motion.div 
            className="absolute top-10 -left-8 bg-ivory border border-ink/10 px-4 py-2 text-xs tracking-widest uppercase"
            initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 1 }}
          >
            01 / DISCOVERY
          </motion.div>
          
          <motion.div 
            className="absolute bottom-20 -right-4 bg-ivory border border-ink/10 px-4 py-2 text-xs tracking-widest uppercase"
            initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 1.2 }}
          >
            PRECISION / 99.8%
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
