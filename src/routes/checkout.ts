import { Router } from 'express';
import { index } from '../controllers/checkoutController.js';

const router = Router();

router.get('/', index);

export default router;
