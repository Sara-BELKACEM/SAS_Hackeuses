// EX01
let calculerSurface = (longueur , largeur) => {
    return longueur * largeur;
}
console.log(calculerSurface(5, 3));

// EX02
let verifierMajorite = (age) => {
    return age >= 18 ? "Majeur" : "Mineur";
}
console.log(verifierMajorite(20));
console.log(verifierMajorite(15));

// EX03
let creerMessage = (prenom , metier) => {
   return `Bonjour ${prenom}, vous travaillez comme ${metier}. Bienvenue !`;
}
console.log(creerMessage("Sara", "développeuse"));

// EX04
const produit = {
  nom: "Chaussures",
  prixHT: 50,
  tauxTVA: 0.2
};

let afficherPrix = ({nom,prixHT,tauxTVA= 0.2})  => {
    let prixTTC = (prixHT * (1 + tauxTVA)).toFixed(2);
    let montantTVA = (prixTTC - prixHT).toFixed(2);
    return `${nom} : ${prixTTC} € TTC (dont ${montantTVA} € de TVA)`
}
console.log(afficherPrix(produit));

// EX05
const utilisateur = { 
    nom: "Sara",
    age: 19,
    ville: "Mohammedia",
}
let afficherUtilisateur = ({ nom, age, ville }) => {
    return `${nom} a ${age} ans et vit à  ${ville}`;
}
console.log(afficherUtilisateur(utilisateur));

// EX06
let voiture = { 
    marque: "Toyota",
    modele: "Yaris",
    annee: 2020 
}
let afficherVoiture = ({ marque : brand , modele : model , annee }) => {
    return `Concession ${brand} - Modèle ${model} (${annee})`;
}
console.log(afficherVoiture(voiture));

// EX07
const entreprise = {
  nom: "TechCorp",
  siege: {
    ville: "Lyon",
    pays: "France"
  },
  employes: 150
}
let afficherEntreprise = ({ nom, siege: { ville }, employes }) => {
    return `${nom} (siège : ${ville}) - ${employes} salariés`
}
console.log(afficherEntreprise(entreprise));

// EX08
let appliquerRemise = (prix, tauxRemise = 0.2) =>{
    return (prix * (1 - tauxRemise)).toFixed(2);
}
console.log(appliquerRemise(100));
console.log(appliquerRemise(200, 0.3));

// EX09
const fruits = ["pomme", "banane"];
const legumes = ["carotte", "courgette"];
let fusion = [...fruits, ...legumes];
// fusion.unshift("kiwi");
// fusion.push("brocoli");
// console.log(fusion);
let resultat = ["kiwi", ...fusion, "brocoli"];
console.log(resultat);

// EX10
const Utilisateur = {
  nom: "Alice",
  age: 25,
  adresse: {
    ville: "Paris"
  }
};

let copie = {
    ...Utilisateur,
    adresse: {
        ...Utilisateur.adresse,
        ville: "Lyon"
    },
    pays: "France"
}
console.log(Utilisateur);
console.log(copie);

// EX11
let calculerSomme = (...nombres) =>{
    return nombres.reduce((acc, curr) => acc + curr, 0);
//     let somme = 0;
//     for(let nombre of nombres){
//         somme += nombre;
//     }
//     return somme;
 }
console.log(calculerSomme(1, 2, 3, 4, 5));