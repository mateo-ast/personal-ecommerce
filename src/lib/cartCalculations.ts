import type { CartItem } from '../types/views.js';

export const calculateSubtotal = (items: CartItem[]): number =>
  items.reduce((sum, item) => {
    const price =
      item.product.isOffer && item.product.originalPrice
        ? item.product.originalPrice
        : item.product.price;
    return sum + price * item.quantity;
  }, 0);

export const calculateShipping = (subtotal: number): number =>
  subtotal > 500000 ? 0 : 15000;

export const calculateTotals = (items: CartItem[]) => {
  const subtotal = calculateSubtotal(items);
  const shipping = calculateShipping(subtotal);
  const total = subtotal + shipping;
  return { subtotal, shipping, total };
};
