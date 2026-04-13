let projects: any[] = [];

export const createProject = (p: any) => { projects.push(p); return p; };
export const getProjects = () => projects;
export const updateProject = (id: string, data: any) => {
  const i = projects.findIndex(p => p.id === id);
  if (i !== -1) return projects[i] = { ...projects[i], ...data };
};
export const deleteProject = (id: string) => {
  projects = projects.filter(p => p.id !== id);
};