import React, { useState, useMemo } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { MOCK_PRODUCTS, CATEGORIES } from '../data';
import ProductCard from '../components/ProductCard';
import { Filter, ChevronDown, SlidersHorizontal, X } from 'lucide-react';
import { cn } from '../lib/utils';
import { motion, AnimatePresence } from 'motion/react';

export default function ProductListing() {
  const { category } = useParams<{ category: string }>();
  const [searchParams, setSearchParams] = useSearchParams();
  const subCategoryParam = searchParams.get('sub');

  const [sortBy, setSortBy] = useState<'low' | 'high' | 'new'>('new');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 5000]);
  const [selectedSub, setSelectedSub] = useState<string | null>(subCategoryParam);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const filteredProducts = useMemo(() => {
    return MOCK_PRODUCTS.filter(p => {
      const matchesCategory = category ? p.category === category : true;
      const matchesSub = selectedSub ? p.subCategory === selectedSub : true;
      const matchesPrice = p.price >= priceRange[0] && p.price <= priceRange[1];
      return matchesCategory && matchesSub && matchesPrice;
    }).sort((a, b) => {
      if (sortBy === 'low') return a.price - b.price;
      if (sortBy === 'high') return b.price - a.price;
      return 0; // Default to 'new' (order in mock data)
    });
  }, [category, selectedSub, priceRange, sortBy]);

  const currentSubCategories = category ? CATEGORIES[category as keyof typeof CATEGORIES] : [];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 space-y-4 md:space-y-0">
        <div>
          <p className="text-xs font-bold text-emerald-600 uppercase tracking-[0.2em] mb-2">
            {category || 'All Collections'}
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-gray-900">
            {selectedSub || category || 'Footwear'}
          </h1>
          <p className="text-sm text-gray-500 mt-2">{filteredProducts.length} products found</p>
        </div>

        <div className="flex items-center space-x-4">
          <div className="relative group">
            <button className="flex items-center space-x-2 px-4 py-2 border border-gray-200 rounded-full text-sm font-medium hover:border-emerald-600 transition-colors">
              <span>Sort by: {sortBy === 'low' ? 'Price Low to High' : sortBy === 'high' ? 'Price High to Low' : 'Newest'}</span>
              <ChevronDown className="w-4 h-4" />
            </button>
            <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-100 shadow-xl rounded-xl py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-10">
              {[
                { label: 'Newest', value: 'new' },
                { label: 'Price: Low to High', value: 'low' },
                { label: 'Price: High to Low', value: 'high' },
              ].map((opt) => (
                <button
                  key={opt.value}
                  onClick={() => setSortBy(opt.value as any)}
                  className={cn(
                    "w-full text-left px-4 py-2 text-sm hover:bg-emerald-50 transition-colors",
                    sortBy === opt.value ? "text-emerald-600 font-bold" : "text-gray-600"
                  )}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>
          <button
            onClick={() => setIsFilterOpen(true)}
            className="md:hidden p-2 border border-gray-200 rounded-full hover:border-emerald-600 transition-colors"
          >
            <SlidersHorizontal className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="flex gap-12">
        {/* Sidebar Filters (Desktop) */}
        <aside className="hidden md:block w-64 space-y-10">
          {/* Sub-categories */}
          {category && (
            <div className="space-y-4">
              <h3 className="text-sm font-bold uppercase tracking-wider text-gray-900">Categories</h3>
              <div className="flex flex-col space-y-2">
                <button
                  onClick={() => setSelectedSub(null)}
                  className={cn(
                    "text-sm text-left px-3 py-2 rounded-lg transition-colors",
                    !selectedSub ? "bg-emerald-600 text-white font-bold" : "text-gray-600 hover:bg-gray-100"
                  )}
                >
                  All {category}
                </button>
                {currentSubCategories.map((sub) => (
                  <button
                    key={sub}
                    onClick={() => setSelectedSub(sub)}
                    className={cn(
                      "text-sm text-left px-3 py-2 rounded-lg transition-colors",
                      selectedSub === sub ? "bg-emerald-600 text-white font-bold" : "text-gray-600 hover:bg-gray-100"
                    )}
                  >
                    {sub}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Price Filter */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-gray-900">Price Range</h3>
            <div className="space-y-4">
              <input
                type="range"
                min="0"
                max="5000"
                step="100"
                value={priceRange[1]}
                onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
                className="w-full accent-emerald-600"
              />
              <div className="flex items-center justify-between text-xs font-bold text-gray-500">
                <span>₹0</span>
                <span>₹{priceRange[1].toLocaleString()}</span>
              </div>
            </div>
          </div>
        </aside>

        {/* Product Grid */}
        <main className="flex-1">
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-24 text-center space-y-4">
              <div className="p-6 bg-gray-50 rounded-full">
                <Filter className="w-12 h-12 text-gray-300" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">No products found</h3>
              <p className="text-gray-500 max-w-xs">Try adjusting your filters or search criteria to find what you're looking for.</p>
              <button
                onClick={() => {
                  setSelectedSub(null);
                  setPriceRange([0, 5000]);
                }}
                className="text-emerald-600 font-bold hover:underline"
              >
                Clear all filters
              </button>
            </div>
          )}
        </main>
      </div>

      {/* Mobile Filter Drawer */}
      <AnimatePresence>
        {isFilterOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsFilterOpen(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[60]"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 bottom-0 w-full max-w-xs bg-white z-[70] p-6 shadow-2xl overflow-y-auto"
            >
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-xl font-bold">Filters</h2>
                <button onClick={() => setIsFilterOpen(false)} className="p-2 hover:bg-gray-100 rounded-full">
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="space-y-10">
                {category && (
                  <div className="space-y-4">
                    <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400">Categories</h3>
                    <div className="grid grid-cols-1 gap-2">
                      {['All', ...currentSubCategories].map((sub) => (
                        <button
                          key={sub}
                          onClick={() => {
                            setSelectedSub(sub === 'All' ? null : sub);
                            setIsFilterOpen(false);
                          }}
                          className={cn(
                            "text-sm text-left px-4 py-3 rounded-xl transition-colors",
                            (sub === 'All' ? !selectedSub : selectedSub === sub)
                              ? "bg-emerald-600 text-white font-bold"
                              : "bg-gray-50 text-gray-600"
                          )}
                        >
                          {sub}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                <div className="space-y-4">
                  <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400">Price Range</h3>
                  <div className="space-y-6">
                    <input
                      type="range"
                      min="0"
                      max="5000"
                      step="100"
                      value={priceRange[1]}
                      onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
                      className="w-full accent-emerald-600"
                    />
                    <div className="flex items-center justify-between text-sm font-bold">
                      <span className="px-3 py-1 bg-gray-100 rounded-lg">₹0</span>
                      <span className="px-3 py-1 bg-emerald-50 text-emerald-600 rounded-lg">₹{priceRange[1].toLocaleString()}</span>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => setIsFilterOpen(false)}
                  className="w-full bg-gray-900 text-white py-4 rounded-2xl font-bold mt-8"
                >
                  Apply Filters
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
