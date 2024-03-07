const express = require("express");

const bookmarks = express.Router();

bookmarks.get("/", (req, res) => {
  res.json({ message: "Get Route" });
});

bookmarks.get("/:id", (req, res) => {
  const { id } = req.params;

  res.json({ message: `Get by id:${id} router` });
});

bookmarks.post("/", (req, res) => {
  res.json({ message: "Post route" });
});

bookmarks.put("/:id", (req, res) => {
  const { id } = req.params;

  res.json({ message: `Update item at id: ${id}` });
});

bookmarks.delete("/:id", (req, res) => {
  const { id } = req.params;

  res.json({ message: `Delete Item based on id: ${id}` });
});

module.exports = bookmarks;
