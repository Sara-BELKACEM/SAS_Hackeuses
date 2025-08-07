//Exercice01:
console.log(5 == "5"); // true
console.log(5 === "5"); // false
console.log(10 != 8); // true
console.log(10 !== "10"); // true
console.log(4 < 7); // true
console.log(4 > 7); // false
console.log(7 >= 7); // true
console.log(5 <= 3); // false
console.log("abc" == "abc"); // true
console.log(null == undefined); // true
console.log(null === undefined); // false



//Exercice02:
let a = 6;
let b = "6";
console.log(a == b); // true
let c = 6;
let d = "6";
console.log(c === d); // false
let note = 15;
console.log(note >= 10); // true
let age = 17;
console.log(age >= 18); // false
let isActive = true;
console.log(isActive == 1); // true



//Exercice03:
let a = 20;
let b = 15;
// Compare a et b pour savoir si a est plus grand que b
let estPlusGrand = a > b; // true

let mot1 = "chat";
let mot2 = "chien";
// Vérifie si les deux mots sont identiques
let sontIdentiques = mot1 === mot2; // false

let x = 5;
// Vérifie si x est entre 1 et 10 (inclus)
let inclus = (x >= 1 && x <= 10); //true

let prix = 100;
let solde = 50;
// Vérifie si solde est insuffisant pour payer le prix
let insuffisant = solde < prix ;//true

let nom = "Ali";
let nom2 = "ali";
// Compare les deux noms en tenant compte de la casse
let identiques = nom === nom2; // false 



//Exercice04:
let score = 90;
// Affiche "Excellent" si score > 85
let msgScore = (score > 85) ? "Execellent" : "Bon travail";

let age = 18;
// Affiche "Majeur" si age >= 18 sinon "Mineur"
let statutAge = (age >= 18) ? "Majeur" : "Mineur";

let motDePasse = "azerty";
let confirmation = "azerty";
// Vérifie si les deux champs sont identiques
let idantiques = (motDePasse === confirmation) ? "Identiques" : "Différents";

let produit = "ordinateur";
let categorie = "Ordinateur";
// Compare en ignorant la casse (utilise toLowerCase)
let lowerCase = produit.toLowerCase() === categorie.toLowerCase(); //true

let num1 = 12;
let num2 = 12;
let num3 = "12";
// Quelle est la différence entre == et === pour ces trois ?
num1 == num2      // true (12 == 12, même type et même valeur)
num1 === num2     // true (même type et même valeur)
num1 == num3      // true (12 == "12" → "12" est converti en nombre)
num1 === num3     // false (number !== string)



//Exercice05:
let poids = 70;
let taille = 1.75;
let imc = poids / (taille * taille);
// Vérifie si l’IMC est supérieur à 25
let estSurpoids = imc > 25; // false

let userInput = "";
// Vérifie si l'utilisateur a saisi quelque chose (non vide)
let estSaisi = userInput.trim() !== ""; // false

let stock = 0;
// Affiche "Rupture" si stock est égal à 0
let stockMessage = (stock === 0) ? "Rupture" : "En stock";

let note = 9;
// Affiche "Ajourné" si note < 10, sinon "Admis"
let resultatNote = (note < 10) ? "Ajourné" : "Admis";

let a = null;
let b = undefined;
// Teste les différents cas de comparaison (== et ===)
a == b; // true (null == undefined)
a === b; // false (null !== undefined)