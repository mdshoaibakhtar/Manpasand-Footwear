import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ShieldCheck, CreditCard, Truck, MapPin } from 'lucide-react';

export default function Checkout() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Link to="/cart" className="inline-flex items-center text-sm font-bold text-gray-500 hover:text-emerald-600 mb-8">
        <ChevronLeft className="w-4 h-4 mr-1" />
        Back to Cart
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-8">
          {/* Shipping Info */}
          <section className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-emerald-50 rounded-lg text-emerald-600">
                <MapPin className="w-5 h-5" />
              </div>
              <h2 className="text-xl font-bold">Shipping Address</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="text" placeholder="First Name" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 outline-none transition-all" />
              <input type="text" placeholder="Last Name" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 outline-none transition-all" />
              <input type="email" placeholder="Email Address" className="w-full px-4 py-3 rounded-xl border border-gray-200 md:col-span-2 focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 outline-none transition-all" />
              <input type="text" placeholder="Address Line 1" className="w-full px-4 py-3 rounded-xl border border-gray-200 md:col-span-2 focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 outline-none transition-all" />
              <input type="text" placeholder="City" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 outline-none transition-all" />
              <input type="text" placeholder="Pincode" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 outline-none transition-all" />
            </div>
          </section>

          {/* Payment Method */}
          <section className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-emerald-50 rounded-lg text-emerald-600">
                <CreditCard className="w-5 h-5" />
              </div>
              <h2 className="text-xl font-bold">Payment Method</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { id: 'upi', label: 'UPI / QR', icon: '📱' },
                { id: 'card', label: 'Card', icon: '💳' },
                { id: 'cod', label: 'Cash on Delivery', icon: '💵' },
              ].map((method) => (
                <button
                  key={method.id}
                  className="flex flex-col items-center justify-center p-6 border-2 border-gray-100 rounded-2xl hover:border-emerald-600 hover:bg-emerald-50 transition-all group"
                >
                  <span className="text-2xl mb-2">{method.icon}</span>
                  <span className="text-sm font-bold text-gray-600 group-hover:text-emerald-600">{method.label}</span>
                </button>
              ))}
            </div>
          </section>
        </div>

        {/* Order Review */}
        <div className="space-y-6">
          <div className="bg-gray-50 rounded-3xl p-8 space-y-6 border border-gray-100">
            <h2 className="text-xl font-bold text-gray-900">Order Review</h2>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-lg bg-white border border-gray-100 overflow-hidden flex-shrink-0">
                  <img src="https://picsum.photos/seed/shoe1/100/100" alt="Product" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-bold text-gray-900 truncate">Manpasand JACO LEATHER...</p>
                  <p className="text-[10px] text-gray-500">Qty: 1 • Size: 9</p>
                </div>
                <span className="text-sm font-bold text-gray-900">₹1,799</span>
              </div>
            </div>

            <div className="pt-6 border-t border-gray-200 space-y-4 text-sm font-medium">
              <div className="flex justify-between text-gray-500">
                <span>Subtotal</span>
                <span className="text-gray-900">₹1,799</span>
              </div>
              <div className="flex justify-between text-gray-500">
                <span>Shipping</span>
                <span className="text-emerald-600">FREE</span>
              </div>
              <div className="pt-4 border-t border-gray-200 flex justify-between text-lg font-bold text-gray-900">
                <span>Total</span>
                <span>₹1,799</span>
              </div>
            </div>

            <button className="w-full bg-emerald-600 text-white py-4 rounded-2xl font-bold hover:bg-emerald-700 transition-all shadow-xl shadow-emerald-100">
              Place Order
            </button>

            <div className="flex items-center justify-center space-x-2 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
              <ShieldCheck className="w-4 h-4" />
              <span>100% Secure Payment</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
