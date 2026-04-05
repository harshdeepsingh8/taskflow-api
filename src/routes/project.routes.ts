import express from 'express';
import * as controller from '../controllers/project.controller';

const router = express.Router();

router.post('/', controller.createProject);
router.get('/', controller.getProjects);

export default router;