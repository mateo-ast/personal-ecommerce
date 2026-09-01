import { Router } from 'express';
import { home } from '../controllers/homeController.js';
import authRoutes from './auth.js';
import productRoutes from './product.js';

const router = Router();

router.get('/', home);
router.use('/auth', authRoutes);
router.use('/productos', productRoutes);

export default router;
