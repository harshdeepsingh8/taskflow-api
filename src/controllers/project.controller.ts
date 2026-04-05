import { Request, Response } from 'express';
import * as service from '../services/project.service';

export const createProject = (req: Request, res: Response) => {
  const project = service.createProject(req.body);
  res.json(project);
};

export const getProjects = (req: Request, res: Response) => {
  res.json(service.getProjects());
};