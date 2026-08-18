import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { images } from '../data/images';
import ImageFallback from './ImageFallback';

const researchAreas = [
  { id: 1, title: "Drug Discovery", desc: "Identifying novel compounds and therapeutic targets to address unmet medical needs.", img: images.research1 },
  { id: 2, title: "Biotechnology", desc: "Leveraging biological systems and advanced genetics to develop precision medicines.", img: images.research2 },
  { id: 3, title: "Clinical Research", desc: "Rigorous clinical trials designed to ensure safety, efficacy, and meaningful patient outcomes.", img: images.research3 }
];

export default function Research() {
  const [expandedId, setExpandedId] = useState(null);

  return (
    <section id="research" className="py-32 bg-ivory px-6">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          className="text-5xl md:text-6xl font-serif text-ink mb-16"
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1 }}
        >
          From molecule <br/>
          <span className="italic text-burgundy">to medicine.</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {researchAreas.map((area, idx) => (
            <motion.div 
              key={area.id}
              className="group relative cursor-pointer flex flex-col"
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: idx * 0.1 }}
              onClick={() => setExpandedId(expandedId === area.id ? null : area.id)}
            >
              <div className="relative h-[50vh] overflow-hidden mb-6">
                <ImageFallback src={area.img} alt={area.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-ink/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              
              <div className="flex justify-between items-start border-t border-ink/20 pt-6">
                <div>
                  <span className="text-xs text-sage tracking-widest block mb-2">0{area.id}</span>
                  <h3 className="text-2xl font-serif text-ink group-hover:text-burgundy transition-colors">{area.title}</h3>
                </div>
                <ArrowUpRight className="text-ink/50 group-hover:text-ink transform group-hover:rotate-45 transition-transform" />
              </div>

              <AnimatePresence>
                {expandedId === area.id && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <p className="pt-4 text-ink/70 font-light text-sm">{area.desc}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
