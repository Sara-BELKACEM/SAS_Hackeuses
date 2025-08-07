CREATE DATABASE BibliothequeDB;

CREATE TABLE Eleves (
    id_eleve INT PRIMARY KEY,
    nom VARCHAR(50),
    prenom VARCHAR(50),
    classe VARCHAR(20),
    email VARCHAR(100) UNIQUE
);

CREATE TABLE Livres (
    id_livre INT PRIMARY KEY,
    titre VARCHAR(100),
    auteur VARCHAR(100),
    editeur VARCHAR(100),
    annee_publication INT
);

ALTER TABLE Livres DROP COLUMN annee_publication;
ALTER TABLE Livres ADD genre VARCHAR(50);


CREATE TABLE Exemplaires (
    id_exemplaire INT PRIMARY KEY,
    id_livre INT,
    etat VARCHAR(20),
    disponibilite BOOLEAN,
    FOREIGN KEY (id_livre) REFERENCES Livres(id_livre)
);

ALTER TABLE Exemplaires ADD etat VARCHAR(20);
ALTER TABLE Exemplaires DROP COLUMN etat;


CREATE TABLE CarteBibliotheque (
    id_carte INT PRIMARY KEY,
    id_eleve INT UNIQUE,
    date_emission DATE,
    validite DATE,
    FOREIGN KEY (id_eleve) REFERENCES Eleves(id_eleve)
);

CREATE TABLE Emprunts (
    id_emprunt INT PRIMARY KEY,
    id_exemplaire INT,
    id_eleve INT,
    date_emprunt DATE,
    date_retour DATE,
    FOREIGN KEY (id_exemplaire) REFERENCES Exemplaires(id_exemplaire),
    FOREIGN KEY (id_eleve) REFERENCES Eleves(id_eleve) ON DELETE RESTRICT
);

ALTER TABLE CarteBibliotheque DROP COLUMN validite;
ALTER TABLE Livres ADD nombre_pages INT;

