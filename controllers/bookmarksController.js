// we need to import express to create the router for the resource. In this case the resource is bookmarks
const express = require("express");

// we need to create a Router which is a way to reference in app.js this file
const bookmarks = express.Router();

// I want to return the data as json from the model using my controller
const bookmarksArray = require("../models/bookmark.model.js");

// create get route to return json data to the client

bookmarks.get("/", (req, res) => {
  res.json({ bookmarks: bookmarksArray });
});

bookmarks.get("/:id", (req, res) => {
  const { id } = req.params;

  const bookmark = bookmarksArray.find((bookmark) => bookmark.id === +id);

  res.json({ bookmark });
});

// export line 5 bookmarks variable to be used in the app.js file
module.exports = bookmarks;
