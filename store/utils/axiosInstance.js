import axios from "axios";
import Cookies from "js-cookie";

export const token = Cookies.get("token");

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    Authorization: "Bearer " + token,
  },
});

export default axiosInstance;
