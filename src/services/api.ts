import axios from "axios";

const API_BASE_URL = import.meta.env.API_BASE_URL || "http://localhost:8080/";

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    const { response } = error;

    const customError = {
      message: response?.data?.message || "An error has occurred",
      status: response?.status,
      data: response?.data,
    };

    return Promise.reject(customError);
  },
);

export default api;
