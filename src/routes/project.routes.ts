import express from 'express';
<<<<<<< HEAD
import * as controller from '../controllers/project.controller';

const router = express.Router();

router.post('/', controller.createProject);
router.get('/', controller.getProjects);
router.get('/:id', controller.getProjectById);
router.put('/:id', controller.updateProject);
router.delete('/:id', controller.deleteProject);
=======
import * as controller from '../controllers/comment.controller.js';

const router = express.Router();

router.post('/', controller.createComment);
router.get('/', controller.getComments);
router.put('/:id', controller.updateComment);
router.delete('/:id', controller.deleteComment);
>>>>>>> feature/email-component

export default router;