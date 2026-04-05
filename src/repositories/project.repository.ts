let projects: any[] = [];

export const createProject = (project: any) => {
  projects.push(project);
  return project;
};

export const getProjects = () => projects;