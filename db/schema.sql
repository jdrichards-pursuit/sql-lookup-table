-- db/schema.sql
DROP DATABASE IF EXISTS recipe_joins;
CREATE DATABASE recipe_joins;

\c recipe_joins;

CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    email VARCHAR(255)
);

CREATE TABLE categories (
 category_id SERIAL PRIMARY KEY,
 category_name VARCHAR(255) NOT NULL
);

CREATE TABLE recipes (
 recipe_id SERIAL PRIMARY KEY,
 recipe_name VARCHAR(255) NOT NULL,
 ingredients TEXT,
 instructions TEXT,
 user_id INTEGER REFERENCES users(user_id),
 category_id INTEGER REFERENCES categories (category_id)
);

