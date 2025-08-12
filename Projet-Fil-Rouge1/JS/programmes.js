        const menuToggle = document.querySelector('.menu-toggle');
        const navLinks = document.querySelector('.nav-links');
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });

   const apiUrl = "http://localhost:3000/programmes";

const container = document.getElementById("programmes-container");
const addBtn = document.getElementById("add-program-btn");
const form = document.getElementById("add-program-form");

// Fonction pour afficher les programmes
function loadProgrammes() {
  axios.get(apiUrl)
    .then(response => {
      const data = response.data;
      container.innerHTML = ""; 

      data.forEach(programme => {
        const skillsList = programme.skills.join(", ");
        const card = document.createElement("div");
        card.className = "card";

        card.innerHTML = `
          <h3>${programme.title}</h3>
          <p><strong>Description:</strong> ${programme.description}</p>
          <p><strong>Durée:</strong> ${programme.duration}</p>
          <p><strong>Compétences:</strong> ${skillsList}</p>
          <button class="card-btn">En savoir plus</button>
        `;

        container.appendChild(card);
      });
    })
    .catch(error => {
      console.error("Erreur lors du chargement des programmes:", error);
      container.innerHTML = "<p>Erreur de chargement des programmes.</p>";
    });
}

loadProgrammes();

// Afficher/masquer formulaire
addBtn.addEventListener("click", () => {
  form.style.display = form.style.display === "none" ? "block" : "none";
});

// Ajouter un nouveau programme
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const newProgramme = {
    title: document.getElementById("title").value.trim(),
    description: document.getElementById("description").value.trim(),
    duration: document.getElementById("duration").value.trim(),
    skills: document.getElementById("skills").value.split(",").map(s => s.trim())
  };

  axios.post(apiUrl, newProgramme)
    .then(() => {
      loadProgrammes();
      form.reset();
      form.style.display = "none";
    })
    .catch(() => alert("Erreur lors de l'ajout"));
});
