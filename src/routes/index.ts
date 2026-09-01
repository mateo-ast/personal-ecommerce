import { Router } from 'express';
import { home } from '../controllers/homeController.js';
import authRoutes from './auth.js';
import productRoutes from './product.js';
import cartRoutes from './cart.js';

const router = Router();

router.get('/', home);
router.use('/auth', authRoutes);
router.use('/productos', productRoutes);
router.use('/carrito', cartRoutes);

export default router;
