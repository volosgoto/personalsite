import { GET_PROJECTS, DELETE_PROJECT } from "./types";

export const getProjects = () => {
  return {
    type: GET_PROJECTS
  };
};

export const deleteProject = id => {
  return {
    type: DELETE_PROJECT,
    payload: id
  };
};
