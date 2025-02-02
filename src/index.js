//Primera Pantalla:
const capturarContraseña = document.getElementById("botonInicio");
const obtenerContraseña = document.getElementById("contraseña");
let cuenta = 2;
capturarContraseña.addEventListener("click", () => {
  if (obtenerContraseña.value === "LABORATORIA") {
    alert("Contraseña Correcta");
    document.getElementById("pantalla2").classList.remove("ocultar");
    document.getElementById("pantalla1").classList.add("ocultar");
    obtenerContraseña.value = "";
  } else if (cuenta === 0) {
    alert("Agotaste tus intentos de ingreso");

    document.getElementById("pantallaBloqueo").classList.remove("ocultar");
    document.getElementById("pantalla2.2").classList.add("ocultar");
    document.getElementById("pantalla2.1").classList.add("ocultar");
    document.getElementById("pantalla1").classList.add("ocultar");
    obtenerContraseña.value = "";
  } else {
    alert("Vuelve a intentarlo");
    obtenerContraseña.value = "";
    cuenta--;
  }

});

//Función ENTER:
let enterIniciar = document.getElementById("contraseña");
enterIniciar.addEventListener("keyup", (event) => {
  if (event.keyCode === 13) {
    event.preventDefault();
    document.getElementById("botonInicio").click();
  }
});

//SEGUNDA PANTALLA:
//Elección de opciones:
const eleccionOpcion1 = document.getElementById("bEncriptar");
eleccionOpcion1.addEventListener("click", () => {
  document.getElementById("pantalla2").classList.remove("ocultar");
  document.getElementById("pantalla2.1").classList.remove("ocultar");
  document.getElementById("pantalla2.2").classList.add("ocultar");
  document.getElementById("pantalla1").classList.add("ocultar");
});

const eleccionOpcion2 = document.getElementById("bDesencriptar");
eleccionOpcion2.addEventListener("click", () => {
  document.getElementById("pantalla2").classList.remove("ocultar");
  document.getElementById("pantalla2.2").classList.remove("ocultar");
  document.getElementById("pantalla2.1").classList.add("ocultar");
  document.getElementById("pantalla1").classList.add("ocultar");
});

//BOTONES RESET:
// Función botón RESET1:
const clickReset1 = document.getElementById("bReset1");
const textoEntrada1 = document.getElementById("textArea1_1");
const textoSalida1 = document.getElementById("textArea1_2");
const offsetEnc = document.getElementById("offset");
clickReset1.addEventListener("click", () => {
  textoEntrada1.value = "";
  textoSalida1.value = "";
  offsetEnc.value = "";
});

// Función botón RESET2:
const clickReset2 = document.getElementById("bReset2");
const textoEntrada2 = document.getElementById("textArea2_1");
const textoSalida2 = document.getElementById("textArea2_2");
const offsetDes = document.getElementById("offset2");
clickReset2.addEventListener("click", () => {
  textoEntrada2.value = "";
  textoSalida2.value = "";
  offsetDes.value = "";
});


//BOTONES SALIR:
// Función botón SALIR1:
const eleccionSalir = document.getElementById("bSalir1");
eleccionSalir.addEventListener("click", () => {
  document.getElementById("pantalla3").classList.remove("ocultar");
  document.getElementById("pantalla2").classList.add("ocultar");
  document.getElementById("pantalla2.1").classList.add("ocultar");
  document.getElementById("pantalla2.2").classList.add("ocultar");
  document.getElementById("pantalla1").classList.add("ocultar");
});

// Función botón SALIR2:
const eleccionSalir2 = document.getElementById("bSalir2");
eleccionSalir2.addEventListener("click", () => {
  document.getElementById("pantalla3").classList.remove("ocultar");
  document.getElementById("pantalla2").classList.add("ocultar");
  document.getElementById("pantalla2.1").classList.add("ocultar");
  document.getElementById("pantalla2.2").classList.add("ocultar");
  document.getElementById("pantalla1").classList.add("ocultar");
});

//TERCERA PANTALLA:
// Función botón REGRESAR:
const eleccionRegresar = document.getElementById("bRegresar");
eleccionRegresar.addEventListener("click", () => {
  document.getElementById("pantalla2").classList.remove("ocultar");
  document.getElementById("pantalla3").classList.add("ocultar");
  document.getElementById("pantalla2.1").classList.add("ocultar");
  document.getElementById("pantalla2.2").classList.add("ocultar");
  document.getElementById("pantalla1").classList.add("ocultar");
});


//ENCRIPTANDO:
//Texto a encriptar:
const clickEncriptar = document.getElementById("bHacerEncriptar");
clickEncriptar.addEventListener("click", () => {
  let textoEncriptado = document.getElementById("textArea1_1").value;
  let numOffset = document.getElementById("offset").value;
  document.getElementById("textArea1_2").value = cipher.encode(numOffset, textoEncriptado);
});

//DESENCRIPTANDO:
//Texto a desencriptar:
const clickDesencriptar = document.getElementById("bHacerDesencriptar");
clickDesencriptar.addEventListener("click", () => {
  let textoDesencriptado = document.getElementById("textArea2_1").value;
  let numOffset2 = document.getElementById("offset2").value;
  document.getElementById("textArea2_2").value = cipher.decode(numOffset2, textoDesencriptado);
});
