import express from 'express';

import { addAuthor, getAllAuthors, getAuthorById, updateAuthor, deleteAuthor } from "../controllers/authorController";

const router = express.Router();


router.post('/', addAuthor);
router.get('/', getAllAuthors);
router.get('/:Id', getAuthorById);
router.put('/:id', updateAuthor);
router.delete('/:id', deleteAuthor);

export default router;