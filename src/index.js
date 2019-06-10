

/*Primera Pantala:*/
const capturarContraseña = document.getElementById("botonInicio");
const obtenerContraseña = document.getElementById("contraseña");
let cuenta =2;
botonInicio.addEventListener("click",() =>
{
  if (obtenerContraseña.value === "LABORATORIA") {
    alert("Contraseña Correcta");
    document.getElementById("pantalla2").classList.remove("ocultar");
    document.getElementById("pantalla1").classList.add("ocultar");
    contraseña.value = "";
  }else if (cuenta === 0){
      alert ("Agotaste tus intentos de ingreso");

      document.getElementById("pantallaBloqueo").classList.remove("ocultar");
      document.getElementById("pantalla2.2").classList.add("ocultar");
      document.getElementById("pantalla2.1").classList.add("ocultar");
      document.getElementById("pantalla1").classList.add("ocultar");
      contraseña.value = "";
    }else{
      alert("Vuelve a intentarlo");
      contraseña.value = "";
      cuenta --;
    }

} );


/*SEGUNDA PANTALLA:*/
/*Elección de opciones:*/
const eleccionOpcion1 = document.getElementById("bEncriptar");
eleccionOpcion1.addEventListener("click",() =>
{
    document.getElementById("pantalla2").classList.remove("ocultar");
    document.getElementById("pantalla2.1").classList.remove("ocultar");
    document.getElementById("pantalla2.2").classList.add("ocultar");
    document.getElementById("pantalla1").classList.add("ocultar");
} );

const eleccionOpcion2 = document.getElementById("bDesencriptar");
eleccionOpcion2.addEventListener("click",() =>
{
    document.getElementById("pantalla2").classList.remove("ocultar");
    document.getElementById("pantalla2.2").classList.remove("ocultar");
    document.getElementById("pantalla2.1").classList.add("ocultar");
    document.getElementById("pantalla1").classList.add("ocultar");
} );

//Restricción de ingreso de sólo números en el input de Ofset
function soloNumeros(e){
  key=e.keyCode || e.which;
  teclado=String.fromCharCode(key);
  let numeros="0123456789";
  let especiales="8-37-38-46";//array
  let teclado_especial=false;

  for( let i in especiales){
    if (key==especiales[i]){
      teclado_especial=true;
    }
  }
    if(numeros.indexOf(teclado)==-1 && !teclado_especial){
      return false;
    }
}

// Función botón RESET1:
const capturarClickReset = document.getElementById("bReset1");
const textoIng = document.getElementById("textArea1.1");
const textoObt = document.getElementById("textArea1.2");
capturarClickReset.addEventListener("click",() =>
  {
    textoIng.value = " ";
    textoObt.value = " ";
  }
);
// Función botón SALIR1:
const eleccionSalir = document.getElementById("bSalir1");
eleccionSalir.addEventListener("click",() =>
{
    document.getElementById("pantalla3").classList.remove("ocultar");
    document.getElementById("pantalla2").classList.add("ocultar");
    document.getElementById("pantalla2.1").classList.add("ocultar");
    document.getElementById("pantalla2.2").classList.add("ocultar");
    document.getElementById("pantalla1").classList.add("ocultar");
} );

// Función botón RESET2:
const capturarClickReset2 = document.getElementById("bReset2");
const textoIng2 = document.getElementById("textArea2.1");
const textoObt2 = document.getElementById("textArea2.2");
capturarClickReset2.addEventListener("click",() =>
  {
    textoIng2.value = " ";
    textoObt2.value = " ";
  }
);
// Función botón SALIR2:
const eleccionSalir2 = document.getElementById("bSalir2");
eleccionSalir2.addEventListener("click",() =>
{
    document.getElementById("pantalla3").classList.remove("ocultar");
    document.getElementById("pantalla2").classList.add("ocultar");
    document.getElementById("pantalla2.1").classList.add("ocultar");
    document.getElementById("pantalla2.2").classList.add("ocultar");
    document.getElementById("pantalla1").classList.add("ocultar");
} );


//TERCERA PANTALLA:
// Función botón REGRESAR:
const eleccionRegresar = document.getElementById("bRegresar");
eleccionRegresar.addEventListener("click",() =>
{
    document.getElementById("pantalla2").classList.remove("ocultar");
    document.getElementById("pantalla3").classList.add("ocultar");
    document.getElementById("pantalla2.1").classList.add("ocultar");
    document.getElementById("pantalla2.2").classList.add("ocultar");
    document.getElementById("pantalla1").classList.add("ocultar");
} );


//Mandar el texto de una TXTAREA a otra:
const capturarClickEncrip = document.getElementById("bHacerEncriptar");
const texto = document.getElementById("textArea1.1");
bHacerEncriptar.addEventListener("click",() =>
{
  document.getElementById("textArea1.2").innerHTML= texto.value;
});
