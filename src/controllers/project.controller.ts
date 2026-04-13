import { Request, Response } from 'express';
import * as service from '../services/project.service';

export const createProject = (req: Request, res: Response) => {
  const project = service.createProject(req.body);
  res.json(project);
};

export const getProjects = (req: Request, res: Response) => {
  res.json(service.getProjects());
};

export const getProjectById = (req: Request, res: Response) => {
  const project = service.getProjectById(req.params.id as string);
  if (!project) return res.status(404).json({ message: 'Not found' });
  res.json(project);
};

export const updateProject = (req: Request, res: Response) => {
  const updated = service.updateProject(req.params.id as string, req.body);
  if (!updated) return res.status(404).json({ message: 'Not found' });
  res.json(updated);
};

export const deleteProject = (req: Request, res: Response) => {
  const project = service.getProjectById(req.params.id as string);
  if (!project) return res.status(404).json({ message: 'Not found' });
  service.deleteProject(req.params.id as string);
  res.json({ message: 'Deleted' });
};