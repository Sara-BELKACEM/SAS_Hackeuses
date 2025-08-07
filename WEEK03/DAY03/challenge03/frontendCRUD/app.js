const btnAfficher = document.getElementById("afficher");
const btnAjouter = document.getElementById("ajouter");
const btnModifier = document.getElementById("modifier");
const btnSupprimer = document.getElementById("supprimer");

const form = document.getElementById("recipe-form");
const output = document.getElementById("output");

let selectedRecipeId = null;

// Load recipes
btnAfficher.addEventListener("click", loadRecipes);

// Show form for adding
btnAjouter.addEventListener("click", () => {
  form.reset();
  form.classList.remove("hidden");
  selectedRecipeId = null;
});

// Show form for editing
btnModifier.addEventListener("click", () => {
  if (!selectedRecipeId) {
    alert("Veuillez sélectionner une recette à modifier.");
    return;
  }

  fetch(`http://localhost:4000/recipes/${selectedRecipeId}`)
    .then(res => res.json())
    .then(recipe => {
      document.getElementById("title").value = recipe.title;
      document.getElementById("ingredients").value = recipe.ingredients;
      document.getElementById("steps").value = recipe.steps;
      document.getElementById("duration").value = recipe.duration;
      document.getElementById("recipe-id").value = recipe.id;
      form.classList.remove("hidden");
    });
});

// Delete recipe
btnSupprimer.addEventListener("click", () => {
  if (!selectedRecipeId) {
    alert("Veuillez sélectionner une recette à supprimer.");
    return;
  }

  fetch(`http://localhost:4000/recipes/${selectedRecipeId}`, {
    method: "DELETE"
  }).then(() => {
    alert("Recette supprimée.");
    selectedRecipeId = null;
    loadRecipes();
  });
});

// Handle form submission
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const newRecipe = {
    title: document.getElementById("title").value,
    ingredients: document.getElementById("ingredients").value,
    steps: document.getElementById("steps").value,
    duration: document.getElementById("duration").value
  };

  const id = document.getElementById("recipe-id").value;
  const method = id ? "PUT" : "POST";
  const url = id
    ? `http://localhost:4000/recipes/${id}`
    : `http://localhost:4000/recipes`;

  fetch(url, {
    method,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newRecipe)
  }).then(() => {
    form.classList.add("hidden");
    form.reset();
    loadRecipes();
  });
});

// Load and display recipes
function loadRecipes() {
  fetch("http://localhost:4000/recipes")
    .then(res => res.json())
    .then(data => {
      output.innerHTML = "<h2>📋 Recettes :</h2>";
      if (!data.length) {
        output.innerHTML += "<p>Aucune recette.</p>";
        return;
      }

      data.forEach(recipe => {
        const div = document.createElement("div");
        div.className = "recipe";
        div.innerHTML = `
          <h3>${recipe.title}</h3>
          <p><strong>Ingrédients:</strong> ${recipe.ingredients}</p>
          <p><strong>Instructions:</strong> ${recipe.steps}</p>
          <p><strong>Durée:</strong> ${recipe.duration}</p>
        `;
        div.addEventListener("click", () => {
          document.querySelectorAll(".recipe").forEach(el => el.classList.remove("selected"));
          div.classList.add("selected");
          selectedRecipeId = recipe.id;
        });
        output.appendChild(div);
      });
    });
}
