//Partie 1 – Déclaration & accès aux éléments:
let panier = ["pomme", "banane", "kiwi"];
console.log(panier[0]);
console.log(panier[panier.length - 1]);
panier[1] = "orange";
console.log(panier);
panier.push("fraise");
console.log(panier);
panier.unshift("mangue");
console.log(panier);
panier.pop();
console.log(panier);


//Partie 2 – Méthodes classiques:
console.log(panier.length);
console.log(panier.includes("kiwi")); 
console.log(panier.indexOf("pomme"));
let panier1 = panier.slice(1, 3);
console.log(panier); 
panier.splice(panier.length/2,1); // milieu
panier.splice(1, 0, "cerise", "raisin");
console.log(panier);


//Partie 3 – Tableaux imbriqués:
let panierCategories = [
["pomme", "banane"],
["lait", "fromage"],
["savon", "shampoing"]
];
console.log(panierCategories[1][0]); 
panierCategories[2][1] = "gel douche";
console.log(panierCategories);
panierCategories.push(["poulet", "steak"]);
console.log(panierCategories);
console.log(panierCategories[3]);
