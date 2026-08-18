import React, { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ScienceStatement from './components/ScienceStatement';
import Research from './components/Research';
import MolecularSection from './components/MolecularSection';
import Capabilities from './components/Capabilities';
import ProductShowcase from './components/ProductShowcase';
import People from './components/People';
import QualityTimeline from './components/QualityTimeline';
import VisualBreak from './components/VisualBreak';
import Impact from './components/Impact';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      smoothTouch: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  return (
    <div className="relative w-full overflow-hidden">
      <Navbar />
      <Hero />
      <ScienceStatement />
      <Research />
      <MolecularSection />
      <Capabilities />
      <ProductShowcase />
      <People />
      <QualityTimeline />
      <VisualBreak />
      <Impact />
      <FinalCTA />
      <Footer />
    </div>
  );
}

export default App;
