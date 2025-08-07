//Exercice01:
let personne = {
    nom : "Sara",
    age : 19,
}
console.log(personne.nom);


//Exercice02:
personne.age = 20;
console.log(personne.age);


//Exercice03:
personne.profession = "Etudiante";
console.log(personne.profession);


//Exercice04:
function presentation(personne){
    return `Bonjour, je m'appelle ${personne.nom} et j'ai ${personne.age} ans.`;
}
console.log(presentation(personne));


//Exercice05:
let etudiant = {
    nom : "Sara",
    notes : [15, 18, 20, 12, 14],
    moyenne : function() {
        let somme = 0;
        for (let i = 0 ; i < this.notes.length; i++) {
            somme += this.notes[i]; 
        }
        return somme / this.notes.length;
}
}
console.log(etudiant.moyenne());