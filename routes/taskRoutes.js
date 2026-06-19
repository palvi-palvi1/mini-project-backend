import express from 'express';

import { createTask, getAllTasks, updateTasks, deleteTask} from '../controllers/taskController.js';

const router = express.Router();

router.post('/', createTask);
router.get('/', getAllTasks);
router.put('/:id', updateTasks);
router.delete('/:id', deleteTask);

export default router;