import { Router } from 'express';
import { getCategories } from '../controller/CategoryController.js';

const router = Router();

router.get('/', getCategories);

export default router;
