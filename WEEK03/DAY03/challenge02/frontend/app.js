const API_URL = 'http://localhost:4000/recipes';

document.addEventListener('DOMContentLoaded', () => {
  const recettesList = document.getElementById('recettes-list');
  const formAjout = document.getElementById('form-ajout');

  // 📥 1. Afficher toutes les recettes (GET)
  function afficherRecettes() {
    fetch(API_URL)
      .then(res => res.json())
      .then(recettes => {
        recettesList.innerHTML = '';
        recettes.forEach(r => {
          const recetteEl = document.createElement('div');
          recetteEl.innerHTML = `
            <h3>${r.title}</h3>
            <p><strong>Ingrédients:</strong> ${r.ingredients.join(', ')}</p>
            <p><strong>Instructions:</strong> ${r.steps}</p>
            <p><strong>Durée:</strong> <span>${r.duration}</span></p>
            <input type="text" placeholder="Nouvelle durée" id="duration-${r.id}" />
            <button onclick="modifierDuree(${r.id})">Modifier Durée</button>
            <button onclick="supprimerRecette(${r.id})">🗑️ Supprimer</button>
            <hr />
          `;
          recettesList.appendChild(recetteEl);
        });
      })
      .catch(console.error);
  }

  // ➕ 2. Ajouter une recette (POST)
  formAjout.addEventListener('submit', e => {
    e.preventDefault();
    const title = document.getElementById('title').value;
    const ingredients = document.getElementById('ingredients').value.split(',').map(i => i.trim());
    const steps = document.getElementById('steps').value;
    const duration = document.getElementById('duration').value;

    fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, ingredients, steps, duration }),
    })
      .then(res => res.json())
      .then(() => {
        formAjout.reset();
        afficherRecettes();
      })
      .catch(console.error);
  });

  // ✏️ 3. Modifier la durée d’une recette (PATCH)
  window.modifierDuree = function(id) {
    const nouvelleDuree = document.getElementById(`duration-${id}`).value;
    if (!nouvelleDuree) return;

    fetch(`${API_URL}/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ duration: nouvelleDuree }),
    })
      .then(res => res.json())
      .then(() => afficherRecettes())
      .catch(console.error);
  };

  // 🗑️ 4. Supprimer une recette (DELETE)
  window.supprimerRecette = function(id) {
    fetch(`${API_URL}/${id}`, {
      method: 'DELETE',
    })
      .then(() => afficherRecettes())
      .catch(console.error);
  };

  // Charger les recettes au démarrage
  afficherRecettes();
});
