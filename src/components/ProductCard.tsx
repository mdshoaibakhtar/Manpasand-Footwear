import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, ShoppingCart, Star } from 'lucide-react';
import { motion } from 'motion/react';
import { Product } from '../types';
import { cn } from '../lib/utils';
import { useStore } from '../StoreContext';

interface ProductCardProps {
  product: Product;
  key?: React.Key;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { toggleWishlist, isInWishlist, addToCart } = useStore();
  const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, product.sizes[0], 1);
  };

  const handleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toggleWishlist(product.id);
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300"
    >
      <Link to={`/product/${product.id}`} className="block relative aspect-square overflow-hidden bg-gray-50">
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          referrerPolicy="no-referrer"
        />
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {discount > 0 && (
            <span className="bg-red-500 text-white text-[10px] font-bold px-2 py-1 rounded-full">
              {discount}% OFF
            </span>
          )}
          <span className="bg-white/90 backdrop-blur-sm text-gray-900 text-[10px] font-bold px-2 py-1 rounded-full shadow-sm">
            NEW
          </span>
        </div>

        {/* Quick Actions */}
        <div className="absolute top-3 right-3 flex flex-col gap-2 translate-x-12 group-hover:translate-x-0 transition-transform duration-300">
          <button 
            onClick={handleWishlist}
            className={cn(
              "p-2 rounded-full shadow-md transition-colors",
              isInWishlist(product.id) ? "bg-red-500 text-white" : "bg-white text-gray-600 hover:bg-emerald-50 hover:text-emerald-600"
            )}
          >
            <Heart className={cn("w-4 h-4", isInWishlist(product.id) && "fill-current")} />
          </button>
          <button 
            onClick={handleAddToCart}
            className="p-2 bg-white rounded-full shadow-md hover:bg-emerald-50 text-gray-600 hover:text-emerald-600 transition-colors"
          >
            <ShoppingCart className="w-4 h-4" />
          </button>
        </div>
      </Link>

      <div className="p-4 space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-[10px] font-bold text-emerald-600 uppercase tracking-wider">{product.subCategory}</span>
          <div className="flex items-center text-[10px] font-bold text-amber-500">
            <Star className="w-3 h-3 fill-current mr-1" />
            4.5
          </div>
        </div>
        
        <Link to={`/product/${product.id}`} className="block">
          <h3 className="text-sm font-semibold text-gray-900 line-clamp-1 group-hover:text-emerald-600 transition-colors">
            {product.name}
          </h3>
        </Link>
        
        <div className="flex items-baseline space-x-2">
          <span className="text-lg font-bold text-gray-900">₹{product.price.toLocaleString()}</span>
          {product.originalPrice > product.price && (
            <span className="text-xs text-gray-400 line-through">₹{product.originalPrice.toLocaleString()}</span>
          )}
        </div>
      </div>
    </motion.div>
  );
}
