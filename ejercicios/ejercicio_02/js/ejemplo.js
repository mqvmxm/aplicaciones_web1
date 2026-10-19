const boton = document.getElementById("mi_boton");

boton.addEventListener('click', ()=> {
        boton.textContent = "Si funciona";
        boton.style.backgroundColor = "blue";

        console.log("Clic el dia:", new Date().toLocaleDateString());
        console.log("otro texto");
    }
);