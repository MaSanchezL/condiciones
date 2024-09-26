function Border() {
  var nombreClase = "agregarBorde";
  var imagen = document.getElementById("imagenPrincipal");
  var contieneClase = imagen.classList.contains(nombreClase);

  if (contieneClase) {
    imagen.classList = "";
  } else {
    imagen.classList += nombreClase;
  }
}