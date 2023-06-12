import { Router } from 'express';
import { addTask, getTasks, deleteTask, changeTaskStatus } from '../controller/TaskController.js';
import { ValidatePostTasks } from '../validators/tasks.js';

const router = Router();

router.post('/', ValidatePostTasks, addTask);
router.get('/', getTasks);
router.delete('/:taskId', deleteTask);
router.patch('/:taskId', changeTaskStatus);

export default router;
