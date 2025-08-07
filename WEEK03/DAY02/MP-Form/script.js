// Données dynamiques
const sessions = ["matin", "après-midi"];
const options = [
  { label: "🥗 Déjeuner sur place", price: 150, id: "lunch" },
  { label: "🚗 Parking privé", price: 100, id: "parking" },
  { label: "🎁 Pack goodies", price: 50, id: "goodies" }
];

// Injecter les sessions dans la <select>
const sessionSelect = document.getElementById("session");
sessions.forEach(session => {
  const option = document.createElement("option");
  option.value = session;
  option.textContent = session.charAt(0).toUpperCase() + session.slice(1);
  sessionSelect.appendChild(option);
});

// Générer les options supplémentaires
const optionsContainer = document.getElementById("options-container");
options.forEach(opt => {
  const label = document.createElement("label");
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.value = opt.id;
  checkbox.name = "options";
  label.appendChild(checkbox);
  label.insertAdjacentText("beforeend", ` ${opt.label} (+${opt.price}dh)`);
  optionsContainer.appendChild(label);
});

// Validation et confirmation
document.getElementById("registrationForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const session = document.getElementById("session").value;
  const checkboxes = document.querySelectorAll("input[name='options']:checked");

  if (!name || !email || !session) {
    alert("Veuillez remplir tous les champs obligatoires.");
    return;
  }

  const selectedOptions = Array.from(checkboxes).map(cb => {
    const found = options.find(opt => opt.id === cb.value);
    return found ? found.label.split(" ")[1] : cb.value;
  });

  const confirmation = document.getElementById("confirmation-message");
  confirmation.textContent = `Merci ${name} ! Inscription confirmée pour la session "${session}".` +
    (selectedOptions.length > 0 ? ` Options : ${selectedOptions.join(", ")}.` : "");
});
