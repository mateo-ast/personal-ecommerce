import { Request, Response } from 'express';
import type { CheckoutView } from '../types/views.js';
import { cartItems } from '../data/cart.js';
import { calculateTotals } from '../lib/cartCalculations.js';

export const index = (_req: Request, res: Response) => {
  const { subtotal, shipping, total } = calculateTotals(cartItems);

  const data: CheckoutView = {
    title: 'Checkout',
    items: cartItems,
    subtotal,
    shipping,
    total,
  };
  res.render('checkout/index', data);
};
