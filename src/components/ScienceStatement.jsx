import React from 'react';
import { motion } from 'framer-motion';
import { images } from '../data/images';
import ImageFallback from './ImageFallback';

export default function ScienceStatement() {
  return (
    <section id="science" className="py-32 bg-ivory-alt px-6">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          className="text-5xl md:text-7xl font-serif text-ink mb-24 max-w-3xl leading-tight"
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1 }}
        >
          Medicine is not simply developed. <br/>
          <span className="italic text-burgundy">It is understood.</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 1 }}
            className="h-[60vh] overflow-hidden"
          >
            <ImageFallback src={images.science} alt="Scientific research" className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000" />
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.2 }}
          >
            <div className="border-t border-ink/20 pt-8 mb-8">
              <span className="text-xs uppercase tracking-widest text-sage">Our Approach</span>
            </div>
            <p className="text-xl md:text-2xl font-light text-ink/80 leading-relaxed">
              We bring together pharmaceutical science, advanced research, manufacturing discipline and a deep understanding of human needs to create solutions that move from laboratory insight to meaningful healthcare impact.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
