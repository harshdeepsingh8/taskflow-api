import { Request, Response } from 'express';
<<<<<<< HEAD
import * as service from '../services/comment.service';

export const createComment = (req: Request, res: Response) => {
  const comment = service.createComment(req.body);
  res.json(comment);
=======
import * as service from '../services/comment.service.js';

export const createComment = (req: Request, res: Response) => {
  res.json(service.createComment(req.body));
>>>>>>> feature/email-component
};

export const getComments = (req: Request, res: Response) => {
  res.json(service.getComments());
<<<<<<< HEAD
=======
};

export const updateComment = (req: Request, res: Response) => {
  const updated = service.updateComment(req.params.id as string, req.body);
  res.json(updated);
};

export const deleteComment = (req: Request, res: Response) => {
  service.deleteComment(req.params.id as string);
  res.json({ message: "Deleted" });
>>>>>>> feature/email-component
};