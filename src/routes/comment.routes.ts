import express from 'express';
<<<<<<< HEAD
import * as controller from '../controllers/comment.controller';
=======
import * as controller from '../controllers/comment.controller.js';
>>>>>>> feature/email-component

const router = express.Router();

router.post('/', controller.createComment);
router.get('/', controller.getComments);
<<<<<<< HEAD
=======
router.put('/:id', controller.updateComment);
router.delete('/:id', controller.deleteComment);
>>>>>>> feature/email-component

export default router;