import axiosInstance from "./axiosInstance";

export const postService = (actionUrl, data) => {
  return axiosInstance.post(`${actionUrl}`, data);
};

export const getService = (actionUrl, id) => {
  return axiosInstance.get(`${actionUrl}`, id);
};

export const deleteService = (actionUrl, id) => {
  return axiosInstance.delete(`${actionUrl}`, id);
};

export const patchService = (actionUrl, data) => {
  return axiosInstance.patch(`${actionUrl}`, data);
};