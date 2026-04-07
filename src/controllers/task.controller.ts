import { Request, Response } from 'express';
import * as service from '../services/task.service';
import { taskSchema } from '../middlewares/validation';

export const createTask = (req: Request, res: Response) => {
  const { error } = taskSchema.validate(req.body);

  if (error) {
    return res.status(400).json({ message: error.message });
  }

  const task = service.createTask(req.body);
  res.json(task);
};
export const getTasks = (req: Request, res: Response) => {
  res.json(service.getTasks());
};

export const getTaskById = (req: Request, res: Response) => {
  const task = service.getTaskById(req.params.id as string);
  res.json(task);
};

export const updateTask = (req: Request, res: Response) => {
  const updated = service.updateTask(req.params.id as string, req.body);
  res.json(updated);
};

export const deleteTask = (req: Request, res: Response) => {
  service.deleteTask(req.params.id as string);
  res.json({ message: "Deleted" });
};

   