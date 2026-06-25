import express from 'express';

import {createTask, getAllTasks, updateTask, deleteTask, getTaskByUser} from '../controllers/taskController.js';
const router = express.Router();

router.post('/', createTask);
router.get('/', getAllTasks);
router.put('/:id', updateTask);
router.delete('/:id', deleteTask);
router.get('/user/:userId', getTaskByUser)

export default router;