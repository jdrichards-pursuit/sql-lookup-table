
\c recipe_joins;

INSERT INTO users (user_id, email) VALUES
('1', 'jd@me.com'),
('2', 'memo@me.com'),
('3', 'caren@me.com');

INSERT INTO categories (category_id, category_name ) VALUES
('1', 'breakfast'),
('2', 'lunch'),
('3', 'dinner'),
('4', 'dessert');


INSERT INTO recipes(recipe_id, recipe_name, category_id, user_id) VALUES
('1', 'macaroni and chese', '3','1'),
('2', 'steak tartare', '3','1'),
('3', 'eggs benedect', '1','1'),
('4', 'veggie burger', '2','1');