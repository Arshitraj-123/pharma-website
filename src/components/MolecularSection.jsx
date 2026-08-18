import React from 'react';
import { motion } from 'framer-motion';
import { images } from '../data/images';
import ImageFallback from './ImageFallback';

export default function MolecularSection() {
  const labels = [
    { text: "MOLECULAR STRUCTURE", top: "20%", left: "15%" },
    { text: "BIOLOGICAL RESPONSE", top: "70%", left: "20%" },
    { text: "TARGET IDENTIFICATION", top: "30%", right: "15%" },
    { text: "PRECISION DEVELOPMENT", top: "60%", right: "20%" }
  ];

  return (
    <section className="relative py-40 bg-scientific-green text-white overflow-hidden flex flex-col items-center">
      <motion.h2 
        className="relative z-10 text-5xl md:text-7xl font-serif mb-12"
        initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1 }}
      >
        Inside the science.
      </motion.h2>
      
      <div className="relative w-full max-w-5xl h-[60vh] flex items-center justify-center">
        <motion.div 
          className="absolute inset-0"
          initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 0.6, scale: 1 }} viewport={{ once: true }} transition={{ duration: 2 }}
        >
          <ImageFallback src={images.molecule} alt="Molecular structure" className="w-full h-full object-cover mix-blend-screen opacity-50" />
        </motion.div>

        {labels.map((label, idx) => (
          <motion.div
            key={idx}
            className="absolute text-[10px] tracking-widest uppercase border border-white/20 bg-black/20 backdrop-blur-sm px-3 py-1"
            style={{ top: label.top, left: label.left, right: label.right }}
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4 + idx, repeat: Infinity, ease: "easeInOut" }}
          >
            {label.text}
          </motion.div>
        ))}
      </div>

      <motion.p 
        className="relative z-10 mt-12 text-lg text-white/70 font-light max-w-lg text-center"
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.5 }}
      >
        Every breakthrough begins with understanding what happens at the smallest scale.
      </motion.p>
    </section>
  );
}
