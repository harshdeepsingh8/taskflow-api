import { Request, Response } from 'express';
import * as service from '../services/comment.service';

export const createComment = (req: Request, res: Response) => {
  const comment = service.createComment(req.body);
  res.json(comment);
};

export const getComments = (req: Request, res: Response) => {
  res.json(service.getComments());
};