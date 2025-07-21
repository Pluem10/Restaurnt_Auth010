import express from "express";
const router = express.Router();
import authcontroller from "../controllers/auth.controllers.js";
//POST http://localhost:5000/api/v1/auth/signup
router.post("/signup", authcontroller.signUp);

export default router;
