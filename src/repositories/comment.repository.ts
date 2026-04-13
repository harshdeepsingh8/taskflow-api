let comments: any[] = [];

export const createComment = (comment: any) => {
  comments.push(comment);
  return comment;
};

export const getComments = () => comments;

export const getCommentById = (id: string) => comments.find((comment) => comment.id === id);

export const updateComment = (id: string, updatedComment: any) => {
  const index = comments.findIndex((comment) => comment.id === id);
  if (index === -1) return null;
  comments[index] = { ...comments[index], ...updatedComment };
  return comments[index];
};

export const deleteComment = (id: string) => {
  const index = comments.findIndex((comment) => comment.id === id);
  if (index === -1) return false;
  comments.splice(index, 1);
  return true;
};