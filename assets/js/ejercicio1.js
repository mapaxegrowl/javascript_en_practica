let nombre = document.getElementById("nombre"); /* conseguir el nombre del ID */
let asunto = document.getElementById("asunto"); /* conseguir el nombre del ID */
let mensaje = document.getElementById("mensaje"); /* conseguir el nombre del ID */
let boton = document.getElementById("botton"); /* conseguir el nombre del ID */
let errorNombre = document.querySelector(".errorNombre");
let errorAsunto = document.querySelector(".errorAsunto");
let errorMensaje = document.querySelector(".errorMensaje");
let formulario = document.getElementById("formulario"); /* conseguir el nombre del ID */
let resultado = document.querySelector(".resultado"); 

formulario.addEventListener("submit", enviarFormulario); /* que va a hacer el submit */

function enviarFormulario(e) {
  e.preventDefault(); 

  let letrasRegex = /^[a-zA-Z\s]*$/; /* valiadciones se ingresa en una variable para llamarla */


  if (
    nombre.value !== "" && 
    asunto.value !== "" &&
    mensaje.value !== "" &&
    letrasRegex.test(nombre.value) &&
    letrasRegex.test(asunto.value)
  ) {

    resultado.innerHTML = "Mensaje enviado con éxito !!!";


    nombre.value = ""; /* se le dice que se borre el mensaje y que se limpien los errores */
    asunto.value = "";
    mensaje.value = "";

    // Limpia los errores
    errorNombre.innerHTML = "";
    errorAsunto.innerHTML = "";
    errorMensaje.innerHTML = "";
  } else {
    // Si los campos estan vacíos
    errorNombre.innerHTML = "el nombre es requerido y con solo letras";
    errorAsunto.innerHTML = "el asunto es requerido y con solo letras";
    errorMensaje.innerHTML = "el mensaje es requerido";
  }
}