import React from 'react';
import Carousel from '../components/Carousel';
import ProductCard from '../components/ProductCard';
import { MOCK_PRODUCTS } from '../data';
import { motion } from 'motion/react';
import { ArrowRight, Truck, ShieldCheck, RefreshCw, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  const heroItems = [
    {
      id: '1',
      image: 'https://picsum.photos/seed/hero1/1920/1080',
      title: 'Step Into Luxury',
      subtitle: 'Premium Leather Collection',
      link: '/category/Men?sub=Formal Shoes'
    },
    {
      id: '2',
      image: 'https://picsum.photos/seed/hero2/1920/1080',
      title: 'Performance Redefined',
      subtitle: 'Sports & Running Series',
      link: '/category/Men?sub=Sports Shoes'
    },
    {
      id: '3',
      image: 'https://picsum.photos/seed/hero3/1920/1080',
      title: 'Traditional Elegance',
      subtitle: 'Festive Jutis & Mojaris',
      link: '/category/Women?sub=Mojaris'
    },
  ];

  const features = [
    { icon: Truck, title: 'Free Shipping', desc: 'On orders above ₹999' },
    { icon: ShieldCheck, title: 'Secure Payment', desc: '100% protected transactions' },
    { icon: RefreshCw, title: 'Easy Returns', desc: '30-day hassle-free policy' },
    { icon: Zap, title: 'Fast Delivery', desc: 'Within 3-5 business days' },
  ];

  return (
    <div className="space-y-16 pb-16">
      {/* Hero Section */}
      <section className="px-4 sm:px-6 lg:px-8 pt-6">
        <Carousel items={heroItems} />
      </section>

      {/* Features */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col items-center text-center space-y-3 p-6 rounded-2xl bg-gray-50 border border-gray-100"
            >
              <div className="p-3 bg-white rounded-xl shadow-sm text-emerald-600">
                <f.icon className="w-6 h-6" />
              </div>
              <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider">{f.title}</h3>
              <p className="text-xs text-gray-500">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Categories Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8">
          <div>
            <p className="text-xs font-bold text-emerald-600 uppercase tracking-[0.2em] mb-2">Explore</p>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">Shop by Category</h2>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { name: 'Men', img: 'https://picsum.photos/seed/men/800/1000', count: '120+ Products' },
            { name: 'Women', img: 'https://picsum.photos/seed/women/800/1000', count: '80+ Products' },
            { name: 'Kids', img: 'https://picsum.photos/seed/kids/800/1000', count: '50+ Products' },
          ].map((cat, i) => (
            <Link
              key={cat.name}
              to={`/category/${cat.name}`}
              className="group relative h-[400px] rounded-3xl overflow-hidden"
            >
              <img
                src={cat.img}
                alt={cat.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-8 left-8">
                <p className="text-xs font-bold text-emerald-400 uppercase tracking-widest mb-1">{cat.count}</p>
                <h3 className="text-2xl font-bold text-white mb-4">{cat.name}'s Collection</h3>
                <div className="flex items-center text-white text-sm font-bold group-hover:translate-x-2 transition-transform">
                  Shop Now <ArrowRight className="ml-2 w-4 h-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8">
          <div>
            <p className="text-xs font-bold text-emerald-600 uppercase tracking-[0.2em] mb-2">Trending</p>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">Featured Footwear</h2>
          </div>
          <Link to="/category/Men" className="text-sm font-bold text-emerald-600 hover:underline flex items-center">
            View All <ArrowRight className="ml-1 w-4 h-4" />
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {MOCK_PRODUCTS.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Banner */}
      <section className="px-4 sm:px-6 lg:px-8">
        <div className="relative h-[300px] rounded-3xl overflow-hidden bg-emerald-900">
          <img
            src="https://picsum.photos/seed/banner/1920/600?blur=2"
            alt="Banner"
            className="w-full h-full object-cover opacity-40"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">Premium Comfort. Affordable Style.</h2>
            <p className="text-emerald-100 text-lg mb-8 max-w-2xl">
              Discover the perfect blend of luxury and affordability with Manpasand Shoes.
            </p>
            <Link
              to="/category/Men"
              className="bg-white text-emerald-900 px-10 py-4 rounded-full font-bold hover:bg-emerald-50 transition-colors"
            >
              Start Shopping
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
