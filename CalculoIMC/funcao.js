function calcularIMC() {
    var altura = document.getElementById("altura").value; // pelo ID
    var peso   = document.getElementById("peso").value; // pelo ID
    altura /= 100;
    var imc = (peso / (altura * altura)).toFixed(2);
    document.getElementById("resultadoIMC").innerHTML = "IMC: <strong>" + imc + "</strong>";
  }