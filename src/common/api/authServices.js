import axiosClient from "./axiosClient";

const LOGIN_PATH = "/api/v1/auth/login";

const login = (username, password) => {
  return axiosClient.post(LOGIN_PATH, { username, password });
};

const authServices = {
  login,
};

export default authServices;
