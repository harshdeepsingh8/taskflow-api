import { Request, Response } from 'express';
<<<<<<< HEAD
import * as service from '../services/project.service';

export const createProject = (req: Request, res: Response) => {
  const project = service.createProject(req.body);
  res.json(project);
=======
import * as service from '../services/project.service.js';

export const createProject = (req: Request, res: Response) => {
  res.json(service.createProject(req.body));
>>>>>>> feature/email-component
};

export const getProjects = (req: Request, res: Response) => {
  res.json(service.getProjects());
};

<<<<<<< HEAD
export const getProjectById = (req: Request, res: Response) => {
  const project = service.getProjectById(req.params.id as string);
  res.json(project);
};

=======
>>>>>>> feature/email-component
export const updateProject = (req: Request, res: Response) => {
  const updated = service.updateProject(req.params.id as string, req.body);
  res.json(updated);
};

export const deleteProject = (req: Request, res: Response) => {
  service.deleteProject(req.params.id as string);
  res.json({ message: "Deleted" });
};