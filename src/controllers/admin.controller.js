const { read, write } = require("../utils/FS.readWrite");

module.exports = {
  GET: (_, res) => {
    const categories = read("categories.model.json");
    const restaurants = read("restaurants.model.json");
    const orders = read("orders.model.json");

    res.render("admin.view.ejs", { categories, restaurants, orders });
  },
  RES_POST: (req, res) => {
    const { restaurant, imgLink, category } = req.body;
    const restaurants = read("restaurants.model.json");

    const arr = [];

    restaurant
      .trim()
      .split("")
      .forEach((e) => {
        e == " " ? arr.push("-") : arr.push(e);
      });

    restaurants.push({
      id: restaurants.at(-1)?.id + 1 || 1,
      restaurant: arr.join(""),
      category,
      imgLink: imgLink.trim(),
    });

    write("restaurants.model.json", restaurants);

    res.redirect("/admin");
  },
  MEAL_POST: (req, res) => {
    const { meal, imgLink, price, restaurant } = req.body;
    const meals = read("meals.model.json");

    const arr = [];

    meal
      .trim()
      .split("")
      .forEach((e) => {
        e == " " ? arr.push("-") : arr.push(e);
      });

    meals.push({
      id: meals.at(-1)?.id + 1 || 1,
      meal: arr.join(""),
      price: price.trim(),
      restaurant,
      imgLink: imgLink.trim(),
    });

    write("meals.model.json", meals);

    res.redirect("/admin");
  },
};
