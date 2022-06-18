import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

const config: AxiosRequestConfig = {
  baseURL: "https://www.thecocktaildb.com/api/json/v1/1",
};
export const api: AxiosInstance = axios.create(config);
