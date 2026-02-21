import { Product } from './types';

export const CATEGORIES = {
  Men: [
    'Formal Shoes', 'Casual Shoes', 'Sports Shoes', 'Slippers', 'Sandals', 
    'Party Shoes', 'Loafers', 'Flip Flops', 'Crocs', 'Running Shoes', 
    'Boots', 'Sneakers', 'Festive Jutis', 'Polish'
  ],
  Women: [
    'Slippers', 'Sandals', 'Sports Shoes', 'Belly', 'Flip Flops', 
    'Party Sandals', 'Ethnic Shoes', 'Wedding Shoes', 'Boots', 'Mojaris'
  ],
  Kids: [
    'Casual Shoes', 'Party Shoes', 'Sneakers', 'Boots', 'Crocs', 
    'Flip Flops', 'Loafers', 'Formal Shoes'
  ]
};

export const MOCK_PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Manpasand JACO LEATHER Formal Shoes 765001',
    price: 1799,
    originalPrice: 1999,
    category: 'Men',
    subCategory: 'Formal Shoes',
    material: 'Goat leather upper + PU sole',
    features: ['Lightweight', 'Comfortable', 'Premium Finish'],
    returnPolicy: '30-day return',
    sku: 'MP-765001',
    images: [
      'https://picsum.photos/seed/shoe1/600/600',
      'https://picsum.photos/seed/shoe1-2/600/600',
      'https://picsum.photos/seed/shoe1-3/600/600'
    ],
    description: 'Experience premium comfort with our JACO LEATHER series. Handcrafted with genuine goat leather for a sophisticated look and durable PU sole for all-day wear.',
    sizes: ['7', '8', '9', '10', '11'],
    reviews: [
      { id: 'r1', user: 'Amit Sharma', rating: 5, comment: 'Excellent quality and very comfortable.', date: '2024-01-15' },
      { id: 'r2', user: 'Rahul Verma', rating: 4, comment: 'Good value for money.', date: '2024-01-20' }
    ]
  },
  {
    id: '2',
    name: 'Manpasand Air-Walk Sneakers',
    price: 2499,
    originalPrice: 2999,
    category: 'Men',
    subCategory: 'Sneakers',
    material: 'Mesh upper + Rubber sole',
    features: ['Breathable', 'Shock absorbing'],
    returnPolicy: '30-day return',
    sku: 'MP-SNEAK-01',
    images: [
      'https://picsum.photos/seed/shoe2/600/600',
      'https://picsum.photos/seed/shoe2-2/600/600'
    ],
    description: 'Modern sneakers designed for the urban explorer. Lightweight mesh ensures breathability while the rubber sole provides superior grip.',
    sizes: ['8', '9', '10'],
    reviews: []
  },
  {
    id: '3',
    name: 'Manpasand Ethnic Mojaris',
    price: 1299,
    originalPrice: 1599,
    category: 'Women',
    subCategory: 'Mojaris',
    material: 'Silk upper + Leather sole',
    features: ['Handcrafted', 'Traditional design'],
    returnPolicy: '30-day return',
    sku: 'MP-MOJ-01',
    images: [
      'https://picsum.photos/seed/shoe3/600/600'
    ],
    description: 'Beautifully handcrafted mojaris perfect for festive occasions. Features intricate embroidery and a comfortable leather sole.',
    sizes: ['5', '6', '7', '8'],
    reviews: []
  },
  {
    id: '4',
    name: 'Manpasand Kids Dino Crocs',
    price: 899,
    originalPrice: 1199,
    category: 'Kids',
    subCategory: 'Crocs',
    material: 'EVA',
    features: ['Waterproof', 'Easy to clean'],
    returnPolicy: '30-day return',
    sku: 'MP-KID-DINO',
    images: [
      'https://picsum.photos/seed/shoe4/600/600'
    ],
    description: 'Fun and durable crocs for kids. Made from high-quality EVA material, these are perfect for outdoor play and easy to wash.',
    sizes: ['C1', 'C2', 'C3'],
    reviews: []
  },
  {
    id: '5',
    name: 'Manpasand Velvet Party Sandals',
    price: 1899,
    originalPrice: 2299,
    category: 'Women',
    subCategory: 'Party Sandals',
    material: 'Velvet upper + Resin sole',
    features: ['Elegant look', 'Soft cushioning'],
    returnPolicy: '30-day return',
    sku: 'MP-W-PARTY-01',
    images: ['https://picsum.photos/seed/shoe5/600/600'],
    description: 'Stunning velvet sandals for your special evenings. Designed with comfort in mind without compromising on style.',
    sizes: ['6', '7', '8'],
    reviews: []
  },
  {
    id: '6',
    name: 'Manpasand Junior Sports Pro',
    price: 1499,
    originalPrice: 1799,
    category: 'Kids',
    subCategory: 'Sports Shoes',
    material: 'Synthetic + Phylon sole',
    features: ['Lightweight', 'Non-marking sole'],
    returnPolicy: '30-day return',
    sku: 'MP-K-SPORT-01',
    images: ['https://picsum.photos/seed/shoe6/600/600'],
    description: 'High-performance sports shoes for active kids. Provides excellent support and durability for all kinds of sports activities.',
    sizes: ['1', '2', '3', '4'],
    reviews: []
  },
  {
    id: '7',
    name: 'Manpasand Classic Chelsea Boots',
    price: 3499,
    originalPrice: 3999,
    category: 'Men',
    subCategory: 'Boots',
    material: 'Suede leather + TPR sole',
    features: ['Timeless style', 'Easy slip-on'],
    returnPolicy: '30-day return',
    sku: 'MP-M-BOOT-01',
    images: ['https://picsum.photos/seed/shoe7/600/600'],
    description: 'Premium suede Chelsea boots that add a touch of class to any outfit. Features elastic side gussets for easy wear.',
    sizes: ['7', '8', '9', '10'],
    reviews: []
  },
  {
    id: '8',
    name: 'Manpasand Daily Comfort Belly',
    price: 799,
    originalPrice: 999,
    category: 'Women',
    subCategory: 'Belly',
    material: 'Synthetic leather',
    features: ['Daily wear', 'Flexible'],
    returnPolicy: '30-day return',
    sku: 'MP-W-BELLY-01',
    images: ['https://picsum.photos/seed/shoe8/600/600'],
    description: 'Simple and elegant bellies for everyday comfort. Perfect for office or casual outings.',
    sizes: ['5', '6', '7', '8'],
    reviews: []
  }
];
