import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { images } from '../data/images';

export default function VisualBreak() {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  return (
    <section ref={ref} className="relative h-[70vh] overflow-hidden flex items-center justify-center">
      <motion.div 
        className="absolute inset-0 w-full h-[130%]"
        style={{ y, backgroundImage: `url(${images.visual_break})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      />
      <div className="absolute inset-0 bg-scientific-green/40 mix-blend-multiply" />
      
      <motion.h2 
        className="relative z-10 text-5xl md:text-7xl font-serif text-white text-center max-w-3xl leading-tight"
        initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1 }}
      >
        Where science <br/>
        <span className="italic text-ivory">becomes possibility.</span>
      </motion.h2>
    </section>
  );
}
