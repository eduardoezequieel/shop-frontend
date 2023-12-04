import Cookies from "js-cookie";
import axios from "axios";
import { BACKEND_URL } from ".";

export const getAxiosInstance = () => {
  const instance = axios.create({
    baseURL: BACKEND_URL,
  });

  instance.interceptors.request.use((originalConfig) => {
    const config = { ...originalConfig };
    const token = Cookies.get("jwtShopToken");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  });

  return instance;
};
