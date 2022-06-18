import axios from "axios";

export const api = axios.create({
  baseURL: "www.thecocktaildb.com/api/json/v1/1",
});
