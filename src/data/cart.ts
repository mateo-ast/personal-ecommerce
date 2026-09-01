import type { CartItem } from '../types/views.js';
import { products } from './products.js';

export const cartItems: CartItem[] = [
  { product: products[0], quantity: 1 },
  { product: products[2], quantity: 2 },
  { product: products[4], quantity: 1 },
];
