

/*Primera Pantala:*/
const capturarContraseña = document.getElementById("botonInicio");
const obtenerContraseña = document.getElementById("contraseña");
botonInicio.addEventListener("click",() =>
{
  if (obtenerContraseña.value === "laboratoria") {
    alert("Contraseña Correcta");
    document.getElementById("pantalla2.1").classList.remove("ocultar");
    document.getElementById("pantalla1").classList.add("ocultar");
  }
    else {
      
    }
} );


/*
var contador = 0;
var fin_contador = 3;
var iniciado = false;
function cuenta(){
if(contador >= fin_contador){
    alert("Contraseña Incorrecta  ... Vuelve a intentarlo");
}else{
    alert("Intentos maximo");
    fin_contador = fin_contador - 1;
}*/

// Funciona para contar y mostrar el numero de clicks
let cuenta = (function(){
    let contador = 0;
    return function(){
        return contador ++;
        }
      })  ();

function mostrarContador(){
  document.getElementById("numIntentos").innerHTML = cuenta();
  if (cuenta() == 1){
      alert ("Vuelve a intentar. Te quedan 2 intentos");
    }
    else if (cuenta() == 2) {
      alert ("Vuelve a intentar. Te queda 1 intento");
    }
    else  if (cuenta() == 3) {
      alert ("Vuelve a intentar. Es tu último intento");
    }
    else {
      alert ("Agotaste tus intentos de ingreso");
      document.getElementById("pantallaBloqueo").classList.remove("ocultar");
      document.getElementById("pantalla2.2").classList.add("ocultar");
      document.getElementById("pantalla2.1").classList.add("ocultar");
      document.getElementById("pantalla1").classList.add("ocultar");

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


/*Segunda Pantala:*/
/*Elección de opciones:*/
const eleccionOpcion1 = document.getElementById("bEncritar");
eleccionOpcion1.addEventListener("click",() =>
{
    document.getElementById("pantalla2.1").classList.remove("ocultar");
    document.getElementById("pantalla2.2").classList.add("ocultar");
    document.getElementById("pantalla1").classList.add("ocultar");
} );

const eleccionOpcion2 = document.getElementById("bDesencriptar");
eleccionOpcion2.addEventListener("click",() =>
{
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
