let comments: any[] = [];

export const createComment = (c: any) => { comments.push(c); return c; };
export const getComments = () => comments;
export const updateComment = (id: string, data: any) => {
  const i = comments.findIndex(c => c.id === id);
  if (i !== -1) return comments[i] = { ...comments[i], ...data };
};
export const deleteComment = (id: string) => {
  comments = comments.filter(c => c.id !== id);
};