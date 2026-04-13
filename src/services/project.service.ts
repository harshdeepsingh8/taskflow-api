import * as repo from '../repositories/project.repository';

export const createProject = (project: any) => repo.createProject(project);
export const getProjects = () => repo.getProjects();
export const getProjectById = (id: string) => repo.getProjectById(id);
export const updateProject = (id: string, data: any) => repo.updateProject(id, data);
export const deleteProject = (id: string) => repo.deleteProject(id);