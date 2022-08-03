const express = require("express");
const router = express.Router();
const { read } = require("../utils/FS.readWrite");

// Controllers
const homeController = require("../controllers/home.controller");
const adminLoginController = require("../controllers/adminLogin.controller");
const adminController = require("../controllers/admin.controller");
const restaurantController = require("../controllers/restaurants.controller");
const mealController = require("../controllers/meals.controller");
const notFoundController = require("../controllers/notFound.controller");

// Models
const categories = read("categories.model.json");
const restaurants = read("restaurants.model.json");

router
  .get("/", homeController.GET)
  .get("/login", adminLoginController.GET)
  .get("/admin", adminController.GET)
  .get(
    categories.map((e) => `/${e.categoryName}`),
    restaurantController.GET
  )
  .get(
    restaurants.map((e) => `/${e.restaurant}`),
    mealController.GET
  )
  .get("/orders", mealController.ORDER_GET)
  .post("/login", adminLoginController.POST)
  .post("/createRestaurant", adminController.RES_POST)
  .post("/createFood", adminController.MEAL_POST)
  .post("/order", mealController.POST)
  .post("/makeOrder", mealController.ORDER_POST)
  .get("/*", notFoundController.GET);

module.exports = router;
