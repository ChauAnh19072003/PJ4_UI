import axios from "axios";
const API_URL = "http://localhost:8080/api/auth/";

const register = (username, email, password, confirmPassword) => {
  return axios.post(API_URL + "signup", {
    username,
    email,
    password,
    confirmPassword,
  });
};

const login = async (email, password) => {
  const response = await axios.post(API_URL + "signin", {
    email,
    password,
  });
  if (response.data.accessToken) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};

const forgotPassword = async (email) => {
  const response = await axios.post(API_URL + "forgot-password", {
    email,
  });
  return response.data;
};

const resetPassword = async (token, password, confirmPassword) => {
  const response = await axios.put(API_URL + "reset-password", {
    token,
    password,
    confirmPassword,
  });

  return response.data;
};

const logout = async () => {
  const user = JSON.parse(localStorage.getItem("user"));
  if (user && user.accessToken) {
    await axios.post(API_URL + "logout");
    localStorage.removeItem("user");
  }
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

const isLoggedIn = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  return user && user.accessToken;
};
const AuthService = {
  register,
  login,
  logout,
  getCurrentUser,
  isLoggedIn,
  forgotPassword,
  resetPassword,
};

export default AuthService;
