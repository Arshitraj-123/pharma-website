import React from 'react';
import { motion } from 'framer-motion';
import { images } from '../data/images';
import ImageFallback from './ImageFallback';

export default function ProductShowcase() {
  return (
    <section className="py-32 bg-ivory-alt px-6">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          className="text-5xl md:text-6xl font-serif text-ink mb-16 text-center md:text-left"
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1 }}
        >
          Designed for precision.
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[250px]">
          
          <motion.div className="md:col-span-8 row-span-2 group relative overflow-hidden"
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1 }}>
            <ImageFallback src={images.product1} alt="Pharma Product" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-ink/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
              <span className="text-white font-serif text-xl">Sterile Vials</span>
            </div>
          </motion.div>

          <motion.div className="md:col-span-4 row-span-1 group relative overflow-hidden"
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.1 }}>
            <ImageFallback src={images.product2} alt="Pharma Product" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
          </motion.div>

          <motion.div className="md:col-span-4 row-span-2 group relative overflow-hidden"
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.2 }}>
            <ImageFallback src={images.product3} alt="Pharma Product" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
          </motion.div>

          <motion.div className="md:col-span-4 row-span-1 flex flex-col justify-center px-8 bg-ivory"
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.3 }}>
            <h3 className="text-2xl font-serif text-ink mb-2">Formulation</h3>
            <p className="text-sm font-light text-ink/70">Engineered for precise delivery and optimal bioavailability.</p>
          </motion.div>

          <motion.div className="md:col-span-4 row-span-1 group relative overflow-hidden"
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.4 }}>
            <ImageFallback src={images.product5} alt="Pharma Product" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
