import { Router } from 'express';
import { home } from '../controllers/homeController.js';
import authRoutes from './auth.js';

const router = Router();

router.get('/', home);
router.use('/auth', authRoutes);

export default router;
