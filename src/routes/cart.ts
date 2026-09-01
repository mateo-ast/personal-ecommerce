import { Router } from 'express';
import { index } from '../controllers/cartController.js';

const router = Router();

router.get('/', index);

export default router;
