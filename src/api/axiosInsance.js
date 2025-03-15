import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://dcf8364f0be33e91.mokky.dev",
  headers: {
    Accept: "application/json",
  },
});
