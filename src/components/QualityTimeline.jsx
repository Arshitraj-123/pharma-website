import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const steps = [
  { num: '01', title: 'Research' },
  { num: '02', title: 'Formulation' },
  { num: '03', title: 'Testing' },
  { num: '04', title: 'Validation' },
  { num: '05', title: 'Manufacturing' },
  { num: '06', title: 'Delivery' }
];

export default function QualityTimeline() {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"]
  });

  return (
    <section id="quality" className="py-32 bg-ivory px-6" ref={ref}>
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2 
          className="text-5xl md:text-7xl font-serif text-ink mb-24"
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1 }}
        >
          Precision at <br />
          <span className="italic text-burgundy">every stage.</span>
        </motion.h2>

        <div className="relative border-l border-ink/10 pl-8 md:pl-16 ml-4 md:ml-0 text-left space-y-24">
          <motion.div 
            className="absolute left-0 top-0 w-0.5 bg-scientific-green origin-top"
            style={{ height: "100%", scaleY: scrollYProgress }}
          />

          {steps.map((step, idx) => (
            <motion.div 
              key={idx} 
              className="relative"
              initial={{ opacity: 0.3 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5 }}
            >
              <div className="absolute -left-10 md:-left-[72px] top-1 w-4 h-4 rounded-full bg-ivory border-2 border-scientific-green z-10" />
              <span className="text-xs tracking-widest text-sage block mb-2">{step.num}</span>
              <h3 className="text-3xl font-serif text-ink">{step.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
