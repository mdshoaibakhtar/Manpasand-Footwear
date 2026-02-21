import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShoppingCart, Heart, User, Search, Menu, X, ChevronDown } from 'lucide-react';
import { cn } from '../lib/utils';
import { CATEGORIES } from '../data';
import { useStore } from '../StoreContext';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const navigate = useNavigate();
  const { cart, wishlist } = useStore();

  const navItems = [
    { label: 'Men', path: '/category/Men' },
    { label: 'Women', path: '/category/Women' },
    { label: 'Kids', path: '/category/Kids' },
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setIsSearchOpen(false);
      setSearchQuery('');
    }
  };

  const totalCartItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex flex-col items-start">
            <span className="text-xl font-bold tracking-tight text-gray-900 leading-none">MANPASAND</span>
            <span className="text-[10px] font-medium text-emerald-600 uppercase tracking-widest">Shoes</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative group"
              >
                <Link
                  to={item.path}
                  className="flex items-center text-sm font-medium text-gray-700 hover:text-emerald-600 transition-colors py-4"
                >
                  {item.label}
                  <ChevronDown className="ml-1 w-4 h-4" />
                </Link>
                
                {/* Dropdown */}
                <div className={cn(
                  "absolute top-full left-0 w-64 bg-white border border-gray-100 shadow-xl rounded-b-xl py-4 transition-all duration-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible",
                  "translate-y-2 group-hover:translate-y-0"
                )}>
                  <div className="grid grid-cols-1 gap-2 px-4">
                    {CATEGORIES[item.label as keyof typeof CATEGORIES].slice(0, 8).map((sub) => (
                      <Link
                        key={sub}
                        to={`/category/${item.label}?sub=${sub}`}
                        className="text-xs text-gray-600 hover:text-emerald-600 hover:bg-emerald-50 px-2 py-1.5 rounded-md transition-colors"
                      >
                        {sub}
                      </Link>
                    ))}
                    <Link
                      to={item.path}
                      className="text-xs font-semibold text-emerald-600 mt-2 px-2"
                    >
                      View All {item.label}
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Icons */}
          <div className="flex items-center space-x-4">
            <div className="relative">
              <button 
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="p-2 text-gray-600 hover:text-emerald-600 transition-colors"
              >
                <Search className="w-5 h-5" />
              </button>
              
              {isSearchOpen && (
                <div className="absolute right-0 mt-2 w-72 bg-white border border-gray-100 shadow-xl rounded-2xl p-4 z-50">
                  <form onSubmit={handleSearch} className="flex space-x-2">
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Search for shoes..."
                      className="flex-1 text-sm border border-gray-100 rounded-xl px-4 py-2 focus:outline-none focus:border-emerald-600"
                      autoFocus
                    />
                    <button type="submit" className="bg-emerald-600 text-white p-2 rounded-xl">
                      <Search className="w-4 h-4" />
                    </button>
                  </form>
                </div>
              )}
            </div>
            
            <Link to="/profile" className="p-2 text-gray-600 hover:text-emerald-600 transition-colors">
              <User className="w-5 h-5" />
            </Link>
            <Link to="/wishlist" className="p-2 text-gray-600 hover:text-emerald-600 transition-colors relative">
              <Heart className="w-5 h-5" />
              {wishlist.length > 0 && (
                <span className="absolute top-1 right-1 bg-red-500 text-white text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center">
                  {wishlist.length}
                </span>
              )}
            </Link>
            <Link to="/cart" className="p-2 text-gray-600 hover:text-emerald-600 transition-colors relative">
              <ShoppingCart className="w-5 h-5" />
              {totalCartItems > 0 && (
                <span className="absolute top-1 right-1 bg-emerald-600 text-white text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center">
                  {totalCartItems}
                </span>
              )}
            </Link>
            
            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-gray-600"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={cn(
        "md:hidden bg-white border-t border-gray-100 transition-all duration-300 overflow-hidden",
        isMenuOpen ? "max-h-screen" : "max-h-0"
      )}>
        <div className="px-4 pt-2 pb-6 space-y-1">
          {navItems.map((item) => (
            <div key={item.label} className="space-y-2">
              <Link
                to={item.path}
                className="block px-3 py-2 text-base font-medium text-gray-900 hover:bg-emerald-50 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
              <div className="pl-6 grid grid-cols-2 gap-2">
                {CATEGORIES[item.label as keyof typeof CATEGORIES].slice(0, 6).map((sub) => (
                  <Link
                    key={sub}
                    to={`/category/${item.label}?sub=${sub}`}
                    className="text-xs text-gray-500 py-1"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {sub}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
}
