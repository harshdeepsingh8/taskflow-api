import { Request, Response } from 'express';
import * as service from '../services/comment.service.js';

export const createComment = (req: Request, res: Response) => {
  res.json(service.createComment(req.body));
};

export const getComments = (req: Request, res: Response) => {
  res.json(service.getComments());
};

export const updateComment = (req: Request, res: Response) => {
  const updated = service.updateComment(req.params.id as string, req.body);
  res.json(updated);
};

export const deleteComment = (req: Request, res: Response) => {
  service.deleteComment(req.params.id as string);
  res.json({ message: "Deleted" });
};