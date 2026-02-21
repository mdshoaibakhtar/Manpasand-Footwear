export type Category = 'Men' | 'Women' | 'Kids';

export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice: number;
  category: Category;
  subCategory: string;
  material: string;
  features: string[];
  returnPolicy: string;
  sku: string;
  images: string[];
  description: string;
  sizes: string[];
  reviews: Review[];
}

export interface Review {
  id: string;
  user: string;
  rating: number;
  comment: string;
  date: string;
}

export interface CartItem extends Product {
  selectedSize: string;
  quantity: number;
}
