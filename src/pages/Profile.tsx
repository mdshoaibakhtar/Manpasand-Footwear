import React from 'react';
import { User, Package, Heart, MapPin, Settings, LogOut, ChevronRight } from 'lucide-react';
import { cn } from '../lib/utils';

export default function Profile() {
  const menuItems = [
    { icon: Package, label: 'My Orders', desc: 'Track, return or buy things again', color: 'bg-blue-50 text-blue-600' },
    { icon: Heart, label: 'Wishlist', desc: 'Your favorite items saved for later', color: 'bg-red-50 text-red-600' },
    { icon: MapPin, label: 'Addresses', desc: 'Manage your shipping locations', color: 'bg-emerald-50 text-emerald-600' },
    { icon: Settings, label: 'Account Settings', desc: 'Update your personal information', color: 'bg-gray-50 text-gray-600' },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Profile Header */}
      <div className="flex flex-col items-center text-center space-y-4 mb-12">
        <div className="w-24 h-24 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 text-3xl font-bold border-4 border-white shadow-xl">
          JD
        </div>
        <div>
          <h1 className="text-2xl font-bold text-gray-900">John Doe</h1>
          <p className="text-sm text-gray-500">john.doe@example.com</p>
        </div>
        <button className="text-xs font-bold text-emerald-600 border border-emerald-100 px-4 py-1.5 rounded-full hover:bg-emerald-50 transition-colors">
          Edit Profile
        </button>
      </div>

      {/* Menu Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {menuItems.map((item) => (
          <button
            key={item.label}
            className="flex items-center p-6 bg-white rounded-3xl border border-gray-100 hover:border-emerald-100 hover:shadow-lg transition-all text-left group"
          >
            <div className={cn("p-3 rounded-2xl mr-4 transition-transform group-hover:scale-110", item.color)}>
              <item.icon className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <h3 className="text-base font-bold text-gray-900">{item.label}</h3>
              <p className="text-xs text-gray-500 mt-0.5">{item.desc}</p>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-300 group-hover:text-emerald-600 transition-colors" />
          </button>
        ))}
      </div>

      {/* Logout */}
      <div className="mt-12 pt-8 border-t border-gray-100">
        <button className="w-full flex items-center justify-center space-x-2 text-red-500 font-bold py-4 rounded-2xl hover:bg-red-50 transition-colors">
          <LogOut className="w-5 h-5" />
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
}
