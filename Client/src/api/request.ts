import axios,{type AxiosInstance} from "axios";

const request:AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL + '/api',
  timeout: 5000,
});

request.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers!.Authorization = `Bearer ${token}`;
      return config;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

request.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    const status = error.response?.status;
    if (status === 401) {
    }

    return Promise.reject(error);
  }
);

export default request;
