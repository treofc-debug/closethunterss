
import React, { useState, useMemo } from 'react';
import { CATEGORIES, PRODUCTS } from '../constants';
import { Product } from '../types';

interface ProductGridProps {
  onAddToCart: (product: Product) => void;
}

const ProductGrid: React.FC<ProductGridProps> = ({ onAddToCart }) => {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProducts = useMemo(() => {
    if (activeCategory === 'all') return PRODUCTS;
    return PRODUCTS.filter(p => p.category === activeCategory);
  }, [activeCategory]);

  return (
    <section id="shop" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-4">Featured Collection</h2>
            <p className="text-slate-500 max-w-md">Carefully curated pieces designed for comfort and elegance.</p>
          </div>

          <div className="flex flex-wrap gap-4 overflow-x-auto pb-2 scrollbar-hide">
            {CATEGORIES.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 text-sm font-medium transition-all border-b-2 ${
                  activeCategory === category.id 
                  ? 'text-slate-900 border-slate-900' 
                  : 'text-slate-400 border-transparent hover:text-slate-600'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
          {filteredProducts.map((product) => (
            <div key={product.id} className="group relative flex flex-col">
              <div className="relative aspect-[3/4] overflow-hidden bg-slate-100 rounded-sm mb-4">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Badges */}
                <div className="absolute top-3 left-3 flex flex-col gap-2">
                  {product.isNew && (
                    <span className="bg-emerald-600 text-white text-[10px] font-bold uppercase tracking-widest px-2 py-1">New</span>
                  )}
                  {product.onSale && (
                    <span className="bg-rose-500 text-white text-[10px] font-bold uppercase tracking-widest px-2 py-1">Sale</span>
                  )}
                </div>

                {/* Wishlist Button */}
                <button className="absolute top-3 right-3 text-slate-400 hover:text-rose-500 transition-colors bg-white w-8 h-8 rounded-full flex items-center justify-center shadow-sm">
                  <i className="fa-regular fa-heart"></i>
                </button>

                {/* Add to Cart Overlay */}
                <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <button 
                    onClick={() => onAddToCart(product)}
                    className="w-full bg-white/90 backdrop-blur-sm text-slate-900 py-3 text-xs font-bold uppercase tracking-widest shadow-lg hover:bg-slate-900 hover:text-white transition-all flex items-center justify-center gap-2"
                  >
                    <i className="fa-solid fa-plus text-[10px]"></i>
                    Quick Add
                  </button>
                </div>
              </div>

              <div>
                <span className="text-[10px] text-slate-400 uppercase tracking-widest font-semibold mb-1 block">
                  {product.category}
                </span>
                <h3 className="text-slate-900 font-medium mb-1 group-hover:text-emerald-700 transition-colors">
                  {product.name}
                </h3>
                <div className="flex items-center gap-2">
                  {product.onSale ? (
                    <>
                      <span className="text-slate-900 font-bold">${product.discountPrice}</span>
                      <span className="text-slate-400 text-sm line-through">${product.price}</span>
                    </>
                  ) : (
                    <span className="text-slate-900 font-bold">${product.price}</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="mt-16 text-center">
          <button className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.2em] border-b-2 border-slate-900 pb-2 hover:text-emerald-600 hover:border-emerald-600 transition-all group">
            Explore Full Collection
            <i className="fa-solid fa-arrow-right-long group-hover:translate-x-1 transition-transform"></i>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
