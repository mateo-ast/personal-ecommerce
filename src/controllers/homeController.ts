import { Request, Response } from 'express';
import type { HomeView } from '../types/views.js';
import { getFeaturedProducts, getOfferProducts } from '../data/products.js';

export const home = (_req: Request, res: Response) => {
  const data: HomeView = {
    title: 'TechStore - Tu tienda de tecnología',
    featuredProducts: getFeaturedProducts(),
    offerProducts: getOfferProducts(),
  };
  res.render('home', data);
};
