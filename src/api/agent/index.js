import OpenAPIClientAxios from "openapi-client-axios";
import { RequestInterceptor } from "../interceptor";
export async function UseClient() {
  const api = new OpenAPIClientAxios({
    definition: process.env.REACT_APP_API_END_POINT,
  });
  api.init();
  const client = await api.getClient();
  if (!client.interceptors.request.handlers.length) {
    client.interceptors.request.use(...RequestInterceptor);
  }
  return client;
}

// import axios from "axios";
 
// // import store from "../../redux/store/store";
 
// export const API_BASE_URL = "http://10.10.9.32:8000/api/v1";
 
// export const AxiosInstance = axios.create({
//   baseURL: API_BASE_URL,
// });
 
// // Add a request interceptor
// AxiosInstance.interceptors.request.use(
//   function (config) {
//     // Do something before request is sent
//     const token = localStorage.getItem("token");
//     console.log("token: ", token);
//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }
//     console.log("config: ", config);
//     return config;
//   },
//   function (error) {
//     // Do something with request error
//     return Promise.reject(error);
//   }
// );
 
// // Add a response interceptor
// AxiosInstance.interceptors.response.use(
//   function (response) {
//     // Any status code that lie within the range of 2xx cause this function to trigger
//     // Do something with response data
//     return response;
//   },
//   function (error) {
//     // Any status codes that falls outside the range of 2xx cause this function to trigger
//     // Do something with response error
//     return Promise.reject(error);
//   }
// );
