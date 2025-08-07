//🌟 Challenge 1 : Changer la couleur d’un texte
let btn1 = document.getElementById("changerCouleur");
let p = document.getElementById("monTexte");

btn1.addEventListener("click", function(){
    p.style.color = "red";
});


//🌟 Challenge 2 : Ajouter un élément dans le DOM
//🌟 Challenge 3 : Supprimer un élément
let btn2 = document.getElementById("ajoute");
let input = document.getElementById("monInput");
let ul = document.getElementById("maListe");
btn2.addEventListener("click", function(){
    if(input.value !== ""){
        let li = document.createElement("li");
        li.textContent = input.value;

        let btn3 = document.createElement("button");
        btn3.textContent = "Supprimer";
        btn3.addEventListener("click", function() {
            ul.removeChild(li);
        });
        li.appendChild(btn3);

        ul.appendChild(li);
        input.value = ""; //or null 
}});


//🌟 Challenge 4 : Compteur de clics
let btn4 = document.getElementById("clic");
let compteur = document.getElementById("compteur");
let compte = 0;
btn4.addEventListener("click", function(){
    compte++;
    compteur.textContent = "Nombre de clics : " + compte;
})




