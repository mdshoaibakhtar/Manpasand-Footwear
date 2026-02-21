import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { MOCK_PRODUCTS } from '../data';
import { 
  Heart, ShoppingCart, Star, ChevronRight, 
  Truck, RefreshCw, ShieldCheck, Share2, 
  Plus, Minus, MessageSquare 
} from 'lucide-react';
import { cn } from '../lib/utils';
import { motion } from 'motion/react';
import { useStore } from '../StoreContext';

export default function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const product = MOCK_PRODUCTS.find(p => p.id === id);
  const { addToCart, toggleWishlist, isInWishlist } = useStore();
  
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-24 text-center">
        <h2 className="text-2xl font-bold">Product not found</h2>
        <Link to="/" className="text-emerald-600 hover:underline mt-4 block">Back to Home</Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert('Please select a size');
      return;
    }
    addToCart(product, selectedSize, quantity);
  };

  const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Breadcrumbs */}
      <nav className="flex items-center space-x-2 text-xs font-medium text-gray-500 mb-8 overflow-x-auto whitespace-nowrap pb-2">
        <Link to="/" className="hover:text-emerald-600">Home</Link>
        <ChevronRight className="w-3 h-3" />
        <Link to={`/category/${product.category}`} className="hover:text-emerald-600">{product.category}</Link>
        <ChevronRight className="w-3 h-3" />
        <Link to={`/category/${product.category}?sub=${product.subCategory}`} className="hover:text-emerald-600">{product.subCategory}</Link>
        <ChevronRight className="w-3 h-3" />
        <span className="text-gray-900 truncate">{product.name}</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
        {/* Image Gallery */}
        <div className="space-y-4">
          <div className="aspect-square rounded-3xl overflow-hidden bg-gray-50 border border-gray-100 relative group">
            <motion.img
              key={activeImage}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              src={product.images[activeImage]}
              alt={product.name}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            {discount > 0 && (
              <span className="absolute top-6 left-6 bg-red-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                {discount}% OFF
              </span>
            )}
            <button className="absolute top-6 right-6 p-3 bg-white/90 backdrop-blur-sm rounded-full shadow-md hover:bg-white transition-all">
              <Share2 className="w-5 h-5 text-gray-600" />
            </button>
          </div>
          
          <div className="grid grid-cols-4 gap-4">
            {product.images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setActiveImage(idx)}
                className={cn(
                  "aspect-square rounded-xl overflow-hidden border-2 transition-all",
                  activeImage === idx ? "border-emerald-600 ring-2 ring-emerald-100" : "border-transparent hover:border-gray-200"
                )}
              >
                <img src={img} alt={`${product.name} ${idx}`} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </button>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-8">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest">{product.subCategory}</span>
              <span className="text-xs font-medium text-gray-400">SKU: {product.sku}</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">{product.name}</h1>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center px-2 py-1 bg-amber-50 rounded-lg">
                <Star className="w-4 h-4 text-amber-500 fill-current mr-1" />
                <span className="text-sm font-bold text-amber-700">4.8</span>
              </div>
              <span className="text-sm text-gray-500 font-medium">(124 Reviews)</span>
            </div>

            <div className="flex items-baseline space-x-4 pt-2">
              <span className="text-4xl font-bold text-gray-900">₹{product.price.toLocaleString()}</span>
              {product.originalPrice > product.price && (
                <span className="text-xl text-gray-400 line-through">₹{product.originalPrice.toLocaleString()}</span>
              )}
            </div>
          </div>

          {/* Size Selector */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-bold uppercase tracking-wider text-gray-900">Select Size</h3>
              <button className="text-xs font-bold text-emerald-600 hover:underline">Size Guide</button>
            </div>
            <div className="flex flex-wrap gap-3">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={cn(
                    "w-14 h-14 flex items-center justify-center rounded-xl border-2 text-sm font-bold transition-all",
                    selectedSize === size 
                      ? "border-emerald-600 bg-emerald-50 text-emerald-600 shadow-sm" 
                      : "border-gray-100 text-gray-600 hover:border-gray-300"
                  )}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity & Actions */}
          <div className="space-y-6">
            <div className="flex items-center space-x-6">
              <div className="flex items-center border-2 border-gray-100 rounded-xl p-1">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-2 hover:bg-gray-50 rounded-lg transition-colors"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-12 text-center font-bold">{quantity}</span>
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-2 hover:bg-gray-50 rounded-lg transition-colors"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
              <button 
                onClick={handleAddToCart}
                className="flex-1 flex items-center justify-center space-x-3 bg-emerald-600 text-white py-4 rounded-2xl font-bold hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-200"
              >
                <ShoppingCart className="w-5 h-5" />
                <span>Add to Cart</span>
              </button>
              <button 
                onClick={() => toggleWishlist(product.id)}
                className={cn(
                  "p-4 border-2 rounded-2xl transition-all",
                  isInWishlist(product.id) ? "border-red-100 bg-red-50 text-red-500" : "border-gray-100 hover:border-red-100 hover:bg-red-50 hover:text-red-500"
                )}
              >
                <Heart className={cn("w-6 h-6", isInWishlist(product.id) && "fill-current")} />
              </button>
            </div>
          </div>

          {/* Highlights */}
          <div className="grid grid-cols-3 gap-4 py-8 border-y border-gray-100">
            <div className="flex flex-col items-center text-center space-y-2">
              <div className="p-2 bg-emerald-50 rounded-lg text-emerald-600">
                <Truck className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-gray-500">Free Shipping</span>
            </div>
            <div className="flex flex-col items-center text-center space-y-2">
              <div className="p-2 bg-emerald-50 rounded-lg text-emerald-600">
                <RefreshCw className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-gray-500">{product.returnPolicy}</span>
            </div>
            <div className="flex flex-col items-center text-center space-y-2">
              <div className="p-2 bg-emerald-50 rounded-lg text-emerald-600">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-gray-500">Authentic</span>
            </div>
          </div>

          {/* Description */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-gray-900">Product Details</h3>
            <p className="text-sm text-gray-500 leading-relaxed">
              {product.description}
            </p>
            <ul className="space-y-2">
              <li className="flex items-center text-sm text-gray-600">
                <span className="w-24 font-bold text-gray-900">Material:</span>
                <span>{product.material}</span>
              </li>
              {product.features.map((f, i) => (
                <li key={i} className="flex items-center text-sm text-gray-600">
                  <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-3" />
                  {f}
                </li>
              ))}
            </ul>
          </div>

          {/* Reviews Preview */}
          <div className="space-y-6 pt-8">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-bold uppercase tracking-wider text-gray-900">Customer Reviews</h3>
              <button className="text-xs font-bold text-emerald-600 hover:underline">Write a Review</button>
            </div>
            <div className="space-y-6">
              {product.reviews.length > 0 ? (
                product.reviews.map((review) => (
                  <div key={review.id} className="space-y-3 pb-6 border-b border-gray-50 last:border-0">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 font-bold text-xs">
                          {review.user[0]}
                        </div>
                        <span className="text-sm font-bold text-gray-900">{review.user}</span>
                      </div>
                      <span className="text-[10px] font-medium text-gray-400">{review.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={cn("w-3 h-3", i < review.rating ? "text-amber-500 fill-current" : "text-gray-200")} />
                      ))}
                    </div>
                    <p className="text-sm text-gray-500 leading-relaxed">{review.comment}</p>
                  </div>
                ))
              ) : (
                <div className="text-center py-8 bg-gray-50 rounded-2xl">
                  <MessageSquare className="w-8 h-8 text-gray-300 mx-auto mb-2" />
                  <p className="text-sm text-gray-500">No reviews yet. Be the first to review!</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
