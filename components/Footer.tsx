
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer id="about" className="pt-24 pb-12 bg-white border-t border-slate-100">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 lg:col-span-1">
            <a href="#" className="text-2xl font-bold tracking-tighter text-slate-900 mb-6 block">
              LUVIA<span className="text-emerald-600">.</span>
            </a>
            <p className="text-slate-500 leading-relaxed mb-8 pr-12">
              LUVIA is a sustainable fashion house based in Lisbon, creating high-quality, ethically made garments for the modern individual.
            </p>
            <div className="flex space-x-5">
              <a href="#" className="text-slate-400 hover:text-slate-900 transition-colors text-xl">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="#" className="text-slate-400 hover:text-slate-900 transition-colors text-xl">
                <i className="fa-brands fa-pinterest"></i>
              </a>
              <a href="#" className="text-slate-400 hover:text-slate-900 transition-colors text-xl">
                <i className="fa-brands fa-tiktok"></i>
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 uppercase tracking-widest text-xs mb-8">Shop</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-slate-500 hover:text-slate-900 transition-colors">New Arrivals</a></li>
              <li><a href="#" className="text-slate-500 hover:text-slate-900 transition-colors">Best Sellers</a></li>
              <li><a href="#" className="text-slate-500 hover:text-slate-900 transition-colors">The Basics</a></li>
              <li><a href="#" className="text-slate-500 hover:text-slate-900 transition-colors">Winter Edit</a></li>
              <li><a href="#" className="text-slate-500 hover:text-slate-900 transition-colors">Sustainability</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 uppercase tracking-widest text-xs mb-8">Service</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-slate-500 hover:text-slate-900 transition-colors">Shipping & Returns</a></li>
              <li><a href="#" className="text-slate-500 hover:text-slate-900 transition-colors">Track My Order</a></li>
              <li><a href="#" className="text-slate-500 hover:text-slate-900 transition-colors">Gift Cards</a></li>
              <li><a href="#" className="text-slate-500 hover:text-slate-900 transition-colors">Affiliate Program</a></li>
              <li><a href="#" className="text-slate-500 hover:text-slate-900 transition-colors">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 uppercase tracking-widest text-xs mb-8">HQ</h4>
            <ul className="space-y-4 text-slate-500">
              <li className="flex items-start gap-3">
                <i className="fa-solid fa-location-dot mt-1 text-xs"></i>
                <span>Avenida da Liberdade, 120 <br />1250-144 Lisboa, Portugal</span>
              </li>
              <li className="flex items-center gap-3">
                <i className="fa-solid fa-phone text-xs"></i>
                <span>+351 210 000 000</span>
              </li>
              <li className="flex items-center gap-3">
                <i className="fa-solid fa-envelope text-xs"></i>
                <span>hello@luvia.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-12 border-t border-slate-100 gap-6">
          <p className="text-slate-400 text-xs uppercase tracking-widest">
            © 2024 LUVIA Atelier. All rights reserved.
          </p>
          <div className="flex items-center gap-8">
            <a href="#" className="text-slate-400 hover:text-slate-900 transition-colors text-[10px] font-bold uppercase tracking-widest">Privacy</a>
            <a href="#" className="text-slate-400 hover:text-slate-900 transition-colors text-[10px] font-bold uppercase tracking-widest">Terms</a>
            <a href="#" className="text-slate-400 hover:text-slate-900 transition-colors text-[10px] font-bold uppercase tracking-widest">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
