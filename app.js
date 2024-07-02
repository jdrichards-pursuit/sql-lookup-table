const express = require("express");
const cors = require("cors");

const app = express();

const db = require("./db/dbConfig.js");

app.use(cors());
app.use(express.json());

app.get("/recipes/:category_name", async (req, res) => {
  const category_name = req.params.category_name;

  try {
    const query = `
      SELECT recipe_name, category_name
      FROM recipes
      JOIN categories ON recipes.category_id = categories.category_id
      WHERE categories.category_name = $1
    `;
    const recipes = await db.any(query, [category_name]);
    res.json(recipes);
  } catch (err) {
    console.error("Error executing query", err);
    res.status(500).send("Server Error");
  }
});

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
