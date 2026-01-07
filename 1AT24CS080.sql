CREATE DATABASE EcommerceDB;
USE EcommerceDB;

CREATE TABLE users (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50),
    email VARCHAR(50)
);

CREATE TABLE products (
    product_id INT AUTO_INCREMENT PRIMARY KEY,
    product_name VARCHAR(50),
    price INT
);

CREATE TABLE orders (
    order_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT
);

CREATE TABLE order_items (
    id INT AUTO_INCREMENT PRIMARY KEY,
    order_id INT,
    product_id INT,
    quantity INT
);

INSERT INTO users (name, email) VALUES ('Alice', 'alice@gmail.com');
INSERT INTO users (name, email) VALUES ('Bob', 'bob@gmail.com');

INSERT INTO products (product_name, price) VALUES ('Laptop', 50000);
INSERT INTO products (product_name, price) VALUES ('Phone', 20000);

INSERT INTO orders (user_id) VALUES (1);
INSERT INTO orders (user_id) VALUES (2);

INSERT INTO order_items (order_id, product_id, quantity) VALUES (1, 1, 1);
INSERT INTO order_items (order_id, product_id, quantity) VALUES (2, 2, 2);

SELECT * FROM users;
SELECT * FROM products;
SELECT * FROM orders;
SELECT * FROM order_items;

SELECT users.name, products.product_name, order_items.quantity
FROM users
INNER JOIN orders ON users.user_id = orders.user_id
INNER JOIN order_items ON orders.order_id = order_items.order_id
INNER JOIN products ON order_items.product_id = products.product_id;
