const titre = document.querySelector("h1");
titre.innerText = "Bienvenue dans le mindset CTO !";
// titre.textContent = "Bienvenue dans le mindset CTO !";

const p = document.querySelector("p");
p.style.color = "lightblue";

const liste = document.querySelector("ul");
const newli = document.createElement("li");
newli.innerText = "Former une vision long terme";
liste.appendChild(newli);

const img = document.querySelector("img");
img.remove();

const contactLink = document.querySelectorAll("nav a")[2];
contactLink.setAttribute("href", "mailto:cto@entreprise.com");
// contactLink.href = "mailto:cto@entreprise.com";

const form = document.querySelector("form");
form.style.display = "none"; // flex (ou block) pour afficher le formulaire

const datep = document.createElement("p");
const date = new Date().toLocaleDateString();
datep.innerText = `Date du jour : ${date}`;
titre.parentNode.insertBefore(datep, titre.nextSibling);

const textarea = document.querySelector("textarea");
textarea.setAttribute("placeholder", "Votre question sur la stratégie technique");
// textarea.placeholder = "Votre question sur la stratégie technique";

p.classList.add("important");

const btn = document.createElement("button");
btn.innerText = "Télécharger le guide CTO";
form.parentNode.insertBefore(btn, form.nextSibling);

const items = document.querySelectorAll("li");
console.log(items.length);
