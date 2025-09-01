import restaurantContrller from "../controllers/restaurant.controller.js";
import express from "express";
import authjwt from "../middleware/authjwt.js";
const router = express.Router();

//PORT http://localhost:5000/api/v1/restaurants
router.post("/", restaurantContrller.create);

//GET http://localhost:5000/api/v1/restaurants
router.get("/", restaurantContrller.getAll);

//GET http://localhost:5000/api/v1/restaurants
router.get("/:id", authjwt.verifyToken, restaurantContrller.getById);

//PUT http://localhost:5000/api/v1/restaurants
router.put("/:id", restaurantContrller.Update);

//DELETE http://localhost:5000/api/v1/restaurants
router.delete(
  "/:id",
  authjwt.verifyToken,
  authjwt.IsAdmin,
  restaurantContrller.deleteById
);

export default router;
