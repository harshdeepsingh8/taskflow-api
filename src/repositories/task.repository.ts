let tasks: any[] = [];

export const createTask = (task: any) => {
  tasks.push(task);
  return task;
};

export const getTasks = () => tasks;

export const getTaskById = (id: string) => {
  return tasks.find(t => t.id === id);
};

export const updateTask = (id: string, data: any) => {
  const index = tasks.findIndex(t => t.id === id);
  if (index !== -1) {
    tasks[index] = { ...tasks[index], ...data };
    return tasks[index];
  }
};

export const deleteTask = (id: string) => {
  tasks = tasks.filter(t => t.id !== id);
};