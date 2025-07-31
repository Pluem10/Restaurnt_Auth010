import axios from "axios";
const baseURL = import.meta.env.VITE_BESE_URL;
import TokenService from "./token.service";

const instance = axios.create({
  baseURL: baseURL,
  headers: {
    "Content-Type": "application/json", //คุยกันเป็น json
  },
});

// Add  interceptor to request object
instance.interceptors.request.use(
  (config) => {
    const token = TokenService.getLocalAccessToken(); //ดึง token จากที่ไหนก็ได้ เช่น login
    if (token) {
      config.headers["x-access-token"] = token; //ใส่ token เข้าไปใน header
    }
    return config; //ส่ง config กลับไป
  },
  (error) => {
    return Promise.reject(error);
  }
);
export default instance;
