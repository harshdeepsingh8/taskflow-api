let comments: any[] = [];

export const createComment = (comment: any) => {
  comments.push(comment);
  return comment;
};

export const getComments = () => comments;