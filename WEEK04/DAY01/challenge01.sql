-- 🔶 Contexte 1 : Gestion d’une Bibliothèque Scolaire
-- 1. 2. | Entité  | Attributs                                                                |
--       | ------- | ------------------------------------------------------------------------ |
--       | Livre   | `id_livre` (PK), `titre`, `auteur`, `année_publication`, `isbn`, `genre` |
--       | Élève   | `id_eleve` (PK), `nom`, `prenom`, `classe`, `email`                      |
--       | Emprunt | `id_emprunt` (PK), `id_eleve` (FK), `id_livre` (FK), `date_emprunt`      |

-- 3. Relations :
--    Un élève peut emprunter plusieurs livres → Relation N:M via Emprunt
--    Un livre peut être emprunté plusieurs fois par différents élèves → Relation N:M

-- 4. Clés :
--    Livre : id_livre (PK)
--    Élève : id_eleve (PK)
--    Emprunt : id_emprunt (PK), id_eleve (FK), id_livre (FK)

-- 5.
 TABLE Livre (
    id_livre INT PRIMARY KEY,
    titre VARCHAR(100),
    auteur VARCHAR(100),
    annee_publication INT,
    isbn VARCHAR(20),
    genre VARCHAR(50)
);

TABLE Eleve (
    id_eleve INT PRIMARY KEY,
    nom VARCHAR(50),
    prenom VARCHAR(50),
    classe VARCHAR(20),
    email VARCHAR(100)
);

TABLE Emprunt (
    id_emprunt INT PRIMARY KEY,
    id_eleve INT,
    id_livre INT,
    date_emprunt DATE,
    FOREIGN KEY (id_eleve) REFERENCES Eleve(id_eleve),
    FOREIGN KEY (id_livre) REFERENCES Livre(id_livre)
);


-- 🔶 Contexte 2 : Système d’Inscriptions Universitaires
-- 1. 2. | Entité      | Attributs                                                                      |
--       | ----------- | ------------------------------------------------------------------------------ |
--       | Étudiant    | `id_etudiant` (PK), `nom`, `prenom`, `email`, `filiere`                        |
--       | Cours       | `id_cours` (PK), `intitule`, `semestre`, `enseignant`, `credits`               |
--       | Inscription | `id_inscription` (PK), `id_etudiant` (FK), `id_cours` (FK), `date_inscription` |

-- 3. Relations :
--    Un étudiant peut s’inscrire à plusieurs cours → Relation N:M via Inscription
--    Un cours peut avoir plusieurs étudiants inscrits → Relation N:M

-- 4. Clés :
--    Étudiant : id_etudiant (PK)
--    Cours : id_cours (PK)
--    Inscription : id_inscription (PK), id_etudiant (FK), id_cours (FK)

-- 5.
 TABLE Etudiant (
    id_etudiant INT PRIMARY KEY,
    nom VARCHAR(50),
    prenom VARCHAR(50),
    email VARCHAR(100),
    filiere VARCHAR(50)
);

TABLE Cours (
    id_cours INT PRIMARY KEY,
    intitule VARCHAR(100),
    semestre VARCHAR(20),
    enseignant VARCHAR(100),
    credits INT
);

TABLE Inscription (
    id_inscription INT PRIMARY KEY,
    id_etudiant INT,
    id_cours INT,
    date_inscription DATE,
    FOREIGN KEY (id_etudiant) REFERENCES Etudiant(id_etudiant),
    FOREIGN KEY (id_cours) REFERENCES Cours(id_cours)
);


-- 🔶 Contexte 3 : Gestion des Commandes d’un Restaurant
-- 1. 2. | Entité   | Attributs                                                             |
--       | -------- | --------------------------------------------------------------------- |
--       | Client   | `id_client` (PK), `nom`, `prenom`, `telephone`, `email`               |
--       | Plat     | `id_plat` (PK), `nom_plat`, `prix`, `categorie`                       |
--       | Commande | `id_commande` (PK), `id_client` (FK), `id_plat` (FK), `date_commande` |

-- 3. Relations :
--    Un client peut commander plusieurs plats → Relation N:M via Commande
--    Un plat peut être commandé par plusieurs clients → Relation N:M

-- 4. Clés :
--    Client : id_client (PK)
--    Plat : id_plat (PK)
--    Commande : id_commande (PK), id_client (FK), id_plat (FK)

-- 5.
 TABLE Client (
    id_client INT PRIMARY KEY,
    nom VARCHAR(50),
    prenom VARCHAR(50),
    telephone VARCHAR(20),
    email VARCHAR(100)
);

TABLE Plat (
    id_plat INT PRIMARY KEY,
    nom_plat VARCHAR(100),
    prix DECIMAL(5,2),
    categorie VARCHAR(50)
);

TABLE Commande (
    id_commande INT PRIMARY KEY,
    id_client INT,
    id_plat INT,
    date_commande DATE,
    FOREIGN KEY (id_client) REFERENCES Client(id_client),
    FOREIGN KEY (id_plat) REFERENCES Plat(id_plat)
);
