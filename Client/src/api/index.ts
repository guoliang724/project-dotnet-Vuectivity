import type { AxiosRequestConfig } from "axios";
import request from "./request";

const http = {
  get<T, D = T>(url: string, config?: AxiosRequestConfig) {
    return request.get<T, D>(url, config);
  },

  post<T, D = T>(url: string, data?: unknown, config?: AxiosRequestConfig) {
    return request.post<T, D>(url, data, config);
  },
  put<T, D = T>(url: string, data?: unknown, config?: AxiosRequestConfig) {
    return request.put<T, D>(url, data, config);
  },
  delete<T, D = T>(url: string, config?: AxiosRequestConfig) {
    return request.delete<T, D>(url, config);
  },
};

export default http;
