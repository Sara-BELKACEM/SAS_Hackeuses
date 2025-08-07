const recettesList = document.getElementById("recettes-list");

// 1. Display all recipes
function afficherRecettes() {
  recettesList.innerHTML = ""; // Clear list before loading

  axios.get("http://localhost:4000/recipes")
    .then(res => {
      const recettes = res.data;

      recettes.forEach(recette => {
        const article = document.createElement("article");

        const title = document.createElement("h2");
        const duree = document.createElement("p");
        const ul = document.createElement("ul");
        const instructions = document.createElement("p");

        title.textContent = recette.title;
        duree.textContent = `Durée : ${recette.duration}`;
        instructions.textContent = recette.steps;

        recette.ingredients.forEach(ingredient => {
          const li = document.createElement("li");
          li.textContent = ingredient;
          ul.appendChild(li);
        });

        // Input and button to modify duration
        const inputDuree = document.createElement("input");
        inputDuree.type = "text";
        inputDuree.placeholder = "Nouvelle durée";

        const btnModifier = document.createElement("button");
        btnModifier.textContent = "Modifier durée";
        btnModifier.addEventListener("click", () => {
          const nouvelleDuree = inputDuree.value.trim();
          if (!nouvelleDuree) return alert("Entrez une nouvelle durée.");

          axios.patch(`http://localhost:4000/recipes/${recette.id}`, {
            duration: nouvelleDuree
          })
          .then(res => {
            duree.textContent = `Durée : ${res.data.duration}`;
            inputDuree.value = "";
          })
          .catch(err => console.error("Erreur lors de la mise à jour :", err));
        });

        // Button to delete the recipe
        const btnSupprimer = document.createElement("button");
        btnSupprimer.textContent = "Supprimer recette";
        btnSupprimer.style.marginLeft = "10px";
        btnSupprimer.addEventListener("click", () => {
          if (confirm(`Supprimer la recette "${recette.title}" ?`)) {
            axios.delete(`http://localhost:4000/recipes/${recette.id}`)
              .then(() => {
                // Refresh the list after deletion
                afficherRecettes();
              })
              .catch(err => console.error("Erreur lors de la suppression :", err));
          }
        });

        article.appendChild(title);
        article.appendChild(duree);
        article.appendChild(ul);
        article.appendChild(instructions);
        article.appendChild(inputDuree);
        article.appendChild(btnModifier);
        article.appendChild(btnSupprimer);

        recettesList.appendChild(article);
      });
    })
    .catch(err => console.error(err));
}

// 2. Call afficherRecettes on page load
afficherRecettes();

// 3. Handle new recipe form submission
const form = document.getElementById("form-ajout");

form.addEventListener("submit", function (e) {
  e.preventDefault(); 
  const title = document.getElementById("title").value;
  const ingredients = document.getElementById("ingredients").value.split(",").map(i => i.trim());
  const steps = document.getElementById("steps").value;
  const duration = document.getElementById("duration").value;
  const newRecette = {
    title,
    ingredients,
    steps,
    duration
  };

  axios.post("http://localhost:4000/recipes", newRecette)
    .then(res => {
      console.log("Recette ajoutée !", res.data);
      form.reset();       // Clear form inputs
      afficherRecettes(); // Refresh recipe list to show new recipe
    })
    .catch(err => console.error("Erreur lors de l’ajout :", err));
});
