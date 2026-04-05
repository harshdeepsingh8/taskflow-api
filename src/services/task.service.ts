import * as repo from '../repositories/task.repository';

export const createTask = (task: any) => repo.createTask(task);
export const getTasks = () => repo.getTasks();
export const getTaskById = (id: string) => repo.getTaskById(id);
export const updateTask = (id: string, data: any) => repo.updateTask(id, data);
export const deleteTask = (id: string) => repo.deleteTask(id);