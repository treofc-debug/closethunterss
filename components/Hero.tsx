
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-slate-50">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/id/353/1920/1080" 
          alt="Hero Fashion" 
          className="w-full h-full object-cover opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/60 via-white/20 to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-2xl">
          <span className="inline-block px-3 py-1 bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-widest mb-6 rounded">
            New Collection '24
          </span>
          <h1 className="text-6xl md:text-8xl font-bold text-slate-900 tracking-tight leading-none mb-8">
            Effortless <br />
            <span className="text-slate-500 font-light italic">Simplicity</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-lg leading-relaxed">
            Redefining modern essentials with sustainably sourced materials and timeless silhouettes. Crafted for the minimalist soul.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <a 
              href="#shop" 
              className="px-8 py-4 bg-slate-900 text-white text-sm font-bold uppercase tracking-widest hover:bg-slate-800 transition-all text-center rounded-sm"
            >
              Shop New Arrivals
            </a>
            <a 
              href="#collections" 
              className="px-8 py-4 bg-white text-slate-900 border border-slate-200 text-sm font-bold uppercase tracking-widest hover:bg-slate-50 transition-all text-center rounded-sm"
            >
              View Lookbook
            </a>
          </div>
        </div>
      </div>

      {/* Floating Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-1 h-12 rounded-full bg-slate-300 flex items-start justify-center">
          <div className="w-1 h-3 bg-slate-600 rounded-full mt-1"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
