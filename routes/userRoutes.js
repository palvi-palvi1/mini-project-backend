import express from 'express';

import { addUser, getAllUsers, getUserById, updateUser, deleteUser } from "../controllers/userController.js";
const router = express.Router();


router.post('/', addUser);
router.get('/', getAllUsers);
router.post('/user', getUserById);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

export default router;