// DEPENDENCIES
const express = require("express");
const cors = require("cors");

// CONFIGURATION
const app = express();

// import the controller in order to tell the application to use the specific resource's controller
const bookmarksController = require("./controllers/bookmarksController.js");

// MIDDLEWARE PACKAGES
app.use(cors());

//MIDDLEWARE FOR CONTROLLERS
// I want to use the bookMarkController routes with this base url
app.use("/api/bookmarks", bookmarksController);

// ROUTES
app.get("/", (req, res) => {
  res.send("Welcome to Bookmarks App");
});

// 404 PAGE
app.get("*", (req, res) => {
  res.json({ error: "Page not found" });
});
// EXPORT
module.exports = app;
