function totalizar() {
    var idButton1 = "inputSticker1";
    var idButton2 = "inputSticker2";
    var idButton3 = "inputSticker3";
    var idDivMensaje = "mensaje";
    var mensaje = "mensaje desde el js";
  
    var cantidadSticker1 = parseInt(document.getElementById(idButton1).value);
    var cantidadSticker2 = parseInt(document.getElementById(idButton2).value);
    var cantidadSticker3 = parseInt(document.getElementById(idButton3).value);
  
    if (isNaN(cantidadSticker1)) cantidadSticker1 = 0;
    if (isNaN(cantidadSticker2)) cantidadSticker2 = 0;
    if (isNaN(cantidadSticker3)) cantidadSticker3 = 0;
  
    if (cantidadSticker1 < 0) cantidadSticker1 = 0;
    if (cantidadSticker2 < 0) cantidadSticker2 = 0;
    if (cantidadSticker3 < 0) cantidadSticker3 = 0;
  
    document.getElementById(idButton1).value = cantidadSticker1;
    document.getElementById(idButton2).value = cantidadSticker2;
    document.getElementById(idButton3).value = cantidadSticker3;
  
    var total = cantidadSticker1 + cantidadSticker2 + cantidadSticker3;
  
    if (total > 10) {
      mensaje = "Excedes el maximo permitido de 10 stickers en total";
    } else {
      mensaje = "Tienes un total de " + total + ", stickers";
    }
  
    document.getElementById(idDivMensaje).innerHTML = mensaje;
  }