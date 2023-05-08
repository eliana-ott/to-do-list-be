import { Router } from 'express';
import categoryRouter from './category.js';
import tasksRouter from './tasks.js';

const router = Router();

router.use('/categories', categoryRouter);
router.use('/tasks', tasksRouter);

export default router;
