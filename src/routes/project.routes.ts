import express from 'express';
import * as controller from '../controllers/project.controller';

const router = express.Router();

router.post('/', controller.createProject);
router.get('/', controller.getProjects);
router.get('/:id', controller.getProjectById);
router.put('/:id', controller.updateProject);
router.delete('/:id', controller.deleteProject);

export default router;