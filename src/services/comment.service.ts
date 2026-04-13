import * as repo from '../repositories/comment.repository';

export const createComment = (comment: any) => repo.createComment(comment);
export const getComments = () => repo.getComments();
export const getCommentById = (id: string) => repo.getCommentById(id);
export const updateComment = (id: string, comment: any) => repo.updateComment(id, comment);
export const deleteComment = (id: string) => repo.deleteComment(id);