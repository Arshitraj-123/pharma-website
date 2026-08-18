import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-ivory-alt py-16 px-6 border-t border-ink/10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-12">
        <div className="md:w-1/3">
          <h3 className="text-xl font-serif text-ink mb-4">PHARMA</h3>
          <p className="text-sm font-light text-sage italic">Science with purpose.</p>
        </div>
        
        <div className="flex gap-16">
          <div className="flex flex-col gap-3">
            <span className="text-xs uppercase tracking-widest text-ink mb-2">Explore</span>
            <a href="#" className="text-sm text-ink/60 hover:text-burgundy transition-colors">Research</a>
            <a href="#" className="text-sm text-ink/60 hover:text-burgundy transition-colors">Capabilities</a>
            <a href="#" className="text-sm text-ink/60 hover:text-burgundy transition-colors">Quality</a>
            <a href="#" className="text-sm text-ink/60 hover:text-burgundy transition-colors">Impact</a>
          </div>
          <div className="flex flex-col gap-3">
            <span className="text-xs uppercase tracking-widest text-ink mb-2">Company</span>
            <a href="#" className="text-sm text-ink/60 hover:text-burgundy transition-colors">About</a>
            <a href="#" className="text-sm text-ink/60 hover:text-burgundy transition-colors">Leadership</a>
            <a href="#" className="text-sm text-ink/60 hover:text-burgundy transition-colors">Careers</a>
            <a href="#" className="text-sm text-ink/60 hover:text-burgundy transition-colors">Contact</a>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-ink/10 flex flex-col md:flex-row justify-between text-xs text-ink/50">
        <p>&copy; 2026 Pharmaceutical Sciences. All rights reserved.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-ink transition-colors">Privacy</a>
          <a href="#" className="hover:text-ink transition-colors">Terms</a>
        </div>
      </div>
    </footer>
  );
}
