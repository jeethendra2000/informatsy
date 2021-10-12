import axios from "axios";
import Cookies from "js-cookie";
export const access_token = Cookies.get("access_token");
export const refresh_token = Cookies.get("refresh_token");
export const authAxios = axios.create({
  baseURL: `${process.env.React_App_SERVER_API}/api/`,
  headers: {
    Authorization: `Bearer ${access_token}`,
  },
});
export const axiosinfo = axios.create({
  baseURL: `${process.env.React_App_SERVER_API}/api/`,
});
