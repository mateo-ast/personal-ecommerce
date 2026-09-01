import { Router } from 'express';
import { detail } from '../controllers/productController.js';

const router = Router();

router.get('/:id', detail);

export default router;
