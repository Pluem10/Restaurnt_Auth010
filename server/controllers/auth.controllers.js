import db from "../models/index.js";
const User = db.User;
const Role = db.Role;
import bcrypt from "bcryptjs"; //เข้ารหัสผ่าน
import jwt from "jsonwebtoken"; //สร้าง token
import { Op } from "sequelize"; //สำหรับการค้นหาข้อมูล

const authController = {};

authController.signUp = async (req, res) => {
  const { username, name, email, password } = req.body;
  if (!username || !name || !email || !password) {
    res.status(400).send({ message: "ส่งข้อมูลไม่ครบถ้วน" });
    return;
  }
  // SELECT * FROM users WHERE username = username
  await User.findOne({ where: { username } })
    .select(-password)
    .then((user) => {
      if (user) {
        res.status(400).send({ message: "Username already exists!" });
        return;
      }
      const newUser = { username, name, email, password };
      User.create(newUser)
        .then((user) => {
          //กรณีเเอดมิน ส่ง
          if (req.body.roles) {
            //SELECT * FROM roles WHERE name = roles OR name = role2
            Role.findAll({
              where: {
                name: { [Op.or]: req.body.roles },
              },
            }).then((roles) => {
              user.setRoles(roles).then(() => {
                res.send({ message: "ลงทะเบียนสำเร็จ" });
              });
            });
          } else {
            //กรณีผู้ใช้ทั่วไป
            user.setRoles([1]).then(() => {
              res.send({ message: "ลงทะเบียนสำเร็จ" });
            });
          }
        })
        .catch((error) => {
          res.status(500).send({
            message: error.message || "เกิดข้อผิดพลาดขณะลงทะเบียนผู้ใช้",
          });
        });
    });
};

export default authController;
