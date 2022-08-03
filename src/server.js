require("dotenv").config();
const express = require("express");
const ejs = require("ejs");
const path = require("path");
const router = require("./routes/routes");
const PORT = process.env.PORT;
const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(router);

app.listen(PORT, console.log(PORT));
