const { read } = require("../utils/FS.readWrite");
module.exports = {
  GET: (_, res) => {
    const categories = read("categories.model.json");
    res.render("home.model.ejs", { categories });
  },
};
