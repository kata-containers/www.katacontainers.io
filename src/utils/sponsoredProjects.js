import { getEnvVariable, SPONSORED_PROJECT_ID } from "./envVariables";

export const getSubProjectById = (projects, id) => {
    const subProjects = projects.find(project => project.id === parseInt(getEnvVariable(SPONSORED_PROJECT_ID))).subprojects;    
    return subProjects.find(project => project.id === id);
}