
import React, { useState, useEffect } from 'react';

interface NavbarProps {
  cartCount: number;
}

const Navbar: React.FC<NavbarProps> = ({ cartCount }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-slate-900"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <i className={`fa-solid ${isMenuOpen ? 'fa-xmark' : 'fa-bars-staggered'} text-xl`}></i>
        </button>

        {/* Logo */}
        <a href="#" className="text-2xl font-bold tracking-tighter text-slate-900">
          LUVIA<span className="text-emerald-600">.</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-10">
          <a href="#shop" className="text-sm font-medium uppercase tracking-widest text-slate-600 hover:text-slate-900 transition-colors">Shop</a>
          <a href="#collections" className="text-sm font-medium uppercase tracking-widest text-slate-600 hover:text-slate-900 transition-colors">Collections</a>
          <a href="#about" className="text-sm font-medium uppercase tracking-widest text-slate-600 hover:text-slate-900 transition-colors">About</a>
          <a href="#contact" className="text-sm font-medium uppercase tracking-widest text-slate-600 hover:text-slate-900 transition-colors">Journal</a>
        </div>

        {/* Actions */}
        <div className="flex items-center space-x-6">
          <button className="hidden sm:block text-slate-600 hover:text-slate-900">
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
          <button className="text-slate-600 hover:text-slate-900 relative">
            <i className="fa-solid fa-cart-shopping"></i>
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-emerald-600 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                {cartCount}
              </span>
            )}
          </button>
          <button className="text-slate-600 hover:text-slate-900">
            <i className="fa-regular fa-user"></i>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 top-[60px] bg-white z-40 md:hidden animate-in slide-in-from-left duration-300">
          <div className="flex flex-col p-8 space-y-6">
            <a href="#shop" className="text-2xl font-light" onClick={() => setIsMenuOpen(false)}>Shop All</a>
            <a href="#collections" className="text-2xl font-light" onClick={() => setIsMenuOpen(false)}>Collections</a>
            <a href="#about" className="text-2xl font-light" onClick={() => setIsMenuOpen(false)}>Our Story</a>
            <a href="#contact" className="text-2xl font-light" onClick={() => setIsMenuOpen(false)}>Journal</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
