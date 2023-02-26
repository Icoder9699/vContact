import { API_URL } from '@/utils/constants/constants';
import axios from "axios";

export const ContentType = () => ({
  "Content-Language": "RU",
});

const api = axios.create({
  baseURL: API_URL,
  headers: ContentType(),
});

const handleRequest = (config: any) => {
  return config;
};

const handleResponse = (response: any) => {
  return response;
};

const handleError = (err: any) => {
  console.error(err.code);
  return err;
};

api.interceptors.request.use(
  (req) => handleRequest(req),
  (err) => handleError(err)
);

api.interceptors.response.use(
  (res) => handleResponse(res),
  (err) => handleError(err)
);

export default api;
