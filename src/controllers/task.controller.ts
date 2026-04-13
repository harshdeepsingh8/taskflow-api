import { Request, Response } from 'express';
import * as service from '../services/task.service';
<<<<<<< HEAD
import { taskSchema } from '../middlewares/validation';

export const createTask = (req: Request, res: Response) => {
  const { error } = taskSchema.validate(req.body);

  if (error) {
    return res.status(400).json({ message: error.message });
  }

=======
import { sendEmail } from '../services/email.service';

export const createTask = async (req: Request, res: Response) => {
>>>>>>> feature/email-component
  const task = service.createTask(req.body);
  await sendEmail();
  res.json(task);
};
<<<<<<< HEAD
export const getTasks = (req: Request, res: Response) => {
  res.json(service.getTasks());
};

export const getTaskById = (req: Request, res: Response) => {
  const task = service.getTaskById(req.params.id as string);
  res.json(task);
};

export const updateTask = (req: Request, res: Response) => {
  const updated = service.updateTask(req.params.id as string, req.body);
=======

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
>>>>>>> feature/email-component
  res.json(updated);
};

export const deleteTask = (req: Request, res: Response) => {
<<<<<<< HEAD
  service.deleteTask(req.params.id as string);
  res.json({ message: "Deleted" });
};

   
=======
  const task = service.getTaskById(req.params.id as string);
  if (!task) return res.status(404).json({ message: "Not found" });

  service.deleteTask(req.params.id as string);
  res.json({ message: "Deleted" });
};
>>>>>>> feature/email-component
