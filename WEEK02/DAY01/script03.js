//Exercice 01:
let age = 19;
if (age <= 18){
    console.log("Mineur");
}
else {
    console.log("Majeur");
}


//Exercice 02:
let nombre = 19;
if (nombre % 2 === 0){
    console.log("Pair");
}
else {
    console.log("Impair");
}


//Exercice 03:
let note = 16;
if (note >= 10){
    console.log("Validé");
}
else {
    console.log("Échec");
}



//Exercice 04:
let temperature = 30;
if (temperature < 10){
    console.log("Froid");
}
else if (temparature >= 10 && temperature <= 25){
    console.log("Douce");
}
else {
    console.log("Chaud");
}



//Exercice 05:
let  longueur = "Sara123";
let contientChiffre = true;
if (longueur.length >= 8 && contientChiffre){
    console.log( "Mot de passe sécurisé" );
}
else {
    console.log("Mot de passe faible");
}


//Exercice 06:
let isLoggedIn = true;
let hasPaidSubscription = false;
if (isLoggedIn && hasPaidSubscription) {
    console.log("Accès autorisé");
}
else if (isLoggedIn && !hasPaidSubscription) {
    console.log("Abonnement requis" )
}
else {
    console.log("Connexion requise");
}

//Exercice 07:
let noteMath = 18;
let noteFr = 16;
let noteInfo = 19;
max = noteMath;
if (noteFr > max) {
    max = noteFr;
}
else if (noteInfo > max) {
    max = noteInfo;
}
else {
    max = noteMath;
}
console.log("La matière qui a la meilleure note est : " + max);



//Exercice 08:
let prix = 200;
estMembre = true;
if (estMembre && prix >= 100){
    console.log("Réduction de 10%");
    console.log("Prix total : " + prix - (prix * 0.1));
}
else {
    console.log("Pas de réduction");
    console.log("Prix total : " + prix);
}



//Exercice 09:
let anciennete = 5;
let salaire = 3000;
if (anciennete >= 5){
    salaire += 500;
}
else if (anciennete >= 2 && anciennete < 5){
    salaire += 200;
}
console.log("Salaire final :", salaire);



//Exercice 10:
let moyenne = 16;
if (moyenne >= 10) {
    if (moyenne >= 16){
        console.log("Très bien");
    }
    else if (moyenne >= 14){
        console.log("Bien");
    }
    else if (moyenne >= 12){
        console.log("Assez bien");
    }
    else {
        console.log("Passable");
    }
}
else {
    console.log("Refusé");
}