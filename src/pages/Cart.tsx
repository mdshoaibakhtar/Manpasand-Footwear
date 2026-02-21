import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Trash2, Plus, Minus, ArrowRight, ShieldCheck } from 'lucide-react';
import { MOCK_PRODUCTS } from '../data';
import { motion } from 'motion/react';
import { cn } from '../lib/utils';

export default function Cart() {
  // Mock cart data
  const cartItems = [
    { ...MOCK_PRODUCTS[0], selectedSize: '9', quantity: 1 },
  ];

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const shipping = subtotal > 999 ? 0 : 99;
  const total = subtotal + shipping;

  if (cartItems.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-24 flex flex-col items-center justify-center text-center space-y-6">
        <div className="p-8 bg-gray-50 rounded-full">
          <ShoppingBag className="w-16 h-16 text-gray-300" />
        </div>
        <div className="space-y-2">
          <h2 className="text-2xl font-bold text-gray-900">Your cart is empty</h2>
          <p className="text-gray-500">Looks like you haven't added anything to your cart yet.</p>
        </div>
        <Link to="/" className="bg-emerald-600 text-white px-10 py-4 rounded-full font-bold hover:bg-emerald-700 transition-all">
          Start Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold tracking-tight text-gray-900 mb-12">Shopping Cart</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-6">
          {cartItems.map((item) => (
            <motion.div
              layout
              key={`${item.id}-${item.selectedSize}`}
              className="flex items-center space-x-6 p-6 bg-white rounded-3xl border border-gray-100 shadow-sm"
            >
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-2xl overflow-hidden bg-gray-50 flex-shrink-0">
                <img src={item.images[0]} alt={item.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
              
              <div className="flex-1 space-y-2">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-sm md:text-base font-bold text-gray-900">{item.name}</h3>
                    <p className="text-xs text-gray-500 font-medium mt-1">Size: {item.selectedSize}</p>
                  </div>
                  <button className="p-2 text-gray-400 hover:text-red-500 transition-colors">
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
                
                <div className="flex items-center justify-between pt-2">
                  <div className="flex items-center border border-gray-100 rounded-lg p-1">
                    <button className="p-1 hover:bg-gray-50 rounded transition-colors"><Minus className="w-3 h-3" /></button>
                    <span className="w-8 text-center text-sm font-bold">{item.quantity}</span>
                    <button className="p-1 hover:bg-gray-50 rounded transition-colors"><Plus className="w-3 h-3" /></button>
                  </div>
                  <span className="text-lg font-bold text-gray-900">₹{item.price.toLocaleString()}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Summary */}
        <div className="space-y-6">
          <div className="bg-gray-50 rounded-3xl p-8 space-y-6 border border-gray-100">
            <h2 className="text-xl font-bold text-gray-900">Order Summary</h2>
            
            <div className="space-y-4 text-sm font-medium">
              <div className="flex justify-between text-gray-500">
                <span>Subtotal</span>
                <span className="text-gray-900">₹{subtotal.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-gray-500">
                <span>Shipping</span>
                <span className={cn(shipping === 0 ? "text-emerald-600" : "text-gray-900")}>
                  {shipping === 0 ? 'FREE' : `₹${shipping}`}
                </span>
              </div>
              <div className="pt-4 border-t border-gray-200 flex justify-between text-lg font-bold text-gray-900">
                <span>Total</span>
                <span>₹{total.toLocaleString()}</span>
              </div>
            </div>

            <Link
              to="/checkout"
              className="w-full flex items-center justify-center space-x-3 bg-gray-900 text-white py-4 rounded-2xl font-bold hover:bg-black transition-all shadow-xl shadow-gray-200"
            >
              <span>Checkout</span>
              <ArrowRight className="w-5 h-5" />
            </Link>

            <div className="flex items-center justify-center space-x-2 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
              <ShieldCheck className="w-4 h-4" />
              <span>Secure Checkout</span>
            </div>
          </div>

          {/* Promo Code */}
          <div className="bg-white border border-gray-100 rounded-2xl p-4 flex space-x-2">
            <input
              type="text"
              placeholder="Promo Code"
              className="flex-1 bg-transparent text-sm font-medium focus:outline-none"
            />
            <button className="text-sm font-bold text-emerald-600 px-2">Apply</button>
          </div>
        </div>
      </div>
    </div>
  );
}
