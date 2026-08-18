import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { images } from '../data/images';
import ImageFallback from './ImageFallback';

const capabilities = [
  { id: '01', title: 'Discovery', desc: 'Identifying promising therapeutic opportunities through rigorous scientific investigation.', img: images.cap_discovery },
  { id: '02', title: 'Development', desc: 'Transforming scientific insight into scalable pharmaceutical solutions.', img: images.cap_development },
  { id: '03', title: 'Manufacturing', desc: 'Precision manufacturing built around consistency, safety and reliability.', img: images.cap_manufacturing },
  { id: '04', title: 'Quality', desc: 'Every stage is governed by rigorous quality standards.', img: images.cap_quality },
  { id: '05', title: 'Distribution', desc: 'Reliable pharmaceutical products delivered through an integrated supply network.', img: images.cap_distribution }
];

export default function Capabilities() {
  const [activeTab, setActiveTab] = useState(capabilities[0]);

  return (
    <section id="capabilities" className="py-32 bg-ivory px-6">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          className="text-5xl md:text-6xl font-serif text-ink mb-16"
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1 }}
        >
          What we <br />
          <span className="italic text-burgundy">bring together.</span>
        </motion.h2>

        <div className="flex flex-col lg:flex-row gap-16">
          <div className="w-full lg:w-1/3 flex flex-col gap-6">
            {capabilities.map((cap) => (
              <button
                key={cap.id}
                onClick={() => setActiveTab(cap)}
                className={`text-left pb-4 border-b transition-colors duration-300 ${activeTab.id === cap.id ? 'border-burgundy text-burgundy' : 'border-ink/10 text-ink/50 hover:text-ink'}`}
              >
                <span className="text-xs tracking-widest mr-4">{cap.id}</span>
                <span className="text-2xl font-serif">{cap.title}</span>
              </button>
            ))}
          </div>

          <div className="w-full lg:w-2/3">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab.id}
                initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.5 }}
                className="flex flex-col gap-8"
              >
                <p className="text-xl md:text-2xl font-light text-ink/80 max-w-xl leading-relaxed">
                  {activeTab.desc}
                </p>
                <div className="relative h-[50vh] w-full overflow-hidden bg-ivory-alt">
                  <ImageFallback src={activeTab.img} alt={activeTab.title} className="w-full h-full object-cover" />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
