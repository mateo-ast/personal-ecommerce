import { Request, Response } from 'express';
import type { CartView } from '../types/views.js';
import { cartItems } from '../data/cart.js';

export const index = (_req: Request, res: Response) => {
  const subtotal = cartItems.reduce(
    (sum, item) => {
      const price = item.product.isOffer && item.product.originalPrice
        ? item.product.originalPrice
        : item.product.price;
      return sum + price * item.quantity;
    },
    0,
  );
  const shipping = subtotal > 500000 ? 0 : 15000;
  const total = subtotal + shipping;

  const data: CartView = {
    title: 'Mi Carrito',
    items: cartItems,
    subtotal,
    shipping,
    total,
  };
  res.render('cart/index', data);
};
