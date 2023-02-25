import axios from "axios";
import { BASE_URL } from "@/utils/constants/constants";


export const ContentType = () => ({
  "Content-Language": "RU",
});

const instanse = axios.create({
  baseURL: BASE_URL,
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

instanse.interceptors.request.use(
  (req) => handleRequest(req),
  (err) => handleError(err)
);

instanse.interceptors.response.use(
  (res) => handleResponse(res),
  (err) => handleError(err)
);

export default instanse;
