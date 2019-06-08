

/*Primera Pantala:*/
const capturarContraseña = document.getElementById("botonInicio");
const obtenerContraseña = document.getElementById("contraseña");
botonInicio.addEventListener("click",() =>
{
  if (obtenerContraseña.value === "LABORATORIA") {
    alert("Contraseña Correcta");
    document.getElementById("pantalla2").classList.remove("ocultar");
    document.getElementById("pantalla1").classList.add("ocultar");
    contraseña.value = "";
  }
    else {
      contraseña.value = "";
    }
} );




// Funciona para contar y mostrar el número de clicks
let cuenta = (function(){
    let contador = 3;
    return function(){
        return contador --;
        }
      })  ();

function mostrarContador(){
  document.getElementById("numIntentos").innerHTML = cuenta();
  if (cuenta() === 0){
    alert ("Agotaste tus intentos de ingreso");
    document.getElementById("pantallaBloqueo").classList.remove("ocultar");
    document.getElementById("pantalla2.2").classList.add("ocultar");
    document.getElementById("pantalla2.1").classList.add("ocultar");
    document.getElementById("pantalla1").classList.add("ocultar");
  }
    else {
      alert ("Vuelve a intentar");
        }
    };







//Contador de clicks en "INICIAR"
/*function Contar() {
  let contador = 0;
  document.getElementById("botonInicio").onclick = function Contar(){
    contador ++;
  }
}*/

//Desabilitar botón de ingreso

/*  const cuentaClicks = document.getElementById("botonInicio");
  cuentaClicks.addEventListener("click",() =>
  {
    let contador = 0;
      contador ++;
  if(contador.value === 4)
  {
    botonInicio.disable = true;
    alert("Superaste el número de intentos permitidos - No podrás ingresar por ahora");
  }
    else {
      botonInicio.disable = false;
    }
  }
);*/


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

// Función botón RESET:
const capturarClickReset = document.getElementById("bReset");
const textoIng = document.getElementById("textArea1");
const textoObt = document.getElementById("textArea2");
capturarClickReset.addEventListener("click",() =>
  {
    textoIng.value = " ";
    textoObt.value = " ";
  }
);
// Función botón SALIR:
const eleccionSalir = document.getElementById("bSalir");
eleccionSalir.addEventListener("click",() =>
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


//Pantalla 2.1 - Encriptar:

/*const clickEncriptar = document.getElementById("bencriptar");
const capturarTextoE = document.getElementById("textArea1");
bencriptar.addEventListener("click",() =>
{
    document.getElementById(textArea2).value=capturarTexto;
  }
    else {
      contraseña.value = "";
    }
 );*/
