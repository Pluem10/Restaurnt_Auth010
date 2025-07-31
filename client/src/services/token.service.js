//ใส่ไฟล์ token
import axios from "axios"; //นำเข้า axios เพื่อใช้ในการทำ request
const getUser = () => {
  return JSON.parse(localStorage.getItem("user")); //แปะข้อมูล user จาก localStorage
};
const setUser = (user) => {
  localStorage.setItem("user", JSON.stringify(user)); //แปะข้อมูล user เข้าไปใน localStorage
};

const getLocalAccessToken = () => {
  const user = getUser(); //ดึงข้อมูล user จาก localStorage
  return user?.token; //ส่ง token กลับไป  // ? คือถ้าไม่มี user จะส่ง undefined กลับไป
};

const removeUser = () => {
    localStorage.removeItem("user"); //ลบข้อมูล user ออกจาก localStorage
}
const TokenService = { //สร้าง TokenService เพื่อให้สามารถนำไปใช้ในไฟล์อื่นได้
    getUser, 
    setUser,
    getLocalAccessToken,
    removeUser
}
export default TokenService; //ส่งออก TokenService เพื่อให้สามารถนำไปใช้ในไฟล์อื่นได้