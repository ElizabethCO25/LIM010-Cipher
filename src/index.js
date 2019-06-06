

/*Primera Pantala:*/
const capturarContraseña = document.getElementById("capturarContraseña");
const obtenerContraseña = document.getElementById("contraseña");
capturarContraseña.addEventListener("click",() =>
{
  if (obtenerContraseña.value === "laboratoria") {
    alert("Contraseña Correcta");
    document.getElementById("contenedor").classList.remove("ocultar");
    document.getElementById("pantalla1").classList.add("ocultar");
  }
    else {
      alert("Contraseña Incorrecta  ... Vuelve a intentarlo");
    }
} );


/*Segunda Pantala:*/
