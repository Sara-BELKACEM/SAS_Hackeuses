-- Création de la base de données
CREATE DATABASE BibliothequeDB;
USE BibliothequeDB;

-- Table : Élèves
CREATE TABLE Eleves (
    id_eleve INT AUTO_INCREMENT PRIMARY KEY,
    nom VARCHAR(100) NOT NULL,
    prenom VARCHAR(100) NOT NULL,
    classe VARCHAR(50),
    email VARCHAR(100) UNIQUE
);

-- Table : Livres
CREATE TABLE Livres (
    id_livre INT AUTO_INCREMENT PRIMARY KEY,
    titre VARCHAR(255) NOT NULL,
    auteur VARCHAR(150),
    editeur VARCHAR(150),
    genre_litteraire VARCHAR(100),
    nombre_pages INT
);

-- Table : Exemplaires
CREATE TABLE Exemplaires (
    id_exemplaire INT AUTO_INCREMENT PRIMARY KEY,
    id_livre INT,
    etat VARCHAR(100), 
    disponibilite BOOLEAN DEFAULT TRUE,
    FOREIGN KEY (id_livre) REFERENCES Livres(id_livre) ON DELETE CASCADE
);

-- Table : CarteBibliotheque
CREATE TABLE CarteBibliotheque (
    id_carte INT AUTO_INCREMENT PRIMARY KEY,
    id_eleve INT,
    date_emission DATE,
    FOREIGN KEY (id_eleve) REFERENCES Eleves(id_eleve) ON DELETE CASCADE
);

-- Table : Emprunts
CREATE TABLE Emprunts (
    id_emprunt INT AUTO_INCREMENT PRIMARY KEY,
    id_exemplaire INT,
    id_eleve INT,
    date_emprunt DATE NOT NULL,
    date_retour DATE,
    FOREIGN KEY (id_exemplaire) REFERENCES Exemplaires(id_exemplaire) ON DELETE CASCADE,
    FOREIGN KEY (id_eleve) REFERENCES Eleves(id_eleve) ON DELETE CASCADE
);



INSERT INTO Eleves (id_eleve, nom, prenom, classe, email)
VALUES (101, 'Sofia', 'El Amrani', '1ère A', 'sofia.elamrani@example.com');

INSERT INTO Livres (id_livre, titre, auteur, editeur, genre_litteraire, nombre_pages)
VALUES (10, '1984', 'George Orwell', 'Secker & Warburg', 'Dystopie', 328);

INSERT INTO Exemplaires (id_exemplaire, id_livre, etat, disponibilite)
VALUES (1001, 10, 'neuf', TRUE);

INSERT INTO CarteBibliotheque (id_carte, id_eleve, date_emission)
VALUES (5001, 101, '2024-09-01');

INSERT INTO Emprunts (id_emprunt, id_exemplaire, id_eleve, date_emprunt, date_retour)
VALUES (9001, 1001, 101, '2024-09-10', NULL);



UPDATE Eleves
SET classe = '2ème B'
WHERE id_eleve = 101;

UPDATE Exemplaires
SET etat = 'abîmé'
WHERE id_exemplaire = 1001;

UPDATE CarteBibliotheque
SET date_emission = '2024-08-30'
WHERE id_carte = 5001;

UPDATE Emprunts
SET date_retour = '2024-09-20'
WHERE id_emprunt = 9001;



DELETE FROM Eleves
WHERE id_eleve = 101
AND NOT EXISTS (
    SELECT 1
    FROM Emprunts
    WHERE id_eleve = 101 AND date_retour IS NULL
);


DELETE FROM Exemplaires
WHERE disponibilite = FALSE;


DELETE FROM CarteBibliotheque
WHERE id_carte = 5001;
