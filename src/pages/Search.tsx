import React from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { MOCK_PRODUCTS } from '../data';
import ProductCard from '../components/ProductCard';
import { Search as SearchIcon } from 'lucide-react';

export default function Search() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q')?.toLowerCase() || '';

  const results = MOCK_PRODUCTS.filter(p => 
    p.name.toLowerCase().includes(query) || 
    p.category.toLowerCase().includes(query) || 
    p.subCategory.toLowerCase().includes(query) ||
    p.description.toLowerCase().includes(query)
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12">
        <p className="text-xs font-bold text-emerald-600 uppercase tracking-[0.2em] mb-2">Search Results</p>
        <h1 className="text-4xl font-bold tracking-tight text-gray-900">
          {query ? `Results for "${query}"` : 'All Products'}
        </h1>
        <p className="text-sm text-gray-500 mt-2">{results.length} products found</p>
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
            <SearchIcon className="w-12 h-12 text-gray-300" />
          </div>
          <h3 className="text-xl font-bold text-gray-900">No results found</h3>
          <p className="text-gray-500 max-w-xs">We couldn't find any products matching your search. Try different keywords.</p>
          <Link to="/" className="text-emerald-600 font-bold hover:underline">
            Back to Home
          </Link>
        </div>
      )}
    </div>
  );
}
