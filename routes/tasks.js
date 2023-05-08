import { Router } from 'express';
import { postTask, getTasks, deleteTask } from '../controller/tasksController.js';
import { ValidatePostProducts } from '../validators/tasks.js';

const router = Router();

router.post('/', ValidatePostProducts, postTask);
router.get('/', getTasks);
router.delete('/:taskId', deleteTask);

export default router;
