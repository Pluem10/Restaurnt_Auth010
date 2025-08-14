import api from "./api.js";
import TokenService from "./token.service";

const BASE_URL = import.meta.env.VITE_BASE_URL; // http://localhost:5000/api
const AUTH_API = import.meta.env.VITE_AUTH_API; // /v1/auth

const login = async (username, password) => {
  const url = `${BASE_URL}${AUTH_API}/signin`; // รวมเป็น full URL
  const response = await api.post(url, { username, password });
  if (!response.data.token) {
    return response;
  }
  TokenService.setUser(response.data); // เก็บ token ลง localStorage
  return response;
};

const register = async (username, name, email, password) => {
  const url = `${BASE_URL}${AUTH_API}/signup`;
  return api.post(url, { username, name, email, password });
};

const logout = () => {
  TokenService.removeUser();
};

const AuthService = { register, login, logout };
export default AuthService;
