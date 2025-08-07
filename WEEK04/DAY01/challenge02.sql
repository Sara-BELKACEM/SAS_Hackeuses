-- 🔶 Exercice 1 : Université — Base de données UniversiteDB

CREATE DATABASE UniversiteDB;

CREATE TABLE Etudiants (
    id_etudiant INT PRIMARY KEY AUTO_INCREMENT,
    nom VARCHAR(50),
    prenom VARCHAR(50),
    email VARCHAR(100)
);

CREATE TABLE Cours (
    id_cours INT PRIMARY KEY AUTO_INCREMENT,
    intitule VARCHAR(100),
    credits INT,
    semestre INT
);

CREATE TABLE Inscriptions (
    id_inscription INT PRIMARY KEY AUTO_INCREMENT,
    id_etudiant INT,
    id_cours INT,
    date_inscription DATE,
    FOREIGN KEY (id_etudiant) REFERENCES Etudiants(id_etudiant),
    FOREIGN KEY (id_cours) REFERENCES Cours(id_cours)
);



-- 🔶 Exercice 2 : Restaurant — Base de données RestaurantDB

CREATE DATABASE RestaurantDB;

CREATE TABLE Clients (
    id_client INT PRIMARY KEY AUTO_INCREMENT,
    nom VARCHAR(50),
    prenom VARCHAR(50),
    telephone VARCHAR(20)
);

CREATE TABLE Plats (
    id_plat INT PRIMARY KEY AUTO_INCREMENT,
    nom_plat VARCHAR(100),
    prix DECIMAL(6,2)
);

CREATE TABLE Commandes (
    id_commande INT PRIMARY KEY AUTO_INCREMENT,
    id_client INT,
    id_plat INT,
    date_commande DATE,
    quantite INT,
    FOREIGN KEY (id_client) REFERENCES Clients(id_client),
    FOREIGN KEY (id_plat) REFERENCES Plats(id_plat)
);

