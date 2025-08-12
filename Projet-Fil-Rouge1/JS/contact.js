  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
  });
  document.getElementById("telephone").addEventListener("input", function() {
  this.value = this.value.replace(/[^0-9]/g, ""); // t7yd l7orof w symbols
});

  const form = document.getElementById("contact-form");
  form.addEventListener("submit", e => {
    e.preventDefault();
    alert("Merci pour votre message, nous vous contacterons bientôt !");
    form.reset();
  });