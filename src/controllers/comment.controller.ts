import { Request, Response } from 'express';
import * as service from '../services/comment.service';

export const createComment = (req: Request, res: Response) => {
  const comment = service.createComment(req.body);
  res.json(comment);
};

export const getComments = (req: Request, res: Response) => {
  res.json(service.getComments());
};

export const updateComment = (req: Request, res: Response) => {
  const updated = service.updateComment(req.params.id as string, req.body);
  if (!updated) return res.status(404).json({ message: 'Not found' });
  res.json(updated);
};

export const deleteComment = (req: Request, res: Response) => {
  const deleted = service.deleteComment(req.params.id as string);
  if (!deleted) return res.status(404).json({ message: 'Not found' });
  res.json({ message: 'Deleted' });
};