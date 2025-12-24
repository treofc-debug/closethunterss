
import React, { useState, useCallback } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import { Product } from './types';

const App: React.FC = () => {
  const [cart, setCart] = useState<Product[]>([]);
  const [showToast, setShowToast] = useState(false);

  const addToCart = useCallback((product: Product) => {
    setCart(prev => [...prev, product]);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  }, []);

  return (
    <div className="min-h-screen relative">
      <Navbar cartCount={cart.length} />
      
      <main>
        <Hero />
        
        {/* Brand Promise Section */}
        <section className="py-20 bg-white border-b border-slate-100">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
              <div>
                <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className="fa-solid fa-leaf text-emerald-600 text-xl"></i>
                </div>
                <h3 className="text-lg font-bold mb-3 tracking-tight">Eco-Conscious</h3>
                <p className="text-slate-500 px-6">100% organic cotton and recycled materials in every garment.</p>
              </div>
              <div>
                <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className="fa-solid fa-truck-fast text-emerald-600 text-xl"></i>
                </div>
                <h3 className="text-lg font-bold mb-3 tracking-tight">Global Shipping</h3>
                <p className="text-slate-500 px-6">Fast and carbon-neutral delivery to over 150 countries.</p>
              </div>
              <div>
                <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className="fa-solid fa-rotate-left text-emerald-600 text-xl"></i>
                </div>
                <h3 className="text-lg font-bold mb-3 tracking-tight">Easy Returns</h3>
                <p className="text-slate-500 px-6">30-day no-questions-asked return policy for your peace of mind.</p>
              </div>
            </div>
          </div>
        </section>

        <ProductGrid onAddToCart={addToCart} />

        {/* Featured Story Section */}
        <section className="py-24 bg-slate-50" id="collections">
          <div className="container mx-auto px-6">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              <div className="w-full lg:w-1/2 grid grid-cols-2 gap-4">
                <img 
                  src="https://picsum.photos/id/1027/600/800" 
                  alt="Story 1" 
                  className="w-full h-full object-cover aspect-[3/4] rounded-sm transform lg:-translate-y-8 transition-all hover:scale-[1.02] duration-500"
                />
                <img 
                  src="https://picsum.photos/id/1011/600/800" 
                  alt="Story 2" 
                  className="w-full h-full object-cover aspect-[3/4] rounded-sm transform lg:translate-y-8 transition-all hover:scale-[1.02] duration-500"
                />
              </div>
              <div className="w-full lg:w-1/2">
                <span className="text-emerald-600 text-xs font-bold uppercase tracking-[0.3em] mb-6 block">Our Craft</span>
                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight leading-tight mb-8">
                  Designed in Lisbon. <br />Made for the world.
                </h2>
                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                  We believe that clothing should be a reflection of who you are. Our pieces are designed with a focus on durability, versatility, and honest craftsmanship. By skipping traditional retail markups, we deliver premium luxury directly to your door.
                </p>
                <div className="space-y-6 mb-10">
                  <div className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full border border-emerald-500 flex items-center justify-center flex-shrink-0 mt-1">
                      <i className="fa-solid fa-check text-[10px] text-emerald-600"></i>
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">Ethical Sourcing</h4>
                      <p className="text-slate-500 text-sm">Working exclusively with certified fair-wage factories.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full border border-emerald-500 flex items-center justify-center flex-shrink-0 mt-1">
                      <i className="fa-solid fa-check text-[10px] text-emerald-600"></i>
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">Zero-Waste Packaging</h4>
                      <p className="text-slate-500 text-sm">All shipments come in compostable or recyclable mailers.</p>
                    </div>
                  </div>
                </div>
                <a 
                  href="#journal" 
                  className="px-10 py-5 bg-slate-900 text-white font-bold uppercase tracking-widest hover:bg-emerald-600 transition-all inline-block rounded-sm"
                >
                  Read Our Story
                </a>
              </div>
            </div>
          </div>
        </section>

        <Newsletter />
      </main>

      <Footer />

      {/* Toast Notification */}
      {showToast && (
        <div className="fixed bottom-10 right-10 z-[60] bg-slate-900 text-white px-6 py-4 shadow-2xl animate-in slide-in-from-bottom flex items-center gap-4 rounded-sm">
          <div className="w-10 h-10 bg-emerald-600 rounded-full flex items-center justify-center flex-shrink-0">
             <i className="fa-solid fa-cart-arrow-down"></i>
          </div>
          <div>
            <p className="font-bold text-sm">Item added to cart!</p>
            <p className="text-slate-400 text-xs">Ready to check out?</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
