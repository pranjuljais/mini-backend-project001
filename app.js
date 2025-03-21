const express = require("express");

const app = express();

const bodyParser = require("body-parser");
const { name } = require("ejs");

const usersData = [];

app.set("view engine", "ejs");
app.set("views", "views");

app.use(bodyParser.urlencoded({ extended: false }));
app.get("/", (req, res, next) => {
  res.render("index", { pageTitle: "Add User" });
});

app.get("/users", (req, res, next) => {
  res.render("users", { pageTitle: "Users", users: usersData });
});

app.post("/add-user", (req, res, next) => {
  usersData.push({ name: req.body.username });
  res.redirect("/users");
});

app.listen(3000);
