import React from 'react';
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex flex-col items-start">
              <span className="text-2xl font-bold tracking-tight leading-none">MANPASAND</span>
              <span className="text-xs font-medium text-emerald-400 uppercase tracking-widest">Shoes</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Premium Comfort. Affordable Style. We bring you the finest footwear for every occasion, crafted with care and passion.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Twitter className="w-5 h-5" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider mb-6">Shop By</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="/category/Men" className="hover:text-emerald-400 transition-colors">Men's Collection</a></li>
              <li><a href="/category/Women" className="hover:text-emerald-400 transition-colors">Women's Collection</a></li>
              <li><a href="/category/Kids" className="hover:text-emerald-400 transition-colors">Kids' Collection</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">New Arrivals</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Best Sellers</a></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider mb-6">Customer Service</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Track Order</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Returns & Exchanges</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Shipping Policy</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider mb-6">Get In Touch</h3>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 text-emerald-400 flex-shrink-0" />
                <span>MANPASAND, Footwear Chowk, Muzaffarpur, Bihar – 842001, India</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-emerald-400 flex-shrink-0" />
                <span>+91 9873456XXX</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-emerald-400 flex-shrink-0" />
                <span>support@manpasandparis.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} Manpasand Shoes. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" className="h-4 opacity-50 grayscale hover:grayscale-0 transition-all" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" className="h-4 opacity-50 grayscale hover:grayscale-0 transition-all" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" className="h-4 opacity-50 grayscale hover:grayscale-0 transition-all" />
          </div>
        </div>
      </div>
    </footer>
  );
}
