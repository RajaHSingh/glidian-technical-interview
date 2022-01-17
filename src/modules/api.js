import axios from "axios";

const httpClient = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL,
  timeout: 1000,
  headers: {
    "Content-Type": "application/json",
  },
});

async function apiAction(action, path, params = null) {
  let response = {};
  let data = null;
  if (params) {
    if (typeof data === "object") {
      data = { ...params };
    } else {
      data = params;
    }
  }
  try {
    switch (action) {
      case "get":
        response = await httpClient.get(path);
        break;
      case "post":
        response = await httpClient.post(path, data);
        break;
      case "put":
        response = await httpClient.put(path, data);
        break;
      case "delete":
        response = await httpClient.delete(path, data);
        break;
    }
  } catch (error) {
    response.error = error;
  }
  return response;
}
async function get(path) {
  return await apiAction("get", path);
}
async function put(path, params) {
  return await apiAction("put", path, params);
}
async function post(path, params) {
  return await apiAction("post", path, params);
}
async function deleteCall(path, params) {
  return await apiAction("delete", path, params);
}
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

const getGroup = (params) => api.get("/group", params);
const createGroup = (params) => api.put("/group", params);
const updateGroup = (params) => api.post("/group", params);
const deleteGroup = (params) => api.delete("/group", params);

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
