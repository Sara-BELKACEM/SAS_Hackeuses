//Exercice01:
function saluer() {
    console.log("Bienvenue");
}
saluer();


// //Exercice02:
// function saluerPersonne() {
//     let nom = prompt("Quel est votre nom ?");
//     console.log(`Bonjour, ${nom}!`);
// }
// saluerPersonne();


// //Exercice03:
// function parite() {
//     let nombre = parseInt(prompt("Entrez un nombre entier :"));
//     if (nombre % 2 === 0) {
//         console.log(`${nombre} est pair.`);
//     }
//     else {
//         console.log(`${nombre} est impair.`);
//     }
// }


//Exercice04:
// function carre(nombre){
//     console.log(`Le carré de ${nombre} est ${nombre * nombre}.`);
// }
// let nmbr = parseInt(prompt("Entrez un nombre :"));
// carre(nmbr);



//Exercice05:
// let tab = [1, 2, 3, 4, 5];
// function somme() {
//     let total = 0;
//     for (let i = 0; i < tab.length; i++) {
//         total += tab[i];
//     }
//     return total;
// }
// console.log(somme(tab));


//Exercice06:
// function stockage(){
//     let tab =[];
//     for(let i = 0 ; i < 5 ; i++){
//         let nombres = parseInt(prompt(`Entrez le nombre ${i + 1} :`));
//         tab.push(nombres);
//         // tab[i] = parseInt(prompt(`Entrez le nombre ${i + 1} :`)); // Alternative way to store values
//     }
//     return tab;
// }
// console.log(stockage());


//Exercice07:
let tab = [1, 2, 3, 4, 5];
function maximum() {
    let max = tab[0];
    for(let i = 1 ; i < tab.length; i++){
        if(tab[i] > max){
            max = tab[i];
        }
    }
    return max;
}
console.log(maximum());


//Exercice08:
// function palindrome(mot) {
//     mot = mot.toLowerCase();
//     let motInverse = mot.split('').reverse().join('');
//     return mot === motInverse;
// }
// let saisie = prompt("Entrez un mot :");
// if (palindrome(saisie)) {
//     console.log(`${saisie} est un palindrome.`);
// } else {
//     console.log(`${saisie} n'est pas un palindrome.`);
// }


//Exercice09:
function tableMultiplication(n) {
    for (let i = 1 ; i <= 10 ; i++ ){
        console.log(`${n} x ${i} = ${n * i}`);
    }
}
tableMultiplication(5);


//Exercice10:
function moyenne(){
    let nombre = parseInt(prompt("Combien de notes voulez-vous entrer ?"));
    let notes = [];
    for (let i = 0 ; i < nombre ; i++) {
        let note = parseFloat(prompt(`Entrez la note ${i + 1} :`));
        notes.push(note);
    }
    let somme = 0;
    for (let j = 0 ; j < notes.length ; j++){
        somme += notes[j];
    }
        let moyenne = somme / notes.length;
        console.log(`La moyenne est de ${moyenne}`);
}
moyenne();


