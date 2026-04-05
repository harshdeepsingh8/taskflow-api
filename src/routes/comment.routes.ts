import express from 'express';
import * as controller from '../controllers/comment.controller';

const router = express.Router();

router.post('/', controller.createComment);
router.get('/', controller.getComments);

export default router;