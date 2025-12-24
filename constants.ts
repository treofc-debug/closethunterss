
import { Product, Category } from './types';

export const CATEGORIES: Category[] = [
  { id: 'all', name: 'All Collection' },
  { id: 'essentials', name: 'Essentials' },
  { id: 'outerwear', name: 'Outerwear' },
  { id: 'loungewear', name: 'Loungewear' },
  { id: 'accessories', name: 'Accessories' }
];

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: 'Minimalist Cotton Tee',
    category: 'essentials',
    price: 45,
    image: 'https://picsum.photos/id/1059/600/800',
    isNew: true
  },
  {
    id: 2,
    name: 'Structured Linen Blazer',
    category: 'outerwear',
    price: 180,
    image: 'https://picsum.photos/id/64/600/800',
    onSale: true,
    discountPrice: 145
  },
  {
    id: 3,
    name: 'Silk Blend Slip Dress',
    category: 'essentials',
    price: 120,
    image: 'https://picsum.photos/id/158/600/800'
  },
  {
    id: 4,
    name: 'Oversized Knit Sweater',
    category: 'loungewear',
    price: 85,
    image: 'https://picsum.photos/id/225/600/800'
  },
  {
    id: 5,
    name: 'Cashmere Beanie',
    category: 'accessories',
    price: 55,
    image: 'https://picsum.photos/id/324/600/800',
    isNew: true
  },
  {
    id: 6,
    name: 'Tailored Wool Trousers',
    category: 'essentials',
    price: 110,
    image: 'https://picsum.photos/id/445/600/800'
  },
  {
    id: 7,
    name: 'Quilted Puffer Jacket',
    category: 'outerwear',
    price: 240,
    image: 'https://picsum.photos/id/454/600/800'
  },
  {
    id: 8,
    name: 'Organic Cotton Socks (3pk)',
    category: 'accessories',
    price: 25,
    image: 'https://picsum.photos/id/531/600/800'
  }
];
