import express from 'express';
import { signin, signup, addUpdateMeme, getMeme } from '../controllers/userController.js';
const router = express.Router();

router.post('/signin', signin);
router.post('/signup', signup);
router.patch('/meme', addUpdateMeme);
router.get('/:id', getMeme);

export default router;