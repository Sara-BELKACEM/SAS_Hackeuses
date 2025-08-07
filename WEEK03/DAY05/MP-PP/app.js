const form = document.getElementById('projectForm');
const list = document.getElementById('projectList');

// 🔁 STEP 1: Load all projects on page load
function loadProjects() {
  axios.get('http://localhost:4000/projets')
    .then(response => {
      const projects = response.data;
      projects.forEach(project => {
        createCard(project);
      });
    })
    .catch(error => {
      console.error('Erreur de chargement des projets:', error);
    });
}

// 🧱 STEP 2: Create card function
function createCard(project) {
  const card = document.createElement('div');
  card.className = 'project-card';
  card.dataset.id = project.id;

  card.innerHTML = `
    <img src="${project.image}" alt="${project.title}">
    <h3>${project.title}</h3>
    <p>${project.description}</p>
    <button class="delete-button">🗑️</button>
  `;

  // 🗑 DELETE button logic
  const deleteBtn = card.querySelector('.delete-button');
  deleteBtn.addEventListener('click', function () {
    const confirmDelete = confirm("Voulez-vous vraiment supprimer ce projet ?");
    if (!confirmDelete) return;

    axios.delete(`http://localhost:4000/projets/${project.id}`)
      .then(() => {
        card.remove();
      })
      .catch(error => {
        console.error("Erreur lors de la suppression:", error);
      });
  });

  list.appendChild(card);
}

// ✍️ STEP 3: Handle form submission (ADD project)
form.addEventListener('submit', function (e) {
  e.preventDefault();

  const title = document.getElementById('title').value.trim();
  const description = document.getElementById('description').value.trim();
  const image = document.getElementById('image').value.trim();

  if (!title || !description || !image) {
    alert("Tous les champs sont obligatoires !");
    return;
  }

  const newProject = { title, description, image };

  axios.post('http://localhost:4000/projets', newProject)
    .then(response => {
      createCard(response.data);
      form.reset();
    })
    .catch(error => {
      console.error("Erreur lors de l'ajout du projet:", error);
    });
});

loadProjects();
