import React from 'react';
import { Link } from 'react-router-dom';
import { MOCK_PRODUCTS } from '../data';
import ProductCard from '../components/ProductCard';
import { Heart } from 'lucide-react';
import { useStore } from '../StoreContext';

export default function Wishlist() {
  const { wishlist } = useStore();

  const results = MOCK_PRODUCTS.filter(p => wishlist.includes(p.id));

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12">
        <p className="text-xs font-bold text-emerald-600 uppercase tracking-[0.2em] mb-2">My Favorites</p>
        <h1 className="text-4xl font-bold tracking-tight text-gray-900">Wishlist</h1>
        <p className="text-sm text-gray-500 mt-2">{results.length} items saved</p>
      </div>

      {results.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {results.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-24 text-center space-y-4">
          <div className="p-6 bg-gray-50 rounded-full">
            <Heart className="w-12 h-12 text-gray-300" />
          </div>
          <h3 className="text-xl font-bold text-gray-900">Your wishlist is empty</h3>
          <p className="text-gray-500 max-w-xs">Save your favorite shoes to see them here later.</p>
          <Link to="/" className="text-emerald-600 font-bold hover:underline">
            Start Shopping
          </Link>
        </div>
      )}
    </div>
  );
}
