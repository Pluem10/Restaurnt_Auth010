import api from "../utils/api";
import TokenService from "./token.service";

const API_URL = import.meta.env.VITE_AUT_API;

const register = async (username, name, email, password) => {
  return api.post(API_URL + "signup", { username, name, email, password });
};

const login = async (username, password) => {
  const response = await api.post(API_URL + "signin", { username, password });
  // ถ้า login สำเร็จจะส่ง token กลับมา
  if (!response.data.token) {
    return response.data; //ถ้า login สำเร็จจะส่ง token กลับไป
}
    TokenService.setUser(response.data); //เก็บ token ลง localStorage
    
};

const logout = () => {
    TokenService.removeUser(); //ลบ token ออกจาก localStorage
}

const AuthService = {
    register,
    login,
    logout,
}
export default AuthService; 