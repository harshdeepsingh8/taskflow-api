let projects: any[] = [];

export const createProject = (project: any) => {
  projects.push(project);
  return project;
};

export const getProjects = () => projects;

export const getProjectById = (id: string) => {
  return projects.find(p => p.id === id);
};

export const updateProject = (id: string, data: any) => {
  const index = projects.findIndex(p => p.id === id);
  if (index !== -1) {
    projects[index] = { ...projects[index], ...data };
    return projects[index];
  }
};

export const deleteProject = (id: string) => {
  projects = projects.filter(p => p.id !== id);
};