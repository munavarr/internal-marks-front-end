import axios from "axios";

const localBaseUrl = 'http://127.0.0.1:8000';

export const AxiosApi = axios.create({
  baseURL: localBaseUrl,
  withCredentials: true,
});

AxiosApi.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers["Authorization"] = "Token " + token;
  } else {
    console.log("error");
  }

  return config;
});
