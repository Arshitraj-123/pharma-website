import React from 'react';
import { motion } from 'framer-motion';

export default function FinalCTA() {
  return (
    <section className="py-32 bg-scientific-green text-white px-6 text-center">
      <div className="max-w-3xl mx-auto">
        <motion.h2 
          className="text-5xl md:text-7xl font-serif mb-8"
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1 }}
        >
          Let's move <br />
          <span className="italic text-rose">medicine forward.</span>
        </motion.h2>
        
        <motion.p 
          className="text-lg font-light text-white/70 mb-12"
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.2 }}
        >
          Explore our research, capabilities and pharmaceutical solutions.
        </motion.p>
        
        <motion.div 
          className="flex flex-col sm:flex-row justify-center gap-6"
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.4 }}
        >
          <button className="bg-ivory text-scientific-green px-8 py-4 text-sm font-medium hover:bg-white transition-colors">
            Explore the platform
          </button>
          <button className="border border-white/30 px-8 py-4 text-sm font-medium hover:bg-white/10 transition-colors">
            Contact us &rarr;
          </button>
        </motion.div>
      </div>
    </section>
  );
}
