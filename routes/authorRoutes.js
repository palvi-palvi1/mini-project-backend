import express from 'express';

import { addUser, getAllUsers, getUserById, updateUser, deleteUser } from "../controllers/authorController.js";const router = express.Router();


router.post('/', addUser);
router.get('/', getAllUsers);
router.get('/:id', getUserById);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

export default router;