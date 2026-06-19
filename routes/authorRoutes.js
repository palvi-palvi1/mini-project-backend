import express from 'express';

import { addAuthor, getAllAuthors, getAuthorById, updateAuthor, deleteAuthor } from "../controllers/authorController.js";
const router = express.Router();


router.post('/', addAuthor);
router.get('/', getAllAuthors);
router.get('/:id', getAuthorById);
router.put('/:id', updateAuthor);
router.delete('/:id', deleteAuthor);

export default router;