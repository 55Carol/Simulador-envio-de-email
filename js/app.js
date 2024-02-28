document.addEventListener("DOMContentLoaded", function () {
    //seleccionar los elementos de la interfas (cada caja)

    const inputEmail = document.querySelector("#email");
    const inputAsunto = document.querySelector("#asunto");
    const inputMensaje = document.querySelector("#mensaje");

    //Asignar eventos 
    inputEmail.addEventListener("blur", validar);
    inputAsunto.addEventListener("blur", validar);
    inputMensaje.addEventListener("blur", validar);
    
    function validar(e) {
        console.log(e.target.value);
    }
});