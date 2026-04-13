import express from 'express';
import * as controller from '../controllers/comment.controller';

const router = express.Router();

router.post('/', controller.createComment);
router.get('/', controller.getComments);
router.put('/:id', controller.updateComment);
router.delete('/:id', controller.deleteComment);

export default router;