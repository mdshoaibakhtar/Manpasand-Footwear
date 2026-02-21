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
      'https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Rm9ybWFsJTIwc2hvZXN8ZW58MHx8MHx8fDA%3D',
      'https://images.unsplash.com/photo-1668069226492-508742b03147?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Rm9ybWFsJTIwc2hvZXN8ZW58MHx8MHx8fDA%3D',
      'https://images.unsplash.com/photo-1533867617858-e7b97e060509?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Rm9ybWFsJTIwc2hvZXN8ZW58MHx8MHx8fDA%3D'
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
      'https://images.unsplash.com/photo-1620657693781-f1afb0aab9a0?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c25lYWtlciUyMG1lbnxlbnwwfHwwfHx8MA%3D%3D',
      'https://images.unsplash.com/photo-1618153478389-b2ed8de18ed3?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c25lYWtlciUyMG1lbiUyMHNob2VzfGVufDB8fDB8fHww',
      'https://images.unsplash.com/photo-1612015670817-0127d21628d4?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c25lYWtlciUyMG1lbiUyMHNob2VzfGVufDB8fDB8fHww',
      'https://images.unsplash.com/photo-1571601035754-5c927f2d7edc?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c25lYWtlcnxlbnwwfHwwfHx8MA%3D%3D'
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
      'https://images.unsplash.com/photo-1524553879936-2ff074ae5816?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aGlnaCUyMGhlZWx8ZW58MHx8MHx8fDA%3D',
      'https://images.unsplash.com/photo-1566958799193-c2aa57a835d4?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGhpZ2glMjBoZWVsfGVufDB8fDB8fHww',
      'https://images.unsplash.com/photo-1583009820765-26fd63af8819?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGhpZ2glMjBoZWVsfGVufDB8fDB8fHww'
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
      'https://plus.unsplash.com/premium_photo-1669644856868-6613f6683346?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8a2lkcyUyMHNob2VzJTIwY29yY3N8ZW58MHx8MHx8fDA%3D',
      'https://images.unsplash.com/photo-1608614602027-6644c08e6921?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8a2lkcyUyMHNob2VzJTIwY29yY3N8ZW58MHx8MHx8fDA%3D',
      'https://images.unsplash.com/photo-1723085823781-c062b3491ec3?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8a2lkcyUyMHNob2VzJTIwY29yY3N8ZW58MHx8MHx8fDA%3D'
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
    images: ['https://images.unsplash.com/photo-1633513627342-b249d2b751af?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29tZW4lMjBzYW5kYWxzfGVufDB8fDB8fHww',
      'https://images.unsplash.com/photo-1554062097-69c634085c6d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8d29tZW4lMjBzYW5kYWxzfGVufDB8fDB8fHww',
      'https://plus.unsplash.com/premium_photo-1747054588419-0f228ffe510d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHdvbWVuJTIwc2FuZGFsc3xlbnwwfHwwfHx8MA%3D%3D'
    ],
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
    images: ['https://images.unsplash.com/photo-1568692695113-046303152dd9?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8a2lkcyUyMHNwb3J0JTIwc2hvZXN8ZW58MHx8MHx8fDA%3D', 'https://images.unsplash.com/photo-1733744577519-8d60e48f5686?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8a2lkcyUyMHNwb3J0JTIwc2hvZXN8ZW58MHx8MHx8fDA%3D','https://images.unsplash.com/photo-1571395770221-867c6e2251bc?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGtpZHMlMjBzcG9ydCUyMHNob2VzfGVufDB8fDB8fHww','https://images.unsplash.com/photo-1636130748629-655be0c60041?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGtpZHMlMjBzcG9ydCUyMHNob2VzfGVufDB8fDB8fHww'],
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
    images: ['https://images.unsplash.com/photo-1608256246200-53e635b5b65f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Ym9vdHN8ZW58MHx8MHx8fDA%3D',
      'https://images.unsplash.com/photo-1605812860427-4024433a70fd?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Ym9vdHN8ZW58MHx8MHx8fDA%3D',
      'https://images.unsplash.com/photo-1520639888713-7851133b1ed0?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Ym9vdHN8ZW58MHx8MHx8fDA%3D',
      'https://images.unsplash.com/photo-1599012307605-23a0ebe4d321?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGJvb3RzfGVufDB8fDB8fHww'
    ],
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
    images: ['https://images.unsplash.com/photo-1566499003412-4736d6099504?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29tZW4lMjBiZWxseSUyMHNob2VzfGVufDB8fDB8fHww',
      'https://plus.unsplash.com/premium_photo-1764257620260-4da05aadbca1?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8d29tZW4lMjBiZWxseSUyMHNob2VzfGVufDB8fDB8fHww',
      'https://images.unsplash.com/photo-1627141792925-eddee39cf275?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHdvbWVuJTIwYmVsbHklMjBzaG9lc3xlbnwwfHwwfHx8MA%3D%3D'
    ],
    description: 'Simple and elegant bellies for everyday comfort. Perfect for office or casual outings.',
    sizes: ['5', '6', '7', '8'],
    reviews: []
  },
  {
  id: '9',
  name: 'Manpasand Urban Runner Pro',
  price: 2699,
  originalPrice: 3299,
  category: 'Men',
  subCategory: 'Running Shoes',
  material: 'Mesh + EVA sole',
  features: ['Ultra lightweight', 'Cushioned sole', 'Breathable'],
  returnPolicy: '30-day return',
  sku: 'MP-M-RUN-01',
  images: [
    'https://plus.unsplash.com/premium_photo-1755034654684-284d5cdb193b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWVucyUyMHJ1bm5pbmclMjBzaG9lc3xlbnwwfHwwfHx8MA%3D%3D',
    'https://plus.unsplash.com/premium_photo-1663134039867-4c39cb97fe65?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bWVucyUyMHJ1bm5pbmclMjBzaG9lc3xlbnwwfHwwfHx8MA%3D%3D',
    'https://images.unsplash.com/photo-1635069088233-bf69185ae166?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG1lbnMlMjBydW5uaW5nJTIwc2hvZXN8ZW58MHx8MHx8fDA%3D',
    'https://images.unsplash.com/photo-1679183139396-04c3723d2091?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG1lbnMlMjBydW5uaW5nJTIwc2hvZXN8ZW58MHx8MHx8fDA%3D'
  ],
  description: 'Engineered for performance runners. Offers superior cushioning and breathability for long-distance comfort.',
  sizes: ['7', '8', '9', '10', '11'],
  reviews: []
},
{
  id: '10',
  name: 'Manpasand Premium Leather Loafers',
  price: 2199,
  originalPrice: 2599,
  category: 'Men',
  subCategory: 'Loafers',
  material: 'Genuine leather + PU sole',
  features: ['Slip-on', 'Premium stitching', 'Lightweight'],
  returnPolicy: '30-day return',
  sku: 'MP-M-LOAF-01',
  images: ['https://images.unsplash.com/photo-1662541089338-c7d53b88be70?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bG9hZmVycyUyMHNob2VzfGVufDB8fDB8fHww'],
  description: 'Smart casual loafers crafted from premium leather. Ideal for office and semi-formal occasions.',
  sizes: ['8', '9', '10'],
  reviews: []
},
{
  id: '11',
  name: 'Manpasand Festive Royal Jutis',
  price: 1499,
  originalPrice: 1899,
  category: 'Men',
  subCategory: 'Festive Jutis',
  material: 'Silk embroidered upper + Leather sole',
  features: ['Traditional design', 'Handcrafted', 'Comfort fit'],
  returnPolicy: '30-day return',
  sku: 'MP-M-JUTI-01',
  images: ['https://images.unsplash.com/photo-1768807478287-9e7953cfdca3?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWVucyUyMHRyYWRpdGlvbmFsJTIwc2hvZXN8ZW58MHx8MHx8fDA%3D',
    'https://images.unsplash.com/photo-1751965681274-180cd1953815?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bWVucyUyMHRyYWRpdGlvbmFsJTIwc2hvZXN8ZW58MHx8MHx8fDA%3D'
  ],
  description: 'Elegant festive jutis designed for weddings and celebrations with intricate embroidery.',
  sizes: ['7', '8', '9', '10'],
  reviews: []
},
{
  id: '12',
  name: 'Manpasand Women Comfort Slippers',
  price: 699,
  originalPrice: 899,
  category: 'Women',
  subCategory: 'Slippers',
  material: 'EVA + Soft foam',
  features: ['Anti-slip', 'Soft cushioning'],
  returnPolicy: '30-day return',
  sku: 'MP-W-SLIP-01',
  images: ['https://images.unsplash.com/photo-1622920799137-86c891159e44?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2xpcHBlcnxlbnwwfHwwfHx8MA%3D%3D',
    'https://images.unsplash.com/photo-1601233216647-4fb22eb08425?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c2xpcHBlcnxlbnwwfHwwfHx8MA%3D%3D',
    'https://plus.unsplash.com/premium_photo-1661499077211-e8e6dd1777bd?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHNsaXBwZXJ8ZW58MHx8MHx8fDA%3D',
    'https://plus.unsplash.com/premium_photo-1703622846437-d99b08a906b0?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2xpcHBlcnxlbnwwfHwwfHx8MA%3D%3D'
  ],
  description: 'Everyday comfort slippers with anti-slip sole and soft foam cushioning.',
  sizes: ['5', '6', '7', '8'],
  reviews: []
},
{
  id: '13',
  name: 'Manpasand Elegant Wedding Heels',
  price: 2999,
  originalPrice: 3599,
  category: 'Women',
  subCategory: 'Wedding Shoes',
  material: 'Satin + Resin heel',
  features: ['Elegant finish', 'Stable heel', 'Soft insole'],
  returnPolicy: '30-day return',
  sku: 'MP-W-WED-01',
  images: ['https://images.unsplash.com/photo-1654401689977-9cb4414559b1?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2VkZGluZyUyMHNhbmRhbHN8ZW58MHx8MHx8fDA%3D',
    'https://images.unsplash.com/photo-1759610187365-90ef5d215105?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHdlZGRpbmclMjBzYW5kYWxzfGVufDB8fDB8fHww'
  ],
  description: 'Perfect bridal wedding heels with satin finish and comfortable padded insole.',
  sizes: ['6', '7', '8'],
  reviews: []
},
{
  id: '14',
  name: 'Manpasand Kids Party Star Shoes',
  price: 1199,
  originalPrice: 1499,
  category: 'Kids',
  subCategory: 'Party Shoes',
  material: 'Synthetic leather + Rubber sole',
  features: ['Shiny finish', 'Comfort padding'],
  returnPolicy: '30-day return',
  sku: 'MP-K-PARTY-01',
  images: ['https://images.unsplash.com/photo-1657194002479-60f67f68d382?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8a2lkcyUyMHBhcnR5JTIwc2hvZXN8ZW58MHx8MHx8fDA%3D',
    'https://images.unsplash.com/photo-1661098856696-a5f4e6020551?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8a2lkcyUyMHBhcnR5JTIwc2hvZXN8ZW58MHx8MHx8fDA%3D',
    'https://plus.unsplash.com/premium_photo-1710503744814-1fcd85a3032b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8a2lkcyUyMHBhcnR5JTIwc2hvZXN8ZW58MHx8MHx8fDA%3D'
  ],
  description: 'Stylish party shoes for kids with a shiny finish and comfortable fit.',
  sizes: ['1', '2', '3'],
  reviews: []
},
{
  id: '15',
  name: 'Manpasand Casual Street Sneakers',
  price: 1899,
  originalPrice: 2299,
  category: 'Men',
  subCategory: 'Casual Shoes',
  material: 'Canvas + Rubber sole',
  features: ['Street style', 'Durable grip'],
  returnPolicy: '30-day return',
  sku: 'MP-M-CAS-01',
  images: ['https://picsum.photos/seed/shoe15/600/600'],
  description: 'Trendy street-style casual shoes designed for everyday wear.',
  sizes: ['8', '9', '10', '11'],
  reviews: []
},
{
  id: '16',
  name: 'Manpasand Women Trekking Boots',
  price: 3299,
  originalPrice: 3899,
  category: 'Women',
  subCategory: 'Boots',
  material: 'Synthetic + TPR sole',
  features: ['Water resistant', 'Strong grip', 'Ankle support'],
  returnPolicy: '30-day return',
  sku: 'MP-W-BOOT-01',
  images: ['https://picsum.photos/seed/shoe16/600/600'],
  description: 'Durable trekking boots designed for adventure lovers with strong grip and ankle support.',
  sizes: ['6', '7', '8'],
  reviews: []
},
{
  id: '17',
  name: 'Manpasand Kids Casual Sneakers',
  price: 1099,
  originalPrice: 1399,
  category: 'Kids',
  subCategory: 'Sneakers',
  material: 'Mesh + Phylon sole',
  features: ['Lightweight', 'Breathable'],
  returnPolicy: '30-day return',
  sku: 'MP-K-SNK-01',
  images: ['https://picsum.photos/seed/shoe17/600/600'],
  description: 'Comfortable casual sneakers for kids with breathable mesh upper.',
  sizes: ['1', '2', '3', '4'],
  reviews: []
},
{
  id: '18',
  name: 'Manpasand Comfort Flip Flops',
  price: 499,
  originalPrice: 699,
  category: 'Men',
  subCategory: 'Flip Flops',
  material: 'Rubber',
  features: ['Waterproof', 'Flexible sole'],
  returnPolicy: '30-day return',
  sku: 'MP-M-FLIP-01',
  images: ['https://picsum.photos/seed/shoe18/600/600'],
  description: 'Comfortable and durable flip flops perfect for daily use and beach outings.',
  sizes: ['7', '8', '9', '10'],
  reviews: []
},{
  id: '19',
  name: 'Manpasand Premium Sandal Comfort',
  price: 1599,
  originalPrice: 1899,
  category: 'Men',
  subCategory: 'Sandals',
  material: 'Synthetic leather + TPR sole',
  features: ['Adjustable strap', 'Durable sole'],
  returnPolicy: '30-day return',
  sku: 'MP-M-SAND-01',
  images: ['https://picsum.photos/seed/shoe19/600/600'],
  description: 'Comfortable sandals designed for daily wear with strong grip and adjustable straps.',
  sizes: ['7', '8', '9', '10'],
  reviews: [
    { id: 'r191', user: 'Rahul Verma', rating: 4, comment: 'Good for daily use.', date: '2024-04-01' }
  ]
},
{
  id: '20',
  name: 'Manpasand Urban Flip Pro',
  price: 599,
  originalPrice: 799,
  category: 'Men',
  subCategory: 'Flip Flops',
  material: 'Rubber',
  features: ['Lightweight', 'Waterproof'],
  returnPolicy: '30-day return',
  sku: 'MP-M-FLIP-02',
  images: ['https://picsum.photos/seed/shoe20/600/600'],
  description: 'Lightweight flip flops perfect for casual and beach wear.',
  sizes: ['7', '8', '9', '10'],
  reviews: [
    { id: 'r201', user: 'Amit Sharma', rating: 5, comment: 'Very comfortable.', date: '2024-04-02' }
  ]
},
{
  id: '21',
  name: 'Manpasand Royal Wedding Mojari',
  price: 1699,
  originalPrice: 2099,
  category: 'Women',
  subCategory: 'Wedding Shoes',
  material: 'Silk embroidered upper + Leather sole',
  features: ['Traditional embroidery', 'Soft insole'],
  returnPolicy: '30-day return',
  sku: 'MP-W-WED-02',
  images: ['https://picsum.photos/seed/shoe21/600/600'],
  description: 'Elegant wedding mojaris crafted with premium embroidery.',
  sizes: ['5', '6', '7', '8'],
  reviews: [
    { id: 'r211', user: 'Priya Singh', rating: 5, comment: 'Perfect for my wedding!', date: '2024-04-03' }
  ]
},
{
  id: '22',
  name: 'Manpasand Women Sports Active',
  price: 2299,
  originalPrice: 2799,
  category: 'Women',
  subCategory: 'Sports Shoes',
  material: 'Mesh + EVA sole',
  features: ['Breathable', 'Shock absorbing'],
  returnPolicy: '30-day return',
  sku: 'MP-W-SPRT-01',
  images: ['https://picsum.photos/seed/shoe22/600/600'],
  description: 'High-performance sports shoes designed for active women.',
  sizes: ['6', '7', '8'],
  reviews: [
    { id: 'r221', user: 'Sneha Das', rating: 4, comment: 'Very lightweight.', date: '2024-04-05' }
  ]
},
{
  id: '23',
  name: 'Manpasand Kids Formal Shine',
  price: 1199,
  originalPrice: 1499,
  category: 'Kids',
  subCategory: 'Formal Shoes',
  material: 'Synthetic leather',
  features: ['Comfort padding', 'Durable sole'],
  returnPolicy: '30-day return',
  sku: 'MP-K-FORM-01',
  images: ['https://picsum.photos/seed/shoe23/600/600'],
  description: 'Smart formal shoes for kids suitable for school and functions.',
  sizes: ['1', '2', '3', '4'],
  reviews: [
    { id: 'r231', user: 'Simran Kaur', rating: 5, comment: 'Great quality for kids.', date: '2024-04-06' }
  ]
},
{
  id: '24',
  name: 'Manpasand Adventure Trek Boots',
  price: 3799,
  originalPrice: 4499,
  category: 'Men',
  subCategory: 'Boots',
  material: 'Leather + Rubber sole',
  features: ['Water resistant', 'Heavy grip'],
  returnPolicy: '30-day return',
  sku: 'MP-M-BOOT-03',
  images: ['https://picsum.photos/seed/shoe24/600/600'],
  description: 'Rugged trekking boots designed for outdoor adventures.',
  sizes: ['8', '9', '10', '11'],
  reviews: [
    { id: 'r241', user: 'Arjun Patel', rating: 5, comment: 'Perfect for trekking.', date: '2024-04-08' }
  ]
},
{
  id: '25',
  name: 'Manpasand Daily Wear Slippers',
  price: 499,
  originalPrice: 699,
  category: 'Women',
  subCategory: 'Slippers',
  material: 'EVA',
  features: ['Soft sole', 'Anti-slip'],
  returnPolicy: '30-day return',
  sku: 'MP-W-SLIP-02',
  images: ['https://picsum.photos/seed/shoe25/600/600'],
  description: 'Soft and lightweight slippers perfect for everyday home use.',
  sizes: ['5', '6', '7', '8'],
  reviews: [
    { id: 'r251', user: 'Neha Kapoor', rating: 4, comment: 'Very soft and comfy.', date: '2024-04-09' }
  ]
},
{
  id: '26',
  name: 'Manpasand Stylish Crocs Pro',
  price: 1399,
  originalPrice: 1699,
  category: 'Men',
  subCategory: 'Crocs',
  material: 'EVA',
  features: ['Waterproof', 'Easy clean'],
  returnPolicy: '30-day return',
  sku: 'MP-M-CROC-01',
  images: ['https://picsum.photos/seed/shoe26/600/600'],
  description: 'Comfortable crocs suitable for casual outdoor activities.',
  sizes: ['7', '8', '9', '10'],
  reviews: [
    { id: 'r261', user: 'Rohit Gupta', rating: 4, comment: 'Nice fitting.', date: '2024-04-10' }
  ]
},
{
  id: '27',
  name: 'Manpasand Women Party Heels',
  price: 2499,
  originalPrice: 2999,
  category: 'Women',
  subCategory: 'Party Sandals',
  material: 'Velvet + Resin heel',
  features: ['Elegant design', 'Comfort sole'],
  returnPolicy: '30-day return',
  sku: 'MP-W-PARTY-03',
  images: ['https://picsum.photos/seed/shoe27/600/600'],
  description: 'Elegant party heels designed for special occasions.',
  sizes: ['6', '7', '8'],
  reviews: [
    { id: 'r271', user: 'Priya Singh', rating: 5, comment: 'Loved the design!', date: '2024-04-12' }
  ]
},
{
  id: '28',
  name: 'Manpasand Kids Casual Loafers',
  price: 1099,
  originalPrice: 1399,
  category: 'Kids',
  subCategory: 'Loafers',
  material: 'Synthetic',
  features: ['Slip-on', 'Comfort fit'],
  returnPolicy: '30-day return',
  sku: 'MP-K-LOAF-01',
  images: ['https://picsum.photos/seed/shoe28/600/600'],
  description: 'Comfortable loafers for kids suitable for school wear.',
  sizes: ['1', '2', '3'],
  reviews: [
    { id: 'r281', user: 'Amit Sharma', rating: 4, comment: 'Nice design for kids.', date: '2024-04-15' }
  ]
},
{
  id: '29',
  name: 'Manpasand Power Run Max',
  price: 2799,
  originalPrice: 3299,
  category: 'Men',
  subCategory: 'Running Shoes',
  material: 'Mesh + Rubber sole',
  features: ['High cushioning', 'Lightweight'],
  returnPolicy: '30-day return',
  sku: 'MP-M-RUN-02',
  images: ['https://picsum.photos/seed/shoe29/600/600'],
  description: 'Advanced running shoes for superior performance.',
  sizes: ['8', '9', '10'],
  reviews: [
    { id: 'r291', user: 'Rahul Verma', rating: 5, comment: 'Amazing grip!', date: '2024-04-16' }
  ]
},
{
  id: '30',
  name: 'Manpasand Women Ethnic Mojaris Deluxe',
  price: 1599,
  originalPrice: 1999,
  category: 'Women',
  subCategory: 'Mojaris',
  material: 'Silk + Leather sole',
  features: ['Handcrafted', 'Soft padding'],
  returnPolicy: '30-day return',
  sku: 'MP-W-MOJ-02',
  images: ['https://picsum.photos/seed/shoe30/600/600'],
  description: 'Premium handcrafted mojaris with elegant embroidery.',
  sizes: ['5', '6', '7', '8'],
  reviews: [
    { id: 'r301', user: 'Sneha Das', rating: 5, comment: 'Very elegant look.', date: '2024-04-18' }
  ]
}
];
