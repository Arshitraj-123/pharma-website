import React from 'react';
import { motion } from 'framer-motion';
import { images } from '../data/images';
import ImageFallback from './ImageFallback';

const impacts = [
  { title: "PATIENTS", desc: "Solutions designed around real human needs.", img: images.impact1 },
  { title: "PROFESSIONALS", desc: "Supporting healthcare professionals with reliable pharmaceutical solutions.", img: images.impact2 },
  { title: "COMMUNITIES", desc: "Building stronger healthcare systems through accessible innovation.", img: images.impact3 }
];

export default function Impact() {
  return (
    <section id="impact" className="py-32 bg-ivory px-6">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          className="text-5xl md:text-6xl font-serif text-ink mb-16"
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1 }}
        >
          Built around <br />
          <span className="italic text-burgundy">better outcomes.</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {impacts.map((item, idx) => (
            <motion.div 
              key={idx} className="group cursor-pointer"
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: idx * 0.1 }}
            >
              <div className="overflow-hidden h-[40vh] mb-6 relative">
                <ImageFallback src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-ink/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <h3 className="text-sm tracking-widest text-sage mb-2">{item.title}</h3>
              <p className="text-ink/80 font-light">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
