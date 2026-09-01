import { Request, Response } from 'express';
import type { ProductDetailView } from '../types/views.js';
import { getProductById } from '../data/products.js';

export const detail = (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const product = getProductById(id);

  if (!product) {
    res.status(404).render('home', {
      title: 'Producto no encontrado',
      featuredProducts: [],
      offerProducts: [],
    });
    return;
  }

  const data: ProductDetailView = { title: product.name, product };
  res.render('product/detail', data);
};
