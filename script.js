// Seleccionar el boton por el ID que esta en el HTML
const toggleBtn = document.getElementById("themeToggle");

//Agregar un evento cuando se hace clic
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
});
