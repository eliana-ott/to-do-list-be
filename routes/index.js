import { Router } from 'express';
import CategoriesRouter from './Categories.js';
import TasksRouter from './Tasks.js';

const router = Router();

router.use('/categories', CategoriesRouter);
router.use('/tasks', TasksRouter);

export default router;
