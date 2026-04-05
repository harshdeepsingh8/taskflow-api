import * as repo from '../repositories/project.repository';

export const createProject = (project: any) => repo.createProject(project);
export const getProjects = () => repo.getProjects();