import * as repo from '../repositories/comment.repository';

export const createComment = (comment: any) => repo.createComment(comment);
export const getComments = () => repo.getComments();