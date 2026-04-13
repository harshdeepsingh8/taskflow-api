import { Request, Response } from 'express';
import * as service from '../services/project.service.js';

export const createProject = (req: Request, res: Response) => {
  res.json(service.createProject(req.body));
};

export const getProjects = (req: Request, res: Response) => {
  res.json(service.getProjects());
};

export const updateProject = (req: Request, res: Response) => {
  const updated = service.updateProject(req.params.id as string, req.body);
  res.json(updated);
};

export const deleteProject = (req: Request, res: Response) => {
  service.deleteProject(req.params.id as string);
  res.json({ message: "Deleted" });
};