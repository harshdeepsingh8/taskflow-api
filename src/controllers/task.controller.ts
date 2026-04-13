import { Request, Response } from 'express';
import * as service from '../services/task.service';
import { sendEmail } from '../services/email.service';

export const createTask = async (req: Request, res: Response) => {
  const task = service.createTask(req.body);
  await sendEmail();
  res.json(task);
};

export const getTaskById = (req: Request, res: Response) => {
  const task = service.getTaskById(req.params.id as string);
  if (!task) return res.status(404).json({ message: "Not found" });
  res.json(task);
};
export const getTasks = (req: Request, res: Response) => {
  const tasks = service.getTasks();
  res.json(tasks);
}

export const updateTask = (req: Request, res: Response) => {
  const updated = service.updateTask(req.params.id as string, req.body);
  if (!updated) return res.status(404).json({ message: "Not found" });
  res.json(updated);
};

export const deleteTask = (req: Request, res: Response) => {
  const task = service.getTaskById(req.params.id as string);
  if (!task) return res.status(404).json({ message: "Not found" });

  service.deleteTask(req.params.id as string);
  res.json({ message: "Deleted" });
};