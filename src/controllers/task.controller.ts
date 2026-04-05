import { Request, Response } from 'express';
import * as service from '../services/task.service';

export const createTask = (req: Request, res: Response) => {
  const task = service.createTask(req.body);
  res.json(task);
};

export const getTasks = (req: Request, res: Response) => {
  res.json(service.getTasks());
};