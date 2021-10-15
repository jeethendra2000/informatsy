import axios from "axios";
import Cookies from "js-cookie";
export const access_token = Cookies.get("access_token");
export const refresh_token = Cookies.get("refresh_token");
export const authAxios = axios.create({
  baseURL: `${process.env.React_App_SERVER_API}/api/`,
  headers: {
    accept: "application/json",
  },
});
export const axiosinfo = axios.create({
  baseURL: `${process.env.React_App_SERVER_API}/api/`,
});
authAxios.interceptors.request.use(
  (config) => {
    const token = Cookies.get("access_token");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    console.log("no access token");
    return Promise.reject(error);
  }
);
authAxios.interceptors.response.use(
  (response) => {
    return response;
  },
  async function (error) {
    const originalRequest = error.config;

    if (typeof error.response === "undefined") {
      // alert(
      //   "A server/network error occurred.check your's active internet connection"
      // );
      console.log("network error");
      return Promise.reject(error);
    }

    if (
      error.response.status === 401 &&
      originalRequest.url ===
        `${process.env.React_App_SERVER_API}/api/token/refresh/`
    ) {
      return Promise.reject(error);
    }

    if (
      error.response.data.code === "token_not_valid" &&
      error.response.status === 401 &&
      error.response.statusText === "Unauthorized"
    ) {
      const refreshToken = Cookies.get("refresh_token");

      if (refreshToken) {
        const tokenParts = JSON.parse(atob(refreshToken.split(".")[1]));

        // exp date in token is expressed in seconds, while now() returns milliseconds:
        const now = Math.ceil(Date.now() / 1000);
        console.log(now);
        console.log(tokenParts.exp);
        console.log(now);
        if (tokenParts.exp > now) {
          return authAxios
            .post("/token/refresh/", { refresh: Cookies.get("refresh_token") })
            .then((response) => {
              Cookies.set("access_token", response.data.access, {
                expires: 1 / 48,
              });
              authAxios.defaults.headers["Authorization"] =
                "Bearer " + response.data.access;
              originalRequest.headers["Authorization"] =
                "Bearer " + response.data.access;
              return authAxios(originalRequest);
            })
            .catch((err) => {
              // originalRequest._retry = true;
              console.log(err);
              window.location.href = "/";
            });
        } else {
          console.log("Refresh token is expired", tokenParts.exp, now);
          window.location.href = "/login/";
        }
      } else {
        console.log("Refresh token not available.");
        window.location.href = "/login/";
      }
    }

    // specific error handling done elsewhere
    originalRequest._retry = true;

    return Promise.reject(error);
  }
);
