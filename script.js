//seleccionar el boton por el id que esta en el html
const togglebtn = document.getElementById('themeToggle');

//Agregar evento
togglebtn.addEventListener('click', () =>{
    document.body.classList.toggle('dark-theme')
})
