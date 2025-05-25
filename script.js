//selecionar el boton que esta en html
let btn = document.getElementById("themeToggle");

//agregar evento al realizar cli
btn.addEventListener("click",() =>{
    document.body.classList.toggle("themeToggle");
});
