const { read, write } = require("../utils/FS.readWrite");
const map = new Map();

module.exports = {
  GET: (req, res) => {
    const url = req.url.split("/")[1];
    console.log(req.order);
    const meals = read("meals.model.json").filter((e) => e.restaurant == url);
    res.render("meal.view.ejs", { meals });
  },
  POST: (req, res) => {
    const { order } = req.body;

    map.set("order", order);

    res.redirect("/orders");
  },
  ORDER_GET: (req, res) => {
    const order = map.get("order");
    const foundOrder = read("meals.model.json").find((e) => e.id == order);

    res.render("orders.view.ejs", { foundOrder });
  },
  ORDER_POST: (req, res) => {
    const { meal, restaurant, price, amount, customer, address, phone } =
      req.body;
    const orders = read("orders.model.json");

    orders.push({
      id: orders.at(-1)?.id + 1 || 1,
      meal,
      restaurant,
      totalPrice: price * amount,
      amount,
      customer: customer.trim(),
      address: address.trim(),
      phone,
    });

    write("orders.model.json", orders);

    res.redirect("/");
  },
};
