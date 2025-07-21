import express from "express";
const app = express();
import dotenv from "dotenv";
dotenv.config();
const PORT = process.env.PORT || 5000;
import restaurantRouter from "./routers/restaurant.router.js";
import cors from "cors";
import authRouter from "./routers/auth.router.js";

app.use(
  cors({
    origin: ["http://localhost:5173", "http://127.0.0.1:5173"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

import db from "./models/index.js";
const rolre = db.Role;
db.sequelize.sync({ force: false });
const initRole = () => {
  rolre.create({ id: 1, name: "user" });
  rolre.create({ id: 2, name: "admin" });
  rolre.create({ id: 3, name: "manager" });
};
db.sequelize
  .sync({
    force: false,
  })
  .then(() => {
    initRole();
    console.log("Drop and Sync Db");
  });

app.get("/", (req, res) => {
  res.send("Restaurant Restful API Test New ");
});
app.use("/api/v1/restaurant", restaurantRouter);
app.use("/api/v1/auth", authRouter);

app.listen(PORT, () => {
  console.log("Listening to http://localhost:" + PORT);
});
