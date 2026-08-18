import React, { useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { images } from '../data/images';
import ImageFallback from './ImageFallback';

const Counter = ({ from, to, duration = 2, suffix = "" }) => {
  const [count, setCount] = useState(from);
  const ref = React.useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (inView) {
      let startTimestamp = null;
      const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
        setCount(Math.floor(progress * (to - from) + from));
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    }
  }, [inView, from, to, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
};

export default function People() {
  return (
    <section className="py-32 bg-ivory px-6">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          className="text-5xl md:text-7xl font-serif text-ink mb-16"
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1 }}
        >
          Science is <br />
          <span className="italic text-burgundy">human.</span>
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            className="h-[70vh] overflow-hidden"
            initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 1 }}
          >
            <ImageFallback src={images.scientist} alt="Researcher" className="w-full h-full object-cover" />
          </motion.div>

          <div>
            <motion.p 
              className="text-2xl md:text-3xl font-serif text-ink mb-16 leading-relaxed"
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.2 }}
            >
              "Behind every formulation, experiment and breakthrough is a person asking a better question."
            </motion.p>
            
            <div className="grid grid-cols-3 gap-8 border-t border-ink/20 pt-8">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }}>
                <div className="text-4xl font-serif text-burgundy mb-2">
                  <Counter from={0} to={120} suffix="+" />
                </div>
                <div className="text-xs uppercase tracking-widest text-sage">Professionals</div>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.5 }}>
                <div className="text-4xl font-serif text-burgundy mb-2">
                  <Counter from={0} to={18} />
                </div>
                <div className="text-xs uppercase tracking-widest text-sage">Programs</div>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.6 }}>
                <div className="text-4xl font-serif text-burgundy mb-2">
                  <Counter from={0} to={12} />
                </div>
                <div className="text-xs uppercase tracking-widest text-sage">Facilities</div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
