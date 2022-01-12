import axios from "axios";

const httpClient = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL,
  timeout: 1000,
  headers: {
    "Content-Type": "application/json",
  },
});

// Redundant code but for now leave todo maybe clean up so singular function that calls an action
async function get(path) {
  let response = {};
  try {
    response = await httpClient.get(path);
  } catch (error) {
    response.error = error;
  }
  return response;
}

async function put(path, params) {
  let response = null;
  try {
    response = await httpClient.put(path, ...params);
  } catch (error) {
    response.error = error;
  }
  return response;
}
async function post(path, params) {
  let response = null;
  try {
    response = await httpClient.post(path, ...params);
  } catch (error) {
    response.error = error;
  }
  return response;
}
async function deleteCall(path, params) {
  let response = null;
  try {
    response = await httpClient.delete(path, ...params);
  } catch (error) {
    response.error = error;
  }
  return response;
}
// eslint-disable-next-line no-unused-vars
const api = {
  get,
  put,
  post,
  delete: deleteCall,
};
const getListgroups = () => api.get("/groups");

const getGroupOfUsers = (groupId) => api.get(`/groups/${groupId}/users`);
const createUser = (params) => api.post("/user", params);
const updateUser = (params) => api.put("/user", params);
const deleteUser = (id) => api.delete("/user", { id });

const createGroup = (params) => api.post("/group", params);
const updateGroup = (params) => api.post("/group", params);
const deleteGroup = (params) => api.post("/group", params);
const getGroup = (params) => api.post("/group", params);

export {
  getListgroups,
  getGroupOfUsers,
  createUser,
  updateUser,
  deleteUser,
  createGroup,
  updateGroup,
  deleteGroup,
  getGroup,
};
