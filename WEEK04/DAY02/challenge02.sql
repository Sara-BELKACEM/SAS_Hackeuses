-- 1. Création de la base de données
CREATE DATABASE IF NOT EXISTS ecommerce;

-- 2. Création des tables

CREATE TABLE categories (
    category_id INT AUTO_INCREMENT PRIMARY KEY,
    category_name VARCHAR(100) NOT NULL
);

CREATE TABLE products (
    product_id INT AUTO_INCREMENT PRIMARY KEY,
    product_name VARCHAR(150) NOT NULL,
    category_id INT NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    stock INT NOT NULL,
    FOREIGN KEY (category_id) REFERENCES categories(category_id)
);

CREATE TABLE customers (
    customer_id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    email VARCHAR(150) NOT NULL UNIQUE,
    city VARCHAR(100),
    country VARCHAR(100)
);

CREATE TABLE orders (
    order_id INT AUTO_INCREMENT PRIMARY KEY,
    customer_id INT NOT NULL,
    order_date DATE NOT NULL,
    status VARCHAR(50) NOT NULL,
    FOREIGN KEY (customer_id) REFERENCES customers(customer_id)
);

CREATE TABLE order_items (
    order_item_id INT AUTO_INCREMENT PRIMARY KEY,
    order_id INT NOT NULL,
    product_id INT NOT NULL,
    quantity INT NOT NULL,
    FOREIGN KEY (order_id) REFERENCES orders(order_id),
    FOREIGN KEY (product_id) REFERENCES products(product_id)
);

CREATE TABLE payments (
    payment_id INT AUTO_INCREMENT PRIMARY KEY,
    order_id INT NOT NULL,
    payment_date DATE NOT NULL,
    amount DECIMAL(10,2) NOT NULL,
    payment_method VARCHAR(50) NOT NULL,
    FOREIGN KEY (order_id) REFERENCES orders(order_id)
);

-- 3. Insertion des données exemples

INSERT INTO categories (category_name) VALUES
('Informatique'), ('Maison'), ('Mode'), ('Livres');

INSERT INTO products (product_name, category_id, price, stock) VALUES
('Ordinateur Portable', 1, 1500.00, 10),
('Clavier', 1, 50.00, 100),
('Chaise de bureau', 2, 85.00, 25),
('T-shirt', 3, 20.00, 200),
('Roman Policier', 4, 15.00, 150);

-- Exemple d'insertion clients
INSERT INTO customers (first_name, last_name, email, city, country) VALUES
('Alice', 'Dupont', 'alice.dupont@email.com', 'Paris', 'France'),
('Bob', 'Martin', 'bob.martin@email.com', 'Lyon', 'France'),
('Claire', 'Durand', 'claire.durand@email.com', 'Marseille', 'France');

-- Exemple d'insertion commandes
INSERT INTO orders (customer_id, order_date, status) VALUES
(1, '2025-07-01', 'livrée'),
(2, '2025-07-02', 'en cours'),
(1, '2025-07-03', 'annulée');

-- Exemple d'insertion order_items
INSERT INTO order_items (order_id, product_id, quantity) VALUES
(1, 1, 1),  -- 1 ordinateur portable pour la commande 1
(1, 2, 2),  -- 2 claviers pour la commande 1
(2, 3, 1),  -- 1 chaise de bureau pour la commande 2
(2, 4, 3);  -- 3 t-shirts pour la commande 2

-- Exemple d'insertion paiements
INSERT INTO payments (order_id, payment_date, amount, payment_method) VALUES
(1, '2025-07-01', 1600.00, 'Carte bancaire'),
(2, '2025-07-02', 145.00, 'PayPal');

-- Niveau 1 — Bases simples
-- 1. Affiche le nom et le prix des produits, avec alias "PrixProduit"
SELECT product_name, price AS PrixProduit
FROM products;

-- 2. Affiche les emails distincts des clients
SELECT DISTINCT email
FROM customers;

-- 3. Liste les produits dont le prix est strictement supérieur à 50
SELECT product_name, price
FROM products
WHERE price > 50;

-- 4. Affiche les clients qui habitent soit à Casablanca, soit à Rabat
SELECT first_name, last_name, city
FROM customers
WHERE city = 'Casablanca' OR city = 'Rabat';

-- 5. Affiche les produits dont le nom contient le mot "bureau"
SELECT product_name
FROM products
WHERE product_name LIKE '%bureau%';




-- Niveau 2 — Conditions avancées
-- 6. Liste les commandes du client « Ahmed » avec leur statut, sauf celles annulées
SELECT order_id, status
FROM orders
WHERE customer_id = (
    SELECT customer_id
    FROM customers
    WHERE first_name = 'Ahmed'
)
AND status NOT LIKE 'annulée';

-- 7. Affiche les produits avec un stock entre 10 et 100
SELECT product_name, stock
FROM products
WHERE stock BETWEEN 10 AND 100;

-- 8. Affiche les clients qui habitent dans les pays ‘Maroc’ ou ‘Algérie’
SELECT first_name, last_name, country
FROM customers
WHERE country IN ('Maroc', 'Algérie');

-- 9. Affiche les produits qui ne sont pas dans la catégorie « Mode »
SELECT product_name
FROM products
WHERE category_id NOT IN (
    SELECT category_id
    FROM categories
    WHERE category_name = 'Mode'
);



-- Niveau 3 — Tri, limites et pagination
-- 10. Liste les 5 produits les plus chers, triés du plus cher au moins cher
SELECT product_name, price
FROM products
ORDER BY price DESC
LIMIT 5;

-- 11. Affiche les 3 derniers clients inscrits (ID décroissant)
SELECT customer_id, first_name, last_name
FROM customers
ORDER BY customer_id DESC
LIMIT 3;

-- 12. Affiche 3 produits, à partir du 3e produit (offset 2)
SELECT product_name, price
FROM products
ORDER BY product_id
LIMIT 3 OFFSET 2;



-- Niveau 4 — Groupement et fonctions d’agrégation
-- 13. Affiche le nombre total de commandes par client (prénom + nom)
SELECT first_name, last_name,
    (
        SELECT COUNT(*)
        FROM orders
        WHERE orders.customer_id = customers.customer_id
    ) AS total_commandes
FROM customers;

-- 14. Affiche le chiffre d’affaires total par produit (prix × quantité vendue)
SELECT product_name,
    (
        SELECT SUM(oi.quantity) * p.price
        FROM order_items oi
        WHERE oi.product_id = p.product_id
    ) AS chiffre_affaires
FROM products p;

-- 15. Affiche les catégories où le prix moyen des produits est supérieur à 50
SELECT category_name
FROM categories
WHERE (
    SELECT AVG(price)
    FROM products
    WHERE products.category_id = categories.category_id
) > 50;



-- Niveau 5 — Exercices avancés
-- 16. Affiche les clients ayant passé plus d’une commande
SELECT first_name, last_name
FROM customers
WHERE (
    SELECT COUNT(*)
    FROM orders
    WHERE orders.customer_id = customers.customer_id
) > 1;

-- 17. Affiche la somme des paiements par méthode de paiement
SELECT payment_method,
       SUM(amount) AS total_paye
FROM payments
GROUP BY payment_method;

-- 18. Affiche la liste des produits commandés au moins une fois (sans doublons)
SELECT product_name
FROM products
WHERE product_id IN (
    SELECT DISTINCT product_id
    FROM order_items
);

-- 4. Affiche chaque client et le montant total qu’il a payé
SELECT first_name, last_name,
    (
        SELECT SUM(amount)
        FROM payments
        WHERE order_id IN (
            SELECT order_id
            FROM orders
            WHERE orders.customer_id = customers.customer_id
        )
    ) AS total_paye
FROM customers;

-- 5. Affiche les produits avec leur catégorie, triés par catégorie puis par prix croissant
SELECT product_name,
       (
           SELECT category_name
           FROM categories
           WHERE categories.category_id = products.category_id
       ) AS categorie,
       price
FROM products
ORDER BY categorie ASC, price ASC;

