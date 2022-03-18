import express from 'express';

import { getPosts , getPost , createPost  } from '../controllers/posts.js';

const router = express.Router();

router.get('/' , getPosts);
router.post('/' , createPost);
router.get('/:id' , getPost);
// router.patch('/:id', updatePost);

export default router;