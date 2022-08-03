const { read } = require("../utils/FS.readWrite");

module.exports = {
  GET: (_, res) => {
    res.render("adminLogin.view.ejs");
  },
  POST: (req, res) => {
    const { name, password } = req.body;

    const data = read("admin.model.json").find(
      (e) => e.name == name && e.password == password
    );

    if (!data) {
      res.sendStatus(401);
    }

    res.redirect("/admin");
  },
};
