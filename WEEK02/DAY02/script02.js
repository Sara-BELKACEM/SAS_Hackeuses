// Partie 1 : Boucles simples (for / while / do...while)
for(let i=1 ; i<=20 ; i++) {
    console.log(i);
}

for(let i=0 ; i<10 ; i++){
    console.log("Je progresse");
}

for(let i=100 ; i>=90 ; i--) {
    console.log(i);
}

for(let i=0 ; i<=30; i+=3){
    console.log(i);
}

let motdepasse = "admin123";
while(motdepasse !== "admin123") {
    motdepasse = prompt("Entrez le mot de passe :");
}



// Partie 2 : Boucle + Condition:
for(let i=0 ; i<=50 ; i+=5){
    console.log(i);
}

for(let i=1 ; i<=20 ; i++){
    if(i % 2 === 0){
        console.log(i + " est pair");
    }
    else {
        console.log(i + " est impair");
    }
}

for(let i=1 ; i<=50 ; i++){
    if(i % 7 === 0){
        console.log(i + "Buzz");
    }
}

for(let i=1 ; i<=100 ; i++){
    console.log(i);
    if(i === 42){
        break; 
    }
}

for(let i=1 ; i<=100 ; i++){
    console.log(i);
    if(i === 6 || i === 12 || i === 18){
        continue; 
    }
}




// Partie 3 : Boucle + Tableau:
let prenoms = ["Ali", "Zahra", "Samir", "Lina"];
for(let prenom of prenoms) {
    console.log(prenom);
}

let nombres = [5, 8, 2, 9, 1];
for(let nombre of nombres){
    carre = nombre * nombre;
    console.log("Le carré de " + nombre + " est " + carre);
}

let mot = "javascript";
for(let lettre of mot) {
    console.log(lettre);
}

let mots = ["chat", "girafe", "éléphant", "lion"];
for(let mot of mots){
    console.log(mot + ":" + mot.length + " lettres" );
}

let tab =  [3, 5, 8, 12];
let somme = 0;
for(let nombre of tab){
    somme += nombre;
}
console.log("La somme des nombres est : " + somme);



// Partie 4 : Boucle + Condition + Tableau:
let notes = [9, 12, 5, 17, 10];
for(let note of notes){
    if(note > 10){
        console.log(note);
    }
}

let ages = [16, 21, 15, 18, 30];
for(let age of ages){
    if(age >= 18){
        console.log("Majeur : " + age);
    }
    else {
        console.log("Mineur : " + age);
    }
}

let produits = ["pomme", "banane", "poire", "abricot"];
for(let produit of produits){
    if(produit.split[0] === "p") {
        console.log(produit + " commence par 'p'");
    }
}

let noms = ["Sami", "Sara", "Ali", "Samira"];
for(let nom of noms){
    if(nom.includes("Sa")){
        console.log(nom + " contient 'Sa'");
    }
}

let clients = [ {nom: "Yassine", actif: true}, {nom: "Lina", actif:
false}, {nom: "Nour", actif: true} ];
for(let client of clients){
    if(client.actif){
        console.log(client.nom + " est actif");
    }
}



// Partie 5 : Boucles imbriquées:
for (let i = 0; i < 5; i++) {
  let ligne = "";
  for (let j = 0; j < 5; j++) {
    ligne += "*";
  }
  console.log(ligne);
}

for (let i = 1; i <= 5; i++) {
  console.log(`\nTable de ${i} :`);
  for (let j = 1; j <= 10; j++) {
    console.log(`${i} x ${j} = ${i * j}`);
  }
}

const classes = [["Ali", "Lina"], ["Sara", "Nora"], ["Mehdi"]];
for (let i = 0; i < classes.length; i++) {
  const groupe = classes[i];
  const noms = groupe.join(", ");
  console.log(`Groupe ${i + 1} : ${noms}`);
}

for (let i = 1; i <= 5; i++) {
  let ligne = "";
  for (let j = 1; j <= i; j++) {
    ligne += "*";
  }
  console.log(ligne);
}

const notes = [[10, 12], [8, 14], [9, 11]];
for (let i = 0; i < notes.length; i++) {
  const sousTableau = notes[i];
  let somme = 0;
  for (let j = 0; j < sousTableau.length; j++) {
    somme += sousTableau[j];
  }
  const moyenne = somme / sousTableau.length;
  console.log(`Moyenne du groupe ${i + 1} : ${moyenne}`);
}

