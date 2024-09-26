function verificar() {
    var idDivMensaje = "mensaje";
    var numero1 = document.getElementById("numero1").value;
    var numero2 = document.getElementById("numero2").value;
    var numero3 = document.getElementById("numero3").value;
  
    var combinacion = numero1 + numero2 + numero3;
  
    if (combinacion === "911") {
      document.getElementById(idDivMensaje).innerHTML = "Password 1 Correcto";
    } else if (combinacion === "714") {
      document.getElementById(idDivMensaje).innerHTML = "Password 2 Correcto";
    } else {
      document.getElementById(idDivMensaje).innerHTML = "Password Incorrecto";
    }
  }