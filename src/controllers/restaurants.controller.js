module.exports = {
  GET: (req, res) => {
    const url = req.url.split("/")[1];
    const restaurants = require("../models/restaurants.model.json").filter(
      (e) => e.category == url
    );

    res.render("restaurant.view.ejs", { restaurants });
  },
};
