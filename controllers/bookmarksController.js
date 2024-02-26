// we need to import express to create the router for the resource. In this case the resource is bookmarks
const express = require("express");

// we need to create a Router which is a way to reference in app.js this file
const bookmarks = express.Router();

// I want to return the data as json from the model using my controller
let bookmarksArray = require("../models/bookmark.model.js");

// create get route to return json data to the client

bookmarks.get("/", (req, res) => {
  res.json({ bookmarks: bookmarksArray });
});

//get a single bookmark
bookmarks.get("/:id", (req, res) => {
  const { id } = req.params;

  const bookmark = bookmarksArray.find((bookmark) => bookmark.id === +id);

  res.json({ bookmark });
});

bookmarks.post("/", (req, res) => {
  //grab the information from the form

  // console.log(req.body);

  // i need to fake create a new id. i will take the last id number in the bookmarks array and add 1
  const newId = bookmarksArray[bookmarksArray.length - 1].id + 1;

  // req.body is an object where I receive all the datat from the form. I will add an id to the object
  req.body.id = newId;

  //add data to the end of the array
  bookmarksArray.push(req.body);

  // send back all the bookmarks because I plan to reset the setBookmarks state
  res.json({ bookmarks: bookmarksArray });
});

bookmarks.put("/:id", (req, res) => {
  const { id } = req.params;

  const bookmarkIndex = bookmarksArray.findIndex((log) => log.id === +id);

  if (bookmarkIndex > -1) bookmarksArray[bookmarkIndex] = req.body;

  // send back all the bookmarks because I plan to reset the setBookmarks state
  res.json({ bookmarks: bookmarksArray });
});

bookmarks.delete("/:id", (req, res) => {
  const { id } = req.params;

  bookmarksArray = bookmarksArray.filter((bookmark) => bookmark.id !== +id);

  res.json({ bookmarks: bookmarksArray });
});

// export line 5 bookmarks variable to be used in the app.js file
module.exports = bookmarks;
