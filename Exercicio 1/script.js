function calc() {
  // Declara às variáveis
  var valor = document.querySelector("#input1").value;
  var valorArray = valor.split("");
  var paridade = "";

  // Regra de negócio par definir se é par ou impar
  if (valorArray[0] % 2 == 0) paridade = "par";
  else paridade = "ímpar";

  // Resultado
  if (valorArray.length == 3) {
    document.querySelector("#result").innerHTML =
      "O número das centenas é " + paridade;
  } else {
    alert("Digite um número com 3 dígitos");
    document.location.reload(true);
  }
}
