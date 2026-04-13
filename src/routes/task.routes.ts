import express from 'express';
import * as controller from '../controllers/task.controller';

const router = express.Router();

router.post('/', controller.createTask);
router.get('/', controller.getTasks);
router.put('/:id', controller.updateTask);
router.delete('/:id', controller.deleteTask);

export default router;